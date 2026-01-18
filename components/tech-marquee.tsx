"use client";

import { Badge } from "@/components/ui/badge";

const technologies = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "Next.js",
  "Docker",
  "Kubernetes",
  "RabbitMQ",
  "PostgreSQL",
  "Azure",
  "Redis",
  "Nginx",
  "Linux",
];

export function TechMarquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee gap-8">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <Badge
              key={`${tech}-${index}`}
              variant="outline"
              className="px-4 py-2 text-sm font-mono whitespace-nowrap bg-transparent text-muted-foreground border-border/60 hover:text-foreground hover:border-border transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
