import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { experiences, education } from '@/data/portfolio';

interface TimelineEntry {
  logo: string;
  title: string;
  subtitle: string;
  website: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
  technologies?: string[];
}

const TimelineList = ({ entries }: { entries: TimelineEntry[] }) => (
  <ol className="relative space-y-8 border-l border-border pl-8">
    {entries.map((e, i) => (
      <Reveal as="li" key={`${e.title}-${e.subtitle}`} delay={i * 60} className="relative">
        <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary" />

        <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30">
          <div className="flex items-start gap-4">
            <img
              src={e.logo}
              alt={`${e.subtitle} logo`}
              loading="lazy"
              className="h-12 w-12 flex-shrink-0 rounded-lg border border-border bg-background object-contain p-1.5"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-lg font-semibold text-foreground">{e.title}</h4>
              <a
                href={e.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {e.subtitle}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {e.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {e.location}
            </span>
          </div>

          {e.description && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {e.description}
            </p>
          )}

          <ul className="mt-4 space-y-2">
            {e.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>

          {e.technologies && e.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {e.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    ))}
  </ol>
);

const ExperienceSection = () => {
  const work: TimelineEntry[] = experiences.map((e) => ({
    logo: e.logo,
    title: e.role,
    subtitle: e.company,
    website: e.website,
    period: e.period,
    location: e.location,
    description: e.description,
    achievements: e.achievements,
    technologies: e.technologies,
  }));

  const study: TimelineEntry[] = education.map((e) => ({
    logo: e.logo,
    title: e.degree,
    subtitle: e.school,
    website: e.website,
    period: e.period,
    location: e.location,
    description: e.description,
    achievements: e.achievements,
  }));

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Career"
        title="Experience & education"
        description="Roles and studies that shaped my data and AI practice."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </h3>
          <TimelineList entries={work} />
        </div>
        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Education
          </h3>
          <TimelineList entries={study} />
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
