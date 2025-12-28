import { Users, Heart, MapPin, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Lives Impacted" },
  { icon: Heart, value: "50+", label: "Programs Run" },
  { icon: MapPin, value: "20+", label: "Communities Reached" },
  { icon: Calendar, value: "10+", label: "Years of Service" },
];

interface ImpactStatsProps {
  dark?: boolean;
}

const ImpactStats = ({ dark = false }: ImpactStatsProps) => {
  return (
    <section className={`section-padding ${dark ? "bg-primary" : "bg-muted"}`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-full mb-3 sm:mb-4 ${dark ? "bg-background/10" : "bg-primary/10"}`}>
                <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${dark ? "text-background" : "text-primary"}`} />
              </div>
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-1 sm:mb-2 ${dark ? "text-background" : "text-foreground"}`}>
                {stat.value}
              </h3>
              <p className={`text-xs sm:text-sm md:text-base ${dark ? "text-background/80" : "text-muted-foreground"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
