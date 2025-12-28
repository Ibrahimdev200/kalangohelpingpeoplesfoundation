import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, formData } = await req.json();
    
    console.log(`Processing ${formType} form submission`);
    
    const accessKey = Deno.env.get('WEB3FORMS_ACCESS_KEY');
    
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured');
      throw new Error('Form submission service not configured');
    }

    // Prepare the submission data
    const submissionData = {
      access_key: accessKey,
      ...formData,
    };

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
