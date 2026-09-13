import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { profile, skillCategories } from '@/data/portfolio';

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Who I am" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
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

        <Reveal delay={80}>
          <dl className="divide-y divide-border border-y border-border">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-primary sm:pt-1">
                  {cat.title}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/80">
                  {cat.skills.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
};

export default AboutSection;
