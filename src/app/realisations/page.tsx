import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { INITIAL_PROJECTS } from '@/data/cms-seed-data';

export const metadata: Metadata = {
  title: 'Projets & Réalisations Logicielles et IT à Abidjan',
  description:
    'Portfolio des projets réalisés par LEBOSS TECH : applications mobiles (Lounan, SRA, Djonan), logiciel ERP/POS Mon Gestionnaire Pro et déploiements d’infrastructure IT.',
  alternates: { canonical: 'https://lebosstech.ci/realisations' },
};

export default function RealisationsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-tech-grid text-white py-20 border-b border-white/10">
        <div className="container-leboss max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Études de Cas Documentées
          </span>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Nos Projets &amp; Réalisations
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
            Découvrez comment LEBOSS TECH transforme des problématiques métiers complexes en applications mobiles, logiciels de gestion et infrastructures fiables.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-leboss grid lg:grid-cols-2 gap-8">
          {INITIAL_PROJECTS.map((proj) => (
            <div
              key={proj.slug}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 bg-navy-950 overflow-hidden">
                  <Image
                    src={proj.heroImage}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold uppercase">
                      {proj.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-navy-950/80 text-white text-[10px] font-bold">
                      {proj.year} · {proj.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">{proj.title}</h2>
                  </div>
                </div>

                <div className="p-8 space-y-4 text-xs sm:text-sm">
                  <p className="text-slate-600 leading-relaxed">{proj.summary}</p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <strong className="text-navy-950 block mb-1">Problème rencontré :</strong>
                    <span className="text-slate-600">{proj.problem}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <strong className="text-navy-950 block mb-1">Solution déployée :</strong>
                    <span className="text-slate-600">{proj.solution}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <strong className="block mb-1 text-emerald-700">Résultat obtenu :</strong>
                    <span>{proj.result}</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/realisations/${proj.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-950 hover:text-leboss-600"
                >
                  Lire l&apos;étude de cas complète <ArrowUpRight className="w-4 h-4" />
                </Link>
                {proj.officialUrl && (
                  <a
                    href={proj.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-leboss-600 hover:underline"
                  >
                    Voir en ligne <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
