import { Mail, Linkedin, Github } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

const links = [
  { icon: Mail, href: `mailto:${socials.email}`, label: 'Email' },
  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: Github, href: socials.github, label: 'GitHub' },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-8">
      <div className="text-center sm:text-left">
        <p className="font-mono text-sm text-foreground">
          {profile.name}
          <span className="text-primary">.</span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {profile.roles.join(' · ')} — {profile.location}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>

    <p className="pb-8 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
