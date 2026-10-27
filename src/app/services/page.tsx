import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { INITIAL_SERVICES, SOFTWARE_SOLUTIONS } from '@/data/cms-seed-data';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';

export const metadata: Metadata = {
  title: 'Nos Expertises ESN, Développement Logiciel, Matériel & Maintenance IT à Abidjan',
  description:
    'Découvrez l’ensemble des domaines d’expertise de LEBOSS TECH SARL : ingénierie logicielle, applications mobiles, fourniture de matériel informatique B2B, réseau et maintenance PME.',
  alternates: { canonical: 'https://lebosstech.ci/services' },
};

export default function ServicesOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dark Corporate Hero */}
      <section className="bg-tech-grid text-white py-20 md:py-28 border-b border-white/10">
        <div className="container-leboss max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Entreprise de Services Numériques (ESN) &amp; Centrale IT
          </span>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
            Un écosystème complet de compétences technologiques.
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
            De la conception d&apos;applications métiers sur mesure au déploiement de parcs informatiques et de réseaux sécurisés, LEBOSS TECH accompagne durablement les entreprises en Côte d&apos;Ivoire.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-leboss grid md:grid-cols-2 gap-8">
          {INITIAL_SERVICES.map((srv, idx) => {
            const href =
              srv.slug === 'developpement'
                ? '/developpement'
                : srv.slug.startsWith('application-') ||
                  srv.slug.startsWith('logiciel-') ||
                  srv.slug.startsWith('integration-')
                ? `/developpement/${srv.slug}`
                : `/${srv.slug}`;

            return (
              <div
                key={srv.slug}
                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-leboss-50 text-leboss-600 text-xs font-extrabold uppercase tracking-wider">
                      0{idx + 1} · {srv.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy-950 mb-3">
                    {srv.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-leboss-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-navy-950 hover:text-leboss-600"
                  >
                    Découvrir cette expertise <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#devis-services"
                    className="text-xs font-bold text-leboss-600 hover:underline"
                  >
                    Demander un chiffrage →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Highlight of Proprietary Software */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container-leboss flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-400">
              Éditeur de Logiciels Propriétaires
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-2">
              Découvrez aussi nos {SOFTWARE_SOLUTIONS.length} applications déjà en production
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Mon Gestionnaire Pro, SRA, SRA PRO, Lounan, Djonan et Gérer mon Argent témoignent de notre maîtrise technique concrète.
            </p>
          </div>
          <Link
            href="/solutions"
            className="px-7 py-4 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shrink-0 shadow-glow-orange"
          >
            Explorer nos logiciels →
          </Link>
        </div>
      </section>

      {/* Quote Form */}
      <section id="devis-services" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="container-leboss max-w-4xl">
          <QuoteQualificationForm />
        </div>
      </section>
    </div>
  );
}
