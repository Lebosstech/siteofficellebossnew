export interface SoftwareSolutionData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  badge: string;
  status: 'En production' | 'Disponible sur Google Play' | 'Disponible sur Windows & Web';
  platforms: string[];
  officialUrl: string;
  officialUrlLabel: string;
  secondaryUrl?: string;
  secondaryUrlLabel?: string;
  icon: string;
  accentColor: string;
  heroImage: string;
  screenshots: string[];
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  targetAudience: string;
  keyMetrics: Array<{ label: string; value: string }>;
  features: Array<{ title: string; description: string }>;
  techStack: string[];
}

export const SOFTWARE_SOLUTIONS: SoftwareSolutionData[] = [
  {
    slug: 'mon-gestionnaire-pro',
    name: 'Mon Gestionnaire Pro',
    shortName: 'MGP ERP & POS',
    tagline: 'Votre caisse, vos stocks et votre comptabilité SYSCOHADA enfin reliés.',
    category: 'ERP, Caisse POS & Comptabilité',
    badge: 'Logiciel Entreprise (B2B)',
    status: 'Disponible sur Windows & Web',
    platforms: ['Windows 10 / 11 (64 bits)', 'Mode 100 % Hors-Ligne', 'Synchronisation Cloud'],
    officialUrl: 'https://mongestionnairepro.com',
    officialUrlLabel: 'Visiter mongestionnairepro.com',
    icon: 'https://mongestionnairepro.com/icon.png',
    accentColor: '#FF6A00',
    heroImage: 'https://mongestionnairepro.com/screenshots/nova/01-tableau-de-bord-1920.webp',
    screenshots: [
      'https://mongestionnairepro.com/screenshots/nova/01-tableau-de-bord-1920.webp',
      'https://mongestionnairepro.com/screenshots/nova/29-point-de-vente-1920.webp',
      'https://mongestionnairepro.com/screenshots/nova/04-comptabilite-1920.webp',
      'https://mongestionnairepro.com/screenshots/nova/17-stock-1920.webp',
      'https://mongestionnairepro.com/screenshots/nova/15-ventes-factures-1920.webp',
      'https://mongestionnairepro.com/screenshots/nova/08-balance-generale-1920.webp',
    ],
    shortDescription:
      'Logiciel de gestion commerciale, point de vente (POS), gestion de stocks multi-dépôts, facturation FNE et comptabilité SYSCOHADA conçu pour les PME et commerces en Côte d’Ivoire.',
    fullDescription:
      'Mon Gestionnaire Pro réunit six métiers dans une seule application fluide et robuste : Caisse enregistreuse au clavier, Gestion des stocks, Facturation B2B, Suivi des achats fournisseurs, Trésorerie et Comptabilité SYSCOHADA automatique. Pensé pour les réalités du terrain en Afrique de l’Ouest, il fonctionne sans coupure même lorsque la connexion Internet est interrompue.',
    problemSolved:
      'Élimine les écarts de caisse, les ruptures de stock non anticipées, les doubles saisies entre la caisse et la comptabilité, ainsi que les blocages liés aux coupures Internet.',
    targetAudience:
      'Boutiques spécialisées, supermarchés, quincailleries, pharmacies, grossistes, PME de distribution et sociétés de services.',
    keyMetrics: [
      { label: 'Disponibilité terrain', value: '100 % Hors-Ligne' },
      { label: 'Conformité légale', value: 'SYSCOHADA & FNE' },
      { label: 'Imprimantes supportées', value: '58mm, 80mm & A4' },
    ],
    features: [
      {
        title: 'Point de Vente (POS) ultra-rapide au clavier',
        description:
          'Scan code-barres, mise en attente instantanée d’un panier (F7) et reprise immédiate (F8), comptage physique du fond de caisse et clôture Z.',
      },
      {
        title: 'Paiements combinés & Mobile Money',
        description:
          'Encaissement mixte Espèces, Wave, Orange Money, MTN MoMo, Moov Money, Carte bancaire, Chèque et Virement avec suivi des créances.',
      },
      {
        title: 'Gestion des stocks & Alertes multi-dépôts',
        description:
          'Valorisation du stock en temps réel, mouvements tracés, inventaires tournants et seuils d’alerte automatiques avant rupture.',
      },
      {
        title: 'Comptabilité SYSCOHADA & Facturation FNE',
        description:
          'Chaque vente ou règlement génère automatiquement les écritures comptables justes (journal, grand livre, balance générale) et prend en charge la Facture Normalisée Électronique.',
      },
      {
        title: 'Sécurité des données sur poste & Sauvegardes',
        description:
          'Un compte nominatif par employé avec gestion fine des rôles, verrouillage après 5 tentatives erronées et sauvegardes automatiques sans figer l’écran.',
      },
    ],
    techStack: ['Windows 10/11 Native', 'Base locale chiffrée', 'SYSCOHADA Engine', 'POS Thermal Print'],
  },
  {
    slug: 'sra',
    name: 'SRA — Livraison & Courses',
    shortName: 'SRA Livraison',
    tagline: 'La plateforme mobile de livraison express et de logistique urbaine en Côte d’Ivoire.',
    category: 'Logistique & Mobilité',
    badge: 'Application Grand Public & Commerçants',
    status: 'Disponible sur Google Play',
    platforms: ['Android (Google Play)'],
    officialUrl: 'https://play.google.com/store/apps/details?id=ci.sira.sira&hl=fr',
    officialUrlLabel: 'Télécharger sur Google Play',
    icon: 'https://play-lh.googleusercontent.com/yxE7pKPXVwnomya-dcyOjOrofOkLUlLVDeFv5rRVjaY6LJkV9YQT75am80ro0tLXFLRBSx8bzPjiSlxAUYheCQ=w240-h480-rw',
    accentColor: '#FF6A00',
    heroImage: 'https://play-lh.googleusercontent.com/qEBux60_7iZ44AkdcHxgpCdZVbi4oJhf_LaWqUCkMEnJ0u3eVKGSM9yoaSHMgDsizRILxFuKf7IXfituO1UnTg=w1052-h592-rw',
    screenshots: [
      'https://play-lh.googleusercontent.com/qEBux60_7iZ44AkdcHxgpCdZVbi4oJhf_LaWqUCkMEnJ0u3eVKGSM9yoaSHMgDsizRILxFuKf7IXfituO1UnTg=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/4k5wDrEvD7mTCukcYtpG56SytCiNTMbDiHkwdrLP_09xbJodM_Gs4aD5OhhZ9Nv0Yd6yhesFuEtSIoFUDYpNDg=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/OxXXCDG2U29HyrRTkKPrhBgB646w1_7p_o12Wm4mlQYQfQ1-mQPrnu1LvzycmAGx1JL5fG2xzSl3MERpcoEqGw=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/I3w666qCT2bsqmjUgRyAEoEyJ6UrgWrfxtaeBKZcamU94RJPlE79fSGzr4a-FuZ4RbxUKEYItuD74s0tbkS7ag=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/kNEWLmroNjkJhV0RCoRFJipluNeL1VWOBznB5AJ57d9DacgQzVJrIxxSVzQMf8511p2rfdD9zdPiTU2AUSZ7=w1052-h592-rw',
    ],
    shortDescription:
      'Application mobile permettant aux particuliers, e-commerçants et entreprises de commander un coursier vérifié en quelques secondes pour leurs expéditions de colis et courses à Abidjan.',
    fullDescription:
      'SRA digitalise la logistique du dernier kilomètre en Côte d’Ivoire. Que vous soyez un e-commerçant expédiant des dizaines de commandes par jour ou un particulier souhaitant envoyer un pli urgent à travers Abidjan, SRA calcule instantanément le tarif, assigne le livreur le plus proche et permet de suivre l’acheminement en temps réel sur la carte.',
    problemSolved:
      'Remplace les négociations téléphoniques imprévisibles et le manque de visibilité sur les livreurs indépendants par une tarification transparente et un suivi GPS en direct.',
    targetAudience: 'E-commerçants, restaurants, entreprises, pharmacies et particuliers en Côte d’Ivoire.',
    keyMetrics: [
      { label: 'Plateforme', value: 'Android Native' },
      { label: 'Suivi', value: 'GPS Temps Réel' },
      { label: 'Écosystème', value: 'Couplé à SRA PRO' },
    ],
    features: [
      {
        title: 'Commande de course en 3 étapes',
        description:
          'Sélection du point de collecte, de la destination et de la nature du colis avec calcul immédiat du coût de livraison en FCFA.',
      },
      {
        title: 'Géolocalisation et suivi temps réel',
        description:
          'Visualisation de l’approche du livreur et de l’avancement de la livraison jusqu’à la remise au destinataire.',
      },
      {
        title: 'Historique et gestion des expéditions',
        description:
          'Suivi complet des courses passées, des montants réglés et des coordonnées des destinataires réguliers.',
      },
      {
        title: 'Communication directe intégrée',
        description:
          'Appel ou messagerie instantanée avec le coursier assigné sans quitter l’application.',
      },
    ],
    techStack: ['Android', 'Géolocalisation Maps API', 'Notifications Push Temps Réel', 'API REST Sécurisée'],
  },
  {
    slug: 'sra-pro',
    name: 'SRA PRO — Espace Livreurs',
    shortName: 'SRA PRO',
    tagline: 'L’outil de pilotage opérationnel conçu pour les livreurs et flottes partenaires SRA.',
    category: 'Logistique & Flotte',
    badge: 'Application Partenaires & Coursiers',
    status: 'Disponible sur Google Play',
    platforms: ['Android (Google Play)'],
    officialUrl: 'https://play.google.com/store/apps/details?id=ci.sra.sra&hl=fr',
    officialUrlLabel: 'Voir SRA PRO sur Google Play',
    icon: 'https://play-lh.googleusercontent.com/ADWL_PAonSFEXExX0YlzoZQCVKnnyzPMmhoxy2YE0f-ac0tfX5wookCxkLH651wwgc0BrLabuQ6b2EFxQTGS6w=w240-h480-rw',
    accentColor: '#10b981',
    heroImage: 'https://play-lh.googleusercontent.com/fPT6EP808OhjDsPApz_nP6TSj1vTufs4dYpPBB4XR38cr-wQKAuJcR2GSNNbUWY71eQBSjMiAHjKam5TrzPT=w1052-h592-rw',
    screenshots: [
      'https://play-lh.googleusercontent.com/fPT6EP808OhjDsPApz_nP6TSj1vTufs4dYpPBB4XR38cr-wQKAuJcR2GSNNbUWY71eQBSjMiAHjKam5TrzPT=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/7KVjWjojEfQvi9U3py436IhEXx3coAxS2sInm9mP9SC0vVy_Gnjm9P-kQvsZFmDKC1qgefVZI-16X6ZMEMCtSA=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/YZ38WyAN19PKlR9PHdeDoN696n3ZcIE6rjuxFAqmxyplVM6XY06NsrEYJgnzCfZtCqb0xnALQPKQSQLLjkMWkEA=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/_lEPYSCRc4GFQn6D5nUQ-zV8_GrQzlpc395G8r1fRoskDfYnP0sGLC1cZzcQuy3rUly_GqUGJyOiHSAZUzq4gA=w1052-h592-rw',
    ],
    shortDescription:
      'Application dédiée aux livreurs et transporteurs partenaires du réseau SRA pour recevoir les missions à proximité, optimiser leurs trajets et suivre leurs revenus en temps réel.',
    fullDescription:
      'Connectée en temps réel à la plateforme cliente SRA, l’application SRA PRO équipe les coursiers professionnels d’un véritable tableau de bord mobile. Elle automatise la répartition intelligente des courses selon la position GPS du livreur, réduit les trajets à vide et offre une transparence totale sur les commissions et revenus générés.',
    problemSolved:
      'Optimise le taux de remplissage des coursiers, structure les étapes de validation de collecte/livraison et centralise la comptabilité journalière des livreurs.',
    targetAudience: 'Livreurs indépendants, sociétés de coursiers et gestionnaires de flottes deux-roues ou utilitaires.',
    keyMetrics: [
      { label: 'Dispatching', value: 'Algorithme Proximité' },
      { label: 'Navigation', value: 'Guidage GPS Intégré' },
      { label: 'Revenus', value: 'Portefeuille Temps Réel' },
    ],
    features: [
      {
        title: 'Réception et acceptation instantanée des missions',
        description:
          'Alerte sonore et visuelle dès qu’une course est disponible à proximité avec affichage immédiat de la distance et du gain.',
      },
      {
        title: 'Navigation GPS et statuts d’avancement',
        description:
          'Guidage vers le point de ramassage puis de livraison avec confirmation étape par étape (En route, Colis récupéré, Livré).',
      },
      {
        title: 'Suivi du chiffre d’affaires et portefeuille livreur',
        description:
          'Consultation détaillée des gains par course, par jour et par semaine avec historique complet des versements.',
      },
      {
        title: 'Gestion de disponibilité (En ligne / Hors ligne)',
        description:
          'Le livreur active ou suspend sa disponibilité en un clic selon ses horaires de service.',
      },
    ],
    techStack: ['Android', 'Background Location Service', 'WebSockets / Push', 'Wallet & Analytics'],
  },
  {
    slug: 'lounan',
    name: 'Lounan — Immobilier & Séjours',
    shortName: 'Lounan Immobilier',
    tagline: 'La recherche immobilière en Côte d’Ivoire devient simple, rapide et fiable.',
    category: 'PropTech & Immobilier',
    badge: 'Application Mobile PropTech',
    status: 'Disponible sur Google Play',
    platforms: ['Android (Google Play)'],
    officialUrl: 'https://play.google.com/store/apps/details?id=com.lounan.app&hl=fr',
    officialUrlLabel: 'Télécharger Lounan sur Google Play',
    secondaryUrl: '/realisations/creation-dapplication-mobile-lounan',
    secondaryUrlLabel: 'Lire l’étude de cas complète',
    icon: 'https://play-lh.googleusercontent.com/5_54_BVwpH6hNeriasOT6LHBCALK90SSLe0nhubJ3JZGXCh4Cj9Rlz5nW-HDhKhf4izfoaonkCiieqZ66rrf=w240-h480-rw',
    accentColor: '#0ea5e9',
    heroImage: 'https://res.cloudinary.com/dmbgbi2pq/image/upload/projects/Sl8xLLz3E14wNKdmGnzHjEAsZ5WnucNCpGwKTDq2.png',
    screenshots: [
      'https://res.cloudinary.com/dmbgbi2pq/image/upload/projects/Sl8xLLz3E14wNKdmGnzHjEAsZ5WnucNCpGwKTDq2.png',
      'https://play-lh.googleusercontent.com/wlpFy1DXDNS3cImcXpAkmTMJ_XKQlZKxuni-F2BNcr4ca_qy2-zDhMYVe-5Q1IR6cDwcXcEjMBQAgNz6X5GZmQ=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/fAXB53oT4ZuZ_rsrCJC7cIQo57wO59dyQPVtdn9YqxFeeeKPilr6mXKskNyIgms_t_MkXV02LEAgqEyyZ74FFA=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=w1052-h592-rw',
    ],
    shortDescription:
      'Application mobile immobilière permettant de rechercher et comparer facilement maisons, appartements, studios, résidences meublées, terrains et locaux commerciaux en Côte d’Ivoire.',
    fullDescription:
      'Conçue et développée de A à Z par les équipes d’ingénierie de LEBOSS TECH, Lounan répond aux frictions majeures du marché immobilier ivoirien : pertes de temps, annonces obsolètes et intermédiaires multiples. L’application centralise des offres structurées avec photos vérifiées, localisation par commune et contact direct avec les propriétaires et agences.',
    problemSolved:
      'Réduit drastiquement les déplacements inutiles et les fausses annonces lors de la recherche d’un logement ou d’un local professionnel à Abidjan et à l’intérieur du pays.',
    targetAudience: 'Particuliers en recherche de logement, expatriés, agences immobilières et propriétaires bailleurs.',
    keyMetrics: [
      { label: 'Catégories', value: 'Maisons, Studios, Terrains, Bureaux' },
      { label: 'Architecture', value: 'Mobile + API Cloud' },
      { label: 'Statut', value: 'En production (Play Store)' },
    ],
    features: [
      {
        title: 'Catalogue immobilier structuré par catégories',
        description:
          'Navigation fluide entre locations mensuelles, résidences meublées, achats de villas, terrains lotis et espaces commerciaux.',
      },
      {
        title: 'Moteur de filtres multicritères par commune et budget',
        description:
          'Filtrage précis par zone (Cocody, Marcory, Riviera, Yopougon, Bingerville…), budget en FCFA, nombre de pièces et commodités.',
      },
      {
        title: 'Fiches détaillées avec galeries HD',
        description:
          'Présentation transparente des caractéristiques du bien, des conditions d’accès et de la localisation avant toute visite physique.',
      },
      {
        title: 'Mise en relation directe et sécurisée',
        description:
          'Prise de contact rapide avec l’agence ou le gestionnaire vérifié pour planifier une visite ou réserver.',
      },
    ],
    techStack: ['Android', 'UI/UX Mobile Design', 'Backend API', 'Cloudinary Media CDN'],
  },
  {
    slug: 'djonan',
    name: 'Djonan — Artisans & Services Pro',
    shortName: 'Djonan Artisans',
    tagline: 'Trouvez rapidement un artisan ou technicien qualifié près de chez vous en Côte d’Ivoire.',
    category: 'Marketplace de Services',
    badge: 'Application Services & Artisans',
    status: 'Disponible sur Google Play',
    platforms: ['Android (Google Play)'],
    officialUrl: 'https://play.google.com/store/apps/details?id=ci.lebosstech.djonan&hl=fr',
    officialUrlLabel: 'Télécharger Djonan sur Google Play',
    icon: 'https://play-lh.googleusercontent.com/Vi9dOpGPMbSRO3jfoVRwzYI2CeadDBtDVUm9dNMfQrYeU6-yX52sNDCXLPLCUUjnHRPYohDPsb2svLucJfCdSQ=w240-h480-rw',
    accentColor: '#f59e0b',
    heroImage: 'https://play-lh.googleusercontent.com/5wc7DsouLBylzRBA2G8eB8C8l2HOO107RrZGLBMg-1XglH9J8fcfAVwVSW1iyyuzWrcy_EO_64Qp2Z-lVc3C_A=w1052-h592-rw',
    screenshots: [
      'https://play-lh.googleusercontent.com/5wc7DsouLBylzRBA2G8eB8C8l2HOO107RrZGLBMg-1XglH9J8fcfAVwVSW1iyyuzWrcy_EO_64Qp2Z-lVc3C_A=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/YhnXJCxrZpJkt4ipOLS2RycrRYLfLcUXeiGoloURMNtXga8K2M-_e8CUhjjEbMN43zsdGwVAT0ZZYH-_ewbU=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/ohRyQRA9rNfhp7xLW0MtW1soD8SEX45Oec7MyH3FaxtukWUG_6GKVpvh3JiugzryLi7Bia02HPw=w1052-h592-rw',
    ],
    shortDescription:
      'Plateforme mobile de mise en relation directe entre particuliers/entreprises et artisans locaux vérifiés (électriciens, plombiers, frigoristes, menuisiers, peintres) en Côte d’Ivoire.',
    fullDescription:
      'Djonan valorise le savoir-faire des artisans et techniciens ivoiriens tout en sécurisant les dépannages à domicile ou en entreprise. Grâce à un annuaire géolocalisé par corps de métier et aux avis clients, trouver un professionnel compétent pour une urgence électrique, une panne de climatisation ou des travaux de rénovation devient immédiat.',
    problemSolved:
      'Résout la difficulté à trouver dans l’urgence un artisan de confiance, disponible dans sa commune et recommandé par de vrais clients.',
    targetAudience: 'Ménages, syndics de copropriété, gestionnaires immobiliers, PME et artisans professionnels.',
    keyMetrics: [
      { label: 'Corps de métiers', value: '+20 spécialités' },
      { label: 'Recherche', value: 'Par commune & proximité' },
      { label: 'Confiance', value: 'Profils & Avis vérifiés' },
    ],
    features: [
      {
        title: 'Recherche par métier et par commune',
        description:
          'Accès immédiat aux électriciens, plombiers, techniciens froid, menuisiers, maçons, serruriers et dépanneurs proches de votre position.',
      },
      {
        title: 'Profils professionnels détaillés & Réalisations',
        description:
          'Consultation de l’expérience de l’artisan, de ses spécialités, de sa galerie de travaux réalisés et des notes laissées par les clients.',
      },
      {
        title: 'Demande d’intervention ou de devis rapide',
        description:
          'Prise de contact directe pour expliquer la panne ou le chantier et convenir d’un rendez-vous d’intervention.',
      },
      {
        title: 'Espace dédié aux artisans pour développer leur clientèle',
        description:
          'Permet aux professionnels qualifiés de digitaliser leur visibilité et de recevoir des demandes qualifiées dans leur zone.',
      },
    ],
    techStack: ['Android', 'Géolocalisation', 'Système de Notation & Avis', 'API Cloud'],
  },
  {
    slug: 'gerer-mon-argent',
    name: 'Gérer mon Argent',
    shortName: 'Gérer mon Argent',
    tagline: 'Maîtrisez votre budget, vos dépenses quotidiennes et votre épargne en toute confidentialité.',
    category: 'FinTech & Finances Personnelles',
    badge: 'Application FinTech & Budget',
    status: 'Disponible sur Google Play',
    platforms: ['Android (Google Play)', '100 % Hors-Ligne & Biométrie'],
    officialUrl: 'https://play.google.com/store/apps/details?id=com.lebosstech.monpetitbudget&hl=fr',
    officialUrlLabel: 'Télécharger sur Google Play',
    icon: 'https://play-lh.googleusercontent.com/2xjzAOg2prcoqhmVmT2UOmsfc6EsaKvEtuQdVSCzv0c6UW6JFiQIoPeEHM3v67lufwGGlAS_77JVcimRNf9THQ=w240-h480-rw',
    accentColor: '#8b5cf6',
    heroImage: 'https://play-lh.googleusercontent.com/uu95Mcap-EYRcOF25i7uG0aBRLfhPWmhBeWlKp2nC3cGQxGUEV4YzfuIYxbH6ghRUDSXtuUWY-4fftxcOPb-eA=w1052-h592-rw',
    screenshots: [
      'https://play-lh.googleusercontent.com/uu95Mcap-EYRcOF25i7uG0aBRLfhPWmhBeWlKp2nC3cGQxGUEV4YzfuIYxbH6ghRUDSXtuUWY-4fftxcOPb-eA=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/KxRCV0WXhpxKHzZq-RT9mnAhMJ0_ZB4TC80l3Wc-mIalDjZPtOZf-k3dLpE92o2Ojllx-UoKScxsEhAdGZmA5A=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/5ic7ccBc8RKQH2sHtPdpe7EkD1z-0s7ZINsFVLbF2E3pboKmXoXZGzD9wbe9as1kYfk5rXowwIFutOtpPTvfaA=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/0M9fZwe6OXRTBwHYM1HPCl7sAnrr7W-7nGLFAPFej2UY_OfimTKzT71wQzJ7bKlln8QqfTf6BFeT9HTljJZk=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/RWH9guTLqJmnDs015M-gOS2GX7NjgECug68X1XST5EWJOS5G5LCNLxmb5v1wlqJvAQVHSFyBjA5kFXlhCEJ3OQ=w1052-h592-rw',
    ],
    shortDescription:
      'Application mobile intuitive de gestion financière personnelle permettant de suivre ses revenus et dépenses, de saisir des opérations à la voix, de fixer des budgets et d’atteindre ses objectifs d’épargne.',
    fullDescription:
      'Gérer mon Argent aide les particuliers, étudiants et indépendants à reprendre le contrôle total de leurs finances personnelles en FCFA ou multi-devises. Alliant ergonomie moderne, saisie vocale intelligente et gamification motivante (quêtes d’épargne et arbre de richesse), l’application garantit une confidentialité absolue grâce au stockage local protégé par empreinte biométrique.',
    problemSolved:
      'Permet de comprendre exactement où part son argent chaque mois, d’éviter les dépassements budgétaires et de construire une discipline d’épargne durable.',
    targetAudience: 'Salariés, entrepreneurs individuels, étudiants et familles souhaitant optimiser leur budget.',
    keyMetrics: [
      { label: 'Saisie rapide', value: 'Manuelle & Vocale' },
      { label: 'Confidentialité', value: 'Stockage 100 % Local' },
      { label: 'Sécurité', value: 'Verrouillage Biométrique' },
    ],
    features: [
      {
        title: 'Suivi instantané des revenus et dépenses (Manuels & Vocaux)',
        description:
          'Enregistrez une dépense en quelques secondes ou dictez-la directement à la voix pour ne rien oublier au quotidien.',
      },
      {
        title: 'Budgets par catégorie et alertes de dépassement',
        description:
          'Définissez vos plafonds mensuels (alimentation, transport, logement, loisirs) et recevez des indicateurs visuels clairs.',
      },
      {
        title: 'Analyses graphiques et objectifs d’épargne ludiques',
        description:
          'Visualisez la répartition de vos flux financiers et faites grandir votre « arbre de richesse » au fil de vos quêtes d’épargne.',
      },
      {
        title: 'Confidentialité totale & Protection biométrique',
        description:
          'Vos données financières restent exclusivement sur votre téléphone, protégées par empreinte digitale ou code PIN.',
      },
    ],
    techStack: ['Android Native', 'Reconnaissance Vocale', 'Base SQLite Chiffrée', 'Biometric Auth API'],
  },
];

export const INITIAL_SERVICES = [
  {
    slug: 'developpement',
    title: 'Ingénierie Logicielle & Développement Sur Mesure',
    category: 'SOFTWARE',
    shortDesc:
      'Conception d’applications mobiles (Android & iOS), plateformes web SaaS, ERP/CRM métier et intégrations API Mobile Money adaptés aux réalités opérationnelles des entreprises en Côte d’Ivoire.',
    heroTitle: 'Ingénierie Logicielle & Solutions Métier sur Mesure',
    heroSubtitle:
      'De l’expression de besoin au déploiement en production, LEBOSS TECH conçoit des logiciels robustes, sécurisés et taillés pour la croissance des PME et grands comptes.',
    iconName: 'Code2',
    features: [
      'Cadrage fonctionnel, cahier des charges et maquettage UI/UX interactif',
      'Développement d’applications mobiles Android & iOS (mode connecté et hors-ligne)',
      'Plateformes Web, SaaS, portails clients et tableaux de bord décisionnels',
      'Logiciels de gestion commerciale, stocks, facturation FNE et comptabilité',
      'Intégration sécurisée des API Mobile Money (Wave, Orange Money, MTN, Paystack)',
      'Maintenance évolutive, hébergement Cloud haute disponibilité et transfert de compétences',
    ],
    benefits: [
      'Équipe d’ingénieurs basée à Abidjan pour un suivi de proximité',
      'Architecture moderne, évolutive et documentée',
      'Propriété intellectuelle claire et respect des délais de livraison',
    ],
    processSteps: [
      { step: '01', title: 'Audit & Cadrage', desc: 'Analyse des processus métier, définition du périmètre et prototypage UI/UX.' },
      { step: '02', title: 'Architecture & Sprints', desc: 'Développement itératif avec démonstrations régulières et environnement de pré-production.' },
      { step: '03', title: 'Recette & Sécurité', desc: 'Tests fonctionnels, validation des performances et audit de sécurité des données.' },
      { step: '04', title: 'Déploiement & SLA', desc: 'Mise en production, formation des équipes utilisatrices et support technique continu.' },
    ],
    deliverables: [
      'Spécifications fonctionnelles & Maquettes Figma',
      'Code source versionné & Documentation technique',
      'Application déployée sur Cloud / Google Play / App Store',
      'Contrat de maintenance et garantie de bon fonctionnement',
    ],
  },
  {
    slug: 'application-mobile-abidjan',
    title: 'Développement d’Applications Mobiles (Android & iOS)',
    category: 'SOFTWARE',
    shortDesc:
      'Applications mobiles natives et multiplateformes conçues pour les usages, la connectivité et les moyens de paiement du marché ivoirien et ouest-africain.',
    heroTitle: 'Applications Mobiles Professionnelles à Abidjan',
    heroSubtitle:
      'Fort de notre propre écosystème d’applications publiées sur Google Play (SRA, Lounan, Djonan, Gérer mon Argent), nous transformons votre vision en une application mobile performante et rentable.',
    iconName: 'Smartphone',
    features: [
      'Applications clientes B2C et applications terrain B2B (livreurs, commerciaux, techniciens)',
      'Synchronisation intelligente et tolérance aux coupures réseau (Offline-first)',
      'Géolocalisation GPS en temps réel, cartographie et notifications push ciblées',
      'Paiements in-app Mobile Money et sécurité biométrique',
      'Publication complète et conformité Google Play Store & Apple App Store',
    ],
    benefits: [
      'Expérience prouvée avec 5 applications LEBOSS TECH en production sur les stores',
      'Interfaces fluides, économes en batterie et en données mobiles',
      'Accompagnement complet jusqu’à la validation par Google et Apple',
    ],
    processSteps: [
      { step: '01', title: 'UX/UI Mobile', desc: 'Parcours utilisateur pensé pour une prise en main immédiate sur smartphone.' },
      { step: '02', title: 'Développement & API', desc: 'Construction de l’application et du serveur backend sécurisé.' },
      { step: '03', title: 'Tests sur terminaux réels', desc: 'Vérification sur différentes gammes d’appareils Android et iPhone.' },
      { step: '04', title: 'Publication Stores', desc: 'Mise en ligne officielle, optimisation ASO et suivi analytique.' },
    ],
    deliverables: [
      'Application Android (AAB/APK) & iOS (IPA)',
      'Back-office d’administration web complet',
      'API REST sécurisée et documentée',
    ],
  },
  {
    slug: 'application-web-saas',
    title: 'Applications Web, Portails B2B & Plateformes SaaS',
    category: 'SOFTWARE',
    shortDesc:
      'Portails clients, extranets métiers, plateformes multi-entreprises et applications web haute performance accessibles sur tous les écrans.',
    heroTitle: 'Plateformes Web Métier & Solutions SaaS',
    heroSubtitle:
      'Centralisez vos opérations, digitalisez la relation avec vos clients et pilotez votre activité en temps réel grâce à une application web sur mesure.',
    iconName: 'Globe',
    features: [
      'Architecture moderne Next.js / React / TypeScript et bases PostgreSQL',
      'Gestion granulaire des rôles, permissions et accès multi-agences',
      'Tableaux de bord analytiques, exports comptables CSV/PDF et facturation',
      'Hébergement Cloud sécurisé, sauvegardes automatisées et certificats SSL',
    ],
    benefits: [
      'Zéro installation requise sur les postes clients',
      'Temps de chargement ultra-rapides et référencement SEO natif',
      'Sécurité renforcée contre les vulnérabilités web (OWASP)',
    ],
    processSteps: [
      { step: '01', title: 'Modélisation Métier', desc: 'Structuration de la base de données et des flux de travail.' },
      { step: '02', title: 'Développement Full-Stack', desc: 'Interfaces réactives et logique métier serveur sécurisée.' },
      { step: '03', title: 'Mise en production Cloud', desc: 'Déploiement continu avec surveillance de disponibilité.' },
    ],
    deliverables: [
      'Plateforme web responsive en production',
      'Interface d’administration et de reporting',
      'Documentation d’exploitation et formation',
    ],
  },
  {
    slug: 'logiciel-sur-mesure-cote-ivoire',
    title: 'Logiciels de Gestion Métier, ERP & Automatisation',
    category: 'SOFTWARE',
    shortDesc:
      'Éliminez les fichiers Excel dispersés et les doubles saisies grâce à un logiciel de gestion adapté à vos règles métier et au référentiel SYSCOHADA.',
    heroTitle: 'Logiciels de Gestion & Automatisation pour PME',
    heroSubtitle:
      'Quand les logiciels standards ne correspondent pas à votre organisation, nous concevons l’outil exact qui fiabilise vos stocks, votre facturation et votre contrôle interne.',
    iconName: 'Database',
    features: [
      'Gestion des stocks, achats fournisseurs, devis, facturation et caisse',
      'Fonctionnement hybride : sur poste local (Windows hors-ligne) ou en réseau/Cloud',
      'Piste d’audit complète des actions utilisateurs pour prévenir la fraude interne',
      'Reprise et migration de vos historiques de données existants (Excel, anciens logiciels)',
    ],
    benefits: [
      'Gain de productivité immédiat pour les équipes administratives et commerciales',
      'Visibilité financière en temps réel pour la direction',
      'Adaptation à 100 % à vos processus spécifiques',
    ],
    processSteps: [
      { step: '01', title: 'Audit des flux', desc: 'Cartographie des opérations actuelles et des points de friction.' },
      { step: '02', title: 'Conception sur mesure', desc: 'Développement des modules prioritaires avec vos équipes.' },
      { step: '03', title: 'Migration & Formation', desc: 'Importation des données et accompagnement sur site à Abidjan.' },
    ],
    deliverables: [
      'Logiciel métier opérationnel (Desktop ou Web)',
      'Données historiques migrées et vérifiées',
      'Formation complète des utilisateurs et administrateurs',
    ],
  },
  {
    slug: 'integration-api-mobile-money',
    title: 'Intégration API & Paiements Mobile Money Sécurisés',
    category: 'SOFTWARE',
    shortDesc:
      'Connectez votre site e-commerce, votre application mobile ou votre ERP aux moyens de paiement locaux (Wave, Orange Money, MTN MoMo, Moov, Paystack) avec vérification serveur.',
    heroTitle: 'Intégration API & Passerelles Mobile Money en Côte d’Ivoire',
    heroSubtitle:
      'Sécurisez vos encaissements numériques grâce à une architecture de paiement résiliente : signatures cryptographiques des webhooks, idempotence et rapprochement automatique.',
    iconName: 'CreditCard',
    features: [
      'Intégration d’agrégateurs (Paystack, CinetPay, Hub2) et d’API directes opérateurs',
      'Vérification stricte côté serveur des signatures HMAC et des montants payés',
      'Gestion de l’idempotence pour éviter tout double débit ou double validation',
      'Journalisation complète des transactions et tableau de bord de réconciliation comptable',
    ],
    benefits: [
      'Protection absolue contre les fausses confirmations de paiement côté client',
      'Parcours de paiement fluide maximisant le taux de conversion sur mobile',
      'Réconciliation comptable automatisée en FCFA',
    ],
    processSteps: [
      { step: '01', title: 'Architecture de sécurité', desc: 'Définition des flux de callbacks, webhooks et clés secrètes.' },
      { step: '02', title: 'Intégration & Sandbox', desc: 'Tests exhaustifs des cas de succès, d’échec et de délai réseau.' },
      { step: '03', title: 'Mise en service Live', desc: 'Activation en production et suivi des premières transactions.' },
    ],
    deliverables: [
      'Module de paiement sécurisé intégré à votre système',
      'Système de webhooks idempotent avec journal d’audit',
      'Documentation technique des flux financiers',
    ],
  },
  {
    slug: 'materiel-informatique',
    title: 'Fourniture de Matériel Informatique & Équipement B2B',
    category: 'HARDWARE',
    shortDesc:
      'Centrale d’achat et boutique spécialisée : ordinateurs portables professionnels (HP, Dell, Lenovo), postes de bureau, serveurs, imprimantes, onduleurs APC et accessoires garantis.',
    heroTitle: 'Équipements Informatiques Professionnels & Parcs Entreprises',
    heroSubtitle:
      'Plus de 500 références disponibles : matériel neuf scellé constructeur et gamme professionnelle reconditionnée certifiée Grade A+ testée sur 30 points de contrôle à Abidjan.',
    iconName: 'Laptop',
    features: [
      'Ordinateurs portables professionnels (HP EliteBook/ProBook/ZBook, Dell Latitude/Precision, Lenovo ThinkPad)',
      'Postes de travail fixes All-in-One, Desktops, écrans professionnels et stations d’accueil',
      'Solutions d’impression laser et jet d’encre pro (HP LaserJet Enterprise, Canon, Epson) et consommables',
      'Protection électrique indispensable : onduleurs APC/Eaton et régulateurs de tension',
      'Préparation des postes avant livraison (Windows 11 Pro, suite bureautique, sécurité)',
    ],
    benefits: [
      'Garantie écrite réelle (90 jours sur le quasi-neuf certifié, 1 à 3 ans sur le neuf)',
      'Devis B2B rapide sous 2h et tarification dégressive pour les commandes de flotte',
      'Livraison express à Abidjan (24h/48h) et expédition sécurisée dans toute la Côte d’Ivoire',
    ],
    processSteps: [
      { step: '01', title: 'Conseil & Dimensionnement', desc: 'Sélection des configurations adaptées aux métiers de vos collaborateurs.' },
      { step: '02', title: 'Contrôle Qualité 30 Points', desc: 'Vérification batterie, SSD NVMe, RAM, refroidissement et connectique en atelier.' },
      { step: '03', title: 'Livraison & Déploiement', desc: 'Remise sur site avec bon de livraison, facture normalisée et certificat de garantie.' },
    ],
    deliverables: [
      'Équipements testés, nettoyés et prêts à l’emploi',
      'Facture officielle et certificat de garantie LEBOSS TECH',
      'Service après-vente réactif basé à Abidjan',
    ],
  },
  {
    slug: 'installation-reseau-informatique-abidjan',
    title: 'Infrastructure Réseau, Wi-Fi Entreprise & Sécurité',
    category: 'INFRASTRUCTURE',
    shortDesc:
      'Conception et déploiement d’infrastructures réseaux LAN/VLAN, câblage structuré RJ45/Fibre, baies de brassage, Wi-Fi professionnel haute densité et vidéosurveillance IP.',
    heroTitle: 'Architecture Réseau, Câblage Structuré & Wi-Fi Entreprise',
    heroSubtitle:
      'Bâtissez une fondation réseau rapide, stable et sécurisée pour vos bureaux, immeubles, hôtels, écoles et entrepôts en Côte d’Ivoire.',
    iconName: 'Network',
    features: [
      'Câblage informatique structuré Cat6 / Cat6A, goulottes, prises RJ45 et certification des liens',
      'Installation et organisation de baies de brassage, switchs administrables PoE (Cisco, Ubiquiti, MikroTik, TP-Link Omada)',
      'Couverture Wi-Fi professionnelle multi-bornes avec itinérance transparente (Roaming) et portail invités isolé',
      'Interconnexion de sites distants (VPN IPsec / WireGuard), pare-feu et segmentation VLAN',
      'Systèmes de vidéosurveillance IP HD et contrôle d’accès biométrique',
    ],
    benefits: [
      'Élimination des coupures réseau et des zones blanches Wi-Fi dans vos locaux',
      'Installation propre, étiquetée et documentée facilitant toute maintenance future',
      'Séparation stricte entre le réseau de direction, les postes collaborateurs et les visiteurs',
    ],
    processSteps: [
      { step: '01', title: 'Visite Technique & Audit', desc: 'Relevé sur site à Abidjan, étude de couverture et chiffrage détaillé.' },
      { step: '02', title: 'Câblage & Pose', desc: 'Tirage des câbles, montage de la baie et installation des équipements actifs.' },
      { step: '03', title: 'Configuration & Sécurité', desc: 'Paramétrage des VLANs, du Wi-Fi, du routeur/pare-feu et des sauvegardes.' },
      { step: '04', title: 'Recette & Dossier Réseau', desc: 'Tests de débit et remise du schéma d’architecture et des accès.' },
    ],
    deliverables: [
      'Infrastructure réseau câblée, brassée et étiquetée',
      'Équipements actifs configurés et sécurisés',
      'Dossier technique (plan d’adressage IP, topologie et identifiants)',
    ],
  },
  {
    slug: 'maintenance-informatique-abidjan',
    title: 'Maintenance Informatique, Infogérance & Support Parc IT',
    category: 'INFRASTRUCTURE',
    shortDesc:
      'Contrats de maintenance préventive et curative pour PME, diagnostic matériel, réparation d’ordinateurs et d’imprimantes, sauvegarde de données et support utilisateur réactif à Abidjan.',
    heroTitle: 'Maintenance Informatique & Infogérance PME à Abidjan',
    heroSubtitle:
      'Ne laissez plus les pannes informatiques ralentir vos équipes. Confiez la santé, la sécurité et le suivi de votre parc à un partenaire technique local engagé.',
    iconName: 'ShieldCheck',
    features: [
      'Visites préventives programmées : nettoyage physique, contrôle thermique, optimisation système et mises à jour',
      'Assistance rapide à distance (télémaintenance) et intervention sur site à Abidjan en cas de panne bloquante',
      'Réparation matérielle en atelier (remplacement SSD NVMe, upgrade RAM, écrans, charnières, alimentations)',
      'Politique de sauvegarde automatisée 3-2-1 et protection antivirus/antimalware centralisée',
      'Inventaire permanent du parc matériel et conseil en renouvellement budgétaire',
    ],
    benefits: [
      'Réduction drastique des arrêts de travail liés aux pannes imprévues',
      'Allongement de la durée de vie de vos ordinateurs et imprimantes',
      'Interlocuteur unique connaissant parfaitement votre infrastructure',
    ],
    processSteps: [
      { step: '01', title: 'Audit Initial du Parc', desc: 'Inventaire complet des postes, serveurs, imprimantes et du réseau existant.' },
      { step: '02', title: 'Mise à niveau & Sécurisation', desc: 'Correction des vulnérabilités critiques et mise en place des sauvegardes.' },
      { step: '03', title: 'Suivi Préventif & Support', desc: 'Visites régulières et assistance prioritaire selon votre contrat SLA.' },
    ],
    deliverables: [
      'Rapport d’audit initial et inventaire du parc IT',
      'Comptes-rendus d’intervention à chaque visite',
      'Tableau de bord de santé et recommandations d’évolution',
    ],
  },
];

export const INITIAL_PROJECTS = [
  {
    slug: 'creation-dapplication-mobile-lounan',
    title: 'Lounan — Plateforme Mobile Immobilière en Côte d’Ivoire',
    clientName: 'Écosystème LEBOSS TECH (PropTech)',
    category: 'Application Mobile & Backend Cloud',
    year: '2026',
    status: 'En production sur Google Play',
    heroImage: 'https://res.cloudinary.com/dmbgbi2pq/image/upload/projects/Sl8xLLz3E14wNKdmGnzHjEAsZ5WnucNCpGwKTDq2.png',
    officialUrl: 'https://play.google.com/store/apps/details?id=com.lounan.app&hl=fr',
    summary:
      'Conception et développement intégral d’une application mobile Android facilitant la recherche vérifiée de maisons, appartements, studios, terrains et locaux commerciaux en Côte d’Ivoire.',
    context:
      'Le marché de la recherche immobilière à Abidjan et en Côte d’Ivoire souffrait d’une forte dispersion des offres sur les réseaux sociaux, entraînant des pertes de temps importantes et de nombreuses annonces obsolètes ou trompeuses.',
    problem:
      'Les chercheurs de biens perdaient des semaines en visites infructueuses, tandis que les propriétaires et agences sérieuses manquaient d’un canal mobile structuré et qualifié pour présenter leurs biens.',
    solution:
      'LEBOSS TECH a assuré la maîtrise d’œuvre complète : design UI/UX mobile centré sur la clarté visuelle, développement de l’application Android native, architecture d’une API backend rapide et intégration d’un système de filtrage multicritère par commune, budget et typologie de bien.',
    result:
      'Application publiée et disponible sur Google Play Store, offrant une expérience de recherche fluide, des fiches immobilières vérifiées et une mise en relation directe entre chercheurs de biens et professionnels.',
    tags: ['Application Mobile', 'Immobilier (PropTech)', 'Android', 'UI/UX Design', 'API Backend', 'Google Play'],
  },
  {
    slug: 'logiciel-erp-caisse-mon-gestionnaire-pro',
    title: 'Mon Gestionnaire Pro — ERP, Point de Vente POS & Comptabilité SYSCOHADA',
    clientName: 'PME & Commerces de Côte d’Ivoire',
    category: 'Logiciel Desktop Windows & Cloud',
    year: '2026',
    status: 'Déployé en production',
    heroImage: 'https://mongestionnairepro.com/screenshots/nova/01-tableau-de-bord-1920.webp',
    officialUrl: 'https://mongestionnairepro.com',
    summary:
      'Développement d’une suite logicielle complète reliant caisse enregistreuse hors-ligne, gestion des stocks multi-dépôts, facturation FNE et comptabilité SYSCOHADA automatisée.',
    context:
      'Les commerces et PME d’Abidjan devaient jongler entre des logiciels de caisse étrangers non adaptés au FCFA/Mobile Money, des fichiers Excel de stock isolés et une saisie comptable manuelle fastidieuse.',
    problem:
      'En cas de coupure Internet, les solutions 100 % Cloud bloquaient la facturation en caisse ; par ailleurs, la déconnexion entre les ventes et la comptabilité SYSCOHADA générait des erreurs et des retards de déclaration.',
    solution:
      'Conception d’une application Windows 10/11 (64 bits) ultra-rapide fonctionnant à 100 % hors-ligne avec base locale sécurisée, raccourcis clavier de caisse (F7/F8), prise en charge des règlements combinés (Espèces + Wave/Orange/MTN/Moov), impression thermique 58/80mm et génération automatique des écritures comptables SYSCOHADA.',
    result:
      'Adoption par les commerçants et PME avec 0 minute d’interruption de vente liée au réseau, un contrôle strict des stocks et une comptabilité générée en temps réel à chaque opération.',
    tags: ['ERP & POS', 'Windows 10/11', 'Hors-Ligne', 'SYSCOHADA & FNE', 'Mobile Money'],
  },
  {
    slug: 'ecosysteme-logistique-sra-et-sra-pro',
    title: 'SRA & SRA PRO — Écosystème Mobile de Livraison & Dispatching Flotte',
    clientName: 'Réseau Logistique SRA Côte d’Ivoire',
    category: 'Double Application Mobile & Géolocalisation',
    year: '2026',
    status: 'En production sur Google Play',
    heroImage: 'https://play-lh.googleusercontent.com/qEBux60_7iZ44AkdcHxgpCdZVbi4oJhf_LaWqUCkMEnJ0u3eVKGSM9yoaSHMgDsizRILxFuKf7IXfituO1UnTg=w1052-h592-rw',
    officialUrl: 'https://play.google.com/store/apps/details?id=ci.sira.sira&hl=fr',
    summary:
      'Architecture d’une plateforme logistique composée d’une application cliente (SRA) pour la commande de courses et d’une application livreur (SRA PRO) pour le dispatching GPS et le suivi des gains.',
    context:
      'Avec l’essor du commerce en ligne à Abidjan, la coordination entre marchands, clients finaux et coursiers reposait sur des appels téléphoniques incessants et des estimations de tarifs approximatives.',
    problem:
      'Absence de traçabilité des colis en cours de route, perte de temps dans l’attribution des livreurs disponibles et difficulté pour les coursiers à suivre précisément leur chiffre d’affaires journalier.',
    solution:
      'Développement simultané de deux applications mobiles synchronisées en temps réel : SRA (calcul tarifaire immédiat, commande et suivi sur carte) et SRA PRO (réception des missions par proximité GPS, validation des étapes de livraison et portefeuille de revenus intégré).',
    result:
      'Double publication officielle sur Google Play Store permettant d’automatiser la chaîne de livraison urbaine de bout en bout avec une visibilité temps réel.',
    tags: ['Logistique Urbaine', 'Android', 'GPS Temps Réel', 'SRA & SRA PRO', 'Google Play'],
  },
  {
    slug: 'application-marketplace-artisans-djonan',
    title: 'Djonan — Plateforme Mobile de Mise en Relation avec les Artisans Qualifiés',
    clientName: 'Écosystème LEBOSS TECH',
    category: 'Marketplace Mobile de Services',
    year: '2026',
    status: 'En production sur Google Play',
    heroImage: 'https://play-lh.googleusercontent.com/5wc7DsouLBylzRBA2G8eB8C8l2HOO107RrZGLBMg-1XglH9J8fcfAVwVSW1iyyuzWrcy_EO_64Qp2Z-lVc3C_A=w1052-h592-rw',
    officialUrl: 'https://play.google.com/store/apps/details?id=ci.lebosstech.djonan&hl=fr',
    summary:
      'Application mobile connectant ménages et entreprises avec des artisans vérifiés (électriciens, plombiers, frigoristes, menuisiers) géolocalisés par commune à Abidjan.',
    context:
      'Trouver dans l’urgence un technicien fiable pour un dépannage électrique, de plomberie ou de climatisation à Abidjan relevait souvent du bouche-à-oreille aléatoire.',
    problem:
      'Manque de visibilité digitale pour les artisans compétents et absence de système d’évaluation permettant aux clients de choisir un prestataire en toute confiance.',
    solution:
      'Conception de l’application mobile Djonan intégrant une recherche par spécialité et par commune, des fiches artisans détaillées avec galeries de réalisations et un système de notation par les clients.',
    result:
      'Plateforme opérationnelle sur Google Play facilitant l’accès rapide aux professionnels du bâtiment et du dépannage partout en Côte d’Ivoire.',
    tags: ['Marketplace Services', 'Android', 'Géolocalisation', 'Avis Vérifiés', 'Google Play'],
  },
];

export const INITIAL_ARTICLES = [
  {
    slug: 'cout-developpement-application-mobile-cote-ivoire',
    title: 'Quel est le coût de développement d’une application mobile en Côte d’Ivoire ?',
    category: 'Ingénierie Logicielle',
    readTime: '6 min',
    publishedAt: '2026-02-15',
    excerpt:
      'Découvrez les facteurs réels qui déterminent le budget d’une application mobile (Android, iOS, multiplateforme) à Abidjan : cadrage, fonctionnalités, API Mobile Money, hébergement et maintenance.',
    content: `Le budget de conception d'une application mobile professionnelle en Côte d'Ivoire dépend avant tout de la complexité fonctionnelle, du nombre de rôles utilisateurs (ex: application client + application livreur + back-office d'administration) et des intégrations tierces requises.

### 1. Les paliers budgétaires constatés à Abidjan
- **Application MVP / Vitrine interactive ou utilitaire ciblé** : idéale pour valider un concept sur le marché local avec un périmètre resserré.
- **Application métier ou e-commerce avec paiement Mobile Money** : intègre un catalogue dynamique, des comptes utilisateurs, des notifications push, une API backend sécurisée et l'encaissement Wave / Orange Money / MTN.
- **Écosystème complet multi-applications (ex : logistique temps réel, marketplace avec géolocalisation)** : comprend plusieurs interfaces synchronisées, un moteur de dispatching et une infrastructure Cloud haute disponibilité.

### 2. Pourquoi le cadrage initial fait économiser jusqu'à 30 % du budget
La majorité des dépassements budgétaires proviennent d'un cahier des charges flou. Chez **LEBOSS TECH**, chaque projet démarre par une phase d'architecture et de maquettage UI/UX qui fige les écrans et les règles de gestion avant l'écriture de la première ligne de code.`,
  },
  {
    slug: 'integrer-mobile-money-application-cote-ivoire',
    title: 'Comment intégrer les paiements Mobile Money (Wave, Orange, MTN) de façon sécurisée ?',
    category: 'Architecture & FinTech',
    readTime: '7 min',
    publishedAt: '2026-02-28',
    excerpt:
      'Guide technique pour réussir l’intégration des paiements Mobile Money dans votre site web ou application mobile : agrégateurs, webhooks signés, idempotence et réconciliation.',
    content: `En Côte d'Ivoire, le Mobile Money (Wave, Orange Money, MTN MoMo, Moov Money) représente le levier principal de conversion pour toute plateforme numérique. Mais une intégration mal sécurisée expose l'entreprise à des pertes financières critiques.

### Les 4 règles d'or d'une intégration Mobile Money en production
1. **Ne jamais valider une commande depuis le navigateur ou le téléphone du client** : seule la notification serveur-à-serveur (Webhook) signée cryptographiquement (HMAC SHA-512) fait foi.
2. **Vérifier systématiquement le montant et la devise (XOF)** : comparez le montant confirmé par l'opérateur au total exact enregistré dans votre base PostgreSQL.
3. **Garantir l'idempotence des transactions** : un webhook peut être envoyé deux fois par l'opérateur en cas de latence réseau ; votre système doit ignorer les doublons sans créditer deux fois le client.
4. **Conserver un journal d'audit immuable** : chaque changement d'état (\`PENDING\`, \`PAID\`, \`FAILED\`) doit être horodaté pour faciliter le rapprochement comptable.`,
  },
  {
    slug: 'choisir-serveur-onduleur-sauvegarde-pme-abidjan',
    title: 'Serveur, Onduleur APC et Sauvegarde : le guide de résilience IT pour les PME à Abidjan',
    category: 'Infrastructure & Sécurité',
    readTime: '5 min',
    publishedAt: '2026-03-10',
    excerpt:
      'Protégez vos équipements et vos données comptables contre les variations électriques et les pannes matérielles grâce à une architecture serveur et onduleur bien dimensionnée.',
    content: `Une coupure électrique brusque ou une surtension peut endommager irrémédiablement la carte mère d'un serveur ou corrompre une base de données commerciale en pleine journée de facturation.

### Dimensionner sa protection électrique et ses sauvegardes
- **Onduleurs Line-Interactive et Online Double Conversion (APC / Eaton)** : indispensables pour stabiliser la tension (AVR) et laisser le temps aux serveurs et postes critiques de s'éteindre proprement.
- **Règle de sauvegarde 3-2-1** : conservez toujours 3 copies de vos données critiques, sur 2 supports distincts (NAS local + disque externe), dont 1 copie externalisée ou chiffrée dans le Cloud.`,
  },
  {
    slug: 'choisir-imprimante-professionnelle-pme-abidjan',
    title: 'Comment choisir une imprimante professionnelle rentable pour votre entreprise ?',
    category: 'Matériel Professionnel',
    readTime: '5 min',
    publishedAt: '2026-03-18',
    excerpt:
      'Laser monochrome, multifonction couleur A3/A4 ou réservoir d’encre haute capacité : comment calculer le coût réel à la page avant d’équiper vos bureaux.',
    content: `Le prix d'achat initial d'une imprimante ne représente qu'une fraction de son coût total de possession (TCO). Le véritable critère de décision pour une PME à Abidjan est le **coût par page** et la disponibilité locale des toners ou encres.

### Nos recommandations par usage
- **Facturation, comptabilité et gros volumes texte** : privilégiez une imprimante **HP LaserJet Pro ou Enterprise** monochrome avec recto-verso automatique et port réseau Ethernet/Wi-Fi.
- **Bureaux polyvalents et supports commerciaux** : les gammes **HP Smart Tank / Canon MegaTank / Epson EcoTank** ou les multifonctions laser couleur offrent une excellente maîtrise des coûts de consommables.`,
  },
  {
    slug: 'application-mobile-adaptee-usages-cote-ivoire',
    title: 'Concevoir une application mobile réellement adaptée aux usages en Côte d’Ivoire',
    category: 'UX/UI & Produit',
    readTime: '6 min',
    publishedAt: '2026-03-25',
    excerpt:
      'Poids de l’application, mode hors-ligne, clarté des parcours, authentification rapide et support WhatsApp : les clés d’une adoption réussie par les utilisateurs locaux.',
    content: `Une application mobile copiée sur un modèle européen ou américain échoue souvent lorsqu'elle est confrontée aux réalités du terrain ouest-africain : diversité des smartphones Android, zones à connectivité variable et préférence pour les parcours directs.

### Les bonnes pratiques issues de nos propres applications (SRA, Lounan, Djonan)
- **Optimisation du poids et de la consommation data** : compression intelligente des images (WebP) et mise en cache locale.
- **Tolérance aux coupures réseau** : sauvegarde locale des saisies en cours pour éviter toute perte d'information.
- **Parcours visuels épurés et assistance WhatsApp intégrée** : réduire le nombre d'étapes entre l'ouverture de l'application et l'action principale.`,
  },
];

export const INITIAL_MAINTENANCE_PLANS = [
  {
    slug: 'pack-essentiel-pme',
    name: 'Pack Essentiel PME',
    subtitle: 'Pour les petites structures de 1 à 10 postes informatiques',
    priceLabel: 'Sur devis selon parc',
    period: 'Contrat mensuel ou trimestriel',
    isPopular: false,
    features: [
      '1 visite de maintenance préventive programmée par mois',
      'Nettoyage physique, dépoussiérage et contrôle thermique des postes',
      'Vérification de l’antivirus, des mises à jour Windows et des sauvegardes',
      'Assistance à distance (télémaintenance) aux heures ouvrables',
      'Tarif préférentiel sur les pièces de rechange et le renouvellement matériel',
    ],
  },
  {
    slug: 'pack-business-pro',
    name: 'Pack Business Pro',
    subtitle: 'Pour les PME de 10 à 35 postes avec réseau local et imprimantes partagées',
    priceLabel: 'Sur devis personnalisé',
    period: 'Engagement annuel avec SLA',
    isPopular: true,
    features: [
      '2 visites préventives sur site par mois à Abidjan',
      'Interventions curatives prioritaires sur site sous 4h à 8h ouvrées',
      'Administration du réseau LAN/Wi-Fi, des switchs, routeurs et imprimantes',
      'Gestion des sauvegardes automatisées et sécurité des données',
      'Prêt de matériel de courtoisie (selon disponibilité) en cas d’immobilisation atelier',
      'Rapport mensuel d’état de santé du parc informatique',
    ],
  },
  {
    slug: 'pack-croissance-infogerance',
    name: 'Infogérance Globale & Cloud',
    subtitle: 'Pour les entreprises multi-sites, cliniques, hôtels, écoles et grands comptes',
    priceLabel: 'Cahier des charges B2B',
    period: 'SLA sur mesure',
    isPopular: false,
    features: [
      'Supervision proactive de l’infrastructure, des serveurs et de la sécurité',
      'Support utilisateurs dédié (Helpdesk) et interventions sur site illimitées',
      'Maintenance des logiciels métiers, bases de données et interconnexions VPN',
      'Audit trimestriel de cybersécurité et plan de reprise d’activité (PRA)',
      'Accompagnement stratégique DSI externe pour vos investissements IT',
    ],
  },
];

export const INITIAL_FAQS = [
  {
    category: 'Général & Entreprise',
    question: 'Comment LEBOSS TECH combine-t-elle ingénierie logicielle et vente de matériel informatique ?',
    answer:
      'LEBOSS TECH SARL est organisée autour de trois départements complémentaires à Abidjan : un pôle Ingénierie Logicielle (qui édite nos propres applications comme Mon Gestionnaire Pro, SRA, Lounan, Djonan et réalise des logiciels sur mesure), une Centrale d’Achat & Boutique Matériel (+500 références en stock) et un pôle Infrastructure & Maintenance IT. Vous bénéficiez ainsi d’un interlocuteur unique capable de concevoir votre logiciel, de fournir les équipements et d’en assurer la maintenance.',
  },
  {
    category: 'Matériel & Garantie',
    question: 'Quelle est la différence entre vos ordinateurs Neufs et Quasi-Neufs / Reconditionnés Certifiés ?',
    answer:
      'Nos équipements Neufs sont livrés en boîte scellée constructeur avec une garantie de 12 à 36 mois. Nos ordinateurs Quasi-Neufs (Reconditionnés Certifiés Grade A+) sont issus de gammes professionnelles robustes (HP EliteBook/ProBook, Dell Latitude/Precision, Lenovo ThinkPad), intégralement vérifiés sur 30 points de contrôle par nos techniciens à Abidjan et couverts par une garantie matérielle écrite de 90 jours.',
  },
  {
    category: 'Logiciels & Développement',
    question: 'Puis-je tester vos logiciels comme Mon Gestionnaire Pro ou commander une application sur mesure ?',
    answer:
      'Oui. Nos applications mobiles (SRA, SRA PRO, Lounan, Djonan, Gérer mon Argent) sont directement téléchargeables sur Google Play Store, et Mon Gestionnaire Pro dispose d’une présentation complète et d’une version d’évaluation sur mongestionnairepro.com. Pour un besoin spécifique, notre équipe réalise un cadrage gratuit et un devis détaillé.',
  },
  {
    category: 'Commandes & Livraison',
    question: 'Quels sont les délais de livraison et les moyens de paiement acceptés ?',
    answer:
      'Nous livrons sous 24h à 48h ouvrées dans tout le Grand Abidjan (avec possibilité de paiement à la livraison après vérification du matériel, par Mobile Money Wave/Orange/MTN/Moov, par carte via Paystack ou par virement B2B) et expédions sous 48h à 72h dans toutes les villes de l’intérieur de la Côte d’Ivoire.',
  },
];

export const INITIAL_SITE_SETTINGS = {
  companyName: 'LEBOSS TECH SARL',
  tradeName: 'LEBOSS TECH MARKET',
  rccm: 'CI-ABJ-03-2026-B12-00749',
  phoneDisplay: '+225 05 66 82 16 09',
  whatsappNumber: '2250566821609',
  email: 'contact@lebosstech.ci',
  address: 'Marcory Anoumabo / Adjamé, Abidjan, Côte d’Ivoire',
  openingHours: 'Lundi – Samedi : 08h00 – 19h00',
};
