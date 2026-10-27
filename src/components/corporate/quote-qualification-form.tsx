'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Code2,
  Laptop,
  Network,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const PROJECT_POLES = [
  {
    id: 'SOFTWARE',
    label: 'Ingénierie Logicielle & App Mobile',
    sub: 'Application Android/iOS, plateforme SaaS, ERP/CRM ou intégration API Mobile Money',
    icon: Code2,
  },
  {
    id: 'APP_DEMO',
    label: 'Déploiement d’un Logiciel LEBOSS TECH',
    sub: 'Mon Gestionnaire Pro (Caisse/Stock/SYSCOHADA), SRA, Lounan, Djonan',
    icon: Sparkles,
  },
  {
    id: 'HARDWARE',
    label: 'Équipement Matériel Informatique B2B',
    sub: 'Flotte d’ordinateurs portables/fixes, serveurs, imprimantes, onduleurs APC',
    icon: Laptop,
  },
  {
    id: 'INFRASTRUCTURE',
    label: 'Infrastructure Réseau & Maintenance IT',
    sub: 'Câblage RJ45/Fibre, Wi-Fi Pro, vidéosurveillance ou contrat de maintenance PME',
    icon: Network,
  },
];

export function QuoteQualificationForm({
  defaultProduct,
  defaultServiceType = 'SOFTWARE',
}: {
  defaultProduct?: string;
  defaultServiceType?: string;
}) {
  const [serviceType, setServiceType] = useState(defaultServiceType);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [timeline, setTimeline] = useState('');
  const [description, setDescription] = useState(
    defaultProduct ? `Demande de devis concernant : ${defaultProduct}\nQuantité souhaitée : ` : ''
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successRef, setSuccessRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          companyName,
          email,
          phone,
          serviceType,
          budgetRange,
          timeline,
          productSlug: defaultProduct || '',
          description,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Veuillez vérifier les informations saisies.');
      } else {
        setSuccessRef(data.referenceNumber || 'LBT-DEV-OK');
      }
    } catch {
      setError('Erreur réseau lors de l’envoi. Vous pouvez également nous joindre directement sur WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl = getWhatsAppUrl(
    `Bonjour LEBOSS TECH, je souhaite demander un devis [${serviceType}] — ${companyName || fullName}. ${description}`
  );

  if (successRef) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-emerald-200 shadow-premium text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold font-mono">
            Référence : {successRef}
          </span>
          <h3 className="text-2xl font-extrabold text-navy-950 mt-3">
            Demande de devis enregistrée avec succès
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
            Nos ingénieurs ont bien reçu votre cahier de besoin. Un consultant LEBOSS TECH vous recontactera sous 2h ouvrées.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white text-xs font-extrabold uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" /> Accélérer sur WhatsApp ({successRef})
          </a>
          <button
            type="button"
            onClick={() => {
              setSuccessRef(null);
              setDescription('');
            }}
            className="px-5 py-3.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-premium space-y-6 text-navy-950"
    >
      <div>
        <span className="text-xs font-extrabold uppercase tracking-widest text-leboss-500">
          Qualification du besoin B2B &amp; Projet
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 mt-1">
          1. Quel est le domaine principal de votre demande ?
        </h3>
      </div>

      {/* Step 1: Pole selection cards */}
      <div className="grid sm:grid-cols-2 gap-3">
        {PROJECT_POLES.map((pole) => {
          const Icon = pole.icon;
          const active = serviceType === pole.id;
          return (
            <button
              key={pole.id}
              type="button"
              onClick={() => setServiceType(pole.id)}
              className={`text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${
                active
                  ? 'border-leboss-500 bg-leboss-50/50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  active ? 'bg-leboss-500 text-white' : 'bg-white border border-slate-200 text-slate-600'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-navy-950">{pole.label}</p>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{pole.sub}</p>
              </div>
            </button>
          );
        })}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Step 2: Contact Info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
            Nom complet *
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ex : Kouadio Marc"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
          />
        </div>
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
            Entreprise / Organisation
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Ex : Société Ivoirienne de Distribution"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
          />
        </div>
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
            Téléphone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+225 07 00 00 00 00"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
          />
        </div>
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
            E-mail professionnel *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contact@entreprise.ci"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
          />
        </div>
      </div>

      {/* Step 3: Budget & Timeline */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
            Enveloppe budgétaire estimée (FCFA)
          </label>
          <select
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-leboss-500"
          >
            <option value="">À définir après étude technique</option>
            <option value="Moins de 500 000 FCFA">Moins de 500 000 FCFA</option>
            <option value="500 000 – 2 000 000 FCFA">500 000 – 2 000 000 FCFA</option>
            <option value="2 000 000 – 5 000 000 FCFA">2 000 000 – 5 000 000 FCFA</option>
            <option value="Plus de 5 000 000 FCFA">Plus de 5 000 000 FCFA</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
            Délai souhaité
          </label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-leboss-500"
          >
            <option value="">Selon planning recommandé</option>
            <option value="Urgent (Sous 48h à 1 semaine)">Urgent (Sous 48h à 1 semaine)</option>
            <option value="Court terme (Ce mois-ci)">Court terme (Ce mois-ci)</option>
            <option value="Moyen terme (1 à 3 mois)">Moyen terme (1 à 3 mois)</option>
          </select>
        </div>
      </div>

      {/* Step 4: Project Description */}
      <div>
        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
          Décrivez votre besoin, vos objectifs ou les équipements recherchés *
        </label>
        <textarea
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Précisez votre contexte métier, les fonctionnalités attendues ou le nombre de postes/équipements à chiffrer..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-leboss-500 hover:bg-leboss-600 disabled:opacity-60 text-white font-extrabold text-sm shadow-glow-orange transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Recevoir mon devis détaillé
            </>
          )}
        </button>

        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-navy-950 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" /> Échanger sur WhatsApp
        </a>
      </div>
    </form>
  );
}
