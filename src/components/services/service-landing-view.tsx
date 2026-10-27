import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';

interface ServiceData {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  heroTitle: string;
  heroSubtitle: string;
  features: string[];
  benefits: string[];
  processSteps: Array<{ step: string; title: string; desc: string }>;
  deliverables: string[];
}

export function ServiceLandingView({ service }: { service: ServiceData }) {
  return (
    <div className="bg-white">
      {/* Dark Corporate Hero */}
      <section className="bg-tech-grid text-white py-20 md:py-28 border-b border-white/10">
        <div className="container-leboss">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Pôle d&apos;Expertise LEBOSS TECH · Abidjan
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
              {service.heroTitle}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cadrage-devis"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-sm font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
              >
                Demander un devis sur mesure <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-extrabold uppercase tracking-wider transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Deliverables Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="container-leboss grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-card">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              Périmètre d&apos;intervention
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-2 mb-6">
              Ce que nous prenons en charge pour votre organisation
            </h2>
            <ul className="space-y-4">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-leboss-500/15 text-leboss-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-lg font-extrabold flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-leboss-500" /> Livrables Garantis
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-leboss-500 font-extrabold">•</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card">
              <h3 className="text-lg font-extrabold text-navy-950 flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-leboss-500" /> Pourquoi choisir LEBOSS TECH ?
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {service.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="container-leboss">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              Méthodologie d&apos;exécution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 mt-2">
              Une démarche structurée, du cadrage à la mise en service
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-leboss-500/40 transition-all"
              >
                <span className="inline-block text-3xl font-extrabold text-leboss-500 font-mono mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-extrabold text-navy-950 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification & Quote Form */}
      <section id="cadrage-devis" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="container-leboss max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              <PhoneCall className="w-4 h-4" /> Parlons de votre projet
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-2">
              Cadrer votre besoin avec nos ingénieurs à Abidjan
            </h2>
          </div>
          <QuoteQualificationForm
            defaultServiceType={service.category === 'HARDWARE' ? 'HARDWARE' : service.category === 'INFRASTRUCTURE' ? 'INFRASTRUCTURE' : 'SOFTWARE'}
            defaultProduct={service.title}
          />
        </div>
      </section>
    </div>
  );
}
