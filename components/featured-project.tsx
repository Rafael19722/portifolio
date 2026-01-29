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

        {/* Top Row - Info in horizontal layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Description */}
          <div className="lg:flex-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A full-stack urban incident management platform. Solves concurrency issues using message queues and delivers real-time feedback via WebSockets.
            </p>
          </div>

          {/* Key Features */}
          <div className="lg:flex-1 space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-2 text-foreground">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Actions */}
          <div className="lg:flex-1 space-y-4">
            <div className="space-y-3">
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

            <div className="flex gap-3 pt-2">
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://api.alertacidadaoapi.com/api" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-3.5 w-3.5" />
                  Live API
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-border hover:bg-secondary bg-transparent">
                <a href="https://github.com/copa-origem/alerta-cidadao-api" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-3.5 w-3.5" />
                  Github
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Full Width Blueprint/Schematic Container */}
        <div className="relative w-full">
          {/* Blueprint-style container with 16:9 aspect ratio */}
          <div className="aspect-video rounded-lg border-2 border-dashed border-primary/30 bg-card/80 overflow-hidden relative">
            {/* Blueprint grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            {/* Corner markers */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/40" />
            
            {/* Placeholder content */}
            <img src="/diagram.png" alt="the diagram" />
            
            {/* Blueprint label */}
            <div className="absolute bottom-3 right-3 px-2 py-1 bg-background/80 border border-border rounded text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              System Blueprint v1.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
