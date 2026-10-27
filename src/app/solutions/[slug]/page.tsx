import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  Users,
} from 'lucide-react';
import { SOFTWARE_SOLUTIONS } from '@/data/cms-seed-data';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';

export async function generateStaticParams() {
  return SOFTWARE_SOLUTIONS.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = SOFTWARE_SOLUTIONS.find((a) => a.slug === slug);
  if (!app) return { title: 'Solution introuvable' };

  return {
    title: `${app.name} — ${app.category} | Écosystème LEBOSS TECH`,
    description: app.shortDescription,
    alternates: { canonical: `https://lebosstech.ci/solutions/${app.slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = SOFTWARE_SOLUTIONS.find((a) => a.slug === slug);
  if (!app) notFound();

  const otherApps = SOFTWARE_SOLUTIONS.filter((a) => a.slug !== app.slug);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dark Hero */}
      <section className="bg-tech-grid text-white py-16 md:py-24 border-b border-white/10">
        <div className="container-leboss">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Retour aux solutions numériques LEBOSS TECH
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-leboss-500/20 border border-leboss-500/40 text-leboss-400 text-xs font-extrabold uppercase tracking-wider">
                  {app.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold">
                  ● {app.status}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white p-1.5 shadow-xl shrink-0">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    sizes="80px"
                    className="object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                    {app.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Plateformes disponibles : <strong className="text-white">{app.platforms.join(' · ')}</strong>
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
                {app.tagline}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {app.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={app.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
                >
                  {app.officialUrlLabel} <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#devis-solution"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider transition-all"
                >
                  Demander une démo ou intégration B2B
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-navy-900 border border-white/15 rounded-3xl p-4 shadow-2xl">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-navy-950">
                  <Image
                    src={app.heroImage}
                    alt={app.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-white/10 text-center">
                  {app.keyMetrics.map((m) => (
                    <div key={m.label}>
                      <span className="block text-[10px] uppercase text-slate-400">{m.label}</span>
                      <span className="text-xs font-extrabold text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Screenshots Gallery */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container-leboss">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              Aperçu Authentique de l&apos;Interface
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              Captures d&apos;écran officielles de {app.shortName}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.screenshots.map((shot, idx) => (
              <div
                key={shot + idx}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-navy-950 border border-slate-200 shadow-card"
              >
                <Image
                  src={shot}
                  alt={`${app.name} capture ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Features & Target Audience */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-leboss grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Fonctionnalités détaillées de {app.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {app.features.map((feat, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card">
                  <div className="w-9 h-9 rounded-xl bg-leboss-50 text-leboss-600 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-navy-950 mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card space-y-4">
              <h3 className="text-base font-extrabold text-navy-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-leboss-500" /> Utilisateurs Cibles
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{app.targetAudience}</p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card space-y-4">
              <h3 className="text-base font-extrabold text-navy-950 flex items-center gap-2">
                <Layers className="w-5 h-5 text-leboss-500" /> Architecture Technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {app.techStack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-xl bg-slate-100 text-navy-950 text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-navy-950 text-white rounded-3xl p-7 space-y-4">
              <h3 className="text-base font-extrabold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-leboss-500" /> Édité par LEBOSS TECH
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cette solution est développée et maintenue par nos ingénieurs à Abidjan. Nous assurons le support, la formation et les évolutions sur mesure.
              </p>
              <a
                href={app.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold flex items-center justify-center gap-2 transition-colors"
              >
                {app.officialUrlLabel} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other apps in the ecosystem */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container-leboss">
          <h2 className="text-xl font-extrabold text-navy-950 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-leboss-500" /> Autres applications de l&apos;écosystème LEBOSS TECH
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherApps.map((other) => (
              <Link
                key={other.slug}
                href={`/solutions/${other.slug}`}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-navy-950 hover:text-white border border-slate-200 transition-all group"
              >
                <p className="text-xs font-extrabold">{other.name}</p>
                <p className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-1 line-clamp-2">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="devis-solution" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="container-leboss max-w-4xl">
          <QuoteQualificationForm
            defaultServiceType="APP_DEMO"
            defaultProduct={`Logiciel / Application : ${app.name}`}
          />
        </div>
      </section>
    </div>
  );
}
