import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { expertises } from "@/data/studio";
export const metadata = {
  title: "Expertises — Logiciel, automatisation et infrastructure",
};
export default function Page() {
  return (
    <div className="interior section-wrap">
      <div className="section-label">
        <span>01 / NOS EXPERTISES</span>
        <span>DU CODE AU TERRAIN</span>
      </div>
      <h1>
        Des systèmes pensés ensemble.
        <br />
        <em>Des besoins bien réels.</em>
      </h1>
      <p className="interior-lead">
        Du premier prototype à l’environnement de production, nous relions les
        compétences qui font avancer votre entreprise.
      </p>
      <div className="expertise-list">
        {expertises.map((e, i) => (
          <Link key={e.slug} href={`/expertises/${e.slug}`}>
            <span className="mono">0{i + 1}</span>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
