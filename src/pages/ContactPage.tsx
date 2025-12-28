import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

import program7 from "@/assets/program-7.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Nembe, Bayelsa State", "Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+234 000 000 0000"],
    link: "tel:+234000000000",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@kalangofoundation.org"],
    link: "mailto:info@kalangofoundation.org",
  },
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "https://facebook.com" },
  { icon: Instagram, name: "Instagram", url: "https://instagram.com" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual key
          subject: `Contact Form: ${formData.subject}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll respond as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Have questions or want to get involved? We'd love to hear from you."
        backgroundImage={program7}
      />

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                We're Here to Help
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you have questions about our programs, want to donate, or are interested 
                in volunteering, our team is ready to assist you. Reach out using any of the 
                methods below.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, index) =>
                        info.link ? (
                          <a
                            key={index}
                            href={info.link}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={index} className="text-muted-foreground">
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-muted p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
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
                      placeholder="Enter your email"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Type your message here..."
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
