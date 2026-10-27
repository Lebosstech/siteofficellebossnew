'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Loader2,
  AlertCircle,
  ArrowLeft,
  Truck,
  CreditCard,
} from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { formatFCFA } from '@/lib/utils';

export default function CommandeCheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('Abidjan');
  const [commune, setCommune] = useState('Cocody');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'STANDARD_ABIDJAN' | 'EXPRESS_ABIDJAN' | 'EXPEDITION_INTERIEUR' | 'RETRAIT_SIEGE'>('STANDARD_ABIDJAN');
  const [paymentMethod, setPaymentMethod] = useState<'CASH_ON_DELIVERY' | 'MOBILE_MONEY' | 'PAYSTACK' | 'BANK_TRANSFER'>('CASH_ON_DELIVERY');
  const [deliveryNotes, setDeliveryNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderNumber: string;
    totalAmount: number;
    whatsappUrl: string;
  } | null>(null);

  const deliveryFee =
    deliveryMethod === 'EXPRESS_ABIDJAN'
      ? 3000
      : deliveryMethod === 'EXPEDITION_INTERIEUR'
      ? 5000
      : 0;

  const finalTotal = subtotal + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          customerPhone,
          customerEmail,
          companyName,
          city,
          commune,
          deliveryAddress,
          deliveryMethod,
          paymentMethod,
          deliveryNotes,
          items: items.map((i) => ({
            productId: i.productId,
            slug: i.slug,
            quantity: i.quantity,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Erreur lors de la validation de la commande.');
      } else {
        setConfirmedOrder({
          orderNumber: data.orderNumber,
          totalAmount: data.totalAmount,
          whatsappUrl: data.whatsappUrl,
        });
        clearCart();
      }
    } catch {
      setError('Erreur réseau. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (confirmedOrder) {
    return (
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="container-leboss max-w-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-premium text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-950 text-leboss-400 text-xs font-mono font-extrabold">
              Référence Unique : {confirmedOrder.orderNumber}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Votre commande est enregistrée !
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Montant total vérifié : <strong className="text-navy-950">{formatFCFA(confirmedOrder.totalAmount)}</strong>.
              Vous pouvez maintenant transmettre votre bon de commande prérempli à notre service commercial sur WhatsApp ou attendre l&apos;appel de confirmation de notre équipe.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={confirmedOrder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Envoyer le récapitulatif sur WhatsApp ({confirmedOrder.orderNumber})
              </a>
              <Link
                href="/produits"
                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-slate-100 text-navy-950 font-extrabold text-xs uppercase tracking-wider"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-extrabold text-navy-950">Votre panier est vide.</p>
          <Link href="/produits" className="inline-block px-6 py-3 rounded-xl bg-leboss-500 text-white text-xs font-bold">
            Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss">
        <Link
          href="/panier"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-navy-950 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Retour au panier
        </Link>

        <h1 className="text-3xl font-extrabold text-navy-950 mb-8">
          Validation de votre commande
        </h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Customer & Delivery Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <h2 className="text-lg font-extrabold text-navy-950 mb-4">
                1. Vos coordonnées
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nom et Prénom"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+225 05 00 00 00 00"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                    E-mail (pour la facture)
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="client@exemple.ci"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                    Société (Facultatif - B2B)
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Nom de l'entreprise"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h2 className="text-lg font-extrabold text-navy-950 mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-leboss-500" /> 2. Lieu et mode de livraison
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                    Ville *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                    Commune / Zone
                  </label>
                  <input
                    type="text"
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                    placeholder="Cocody, Marcory, Plateau, Yopougon..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>
              <div className="text-xs mb-4">
                <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                  Adresse détaillée / Point de repère *
                </label>
                <input
                  type="text"
                  required
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Quartier, rue, immeuble ou repère précis..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {[
                  { id: 'STANDARD_ABIDJAN', label: 'Livraison Standard Abidjan (24h-48h)', fee: 'Gratuit' },
                  { id: 'EXPRESS_ABIDJAN', label: 'Livraison Express Abidjan (< 4h)', fee: '3 000 FCFA' },
                  { id: 'EXPEDITION_INTERIEUR', label: 'Expédition Intérieur du Pays', fee: '5 000 FCFA' },
                  { id: 'RETRAIT_SIEGE', label: 'Retrait en magasin (Abidjan)', fee: 'Gratuit' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setDeliveryMethod(m.id as typeof deliveryMethod)}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      deliveryMethod === m.id
                        ? 'border-leboss-500 bg-leboss-50/40'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <p className="font-extrabold text-navy-950">{m.label}</p>
                    <p className="text-leboss-600 font-bold mt-0.5">{m.fee}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h2 className="text-lg font-extrabold text-navy-950 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-leboss-500" /> 3. Moyen de paiement souhaité
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {[
                  { id: 'CASH_ON_DELIVERY', label: 'Espèces à la livraison (Abidjan)', sub: 'Payez après vérification du matériel' },
                  { id: 'MOBILE_MONEY', label: 'Mobile Money (Wave, Orange, MTN)', sub: 'Transfert sécurisé à la réception' },
                  { id: 'PAYSTACK', label: 'Paiement en ligne Paystack', sub: 'Carte bancaire Visa/Mastercard ou Mobile Money' },
                  { id: 'BANK_TRANSFER', label: 'Virement bancaire / Chèque B2B', sub: 'Sur facture proforma normalisée' },
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setPaymentMethod(pm.id as typeof paymentMethod)}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      paymentMethod === pm.id
                        ? 'border-leboss-500 bg-leboss-50/40'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <p className="font-extrabold text-navy-950">{pm.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{pm.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs">
              <label className="block font-extrabold uppercase text-slate-600 mb-1.5">
                Commentaire ou instruction particulière (Facultatif)
              </label>
              <textarea
                rows={2}
                value={deliveryNotes}
                onChange={(e) => setDeliveryNotes(e.target.value)}
                placeholder="Horaires de disponibilité, demande de facture proforma..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Right Order Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
            <h2 className="text-lg font-extrabold text-navy-950">
              Articles commandés ({items.length})
            </h2>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 divide-y divide-slate-100">
              {items.map((item) => (
                <div key={item.slug} className="pt-3 first:pt-0 flex justify-between gap-3 text-xs">
                  <div>
                    <p className="font-bold text-navy-950 line-clamp-1">{item.name}</p>
                    <p className="text-slate-400">
                      {item.quantity} x {formatFCFA(item.price)} ({item.sku})
                    </p>
                  </div>
                  <span className="font-extrabold text-navy-950 shrink-0">
                    {formatFCFA(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Sous-total produits</span>
                <span className="font-bold">{formatFCFA(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Frais de livraison</span>
                <span className="font-bold">{deliveryFee === 0 ? 'Gratuit' : formatFCFA(deliveryFee)}</span>
              </div>
              <div className="flex justify-between items-baseline pt-3 border-t border-slate-100">
                <span className="text-sm font-extrabold uppercase text-navy-950">Total à régler</span>
                <span className="text-2xl font-extrabold text-leboss-600">{formatFCFA(finalTotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-2xl bg-leboss-500 hover:bg-leboss-600 disabled:opacity-60 text-white font-extrabold text-sm shadow-glow-orange flex items-center justify-center gap-2 transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Enregistrement sécurisé...
                </>
              ) : (
                'Confirmer et enregistrer ma commande'
              )}
            </button>

            <p className="text-[11px] text-slate-500 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                En validant, votre commande reçoit une référence unique (<code>LBT-CMD-...</code>) enregistrée côté serveur.
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
