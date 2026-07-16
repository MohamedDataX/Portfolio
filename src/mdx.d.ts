/** Type shims for MDX modules imported directly (registry uses import.meta.glob). */
declare module '*.mdx' {
  import type { ComponentType } from 'react';

  /** Frontmatter exposed by remark-mdx-frontmatter. */
  export const frontmatter: Record<string, unknown>;

  /** Injected by the remarkPostMeta build plugin (see vite.config.ts). */
  export const toc: { depth: 2 | 3; text: string; id: string }[];
  export const readingMinutes: number;

  const MDXComponent: ComponentType<{ components?: Record<string, unknown> }>;
  export default MDXComponent;
}
