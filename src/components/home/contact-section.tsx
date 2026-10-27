'use client';

import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Mail, MapPin, CheckCircle, Send, Phone } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceType: 'software',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <section id="contact-consultation" className="relative py-28 sm:py-36 lg:py-44 bg-[#090A0B] overflow-hidden hairline-t">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.04),transparent_70%)] pointer-events-none" />

      {/* Continuous light stream track */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" style={{ animationDelay: '13s' }} />
      </div>

      <div className="studio-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Coordinates & Channels */}
          <div className="lg:col-span-5">
            <span className="technical-tag text-accent-orange block mb-4">
              // CHAPITRE 08 &mdash; CONTACT &bull; DIALOGUE TECHNIQUE
            </span>

            <h2 className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest">
              Construisons<br />
              <span className="text-type-secondary">la suite.</span>
            </h2>

            <p className="mt-6 text-type-secondary text-base sm:text-lg leading-relaxed font-sans">
              Vous avez un projet technologique d&apos;envergure, une problématique métier complexe ou une infrastructure à faire évoluer ? Parlons-en directement avec nos ingénieurs.
            </p>

            {/* Direct Instant Channels */}
            <div className="mt-10 space-y-4 pt-8 hairline-t">
              <a
                href="https://wa.me/2250566821609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-type-primary">
                      WHATSAPP DIRECT INGÉNIERIE
                    </div>
                    <div className="text-xs text-type-secondary font-mono">
                      +225 05 66 82 16 09
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-type-tertiary group-hover:text-type-primary transition-colors" />
              </a>

              <a
                href="mailto:contact@lebosstech.ci"
                className="flex items-center justify-between p-4 rounded-xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/[0.05] text-type-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-type-primary">
                      EMAIL OFFICIEL
                    </div>
                    <div className="text-xs text-type-secondary font-mono">
                      contact@lebosstech.ci
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-type-tertiary group-hover:text-type-primary transition-colors" />
              </a>

              <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.08] flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/[0.05] text-accent-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-type-primary">
                    SIÈGE OPÉRATIONNEL
                  </div>
                  <div className="text-xs text-type-secondary font-sans">
                    Marcory Anoumabo, Abidjan, Côte d&apos;Ivoire
                  </div>
                </div>
              </div>
            </div>

            {/* SLA indicator */}
            <div className="mt-8 flex items-center gap-2 technical-tag text-[10px] text-type-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span>DÉLAI DE PREMIÈRE RÉPONSE : SOUS 4 HEURES OUVRÉES</span>
            </div>
          </div>

          {/* Right Column: Architectural Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/[0.1] shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 hairline-b mb-8">
                <span className="technical-tag text-xs text-type-secondary">
                  FORMULAIRE DE QUALIFICATION PROJET
                </span>
                <span className="font-mono text-[10px] text-accent-orange">
                  CONFIDENTIEL &bull; B2B
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-type-primary">
                    Demande transmise avec succès
                  </h3>
                  <p className="text-sm text-type-secondary max-w-md font-sans">
                    Notre équipe d&apos;ingénierie étudie votre cahier des charges et prendra attache avec vous dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-studio-ghost mt-6 text-xs"
                  >
                    SOUMETTRE UN AUTRE PROJET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block technical-tag text-[10px] text-type-tertiary mb-2">
                        VOTRE NOM &amp; PRÉNOM *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Kouassi"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.08] text-sm text-type-primary placeholder:text-type-tertiary focus:border-accent-orange focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block technical-tag text-[10px] text-type-tertiary mb-2">
                        ENTREPRISE / ORGANISATION *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Ex: Société Générale CI"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.08] text-sm text-type-primary placeholder:text-type-tertiary focus:border-accent-orange focus:outline-none transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block technical-tag text-[10px] text-type-tertiary mb-2">
                        EMAIL PROFESSIONNEL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.kouassi@entreprise.ci"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.08] text-sm text-type-primary placeholder:text-type-tertiary focus:border-accent-orange focus:outline-none transition-colors font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block technical-tag text-[10px] text-type-tertiary mb-2">
                        TÉLÉPHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+225 07 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.08] text-sm text-type-primary placeholder:text-type-tertiary focus:border-accent-orange focus:outline-none transition-colors font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block technical-tag text-[10px] text-type-tertiary mb-2">
                      PÔLE TECHNIQUE CONCERNÉ
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.08] text-sm text-type-primary focus:border-accent-orange focus:outline-none transition-colors font-sans"
                    >
                      <option value="software">01 &mdash; Ingénierie Logicielle &amp; Microservices</option>
                      <option value="web-mobile">02 &mdash; Développement Web &amp; Applications Mobiles</option>
                      <option value="erp-pos">03 &mdash; Système ERP / Caisse POS / Facturation FNE</option>
                      <option value="infrastructure">04 &mdash; Infrastructure Réseau &amp; Serveurs Cloud</option>
                      <option value="transformation">05 &mdash; Transformation Digitale &amp; Processus</option>
                      <option value="support">06 &mdash; Infogérance, Maintenance &amp; SLA 24/7</option>
                    </select>
                  </div>

                  <div>
                    <label className="block technical-tag text-[10px] text-type-tertiary mb-2">
                      OBJECTIF TECHNIQUE DU PROJET *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre problématique, vos volumes attendus, vos délais ou vos contraintes d'infrastructure..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.08] text-sm text-type-primary placeholder:text-type-tertiary focus:border-accent-orange focus:outline-none transition-colors font-sans resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-studio w-full py-4 text-xs tracking-widest justify-center group"
                    >
                      {status === 'submitting' ? (
                        <span>TRANSMISSION EN COURS...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-accent-orange" />
                          <span>TRANSMETTRE AU STUDIO D&apos;INGÉNIERIE</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
