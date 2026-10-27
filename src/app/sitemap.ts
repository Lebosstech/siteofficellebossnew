import type { MetadataRoute } from 'next';
import { getCatalogSummary, getProducts } from '@/lib/catalog-provider';
import {
  SOFTWARE_SOLUTIONS,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_ARTICLES,
} from '@/data/cms-seed-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lebosstech.ci';
  const [summary, allProducts] = await Promise.all([
    getCatalogSummary(),
    getProducts({ limit: 1000 }),
  ]);

  const staticPages = [
    '',
    '/services',
    '/solutions',
    '/produits',
    '/developpement',
    '/materiel-informatique',
    '/maintenance-informatique-abidjan',
    '/installation-reseau-informatique-abidjan',
    '/realisations',
    '/ressources',
    '/a-propos',
    '/contact',
    '/panier',
    '/conditions-vente',
    '/cgu',
    '/garantie',
    '/politique-confidentialite',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const solutionUrls = SOFTWARE_SOLUTIONS.map((app) => ({
    url: `${baseUrl}/solutions/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const devSubUrls = INITIAL_SERVICES.filter((s) =>
    ['application-mobile-abidjan', 'application-web-saas', 'logiciel-sur-mesure-cote-ivoire', 'integration-api-mobile-money'].includes(s.slug)
  ).map((s) => ({
    url: `${baseUrl}/developpement/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryUrls = summary.categories.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const brandUrls = summary.brands.map((b) => ({
    url: `${baseUrl}/marque/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const projectUrls = INITIAL_PROJECTS.map((p) => ({
    url: `${baseUrl}/realisations/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articleUrls = INITIAL_ARTICLES.map((a) => ({
    url: `${baseUrl}/ressources/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productUrls = allProducts.items.map((p) => ({
    url: `${baseUrl}/produits/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...solutionUrls,
    ...devSubUrls,
    ...categoryUrls,
    ...brandUrls,
    ...projectUrls,
    ...articleUrls,
    ...productUrls,
  ];
}
