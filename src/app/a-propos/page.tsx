import { AboutStatement } from "@/components/experience/editorial";
import Link from "next/link";
export const metadata = { title: "À propos — LEBOSS TECH, Abidjan" };
export default function Page() {
  return (
    <div className="interior section-wrap">
      <div className="section-label">
        <span>04 / LEBOSS TECH</span>
        <span>ABIDJAN, CÔTE D’IVOIRE</span>
      </div>
      <h1>
        Pensé à Abidjan.
        <br />
        <em>Construit pour aller plus loin.</em>
      </h1>
      <p className="interior-lead">
        Une entreprise ivoirienne d’ingénierie informatique et numérique,
        attentive aux usages et aux contraintes du terrain.
      </p>
      <AboutStatement />
      <div className="deliverables">
        {[
          "Comprendre avant de concevoir",
          "Relier les usages et la technique",
          "Construire avec méthode",
          "Accompagner dans la durée",
        ].map((t, i) => (
          <div key={t}>
            <span>0{i + 1}</span>
            <h2>{t}</h2>
          </div>
        ))}
      </div>
      <Link className="primary-link" href="/contact">
        Discuter de votre projet ↗
      </Link>
    </div>
  );
}
