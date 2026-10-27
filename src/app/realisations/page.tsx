import { ProjectGallery } from "@/components/experience/editorial";
export const metadata = { title: "Réalisations — Les projets LEBOSS TECH" };
export default function Page() {
  return (
    <div className="interior section-wrap">
      <div className="section-label">
        <span>02 / NOS RÉALISATIONS</span>
        <span>PRODUITS & EXPÉRIENCES</span>
      </div>
      <h1>
        Les idées prennent forme.
        <br />
        <em>Le travail prend le relais.</em>
      </h1>
      <p className="interior-lead">
        Logistique, gestion et immobilier : trois projets cités par LEBOSS TECH.
        Les captures authentiques et les détails techniques documentés seront
        ajoutés aux dossiers.
      </p>
      <ProjectGallery />
    </div>
  );
}
