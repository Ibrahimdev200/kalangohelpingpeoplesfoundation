import { Link } from "react-router-dom";
import { Heart, Users, ArrowRight, HandHeart, GraduationCap, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import ImpactStats from "@/components/shared/ImpactStats";

import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program5 from "@/assets/program-5.jpg";

import supporterTompolo from "@/assets/supporter-tompolo.png";
import supporterWike from "@/assets/supporter-wike.jpg";
import supporterAteke from "@/assets/supporter-ateke-tom.jpg";
import supporterJohnnie from "@/assets/supporter-johnnie-turner.jpg";
import supporterDouyeDiri from "@/assets/supporter-douye-diri.jpg";
import supporterKojoSam from "@/assets/supporter-kojo-sam.png";
import supporterSamuelOgbuku from "@/assets/supporter-samuel-ogbuku.webp";

const supporters = [
  {
    name: "His Excellency, Senator Douye Diri",
    title: "Executive Governor of Bayelsa State",
    image: supporterDouyeDiri,
  },
  {
    name: "His Excellency, Nyesom Wike",
    title: "FCT Minister",
    image: supporterWike,
  },
  {
    name: "High Chief Government Ekpemupolo",
    title: "Tompolo - Niger Delta Leader",
    image: supporterTompolo,
  },
  {
    name: "HRM King Ateke Michael Tom",
    title: "Amanyanabo of Okochiri Kingdom",
    image: supporterAteke,
  },
  {
    name: "Chief Dr. Kojo Sam",
    title: "MD, Kojo Sam Logistics",
    image: supporterKojoSam,
  },
  {
    name: "Dr. Samuel Ogbuku",
    title: "Managing Director, NDDC",
    image: supporterSamuelOgbuku,
  },
  {
    name: "Chief Erefagha Johnnie Turner",
    title: "Nembe Chief",
    image: supporterJohnnie,
  },
];

const programs = [
  {
    icon: Utensils,
    title: "Food & Welfare Support",
    description: "Providing essential food supplies and welfare packages to families in need across Nembe and surrounding communities.",
    image: program1,
  },
  {
    icon: GraduationCap,
    title: "Education & Empowerment",
    description: "Supporting education initiatives and skill development programs to empower youth and create sustainable livelihoods.",
    image: program3,
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    description: "Regular outreach programs bringing hope, resources, and support directly to vulnerable communities.",
    image: program5,
  },
];

const testimonials = [
  {
    quote: "Kalango Foundation brought hope to our community when we needed it most. Their food distribution program helped my family through difficult times.",
    name: "Mama Ebiere",
    role: "Community Member, Nembe",
  },
  {
    quote: "The scholarship program changed my life. I'm now pursuing my dreams of becoming a teacher, thanks to Kalango's support.",
    name: "Peter Ogunsola",
    role: "Student Beneficiary",
  },
  {
    quote: "Their dedication to transparency and genuine impact makes Kalango a trusted partner in community development.",
    name: "Chief James Alagoa",
    role: "Community Leader",
  },
];

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, hsl(var(--hero-overlay) / 0.75), hsl(var(--hero-overlay) / 0.85)), url(${program2})`,
          }}
        />
        <div className="container-custom relative z-10 text-center text-primary-foreground px-4 py-12 sm:py-16 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            Empowering Lives,<br />
            <span className="text-accent">Building Hope</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 text-primary-foreground/90 animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
            Kalango Helping People's Foundation is dedicated to uplifting the less privileged, 
            empowering the Nembe people, and creating lasting positive change in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            <Link to="/donate" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 text-base sm:text-lg px-6 sm:px-8 bg-background/10 border-background/30 text-background hover:bg-background/20 w-full sm:w-auto">
                <Users className="h-5 w-5" />
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Introduction */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">22 Years of Service</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4 sm:mb-6">
                A Legacy of Personal Sacrifice Since 2002
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                For over <strong className="text-foreground">22 years</strong>, Kalango Helping People's Foundation 
                has been <strong className="text-foreground">personally funded by our founder</strong>—serving 
                the Nembe people and vulnerable communities with unwavering dedication. Every food package, 
                every scholarship, every act of support has come from personal sacrifice.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Now, we are calling on <strong className="text-foreground">indigenes of Bayelsa State, 
                the Nembe community, and all compassionate hearts</strong> to join this mission. Your support 
                will help us expand to more communities and sustain this vital work.
              </p>
              <Link to="/about">
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-4 sm:mb-6 text-center lg:text-left">Our Valued Supporters</h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {supporters.map((supporter) => (
                  <div key={supporter.name} className="text-center group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden border-3 border-primary/30 group-hover:border-primary shadow-lg transition-all duration-300 hover-lift">
                      <img
                        src={supporter.image}
                        alt={supporter.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="font-bold text-[10px] sm:text-xs text-foreground line-clamp-2">{supporter.name}</p>
                    <p className="text-[8px] sm:text-[10px] text-primary font-medium line-clamp-1">{supporter.title}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <Link to="/supporters">
                  <Button variant="outline" className="gap-2">
                    View All Supporters
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats dark />

      {/* Featured Programs */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Our Programs"
            subtitle="Discover how we're making a difference in communities across Nigeria through our focused initiatives."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 p-2 sm:p-3 bg-primary rounded-full">
                    <program.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3">{program.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{program.description}</p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link to="/programs">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                View All Programs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Voices of Impact"
            subtitle="Hear from the people whose lives have been touched by our work."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card p-5 sm:p-6 md:p-8 rounded-xl shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent text-4xl sm:text-5xl font-serif mb-3 sm:mb-4">"</div>
                <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
            Join Us in Making a Difference
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 text-primary-foreground/90">
            Whether through donations, volunteering, or spreading the word—every contribution 
            helps us reach more people in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/donate" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                <Heart className="h-5 w-5" />
                Make a Donation
              </Button>
            </Link>
            <Link to="/volunteer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                <Users className="h-5 w-5" />
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
