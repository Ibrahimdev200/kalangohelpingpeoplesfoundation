interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
<section
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4"
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
        <div className="max-w-3xl mx-auto text-center text-primary-foreground px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-2 sm:mb-3 md:mb-4 animate-fade-in leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
