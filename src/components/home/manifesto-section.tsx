'use client';

import React from 'react';

export function ManifestoSection() {
  return (
    <section className="relative py-28 sm:py-36 lg:py-48 bg-[#090A0B] overflow-hidden hairline-t hairline-b">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Vertical stream continuity */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="studio-container-narrow relative z-10 text-center flex flex-col items-center">
        {/* Editorial Sub-label */}
        <span className="technical-tag text-accent-orange mb-8 block">
          // CHAPITRE 03 &mdash; MANIFESTE DU STUDIO
        </span>

        {/* Imposing Typographic Manifesto with controlled line breaks */}
        <blockquote className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest leading-[1.15] max-w-4xl">
          « La technologie n&apos;est pas une finalité.{' '}
          <span className="text-type-secondary">
            C&apos;est ce qu&apos;elle rend possible qui compte. »
          </span>
        </blockquote>

        {/* Editorial Narrative Text */}
        <div className="mt-12 sm:mt-16 max-w-2xl text-base sm:text-lg text-type-secondary font-sans leading-relaxed space-y-6 text-center sm:text-justify">
          <p>
            Nous refusons le superflu et la complexité gratuite. À Abidjan comme sur les marchés internationaux, une solution logicielle ou une infrastructure informatique ne vaut que par sa robustesse, sa clarté opératoire et sa capacité à libérer le potentiel d&apos;une organisation.
          </p>
          <p className="text-sm text-type-tertiary font-mono">
            // RIGUEUR ARCHITECTURALE &bull; CODE SUR MESURE &bull; EXÉCUTION SANS COMPROMIS
          </p>
        </div>

        {/* Discrete signature stamp */}
        <div className="mt-16 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-dark-surface/50 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
          <span className="technical-tag text-[10px] text-type-secondary">
            LEBOSS TECH &bull; STUDIO DE CRAFTSMANSHIP NUMÉRIQUE
          </span>
        </div>
      </div>
    </section>
  );
}
