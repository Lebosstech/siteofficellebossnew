import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, FileCheck2, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conditions Générales d’Utilisation (CGU) & Mentions Légales | LEBOSS TECH',
  description:
    'Mentions légales officielles (RCCM CI-ABJ-03-2026-B12-00749) et Conditions Générales d’Utilisation de la plateforme https://lebosstech.ci.',
  alternates: { canonical: 'https://lebosstech.ci/cgu' },
};

export default function CguPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss max-w-4xl">
        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 text-white mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-4">
            <FileCheck2 className="w-3.5 h-3.5" /> Mentions Légales &amp; CGU
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Conditions Générales d&apos;Utilisation &amp; Mentions Légales
          </h1>
          <p className="text-slate-300 text-sm">
            Conformément à la Loi n° 2013-546 relative aux transactions électroniques en République de Côte d&apos;Ivoire.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/conditions-vente" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-leboss-500 text-xs font-bold">
            CGV (Conditions de Vente)
          </Link>
          <Link href="/cgu" className="px-4 py-2 rounded-xl bg-leboss-500 text-white text-xs font-extrabold">
            CGU &amp; Mentions Légales
          </Link>
          <Link href="/garantie" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-leboss-500 text-xs font-bold">
            Garantie &amp; SAV
          </Link>
          <Link href="/politique-confidentialite" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-leboss-500 text-xs font-bold">
            Confidentialité (ARTCI / RGPD)
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-12 shadow-card space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <section id="art-1" className="scroll-mt-28">
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-leboss-500" /> Article 1 — Mentions Légales de l&apos;Éditeur
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-200 text-sm">
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Dénomination Sociale</p>
                <p className="font-bold text-navy-950">LEBOSS TECH SARL</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">RCCM</p>
                <p className="font-bold text-navy-950">CI-ABJ-03-2026-B12-00749</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Capital Social</p>
                <p className="font-bold text-navy-950">1 000 000 FCFA</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Siège Social</p>
                <p className="font-bold text-navy-950">Adjamé / Marcory, Abidjan, Côte d&apos;Ivoire</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-leboss-500" /> Article 2 — Propriété Intellectuelle &amp; Cybersécurité
            </h2>
            <p>
              Le nom, le logo officiel <strong>LEBOSS TECH</strong>, les logiciels édités (<em>Mon Gestionnaire Pro</em>, <em>SRA</em>, <em>SRA PRO</em>, <em>Lounan</em>, <em>Djonan</em>, <em>Gérer mon Argent</em>) ainsi que les contenus du site sont protégés. Toute tentative d&apos;accès frauduleux est réprimée par la Loi n° 2013-451 relative à la lutte contre la cybercriminalité en Côte d&apos;Ivoire.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
