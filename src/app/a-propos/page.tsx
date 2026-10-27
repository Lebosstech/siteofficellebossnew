import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Code2,
  Cpu,
  Wrench,
  CheckCircle2,
  Building2,
  ArrowUpRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos de LEBOSS TECH SARL — ESN, Éditeur Logiciel & Centrale IT à Abidjan',
  description:
    'Découvrez la mission, la méthodologie de contrôle qualité et les engagements de LEBOSS TECH SARL (RCCM CI-ABJ-03-2026-B12-00749) à Abidjan, Côte d’Ivoire.',
  alternates: { canonical: 'https://lebosstech.ci/a-propos' },
};

export default function AProposPage() {
  return (
    <div className="bg-white">
      {/* Dark Hero */}
      <section className="bg-tech-grid text-white py-20 md:py-28 border-b border-white/10">
        <div className="container-leboss grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" /> LEBOSS TECH SARL · Abidjan, Côte d&apos;Ivoire
            </span>
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              La technologie n&apos;a de valeur que lorsqu&apos;elle résout un vrai problème.
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              LEBOSS TECH accompagne les organisations ivoiriennes avec une approche simple : comprendre le terrain, recommander avec honnêteté et livrer une solution logicielle ou matérielle que votre équipe peut réellement exploiter.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center space-y-4 max-w-xs w-full">
              <div className="relative w-24 h-24 mx-auto">
                <Image
                  src="/images/logo.webp"
                  alt="Logo Officiel LEBOSS TECH"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-extrabold text-navy-950">LEBOSS TECH SARL</p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  RCCM : CI-ABJ-03-2026-B12-00749
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Raison d'Être */}
      <section className="py-20 border-b border-slate-200">
        <div className="container-leboss grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              Notre Raison d&apos;Être
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
              Réunir le logiciel, le matériel et le réseau au sein d&apos;une même équipe.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              LEBOSS TECH est née à Abidjan avec une conviction concrète : une entreprise ne devrait pas avoir à multiplier les prestataires pour faire fonctionner son logiciel de gestion, ses ordinateurs et son infrastructure réseau.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              En réunissant l&apos;édition logicielle (avec nos propres solutions comme <strong>Mon Gestionnaire Pro</strong>, <strong>SRA</strong>, <strong>Lounan</strong> et <strong>Djonan</strong>), une centrale de matériel informatique professionnel et un service de maintenance réactif, nous garantissons une responsabilité claire de bout en bout.
            </p>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <Code2 className="w-7 h-7 text-leboss-500" />
              <h3 className="text-lg font-extrabold text-navy-950">Ingénierie Logicielle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Applications mobiles, plateformes web SaaS, ERP/POS hors-ligne et intégrations Mobile Money.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <Cpu className="w-7 h-7 text-leboss-500" />
              <h3 className="text-lg font-extrabold text-navy-950">Matériel Professionnel</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plus de 500 références d&apos;ordinateurs, imprimantes, onduleurs et serveurs vérifiés et garantis.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <Wrench className="w-7 h-7 text-leboss-500" />
              <h3 className="text-lg font-extrabold text-navy-950">Réseau &amp; Maintenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Câblage structuré, Wi-Fi entreprise, sécurité des données et contrats SLA pour PME.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <ShieldCheck className="w-7 h-7 text-leboss-500" />
              <h3 className="text-lg font-extrabold text-navy-950">Engagement Écrit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Devis transparents, factures normalisées et garanties réelles appliquées sans détour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control 4 Steps */}
      <section className="py-20 bg-slate-50">
        <div className="container-leboss">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
              Méthode &amp; Contrôle Qualité
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-2">
              Une exécution rigoureuse qui élimine les mauvaises surprises
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Qualification du besoin',
                desc: 'Nous clarifions les usages réels, le volume de travail, l’environnement électrique/réseau et le budget disponible.',
              },
              {
                num: '02',
                title: 'Vérification & Architecture',
                desc: 'Contrôle technique en 30 points pour le matériel ; maquettage et architecture sécurisée pour les projets logiciels.',
              },
              {
                num: '03',
                title: 'Déploiement & Formation',
                desc: 'Livraison, installation propre sur site à Abidjan et prise en main complète avec vos collaborateurs.',
              },
              {
                num: '04',
                title: 'Garantie & Suivi SLA',
                desc: 'Support réactif via WhatsApp, téléphone ou intervention sur site selon les engagements définis.',
              },
            ].map((s) => (
              <div key={s.num} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-card">
                <span className="text-3xl font-extrabold font-mono text-leboss-500 block mb-3">
                  {s.num}
                </span>
                <h3 className="text-lg font-extrabold text-navy-950 mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-950 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold">Prêt à collaborer avec LEBOSS TECH ?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Parlons de votre prochain projet logiciel ou de l&apos;équipement de vos équipes.
              </p>
            </div>
            <Link
              href="/contact#devis"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange shrink-0"
            >
              Prendre contact <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
