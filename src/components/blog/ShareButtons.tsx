import { Linkedin, Twitter, Link2 } from 'lucide-react';
import { toast } from 'sonner';
import { absoluteUrl } from '@/lib/site';

/** Social share + copy-link row for an article. */
const ShareButtons = ({ path, title }: { path: string; title: string }) => {
  const url = absoluteUrl(path);
  const enc = encodeURIComponent;

  const targets = [
    {
      label: 'Partager sur LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
    {
      label: 'Partager sur X',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Lien copié dans le presse-papiers');
    } catch {
      toast.error('Impossible de copier le lien');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm text-muted-foreground">Partager</span>
      {targets.map(({ label, icon: Icon, href }) => (
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
      <button
        type="button"
        onClick={copy}
        aria-label="Copier le lien"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ShareButtons;
