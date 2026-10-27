import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selected Work — Études de Cas & Réalisations Logicielles',
  description:
    'Découvrez les réalisations logicielles, plateformes mobiles et systèmes critiques conçus par LEBOSS TECH à Abidjan : SRA, Mon Gestionnaire Pro, Lounan, Djonan.',
};

const PROJECTS = [
  {
    slug: 'sra',
    number: '01',
    title: 'SRA & SRA PRO',
    category: 'Logistique & Dispatch Urbain Temps Réel',
    description:
      'Orchestration en temps réel de courses, colis urgents et flottes de livreurs à travers les 10 communes d’Abidjan avec intégration native Mobile Money (Wave, Orange, MTN).',
    metrics: [
      { label: 'Attribution de course', value: '< 15s' },
      { label: 'Uptime Dispatch', value: '99.95%' },
      { label: 'Volume géré', value: 'Multi-communes' },
    ],
    stack: ['React Native', 'Node.js', 'PostGIS', 'Redis', 'Wave API'],
  },
  {
    slug: 'mon-gestionnaire-pro',
    number: '02',
    title: 'Mon Gestionnaire Pro',
    category: 'ERP, Caisse POS Offline & Conformité FNE',
    description:
      'Logiciel PC 64 bits de gestion commerciale, stocks multi-magasins et encaissement à grande vitesse, 100% opérationnel hors-ligne avec signature fiscale FNE et écritures SYSCOHADA.',
    metrics: [
      { label: 'Vitesse d’encaissement', value: '< 1.2s' },
      { label: 'Opérationnel hors-ligne', value: '100%' },
      { label: 'Conformité FNE', value: 'DGI Certifiée' },
    ],
    stack: ['C# .NET', 'SQLite Encrypted', 'SQL Server Sync', 'Thermal 80mm'],
  },
  {
    slug: 'lounan',
    number: '03',
    title: 'Lounan Platform',
    category: 'PropTech & Marketplace Immobilière Sécurisée',
    description:
      'Plateforme mobile de mise en relation immobilière anti-fraude en Côte d’Ivoire, intégrant un protocole de modération documentaire et un moteur de recherche multicritère ultra-rapide.',
    metrics: [
      { label: 'Authenticité annonces', value: '99.2%' },
      { label: 'Vitesse d’affichage mobile', value: '< 0.8s' },
      { label: 'Filtrage anti-doublon', value: 'Automatisé' },
    ],
    stack: ['React Native', 'Next.js', 'PostgreSQL', 'Cloudinary CDN'],
  },
  {
    slug: 'djonan',
    number: '04',
    title: 'Djonan Platform',
    category: 'Place de Marché d’Artisans & Techniciens Qualifiés',
    description:
      'Mise en relation géolocalisée immédiate avec des professionnels du dépannage d’urgence (plomberie, électricité, froid/climatisation, maintenance IT) vérifiés par commune à Abidjan.',
    metrics: [
      { label: 'Temps de mise en relation', value: '< 4 min' },
      { label: 'Artisans audités', value: '100% vérifiés' },
      { label: 'Taux de satisfaction', value: '98.6%' },
    ],
    stack: ['Android', 'Node.js', 'MongoDB Geospatial', 'Wave Pay'],
  },
  {
    slug: 'gerer-mon-argent',
    number: '05',
    title: 'Gérer mon Argent',
    category: 'Fintech Personnelle & Épargne Sécurisée',
    description:
      'Application mobile de suivi budgétaire en FCFA avec saisie vocale intelligente, alertes catégorisées, quêtes d’épargne et stockage 100% local chiffré sur l’appareil.',
    metrics: [
      { label: 'Confidentialité des données', value: '100% Locale' },
      { label: 'Devise native', value: 'FCFA' },
      { label: 'Sécurité biométrique', value: 'Hardware Key' },
    ],
    stack: ['Android / iOS', 'Local SQLite', 'Voice Recognition', 'Biometrics'],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="studio-container py-16 sm:py-24">
        <div className="max-w-4xl">
          <span className="technical-tag text-accent-orange block mb-4">
            // SELECTED WORK &bull; ÉTUDES DE CAS RÉELLES
          </span>
          <h1 className="display-hero text-3xl sm:text-6xl lg:text-7xl text-type-primary font-display font-medium tracking-tightest leading-[1.08] break-words">
            Des systèmes réels.<br />
            <span className="text-type-secondary">Conçus pour durer.</span>
          </h1>
          <p className="mt-8 text-type-secondary text-lg sm:text-xl font-sans leading-relaxed max-w-2xl">
            Nous ne présentons pas d&apos;exercices théoriques ni de faux clients. Chaque étude de cas documentée ici détaille un système en production, conçu et maintenu par LEBOSS TECH.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="studio-container space-y-12">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/[0.08] hover:border-white/20 transition-all group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-accent-orange font-bold">
                    PROJET {project.number}
                  </span>
                  <span className="text-white/20">//</span>
                  <span className="technical-tag text-type-tertiary">
                    {project.category}
                  </span>
                </div>

                <h2 className="display-title text-2xl sm:text-4xl text-type-primary font-display font-medium group-hover:text-white transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((st) => (
                    <span
                      key={st}
                      className="px-2.5 py-1 rounded bg-[#090A0B] border border-white/[0.06] font-mono text-[10px] text-type-secondary"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] lg:pl-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="font-mono text-lg font-bold text-accent-orange block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-type-tertiary font-mono block mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="btn-studio group mt-2"
                >
                  <span>CONSULTER L&apos;ÉTUDE DE CAS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Outro */}
      <section className="studio-container mt-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/[0.1] text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-medium text-type-primary">
            Vous souhaitez développer une solution propriétaire ?
          </h3>
          <p className="text-sm text-type-secondary">
            Bénéficiez de notre expertise de modélisation métier et de déploiement sécurisé.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-studio">
              DISCUTER DE VOTRE ARCHITECTURE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
