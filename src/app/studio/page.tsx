import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Terminal, MapPin, Layers, Cpu, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Le Studio — Vision & Ingénierie Créative',
  description:
    'Découvrez LEBOSS TECH : notre studio d’ingénierie technologique à Abidjan, notre vision de l’artisanat numérique et notre engagement pour des systèmes pérennes.',
};

export default function StudioPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Studio Hero Section */}
      <section className="relative studio-container py-16 sm:py-24">
        <div className="max-w-4xl">
          <span className="technical-tag text-accent-orange block mb-4">
            // LE STUDIO &bull; PHILOSOPHIE &amp; IDENTITÉ
          </span>
          <h1 className="display-hero text-3xl sm:text-6xl lg:text-7xl text-type-primary font-display font-medium tracking-tightest leading-[1.08] break-words">
            L&apos;excellence technique<br />
            <span className="text-type-secondary">comme unique standard.</span>
          </h1>
          <p className="mt-8 text-type-secondary text-lg sm:text-xl font-sans leading-relaxed max-w-2xl">
            LEBOSS TECH est né d&apos;une conviction : les entreprises ouest-africaines méritent des architectures technologiques aussi robustes, sécurisées et élégantes que les standards des plus grands centres d&apos;ingénierie mondiaux.
          </p>
        </div>
      </section>

      {/* Chapter: Grounded in Abidjan */}
      <section className="relative py-20 hairline-t hairline-b bg-dark-surface/40">
        <div className="studio-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="technical-tag text-accent-orange">
                01 // ANCRAGE OPÉRATIONNEL
              </span>
              <h2 className="display-title text-3xl sm:text-4xl text-type-primary font-display font-medium">
                Concevoir depuis Abidjan pour résister aux réalités du terrain.
              </h2>
              <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
                Le marché ivoirien et ouest-africain impose des contraintes uniques que les solutions logicielles génériques étrangères ignorent souvent : coupures soudaines de connectivité, instabilité réseau mobile, paiements prédominants en Mobile Money (Wave, Orange, MTN) et régulations fiscales rigoureuses (Facture Normalisée Électronique FNE, plan comptable SYSCOHADA).
              </p>
              <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
                Depuis notre siège de <strong className="text-type-primary">Marcory Anoumabo</strong>, nous développons des systèmes &laquo; offline-first &raquo; capables d&apos;encaisser des millions de transactions sans faillir, même en cas de panne internet générale.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.1] space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 hairline-b text-type-secondary">
                  <span>ABIDJAN ENGINEERING NODE</span>
                  <span className="text-emerald-400">OPERATIONAL</span>
                </div>
                <div className="space-y-2 text-type-secondary text-xs">
                  <div className="flex justify-between p-2 rounded bg-[#090A0B]">
                    <span>Localisation</span>
                    <span className="text-type-primary">Marcory Anoumabo, Abidjan</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#090A0B]">
                    <span>Registre du Commerce</span>
                    <span className="text-accent-orange">CI-ABJ-2023-B-1456</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#090A0B]">
                    <span>Direction Générale</span>
                    <span className="text-type-primary">Goh Tanguy Bruno &amp; Ingénieurs</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#090A0B]">
                    <span>Disponibilité Équipes</span>
                    <span className="text-type-primary">Support 24/7 &bull; Interventions sur site</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter: Engineering Principles */}
      <section className="relative studio-container py-24 sm:py-32">
        <div className="max-w-2xl mb-16">
          <span className="technical-tag text-accent-orange block mb-4">
            02 // NOS PRINCIPES D&apos;INGÉNIERIE
          </span>
          <h2 className="display-hero text-3xl sm:text-5xl text-type-primary font-display font-medium tracking-tightest">
            Quatre règles non négociables.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent-orange font-bold">01</span>
              <h3 className="font-display text-lg font-semibold text-type-primary">
                Zéro Code Jetable
              </h3>
            </div>
            <p className="text-sm text-type-secondary font-sans leading-relaxed">
              Nous construisons des systèmes maintenables à long terme. Chaque module est typé, testé, documenté et conçu pour être étendu sans nécessiter de réécriture destructrice.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent-orange font-bold">02</span>
              <h3 className="font-display text-lg font-semibold text-type-primary">
                Résilience Offline-First
              </h3>
            </div>
            <p className="text-sm text-type-secondary font-sans leading-relaxed">
              L&apos;application métier ne doit jamais s&apos;arrêter parce que la connexion est coupée. Le moteur local traite les transactions et se synchronise dès que le réseau réapparaît.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent-orange font-bold">03</span>
              <h3 className="font-display text-lg font-semibold text-type-primary">
                Conformité Fiscale &amp; Données
              </h3>
            </div>
            <p className="text-sm text-type-secondary font-sans leading-relaxed">
              Nos moteurs intègrent nativement les protocoles cryptographiques exigés par la DGI (FNE) et structurent les flux selon les écritures légales du système SYSCOHADA.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent-orange font-bold">04</span>
              <h3 className="font-display text-lg font-semibold text-type-primary">
                Engagement de Service (SLA 99.9%)
              </h3>
            </div>
            <p className="text-sm text-type-secondary font-sans leading-relaxed">
              Nous accompagnons chaque déploiement d&apos;un contrat d&apos;infogérance clair avec des pénalités contractuelles et un temps d&apos;intervention d&apos;urgence sous deux heures à Abidjan.
            </p>
          </div>
        </div>

        {/* CTA to dialogue */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl glass-card border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-medium text-type-primary">
              Envie d&apos;aligner vos ambitions technologiques ?
            </h3>
            <p className="text-sm text-type-secondary mt-1">
              Échangez directement avec notre direction technique.
            </p>
          </div>
          <Link href="/contact" className="btn-studio group shrink-0">
            <span>ENGAGER LA CONVERSATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
