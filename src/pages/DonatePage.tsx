import { Link } from "react-router-dom";
import { Heart, Shield, CreditCard, Building, Check, MessageCircle, Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { useToast } from "@/hooks/use-toast";

import program5 from "@/assets/program-5.jpg";
import supporterDouyeDiri from "@/assets/supporter-douye-diri.jpg";
import supporterAtekeTom from "@/assets/supporter-ateke-tom.jpg";
import supporterKojoSam from "@/assets/supporter-kojo-sam.jpg";
import supporterSamuelOgbuku from "@/assets/supporter-samuel-ogbuku.jpg";
import supporterFelixOgbe from "@/assets/supporter-felix-ogbe.webp";

const donationUses = [
  "Food packages for families in need",
  "Educational scholarships and school supplies",
  "Medical aid and health outreach programs",
  "Shelter support for homeless families",
  "Skills training and empowerment workshops",
  "Emergency relief during crises",
];

const bankAccounts = [
  {
    currency: "Nigerian Naira (NGN)",
    accountNumber: "0895862663",
    bankName: "GTB Bank",
    accountName: "Kalango Links Nigeria Limited",
  },
  {
    currency: "Euro (EUR)",
    accountNumber: "0895862694",
    bankName: "GTB Bank",
    accountName: "Kalango Links Nigeria Limited",
  },
  {
    currency: "Pound Sterling (GBP)",
    accountNumber: "0895862687",
    bankName: "GTB Bank",
    accountName: "Kalango Links Nigeria Limited",
  },
  {
    currency: "U.S. Dollar (USD)",
    accountNumber: "0895862670",
    bankName: "GTB Bank",
    accountName: "Kalango Links Nigeria Limited",
  },
];

const supporters = [
  {
    name: "His Excellency, Senator Douye Diri",
    title: "Executive Governor of Bayelsa State",
    description: "Serving as the Governor of Bayelsa State since February 2020, His Excellency has been a steadfast supporter of community development initiatives across the state.",
    image: supporterDouyeDiri,
  },
  {
    name: "HRM King Ateke Michael Tom",
    title: "Amanyanabo of Okochiri Kingdom",
    description: "His Royal Majesty, a first-class traditional ruler and peace advocate from Rivers State, has been instrumental in promoting peace and development in the Niger Delta region.",
    image: supporterAtekeTom,
  },
  {
    name: "Chief Dr. Kojo Sam",
    title: "MD, Kojo Sam Logistics & Labrador Security Services",
    description: "A prominent Niger Delta philanthropist from Opu-Nembe, Bayelsa State. Known for his generous community empowerment programs and support for small business owners.",
    image: supporterKojoSam,
  },
  {
    name: "Dr. Samuel Ogbuku",
    title: "Managing Director, NDDC",
    description: "As the Managing Director of the Niger Delta Development Commission (NDDC), Dr. Ogbuku has championed various development projects benefiting communities in the region.",
    image: supporterSamuelOgbuku,
  },
  {
    name: "Engr. Felix Omatsola Ogbe",
    title: "Executive Secretary, NCDMB",
    description: "As the Executive Secretary of the Nigerian Content Development and Monitoring Board (NCDMB), he promotes local participation in the oil and gas industry while supporting community initiatives.",
    image: supporterFelixOgbe,
  },
];

const DonatePage = () => {
  const { toast } = useToast();

  const handleComingSoon = (platform: string) => {
    toast({
      title: "Coming Soon!",
      description: `${platform} payment integration is coming soon. Please use bank transfer or contact us directly.`,
    });
  };

  return (
    <Layout>
      <PageHero
        title="Donate Now"
        subtitle="Your generosity can transform lives. Every contribution makes a difference."
        backgroundImage={program5}
      />

      {/* Founder's Story - Compelling Appeal */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-accent animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
              22 Years of Personal Sacrifice — Now We Need You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-4 sm:mb-6 leading-relaxed">
              Since <strong>2002</strong>, this foundation has been <strong>funded entirely from the personal 
              resources of our founder</strong>. For over two decades, one person's unwavering commitment 
              has kept this mission alive—feeding families, educating children, and bringing hope to communities 
              across Nembe and beyond.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-4 sm:mb-6 leading-relaxed">
              But personal funds alone can only go so far. To reach more communities, to help more people, 
              and to sustain this vital work, <strong>we now need the support of generous hearts like yours</strong>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground mb-6 sm:mb-8 leading-relaxed font-semibold">
              We are calling on all <strong className="text-accent">sons and daughters of Bayelsa State</strong>, 
              the <strong className="text-accent">Nembe people</strong>, and compassionate individuals everywhere 
              to join us in this mission. Your donation will help us expand to more communities and ensure 
              this foundation continues serving for generations to come.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              <span className="text-sm sm:text-base font-semibold">100% of donations go directly to community programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Supporters Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Our Distinguished Supporters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are honored to have the support of these distinguished individuals who believe in our mission 
              and contribute to our community development efforts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {supporters.map((supporter, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden shadow-sm hover-lift group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={supporter.image} 
                    alt={supporter.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop";
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {supporter.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {supporter.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {supporter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Your Impact</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4 sm:mb-6">
              How Your Donation Helps
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
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
              <Button 
                className="w-full bg-[#00C3F7] hover:bg-[#00C3F7]/90"
                onClick={() => handleComingSoon("Paystack")}
              >
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
              <Button 
                className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-foreground"
                onClick={() => handleComingSoon("Flutterwave")}
              >
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
              <Button 
                className="w-full bg-[#003087] hover:bg-[#003087]/90"
                onClick={() => handleComingSoon("PayPal")}
              >
                Donate via PayPal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-8">
            <Building className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Direct Bank Transfer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prefer to donate via bank transfer? We accept donations in multiple currencies. 
              Choose the account that works best for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {bankAccounts.map((account) => (
              <div key={account.currency} className="bg-muted rounded-xl p-6 text-center">
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {account.currency}
                </span>
                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">Account Name</p>
                    <p className="font-semibold text-sm">{account.accountName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">Account Number</p>
                    <p className="font-mono text-xl font-bold text-primary">{account.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">Bank</p>
                    <p className="font-semibold">{account.bankName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto">
            Please send us a message after your transfer so we can acknowledge your donation and send you a receipt.
          </p>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Need Help with Your Donation?
            </h2>
            <p className="text-muted-foreground mb-8">
              Reach out to us directly for assistance or to confirm your donation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/16143778612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#25D366]/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
                <span className="text-sm font-normal opacity-90">+1 (614) 377-8612</span>
              </a>
              <a
                href="tel:+2347070351737"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Us
                <span className="text-sm font-normal opacity-90">+234 707 035 1737</span>
              </a>
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