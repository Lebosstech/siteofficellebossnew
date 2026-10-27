"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["Accueil", "/"],
  ["Expertises", "/expertises"],
  ["Réalisations", "/realisations"],
  ["Écosystème", "/ecosysteme"],
  ["À propos", "/a-propos"],
] as const;
export function StudioHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i === 0) {
          e.preventDefault();
          items.at(-1)?.focus();
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault();
          items[0].focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <header className="site-header">
        <Link href="/" aria-label="LEBOSS TECH — Accueil" className="brand">
          <Image
            src="/images/logo.webp"
            alt="LEBOSS TECH"
            width={132}
            height={42}
            priority
          />
          <span>
            TECHNOLOGY
            <br /> & ENGINEERING
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/contact">
          Parlons de votre projet <ArrowUpRight size={15} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <nav
          ref={panel}
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navigation mobile"
        >
          {[...links, ["Contact", "/contact"]].map(([label, href], i) => (
            <Link key={href} href={href}>
              <small>0{i + 1}</small>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
          <p>
            ABIDJAN, CÔTE D’IVOIRE
            <br />
            05°18′ N · 04°00′ W
          </p>
        </nav>
      )}
    </>
  );
}
