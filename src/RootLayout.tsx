import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { MDXProvider } from '@mdx-js/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { mdxComponents } from '@/components/blog/MDXComponents';
import { SITE, absoluteUrl } from '@/lib/site';

const queryClient = new QueryClient();

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: absoluteUrl(),
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'Data Scientist & Data Engineer',
  address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
  url: absoluteUrl(),
  sameAs: [SITE.linkedin, SITE.github],
};

/** Reset scroll to top on route change (in-page hash links keep their target). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Root route element: providers + site-wide <head> + page outlet. */
const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <MDXProvider components={mdxComponents}>
          {/* Site-wide defaults; pages override title/description/canonical. */}
          <Head>
            <title>{SITE.title}</title>
            <meta name="description" content={SITE.description} />
            <meta property="og:site_name" content={SITE.name} />
            <meta property="og:locale" content={SITE.locale} />
            <meta name="twitter:card" content="summary_large_image" />
            <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
            <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
          </Head>

          <Toaster />
          <Sonner />
          <ThemeToggle />
          <ScrollToTop />
          <Outlet />
        </MDXProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default RootLayout;
