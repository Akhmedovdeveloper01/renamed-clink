import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { services } from "@/data/services";
import { articles } from "@/data/articles";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${siteConfig.domain}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.domain}/${l}`])
        ),
      },
    });

    entries.push({
      url: `${siteConfig.domain}/${locale}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.domain}/${l}/services`])
        ),
      },
    });

    for (const service of services) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${siteConfig.domain}/${l}/services/${service.slug}`,
            ])
          ),
        },
      });
    }

    entries.push({
      url: `${siteConfig.domain}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.domain}/${l}/blog`])
        ),
      },
    });

    for (const article of articles) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/blog/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "yearly",
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${siteConfig.domain}/${l}/blog/${article.slug}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
