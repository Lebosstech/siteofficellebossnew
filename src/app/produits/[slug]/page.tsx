import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Package,
  ChevronRight,
  Cpu,
  AlertTriangle,
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/lib/catalog-provider';
import { formatFCFA } from '@/lib/utils';
import {
  ProductDetailGallery,
  ProductDetailActions,
} from '@/components/catalog/product-detail-actions';
import { ProductCard } from '@/components/catalog/product-card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Produit introuvable' };

  return {
    title: `${product.name} — ${formatFCFA(product.price)}`,
    description: `${product.name} (${product.sku}) disponible chez LEBOSS TECH à Abidjan au prix de ${formatFCFA(product.price)}. ${product.warrantyInfo}`,
    alternates: { canonical: `https://lebosstech.ci/produits/${product.slug}` },
    openGraph: {
      title: `${product.name} | LEBOSS TECH`,
      description: product.shortDescription,
      images: [{ url: product.mainImage }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product, 4);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container-leboss space-y-12">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-leboss-600 font-semibold">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/produits" className="hover:text-leboss-600 font-semibold">
            Catalogue
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/categories/${product.categorySlug}`}
            className="hover:text-leboss-600 font-semibold"
          >
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-navy-950 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Gallery (5 cols) */}
          <div className="lg:col-span-5">
            <ProductDetailGallery product={product} />
          </div>

          {/* Right Product Info & Commercial Actions (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card space-y-6">
            {/* Top Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/categories/${product.categorySlug}`}
                  className="px-3 py-1 rounded-full bg-leboss-50 text-leboss-600 text-xs font-extrabold uppercase tracking-wider"
                >
                  {product.categoryName}
                </Link>
                {product.brandName && product.brandSlug && (
                  <Link
                    href={`/marque/${product.brandSlug}`}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-extrabold uppercase"
                  >
                    {product.brandName}
                  </Link>
                )}
                <span className="px-3 py-1 rounded-full bg-navy-950 text-white text-xs font-extrabold">
                  {product.conditionLabel}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">
                Réf : {product.sku}
              </span>
            </div>

            {/* Product Exact Name */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 leading-snug">
              {product.name}
            </h1>

            {/* Price & Stock Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                    {formatFCFA(product.price)}
                  </span>
                  {product.compareAtPrice && product.compareAtPrice > product.price && (
                    <span className="text-base text-slate-400 line-through font-bold">
                      {formatFCFA(product.compareAtPrice)}
                    </span>
                  )}
                </div>
                {product.discountPercent > 0 && (
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-leboss-500 text-white text-xs font-extrabold">
                    Économisez {product.discountPercent}% ({formatFCFA((product.compareAtPrice || 0) - product.price)})
                  </span>
                )}
              </div>

              <div>
                {product.inStock ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold">
                    <CheckCircle2 className="w-4 h-4" /> En stock ({product.stockQuantity} disp.)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-extrabold">
                    <AlertTriangle className="w-4 h-4" /> Sur commande / Rupture
                  </span>
                )}
              </div>
            </div>

            {/* Interactive Actions (Quantity, Cart, Buy Now, WhatsApp, Quote) */}
            <ProductDetailActions product={product} />

            {/* Trust Guarantees (Warranty, Included Accessories, Delivery) */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 space-y-1.5">
                <div className="flex items-center gap-2 font-extrabold text-navy-950">
                  <ShieldCheck className="w-4 h-4 text-leboss-500 shrink-0" /> Garantie Applicable
                </div>
                <p className="text-slate-600 leading-relaxed">{product.warrantyInfo}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 space-y-1.5">
                <div className="flex items-center gap-2 font-extrabold text-navy-950">
                  <Package className="w-4 h-4 text-leboss-500 shrink-0" /> Accessoires Inclus
                </div>
                <p className="text-slate-600 leading-relaxed">{product.includedItems}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 space-y-1.5">
                <div className="flex items-center gap-2 font-extrabold text-navy-950">
                  <Truck className="w-4 h-4 text-leboss-500 shrink-0" /> Livraison Côte d&apos;Ivoire
                </div>
                <p className="text-slate-600 leading-relaxed">{product.deliveryInfo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications & Commercial Description */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-4">
            <h2 className="text-xl font-extrabold text-navy-950">
              Description Commerciale
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-4">
            <h2 className="text-xl font-extrabold text-navy-950 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-leboss-500" /> Caractéristiques Techniques Vérifiées
            </h2>
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {product.specs.map((spec) => (
                <div key={spec.label} className="py-3 flex items-center justify-between gap-4">
                  <span className="font-semibold text-slate-500">{spec.label}</span>
                  <span className="font-extrabold text-navy-950 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-navy-950">
                Produits Similaires dans {product.categoryName}
              </h2>
              <Link
                href={`/categories/${product.categorySlug}`}
                className="text-xs font-extrabold text-leboss-600 hover:underline"
              >
                Voir toute la catégorie →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
