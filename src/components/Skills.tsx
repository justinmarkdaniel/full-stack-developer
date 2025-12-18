const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "PHP", level: 95 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS / GCP", level: 78 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-card/30">
      <div className="container max-w-5xl mx-auto">
        {/* Section header */}
        <div className="space-y-4 mb-16">
          <span className="text-primary font-mono text-sm">// Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-xl">
            Technologies I work with to bring ideas to life. Always learning, always improving.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-mono">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional technologies */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-lg font-semibold mb-6">Also experienced with</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs",
              "MySQL", "MongoDB", "Jest", "GitHub Actions",
              "Stripe", "Responsive Design", "Accessibility (WCAG)"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-muted-foreground bg-secondary/50 rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
