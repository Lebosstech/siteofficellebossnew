'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Mail, AlertCircle, Loader2, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@lebosstech.ci');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Identifiants invalides.');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch {
      setError('Erreur réseau. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="flex justify-center mb-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white p-1 shadow-glow-orange">
              <Image
                src="/images/logo.webp"
                alt="LEBOSS TECH"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div>
              <span className="block text-xl font-extrabold text-white tracking-tight">
                LEBOSS <span className="text-leboss-500">TECH</span>
              </span>
              <span className="block text-xs text-slate-400 font-semibold uppercase tracking-widest">
                Administration Centralisée
              </span>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-leboss-600 bg-leboss-50 px-3 py-1.5 rounded-full w-fit mb-4">
            <ShieldCheck className="w-4 h-4" /> Accès Sécurisé RBAC
          </div>
          <h1 className="text-2xl font-extrabold text-navy-950 mb-1">
            Connexion Back-Office
          </h1>
          <p className="text-xs text-slate-500 mb-6">
            Pilotez votre catalogue (506 produits), vos 6 solutions logicielles, vos commandes et vos devis B2B.
          </p>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Adresse e-mail administrateur
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-leboss-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-leboss-500 hover:bg-leboss-600 disabled:opacity-60 text-white font-bold text-sm shadow-glow-orange transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Authentification...
                </>
              ) : (
                'Se connecter au Back-Office'
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <Link href="/" className="inline-flex items-center gap-1.5 hover:text-leboss-600 font-semibold">
              <ArrowLeft className="w-3.5 h-3.5" /> Retour au site public
            </Link>
            <span>Protection JWT HttpOnly</span>
          </div>
        </div>
      </div>
    </div>
  );
}
