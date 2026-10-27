export const metadata = { title: "Confidentialité" };
export default function Page() {
  return (
    <article className="interior section-wrap">
      <h1>Confidentialité.</h1>
      <div className="case-study-body">
        <section>
          <h2>Vos demandes de contact</h2>
          <p>
            Le formulaire recueille votre nom, votre adresse email, votre
            entreprise si vous la renseignez, le domaine de votre projet et
            votre message. Ces informations permettent à LEBOSS TECH de répondre
            à votre demande. Ne transmettez pas de mot de passe ni de données
            sensibles.
          </p>
        </section>
        <section>
          <h2>Transmission et prestataire</h2>
          <p>
            Lorsque le service d’envoi est configuré, le message est transmis
            par Resend à contact@lebosstech.ci. Aucun succès d’envoi n’est
            affiché si ce service est indisponible. Le site ne stocke pas les
            demandes dans une base de données applicative.
          </p>
        </section>
        <section>
          <h2>Protection contre les abus</h2>
          <p>
            Un contrôle temporaire associe l’adresse email et l’adresse réseau
            communiquée par le serveur pour limiter les soumissions répétées.
            Ces informations sont conservées en mémoire pendant dix minutes au
            maximum. Aucun traceur publicitaire ni outil d’analyse d’audience
            n’est intégré à cette version.
          </p>
        </section>
        <section>
          <h2>Nous contacter</h2>
          <p>
            Pour toute question concernant vos informations, leur accès, leur
            correction ou leur suppression, écrivez à{" "}
            <a href="mailto:contact@lebosstech.ci">contact@lebosstech.ci</a>. La
            durée de conservation des échanges dans la messagerie et les
            modalités du prestataire doivent être confirmées par l’entreprise
            avant mise en production.
          </p>
        </section>
      </div>
    </article>
  );
}
