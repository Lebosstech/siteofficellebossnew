import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  ShieldCheck,
  Smartphone,
  Globe,
  Database,
  CreditCard,
  Laptop,
  Network,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Layers,
  Award,
  Wrench,
  MapPin,
  MessageCircle,
  PhoneCall,
} from 'lucide-react';
import { getCatalogSummary, getProducts } from '@/lib/catalog-provider';
import {
  SOFTWARE_SOLUTIONS,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_MAINTENANCE_PLANS,
  INITIAL_FAQS,
} from '@/data/cms-seed-data';
import { ProductCard } from '@/components/catalog/product-card';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';
import { getWhatsAppUrl, OFFICIAL_PHONE_DISPLAY } from '@/lib/whatsapp';

export default async function HomePage() {
  const [summary, featuredRes, promoRes] = await Promise.all([
    getCatalogSummary(),
    getProducts({ featuredOnly: true, inStockOnly: true, limit: 8 }),
    getProducts({ promoOnly: true, inStockOnly: true, limit: 4 }),
  ]);

  const showcaseProducts =
    featuredRes.items.length >= 8
      ? featuredRes.items.slice(0, 8)
      : (await getProducts({ inStockOnly: true, limit: 8 })).items;

  const topCategories = summary.categories.slice(0, 8);
  const whatsappUrl = getWhatsAppUrl(
    'Bonjour LEBOSS TECH, je vous contacte depuis votre page d’accueil pour un besoin technologique.'
  );

  return (
    <div className="bg-white">
      {/* =====================================================================
          SECTION 1 — HERO CORPORATE (INSPIRATION AORA.TECH + IDENTITÉ LEBOSS)
         ===================================================================== */}
      <section className="relative bg-tech-grid text-white overflow-hidden border-b border-white/10">
        <div className="container-leboss py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Editorial Typography & Value Proposition (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-leboss-500 animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-200">
                  ESN · Éditeur Logiciel · Centrale IT &amp; Infogérance à Abidjan
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.04]">
                <span className="block text-white">VOTRE TECHNOLOGIE.</span>
                <span className="block text-leboss-500 mt-1">NOTRE EXPERTISE.</span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                Équipements informatiques, infrastructures réseau, développement logiciel et maintenance :{' '}
                <strong className="text-white font-semibold">LEBOSS TECH</strong> accompagne les entreprises dans leur performance numérique.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#nos-expertises"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-sm font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
                >
                  Découvrir nos expertises
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact-devis"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/20 text-white text-sm font-extrabold uppercase tracking-wider transition-all"
                >
                  Demander un devis
                </a>
              </div>

              {/* Real Quantitative Proof Bar */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                    {summary.totalProducts}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Équipements IT au catalogue
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-leboss-500">
                    6 Apps
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Logiciels propriétaires édités
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                    360°
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Logiciel · Matériel · Réseau
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Asymmetric Visual Composition (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative space-y-4">
                {/* Card 1: Software Engineering & Proprietary ERP/Apps */}
                <div className="bg-navy-900/90 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-leboss-400">
                      <Code2 className="w-4 h-4" /> 01 · Ingénierie Logicielle &amp; Éditeur
                    </span>
                    <Link
                      href="/solutions"
                      className="text-[11px] font-bold text-slate-300 hover:text-white inline-flex items-center gap-1"
                    >
                      6 Solutions <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 mb-4 bg-navy-950">
                    <Image
                      src="https://mongestionnairepro.com/screenshots/nova/01-tableau-de-bord-1920.webp"
                      alt="Mon Gestionnaire Pro — ERP & POS par LEBOSS TECH"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-white">
                        Mon Gestionnaire Pro · SRA · Lounan · Djonan
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold">
                        En production
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Apps Android & iOS', 'ERP & POS Hors-Ligne', 'SaaS & Web', 'API Mobile Money'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Split Bento: Hardware E-Commerce + Infrastructure & Support */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/produits"
                    className="group bg-navy-900/90 hover:bg-navy-800/90 border border-white/15 hover:border-leboss-500/50 rounded-3xl p-5 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-leboss-500/15 text-leboss-400 flex items-center justify-center">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-leboss-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-leboss-400">
                        02 · Boutique &amp; Centrale
                      </p>
                      <h2 className="text-base font-extrabold text-white mt-0.5">
                        {summary.totalProducts} Équipements Pro
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        PC portables HP/Dell/Lenovo, serveurs, imprimantes &amp; onduleurs APC.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/maintenance-informatique-abidjan"
                    className="group bg-navy-900/90 hover:bg-navy-800/90 border border-white/15 hover:border-leboss-500/50 rounded-3xl p-5 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                        <Network className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                        03 · Infrastructure &amp; SLA
                      </p>
                      <h2 className="text-base font-extrabold text-white mt-0.5">
                        Réseau &amp; Maintenance
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Câblage RJ45/Fibre, Wi-Fi Pro, sécurité &amp; infogérance PME à Abidjan.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2 — NOS TROIS UNIVERS (LES 3 PILIERS STRATÉGIQUES)
         ===================================================================== */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="container-leboss">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                Architecture d&apos;Offre Unique en Côte d&apos;Ivoire
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight mt-2">
                Nos Trois Univers Complémentaires
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md">
              Une entreprise ne devrait pas multiplier les prestataires pour faire fonctionner son logiciel, son matériel et son réseau. Nous réunissons ces trois disciplines sous un même toit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pilier 1 */}
            <div className="group relative rounded-3xl bg-navy-950 text-white p-8 md:p-10 border border-navy-800 shadow-xl flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-extrabold font-mono text-leboss-500">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 flex items-center justify-center">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">
                  INGÉNIERIE LOGICIELLE
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Applications mobiles, sites web, plateformes SaaS et logiciels métier conçus sur mesure pour digitaliser et automatiser vos opérations.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Développement Mobile Android &amp; iOS natif et multiplateforme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Plateformes Web, Extranets B2B &amp; Solutions SaaS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    ERP, Caisse POS &amp; Intégration API Mobile Money
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/developpement"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-leboss-400 hover:text-white transition-colors"
                >
                  Explorer le pôle logiciel <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="text-xs font-bold text-slate-400 hover:text-white"
                >
                  Voir nos 6 Apps →
                </Link>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="group relative rounded-3xl bg-slate-50 p-8 md:p-10 border border-slate-200/90 hover:border-leboss-500/50 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-extrabold font-mono text-navy-950">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-leboss-500 text-white flex items-center justify-center shadow-glow-orange">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight mb-3">
                  MATÉRIEL &amp; INFRASTRUCTURE
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Ordinateurs, imprimantes, onduleurs, réseaux et équipements professionnels rigoureusement sélectionnés et garantis par écrit.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    {summary.totalProducts} produits réels en stock (Neuf &amp; Quasi-Neuf Grade A+)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Gammes pro HP EliteBook/ProBook, Dell Latitude, Lenovo ThinkPad
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Imprimantes LaserJet, Onduleurs APC &amp; Équipements Cisco/Ubiquiti
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href="/produits"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-navy-950 hover:text-leboss-600 transition-colors"
                >
                  Accéder à la boutique ({summary.totalProducts}) <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/materiel-informatique"
                  className="text-xs font-bold text-slate-500 hover:text-navy-950"
                >
                  Offre B2B →
                </Link>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="group relative rounded-3xl bg-slate-50 p-8 md:p-10 border border-slate-200/90 hover:border-leboss-500/50 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-extrabold font-mono text-navy-950">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 text-leboss-500 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight mb-3">
                  MAINTENANCE &amp; SUPPORT
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Diagnostic, installation, sécurisation et suivi du parc informatique pour garantir la continuité d&apos;activité de vos équipes à Abidjan.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Contrats de maintenance préventive &amp; curative avec SLA PME
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Câblage réseau structuré RJ45/Fibre, baies &amp; Wi-Fi Entreprise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0" />
                    Sauvegardes 3-2-1, sécurité des postes &amp; SAV en atelier
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href="/maintenance-informatique-abidjan"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-navy-950 hover:text-leboss-600 transition-colors"
                >
                  Découvrir nos contrats SLA <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/installation-reseau-informatique-abidjan"
                  className="text-xs font-bold text-slate-500 hover:text-navy-950"
                >
                  Réseau IT →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3 — DOMAINES D'EXPERTISE (GRILLE BENTO DÉTAILLÉE)
         ===================================================================== */}
      <section id="nos-expertises" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
        <div className="container-leboss">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                Savoir-Faire d&apos;Ingénierie
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight mt-2">
                Nos Domaines d&apos;Expertise
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-leboss-500 text-xs font-extrabold uppercase tracking-wider text-navy-950 shadow-sm transition-all"
            >
              Tous nos services en détail <ArrowUpRight className="w-4 h-4 text-leboss-500" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIAL_SERVICES.map((srv, index) => {
              const href =
                srv.slug === 'developpement'
                  ? '/developpement'
                  : srv.slug.startsWith('application-') ||
                    srv.slug.startsWith('logiciel-') ||
                    srv.slug.startsWith('integration-')
                  ? `/developpement/${srv.slug}`
                  : `/${srv.slug}`;

              const IconComponent =
                srv.iconName === 'Smartphone'
                  ? Smartphone
                  : srv.iconName === 'Globe'
                  ? Globe
                  : srv.iconName === 'Database'
                  ? Database
                  : srv.iconName === 'CreditCard'
                  ? CreditCard
                  : srv.iconName === 'Laptop'
                  ? Laptop
                  : srv.iconName === 'Network'
                  ? Network
                  : srv.iconName === 'ShieldCheck'
                  ? ShieldCheck
                  : Code2;

              return (
                <Link
                  key={srv.slug}
                  href={href}
                  className="group bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-leboss-500 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-leboss-500 text-navy-950 group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-extrabold text-slate-300 group-hover:text-leboss-500">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-leboss-600 mb-1.5">
                      {srv.category === 'SOFTWARE'
                        ? 'Génie Logiciel'
                        : srv.category === 'HARDWARE'
                        ? 'Matériel B2B'
                        : 'Infrastructure & SLA'}
                    </span>

                    <h3 className="text-lg font-extrabold text-navy-950 group-hover:text-leboss-600 transition-colors leading-snug mb-3">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {srv.shortDesc}
                    </p>

                    <ul className="space-y-1.5 text-[11px] text-slate-500 mb-6">
                      {srv.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-leboss-500 font-bold">•</span>
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-navy-950 group-hover:text-leboss-600">
                    <span>Consulter l&apos;expertise</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4 — NOS SOLUTIONS NUMÉRIQUES (VITRINE DES 6 LOGICIELS LEBOSS)
         ===================================================================== */}
      <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
        <div className="container-leboss relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Éditeur de Logiciels &amp; Applications en Côte d&apos;Ivoire
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Nos Solutions Numériques Propriétaires
              </h2>
              <p className="text-sm sm:text-lg text-slate-300 mt-3 leading-relaxed">
                Découvrez les <strong className="text-white">6 applications et logiciels métiers</strong> conçus, édités et maintenus par l&apos;écosystème <strong className="text-leboss-400">LEBOSS TECH</strong>, utilisés chaque jour par des commerçants, livreurs, artisans et particuliers.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange shrink-0 transition-all"
            >
              Explorer tout l&apos;écosystème <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SOFTWARE_SOLUTIONS.map((app) => (
              <div
                key={app.slug}
                className="group bg-navy-900/90 hover:bg-navy-900 border border-white/10 hover:border-leboss-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Authentic Screenshot Preview Header */}
                  <Link href={`/solutions/${app.slug}`} className="block relative h-52 bg-navy-950 overflow-hidden border-b border-white/10">
                    <Image
                      src={app.heroImage}
                      alt={app.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-navy-950/90 backdrop-blur-md border border-white/15 text-[10px] font-extrabold uppercase tracking-wider text-leboss-400">
                        {app.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold">
                        ● {app.status}
                      </span>
                    </div>

                    {/* App Icon & Title Overlay */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-3.5">
                      <div className="relative w-13 h-13 w-12 h-12 rounded-2xl overflow-hidden bg-white p-1 shadow-lg shrink-0 border border-white/20">
                        <Image
                          src={app.icon}
                          alt={`Icône ${app.name}`}
                          fill
                          sizes="48px"
                          className="object-contain rounded-xl"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-extrabold text-white truncate group-hover:text-leboss-400 transition-colors">
                          {app.name}
                        </h3>
                        <p className="text-[11px] text-slate-300 truncate">{app.platforms.join(' · ')}</p>
                      </div>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {app.shortDescription}
                    </p>

                    <div className="space-y-2 pt-1">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        Fonctionnalités clés vérifiées :
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-200">
                        {app.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-leboss-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Actions: Internal Detail Sheet + Verified Official Store/Site Link */}
                <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center gap-2.5">
                  <Link
                    href={`/solutions/${app.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-leboss-500 text-white text-xs font-extrabold text-center transition-colors"
                  >
                    Fiche &amp; Captures
                  </Link>
                  <a
                    href={app.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={app.officialUrlLabel}
                    className="py-3 px-4 rounded-xl bg-navy-950 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>Lien officiel</span>
                    <ExternalLink className="w-3.5 h-3.5 text-leboss-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5 — BOUTIQUE INFORMATIQUE (CONNECTÉE AU CATALOGUE RÉEL DE 506 PRODUITS)
         ===================================================================== */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="container-leboss">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                Boutique &amp; Centrale d&apos;Achat B2B / B2C
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight mt-2">
                Équipements Informatiques en Stock ({summary.totalProducts} Références)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Ordinateurs portables professionnels, PC de bureau, imprimantes LaserJet, onduleurs APC et équipements réseaux livrés sous 24h/48h à Abidjan avec garantie écrite.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/produits?promo=true"
                className="px-5 py-3 rounded-xl bg-leboss-50 text-leboss-600 hover:bg-leboss-100 text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                Promotions ({summary.promoCount})
              </Link>
              <Link
                href="/produits"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-leboss-500 text-white text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                Voir les {summary.totalProducts} produits <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Real Category Pills with Authentic Product Counts */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            <Link
              href="/produits"
              className="px-4 py-2.5 rounded-2xl bg-navy-950 text-white text-xs font-extrabold"
            >
              Tous les produits ({summary.totalProducts})
            </Link>
            {topCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-leboss-500 hover:text-white text-navy-950 text-xs font-bold transition-colors"
              >
                {cat.name} <span className="opacity-60 ml-1">({cat.count})</span>
              </Link>
            ))}
          </div>

          {/* Featured / In-Stock Real Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Promotional Banner if promos exist */}
          {promoRes.items.length > 0 && (
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold uppercase tracking-widest mb-2">
                  Offres Spéciales Entreprises &amp; Particuliers
                </span>
                <h3 className="text-2xl font-extrabold">
                  {summary.promoCount} équipements en promotion immédiate
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Remises réelles vérifiées en FCFA sur une sélection d&apos;ordinateurs portables et périphériques professionnels.
                </p>
              </div>
              <Link
                href="/produits?promo=true"
                className="px-6 py-3.5 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shrink-0 shadow-glow-orange transition-all"
              >
                Découvrir les promotions →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          SECTION 6 — PROJETS ET RÉALISATIONS (PORTFOLIO CONTEXTE / PROBLÈME / SOLUTION / RÉSULTAT)
         ===================================================================== */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="container-leboss">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                Études de Cas &amp; Références
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight mt-2">
                Projets &amp; Réalisations Documentés
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Chaque réalisation est présentée avec sa problématique initiale, l&apos;architecture déployée par LEBOSS TECH et les résultats concrets obtenus.
              </p>
            </div>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-leboss-500 text-xs font-extrabold uppercase tracking-wider text-navy-950 transition-all"
            >
              Tout le portfolio <ArrowUpRight className="w-4 h-4 text-leboss-500" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {INITIAL_PROJECTS.map((proj) => (
              <div
                key={proj.slug}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative h-60 bg-navy-950 overflow-hidden border-b border-slate-100">
                    <Image
                      src={proj.heroImage}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold uppercase tracking-wider">
                        {proj.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-navy-950/80 text-white text-[10px] font-bold">
                        {proj.year} · {proj.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-xl font-extrabold text-white leading-snug">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 mb-1">
                          Problème initial
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">{proj.problem}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-leboss-600 mb-1">
                          Solution LEBOSS TECH
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">{proj.solution}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                        Résultat documenté
                      </p>
                      <p className="text-xs text-emerald-950 font-medium leading-relaxed">{proj.result}</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/realisations/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-950 hover:text-leboss-600"
                  >
                    Étude de cas <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7 — POURQUOI LEBOSS TECH ? (ACCOMPAGNEMENT LOCAL, GARANTIE & SLA PME)
         ===================================================================== */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="container-leboss space-y-20">
          {/* 4 Pillars of Credibility */}
          <div>
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                Différenciation &amp; Engagement Qualité
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight mt-2">
                Pourquoi les PME et Organisations choisissent LEBOSS TECH ?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-leboss-500/15 text-leboss-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-navy-950">
                  Présence Locale &amp; Proximité à Abidjan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Une équipe d&apos;ingénieurs et de techniciens basée à Abidjan (Marcory &amp; Adjamé), disponible pour intervenir sur site, livrer rapidement et assurer le suivi après-vente.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-leboss-500/15 text-leboss-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-navy-950">
                  Contrôle Technique 30 Points &amp; Garantie Écrite
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chaque poste est testé (SSD NVMe, RAM, batterie, refroidissement, écran) et couvert par une garantie réelle : 90 jours sur le reconditionné certifié A+ et 1 à 3 ans sur le neuf.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-leboss-500/15 text-leboss-600 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-navy-950">
                  Interlocuteur Unique Logiciel + Matériel
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fini les conflits entre le fournisseur de logiciel et le vendeur d&apos;ordinateurs : nous concevons l&apos;application, fournissons les terminaux et configurons le réseau.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-leboss-500/15 text-leboss-600 flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-navy-950">
                  Approche Pragmatique Adaptée aux PME
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Des solutions qui fonctionnent même sans connexion Internet (mode hors-ligne), des budgets transparents en FCFA et des factures normalisées conformes.
                </p>
              </div>
            </div>
          </div>

          {/* Offres de Maintenance PME */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                  Continuité d&apos;Exploitation
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-navy-950 mt-1">
                  Contrats de Maintenance &amp; Infogérance PME
                </h3>
              </div>
              <Link
                href="/maintenance-informatique-abidjan"
                className="text-xs font-extrabold text-leboss-600 hover:underline"
              >
                Voir le détail des SLA →
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {INITIAL_MAINTENANCE_PLANS.map((plan) => (
                <div
                  key={plan.slug}
                  className={`rounded-3xl p-8 flex flex-col justify-between border ${
                    plan.isPopular
                      ? 'bg-navy-950 text-white border-leboss-500 shadow-xl'
                      : 'bg-white text-navy-950 border-slate-200 shadow-card'
                  }`}
                >
                  <div>
                    {plan.isPopular && (
                      <span className="inline-block px-3 py-1 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold uppercase tracking-widest mb-4">
                        Recommandé PME Abidjan
                      </span>
                    )}
                    <h4 className="text-xl font-extrabold">{plan.name}</h4>
                    <p className={`text-xs mt-1 ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.subtitle}
                    </p>
                    <div className="my-6 pt-5 border-t border-current/10">
                      <span className="text-2xl font-extrabold text-leboss-500">{plan.priceLabel}</span>
                      <span className={`block text-xs mt-0.5 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <ul className="space-y-3 text-xs mb-8">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact-devis"
                    className={`w-full py-3.5 rounded-xl text-center text-xs font-extrabold uppercase tracking-wider transition-all ${
                      plan.isPopular
                        ? 'bg-leboss-500 hover:bg-leboss-600 text-white shadow-glow-orange'
                        : 'bg-navy-950 hover:bg-leboss-500 text-white'
                    }`}
                  >
                    Demander un audit du parc
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Corporate */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-leboss-500">
                Questions Fréquentes
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                Tout savoir sur notre fonctionnement
              </h3>
            </div>
            <div className="space-y-4">
              {INITIAL_FAQS.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-sm sm:text-base font-extrabold text-navy-950 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8 — CONTACT ET DEVIS (QUALIFICATION DE LA DEMANDE + WHATSAPP)
         ===================================================================== */}
      <section id="contact-devis" className="py-20 md:py-28 bg-tech-grid text-white scroll-mt-20">
        <div className="container-leboss">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <PhoneCall className="w-3.5 h-3.5" /> Parlons de votre projet
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Cadrons ensemble votre besoin technologique.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                  Que vous souhaitiez développer une application sur mesure, déployer <strong className="text-white">Mon Gestionnaire Pro</strong>, équiper vos collaborateurs en ordinateurs ou fiabiliser votre réseau à Abidjan, notre équipe vous répond sous 2h ouvrées.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-leboss-400">
                    Ligne Directe &amp; WhatsApp Business
                  </p>
                  <p className="text-xl font-extrabold text-white mt-1">{OFFICIAL_PHONE_DISPLAY}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Disponible du Lundi au Samedi, de 08h00 à 19h00</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-leboss-400">
                    Siège &amp; Atelier Technique
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    Marcory Anoumabo &amp; Adjamé — Abidjan, Côte d&apos;Ivoire
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    LEBOSS TECH SARL · RCCM : CI-ABJ-03-2026-B12-00749
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Démarrer une discussion WhatsApp immédiate
              </a>
            </div>

            {/* Right Interactive Qualification Form (7 cols) */}
            <div className="lg:col-span-7">
              <QuoteQualificationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
