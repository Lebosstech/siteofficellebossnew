import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, FileText, CreditCard, Truck, RefreshCw, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) | LEBOSS TECH SARL',
  description:
    'Conditions Générales de Vente de LEBOSS TECH SARL applicables au matériel informatique neuf et reconditionné, aux solutions logicielles et aux prestations IT en Côte d’Ivoire.',
  alternates: { canonical: 'https://lebosstech.ci/conditions-vente' },
};

export default function ConditionsVentePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss max-w-4xl">
        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 text-white mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" /> Cadre Juridique &amp; Commercial OHADA / CI
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-slate-300 text-sm">
            Applicables aux ventes de matériel informatique, licences logicielles et prestations de services réalisées par LEBOSS TECH SARL.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/conditions-vente" className="px-4 py-2 rounded-xl bg-leboss-500 text-white text-xs font-extrabold">
            CGV (Conditions de Vente)
          </Link>
          <Link href="/cgu" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-leboss-500 text-xs font-bold">
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
          <section>
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-leboss-500" /> Article 1 — Identification du Vendeur
            </h2>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-sm space-y-1">
              <p><strong>Raison sociale :</strong> LEBOSS TECH SARL (Enseigne : LEBOSS TECH MARKET)</p>
              <p><strong>Forme juridique :</strong> SARL au capital de 1 000 000 FCFA</p>
              <p><strong>RCCM :</strong> CI-ABJ-03-2026-B12-00749</p>
              <p><strong>Siège social :</strong> Adjamé / Marcory Anoumabo, Abidjan, Côte d&apos;Ivoire</p>
              <p><strong>Contacts :</strong> +225 05 66 82 16 09 — contact@lebosstech.ci</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-leboss-500" /> Article 2 — Prix, Commandes et Paiements
            </h2>
            <p className="mb-3">
              Tous les prix affichés sur <strong>lebosstech.ci</strong> sont libellés en <strong>Francs CFA (FCFA / XOF)</strong>. Chaque commande génère une référence unique enregistrée avant toute redirection.
            </p>
            <p>
              Conformément à l&apos;Acte Uniforme OHADA portant sur le Droit Commercial Général, <strong>LEBOSS TECH SARL conserve la propriété des matériels livrés et des solutions logicielles développées jusqu&apos;au paiement intégral effectif du prix</strong>. L&apos;ouverture d&apos;une conversation WhatsApp ne constitue jamais une preuve de paiement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <Truck className="w-5 h-5 text-leboss-500" /> Article 3 — Livraison à Abidjan et en Côte d&apos;Ivoire
            </h2>
            <p>
              Les livraisons dans le Grand Abidjan sont effectuées sous 24h à 48h ouvrées. Les expéditions vers l&apos;intérieur du pays sont assurées sous 48h à 72h via compagnies partenaires sécurisées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-leboss-500" /> Article 4 — Rétractation, Garantie &amp; Litiges
            </h2>
            <p>
              L&apos;Acheteur dispose d&apos;un délai de 7 jours calendaires à compter de la réception pour signaler toute non-conformité, sous réserve du respect de l&apos;intégrité des scellés de garantie LEBOSS TECH. Tout litige non résolu à l&apos;amiable relève de la compétence exclusive du <strong>Tribunal de Commerce d&apos;Abidjan</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
