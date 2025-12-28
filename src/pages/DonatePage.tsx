import { Link } from "react-router-dom";
import { Heart, Shield, CreditCard, Building, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

import program5 from "@/assets/program-5.jpg";

const donationUses = [
  "Food packages for families in need",
  "Educational scholarships and school supplies",
  "Medical aid and health outreach programs",
  "Shelter support for homeless families",
  "Skills training and empowerment workshops",
  "Emergency relief during crises",
];

const bankDetails = {
  bankName: "First Bank of Nigeria",
  accountName: "Kalango Helping People's Foundation",
  accountNumber: "0000000000",
  sortCode: "011151003",
};

const DonatePage = () => {
  return (
    <Layout>
      <PageHero
        title="Donate Now"
        subtitle="Your generosity can transform lives. Every contribution makes a difference."
        backgroundImage={program5}
      />

      {/* Why Donate */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Your Impact</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              How Your Donation Helps
            </h2>
            <p className="text-muted-foreground text-lg">
              When you donate to Kalango Helping People's Foundation, you're directly supporting 
              programs that change lives. Here's where your generosity goes:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {donationUses.map((use, index) => (
              <div key={index} className="flex items-start gap-3 bg-muted p-4 rounded-lg">
                <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground">{use}</span>
              </div>
            ))}
          </div>

          {/* Trust Message */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold mb-3">100% Transparency Guaranteed</h3>
            <p className="text-muted-foreground">
              We are committed to complete transparency in how donations are used. Every contribution 
              is accounted for, and we provide regular updates on how funds are making an impact. 
              Your trust is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Choose Your Donation Method"
            subtitle="We offer multiple secure ways to donate. Choose what works best for you."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paystack */}
            <div className="bg-card p-8 rounded-xl shadow-sm text-center hover-lift">
              <div className="inline-flex p-4 bg-[#00C3F7]/10 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-[#00C3F7]" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Pay with Paystack</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fast, secure Nigerian payment gateway. Pay with your debit card or bank transfer.
              </p>
              <Button className="w-full bg-[#00C3F7] hover:bg-[#00C3F7]/90">
                Donate via Paystack
              </Button>
            </div>

            {/* Flutterwave */}
            <div className="bg-card p-8 rounded-xl shadow-sm text-center hover-lift">
              <div className="inline-flex p-4 bg-[#F5A623]/10 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Pay with Flutterwave</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Multiple payment options including cards, bank transfer, and mobile money.
              </p>
              <Button className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-foreground">
                Donate via Flutterwave
              </Button>
            </div>

            {/* PayPal */}
            <div className="bg-card p-8 rounded-xl shadow-sm text-center hover-lift">
              <div className="inline-flex p-4 bg-[#003087]/10 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-[#003087]" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Pay with PayPal</h3>
              <p className="text-muted-foreground text-sm mb-6">
                International donations accepted. Secure payments with buyer protection.
              </p>
              <Button className="w-full bg-[#003087] hover:bg-[#003087]/90">
                Donate via PayPal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Bank Transfer Details
              </h2>
              <p className="text-muted-foreground">
                Prefer to donate via bank transfer? Use the account details below.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Bank Name</span>
                  <span className="font-semibold">{bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Account Name</span>
                  <span className="font-semibold">{bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Account Number</span>
                  <span className="font-semibold font-mono text-lg">{bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Sort Code</span>
                  <span className="font-semibold">{bankDetails.sortCode}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Please send us a message after your transfer so we can acknowledge your donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Thank You for Your Generosity
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Every donation, no matter the size, helps us continue our mission of serving 
            the less privileged and building stronger communities. Thank you for being 
            part of the change.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Have Questions? Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
