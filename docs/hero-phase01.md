# Phase 01 — LEBOSS Digital Engine

Refonte limitée au hero et à la présentation du logo dans la navigation. Aucun changement des sections suivantes, du portfolio, des données, des partenaires ou des routes.

## Les modes

- Automatisation : six nœuds reliés, réception → validation → traitement → décision → action → confirmation. Signal SVG, progression déterministe et journal de démonstration.
- Développement : éditeur TypeScript, lignes progressivement révélées, composant de confirmation dans un aperçu HTML et pipeline de build.
- Infrastructure : client → reverse proxy → application → PostgreSQL, trajet aller puis retour, configuration illustrative et étapes Build/Test/Deploy/Healthy.

Même cadre DOM, transition de 800 ms entre les modes. GSAP assemble le cadre, les nœuds et les connexions, puis le code et le déploiement. L’introduction se termine vers quatre secondes, sans masquer le texte principal. Commandes de pause, relecture et passage immédiat. Les onglets acceptent les flèches, Home et End. Le mouvement réduit affiche immédiatement l’état final et propose des étapes manuelles. Les animations sont suspendues hors écran et quand le document est caché ; les timelines et observateurs sont nettoyés au démontage.

La scène n’utilise ni canvas, ni WebGL, ni nouvelle dépendance. Les anciennes dépendances Three.js sont conservées dans le manifeste pour éviter d’élargir le périmètre de cette phase, mais ne sont plus importées par le hero.

## Fichiers concernés

- `src/components/experience/digital-engine.tsx` : interface, états, commandes et timelines.
- `src/components/experience/digital-engine.css` : matériaux, profondeur et composition mobile dédiée.
- `src/components/experience/technology-core.tsx` : ancien visuel retiré.
- `src/app/page.tsx` : remplacement du seul composant visuel du hero.
- `src/components/layout/studio-header.tsx` : original JPG haute définition, intact, sur une surface claire.
- `scripts/verify-hero.mjs` : interactions, captures, enregistrement CDP/FFmpeg et arbre d’accessibilité Chromium.
- `scripts/verify-browser.mjs` : attentes adaptées à la suppression du canvas.
- Ce document.

## Vérifications

`npm run lint`, `npm run typecheck` et `npm run build` réussis. Le test dédié utilise le serveur de production et Chromium :

```sh
npm run start -- --hostname 0.0.0.0 --port 3002
# Dans un autre terminal ; Chromium et FFmpeg système doivent être installés.
node scripts/verify-hero.mjs
```

Captures 1440×900 et 390×844, capture intégrale du hero mobile et captures des trois modes dans `artifacts/hero-phase01/` (dossier ignoré par Git). Aucun débordement détecté à 360, 390, 768, 1024, 1440 et 1920 px. Vérification de la progression workflow/code/déploiement, du clavier, de la pause, de la relecture, du passage, du mouvement réduit, des noms accessibles et des dimensions des commandes mobiles. Aucune exception JavaScript pendant le parcours. Le MP4 est un enregistrement du navigateur via CDP et FFmpeg système, sans ressource distante ; sa cadence ne constitue pas une mesure de performance.

## Limites

- Une version transparente officielle du logo reste à fournir. Les fichiers originaux sont conservés sans retouche ; aucun logo n’a été généré ou redessiné.
- Toutes les opérations sont des simulations identifiées. Elles ne compilent ni ne déploient de logiciel réel.
- Le hero mobile se lit verticalement pour conserver des libellés et du code lisibles ; la capture 390×844 est complétée par une capture intégrale.
- Les tests clavier et d’arbre d’accessibilité ne remplacent pas un audit complet avec lecteurs d’écran. Performances sur téléphones physiques et Safari non mesurées.
- Modifications locales uniquement pour cette phase : aucun commit, push ou déploiement supplémentaire effectué.
