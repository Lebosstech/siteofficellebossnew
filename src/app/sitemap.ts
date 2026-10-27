import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lebosstech.ci';

  const staticRoutes = [
    { path: '', priority: 1.0, freq: 'daily' as const },
    { path: '/studio', priority: 0.9, freq: 'weekly' as const },
    { path: '/expertise', priority: 0.9, freq: 'weekly' as const },
    { path: '/work', priority: 0.9, freq: 'weekly' as const },
    { path: '/contact', priority: 0.8, freq: 'weekly' as const },
  ];

  const caseStudies = [
    'sra',
    'mon-gestionnaire-pro',
    'lounan',
    'djonan',
    'gerer-mon-argent',
  ].map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const mainPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  return [...mainPages, ...caseStudies];
}
