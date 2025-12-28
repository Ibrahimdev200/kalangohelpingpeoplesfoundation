import { useState } from "react";
import { Heart, Users, HandHeart, GraduationCap, Megaphone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

import program6 from "@/assets/program-6.jpg";

const volunteerAreas = [
  {
    icon: Megaphone,
    title: "Outreach & Awareness",
    description: "Help spread our message and mobilize support for our programs.",
  },
  {
    icon: HandHeart,
    title: "Field Support",
    description: "Join our team on the ground during food distributions and community events.",
  },
  {
    icon: GraduationCap,
    title: "Education & Mentoring",
    description: "Support students through tutoring, mentoring, and educational programs.",
  },
  {
    icon: Users,
    title: "Administrative Support",
    description: "Assist with planning, coordination, and documentation of programs.",
  },
];

const VolunteerPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
          formType: 'volunteer',
          formData: {
            subject: "New Volunteer Application - Kalango Foundation",
            from_name: formData.name,
            ...formData,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering. We'll be in touch soon!",
      });
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Become a Volunteer"
        subtitle="Join our team of passionate volunteers making a real difference in communities."
        backgroundImage={program6}
      />

      {/* Why Volunteer */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              Why Volunteer With Us?
            </h2>
            <p className="text-muted-foreground text-lg">
              Volunteering with Kalango Helping People's Foundation is more than giving time—it's 
              about being part of a movement that transforms lives. Our volunteers are the backbone 
              of our operations, bringing energy, skills, and compassion to everything we do.
            </p>
          </div>

          {/* Who Can Volunteer */}
          <div className="bg-primary/5 rounded-xl p-8 max-w-3xl mx-auto mb-16">
            <h3 className="text-xl font-display font-bold mb-4 text-center">Who Can Volunteer?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-1" />
                Anyone aged 18 and above with a passion for community service
              </li>
              <li className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-1" />
                Students, professionals, retirees—all are welcome
              </li>
              <li className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-1" />
                No prior experience required—just a willing heart
              </li>
              <li className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-1" />
                Can commit a few hours weekly or join specific events
              </li>
            </ul>
          </div>

          {/* Volunteer Areas */}
          <SectionHeading
            title="Areas of Volunteering"
            subtitle="Choose how you'd like to contribute based on your skills and interests."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {volunteerAreas.map((area) => (
              <div
                key={area.title}
                className="bg-muted p-6 rounded-xl text-center hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary-foreground/20">
                  <area.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold mb-2">{area.title}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Volunteer Application Form"
            subtitle="Fill out the form below and we'll get in touch with you."
          />

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-sm">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="interest">Area of Interest *</Label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select an area</option>
                  <option value="outreach">Outreach & Awareness</option>
                  <option value="field">Field Support</option>
                  <option value="education">Education & Mentoring</option>
                  <option value="admin">Administrative Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Why do you want to volunteer? *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about yourself and why you'd like to volunteer with us"
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Heart className="h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default VolunteerPage;
