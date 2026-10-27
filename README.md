# LEBOSS TECH — Gravity Studio

Site vitrine français, Next.js 15 / React 19 / TypeScript. Direction Gravity : sphères procédurales Three.js, palettes interactives, repli CSS, démonstrations React déterministes et transitions GSAP/ScrollTrigger. Aucun catalogue ni paiement.

## Développement

Node.js 24 et npm 11 utilisés pour la validation. Utiliser le checkout existant : chaque tâche cloud est isolée, aucun worktree supplémentaire n’est nécessaire.

```sh
npm ci
npm run dev -- --hostname 0.0.0.0
```

Les polices sont distribuées localement par les packages `@fontsource`. Le site public ne requiert ni Google Fonts ni PostgreSQL. Le schéma Prisma est conservé comme référence pour un éventuel travail de persistance ; il n’est pas généré au build et n’est plus utilisé par le formulaire. Les anciens modules d’authentification sans route consommatrice et les anciens composants remplacés ont été supprimés ; l’historique Git conserve leur état initial.

## Validation

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run start -- --hostname 0.0.0.0 --port 3001
# Dans un autre terminal :
npx playwright install chromium
npm run test:browser
# Ou pour un Chromium déjà installé :
CHROMIUM_PATH=/usr/bin/chromium npm run test:browser
```

`TEST_BASE_URL` permet de changer l’adresse cible. Les tests navigateur contrôlent les routes, les sept formats demandés, les quatre démonstrations, le menu clavier, le repli à mouvement réduit et le formulaire sans configuration. Ils produisent des captures dans `artifacts/` (ignoré par Git). Ils doivent cibler une instance locale sans clés d’envoi : le test du formulaire attend une indisponibilité explicite. Les tests serveur interceptent le fournisseur : aucun email réel n’est envoyé.

## Contact : configuration requise avant publication

Déclarer `RESEND_API_KEY` et `CONTACT_FROM_EMAIL` dans les variables sécurisées du déploiement, puis vérifier le domaine expéditeur chez Resend. Autoriser HTTPS vers `api.resend.com`. `.env.example` documente les noms ; ne jamais y mettre les vraies valeurs. Le destinataire est `contact@lebosstech.ci`. Les champs sont validés côté serveur, avec honeypot, délai minimal, taille maximale et limitation temporaire des envois. Un succès exige un identifiant de réception du fournisseur ; sans configuration le formulaire affiche l’indisponibilité et les coordonnées directes.

La limitation en mémoire est propre à chaque instance. En production multi-instance, ajouter une limitation distribuée au reverse proxy/WAF, lequel doit remplacer les en-têtes d’adresse client. Elle ne remplace pas une protection anti-abus à l’entrée du service. `CONTACT_ALLOWED_ORIGIN` est facultatif pour autoriser explicitement une origine publique distincte du Host reçu. Valider l’envoi réel et la réception après configuration ; ce n’est pas vérifiable sans compte fournisseur.

## Contenus et publication

- Les projets SRA, Mon Gestionnaire Pro et Lounan proviennent du brief et du dépôt. Aucun résultat, métrique ni stack propre à ces projets n’est inventé.
- Aucun screenshot produit n’est présent dans les assets initiaux. Les illustrations typographiques sont marquées comme éditoriales. Fournir les captures authentiques, schémas, résultats documentés et liens officiels pour compléter les études de cas.
- Les marques sont présentées par catégorie en texte, sans réinterpréter leurs logos ni les qualifier de partenaires. `src/data/studio.ts` contient une collection de partenariats vide ; seuls les éléments `validated` peuvent s’afficher.
- Les technologies publiées sont celles vérifiées dans ce dépôt. Les photographies d’équipe/bureau et les statistiques non sourcées ont été évitées.
- Les mentions légales, la durée de conservation des emails et les informations d’hébergement doivent être validées par l’entreprise avant publication. Les textes actuels décrivent la fonction réelle.
- Les briefs Ascend et Gravity ont été fournis comme références. La direction Gravity est adaptée aux textes et informations LEBOSS TECH ; aucun contenu d’agence fictive ni asset distant n’est publié.

## Mouvement et performance

Le canvas charge Three.js séparément, plafonne le DPR à 2 et utilise 96 sphères sur ordinateur, 54 sur mobile. La scène suit quatre états mesurés sur les sections : accueil, chute, cœur, envol. Le pointeur et la vitesse du geste influencent la répulsion. Le panneau de palettes permet une reconstruction propre de la scène et une pause du décor. Le défilement à la molette utilise une interpolation de 0,09 ; le tactile, le clavier et la barre de défilement restent natifs.

Les ressources GPU et observateurs sont libérés au démontage. Le rendu est suspendu quand l’onglet est caché. En mouvement réduit ou en pause, le décor est statique et ne se redessine que pour un changement de position ou de dimensions. Sans WebGL, un repli CSS s’affiche. Le texte est rendu côté serveur ; aucune dépendance distante n’est nécessaire au rendu des polices ou des sphères.

Pour vérifier la direction Gravity avec le serveur de production sur le port 3003 : `npm run test:gravity`. Les captures se trouvent dans `artifacts/gravity/`. Le script vérifie la scène, les palettes, le tiroir, le clavier, les routes et le responsive. Les tests d’API restent indépendants du rendu graphique.

Les objectifs 60 fps et Core Web Vitals doivent être mesurés sur appareils réels après déploiement : les captures Chromium ne prouvent pas les performances GPU d’un téléphone.
