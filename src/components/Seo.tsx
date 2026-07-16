import { Head } from 'vite-react-ssg';
import { SITE, absoluteUrl } from '@/lib/site';

interface SeoProps {
  /** Page-specific title. */
  title: string;
  description?: string;
  /** App-relative path for canonical + og:url, e.g. "blog/x". "" = home. */
  path?: string;
  /** Image path under /public, or an absolute URL. */
  image?: string;
  type?: 'website' | 'article';
  /** ISO date — articles only. */
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  /** Skip the "— <site name>" suffix (used on the home page). */
  bareTitle?: boolean;
  /** One or more JSON-LD objects injected as <script type="application/ld+json">. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const abs = (img?: string) => {
  const src = img || SITE.defaultImage;
  return /^https?:\/\//.test(src) ? src : absoluteUrl(src);
};

const Seo = ({
  title,
  description = SITE.description,
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  bareTitle,
  jsonLd,
}: SeoProps) => {
  const fullTitle = bareTitle ? title : `${title} — ${SITE.name}`;
  const url = absoluteUrl(path);
  const img = abs(image);
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' &&
        tags?.map((t) => <meta key={t} property="article:tag" content={t} />)}

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
