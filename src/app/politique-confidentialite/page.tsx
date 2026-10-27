import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & Protection des Données — LEBOSS TECH',
  description:
    'Engagement de protection des données personnelles et professionnelles conforme aux directives de l’ARTCI (Côte d’Ivoire) et aux normes internationales.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-24 studio-container max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-type-secondary hover:text-type-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>RETOUR À L&apos;ACCUEIL</span>
      </Link>

      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.1] space-y-8">
        <div>
          <span className="technical-tag text-accent-orange block mb-3">
            // CONFIDENTIALITÉ &bull; CONFORMITÉ ARTCI
          </span>
          <h1 className="display-hero text-3xl sm:text-4xl text-type-primary font-display font-medium">
            Politique de Confidentialité
          </h1>
          <p className="mt-3 text-sm text-type-secondary font-sans leading-relaxed">
            Conforme à la Loi n° 2013-450 relative à la protection des données à caractère personnel en République de Côte d&apos;Ivoire sous l&apos;égide de l&apos;ARTCI.
          </p>
        </div>

        <section className="space-y-4 pt-6 hairline-t text-sm text-type-secondary font-sans leading-relaxed">
          <h2 className="text-xl font-display font-medium text-type-primary flex items-center gap-2">
            <Lock className="w-5 h-5 text-accent-orange" />
            <span>1. Collecte Limitée au Strict Nécessaire</span>
          </h2>
          <p>
            Dans le cadre de son activité de studio technologique, LEBOSS TECH ne collecte que les informations strictement nécessaires à la qualification et à l&apos;exécution des projets professionnels : nom, prénom, adresse email professionnelle, numéro de téléphone et données d&apos;entreprise.
          </p>
          <p>
            Nous ne commercialisons, ne louons et ne transférons aucune donnée à des régies publicitaires tierces.
          </p>
        </section>

        <section className="space-y-4 pt-6 hairline-t text-sm text-type-secondary font-sans leading-relaxed">
          <h2 className="text-xl font-display font-medium text-type-primary flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-orange" />
            <span>2. Sécurité &amp; Chiffrement des Échanges</span>
          </h2>
          <p>
            Toutes les communications transmises via nos formulaires et passerelles sont protégées par chiffrement en transit (TLS 1.3) et stockées sur des infrastructures sécurisées avec politique stricte de contrôle d&apos;accès au moindre privilège (Zero-Trust).
          </p>
        </section>

        <section className="space-y-4 pt-6 hairline-t text-sm text-type-secondary font-sans leading-relaxed">
          <h2 className="text-xl font-display font-medium text-type-primary">
            3. Vos Droits &amp; Contact DPO
          </h2>
          <p>
            Vous disposez d&apos;un droit permanent d&apos;accès, de rectification, de portabilité et d&apos;effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en adressant un email à notre délégué à la protection des données :{' '}
            <a href="mailto:contact@lebosstech.ci" className="text-accent-orange underline">
              contact@lebosstech.ci
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
