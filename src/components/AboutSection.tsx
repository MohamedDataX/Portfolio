import { Target, Award, Users } from 'lucide-react';
import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { profile } from '@/data/portfolio';

const highlights = [
  {
    icon: Target,
    title: 'Technical depth',
    description: 'MSc in AI & Big Data with hands-on ML and data-engineering projects.',
  },
  {
    icon: Award,
    title: 'Impact in production',
    description: 'AI & data solutions shipped to production with measurable results.',
  },
  {
    icon: Users,
    title: 'Product-minded',
    description: 'Comfortable working with cross-functional, agile teams.',
  },
];

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Who I am" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5">
          {profile.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="space-y-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
