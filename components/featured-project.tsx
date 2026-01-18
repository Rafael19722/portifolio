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
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live API
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Github
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Architecture Diagram */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              <div className="relative h-full flex flex-col items-center justify-center p-8">
                <div className="text-center space-y-6">
                  {/* Architecture visualization */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="col-span-3 p-3 rounded border border-border bg-secondary/50 text-center">
                      <span className="text-xs text-muted-foreground">Client App</span>
                    </div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-px h-6 bg-border" />
                    </div>
                    <div className="col-span-3 p-3 rounded border border-primary/30 bg-primary/5 text-center">
                      <span className="text-xs text-primary">NestJS API Gateway</span>
                    </div>
                    <div className="col-span-3 flex justify-center gap-8">
                      <div className="w-px h-6 bg-border" />
                      <div className="w-px h-6 bg-border" />
                    </div>
                    <div className="p-3 rounded border border-border bg-secondary/50 text-center">
                      <span className="text-xs text-muted-foreground">RabbitMQ</span>
                    </div>
                    <div className="p-3 rounded border border-border bg-secondary/50 text-center">
                      <span className="text-xs text-muted-foreground">PostgreSQL</span>
                    </div>
                    <div className="p-3 rounded border border-border bg-secondary/50 text-center">
                      <span className="text-xs text-muted-foreground">Redis</span>
                    </div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-px h-6 bg-border" />
                    </div>
                    <div className="col-span-3 p-3 rounded border border-border bg-secondary/50 text-center">
                      <span className="text-xs text-muted-foreground">Azure Cloud Infrastructure</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Architecture Diagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
