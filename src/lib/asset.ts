/**
 * Resolve a /public asset against Vite's base path so it works both
 * locally and under a GitHub Pages sub-path (e.g. /Portfolio/).
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL; // "/" locally, "/Portfolio/" on Pages
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};
