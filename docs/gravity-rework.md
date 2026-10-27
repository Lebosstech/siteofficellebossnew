# Refonte Gravity — LEBOSS TECH

La direction visuelle Gravity fournie par le propriétaire remplace la direction sombre précédente. Le framework Next.js, les textes français, les données des projets, les coordonnées, les routes et le formulaire existants sont conservés. Les données de `src/data/` et l’API de contact n’ont pas été modifiées.

## Expérience

- Studio clair, typographie Raleway locale, surfaces translucides et navigation fixe.
- Sphères procédurales Three.js, matériaux physiques nacrés et transmissifs, éclairage de studio, répulsion au pointeur avec impulsion selon la vitesse du geste.
- 96 sphères sur ordinateur, 54 sur mobile, DPR plafonné à 2. Paramètres et formules de la référence adaptés au projet existant.
- Accueil en amas elliptique, chute avec collisions et restitution, réassemblage en cœur, puis envol et disparition. Palettes cobalt → citron → rose.
- Les étapes suivent les limites mesurées des sections de contenu plutôt qu’un nombre arbitraire de pixels. Le décor d’accueil est réduit et remonté pour dégager le titre français sur plusieurs lignes.
- Tiroir modal natif avec quatre palettes, réinitialisation et pause. Un changement de palette nettoie et reconstruit la scène.
- Défilement à la molette interpolé à 0,09 ; clavier, tactile, barre de défilement et champs restent natifs. Les dialogues et le menu suspendent ce défilement.
- Les quatre démonstrations techniques demeurent utilisables dans des panneaux dépliables natifs sur l’accueil ; elles sont directement visibles sur leurs pages d’expertise.
- Portfolio, écosystème, présentation de l’entreprise et formulaire suivent la nouvelle présentation claire. Le pied de page est sombre, avec un bandeau de texte et les véritables informations LEBOSS TECH.

## Accessibilité et repli

Le contenu HTML reste visible sans JavaScript. Le décor est ignoré par les technologies d’assistance. Le tiroir utilise les mécanismes natifs de focus et d’Escape de `dialog`. Les panneaux techniques utilisent `details`/`summary`. Le calibrage peut être passé et dispose d’un délai de secours. Sans WebGL, une composition CSS remplace les sphères. En mouvement réduit, les sphères sont statiques ; seuls un changement de position ou un redimensionnement déclenchent un nouveau rendu. Les démonstrations gardent leurs commandes manuelles.

## Validation reproductible

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run start -- --hostname 0.0.0.0 --port 3003
# Depuis un autre terminal avec Chromium :
TEST_BASE_URL=http://127.0.0.1:3003 CHROMIUM_PATH=/usr/bin/chromium npm run test:browser
npm run test:gravity
```

Le test général contrôle les 15 routes, 7 dimensions, les démonstrations, le formulaire non configuré, le menu, les erreurs 404 et le mouvement réduit. Le test Gravity contrôle le contexte WebGL, les étapes de scroll, le tiroir, les palettes, le clavier, six largeurs et quatorze routes internes. Les captures sont générées dans `artifacts/gravity/` et ignorées par Git.

## Limites

Aucun site fictif Gravity n’est publié. Aucun texte commercial de Gravity ni chiffre de performance du brief n’est ajouté au site. Le rendu logiciel Chromium ne mesure pas les performances GPU des appareils réels ; Safari et téléphones physiques restent à vérifier. Les démonstrations de workflow et de déploiement restent explicitement illustratives. L’envoi réel du formulaire nécessite toujours la configuration Resend documentée dans le README.

Le déploiement distant Vercel ne peut pas être confirmé depuis cet environnement tant que son domaine reste bloqué par la politique réseau ; le push Git n’est pas une preuve de publication réussie.
