/**
 * Blog content registry — the single source of truth for every article.
 *
 * Articles live as `.mdx` files in `src/content/blog/`. Drop a new file in
 * that folder and it is automatically picked up here (list, routes, sitemap,
 * related posts) — no other file needs to change.
 */
import type { ComponentType } from 'react';

export interface Frontmatter {
  title: string;
  description: string;
  date: string; // ISO — publication
  updated?: string; // ISO — last update
  category: string;
  tags?: string[];
  cover?: string; // path under /public, e.g. "blog/clustering.png"
  coverAlt?: string;
  author?: string;
  draft?: boolean;
}

export interface TocItem {
  depth: 2 | 3;
  text: string;
  id: string;
}

export interface Post {
  slug: string;
  url: string; // app-relative, e.g. "blog/c-est-quoi-le-clustering"
  frontmatter: Frontmatter;
  readingMinutes: number;
  toc: TocItem[];
  Component: ComponentType<{ components?: Record<string, unknown> }>;
}

// Eagerly import compiled MDX. Each module exposes the component (default),
// the `frontmatter`, and the `toc` / `readingMinutes` injected by the
// remarkPostMeta build plugin (see vite.config.ts). All resolved at build time.
const modules = import.meta.glob<{
  default: Post['Component'];
  frontmatter: Frontmatter;
  toc: TocItem[];
  readingMinutes: number;
}>('../content/blog/*.mdx', { eager: true });

const isDev = import.meta.env.DEV;

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.mdx$/, '');
}

const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = slugFromPath(path);
    return {
      slug,
      url: `blog/${slug}`,
      frontmatter: mod.frontmatter,
      readingMinutes: mod.readingMinutes ?? 1,
      toc: mod.toc ?? [],
      Component: mod.default,
    };
  })
  .filter((p) => isDev || !p.frontmatter.draft)
  .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** All category names, sorted, with post counts. */
export function getCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of posts) {
    counts.set(p.frontmatter.category, (counts.get(p.frontmatter.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** All tags, sorted, with post counts. */
export function getTags(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.frontmatter.tags ?? []) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/** Posts sharing the most tags/category with `slug`, best first. */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const tags = new Set(post.frontmatter.tags ?? []);

  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      if (p.frontmatter.category === post.frontmatter.category) score += 2;
      for (const t of p.frontmatter.tags ?? []) if (tags.has(t)) score += 1;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score || +new Date(b.p.frontmatter.date) - +new Date(a.p.frontmatter.date))
    .slice(0, limit)
    .map((x) => x.p);
}
