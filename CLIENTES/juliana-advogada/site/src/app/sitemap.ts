import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const hoje = new Date();

  const fixas: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: hoje, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/trabalhista`, lastModified: hoje, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/previdenciario`, lastModified: hoje, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/sobre`, lastModified: hoje, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: hoje, changeFrequency: "weekly", priority: 0.8 },
  ];

  const artigos: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...fixas, ...artigos];
}
