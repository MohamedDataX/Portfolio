import { Github, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { projects } from '@/data/portfolio';

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="Production data & AI systems — from modelling to deployment, focused on measurable impact."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.title} delay={i * 80}>
            <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {project.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 pt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
