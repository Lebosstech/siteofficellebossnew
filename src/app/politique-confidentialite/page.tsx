import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & Protection des Données (ARTCI) | LEBOSS TECH',
  description:
    'Politique de protection des données à caractère personnel de LEBOSS TECH SARL conformément à la Loi n° 2013-450 (ARTCI Côte d’Ivoire) et au RGPD.',
  alternates: { canonical: 'https://lebosstech.ci/politique-confidentialite' },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss max-w-4xl">
        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 text-white mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" /> Loi n° 2013-450 (ARTCI) &amp; RGPD
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Politique de Confidentialité &amp; Protection des Données
          </h1>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-12 shadow-card space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
          <h2 className="text-xl font-extrabold text-navy-950 flex items-center gap-2">
            <Shield className="w-5 h-5 text-leboss-500" /> Protection des données personnelles
          </h2>
          <p>
            Conformément à la <strong>Loi ivoirienne n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel</strong> (supervisée par l&apos;<strong>ARTCI</strong>), LEBOSS TECH SARL collecte uniquement les informations strictement nécessaires au traitement des commandes, à l&apos;établissement des factures et au suivi des demandes de devis.
          </p>
          <p>
            Vos données ne sont jamais vendues à des tiers. Vous pouvez exercer vos droits d&apos;accès, de rectification et de suppression en écrivant à <strong>contact@lebosstech.ci</strong>.
          </p>
          <Link href="/conditions-vente" className="inline-block text-xs font-extrabold text-leboss-600 hover:underline">
            ← Retour aux Conditions Générales de Vente
          </Link>
        </div>
      </div>
    </div>
  );
}
