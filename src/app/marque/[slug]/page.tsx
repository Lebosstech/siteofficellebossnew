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
  const brand = summary.brands.find((b) => b.slug === slug);
  if (!brand) return { title: 'Marque' };

  return {
    title: `Matériel Informatique ${brand.name} à Abidjan (${brand.count} produits) | LEBOSS TECH`,
    description: `Découvrez tous les équipements ${brand.name} disponibles en stock chez LEBOSS TECH Abidjan.`,
    alternates: { canonical: `https://lebosstech.ci/marque/${brand.slug}` },
  };
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [summary, productsRes] = await Promise.all([
    getCatalogSummary(),
    getProducts({ brand: slug, limit: 100 }),
  ]);

  const brand = summary.brands.find((b) => b.slug === slug);
  if (!brand && productsRes.total === 0) notFound();

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
            Marque : {brand?.name || slug.toUpperCase()} ({productsRes.total} références)
          </h1>
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
