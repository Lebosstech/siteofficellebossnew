'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Studio', href: '/studio' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export function StudioHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#090A0B]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="studio-container flex items-center justify-between">
          {/* Brand Logo — Official, pristine, unaltered */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
            aria-label="LEBOSS TECH - Accueil"
          >
            <div className="relative w-28 sm:w-36 h-8 sm:h-9 flex items-center shrink-0">
              <Image
                src="/images/logo.webp"
                alt="LEBOSS TECH"
                fill
                priority
                className="object-contain"
                sizes="150px"
              />
            </div>
            {/* Architectural Studio Label */}
            <span className="hidden lg:inline-flex technical-tag text-[9px] text-type-tertiary border-l border-white/10 pl-3 py-0.5">
              CREATIVE ENGINEERING // ABJ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-dark-surface/60 backdrop-blur-md border border-white/[0.08]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs tracking-wider transition-all duration-300 rounded-full font-mono ${
                    isActive
                      ? 'text-type-primary font-semibold'
                      : 'text-type-secondary hover:text-type-primary'
                  }`}
                >
                  {/* Subtle active background capsule */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.08] -z-10" />
                  )}
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_8px_rgba(255,106,0,0.9)]" />
                    )}
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Header Action & Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 technical-tag text-[10px] text-type-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <span>SYSTEMS ONLINE</span>
            </div>

            <Link
              href="/contact"
              className="btn-studio-ghost text-[11px] group"
            >
              <span>DÉMARRER UN PROJET</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-dark-surface border border-white/15 text-type-primary focus:outline-none shrink-0 shadow-lg"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="w-5 h-5 text-type-primary" /> : <Menu className="w-5 h-5 text-type-primary" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 flex flex-col justify-between bg-[#090A0B]/95 backdrop-blur-2xl px-6 pt-28 pb-10 md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <span className="technical-tag text-[10px] text-type-tertiary">
              // STUDIO NAVIGATION
            </span>
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-baseline justify-between py-2 border-b border-white/[0.05] group"
                  >
                    <span className="font-mono text-xs text-type-tertiary">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-2xl font-display font-medium tracking-tight ${
                        isActive ? 'text-accent-orange' : 'text-type-primary'
                      }`}
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-type-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col gap-4">
            <div className="flex items-center justify-between technical-tag text-[11px] text-type-secondary">
              <span>LOCALISATION</span>
              <span className="text-type-primary">ABIDJAN, CI</span>
            </div>
            <Link
              href="/contact"
              className="btn-studio w-full justify-center text-center"
            >
              PARLER À UN INGÉNIEUR
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
