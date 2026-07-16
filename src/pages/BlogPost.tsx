import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import PostMeta from '@/components/blog/PostMeta';
import Toc from '@/components/blog/Toc';
import ShareButtons from '@/components/blog/ShareButtons';
import PostCard from '@/components/blog/PostCard';
import { asset } from '@/lib/asset';
import { absoluteUrl, SITE } from '@/lib/site';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog';

export function Component() {
  const { slug = '' } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-32 text-center">
          <h1 className="text-2xl font-semibold">Article introuvable</h1>
          <Link to="/blog" className="mt-4 text-primary hover:underline">
            ← Retour au blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const { frontmatter: fm, toc, Component: Article } = post;
  const related = getRelatedPosts(slug);
  const showToc = toc.length >= 3;
  const coverUrl = fm.cover ? absoluteUrl(fm.cover) : undefined;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: fm.title,
    description: fm.description,
    datePublished: fm.date,
    dateModified: fm.updated ?? fm.date,
    inLanguage: 'fr-FR',
    keywords: fm.tags?.join(', '),
    articleSection: fm.category,
    ...(coverUrl ? { image: coverUrl } : {}),
    author: { '@type': 'Person', name: fm.author ?? SITE.name, url: absoluteUrl() },
    publisher: { '@type': 'Person', name: SITE.name, url: absoluteUrl() },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(post.url) },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: absoluteUrl() },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('blog') },
      { '@type': 'ListItem', position: 3, name: fm.title, item: absoluteUrl(post.url) },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={fm.title}
        description={fm.description}
        path={post.url}
        image={fm.cover}
        type="article"
        publishedTime={fm.date}
        modifiedTime={fm.updated ?? fm.date}
        tags={fm.tags}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />
      <Navigation />

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:pt-32 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Accueil</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="truncate text-foreground">{fm.title}</span>
        </nav>

        {/* Header */}
        <header className="mx-auto max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {fm.category}
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {fm.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{fm.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <PostMeta post={post} />
            <ShareButtons path={post.url} title={fm.title} />
          </div>
        </header>

        {fm.cover && (
          <img
            src={asset(fm.cover)}
            alt={fm.coverAlt ?? ''}
            className="mx-auto mt-10 aspect-[16/9] w-full max-w-4xl rounded-xl border border-border object-cover"
            loading="eager"
            decoding="async"
          />
        )}

        {/* Body + TOC */}
        <div className="mt-12 lg:grid lg:grid-cols-[1fr_16rem] lg:gap-12">
          <article className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-code:font-mono">
            <Article />
          </article>

          {showToc && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <Toc items={toc} />
              </div>
            </aside>
          )}
        </div>

        {/* Tags + share footer */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-border pt-8">
          {fm.tags && fm.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {fm.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            <Link to="/blog" className="text-sm text-primary hover:underline">
              ← Tous les articles
            </Link>
            <ShareButtons path={post.url} title={fm.title} />
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20" aria-labelledby="related-heading">
            <h2 id="related-heading" className="mb-6 text-xl font-semibold tracking-tight text-foreground">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Component;
