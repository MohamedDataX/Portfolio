import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { asset } from '@/lib/asset';
import { formatDate } from '@/lib/format';
import type { Post } from '@/lib/blog';

/** Article preview card used on the blog index + related lists. */
const PostCard = ({ post }: { post: Post }) => {
  const { title, description, category, cover, coverAlt, date, tags } = post.frontmatter;
  const to = `/${post.url}`; // basename added by react-router

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      {cover && (
        <Link to={to} className="block aspect-[16/9] overflow-hidden" tabIndex={-1} aria-hidden>
          <img
            src={asset(cover)}
            alt={coverAlt ?? ''}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs">
          <span className="font-mono uppercase tracking-[0.15em] text-primary">{category}</span>
          <span className="text-muted-foreground">·</span>
          <time dateTime={date} className="text-muted-foreground">
            {formatDate(date)}
          </time>
        </div>

        <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
          <Link to={to} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags?.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
