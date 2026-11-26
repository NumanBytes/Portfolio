import type { MetadataRoute } from "next";
import { caseStudies, site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((c) => ({
      url: `${site.url}/work/${c.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
