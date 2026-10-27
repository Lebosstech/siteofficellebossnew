import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-24 studio-container">
      <div className="glass-card rounded-3xl p-10 sm:p-14 border border-white/[0.1] max-w-lg text-center space-y-6">
        <span className="font-mono text-xs text-accent-orange font-bold px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 inline-block">
          ERR_404 // COORDONNÉES INTROUVABLES
        </span>

        <h1 className="display-hero text-3xl sm:text-4xl text-type-primary font-display font-medium">
          Ressource non localisée
        </h1>

        <p className="text-sm text-type-secondary font-sans leading-relaxed">
          La page demandée n&apos;existe pas ou a été réorganisée dans le cadre de notre nouvelle architecture éditoriale.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-studio">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETOUR À L&apos;ACCUEIL</span>
          </Link>
          <Link href="/work" className="btn-studio-ghost">
            <span>SELECTED WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
