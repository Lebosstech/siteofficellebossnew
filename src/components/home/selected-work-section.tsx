'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectCase {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  clientContext: string;
  challenge: string;
  technicalApproach: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  interfaceType: string;
  interfaceBadge: string;
  codeSnippet: string;
}

const PROJECTS: ProjectCase[] = [
  {
    slug: 'sra',
    category: 'LOGISTICS & REAL-TIME DISPATCH',
    title: 'SRA & SRA PRO',
    tagline: 'Plateforme mobile de livraison urbaine à la demande et gestion de flotte',
    clientContext:
      'Marché de la logistique du dernier kilomètre à Abidjan : congestions routières, adressage informel et nécessité d’un paiement instantané par Mobile Money.',
    challenge:
      'Orchestrer l’attribution instantanée de milliers de plis et colis entre clients et coursiers dans 10 communes, tout en gérant les déconnexions réseau intermittentes.',
    technicalApproach:
      'Architecture distribuée basée sur WebSockets géolocalisés, algorithme de clustering géographique des coursiers par zone de chalandise et bascule automatique en mise en cache locale.',
    impactMetrics: [
      { label: 'Temps d’attribution', value: '< 15s' },
      { label: 'Disponibilité du dispatch', value: '99.95%' },
      { label: 'Couverture Abidjan', value: '10 communes' },
    ],
    technologies: ['React Native', 'Node.js', 'PostGIS', 'Redis Geohash', 'Wave API', 'Orange Money'],
    interfaceType: 'Mobile Dispatch Kernel',
    interfaceBadge: 'LIVE FLEET // ABJ',
    codeSnippet: `// Geohash Dispatch Allocation Kernel
const candidateCouriers = await redis.geosearch(
  'fleet:abidjan',
  { longitude, latitude },
  { radius: 3.5, unit: 'km' }
);
const optimalMatch = rankByEtaTraffic(candidateCouriers);`,
  },
  {
    slug: 'mon-gestionnaire-pro',
    category: 'ENTERPRISE ERP & RETAIL POS',
    title: 'Mon Gestionnaire Pro',
    tagline: 'ERP, Caisse POS 100% hors-ligne & conformité légale SYSCOHADA / FNE',
    clientContext:
      'PME, commerces de détail et grossistes en Côte d’Ivoire confrontés aux coupures de connexion internet et à l’obligation de Facturation Normalisée Électronique (FNE).',
    challenge:
      'Garantir un encaissement à la vitesse de frappe au clavier sans dépendance au réseau, tout en générant en temps réel les écritures comptables conformes au plan SYSCOHADA.',
    technicalApproach:
      'Application PC 64 bits ultra-rapide avec moteur de base de données embarqué à intégrité transactionnelle stricte, module de synchronisation asynchrone sécurisé et génération cryptographique de QR code FNE.',
    impactMetrics: [
      { label: 'Vitesse de caisse (F7/F8)', value: '< 1.2s / ticket' },
      { label: 'Fonctionnement hors-ligne', value: '100% garanti' },
      { label: 'Conformité FNE & DGI', value: '100% validé' },
    ],
    technologies: ['C# .NET / 64-bit Desktop', 'SQLite Encrypted', 'SQL Server Sync', 'Thermal 80mm', 'SYSCOHADA Matrix'],
    interfaceType: 'POS & Fiscal Ledger Engine',
    interfaceBadge: 'OFFLINE-FIRST CORE',
    codeSnippet: `// Cryptographic FNE Fiscal Signature
const fiscalSignature = signDgiPayload({
  nif: company.taxId,
  ticketId: sale.id,
  syscoCode: 'SYSCOHADA-701',
  timestamp: sale.utcIso
});`,
  },
  {
    slug: 'lounan',
    category: 'PROPTECH & SECURE MARKETPLACE',
    title: 'Lounan Platform',
    tagline: 'Moteur de recherche immobilière et mise en relation vérifiée anti-fraude',
    clientContext:
      'Secteur immobilier abidjanais marqué par la prolifération d’annonces fictives et d’intermédiaires non qualifiés.',
    challenge:
      'Concevoir un parcours de modération multicritère garantissant l’authenticité des biens et sécurisant la prise de contact directe.',
    technicalApproach:
      'Pipeline de certification documentaire des mandats, géoréférencement haute précision et galeries visuelles optimisées pour smartphone.',
    impactMetrics: [
      { label: 'Taux de conformité annonces', value: '99.2%' },
      { label: 'Temps de chargement', value: '< 0.8s mobile' },
      { label: 'Filtrage anti-doublon', value: 'Automatisé' },
    ],
    technologies: ['React Native', 'Next.js', 'PostgreSQL', 'Cloudinary CDN', 'Vector Search'],
    interfaceType: 'Verified Listing Grid',
    interfaceBadge: 'ZERO FRAUD PROTOCOL',
    codeSnippet: `// Anti-duplicate visual fingerprint
const visualHash = computeDHash(propertyImage);
const isDuplicate = await findSimilarListings(visualHash, 0.92);`,
  },
  {
    slug: 'djonan',
    category: 'ON-DEMAND SERVICES PLATFORM',
    title: 'Djonan Platform',
    tagline: 'Place de marché mobile d’artisans et techniciens vérifiés par commune',
    clientContext:
      'Besoin critique de dépannage d’urgence (plomberie, climatisation, électricité, maintenance informatique) à Abidjan.',
    challenge:
      'Connecter les particuliers et entreprises avec des artisans qualifiés évalués avec géolocalisation de proximité.',
    technicalApproach:
      'Algorithme de routing géolocalisé par commune et système d’évaluation réputationnelle immuable.',
    impactMetrics: [
      { label: 'Mise en relation moyenne', value: '< 4 min' },
      { label: 'Artisans audités', value: '100% vérifiés' },
      { label: 'Interventions réussies', value: '98.6%' },
    ],
    technologies: ['Android', 'Node.js', 'MongoDB Geospatial', 'Push Notifications', 'Wave Pay'],
    interfaceType: 'Geospatial Provider Network',
    interfaceBadge: 'VERIFIED SKILLS',
    codeSnippet: `// Nearest Verified Technician Routing
const technician = await Technician.findNearestVerified({
  commune: 'Marcory',
  specialty: 'HVAC_FROID',
  availableNow: true
});`,
  },
];

export function SelectedWorkSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentProject = PROJECTS[activeTab];

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#090A0B] overflow-hidden hairline-t hairline-b">
      {/* Background hairlines & ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.035),transparent_70%)] pointer-events-none" />

      {/* Continuous light stream track */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" style={{ animationDelay: '7s' }} />
      </div>

      <div className="studio-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <span className="technical-tag text-accent-orange block mb-4">
              // CHAPITRE 05 &mdash; SELECTED WORK
            </span>
            <h2 className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest">
              Selected Work.<br />
              <span className="text-type-secondary">Des idées devenues réalité.</span>
            </h2>
            <p className="mt-6 text-type-secondary text-base sm:text-lg leading-relaxed">
              Pas de fausses maquettes ni d&apos;études de cas fictives. Voici les plateformes, systèmes critiques et logiciels opérationnels conçus et déployés par LEBOSS TECH.
            </p>
          </div>

          <Link href="/work" className="btn-studio-ghost group self-start lg:self-auto">
            <span>VOIR TOUT LE PORTFOLIO</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Project Navigation Switcher Bar */}
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-12 hairline-b">
          {PROJECTS.map((project, idx) => (
            <button
              key={project.slug}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-xl font-mono text-xs transition-all shrink-0 flex items-center gap-3 border ${
                activeTab === idx
                  ? 'bg-dark-surface border-white/[0.15] text-type-primary shadow-xl'
                  : 'bg-transparent border-transparent text-type-secondary hover:text-type-primary hover:bg-white/[0.02]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-accent-orange shadow-[0_0_8px_rgba(255,106,0,0.8)]' : 'bg-white/20'}`} />
              <span className="font-semibold">{project.title}</span>
              <span className="text-[10px] text-type-tertiary">0{idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Immersive Case Study Stage */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/[0.1] relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="technical-tag text-accent-orange">
                    {currentProject.category}
                  </span>
                  <span className="text-white/20">//</span>
                  <span className="technical-tag text-type-tertiary">
                    ÉTUDE DE CAS N°0{activeTab + 1}
                  </span>
                </div>

                <h3 className="display-title text-3xl sm:text-4xl lg:text-5xl text-type-primary font-display font-medium">
                  {currentProject.title}
                </h3>
                <p className="mt-3 text-base text-type-secondary font-sans leading-relaxed">
                  {currentProject.tagline}
                </p>

                {/* Case Study Pillars */}
                <div className="mt-8 space-y-5">
                  <div className="p-4 rounded-xl bg-dark-surface2/60 border border-white/[0.04]">
                    <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                      01. CONTEXTE &amp; DÉFI OPÉRATIONNEL
                    </span>
                    <p className="text-xs sm:text-sm text-type-primary leading-relaxed font-sans">
                      {currentProject.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-surface2/60 border border-white/[0.04]">
                    <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                      02. APPROCHE &amp; ARCHITECTURE TECHNIQUE
                    </span>
                    <p className="text-xs sm:text-sm text-type-primary leading-relaxed font-sans">
                      {currentProject.technicalApproach}
                    </p>
                  </div>
                </div>

                {/* Real demonstrable metrics */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 hairline-t">
                  {currentProject.impactMetrics.map((metric, i) => (
                    <div key={i}>
                      <span className="text-lg sm:text-2xl font-mono font-bold text-accent-orange block">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-type-tertiary font-mono leading-tight block mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Deep Dive Link */}
              <div className="mt-10 pt-6 hairline-t flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-type-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${currentProject.slug}`}
                  className="btn-studio group"
                >
                  <span>LIRE L&apos;ÉTUDE COMPLÈTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Preview Stage */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-[#090A0B] border border-white/[0.12] p-6 shadow-2xl overflow-hidden">
                
                {/* Console header bar */}
                <div className="flex items-center justify-between pb-4 hairline-b mb-6 font-mono text-xs text-type-secondary">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 text-type-primary font-semibold">
                      {currentProject.interfaceType}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-accent-orange/10 text-accent-orange text-[10px] border border-accent-orange/20">
                    {currentProject.interfaceBadge}
                  </span>
                </div>

                {/* Architectural Code / Kernel Snippet */}
                <div className="p-4 rounded-xl bg-dark-surface/90 border border-white/[0.06] font-mono text-[11px] sm:text-xs text-type-secondary overflow-x-auto leading-relaxed">
                  <div className="flex items-center justify-between text-[10px] text-type-tertiary pb-2 mb-2 hairline-b">
                    <span>// KERNEL IMPLEMENTATION</span>
                    <span>TYPESCRIPT / C#</span>
                  </div>
                  <pre className="text-type-primary">
                    <code>{currentProject.codeSnippet}</code>
                  </pre>
                </div>

                {/* Performance SLA guarantee pill */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent-orange" />
                    <div>
                      <div className="text-xs font-mono font-semibold text-type-primary">
                        INTÉGRITÉ VÉRIFIÉE EN PRODUCTION
                      </div>
                      <div className="text-[11px] text-type-secondary">
                        Données transactionnelles certifiées sans perte
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    SLA 99.9%
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
