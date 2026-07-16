import type { RouteRecord } from 'vite-react-ssg';
import RootLayout from './RootLayout';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { getAllPosts } from './lib/blog';

/**
 * Route tree consumed by vite-react-ssg. Every path here is pre-rendered to
 * static HTML at build time; `getStaticPaths` enumerates the article pages.
 */
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, Component: Index },
      { path: 'blog', lazy: () => import('./pages/BlogIndex') },
      {
        path: 'blog/:slug',
        lazy: () => import('./pages/BlogPost'),
        getStaticPaths: () => getAllPosts().map((p) => `blog/${p.slug}`),
      },
      { path: '*', Component: NotFound },
    ],
  },
];
