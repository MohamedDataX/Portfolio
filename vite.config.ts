import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { toString as mdToString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import { parse as acornParse } from "acorn";
import { componentTagger } from "lovable-tagger";
import matter from "gray-matter";
import fs from "node:fs";
import path from "path";

const SITE_ORIGIN = "https://mohameddatax.github.io";

/**
 * Remark plugin: compute an article's table of contents (## / ###) and reading
 * time from the MDAST, and expose them as ESM exports (`toc`, `readingMinutes`)
 * on the compiled MDX module. Runs at build time — data ships in the bundle.
 */
function remarkPostMeta() {
  return (tree: any) => {
    const slugger = new GithubSlugger();
    const toc: { depth: number; text: string; id: string }[] = [];
    let words = 0;

    visit(tree, (node: any) => {
      if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
        const text = mdToString(node);
        toc.push({ depth: node.depth, text, id: slugger.slug(text) });
      } else if (node.type === "text" || node.type === "inlineCode") {
        words += String(node.value).split(/\s+/).filter(Boolean).length;
      }
    });

    const readingMinutes = Math.max(1, Math.round(words / 200));
    const code =
      `export const toc = ${JSON.stringify(toc)};\n` +
      `export const readingMinutes = ${readingMinutes};`;
    const estree = acornParse(code, { ecmaVersion: 2023, sourceType: "module" });
    tree.children.unshift({ type: "mdxjsEsm", value: code, data: { estree } });
  };
}

/**
 * Emit dist/sitemap.xml from the current article set at build time.
 * Adding an .mdx file automatically adds its URL — nothing else to touch.
 */
function blogSitemap(base: string): Plugin {
  const abs = (p: string) => `${SITE_ORIGIN}${base}${p.replace(/^\//, "")}`;
  return {
    name: "blog-sitemap",
    apply: "build",
    closeBundle() {
      const dir = path.resolve(__dirname, "src/content/blog");
      const today = new Date().toISOString().slice(0, 10);

      const urls: { loc: string; lastmod?: string; priority: string }[] = [
        { loc: abs(""), lastmod: today, priority: "1.0" },
        { loc: abs("blog"), lastmod: today, priority: "0.9" },
      ];

      if (fs.existsSync(dir)) {
        for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))) {
          const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
          if (data.draft) continue;
          const slug = file.replace(/\.mdx$/, "");
          const lastmod = (data.updated ?? data.date ?? today).toString().slice(0, 10);
          urls.push({ loc: abs(`blog/${slug}`), lastmod, priority: "0.8" });
        }
      }

      const xml =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        urls
          .map(
            (u) =>
              `  <url>\n    <loc>${u.loc}</loc>\n` +
              (u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : "") +
              `    <changefreq>weekly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
          )
          .join("\n") +
        `\n</urlset>\n`;

      const out = path.resolve(__dirname, "dist");
      fs.mkdirSync(out, { recursive: true });
      fs.writeFileSync(path.join(out, "sitemap.xml"), xml);
    },
  };
}

// https://vitejs.dev/config/
// base = "/Portfolio/" for GitHub Pages project site (repo name).
// Override via VITE_BASE (e.g. "/" for a custom domain or user page).
export default defineConfig(({ mode }) => {
  const base = process.env.VITE_BASE ?? "/Portfolio/";
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      // MDX must run before the React plugin so emitted JSX gets transformed.
      {
        enforce: "pre",
        ...mdx({
          // Only bare `.mdx` imports; `.mdx?raw` falls through to Vite's raw
          // loader so the registry can read source for reading-time + TOC.
          include: /\.mdx$/,
          remarkPlugins: [
            remarkFrontmatter,
            [remarkMdxFrontmatter, { name: "frontmatter" }],
            remarkGfm,
            remarkPostMeta,
          ],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["heading-anchor"] } }],
            [
              rehypePrettyCode,
              {
                theme: { dark: "github-dark-dimmed", light: "github-light" },
                keepBackground: false,
              },
            ],
          ],
          providerImportSource: "@mdx-js/react",
        }),
      },
      react(),
      mode === "development" && componentTagger(),
      blogSitemap(base),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
