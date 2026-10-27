import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowUpRight } from 'lucide-react';
import { INITIAL_ARTICLES } from '@/data/cms-seed-data';

export const metadata: Metadata = {
  title: 'Guides Techniques & Ressources IT pour les Entreprises en Côte d’Ivoire',
  description:
    'Articles et guides pratiques rédigés par les ingénieurs LEBOSS TECH : budget d’application mobile, intégration API Mobile Money, choix de serveur/onduleur et imprimantes pro.',
  alternates: { canonical: 'https://lebosstech.ci/ressources' },
};

export default function RessourcesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-tech-grid text-white py-20 border-b border-white/10">
        <div className="container-leboss max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leboss-500/15 border border-leboss-500/30 text-leboss-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Centre de Ressources &amp; Guides B2B
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Guides Techniques &amp; Conseils d&apos;Architecture
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Des analyses concrètes pour éclairer vos décisions d&apos;investissement logiciel, matériel et réseau à Abidjan.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-leboss grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {INITIAL_ARTICLES.map((art) => (
            <Link
              key={art.slug}
              href={`/ressources/${art.slug}`}
              className="group bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-leboss-500 shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-3 py-1 rounded-full bg-leboss-50 text-leboss-600 font-extrabold uppercase">
                    {art.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-navy-950 group-hover:text-leboss-600 transition-colors leading-snug mb-3">
                  {art.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-navy-950 group-hover:text-leboss-600">
                <span>Lire le guide complet</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
