import { Ecosystem } from "@/components/experience/editorial";
export const metadata = {
  title: "Écosystème — Technologies et environnements",
};
export default function Page() {
  return (
    <div className="interior section-wrap">
      <div className="section-label">
        <span>03 / NOTRE ÉCOSYSTÈME</span>
        <span>UNE EXIGENCE COMMUNE</span>
      </div>
      <h1>
        Les bons outils.
        <br />
        <em>Les bonnes connexions.</em>
      </h1>
      <p className="interior-lead">
        Technologies employées dans ce dépôt et marques déclarées par
        l’entreprise. Les partenariats officiels ne seront présentés qu’après
        validation documentaire.
      </p>
      <Ecosystem />
    </div>
  );
}
