import { Link } from "react-router-dom";
import { Heart, Target, Eye, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ImpactStats from "@/components/shared/ImpactStats";

import program2 from "@/assets/program-2.jpg";
import program7 from "@/assets/program-7.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every person and community with genuine care, empathy, and respect for their dignity.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty, transparency, and accountability in all our operations.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of people coming together to create lasting, meaningful change.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "We focus on sustainable solutions that help individuals and communities thrive independently.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Learn about our journey, mission, and the values that drive our work in serving communities."
        backgroundImage={program7}
      />

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4 sm:mb-6">
                22 Years of Personal Sacrifice and Dedication
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                <strong className="text-foreground">Since 2002</strong>, Kalango Helping People's Foundation has been 
                serving the less privileged in Nembe and beyond. For over two decades, this foundation has been 
                <strong className="text-foreground"> funded entirely from the personal resources</strong> of our 
                founder and CEO—a remarkable testament to unwavering commitment and sacrifice.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                What started as one person's vision to help their community has grown into a trusted 
                foundation touching thousands of lives through welfare programs, educational support, 
                and humanitarian outreach. Every naira spent, every life touched, has been made possible 
                through personal dedication and faith in the mission.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Now, we are calling on <strong className="text-foreground">sons and daughters of Bayelsa State, 
                the Nembe people, and all compassionate individuals</strong> to join us. With your support, 
                we can extend our reach to more communities and sustain this vital work for generations to come.
              </p>
            </div>
            <div className="relative">
              <img
                src={program2}
                alt="Our team in action"
                className="rounded-xl w-full h-64 sm:h-80 lg:h-[500px] object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-lg">
                <p className="text-2xl sm:text-4xl font-display font-bold">22+</p>
                <p className="text-xs sm:text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To uplift the lives of the less privileged by providing essential welfare support, 
                educational opportunities, and community development programs that foster dignity, 
                hope, and sustainable growth. We are committed to serving the Nembe people and 
                extending our reach to vulnerable communities across Nigeria.
              </p>
            </div>
            <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm">
              <div className="inline-flex p-4 bg-secondary/20 rounded-full mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Nigeria where every individual—regardless of their circumstances—has access to 
                basic necessities, quality education, and opportunities to thrive. We envision 
                empowered communities where people support one another and work together to build 
                a brighter, more equitable future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every program we implement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary-foreground/20">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Commitment to Transparency
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Trust is the foundation of our work. We maintain complete transparency in how donations 
              are used, providing regular reports on our programs and their impact. Every contribution 
              is carefully directed to where it's needed most, and we're always open about our 
              operations, finances, and outcomes.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We believe our donors, volunteers, and partners deserve to know exactly how their 
              support is making a difference.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join us in our mission to transform lives and build stronger communities. 
            Your support makes all the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="gap-2">
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="gap-2">
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

export default AboutPage;
