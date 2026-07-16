import { CalendarDays, Clock, RefreshCw } from 'lucide-react';
import { formatDate } from '@/lib/format';
import type { Post } from '@/lib/blog';

/** Publication date · reading time · optional "updated" line for an article. */
const PostMeta = ({ post }: { post: Post }) => {
  const { date, updated } = post.frontmatter;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-4 w-4" />
        <time dateTime={date}>{formatDate(date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4" />
        {post.readingMinutes} min de lecture
      </span>
      {updated && updated !== date && (
        <span className="inline-flex items-center gap-1.5">
          <RefreshCw className="h-4 w-4" />
          Mis à jour le <time dateTime={updated}>{formatDate(updated)}</time>
        </span>
      )}
    </div>
  );
};

export default PostMeta;
