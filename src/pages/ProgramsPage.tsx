import { Link } from "react-router-dom";
import { Heart, Utensils, GraduationCap, HandHeart, Home, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program4 from "@/assets/program-4.jpg";
import program5 from "@/assets/program-5.jpg";
import program6 from "@/assets/program-6.jpg";

const programs = [
  {
    icon: Utensils,
    title: "Food & Welfare Distribution",
    description: "We provide essential food supplies, clothing, and welfare packages to families struggling with poverty. Our regular distribution drives reach hundreds of households in Nembe and surrounding communities, ensuring that no one goes hungry.",
    impact: "2,000+ families supported annually",
    image: program1,
  },
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    description: "Education is the key to breaking the cycle of poverty. We provide scholarships, school supplies, and educational resources to children and young adults who otherwise couldn't afford to pursue their studies.",
    impact: "500+ students sponsored",
    image: program3,
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    description: "Our outreach programs bring hope directly to communities. From organizing awareness campaigns to providing on-ground support during crises, we're always there when our communities need us most.",
    impact: "20+ communities reached",
    image: program5,
  },
  {
    icon: Home,
    title: "Shelter & Housing Support",
    description: "We help families in need secure safe shelter through our housing assistance program. This includes temporary housing support, home repairs, and connecting families with long-term housing solutions.",
    impact: "100+ families housed",
    image: program2,
  },
  {
    icon: Stethoscope,
    title: "Health & Medical Aid",
    description: "Access to healthcare shouldn't be a privilege. We organize medical outreach programs, provide health education, and help families access essential medical care and medications.",
    impact: "1,500+ medical consultations",
    image: program4,
  },
  {
    icon: Heart,
    title: "Nembe People Support",
    description: "The Nembe people hold a special place in our mission. We're dedicated to supporting the unique needs of Nembe communities, preserving their culture while addressing socio-economic challenges.",
    impact: "Focused community development",
    image: program6,
  },
];

const ProgramsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Our Work & Programs"
        subtitle="Discover the initiatives we run to create lasting positive change in communities across Nigeria."
        backgroundImage={program3}
      />

      {/* Programs Overview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From food distribution to education, healthcare to housing—our programs address the 
              multifaceted needs of vulnerable communities. Each initiative is designed to create 
              sustainable, long-term impact.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold text-sm mb-6">
                    <Heart className="h-4 w-4" />
                    {program.impact}
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 md:h-[400px] object-cover rounded-xl shadow-lg hover-lift"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Help Us Expand Our Reach
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            With your support, we can take these programs to more communities and touch even more lives. 
            Every donation and every volunteer makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Heart className="h-5 w-5" />
                Support Our Programs
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowRight className="h-5 w-5" />
                Join as a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramsPage;
