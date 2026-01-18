import { HeroSection } from "@/components/hero-section";
import { TechMarquee } from "@/components/tech-marquee";
import { FeaturedProject } from "@/components/featured-project";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TechMarquee />
      <FeaturedProject />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
