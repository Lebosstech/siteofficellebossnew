'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Lock,
} from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/whatsapp';

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const whatsappUrl = getWhatsAppUrl(
    'Bonjour LEBOSS TECH, je souhaite échanger avec votre équipe concernant un projet ou un équipement informatique.'
  );

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      {/* Top Corporate Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950">
        <div className="container-leboss py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-leboss-500 mb-2">
              <ShieldCheck className="w-4 h-4" /> Partenaire Technologique Global à Abidjan
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Un projet logiciel, un parc informatique à équiper ou un réseau à fiabiliser ?
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Nos ingénieurs et techniciens vous accompagnent de l&apos;étude du besoin jusqu&apos;à la maintenance opérationnelle.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact#devis"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange transition-all"
            >
              Demander un devis <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider transition-all"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main 5-Column Footer Grid */}
      <div className="container-leboss py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Col 1: Brand & Legal Identity (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1">
              <Image
                src="/images/logo.webp"
                alt="LEBOSS TECH SARL"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div>
              <span className="block text-xl font-extrabold text-white tracking-tight">
                LEBOSS <span className="text-leboss-500">TECH</span>
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                SARL · ESN &amp; Centrale IT
              </span>
            </div>
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>LEBOSS TECH SARL</strong> (enseigne <em>LEBOSS TECH MARKET</em>) réunit l&apos;ingénierie logicielle sur mesure, l&apos;édition d&apos;applications propriétaires, la fourniture de matériel informatique professionnel et l&apos;infogérance réseau pour les entreprises et particuliers en Côte d&apos;Ivoire.
          </p>

          <div className="space-y-2.5 text-xs text-slate-300 pt-1">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-leboss-500 shrink-0 mt-0.5" />
              <span>Marcory Anoumabo &amp; Adjamé, Abidjan — République de Côte d&apos;Ivoire</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-leboss-500 shrink-0" />
              <a href="tel:+2250566821609" className="hover:text-leboss-400 font-bold">
                {OFFICIAL_PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-leboss-500 shrink-0" />
              <a href="mailto:contact@lebosstech.ci" className="hover:text-leboss-400">
                contact@lebosstech.ci
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-leboss-500 shrink-0" />
              <span>Lun – Sam : 08h00 – 19h00</span>
            </div>
          </div>
        </div>

        {/* Col 2: Expertises ESN & IT (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
            Nos Expertises
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link href="/developpement" className="hover:text-leboss-400 transition-colors">
                Ingénierie Logicielle
              </Link>
            </li>
            <li>
              <Link href="/developpement/application-mobile-abidjan" className="hover:text-leboss-400 transition-colors">
                Applications Mobiles iOS/Android
              </Link>
            </li>
            <li>
              <Link href="/developpement/application-web-saas" className="hover:text-leboss-400 transition-colors">
                Applications Web &amp; SaaS
              </Link>
            </li>
            <li>
              <Link href="/developpement/logiciel-sur-mesure-cote-ivoire" className="hover:text-leboss-400 transition-colors">
                Logiciels Métier &amp; ERP
              </Link>
            </li>
            <li>
              <Link href="/developpement/integration-api-mobile-money" className="hover:text-leboss-400 transition-colors">
                API &amp; Mobile Money
              </Link>
            </li>
            <li>
              <Link href="/installation-reseau-informatique-abidjan" className="hover:text-leboss-400 transition-colors">
                Infrastructure Réseau &amp; Wi-Fi
              </Link>
            </li>
            <li>
              <Link href="/maintenance-informatique-abidjan" className="hover:text-leboss-400 transition-colors">
                Maintenance &amp; Support PME
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Écosystème Logiciel (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
            Nos Logiciels
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link href="/solutions/mon-gestionnaire-pro" className="hover:text-leboss-400 transition-colors font-semibold text-slate-200">
                Mon Gestionnaire Pro
              </Link>
            </li>
            <li>
              <Link href="/solutions/sra" className="hover:text-leboss-400 transition-colors">
                SRA — Plateforme Livraison
              </Link>
            </li>
            <li>
              <Link href="/solutions/sra-pro" className="hover:text-leboss-400 transition-colors">
                SRA PRO — App Livreurs
              </Link>
            </li>
            <li>
              <Link href="/solutions/lounan" className="hover:text-leboss-400 transition-colors">
                Lounan — Immobilier
              </Link>
            </li>
            <li>
              <Link href="/solutions/djonan" className="hover:text-leboss-400 transition-colors">
                Djonan — Artisans &amp; Pro
              </Link>
            </li>
            <li>
              <Link href="/solutions/gerer-mon-argent" className="hover:text-leboss-400 transition-colors">
                Gérer mon Argent
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="text-leboss-400 hover:underline font-bold">
                Voir tout l&apos;écosystème →
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Boutique Informatique (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
            Boutique IT
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link href="/produits" className="hover:text-leboss-400 transition-colors font-semibold text-slate-200">
                Tout le Catalogue
              </Link>
            </li>
            <li>
              <Link href="/categories/ordinateur-portable" className="hover:text-leboss-400 transition-colors">
                Ordinateurs Portables
              </Link>
            </li>
            <li>
              <Link href="/categories/ordinateur-de-bureau" className="hover:text-leboss-400 transition-colors">
                PC de Bureau &amp; All-in-One
              </Link>
            </li>
            <li>
              <Link href="/categories/imprimante" className="hover:text-leboss-400 transition-colors">
                Imprimantes &amp; Scanners
              </Link>
            </li>
            <li>
              <Link href="/categories/onduleur" className="hover:text-leboss-400 transition-colors">
                Onduleurs APC &amp; Énergie
              </Link>
            </li>
            <li>
              <Link href="/categories/reseau" className="hover:text-leboss-400 transition-colors">
                Switchs, Routeurs &amp; Wi-Fi
              </Link>
            </li>
            <li>
              <Link href="/produits?promo=true" className="text-leboss-400 hover:underline font-bold">
                Offres Promotionnelles
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: Entreprise & Légal (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
            Informations &amp; Légal
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link href="/a-propos" className="hover:text-leboss-400 transition-colors">
                L&apos;Entreprise LEBOSS TECH
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="hover:text-leboss-400 transition-colors">
                Portfolio &amp; Réalisations
              </Link>
            </li>
            <li>
              <Link href="/ressources" className="hover:text-leboss-400 transition-colors">
                Guides &amp; Ressources IT
              </Link>
            </li>
            <li>
              <Link href="/conditions-vente" className="hover:text-leboss-400 transition-colors">
                Conditions Générales de Vente
              </Link>
            </li>
            <li>
              <Link href="/cgu#art-1" className="hover:text-leboss-400 transition-colors">
                Mentions Légales &amp; CGU
              </Link>
            </li>
            <li>
              <Link href="/garantie" className="hover:text-leboss-400 transition-colors">
                Politique de Garantie &amp; SAV
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="hover:text-leboss-400 transition-colors">
                Confidentialité (ARTCI / RGPD)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & RCCM Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container-leboss py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-300">LEBOSS TECH SARL</strong> — Capital 1 000 000 FCFA — RCCM : <strong className="text-slate-300">CI-ABJ-03-2026-B12-00749</strong>. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span>Abidjan, Côte d&apos;Ivoire</span>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <Lock className="w-3 h-3" /> Administration
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
