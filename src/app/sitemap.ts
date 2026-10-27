import type { MetadataRoute } from "next";
import { projects, expertises } from "@/data/studio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/expertises",
    "/realisations",
    "/ecosysteme",
    "/a-propos",
    "/contact",
    ...expertises.map((e) => `/expertises/${e.slug}`),
    ...projects.map((p) => `/realisations/${p.slug}`),
  ].map((path) => ({
    url: `https://lebosstech.ci${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
