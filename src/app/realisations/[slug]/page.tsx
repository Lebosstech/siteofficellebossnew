import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/studio";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: projects.find((p) => p.slug === slug)?.name || "Projet introuvable",
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index],
    next = projects[(index + 1) % projects.length];
  return (
    <article className="interior section-wrap">
      <div className="section-label">
        <Link href="/realisations">← LES RÉALISATIONS</Link>
        <span>{p.domain.toUpperCase()}</span>
      </div>
      <h1>{p.name}</h1>
      <p className="interior-lead">{p.summary}</p>
      <div
        className="case-placeholder"
        role="img"
        aria-label="Visuel éditorial, capture produit non fournie"
      >
        {p.mark}
      </div>
      <p className="content-note">
        Visuel éditorial. Aucune capture produit authentique n’a été fournie
        dans le dépôt.
      </p>
      <div className="case-study-body">
        {[
          ["Contexte", p.summary],
          ["Problématique", p.focus],
          [
            "Approche",
            "Le dossier détaillé doit être complété avec l’équipe projet avant de publier des affirmations techniques.",
          ],
          [
            "Architecture",
            "Schéma et technologies propres à ce projet : documentation à fournir. La pile technique du site vitrine ne permet pas de déduire celle de ce produit.",
          ],
          [
            "Expérience produit",
            "Captures authentiques, parcours utilisateurs et liens de démonstration : éléments attendus.",
          ],
          [
            "Défis techniques",
            "Les contraintes et les arbitrages seront documentés à partir des informations validées par l’équipe.",
          ],
          [
            "Résultat",
            "Aucun indicateur de performance ou résultat commercial n’est publié sans source vérifiable.",
          ],
        ].map(([title, text], i) => (
          <section key={title}>
            <span className="mono">
              0{i + 1} / {title.toUpperCase()}
            </span>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <Link className="next-project" href={`/realisations/${next.slug}`}>
          <span>08 / Projet suivant — {next.name}</span>
          <ArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
