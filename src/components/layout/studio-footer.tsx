'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare, Mail, MapPin, Globe } from 'lucide-react';

export function StudioFooter() {
  const [abidjanTime, setAbidjanTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Abidjan is GMT+0
      const formatted = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Africa/Abidjan',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
      setAbidjanTime(`${formatted} GMT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#090A0B] text-type-primary hairline-t overflow-hidden">
      {/* Background radial glow - strictly subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.06),transparent_70%)] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="studio-container py-20 lg:py-28 relative z-10">
        {/* Pre-footer Call to Action / Chapter 08 Finale */}
        <div className="hairline-b pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="technical-tag text-accent-orange block mb-4">
                // CHAPITRE 08 &mdash; CONTACT ÉDITORIAL
              </span>
              <h2 className="display-hero text-4xl sm:text-5xl lg:text-6xl text-type-primary">
                Construisons la suite.
              </h2>
              <p className="mt-6 text-type-secondary text-base sm:text-lg max-w-xl leading-relaxed">
                Vous avez un projet technologique d&apos;envergure, une problématique métier complexe ou une infrastructure à concevoir ? Engageons la réflexion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2250566821609"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio group"
              >
                <MessageSquare className="w-4 h-4 text-[#FF6A00]" />
                <span>WHATSAPP DIRECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact"
                className="btn-studio-ghost group"
              >
                <Mail className="w-4 h-4 text-type-secondary" />
                <span>FORMULAIRE PROJET</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 hairline-b">
          {/* Col 1: Identity & Philosophy */}
          <div className="flex flex-col gap-5">
            <div className="relative w-36 h-9">
              <Image
                src="/images/logo.webp"
                alt="LEBOSS TECH"
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
            <p className="text-xs text-type-secondary leading-relaxed font-sans">
              Studio technologique &amp; d&apos;ingénierie créative basé à Abidjan. Conception de systèmes d&apos;information robustes, plateformes mobiles à haute tolérance de panne et logiciels métier d&apos;exception.
            </p>
            <div className="flex items-center gap-2 technical-tag text-[11px] text-type-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span>HORLOGE ABIDJAN : {abidjanTime || '12:00:00 GMT'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Éditoriale */}
          <div className="flex flex-col gap-3">
            <span className="technical-tag text-type-secondary mb-2">// EXPLORATION</span>
            <Link
              href="/"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors flex items-center justify-between group py-1"
            >
              <span>Accueil Immersif</span>
              <span className="text-[10px] font-mono text-type-tertiary group-hover:text-accent-orange">01</span>
            </Link>
            <Link
              href="/studio"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors flex items-center justify-between group py-1"
            >
              <span>Le Studio &amp; Vision</span>
              <span className="text-[10px] font-mono text-type-tertiary group-hover:text-accent-orange">02</span>
            </Link>
            <Link
              href="/expertise"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors flex items-center justify-between group py-1"
            >
              <span>Pôles d&apos;Ingénierie</span>
              <span className="text-[10px] font-mono text-type-tertiary group-hover:text-accent-orange">03</span>
            </Link>
            <Link
              href="/work"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors flex items-center justify-between group py-1"
            >
              <span>Selected Work (Études de Cas)</span>
              <span className="text-[10px] font-mono text-type-tertiary group-hover:text-accent-orange">04</span>
            </Link>
            <Link
              href="/contact"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors flex items-center justify-between group py-1"
            >
              <span>Demande de Consultation</span>
              <span className="text-[10px] font-mono text-type-tertiary group-hover:text-accent-orange">05</span>
            </Link>
          </div>

          {/* Col 3: Selected Realisations */}
          <div className="flex flex-col gap-3">
            <span className="technical-tag text-type-secondary mb-2">// ÉTUDES DE CAS CLÉS</span>
            <Link
              href="/work/sra"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors group py-1"
            >
              <div className="font-medium text-type-primary">SRA &amp; SRA PRO</div>
              <div className="text-xs text-type-tertiary">Logistique urbaine &amp; dispatch temps réel</div>
            </Link>
            <Link
              href="/work/mon-gestionnaire-pro"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors group py-1"
            >
              <div className="font-medium text-type-primary">Mon Gestionnaire Pro</div>
              <div className="text-xs text-type-tertiary">ERP offline-first &amp; conformité SYSCOHADA</div>
            </Link>
            <Link
              href="/work/lounan"
              className="text-sm text-type-secondary hover:text-type-primary transition-colors group py-1"
            >
              <div className="font-medium text-type-primary">Lounan Platform</div>
              <div className="text-xs text-type-tertiary">Moteur de mise en relation immobilière</div>
            </Link>
          </div>

          {/* Col 4: Coordinates & Technical Data */}
          <div className="flex flex-col gap-3">
            <span className="technical-tag text-type-secondary mb-2">// COORDONNÉES OFFICIELLES</span>
            <div className="flex items-start gap-2.5 text-xs text-type-secondary leading-relaxed">
              <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
              <span>Marcory Anoumabo, Abidjan, Côte d&apos;Ivoire</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-type-secondary">
              <Mail className="w-4 h-4 text-type-tertiary shrink-0" />
              <a href="mailto:contact@lebosstech.ci" className="hover:text-type-primary transition-colors">
                contact@lebosstech.ci
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-type-secondary">
              <Globe className="w-4 h-4 text-type-tertiary shrink-0" />
              <span>+225 05 66 82 16 09</span>
            </div>
            <div className="mt-2 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-type-tertiary">
              RCCM : CI-ABJ-2023-B-1456
            </div>
          </div>
        </div>

        {/* Legal & Outro Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-type-tertiary">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} LEBOSS TECH SARL. TOUS DROITS RÉSERVÉS.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>HIGH-END DIGITAL CRAFTSMANSHIP</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-type-secondary">ABIDJAN // WEST AFRICA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
