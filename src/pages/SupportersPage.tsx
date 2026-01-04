import { Link } from "react-router-dom";
import { Heart, Award, Users, Handshake, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

import program5 from "@/assets/program-5.jpg";
import supporterDouyeDiri from "@/assets/supporter-douye-diri.jpg";
import supporterAtekeTom from "@/assets/supporter-ateke-tom.jpg";
import supporterKojoSam from "@/assets/supporter-kojo-sam.png";
import supporterSamuelOgbuku from "@/assets/supporter-samuel-ogbuku.webp";
import supporterTompolo from "@/assets/supporter-tompolo.png";
import supporterWike from "@/assets/supporter-wike.jpg";
import supporterJohnnie from "@/assets/supporter-johnnie-turner.jpg";

const supporters = [
  {
    name: "His Excellency, Senator Douye Diri",
    title: "Executive Governor of Bayelsa State",
    description: "Serving as the Governor of Bayelsa State since February 2020, His Excellency has been a steadfast supporter of community development initiatives across the state.",
    image: supporterDouyeDiri,
  },
  {
    name: "His Excellency, Nyesom Wike",
    title: "Minister of the Federal Capital Territory",
    description: "Former Governor of Rivers State and current FCT Minister, known for his transformative infrastructure projects and support for community development across Nigeria.",
    image: supporterWike,
  },
  {
    name: "High Oweizidei Thomas Ekpemupolo (Tompolo)",
    title: "Chairman, Tantita Security Services",
    description: "A prominent Niger Delta leader and Chief Priest of Egbesu deity. Founder of Tantita Security Services and strong advocate for Niger Delta development and environmental protection.",
    image: supporterTompolo,
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
    name: "Chief Erefagha Johnnie Turner",
    title: "Nembe Chief",
    description: "A respected traditional leader from Nembe, Bayelsa State. Chief Turner has been a dedicated supporter of community development and youth empowerment initiatives in the region.",
    image: supporterJohnnie,
  },
];

const SupportersPage = () => {
  return (
    <Layout>
      <PageHero
        title="Our Distinguished Supporters"
        subtitle="Meet the visionary leaders and philanthropists who believe in our mission and help us transform lives across the Niger Delta."
        backgroundImage={program5}
      />

      {/* Why Support Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Join Our Mission</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4 sm:mb-6">
                Together, We Create <span className="text-primary">Lasting Impact</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                For over <strong className="text-foreground">22 years</strong>, Kalango Helping People's Foundation 
                has been transforming lives across Bayelsa State and the Niger Delta region. Our distinguished 
                supporters understand that real change comes from collective action.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                When you support our foundation, you join a community of <strong className="text-foreground">leaders, 
                philanthropists, and changemakers</strong> who are committed to uplifting the less privileged and 
                creating sustainable development in our communities.
              </p>
              <Link to="/donate">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Heart className="h-5 w-5" />
                  Become a Supporter
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">50,000+</h3>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <Award className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">22+</h3>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
              <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                <Handshake className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">100+</h3>
                <p className="text-sm text-muted-foreground">Community Partners</p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">15+</h3>
                <p className="text-sm text-muted-foreground">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Leaders Who Inspire Change
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are honored to have the support of these distinguished individuals who believe in our mission 
              and contribute to our community development efforts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supporters.map((supporter, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift group border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 pb-0">
                  <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-1">
                    <img 
                      src={supporter.image} 
                      alt={supporter.name}
                      className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                      }}
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-display font-bold text-foreground mb-1 leading-tight">
                    {supporter.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-2">
                    {supporter.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {supporter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-16 w-16 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display italic text-foreground/80 mb-6 leading-relaxed">
              "When we support those in need, we don't just change their lives—we transform our communities 
              and build a legacy of hope for future generations."
            </blockquote>
            <p className="text-primary font-semibold">— Kalango Foundation Philosophy</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.95), hsl(var(--secondary) / 0.9)), url(${program5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom text-center text-primary-foreground px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            Your Support Makes a Difference
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 text-primary-foreground/90">
            Join our distinguished supporters and help us continue transforming lives across the Niger Delta. 
            Every contribution, big or small, creates ripples of positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/donate" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                <Handshake className="h-5 w-5" />
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportersPage;
