import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Garantie & Service Après-Vente (SAV) | LEBOSS TECH',
  description:
    'Conditions de garantie LEBOSS TECH à Abidjan : 90 jours sur les ordinateurs quasi-neufs reconditionnés certifiés et 1 à 3 ans sur le matériel neuf constructeur.',
  alternates: { canonical: 'https://lebosstech.ci/garantie' },
};

export default function GarantiePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss max-w-4xl">
        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 text-white mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Engagement Qualité &amp; SAV Abidjan
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Politique de Garantie &amp; Service Après-Vente
          </h1>
          <p className="text-slate-300 text-sm">
            Chaque équipement vendu par LEBOSS TECH SARL est vérifié sur 30 points de contrôle et couvert par une garantie écrite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-3xl border-2 border-leboss-500 p-7 shadow-card">
            <span className="inline-block px-3 py-1 rounded-full bg-leboss-50 text-leboss-600 text-xs font-extrabold uppercase mb-3">
              Quasi-Neuf / Reconditionné Certifié A+
            </span>
            <h2 className="text-2xl font-extrabold text-navy-950 mb-2">
              Garantie 90 Jours (3 Mois)
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                Carte mère, processeur, mémoire RAM et SSD NVMe couverts
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                Réparation gratuite en atelier à Abidjan ou remplacement équivalent
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-card">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase mb-3">
              Matériel Neuf Scellé
            </span>
            <h2 className="text-2xl font-extrabold text-navy-950 mb-2">
              Garantie Constructeur 1 à 3 Ans
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                Garantie officielle constructeur de 12 à 36 mois selon le produit
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                Facture normalisée avec numéro de série faisant foi
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-card space-y-4 text-sm text-slate-700">
          <h3 className="text-lg font-extrabold text-navy-950 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" /> Exclusions standards
          </h3>
          <p>
            La garantie ne couvre pas les chocs physiques, chutes, casse d&apos;écran après réception, oxydation par liquide, surtensions électriques dues à l&apos;absence d&apos;onduleur/régulateur, ou l&apos;ouverture de l&apos;appareil avec rupture des scellés de garantie LEBOSS TECH.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-block px-5 py-2.5 rounded-xl bg-navy-950 text-white text-xs font-extrabold">
              Contacter le SAV LEBOSS TECH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
