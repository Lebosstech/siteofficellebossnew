import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { INITIAL_ARTICLES } from '@/data/cms-seed-data';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';

export async function generateStaticParams() {
  return INITIAL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INITIAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Guide Technique' };

  return {
    title: `${article.title} | Guides LEBOSS TECH`,
    description: article.excerpt,
    alternates: { canonical: `https://lebosstech.ci/ressources/${article.slug}` },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INITIAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container-leboss max-w-4xl space-y-10">
        <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 space-y-4">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" /> Retour aux guides et ressources
          </Link>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-leboss-500 text-white font-extrabold uppercase">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5" /> Lecture : {article.readTime}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
            {article.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <article className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-card space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-leboss-600 pb-4 border-b border-slate-100">
            <BookOpen className="w-4 h-4" /> Note d&apos;ingénierie LEBOSS TECH Abidjan
          </div>
          {article.content}
        </article>

        <QuoteQualificationForm defaultProduct={`Conseil suite au guide : ${article.title}`} />
      </div>
    </div>
  );
}
