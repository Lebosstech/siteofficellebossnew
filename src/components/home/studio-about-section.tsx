'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, Terminal, ArrowUpRight, Award, Server } from 'lucide-react';

export function StudioAboutSection() {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#090A0B] overflow-hidden hairline-t hairline-b">
      {/* Background hairlines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.03),transparent_70%)] pointer-events-none" />

      {/* Continuous vertical light track */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" style={{ animationDelay: '11s' }} />
      </div>

      <div className="studio-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Identity & Mission */}
          <div className="lg:col-span-7">
            <span className="technical-tag text-accent-orange block mb-4">
              // CHAPITRE 07 &mdash; LE STUDIO &amp; IMPLANTATION
            </span>

            <h2 className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest">
              L&apos;ingénierie d&apos;Abidjan,<br />
              <span className="text-type-secondary">aux exigences internationales.</span>
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
              <p>
                Fondé et implanté à <strong className="text-type-primary font-medium">Marcory Anoumabo, Abidjan</strong>, LEBOSS TECH conçoit et exploite des systèmes numériques taillés pour résister aux contraintes du terrain ouest-africain : connectivité intermittente, exigence de caisse hors-ligne, conformité fiscale stricte et volumes transactionnels en forte expansion.
              </p>
              <p>
                Nous réunissons sous le même toit l&apos;ingénierie logicielle avancée et l&apos;intégration d&apos;infrastructures réseau d&apos;entreprise. Pas de sous-traitance opaque ni de promesses marketing invérifiables : chaque ligne de code et chaque baie déployée répondent à des standards mesurés.
              </p>
            </div>

            {/* Core Values Matrix */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 hairline-t">
              <div className="p-4 rounded-xl bg-dark-surface2/60 border border-white/[0.04]">
                <div className="flex items-center gap-2.5 mb-2">
                  <ShieldCheck className="w-4 h-4 text-accent-orange" />
                  <span className="font-mono text-xs font-semibold text-type-primary uppercase">
                    Pérennité &amp; Suivi Réel
                  </span>
                </div>
                <p className="text-xs text-type-secondary leading-relaxed font-sans">
                  Nos solutions ne sont jamais livrées sans accompagnement opérationnel et contrats de support technique préventif.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-surface2/60 border border-white/[0.04]">
                <div className="flex items-center gap-2.5 mb-2">
                  <Terminal className="w-4 h-4 text-accent-orange" />
                  <span className="font-mono text-xs font-semibold text-type-primary uppercase">
                    Rigueur Architecturale
                  </span>
                </div>
                <p className="text-xs text-type-secondary leading-relaxed font-sans">
                  Code source propre, documentation vivante, conformité SYSCOHADA et sécurité des flux de données.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/studio" className="btn-studio group">
                <span>DÉCOUVRIR NOTRE VISION DU STUDIO</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-end Architectural Factsheet */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.1] shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 hairline-b">
                <span className="technical-tag text-accent-orange text-xs">
                  CARTE D&apos;IDENTITÉ DU STUDIO
                </span>
                <span className="font-mono text-[10px] text-type-tertiary">
                  REGISTRY // CI-ABJ
                </span>
              </div>

              {/* Coordinates Block */}
              <div className="p-4 rounded-xl bg-[#090A0B]/80 border border-white/[0.04] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-type-tertiary">
                  <MapPin className="w-4 h-4 text-accent-orange" />
                  <span>SIÈGE OPÉRATIONNEL</span>
                </div>
                <div className="text-sm font-display font-semibold text-type-primary">
                  Marcory Anoumabo, Abidjan
                </div>
                <div className="text-xs font-mono text-type-secondary">
                  District Autonome d&apos;Abidjan, Côte d&apos;Ivoire
                </div>
              </div>

              {/* Registry & Structure */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-dark-surface2/60 border border-white/[0.04]">
                  <span className="text-[10px] text-type-tertiary block mb-1">ENTITÉ LÉGALE</span>
                  <span className="font-semibold text-type-primary">LEBOSS TECH SARL</span>
                </div>

                <div className="p-3 rounded-lg bg-dark-surface2/60 border border-white/[0.04]">
                  <span className="text-[10px] text-type-tertiary block mb-1">REGISTRE RCCM</span>
                  <span className="font-semibold text-accent-orange">CI-ABJ-2023-B-1456</span>
                </div>
              </div>

              {/* Verified Pôles */}
              <div className="p-4 rounded-xl bg-dark-surface2/40 border border-white/[0.04] space-y-2.5 text-xs font-mono">
                <span className="text-[10px] text-type-tertiary block">PÔLES OPÉRATIONNELS ACTIFS</span>
                <div className="flex items-center justify-between text-type-secondary">
                  <span>&bull; Pôle Édition &amp; Logiciels Métier</span>
                  <span className="text-emerald-400">Actif</span>
                </div>
                <div className="flex items-center justify-between text-type-secondary">
                  <span>&bull; Pôle Réseaux &amp; Systèmes Cloud</span>
                  <span className="text-emerald-400">Actif</span>
                </div>
                <div className="flex items-center justify-between text-type-secondary">
                  <span>&bull; Pôle Infogérance &amp; SLA Entreprises</span>
                  <span className="text-emerald-400">Actif</span>
                </div>
              </div>

              {/* Guarantee footer */}
              <div className="pt-2 text-[11px] font-mono text-type-tertiary flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-accent-orange" />
                <span>Interventions sur site &amp; support 24/7 disponible</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

