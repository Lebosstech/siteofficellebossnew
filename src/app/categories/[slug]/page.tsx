import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCatalogSummary, getProducts } from '@/lib/catalog-provider';
import { ProductCard } from '@/components/catalog/product-card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const summary = await getCatalogSummary();
  const cat = summary.categories.find((c) => c.slug === slug);
  if (!cat) return { title: 'Catégorie' };

  return {
    title: `${cat.name} à Abidjan (${cat.count} produits) | LEBOSS TECH`,
    description: `Achetez vos équipements ${cat.name} chez LEBOSS TECH à Abidjan. ${cat.count} références testées et garanties avec livraison rapide en Côte d’Ivoire.`,
    alternates: { canonical: `https://lebosstech.ci/categories/${cat.slug}` },
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [summary, productsRes] = await Promise.all([
    getCatalogSummary(),
    getProducts({ category: slug, limit: 100 }),
  ]);

  const cat = summary.categories.find((c) => c.slug === slug);
  if (!cat && productsRes.total === 0) notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss space-y-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Retour au catalogue complet
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            {cat?.name || slug} ({productsRes.total} produits)
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Sélection professionnelle disponible chez LEBOSS TECH à Abidjan avec garantie écrite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsRes.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
