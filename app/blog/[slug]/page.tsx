import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { ArrowLeft, CalendarClock, Clock } from "lucide-react";

import { getAllArticles, getArticle } from "@/lib/content";
import { ArticleReferences } from "@/app/components/article-references";
import { ArticleAnalytics } from "@/app/components/article-analytics";
import { AuthorBio } from "@/app/components/author-bio";
import { Cite, Callout } from "@/app/components/cite";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://companyos.deleg8.dev";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const { title, description, ogImage, keywords, publishedAt, updatedAt, author } =
    article.frontmatter;
  const canonical = `/blog/${slug}`;
  const image = ogImage || "/cbh-og-image.png";

  return {
    title: `${title} | Company Brain Harness`,
    description,
    keywords,
    authors: [{ name: author }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      publishedTime: publishedAt,
      modifiedTime: updatedAt || publishedAt,
      authors: [author],
      images: [{ url: image, width: 2752, height: 1536, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const {
    title,
    description,
    publishedAt,
    updatedAt,
    author,
    category,
    references,
    ogImage,
  } = article.frontmatter;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${siteUrl}${ogImage || "/cbh-og-image.png"}`,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Company Brain Harness",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/cbh-logo-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
    articleSection: category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${siteUrl}/blog/${slug}` },
    ],
  };

  const dateFormatted = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticleAnalytics slug={slug} category={category} />

      <article className="article">
        <div className="container article-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/blog" className="breadcrumb-back">
              <ArrowLeft size={14} /> All articles
            </Link>
          </nav>

          <header className="article-header">
            <div className="article-kicker">{category}</div>
            <h1>{title}</h1>
            <p className="article-lead">{description}</p>
            <div className="article-meta">
              <span>
                <CalendarClock size={14} /> {dateFormatted}
              </span>
              <span>
                <Clock size={14} /> {article.readingTimeMinutes} min read
              </span>
              <span className="article-author">by {author}</span>
            </div>
          </header>

          <div className="article-body">
            <MDXRemote
              source={article.body}
              components={{ Cite, Callout }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      { behavior: "wrap", properties: { className: ["heading-anchor"] } },
                    ],
                    [rehypePrettyCode, { theme: "github-dark-dimmed" }],
                  ],
                },
              }}
            />
          </div>

          {references && references.length > 0 && (
            <ArticleReferences references={references} />
          )}

          <AuthorBio author={author} />

          <aside className="article-cta">
            <h3>Stop letting your agents read whatever they find.</h3>
            <p>
              Company Brain Harness gives your team a source-governed memory layer
              that Claude, Codex, and your operators can trust.
            </p>
            <Link href="/#book" className="btn btn-primary btn-lg">
              Book a setup call
            </Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
