import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { skillCategories, specializations } from '@/data/portfolio';

const SkillsSection = () => {
  return (
    <Section id="skills" className="bg-muted/30">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & technologies"
        description="A full-stack data profile — from engineering pipelines to shipping ML models in production."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 60}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Specializations
        </p>
        <div className="flex flex-wrap gap-2.5">
          {specializations.map((spec) => (
            <span
              key={spec}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {spec}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default SkillsSection;
