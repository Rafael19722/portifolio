import { Card, CardContent } from "@/components/ui/card";
import { Code2, MapPin, GraduationCap, User } from "lucide-react";

const stats = [
  {
    icon: Code2,
    label: "Focus",
    value: "Backend & Architecture",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Salvador, BA (Remote Ready)",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc. Computer Science (5th Sem)",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full border-2 border-border bg-secondary flex items-center justify-center overflow-hidden">
              <img src="/face.jpeg" alt="Rafael Rangel" className="w-full h-full object-cover"/>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              More Than Code
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Currently a Computer Science student at UNIFACS. My background in technical support taught me empathy and rapid troubleshooting under pressure. I don't just write code; I build systems that work for people.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="text-foreground font-medium">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
