interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 ${light ? "text-background" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-background/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-16 sm:w-20 h-1 bg-accent mt-4 sm:mt-6 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
