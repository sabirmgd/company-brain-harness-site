import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Clock, ArrowRight } from "lucide-react";

import { getAllArticles } from "@/lib/content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://companyos.deleg8.dev";

export const metadata: Metadata = {
  title: "Blog | Company Brain Harness",
  description:
    "Deep guides on governed company memory, Claude Code plugins for teams, source approval workflows, and the operational rhythm of running a company brain.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Company Brain Harness Blog",
    description:
      "Deep guides on governed company memory, Claude Code plugins for teams, source approval workflows, and the operational rhythm of running a company brain.",
    images: ["/cbh-og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Brain Harness Blog",
    description:
      "Deep guides on governed company memory, Claude Code plugins for teams, and source approval workflows.",
    images: ["/cbh-og-image.png"],
  },
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Company Brain Harness Blog",
    description:
      "Deep guides on governed company memory, Claude Code plugins for teams, source approval workflows, and the operational rhythm of running a company brain.",
    url: `${siteUrl}/blog`,
    hasPart: articles.map((a) => ({
      "@type": "Article",
      headline: a.frontmatter.title,
      description: a.frontmatter.description,
      url: `${siteUrl}/blog/${a.frontmatter.slug}`,
      datePublished: a.frontmatter.publishedAt,
      author: { "@type": "Person", name: a.frontmatter.author },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="hero hero-blog">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow">Field guides for governed company memory</div>
            <h1>The Company Brain Blog</h1>
            <p className="hero-sub">
              Deep, sourced guides on building a company brain that AI agents can
              safely use. Patterns, comparisons, governance playbooks, and the
              operational rhythm of running source-approved knowledge for teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {articles.length === 0 ? (
            <p>No articles yet. Check back soon.</p>
          ) : (
            <ul className="article-list">
              {articles.map((a) => {
                const date = new Date(a.frontmatter.publishedAt).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                );
                return (
                  <li key={a.frontmatter.slug}>
                    <Link href={`/blog/${a.frontmatter.slug}`} className="article-card">
                      <div className="article-card-kicker">{a.frontmatter.category}</div>
                      <h2>{a.frontmatter.title}</h2>
                      <p>{a.frontmatter.description}</p>
                      <div className="article-card-meta">
                        <span>
                          <CalendarClock size={14} /> {date}
                        </span>
                        <span>
                          <Clock size={14} /> {a.readingTimeMinutes} min read
                        </span>
                        <span className="article-card-link">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
