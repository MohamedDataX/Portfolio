import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm + max width for every section. */
export const Section = ({ id, children, className }: SectionProps) => (
  <section id={id} className={cn('scroll-mt-20 py-24 sm:py-32', className)}>
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
  </section>
);

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/** Eyebrow (mono) + title + optional description. */
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => (
  <Reveal
    className={cn('mb-14 max-w-2xl', align === 'center' && 'mx-auto text-center')}
  >
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    )}
  </Reveal>
);
