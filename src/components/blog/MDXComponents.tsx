import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';

/** Internal links use the router (no full reload); external open safely. */
function A({ href = '', children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:');
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  // In-page anchors (#heading) stay as native links; route links use <Link>.
  if (href.startsWith('#')) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  // react-router adds the basename; pass a root-relative, basename-free path.
  const to = href.startsWith('/') ? href : `/${href}`;
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

/** Resolve /public-relative images against the base path; lazy-load. */
function Img({ src = '', alt = '', ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const resolved = /^https?:\/\//.test(src) ? src : asset(src);
  return (
    <img
      src={resolved}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="rounded-lg border border-border"
      {...rest}
    />
  );
}

/** Horizontal-scroll wrapper so wide tables never break the layout. */
function Table({ children }: { children?: ReactNode }) {
  return (
    <div className="my-6 w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

/** Responsive, privacy-friendly YouTube embed: <YouTube id="…" title="…" />. */
export function YouTube({ id, title = 'YouTube video' }: { id: string; title?: string }) {
  return (
    <div className="my-8 aspect-video overflow-hidden rounded-lg border border-border">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const CALLOUTS = {
  info: { icon: Info, cls: 'border-primary/30 bg-primary/5' },
  tip: { icon: Lightbulb, cls: 'border-emerald-500/30 bg-emerald-500/5' },
  warning: { icon: AlertTriangle, cls: 'border-amber-500/30 bg-amber-500/5' },
} as const;

/** <Callout type="tip">…</Callout> — highlighted note box. */
export function Callout({
  type = 'info',
  children,
}: {
  type?: keyof typeof CALLOUTS;
  children?: ReactNode;
}) {
  const { icon: Icon, cls } = CALLOUTS[type];
  return (
    <div className={cn('my-6 flex gap-3 rounded-lg border p-4', cls)}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}

/** Component map passed to MDXProvider. Extra names are usable inside .mdx. */
export const mdxComponents = {
  a: A,
  img: Img,
  table: Table,
  YouTube,
  Callout,
};
