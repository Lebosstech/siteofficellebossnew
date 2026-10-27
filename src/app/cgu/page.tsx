import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, FileCheck2, ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentions Légales & Conditions Générales d’Utilisation — LEBOSS TECH',
  description:
    'Mentions légales officielles (RCCM CI-ABJ-03-2026-B12-00749) et cadre contractuel du studio LEBOSS TECH SARL.',
};

export default function CguPage() {
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
            // CADRE JURIDIQUE OFFICIEL
          </span>
          <h1 className="display-hero text-3xl sm:text-4xl text-type-primary font-display font-medium">
            Mentions Légales &amp; Conditions Générales
          </h1>
          <p className="mt-3 text-sm text-type-secondary font-sans leading-relaxed">
            Conformément à la Loi n° 2013-546 relative aux transactions électroniques et aux dispositions légales en vigueur en République de Côte d&apos;Ivoire.
          </p>
        </div>

        <section id="art-1" className="space-y-4 pt-6 hairline-t">
          <h2 className="text-xl font-display font-medium text-type-primary flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent-orange" />
            <span>Article 1 &mdash; Identification de l&apos;Éditeur</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#090A0B] border border-white/[0.04] text-xs font-mono">
            <div>
              <span className="text-type-tertiary block mb-1">DÉNOMINATION SOCIALE</span>
              <span className="text-type-primary font-bold">LEBOSS TECH SARL</span>
            </div>
            <div>
              <span className="text-type-tertiary block mb-1">REGISTRE DU COMMERCE (RCCM)</span>
              <span className="text-accent-orange font-bold">CI-ABJ-03-2026-B12-00749</span>
            </div>
            <div>
              <span className="text-type-tertiary block mb-1">CAPITAL SOCIAL</span>
              <span className="text-type-primary font-bold">1 000 000 FCFA</span>
            </div>
            <div>
              <span className="text-type-tertiary block mb-1">DIRECTION GÉNÉRALE</span>
              <span className="text-type-primary font-bold">Goh Tanguy Bruno</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-type-tertiary block mb-1">SIÈGE OPÉRATIONNEL</span>
              <span className="text-type-primary font-bold">Marcory Anoumabo, Abidjan, Côte d&apos;Ivoire</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-type-tertiary block mb-1">CONTACT OFFICIEL</span>
              <span className="text-type-primary font-bold">contact@lebosstech.ci &bull; +225 05 66 82 16 09</span>
            </div>
          </div>
        </section>

        <section className="space-y-4 pt-6 hairline-t text-sm text-type-secondary font-sans leading-relaxed">
          <h2 className="text-xl font-display font-medium text-type-primary flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-orange" />
            <span>Article 2 &mdash; Propriété Intellectuelle &amp; Marques</span>
          </h2>
          <p>
            L&apos;ensemble des contenus, marques, logos, architectures logicielles, maquettes graphiques et codes sources présents sur ce site et relatifs aux solutions propriétaires (SRA, Mon Gestionnaire Pro, Lounan, Djonan, Gérer mon Argent) sont la propriété exclusive de LEBOSS TECH SARL ou font l&apos;objet d&apos;une licence légale d&apos;exploitation. Toute reproduction, copie ou extraction sans autorisation écrite préalable est strictement prohibée.
          </p>
        </section>

        <section className="space-y-4 pt-6 hairline-t text-sm text-type-secondary font-sans leading-relaxed">
          <h2 className="text-xl font-display font-medium text-type-primary">
            Article 3 &mdash; Engagements &amp; Responsabilité
          </h2>
          <p>
            LEBOSS TECH met en œuvre tous les moyens raisonnables pour garantir la disponibilité continue et la sécurité de ses plateformes de démonstration et services en ligne. Les engagements contractuels de disponibilité (SLA) font l&apos;objet d&apos;accords spécifiques annexés aux contrats de service individuels.
          </p>
        </section>
      </div>
    </div>
  );
}
