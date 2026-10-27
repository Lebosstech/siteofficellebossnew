import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/admin", "/commande"],
      },
    ],
    sitemap: "https://lebosstech.ci/sitemap.xml",
  };
}
