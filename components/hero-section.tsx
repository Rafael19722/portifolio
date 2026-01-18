"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Technical dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Subtle circuit-like horizontal lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
      </div>
      {/* Corner accent marks */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-border/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-border/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-border/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-border/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 text-balance">
          Engineering Scalable Solutions from Brazil to the Cloud.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          <span className="text-foreground font-medium">Rafael Rangel</span> | Full Stack Developer focused on Event-Driven Architecture, DevOps, and Real-world Problem Solving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary transition-colors bg-transparent"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
