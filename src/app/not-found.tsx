import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16">
      <div className="container-leboss max-w-lg text-center bg-white rounded-3xl p-10 border border-slate-200 shadow-card space-y-5">
        <span className="inline-block px-3 py-1 rounded-full bg-leboss-50 text-leboss-600 text-xs font-extrabold font-mono">
          Erreur 404
        </span>
        <h1 className="text-3xl font-extrabold text-navy-950">
          Cette page ou ce produit a été déplacé
        </h1>
        <p className="text-sm text-slate-600">
          Utilisez notre moteur de recherche ou accédez directement au catalogue de matériel informatique et à nos solutions logicielles.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-950 text-white text-xs font-extrabold"
          >
            <ArrowLeft className="w-4 h-4" /> Accueil
          </Link>
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-leboss-500 text-white text-xs font-extrabold"
          >
            <Search className="w-4 h-4" /> Catalogue Produits
          </Link>
        </div>
      </div>
    </div>
  );
}
