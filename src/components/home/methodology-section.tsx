'use client';

import React, { useState } from 'react';
import { Search, Compass, Terminal, Rocket, Repeat, CheckCircle, ArrowRight } from 'lucide-react';

interface MethodologyStep {
  phase: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  technicalMilestone: string;
  metric: string;
  outputArtifact: string;
}

const STEPS: MethodologyStep[] = [
  {
    phase: 'PHASE 01',
    number: '01',
    title: 'Discovery',
    headline: 'Immersion & modélisation du domaine métier',
    description:
      'Nous ne débutons aucun projet sans une compréhension mathématique de vos flux : cartographie des goulets d’étranglement, analyse des contraintes de terrain à Abidjan et spécification formelle des exigences.',
    technicalMilestone: 'Spécification fonctionnelle & matrice de dépendances',
    metric: '100% des cas d’usage cartographiés',
    outputArtifact: 'DOM_SPEC // v1.0',
  },
  {
    phase: 'PHASE 02',
    number: '02',
    title: 'Architecture',
    headline: 'Conception des schémas & choix de stack pérenne',
    description:
      'Élaboration des modèles de données (schemas relationnels, schémas NoSQL), stratégie de partitionnement, sécurisation des protocoles d’échanges et résilience réseau face aux coupures.',
    technicalMilestone: 'Schéma d’architecture distribuée & Threat Modeling',
    metric: '0 dépendance technologique fragile',
    outputArtifact: 'ARCH_BLUEPRINT // RFC',
  },
  {
    phase: 'PHASE 03',
    number: '03',
    title: 'Development',
    headline: 'Ingénierie de précision & tests continus',
    description:
      'Écriture de code modulaire, typé et testé unitairement. Implémentation des règles de calcul strictes (SYSCOHADA, FNE, flux Mobile Money) avec revue de code systématique.',
    technicalMilestone: 'Codebase unifiée, tests unitaires & intégration continue',
    metric: 'Couverture de tests critiques > 90%',
    outputArtifact: 'CORE_KERNEL // BUILD',
  },
  {
    phase: 'PHASE 04',
    number: '04',
    title: 'Deployment',
    headline: 'Mise en production sécurisée & bascule sans coupure',
    description:
      'Déploiement progressif (blue/green ou canary), migration des bases de données sans perte de paquets et formation opérationnelle des équipes d’administration et utilisateurs.',
    technicalMilestone: 'Pipeline CD automatisé & bascule DNS zéro coupure',
    metric: 'Temps d’indisponibilité = 0s',
    outputArtifact: 'PROD_GATEWAY // LIVE',
  },
  {
    phase: 'PHASE 05',
    number: '05',
    title: 'Evolution',
    headline: 'Supervision télémétrique & optimisation continue',
    description:
      'Le cycle de vie logiciel ne s’arrête pas à la livraison. Notre pôle de maintenance assure le monitoring des temps de réponse, la correction préventive et l’évolution incrémentale.',
    technicalMilestone: 'Monitoring télémétrique 24/7 & contrats SLA stricts',
    metric: 'Disponibilité garantie 99.9%',
    outputArtifact: 'TELEMETRY_LOG // ACTIVE',
  },
];

export function MethodologySection() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = STEPS[activeStep];

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#090A0B] overflow-hidden">
      {/* Background hairlines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Continuous vertical light track */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" style={{ animationDelay: '9s' }} />
      </div>

      <div className="studio-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="technical-tag text-accent-orange block mb-4">
            // CHAPITRE 06 &mdash; MÉTHODOLOGIE &bull; FROM COMPLEXITY TO CLARITY
          </span>
          <h2 className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest">
            From complexity<br />
            <span className="text-type-secondary">to clarity.</span>
          </h2>
          <p className="mt-6 text-type-secondary text-base sm:text-lg leading-relaxed">
            Notre cycle de création est un système d&apos;ingénierie mécanique et mesuré. Chaque étape transforme et affine la précédente pour garantir une stabilité à toute épreuve.
          </p>
        </div>

        {/* Continuous Process Pipeline Bar */}
        <div className="relative mb-12 sm:mb-16">
          {/* Connecting Hairline */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.08] -translate-y-1/2 hidden md:block" />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-dark-surface border-white/[0.18] shadow-2xl scale-[1.02]'
                      : 'bg-dark-surface/50 border-white/[0.05] hover:border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-type-tertiary">
                      {step.number}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive
                          ? 'bg-accent-orange shadow-[0_0_8px_rgba(255,106,0,0.9)]'
                          : 'bg-white/15'
                      }`}
                    />
                  </div>
                  <div
                    className={`font-display text-sm sm:text-base font-semibold ${
                      isActive ? 'text-type-primary' : 'text-type-secondary'
                    }`}
                  >
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Transforming Stage */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/[0.1] relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative Stage */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-accent-orange font-bold">
                  {current.phase}
                </span>
                <span className="text-white/20">//</span>
                <span className="technical-tag text-type-secondary">
                  CYCLE D&apos;EXÉCUTION DU STUDIO
                </span>
              </div>

              <h3 className="display-title text-2xl sm:text-4xl text-type-primary font-display font-medium">
                {current.headline}
              </h3>

              <p className="mt-5 text-type-secondary text-sm sm:text-base leading-relaxed font-sans">
                {current.description}
              </p>

              {/* Milestones matrix */}
              <div className="mt-8 pt-6 hairline-t grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-dark-surface2/60 border border-white/[0.04]">
                  <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                    JALON TECHNIQUE
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-medium text-type-primary">
                    {current.technicalMilestone}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-dark-surface2/60 border border-white/[0.04]">
                  <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                    STANDARD MESURÉ
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-accent-orange">
                    {current.metric}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Mechanical Telemetry Visual */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#090A0B] border border-white/[0.1] shadow-2xl font-mono text-xs space-y-4">
                
                <div className="flex items-center justify-between pb-3 hairline-b text-type-secondary text-[11px]">
                  <span>SYSTEM_STATE // {current.outputArtifact}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-type-tertiary text-[10px]">
                    <span>PROCESS PROGRESSION</span>
                    <span className="text-accent-orange">{((activeStep + 1) * 20)}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full bg-accent-orange transition-all duration-700"
                      style={{ width: `${(activeStep + 1) * 20}%` }}
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-dark-surface/90 border border-white/[0.04] text-[11px] text-type-secondary space-y-1">
                  <div className="text-type-tertiary">// ARTIFACT GENERATED</div>
                  <div className="text-type-primary font-bold">{current.outputArtifact}</div>
                  <div className="text-type-tertiary text-[10px]">VERIFIED CHECKSUM: 0x8F4A...B91C</div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-type-tertiary">
                  <span>TRANSITION SUIVANTE</span>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                    className="flex items-center gap-1 text-type-primary hover:text-accent-orange transition-colors"
                  >
                    <span>Étape {(activeStep + 2 > 5 ? 1 : activeStep + 2)}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

