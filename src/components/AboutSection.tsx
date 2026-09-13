import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { profile, skillCategories } from '@/data/portfolio';
import { useLanguage } from '@/i18n/LanguageContext';

const AboutSection = () => {
  const { t, pick } = useLanguage();

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <Reveal className="space-y-5">
            {pick(profile.intro).map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <div>
          <SectionHeading eyebrow={t.about.skillsEyebrow} title={t.about.skillsTitle} />
          <Reveal delay={80}>
            <dl className="divide-y divide-border border-y border-border">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title.en}
                  className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-primary sm:pt-1">
                    {pick(cat.title)}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground/80">
                    {cat.skills.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
