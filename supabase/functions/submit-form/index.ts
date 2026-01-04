import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schemas
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email").max(255, "Email too long"),
  subject: z.string().min(1, "Subject is required").max(200, "Subject too long"),
  message: z.string().min(1, "Message is required").max(5000, "Message too long"),
  from_name: z.string().min(1).max(100).optional(),
});

const volunteerFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email").max(255, "Email too long"),
  phone: z.string().min(1, "Phone is required").max(20, "Phone too long"),
  interest: z.string().min(1, "Interest is required").max(100, "Interest too long"),
  message: z.string().min(1, "Message is required").max(5000, "Message too long"),
  from_name: z.string().min(1).max(100).optional(),
  subject: z.string().min(1).max(200).optional(),
});

const formTypeSchema = z.enum(['contact', 'volunteer']);

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_WINDOW = 5;

function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const submissions = rateLimitMap.get(clientIp) || [];
  
  // Filter to only recent submissions within the window
  const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return false; // Rate limited
  }
  
  // Record this submission
  recentSubmissions.push(now);
  rateLimitMap.set(clientIp, recentSubmissions);
  
  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [ip, times] of rateLimitMap.entries()) {
      const recent = times.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      if (recent.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, recent);
      }
    }
  }
  
  return true;
}

function sanitizeString(str: string): string {
  return str.trim().slice(0, 5000);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ success: false, error: 'Too many submissions. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check payload size (limit to 50KB)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 50000) {
      console.log('Payload too large');
      return new Response(
        JSON.stringify({ success: false, error: 'Request payload too large' }),
        { status: 413, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    
    // Validate form type
    const formTypeResult = formTypeSchema.safeParse(body.formType);
    if (!formTypeResult.success) {
      console.log('Invalid form type:', body.formType);
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid form type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const formType = formTypeResult.data;
    console.log(`Processing ${formType} form submission from IP: ${clientIp}`);
    
    // Validate form data based on type
    const schema = formType === 'contact' ? contactFormSchema : volunteerFormSchema;
    const validationResult = schema.safeParse(body.formData);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      console.log('Validation failed:', errors);
      return new Response(
        JSON.stringify({ success: false, error: `Invalid form data: ${errors}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const validatedData = validationResult.data;
    
    const accessKey = Deno.env.get('WEB3FORMS_ACCESS_KEY');
    
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured');
      throw new Error('Form submission service not configured');
    }

    // Prepare the submission data with sanitized values
    const submissionData: Record<string, string> = {
      access_key: accessKey,
    };
    
    // Sanitize and add each validated field
    for (const [key, value] of Object.entries(validatedData)) {
      if (typeof value === 'string') {
        submissionData[key] = sanitizeString(value);
      }
    }

    console.log('Submitting to Web3Forms...');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();
    
    console.log('Web3Forms response:', result);

    if (!result.success) {
      throw new Error(result.message || 'Form submission failed');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Form submission error:', errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
