import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  SlidersHorizontal,
  PackageCheck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { getCatalogSummary, getProducts } from '@/lib/catalog-provider';
import { ProductCard } from '@/components/catalog/product-card';

export const metadata: Metadata = {
  title: 'Boutique & Catalogue Matériel Informatique Professionnel à Abidjan',
  description:
    'Catalogue complet LEBOSS TECH : ordinateurs portables professionnels (HP, Dell, Lenovo), PC de bureau, serveurs, imprimantes LaserJet, onduleurs APC et équipements réseaux en stock à Abidjan.',
  alternates: { canonical: 'https://lebosstech.ci/produits' },
};

export default async function ProduitsCatalogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const q = typeof sp.q === 'string' ? sp.q : '';
  const category = typeof sp.categorie === 'string' ? sp.categorie : 'all';
  const brand = typeof sp.marque === 'string' ? sp.marque : 'all';
  const condition = typeof sp.etat === 'string' ? sp.etat : 'all';
  const minPrice = typeof sp.min === 'string' && sp.min ? Number(sp.min) : undefined;
  const maxPrice = typeof sp.max === 'string' && sp.max ? Number(sp.max) : undefined;
  const inStockOnly = sp.stock === 'true';
  const promoOnly = sp.promo === 'true';
  const sort =
    typeof sp.tri === 'string' &&
    ['relevance', 'price-asc', 'price-desc', 'newest'].includes(sp.tri)
      ? (sp.tri as 'relevance' | 'price-asc' | 'price-desc' | 'newest')
      : 'relevance';
  const page = typeof sp.page === 'string' ? Math.max(1, Number(sp.page) || 1) : 1;

  const [summary, catalogResult] = await Promise.all([
    getCatalogSummary(),
    getProducts({
      q,
      category,
      brand,
      condition,
      minPrice,
      maxPrice,
      inStockOnly,
      promoOnly,
      sort,
      page,
      limit: 16,
    }),
  ]);

  const buildPageHref = (targetPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (category && category !== 'all') params.set('categorie', category);
    if (brand && brand !== 'all') params.set('marque', brand);
    if (condition && condition !== 'all') params.set('etat', condition);
    if (minPrice) params.set('min', String(minPrice));
    if (maxPrice) params.set('max', String(maxPrice));
    if (inStockOnly) params.set('stock', 'true');
    if (promoOnly) params.set('promo', 'true');
    if (sort !== 'relevance') params.set('tri', sort);
    if (targetPage > 1) params.set('page', String(targetPage));
    const qs = params.toString();
    return `/produits${qs ? `?${qs}` : ''}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-tech-grid text-white py-14 border-b border-white/10">
        <div className="container-leboss">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leboss-500/20 border border-leboss-500/40 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Centrale d&apos;Achat &amp; Boutique E-Commerce
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Catalogue Matériel Informatique ({summary.totalProducts} produits)
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
                Équipements neufs scellés et quasi-neufs certifiés Grade A+ contrôlés sur 30 points en atelier à Abidjan.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
              <PackageCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">{summary.inStockCount} équipements</strong> disponibles immédiatement en stock
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Filters */}
      <div className="container-leboss py-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Filter Sidebar (3 cols) */}
          <aside className="lg:col-span-3 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-navy-950 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-leboss-500" /> Filtres Multicritères
              </h2>
              <Link
                href="/produits"
                className="text-xs font-bold text-slate-400 hover:text-leboss-600 inline-flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Réinitialiser
              </Link>
            </div>

            <form action="/produits" method="GET" className="space-y-5 text-xs">
              {/* Search Keyword */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                  Recherche (Nom, SKU, Marque)
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="q"
                    defaultValue={q}
                    placeholder="Ex: EliteBook, i7, LBT-..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-leboss-500"
                  />
                </div>
              </div>

              {/* Category Select */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                  Catégorie ({summary.totalCategories})
                </label>
                <select
                  name="categorie"
                  defaultValue={category}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-navy-950 focus:outline-none focus:border-leboss-500"
                >
                  <option value="all">Toutes les catégories ({summary.totalProducts})</option>
                  {summary.categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name} ({cat.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Select */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                  Marque Constructeur
                </label>
                <select
                  name="marque"
                  defaultValue={brand}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-navy-950 focus:outline-none focus:border-leboss-500"
                >
                  <option value="all">Toutes les marques</option>
                  {summary.brands.map((b) => (
                    <option key={b.slug} value={b.slug}>
                      {b.name} ({b.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Select */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                  État du matériel
                </label>
                <select
                  name="etat"
                  defaultValue={condition}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-navy-950 focus:outline-none focus:border-leboss-500"
                >
                  <option value="all">Tous les états</option>
                  <option value="REFURBISHED">Quasi-Neuf Certifié A+ (Garantie 90j)</option>
                  <option value="NEW">Neuf Scellé Constructeur</option>
                </select>
              </div>

              {/* Price Min / Max */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                  Budget en FCFA
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    name="min"
                    defaultValue={minPrice || ''}
                    placeholder="Min FCFA"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                  <input
                    type="number"
                    name="max"
                    defaultValue={maxPrice || ''}
                    placeholder="Max FCFA"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    name="stock"
                    value="true"
                    defaultChecked={inStockOnly}
                    className="rounded border-slate-300 text-leboss-500 focus:ring-leboss-500"
                  />
                  <span>En stock uniquement</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    name="promo"
                    value="true"
                    defaultChecked={promoOnly}
                    className="rounded border-slate-300 text-leboss-500 focus:ring-leboss-500"
                  />
                  <span>Offres promotionnelles ({summary.promoCount})</span>
                </label>
              </div>

              {/* Sort */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                  Trier par
                </label>
                <select
                  name="tri"
                  defaultValue={sort}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-navy-950"
                >
                  <option value="relevance">Pertinence &amp; Disponibilité</option>
                  <option value="price-asc">Prix croissant (FCFA)</option>
                  <option value="price-desc">Prix décroissant (FCFA)</option>
                  <option value="newest">Nouveautés</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
              >
                Appliquer les filtres
              </button>
            </form>
          </aside>

          {/* Right Product Grid (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Results Toolbar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="text-slate-600 font-medium">
                Affichage de <strong className="text-navy-950">{catalogResult.items.length}</strong> sur{' '}
                <strong className="text-navy-950">{catalogResult.total}</strong> produits correspondants
                {q ? ` pour « ${q} »` : ''}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Page {catalogResult.page} / {catalogResult.totalPages}</span>
              </div>
            </div>

            {/* Product Grid or Empty State */}
            {catalogResult.items.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
                <h3 className="text-xl font-extrabold text-navy-950">
                  Aucun équipement ne correspond exactement à ces critères
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Essayez d&apos;élargir votre recherche ou contactez notre service commercial B2B pour une cotation personnalisée.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <Link
                    href="/produits"
                    className="px-6 py-3 rounded-xl bg-navy-950 text-white text-xs font-extrabold"
                  >
                    Réinitialiser tous les filtres
                  </Link>
                  <Link
                    href="/contact#devis"
                    className="px-6 py-3 rounded-xl bg-leboss-500 text-white text-xs font-extrabold"
                  >
                    Demander un devis sur mesure
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {catalogResult.items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {catalogResult.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                {catalogResult.page > 1 && (
                  <Link
                    href={buildPageHref(catalogResult.page - 1)}
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-leboss-500 text-xs font-extrabold text-navy-950"
                  >
                    <ChevronLeft className="w-4 h-4" /> Précédent
                  </Link>
                )}

                <span className="px-4 py-2.5 rounded-xl bg-navy-950 text-white text-xs font-extrabold">
                  Page {catalogResult.page} sur {catalogResult.totalPages}
                </span>

                {catalogResult.page < catalogResult.totalPages && (
                  <Link
                    href={buildPageHref(catalogResult.page + 1)}
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-leboss-500 text-xs font-extrabold text-navy-950"
                  >
                    Suivant <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
