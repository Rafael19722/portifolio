import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, MessageCircle, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafael-rangel1/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Rafael19722",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/71985280372",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
          Ready to solve complex problems?
        </h2>
        
        <a
          href="mailto:rafael.profissional011@gmail.com"
          className="inline-flex items-center gap-3 text-xl sm:text-2xl text-primary hover:underline underline-offset-4 transition-colors mb-12 break-all"
        >
          <Mail className="w-6 h-6 flex-shrink-0" />
          rafael.profissional011@gmail.com
        </a>

        <Separator className="bg-border mb-12" />

        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-secondary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
