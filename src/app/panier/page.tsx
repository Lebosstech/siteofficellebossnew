'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { formatFCFA } from '@/lib/utils';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function PanierPage() {
  const { items, totalItems, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  const whatsappCartMsg = [
    `Bonjour *LEBOSS TECH*,`,
    `Je souhaite commander le panier suivant :`,
    ...items.map(
      (i) => `- ${i.quantity}x ${i.name} (${i.sku}) : ${formatFCFA(i.price * i.quantity)}`
    ),
    ``,
    `*Total estimé : ${formatFCFA(subtotal)}*`,
  ].join('\n');

  if (items.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16">
        <div className="container-leboss max-w-lg text-center bg-white rounded-3xl p-10 border border-slate-200 shadow-card space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-leboss-50 text-leboss-500 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-navy-950">Votre panier est vide</h1>
          <p className="text-sm text-slate-600">
            Parcourez notre catalogue de plus de 500 équipements professionnels ou demandez un devis B2B sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/produits"
              className="px-6 py-3.5 rounded-xl bg-leboss-500 hover:bg-leboss-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-glow-orange"
            >
              Explorer la boutique
            </Link>
            <Link
              href="/contact#devis"
              className="px-6 py-3.5 rounded-xl bg-navy-950 text-white text-xs font-extrabold uppercase tracking-wider"
            >
              Demander un devis B2B
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-navy-950">
              Votre Panier ({totalItems} article{totalItems > 1 ? 's' : ''})
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Vérifiez vos équipements avant de valider votre commande ou votre demande de livraison.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-bold text-red-600 hover:underline"
          >
            Vider le panier
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-card flex flex-col sm:flex-row items-center gap-5"
              >
                <div className="relative w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden">
                  <Image
                    src={item.mainImage}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    {item.sku} · {item.conditionLabel}
                  </span>
                  <Link href={`/produits/${item.slug}`}>
                    <h3 className="text-sm sm:text-base font-extrabold text-navy-950 hover:text-leboss-600 line-clamp-2">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 mt-1">
                    Prix unitaire : <strong className="text-navy-950">{formatFCFA(item.price)}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center rounded-xl border border-slate-200">
                    <button
                      onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                      className="p-2 text-slate-600 hover:text-navy-950"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-extrabold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                      className="p-2 text-slate-600 hover:text-navy-950"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right min-w-[110px]">
                    <span className="block text-sm font-extrabold text-navy-950">
                      {formatFCFA(item.price * item.quantity)}
                    </span>
                  </div>

                  <button
                    onClick={() => removeItem(item.slug)}
                    className="p-2 text-slate-400 hover:text-red-600"
                    title="Retirer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-card space-y-6">
            <h2 className="text-lg font-extrabold text-navy-950">Récapitulatif de la commande</h2>

            <div className="space-y-3 text-sm border-b border-slate-100 pb-5">
              <div className="flex justify-between text-slate-600">
                <span>Sous-total ({totalItems} articles)</span>
                <span className="font-bold text-navy-950">{formatFCFA(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Livraison Abidjan / CI</span>
                <span className="text-xs font-bold text-emerald-600">Calculée à l&apos;étape suivante</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline">
              <span className="text-sm font-extrabold uppercase text-navy-950">Total TTC</span>
              <span className="text-2xl font-extrabold text-leboss-600">{formatFCFA(subtotal)}</span>
            </div>

            <div className="space-y-3">
              <Link
                href="/commande"
                className="w-full py-4 px-6 rounded-2xl bg-leboss-500 hover:bg-leboss-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-orange flex items-center justify-center gap-2 transition-all"
              >
                Passer à la validation <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(whatsappCartMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Commander via WhatsApp
              </a>
            </div>

            <p className="text-[11px] text-slate-500 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-leboss-500 shrink-0 mt-0.5" />
              <span>
                Vérification serveur des stocks et enregistrement de votre référence unique avant toute redirection.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
