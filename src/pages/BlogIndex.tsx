import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import PostCard from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { absoluteUrl } from '@/lib/site';
import { getAllPosts, getCategories } from '@/lib/blog';

const ALL = 'Tous';

export function Component() {
  const posts = getAllPosts();
  const categories = [{ name: ALL, count: posts.length }, ...getCategories()];

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const fm = p.frontmatter;
      const inCat = category === ALL || fm.category === category;
      if (!inCat) return false;
      if (!q) return true;
      const haystack = [fm.title, fm.description, fm.category, ...(fm.tags ?? [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query, category]);

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog — Data Science, IA & Machine Learning',
    url: absoluteUrl('blog'),
    inLanguage: 'fr-FR',
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.frontmatter.title,
      url: absoluteUrl(p.url),
      datePublished: p.frontmatter.date,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Blog — Data Science, IA & Machine Learning"
        description="Articles sur la Data Science, l'Intelligence Artificielle, le Machine Learning, Python, SQL et le Data Engineering. Tutoriels, concepts expliqués et retours d'expérience."
        path="blog"
        jsonLd={blogJsonLd}
      />
      <Navigation />

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:pt-32 lg:px-8">
        <header className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Blog</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Data Science, IA & Machine Learning
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Concepts expliqués simplement, tutoriels pratiques et retours d'expérience sur la data,
            le machine learning et l'ingénierie des données.
          </p>
        </header>

        {/* Search */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un article…"
              aria-label="Rechercher un article"
              className="pl-9"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Effacer la recherche"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setCategory(c.name)}
                className={cn(
                  'rounded-full border px-3 py-1 text-sm transition-colors',
                  category === c.name
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                )}
              >
                {c.name}
                <span className="ml-1.5 opacity-60">{c.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">
            Aucun article ne correspond à votre recherche.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Component;
