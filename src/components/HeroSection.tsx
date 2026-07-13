import { ArrowUpRight, Download } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: id === 'home' ? 0 : el.offsetTop - 72, behavior: 'smooth' });
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Subtle single-accent glow — no cosmic clutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 right-0 h-[60vh] w-[60vh] rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for opportunities · {profile.location}
            </p>
          </div>

          <h1
            className="animate-fade-in text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            {profile.name}
          </h1>

          <div
            className="animate-fade-in mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-light text-muted-foreground sm:text-2xl"
            style={{ animationDelay: '160ms' }}
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-primary">/</span>}
                <span>{role}</span>
              </span>
            ))}
          </div>

          <p
            className="animate-fade-in mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: '240ms' }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-in mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '320ms' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className={cn(
                'group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground',
                'transition-transform duration-200 hover:-translate-y-0.5'
              )}
            >
              View my projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in touch
            </button>

            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
