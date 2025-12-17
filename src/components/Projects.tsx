import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CloudSync Pro",
    description: "Real-time collaboration platform with WebSocket-powered sync, enabling teams to work on documents simultaneously.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "DevMetrics",
    description: "Analytics dashboard for engineering teams tracking deployment frequency, lead time, and system reliability metrics.",
    tech: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "APIForge",
    description: "Automated REST API generator from database schemas with built-in authentication and rate limiting.",
    tech: ["Node.js", "Express", "JWT", "Swagger"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "TaskFlow",
    description: "Minimalist project management tool with Kanban boards, time tracking, and team collaboration features.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        {/* Section header */}
        <div className="space-y-4 mb-16">
          <span className="text-primary font-mono text-sm">// Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-muted-foreground max-w-xl">
            A selection of recent projects showcasing my approach to building scalable, 
            user-focused applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Button variant="ghost" className="group" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View all projects on GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
