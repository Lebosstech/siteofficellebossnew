'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Code2,
  Cpu,
  ShieldCheck,
  Smartphone,
  Laptop,
  Network,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { OFFICIAL_PHONE_DISPLAY } from '@/lib/whatsapp';

const EXPERTISES_MENU = [
  {
    title: 'Développement Logiciel & SaaS',
    desc: 'Applications web, ERP/CRM métier et automatisation des processus',
    href: '/developpement',
    icon: Code2,
  },
  {
    title: 'Applications Mobiles Android & iOS',
    desc: 'Conception native et multiplateforme adaptée au marché local',
    href: '/developpement/application-mobile-abidjan',
    icon: Smartphone,
  },
  {
    title: 'API & Paiements Mobile Money',
    desc: 'Intégration sécurisée Wave, Orange Money, MTN MoMo & Paystack',
    href: '/developpement/integration-api-mobile-money',
    icon: Layers,
  },
  {
    title: 'Matériel & Parcs Entreprises',
    desc: 'Ordinateurs professionnels, serveurs, imprimantes & onduleurs',
    href: '/materiel-informatique',
    icon: Laptop,
  },
  {
    title: 'Infrastructure Réseau & Wi-Fi Pro',
    desc: 'Câblage structuré RJ45/Fibre, baies de brassage, VLAN & sécurité',
    href: '/installation-reseau-informatique-abidjan',
    icon: Network,
  },
  {
    title: 'Maintenance & Infogérance IT',
    desc: 'Contrats SLA PME, visites préventives, dépannage & sauvegarde',
    href: '/maintenance-informatique-abidjan',
    icon: ShieldCheck,
  },
];

const SOFTWARE_MENU = [
  {
    name: 'Mon Gestionnaire Pro',
    tag: 'ERP, Caisse POS & Comptabilité SYSCOHADA',
    href: '/solutions/mon-gestionnaire-pro',
    badge: 'Windows & Cloud',
  },
  {
    name: 'SRA — Plateforme de Livraison',
    tag: 'Commande de coursiers & expédition de colis',
    href: '/solutions/sra',
    badge: 'Google Play',
  },
  {
    name: 'SRA PRO — Application Livreurs',
    tag: 'Dispatching GPS, gestion des courses & revenus',
    href: '/solutions/sra-pro',
    badge: 'Google Play',
  },
  {
    name: 'Lounan — Solution Immobilière',
    tag: 'Recherche vérifiée de logements, terrains & bureaux',
    href: '/solutions/lounan',
    badge: 'Google Play',
  },
  {
    name: 'Djonan — Artisans & Services',
    tag: 'Mise en relation avec des artisans qualifiés',
    href: '/solutions/djonan',
    badge: 'Google Play',
  },
  {
    name: 'Gérer mon Argent',
    tag: 'Gestion financière personnelle, budget & épargne',
    href: '/solutions/gerer-mon-argent',
    badge: 'Google Play',
  },
];

const SHOP_CATEGORIES = [
  { name: 'Ordinateurs Portables Pro', href: '/categories/ordinateur-portable' },
  { name: 'Ordinateurs de Bureau & All-in-One', href: '/categories/ordinateur-de-bureau' },
  { name: 'Imprimantes Laser & Multifonctions', href: '/categories/imprimante' },
  { name: 'Onduleurs APC & Protection Électrique', href: '/categories/onduleur' },
  { name: 'Réseaux, Switchs & Routeurs Wi-Fi', href: '/categories/reseau' },
  { name: 'Écrans, Disques SSD & Accessoires', href: '/produits' },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchOpen(false);
    setMobileOpen(false);
    router.push(`/produits?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-950/95 backdrop-blur-md border-b border-white/10 text-white">
      {/* Top Corporate Bar */}
      <div className="bg-black/40 border-b border-white/5 text-[11px] text-slate-300 hidden md:block">
        <div className="container-leboss py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-leboss-500 animate-pulse" />
              ESN · Éditeur Logiciel · Centrale Matériel & Infrastructure IT
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-leboss-500" />
              Abidjan, Côte d&apos;Ivoire (RCCM : CI-ABJ-03-2026-B12-00749)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+2250566821609"
              className="inline-flex items-center gap-1.5 hover:text-leboss-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-leboss-500" />
              {OFFICIAL_PHONE_DISPLAY}
            </a>
            <a
              href="mailto:contact@lebosstech.ci"
              className="inline-flex items-center gap-1.5 hover:text-leboss-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-leboss-500" />
              contact@lebosstech.ci
            </a>
            <Link
              href="/ressources"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Guides & Ressources
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-leboss h-20 flex items-center justify-between gap-4">
        {/* Official Brand Logo — Preserved strictly intact */}
        <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-sm group-hover:shadow-glow-orange transition-all">
            <Image
              src="/images/logo.webp"
              alt="Logo Officiel LEBOSS TECH"
              fill
              sizes="48px"
              priority
              className="object-contain"
            />
          </div>
          <div>
            <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
              LEBOSS <span className="text-leboss-500">TECH</span>
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mt-1">
              Technologie &amp; Expertise
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
              pathname === '/' ? 'text-leboss-500 bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Accueil
          </Link>

          {/* Dropdown 1: Expertises */}
          <div className="relative group">
            <Link
              href="/services"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname?.startsWith('/services') || pathname?.startsWith('/developpement')
                  ? 'text-leboss-500 bg-white/5'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Expertises <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 w-[640px]">
              <div className="bg-navy-900 border border-white/10 rounded-3xl p-6 shadow-2xl grid grid-cols-2 gap-3">
                {EXPERTISES_MENU.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-leboss-500/15 border border-leboss-500/30 flex items-center justify-center text-leboss-400 shrink-0 group-hover/item:bg-leboss-500 group-hover/item:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-white group-hover/item:text-leboss-400 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-slate-400 leading-snug mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dropdown 2: Nos Solutions Numériques (6 Apps) */}
          <div className="relative group">
            <Link
              href="/solutions"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname?.startsWith('/solutions')
                  ? 'text-leboss-500 bg-white/5'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-leboss-500" />
              Nos Logiciels
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 w-[600px]">
              <div className="bg-navy-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-leboss-400">
                      Écosystème Logiciel LEBOSS TECH
                    </p>
                    <p className="text-[11px] text-slate-400">
                      6 solutions propriétaires développées et maintenues par nos ingénieurs
                    </p>
                  </div>
                  <Link
                    href="/solutions"
                    className="text-xs font-bold text-white hover:text-leboss-400 inline-flex items-center gap-1"
                  >
                    Tout voir <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {SOFTWARE_MENU.map((app) => (
                    <Link
                      key={app.href}
                      href={app.href}
                      className="p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-extrabold text-white">{app.name}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-leboss-500/15 text-leboss-400">
                          {app.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{app.tag}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown 3: Boutique Matériel */}
          <div className="relative group">
            <Link
              href="/produits"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname?.startsWith('/produits') || pathname?.startsWith('/categories')
                  ? 'text-leboss-500 bg-white/5'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-leboss-500" />
              Boutique IT
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 w-80">
              <div className="bg-navy-900 border border-white/10 rounded-3xl p-4 shadow-2xl space-y-1">
                {SHOP_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.href + cat.name}
                    href={cat.href}
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-white/10">
                  <Link
                    href="/produits"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-leboss-500/15 text-leboss-400 hover:bg-leboss-500 hover:text-white text-xs font-extrabold transition-colors"
                  >
                    <span>Explorer tout le catalogue</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/realisations"
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
              pathname?.startsWith('/realisations')
                ? 'text-leboss-500 bg-white/5'
                : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Réalisations
          </Link>

          <Link
            href="/a-propos"
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
              pathname === '/a-propos' ? 'text-leboss-500 bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            L&apos;Entreprise
          </Link>
        </nav>

        {/* Right Actions: Search, Cart, Corporate Quote CTA */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Rechercher un produit ou une référence"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>

          <Link
            href="/panier"
            className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-colors"
            aria-label="Panier"
          >
            <ShoppingCart className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold flex items-center justify-center shadow-glow-orange">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/contact#devis"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
          >
            Demander un devis
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="bg-navy-900 border-t border-white/10 py-4">
          <div className="container-leboss">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un ordinateur, une référence SKU (LBT-...), HP, Dell, Lenovo, Onduleur..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-leboss-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider"
              >
                Rechercher
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10 px-4 pt-4 pb-8 space-y-5 max-h-[85vh] overflow-y-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher dans le catalogue..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-navy-900 border border-white/15 text-sm text-white"
            />
            <button type="submit" className="px-4 py-2.5 rounded-xl bg-leboss-500 text-white text-xs font-bold">
              OK
            </button>
          </form>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              Nos Expertises (ESN & IT)
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-leboss-400 hover:bg-white/5"
            >
              Nos Solutions Numériques (6 Applications)
            </Link>
            <Link
              href="/produits"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              Boutique Informatique (Catalogue)
            </Link>
            <Link
              href="/realisations"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              Projets & Réalisations
            </Link>
            <Link
              href="/ressources"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              Guides & Ressources
            </Link>
            <Link
              href="/a-propos"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              À propos de LEBOSS TECH
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-white/5"
            >
              Contact & Devis
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              href="/contact#devis"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-xl bg-leboss-500 text-white text-center text-xs font-extrabold uppercase tracking-wider"
            >
              Demander un devis B2B
            </Link>
            <a
              href="tel:+2250566821609"
              className="w-full py-2.5 rounded-xl bg-white/5 text-slate-200 text-center text-xs font-bold"
            >
              Appeler : {OFFICIAL_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
