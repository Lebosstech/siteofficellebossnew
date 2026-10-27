export const expertises = [
  {
    slug: "automatisation",
    title: "Automatisation",
    line: "Les systèmes travaillent. Les équipes avancent.",
    description:
      "Relier vos outils, simplifier les processus et libérer le temps de vos équipes.",
    deliverables: [
      "Cartographie des processus",
      "Intégration des outils et API",
      "Workflows avec validation humaine",
      "Traçabilité et accompagnement",
    ],
  },
  {
    slug: "developpement",
    title: "Développement",
    line: "De l’idée au logiciel. Chaque détail compte.",
    description:
      "Applications web, interfaces mobiles et logiciels métier : des solutions construites autour de vos usages.",
    deliverables: [
      "Architecture et prototypage",
      "Interfaces accessibles et adaptatives",
      "API et données structurées",
      "Tests, déploiement et documentation",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & infrastructure",
    line: "Une infrastructure invisible. Une fiabilité essentielle.",
    description:
      "Déployer, configurer et faire évoluer les environnements dont vos activités dépendent.",
    deliverables: [
      "Architecture des environnements",
      "Configuration des serveurs",
      "Sauvegarde et supervision",
      "Déploiement et suivi opérationnel",
    ],
  },
  {
    slug: "maintenance",
    title: "Réseaux & maintenance",
    line: "Concevoir. Connecter. Maintenir.",
    description:
      "Des réseaux de bureau aux postes de travail, un accompagnement concret de votre informatique.",
    deliverables: [
      "Réseaux LAN et Wi-Fi professionnels",
      "Intégration des équipements",
      "Maintenance ordinateurs et imprimantes",
      "Support et conseil technique",
    ],
  },
] as const;
export const projects = [
  {
    slug: "sra",
    name: "SRA",
    domain: "Logistique & livraison",
    summary:
      "Un écosystème pour connecter les besoins de livraison et les opérations logistiques.",
    focus:
      "Coordonner les demandes, les intervenants et le suivi des livraisons.",
    mark: "SRA",
    year: "01",
  },
  {
    slug: "mon-gestionnaire-pro",
    name: "Mon Gestionnaire Pro",
    domain: "Logiciel de gestion",
    summary:
      "Une solution de gestion destinée aux processus opérationnels des entreprises.",
    focus: "Rassembler les opérations métier dans une expérience cohérente.",
    mark: "MGP",
    year: "02",
  },
  {
    slug: "lounan",
    name: "Lounan",
    domain: "Immobilier",
    summary:
      "Une application dédiée à la découverte immobilière et à la mise en relation.",
    focus: "Rendre la recherche de biens et la prise de contact plus lisibles.",
    mark: "LOU",
    year: "03",
  },
] as const;
export const brands = [
  {
    category: "Informatique",
    names: ["HP", "Dell", "Lenovo", "Apple", "Acer"],
  },
  { category: "Impression", names: ["Canon", "Ricoh", "Xerox"] },
  { category: "Réseaux", names: ["Cisco", "TP-Link", "D-Link"] },
  {
    category: "Stockage & logiciels",
    names: ["Seagate", "Western Digital", "Microsoft"],
  },
];
export type Partnership = {
  brand: string;
  relationship: string;
  description: string;
  logo: string;
  evidence: string;
  status: "pending" | "validated";
  url: string;
};
export const partnerships: Partnership[] = [];
export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "GSAP",
];
