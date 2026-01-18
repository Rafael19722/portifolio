import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, ExternalLink, Github, Server, Cog, Cloud, MapPin } from "lucide-react";

const features = [
  { icon: Server, text: "Event-Driven Architecture (RabbitMQ)" },
  { icon: Cog, text: "Background PDF Processing" },
  { icon: Cloud, text: "Automated CI/CD to Azure" },
  { icon: MapPin, text: "Real-time Geo-location" },
];

const techTags = ["NestJS", "Docker", "PostgreSQL", "RabbitMQ"];

export function FeaturedProject() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Featured Project
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Alerta Cidadao
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Context */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A full-stack urban incident management platform. Solves concurrency issues using message queues and delivers real-time feedback via WebSockets.
            </p>

            <Separator className="bg-border" />

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Key Features
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-foreground">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-border" />

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://api.alertacidadaoapi.com/api" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live API
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent">
                <a href="https://github.com/copa-origem/alerta-cidadao-backend" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Github
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Blueprint/Schematic Container */}
          <div className="relative">
            {/* Blueprint-style container with 16:9 aspect ratio */}
            <div className="aspect-video rounded-lg border-2 border-dashed border-primary/30 bg-card/80 overflow-hidden relative">
              {/* Blueprint grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/40" />
              
              <img src="/diagram.png" alt="the diagram" />
              
              {/* Blueprint label */}
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-background/80 border border-border rounded text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                System Blueprint v1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
