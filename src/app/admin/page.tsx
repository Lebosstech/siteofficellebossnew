'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  Settings,
  Download,
  Plus,
  Search,
  LogOut,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Layers,
  Tag,
  Edit3,
  Trash2,
  ExternalLink,
  RefreshCw,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { formatFCFA } from '@/lib/utils';

interface AdminMetrics {
  totalProducts: number;
  inStockCount: number;
  outOfStockCount: number;
  promoCount: number;
  featuredCount: number;
  totalCategories: number;
  totalBrands: number;
  softwareAppsCount: number;
  ordersCount: number;
  pendingOrdersCount: number;
  confirmedRevenue: number;
  quotesCount: number;
  contactsCount: number;
}

interface AdminProduct {
  id: string;
  sku: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice: number | null;
  stockQuantity: number;
  inStock: boolean;
  condition: string;
  categoryName: string;
  categorySlug: string;
  brandName: string | null;
  mainImage: string;
  isFeatured: boolean;
  isPromo: boolean;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'quotes' | 'cms'>('overview');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [categories, setCategories] = useState<Array<{ slug: string; name: string; count: number }>>([]);
  const [brands, setBrands] = useState<Array<{ slug: string; name: string; count: number }>>([]);
  const [orders, setOrders] = useState<Array<Record<string, unknown>>>([]);
  const [quotes, setQuotes] = useState<Array<Record<string, unknown>>>([]);
  const [softwareApps, setSoftwareApps] = useState<Array<Record<string, unknown>>>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [statusBanner, setStatusBanner] = useState<string | null>(null);

  const [productForm, setProductForm] = useState({
    name: '',
    sku: '',
    price: 250000,
    compareAtPrice: '',
    stockQuantity: 5,
    condition: 'REFURBISHED',
    warrantyInfo: 'Garantie 90 jours pièces et main-d’œuvre en atelier à Abidjan.',
    description: '',
    imageUrl: '',
  });

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/dashboard');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      setUser(data.user);
      setMetrics(data.metrics);
      setProducts(data.products || []);
      setCategories(data.categories || []);
      setBrands(data.brands || []);
      setOrders(data.orders || []);
      setQuotes(data.quotes || []);
      setSoftwareApps(data.cms?.softwareSolutions || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.brandName && p.brandName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-leboss-500 animate-spin mx-auto" />
          <p className="text-sm font-bold text-navy-950">Chargement de l&apos;administration centralisée LEBOSS TECH...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-navy-950 text-white shrink-0 flex flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1">
                <Image src="/images/logo.webp" alt="LEBOSS TECH" fill sizes="40px" className="object-contain" />
              </div>
              <div>
                <span className="block font-extrabold text-sm tracking-tight">
                  LEBOSS <span className="text-leboss-500">ADMIN</span>
                </span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">
                  {user?.role || 'ADMIN'}
                </span>
              </div>
            </Link>
          </div>

          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activeTab === 'overview'
                  ? 'bg-leboss-500 text-white shadow-glow-orange'
                  : 'text-slate-300 hover:bg-slate-800/70'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Vue d&apos;ensemble
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activeTab === 'products'
                  ? 'bg-leboss-500 text-white shadow-glow-orange'
                  : 'text-slate-300 hover:bg-slate-800/70'
              }`}
            >
              <span className="flex items-center gap-3">
                <Package className="w-4 h-4" /> Catalogue Produits
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20">
                {metrics?.totalProducts || 0}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activeTab === 'orders'
                  ? 'bg-leboss-500 text-white shadow-glow-orange'
                  : 'text-slate-300 hover:bg-slate-800/70'
              }`}
            >
              <span className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4" /> Commandes &amp; Paystack
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20">
                {metrics?.ordersCount || 0}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('quotes')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activeTab === 'quotes'
                  ? 'bg-leboss-500 text-white shadow-glow-orange'
                  : 'text-slate-300 hover:bg-slate-800/70'
              }`}
            >
              <span className="flex items-center gap-3">
                <FileText className="w-4 h-4" /> Devis B2B &amp; Projets
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20">
                {metrics?.quotesCount || 0}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('cms')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                activeTab === 'cms'
                  ? 'bg-leboss-500 text-white shadow-glow-orange'
                  : 'text-slate-300 hover:bg-slate-800/70'
              }`}
            >
              <span className="flex items-center gap-3">
                <Settings className="w-4 h-4" /> Logiciels &amp; Contenus
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20">
                {metrics?.softwareAppsCount || 6}
              </span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800 space-y-3 mt-6">
          <div className="px-3 py-2 rounded-xl bg-slate-900/90 text-xs">
            <p className="font-bold text-white truncate">{user?.name}</p>
            <p className="text-slate-400 truncate">{user?.email}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-xs font-bold text-red-300"
            >
              <LogOut className="w-3.5 h-3.5" /> Sortir
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {statusBanner && (
          <div className="mb-6 p-4 rounded-2xl bg-navy-950 text-white text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-leboss-500" /> {statusBanner}
            </span>
            <button onClick={() => setStatusBanner(null)} className="text-slate-400 hover:text-white">
              Fermer
            </button>
          </div>
        )}

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && metrics && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-navy-950">
                  Administration Centralisée LEBOSS TECH
                </h1>
                <p className="text-sm text-slate-500">
                  Pilotage du catalogue matériel ({metrics.totalProducts} produits), de l&apos;écosystème logiciel ({metrics.softwareAppsCount} apps) et des flux commerciaux.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/api/admin/export?type=products"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-leboss-500 text-xs font-bold text-navy-950 shadow-sm"
                >
                  <Download className="w-4 h-4 text-leboss-500" /> Exporter 506 Produits (CSV)
                </a>
                <a
                  href="/api/admin/export?type=orders"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-leboss-500 text-xs font-bold text-navy-950 shadow-sm"
                >
                  <Download className="w-4 h-4 text-leboss-500" /> Exporter Commandes (CSV)
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Catalogue Matériel</span>
                  <Package className="w-5 h-5 text-leboss-500" />
                </div>
                <p className="text-3xl font-extrabold text-navy-950">{metrics.totalProducts}</p>
                <p className="text-xs text-slate-500 mt-2">
                  <span className="text-emerald-600 font-bold">{metrics.inStockCount} en stock</span> •{' '}
                  <span className="text-red-500 font-bold">{metrics.outOfStockCount} en rupture</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Écosystème Logiciel</span>
                  <Sparkles className="w-5 h-5 text-leboss-500" />
                </div>
                <p className="text-3xl font-extrabold text-navy-950">{metrics.softwareAppsCount} Apps</p>
                <p className="text-xs text-slate-500 mt-2">
                  MGP, SRA, SRA PRO, Lounan, Djonan, GMA
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">CA Confirmé</span>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-2xl font-extrabold text-navy-950">{formatFCFA(metrics.confirmedRevenue)}</p>
                <p className="text-xs text-slate-500 mt-2">
                  {metrics.ordersCount} commandes reçues
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Devis B2B &amp; Contacts</span>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-3xl font-extrabold text-navy-950">
                  {metrics.quotesCount + metrics.contactsCount}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Demandes qualifiées reçues
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card">
                <h2 className="text-lg font-extrabold text-navy-950 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-leboss-500" /> Catégories Produits ({metrics.totalCategories})
                </h2>
                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-2">
                  {categories.map((cat) => (
                    <div key={cat.slug} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs">
                      <span className="font-bold text-navy-950">{cat.name}</span>
                      <span className="px-2.5 py-1 rounded-full bg-leboss-50 text-leboss-600 font-extrabold">
                        {cat.count} produits
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card">
                <h2 className="text-lg font-extrabold text-navy-950 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-leboss-500" /> Marques Constructeurs ({metrics.totalBrands})
                </h2>
                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-2">
                  {brands.slice(0, 15).map((b) => (
                    <div key={b.slug} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs">
                      <span className="font-bold text-navy-950">{b.name}</span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 font-extrabold">
                        {b.count} références
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold text-navy-950">
                  Gestion des Produits &amp; des Stocks
                </h1>
                <p className="text-sm text-slate-500">
                  Créez, modifiez ou archivez des fiches produits et pilotez vos stocks en temps réel.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="/api/admin/export?type=products"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-navy-950"
                >
                  <Download className="w-4 h-4" /> Export CSV
                </a>
                <button
                  onClick={() => setShowProductModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-bold shadow-glow-orange"
                >
                  <Plus className="w-4 h-4" /> Nouveau Produit
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filtrer par nom de produit, SKU (LBT-...) ou marque..."
                className="w-full text-sm focus:outline-none"
              />
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                      <th className="py-3.5 px-4">Produit</th>
                      <th className="py-3.5 px-4">SKU / État</th>
                      <th className="py-3.5 px-4">Catégorie</th>
                      <th className="py-3.5 px-4">Prix FCFA</th>
                      <th className="py-3.5 px-4">Stock</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/80">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-11 h-11 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                              <Image src={p.mainImage} alt={p.name} fill sizes="44px" className="object-contain p-1" />
                            </div>
                            <div className="max-w-xs">
                              <p className="font-bold text-navy-950 truncate">{p.name}</p>
                              <p className="text-[11px] text-slate-400">{p.brandName || 'Générique'}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-mono font-semibold text-slate-700 block">{p.sku}</span>
                          <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold">
                            {p.condition === 'NEW' ? 'Neuf' : 'Quasi-Neuf'}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-600">{p.categoryName}</td>
                        <td className="py-3 px-4">
                          <span className="font-extrabold text-navy-950">{formatFCFA(p.price)}</span>
                        </td>
                        <td className="py-3 px-4">
                          {p.inStock ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">
                              <CheckCircle2 className="w-3 h-3" /> {p.stockQuantity} u.
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-bold">
                              <AlertTriangle className="w-3 h-3" /> Rupture
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right space-x-1">
                          <Link
                            href={`/produits/${p.slug}`}
                            target="_blank"
                            className="inline-flex p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => setShowProductModal(true)}
                            className="inline-flex p-2 rounded-lg text-blue-600 hover:bg-blue-50"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={async () => {
                              const res = await fetch(`/api/admin/products?id=${p.id}`, { method: 'DELETE' });
                              const data = await res.json();
                              setStatusBanner(data.message || data.error || 'Action exécutée.');
                              fetchDashboard();
                            }}
                            className="inline-flex p-2 rounded-lg text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-extrabold text-navy-950">Commandes &amp; Transactions Paystack</h1>
            {orders.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <ShoppingCart className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="font-extrabold text-navy-950 mb-1">Aucune commande enregistrée</h3>
                <p className="text-xs text-slate-500">
                  Les nouvelles commandes passées sur /commande apparaîtront automatiquement ici.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card p-6">
                <p className="text-xs font-bold">{orders.length} commandes trouvées.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: QUOTES */}
        {activeTab === 'quotes' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-extrabold text-navy-950">Demandes de Devis B2B &amp; Cadrage Projet</h1>
            {quotes.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="font-extrabold text-navy-950 mb-1">Aucune demande en attente</h3>
                <p className="text-xs text-slate-500">
                  Les demandes soumises depuis l&apos;accueil ou /contact s&apos;afficheront ici.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {quotes.map((q) => (
                  <div key={String(q.id)} className="bg-white rounded-2xl p-5 border border-slate-200">
                    <span className="text-xs font-mono font-bold text-leboss-600">{String(q.referenceNumber)}</span>
                    <h3 className="font-extrabold text-navy-950">{String(q.fullName)}</h3>
                    <p className="text-xs text-slate-600 mt-1">{String(q.description)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: CMS & SOFTWARE SOLUTIONS */}
        {activeTab === 'cms' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-extrabold text-navy-950">
                Écosystème Logiciel (6 Apps) &amp; Paramètres Corporate
              </h1>
              <p className="text-sm text-slate-500">
                Solutions numériques LEBOSS TECH publiées dans la vitrine corporate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {softwareApps.map((app) => (
                <div key={String(app.slug)} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-leboss-600">{String(app.category)}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      {String(app.status)}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-navy-950">{String(app.name)}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{String(app.shortDescription)}</p>
                  <div className="pt-2 flex items-center justify-between text-xs font-bold">
                    <Link href={`/solutions/${String(app.slug)}`} target="_blank" className="text-navy-950 hover:text-leboss-600">
                      Voir la fiche →
                    </Link>
                    <a href={String(app.officialUrl)} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-navy-950">
                      Lien officiel ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showProductModal && (
          <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl">
              <h2 className="text-xl font-extrabold text-navy-950 mb-4">Ajouter / Modifier un Produit</h2>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await fetch('/api/admin/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      ...productForm,
                      price: Number(productForm.price),
                      compareAtPrice: productForm.compareAtPrice ? Number(productForm.compareAtPrice) : null,
                      stockQuantity: Number(productForm.stockQuantity),
                      images: productForm.imageUrl ? [{ url: productForm.imageUrl, isMain: true }] : [],
                    }),
                  });
                  const data = await res.json();
                  setShowProductModal(false);
                  setStatusBanner(data.error || 'Produit enregistré.');
                  fetchDashboard();
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-600 mb-1">Nom exact du produit *</label>
                    <input
                      type="text"
                      required
                      value={productForm.name}
                      onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-600 mb-1">Référence SKU *</label>
                    <input
                      type="text"
                      required
                      value={productForm.sku}
                      onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowProductModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-leboss-500 text-white font-bold"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
