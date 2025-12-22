import { ArrowDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config/portfolio";

interface HeroProps {
  onOpenContact: () => void;
}

const Hero = ({ onOpenContact }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="space-y-8">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground font-mono">Open to Remote</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up"
              style={{ animationDelay: "100ms", opacity: 0 }}
            >
              <span className="text-foreground">I'm </span>
              <span className="text-gradient">Justin Daniel</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl animate-fade-up"
              style={{ animationDelay: "200ms", opacity: 0 }}
            >
              {config.heroSubtitle}
              <span className="text-foreground"> high performance </span>
              web applications with modern technologies.
            </p>
          </div>

          {/* Tech stack quick view */}
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "300ms", opacity: 0 }}
          >
            {config.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-mono text-muted-foreground bg-secondary/50 rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 pt-4 animate-fade-up"
            style={{ animationDelay: "400ms", opacity: 0 }}
          >
            <Button variant="glow" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" onClick={onOpenContact} className="hover:text-primary">
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-4 pt-4 animate-fade-up"
            style={{ animationDelay: "500ms", opacity: 0 }}
          >
            <a
              href="https://github.com/justinmarkdaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
