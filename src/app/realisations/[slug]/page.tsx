import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { INITIAL_PROJECTS } from '@/data/cms-seed-data';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';

export async function generateStaticParams() {
  return INITIAL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proj = INITIAL_PROJECTS.find((p) => p.slug === slug);
  if (!proj) return { title: 'Étude de cas' };

  return {
    title: `${proj.title} — Étude de cas | LEBOSS TECH`,
    description: proj.summary,
    alternates: { canonical: `https://lebosstech.ci/realisations/${proj.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proj = INITIAL_PROJECTS.find((p) => p.slug === slug);
  if (!proj) notFound();

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-tech-grid text-white py-16 md:py-24 border-b border-white/10">
        <div className="container-leboss">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Retour aux réalisations
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-leboss-500 text-white text-xs font-extrabold uppercase">
                  {proj.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                  {proj.year} · {proj.status}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {proj.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {proj.summary}
              </p>
              {proj.officialUrl && (
                <a
                  href={proj.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange"
                >
                  Accéder à la solution en production <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/15 bg-navy-900 shadow-2xl">
                <Image
                  src={proj.heroImage}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-leboss max-w-4xl space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-navy-950 mb-2">1. Contexte du projet</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{proj.context}</p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-navy-950 mb-2">2. Problématique identifiée</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{proj.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-navy-950 mb-2">3. Solution conçue par LEBOSS TECH</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{proj.solution}</p>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
              <h2 className="text-lg font-extrabold text-emerald-900 flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 4. Résultat &amp; Impact opérationnel
              </h2>
              <p className="text-sm sm:text-base text-emerald-950 leading-relaxed">{proj.result}</p>
            </div>
          </div>

          <QuoteQualificationForm defaultProduct={`Projet similaire à : ${proj.title}`} />
        </div>
      </section>
    </div>
  );
}
