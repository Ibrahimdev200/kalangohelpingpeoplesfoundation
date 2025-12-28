import { useState } from "react";
import { Calendar, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program4 from "@/assets/program-4.jpg";
import program5 from "@/assets/program-5.jpg";
import program6 from "@/assets/program-6.jpg";
import program7 from "@/assets/program-7.jpg";
import program8 from "@/assets/program-8.jpg";

const pastEvents = [
  {
    title: "Christmas Food Distribution 2024",
    date: "December 2024",
    location: "Nembe Community",
    description: "Annual Christmas outreach providing food packages and gifts to over 500 families.",
    image: program1,
  },
  {
    title: "Back to School Campaign",
    date: "September 2024",
    location: "Multiple Schools, Bayelsa",
    description: "Distributed school supplies and uniforms to 300+ students from underprivileged families.",
    image: program3,
  },
  {
    title: "Community Health Outreach",
    date: "August 2024",
    location: "Nembe LGA",
    description: "Free medical consultations, health screenings, and medication distribution.",
    image: program4,
  },
  {
    title: "Women Empowerment Workshop",
    date: "June 2024",
    location: "Nembe",
    description: "Skills training workshop for women, teaching tailoring and small business management.",
    image: program6,
  },
];

const upcomingEvents = [
  {
    title: "New Year Community Outreach",
    date: "January 2025",
    location: "Nembe & Surrounding Areas",
    description: "Kickstart the year with food distribution and community celebration.",
  },
  {
    title: "Education Scholarship Drive",
    date: "February 2025",
    location: "Bayelsa State",
    description: "Annual scholarship program to support students for the new academic session.",
  },
];

const galleryImages = [
  { src: program1, alt: "Food distribution program" },
  { src: program2, alt: "Community gathering" },
  { src: program3, alt: "Education support" },
  { src: program4, alt: "Health outreach" },
  { src: program5, alt: "Community outreach" },
  { src: program6, alt: "Women empowerment" },
  { src: program7, alt: "Team activities" },
  { src: program8, alt: "Cultural celebration" },
];

const EventsPage = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <Layout>
      <PageHero
        title="Events & Gallery"
        subtitle="See our work in action through past events and photo gallery."
        backgroundImage={program2}
      />

      {/* Past Events */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            title="Past Events"
            subtitle="A look back at some of our impactful community programs and events."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-muted rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join us at our upcoming programs and make a difference together."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-card p-8 rounded-xl shadow-sm border-l-4 border-primary"
              >
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            title="Photo Gallery"
            subtitle="Moments captured from our programs and community activities."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(image.src)}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Video Gallery"
            subtitle="Watch our impact stories and program highlights."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-card rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
              <p className="text-muted-foreground text-center p-8">
                Video coming soon.<br />
                <span className="text-sm">Add your YouTube video embed here</span>
              </p>
            </div>
            <div className="aspect-video bg-card rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
              <p className="text-muted-foreground text-center p-8">
                Video coming soon.<br />
                <span className="text-sm">Add your YouTube video embed here</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background p-2 hover:bg-background/10 rounded-full"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default EventsPage;
