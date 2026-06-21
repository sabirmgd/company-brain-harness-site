import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://companyos.deleg8.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteUrl}/blog/${a.frontmatter.slug}`,
    lastModified: new Date(a.frontmatter.updatedAt || a.frontmatter.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...articleEntries,
  ];
}
