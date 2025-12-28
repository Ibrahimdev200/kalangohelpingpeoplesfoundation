interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section
      className="relative py-24 md:py-32 px-4"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(to bottom, hsl(var(--hero-overlay) / 0.85), hsl(var(--hero-overlay) / 0.9)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      )}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
