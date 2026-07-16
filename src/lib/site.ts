/**
 * Site-wide constants + absolute-URL helpers.
 * The canonical origin is fixed; the base path follows Vite's BASE_URL so
 * URLs stay correct both locally ("/") and on GitHub Pages ("/Portfolio/").
 */

export const SITE = {
  origin: 'https://mohameddatax.github.io',
  name: 'Mohamed Ait Sidi Hou',
  title: 'Mohamed Ait Sidi Hou — Data Scientist & Data Engineer',
  description:
    'Mohamed Ait Sidi Hou — Data Scientist & Data Engineer in Paris. I turn raw data into production-grade AI systems, from modelling to deployment.',
  locale: 'fr_FR',
  twitter: '', // add "@handle" if/when created
  linkedin: 'https://www.linkedin.com/in/mohamed-ash/',
  github: 'https://github.com/MohamedDataX',
  defaultImage: 'og.png',
} as const;

/** "/Portfolio/" on Pages, "/" locally. Always begins and ends with "/". */
export const BASE_URL: string = import.meta.env.BASE_URL || '/';

/** Join the base path onto an app-relative path. -> "/Portfolio/blog/x" */
export function withBase(path = ''): string {
  const base = BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

/** Fully-qualified URL for canonical / OG / sitemap. -> "https://…/Portfolio/blog/x" */
export function absoluteUrl(path = ''): string {
  return `${SITE.origin}${withBase(path)}`;
}
