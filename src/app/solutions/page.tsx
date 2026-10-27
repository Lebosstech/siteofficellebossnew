import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';
import { SOFTWARE_SOLUTIONS } from '@/data/cms-seed-data';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';

export const metadata: Metadata = {
  title: 'Nos Solutions Numériques & Applications (SRA, Mon Gestionnaire Pro, Lounan, Djonan)',
  description:
    'Découvrez l’écosystème de logiciels et d’applications mobiles édités par LEBOSS TECH en Côte d’Ivoire : Mon Gestionnaire Pro, SRA, SRA PRO, Lounan, Djonan et Gérer mon Argent.',
  alternates: { canonical: 'https://lebosstech.ci/solutions' },
};

export default function SolutionsEcosystemPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dark Corporate Hero */}
      <section className="bg-tech-grid text-white py-20 md:py-28 border-b border-white/10">
        <div className="container-leboss">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Écosystème Logiciel LEBOSS TECH
            </span>
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              Des logiciels et applications conçus pour les réalités du terrain.
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              Au-delà du développement sur mesure pour nos clients B2B, <strong className="text-white">LEBOSS TECH SARL</strong> conçoit, édite et opère ses propres plateformes logicielles en Côte d&apos;Ivoire : ERP/POS hors-ligne, logistique urbaine, immobilier, artisanat et gestion financière.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#catalogue-logiciels"
                className="px-7 py-4 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
              >
                Explorer les 6 applications
              </a>
              <a
                href="#demander-demo"
                className="px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider transition-all"
              >
                Demander une démo ou un logiciel sur mesure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Showcase of all 6 Applications */}
      <section id="catalogue-logiciels" className="py-20 scroll-mt-20">
        <div className="container-leboss space-y-16">
          {SOFTWARE_SOLUTIONS.map((app, index) => (
            <div
              key={app.slug}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden grid lg:grid-cols-12"
            >
              {/* Visual Column */}
              <div
                className={`lg:col-span-5 bg-navy-950 p-6 sm:p-8 flex flex-col justify-between text-white ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-leboss-400 text-[10px] font-extrabold uppercase tracking-wider">
                      {app.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold">
                      ● {app.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white p-1.5 shrink-0 shadow-lg">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        fill
                        sizes="64px"
                        className="object-contain rounded-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-white">{app.name}</h2>
                      <p className="text-xs text-slate-400 mt-0.5">{app.platforms.join(' · ')}</p>
                    </div>
                  </div>

                  <div className="relative h-60 rounded-2xl overflow-hidden border border-white/10 bg-navy-900 mb-6">
                    <Image
                      src={app.heroImage}
                      alt={`Capture authentique ${app.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {app.keyMetrics.map((m) => (
                    <div key={m.label}>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                        {m.label}
                      </span>
                      <span className="text-xs font-extrabold text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
                      {app.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                      {app.tagline}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {app.fullDescription}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700">
                    <strong className="text-navy-950">Problématique résolue :</strong> {app.problemSolved}
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy-950 mb-3">
                      Fonctionnalités réelles intégrées :
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {app.features.map((feat, i) => (
                        <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                          <p className="text-xs font-extrabold text-navy-950 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-leboss-500 shrink-0" />
                            {feat.title}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/solutions/${app.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-leboss-500 text-white text-xs font-extrabold uppercase tracking-wider transition-colors"
                    >
                      Voir la fiche complète &amp; captures <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={app.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-leboss-50 hover:bg-leboss-500 text-leboss-600 hover:text-white text-xs font-extrabold transition-colors"
                    >
                      {app.officialUrlLabel} <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote & Custom Software Section */}
      <section id="demander-demo" className="py-20 bg-white border-t border-slate-200 scroll-mt-20">
        <div className="container-leboss max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              Déploiement &amp; Sur-Mesure
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-2">
              Vous souhaitez déployer l&apos;une de nos solutions ou créer votre propre application ?
            </h2>
          </div>
          <QuoteQualificationForm defaultServiceType="APP_DEMO" />
        </div>
      </section>
    </div>
  );
}
