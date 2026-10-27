import Link from "next/link";
import { notFound } from "next/navigation";
import { expertises } from "@/data/studio";
import {
  AutomationDemo,
  DevelopmentDemo,
  InfrastructureDemo,
  NetworkDemo,
} from "@/components/demos/system-demos";
export function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title:
      expertises.find((e) => e.slug === slug)?.title || "Expertise introuvable",
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = expertises.find((e) => e.slug === slug);
  if (!e) notFound();
  const Demo =
    slug === "automatisation"
      ? AutomationDemo
      : slug === "developpement"
        ? DevelopmentDemo
        : slug === "maintenance"
          ? NetworkDemo
          : InfrastructureDemo;
  return (
    <div className="interior section-wrap">
      <div className="section-label">
        <Link href="/expertises">← TOUTES LES EXPERTISES</Link>
        <span>{e.title.toUpperCase()}</span>
      </div>
      <h1>{e.line}</h1>
      <p className="interior-lead">{e.description}</p>
      <div className="interior-demo">
        <Demo />
      </div>
      <div className="deliverables">
        {e.deliverables.map((d, i) => (
          <div key={d}>
            <span>0{i + 1}</span>
            <h2>{d}</h2>
          </div>
        ))}
      </div>
      <Link className="primary-link" href="/contact">
        Parlons de votre projet ↗
      </Link>
    </div>
  );
}
