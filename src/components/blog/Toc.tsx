import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { TocItem } from '@/lib/blog';

/** Sticky table of contents with scroll-spy highlight. */
const Toc = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table des matières" className="text-sm">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Sommaire
      </p>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id} className={cn(item.depth === 3 && 'ml-3')}>
            <a
              href={`#${item.id}`}
              className={cn(
                '-ml-px block border-l-2 border-transparent pl-3 leading-snug transition-colors hover:text-foreground',
                activeId === item.id
                  ? 'border-primary font-medium text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Toc;
