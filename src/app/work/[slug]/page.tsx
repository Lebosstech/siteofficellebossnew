import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  Cpu,
  CheckCircle2,
  Server,
  Layers,
} from 'lucide-react';

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  clientContext: string;
  problem: string;
  technicalApproach: string;
  solutionArchitecture: string[];
  metrics: { label: string; value: string; desc: string }[];
  technologies: string[];
  codeArchitecture: string;
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  sra: {
    slug: 'sra',
    title: 'SRA & SRA PRO — Plateforme de Livraison & Dispatch Logistique Temps Réel',
    category: 'LOGISTICS & REAL-TIME DISPATCH',
    tagline: 'Orchestration en continu de milliers de courses et colis urbains à Abidjan',
    clientContext:
      'La livraison du dernier kilomètre dans le district d’Abidjan fait face à des contraintes structurelles majeures : un trafic urbain dense aux heures de pointe, un adressage physique souvent approximatif, des connexions 4G parfois instables et la prédominance absolue des paiements par Mobile Money (Wave, Orange Money, MTN MoMo).',
    problem:
      'Les solutions de livraison traditionnelles souffraient de temps de mise en relation excessifs (parfois plus de 10 minutes pour attribuer un livreur), d’une opacité totale sur les frais réels de course et d’une perte fréquente des missions lorsque le coursier traversait des zones à faible couverture réseau.',
    technicalApproach:
      'LEBOSS TECH a conçu une double application mobile native (SRA pour les clients / SRA PRO pour la flotte de coursiers) orchestrée par un cluster de microservices Node.js haute vélocité. Le système exploite un index spatial Redis Geohash couplé à une base PostGIS pour matcher instantanément les demandes avec les coursiers situés dans un rayon optimal, tout en estimant le tarif au mètre près.',
    solutionArchitecture: [
      'Moteur d’attribution géolocalisée sous les 15 secondes via WebSockets résilients',
      'Calcul instantané et transparent du tarif avant confirmation de la course',
      'Portefeuille numérique intégré avec passerelle directe Wave et Orange Money',
      'Mode de synchronisation différée conservant l’état de la course en local lors des déconnexions 4G',
    ],
    metrics: [
      { label: 'Temps d’attribution', value: '< 15s', desc: 'Contre 10+ min avec les processus manuels' },
      { label: 'Disponibilité système', value: '99.95%', desc: 'Tolérance maximale aux pannes réseau' },
      { label: 'Couverture opérationnelle', value: '10 communes', desc: 'Yopougon, Cocody, Marcory, Plateau, etc.' },
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL / PostGIS', 'Redis Geohash', 'Wave Merchant API', 'Orange Money Webhook'],
    codeArchitecture: `// Algorithme de Dispatch Spatial Intelligent SRA
async function allocateNearestCourier(tripRequest: TripRequest) {
  const { pickupLat, pickupLng, vehicleType } = tripRequest;
  
  // 1. Recherche par index spatial dans un rayon de 3.5 km
  const couriers = await redis.geosearch(
    'fleet:abidjan:active',
    { longitude: pickupLng, latitude: pickupLat },
    { radius: 3.5, unit: 'km', sort: 'ASC', count: 10 }
  );

  // 2. Filtrage multicritère : statut en ligne + score réputationnel
  const eligible = await filterEligibleCouriers(couriers, vehicleType);
  if (!eligible.length) throw new CourierNotFoundError();

  // 3. Attribution concurrente avec verrou distribué (Redlock)
  return await dispatchMissionWithLock(eligible[0].id, tripRequest);
}`,
  },

  'mon-gestionnaire-pro': {
    slug: 'mon-gestionnaire-pro',
    title: 'Mon Gestionnaire Pro — ERP, Caisse POS Offline-First & Conformité FNE',
    category: 'ENTERPRISE ERP & FISCAL COMPLIANCE',
    tagline: 'Système complet de gestion commerciale, stocks multi-dépôts et Facture FNE',
    clientContext:
      'Les commerces de détail, supérettes, quincailleries et grossistes en Côte d’Ivoire sont soumis à deux exigences critiques : encaisser les clients à la cadence maximale sans dépendre d’internet, et se conformer strictement à la nouvelle réglementation de Facturation Normalisée Électronique (FNE) exigée par la Direction Générale des Impôts (DGI).',
    problem:
      'La quasi-totalité des logiciels SaaS existants sur le marché bloquent la caisse dès que la connexion internet est interrompue, provoquant des files d’attente inacceptables. De plus, l’interfaçage avec les protocoles de la DGI et la ventilation des écritures SYSCOHADA s’avéraient complexes et sujets à erreurs manuelles.',
    technicalApproach:
      'LEBOSS TECH a développé un logiciel PC 64 bits ultra-rapide doté d’un moteur transactionnel embarqué à très haute intégrité (SQLite chiffré). L’opérateur encaisse au clavier via des touches de raccourci (F7/F8) en moins d’une seconde. Un service d’arrière-plan gère la signature cryptographique du QR Code FNE et synchronise les stocks entre plusieurs magasins dès qu’une connexion est détectée.',
    solutionArchitecture: [
      'Encaissement au clavier instantané (mise en attente de tickets, multi-devises, espèces/Wave/CB)',
      'Génération cryptographique certifiée des Factures Normalisées Électroniques (FNE) conformes DGI',
      'Gestion multi-magasins avec valorisation des stocks au FIFO et alertes de réapprovisionnement',
      'Génération automatique des journaux et balances comptables conformes au système SYSCOHADA révisé',
    ],
    metrics: [
      { label: 'Vitesse par ticket', value: '< 1.2s', desc: 'Raccourcis clavier sans souris' },
      { label: 'Résilience hors-ligne', value: '100%', desc: 'Aucune coupure de vente même sans internet' },
      { label: 'Conformité FNE', value: '100% validé', desc: 'Conforme aux standards officiels DGI' },
    ],
    technologies: ['C# .NET / 64-bit Desktop Engine', 'SQLite Encrypted', 'SQL Server Sync', 'Thermal ESC/POS 80mm', 'SYSCOHADA Matrix'],
    codeArchitecture: `// Module de Signature Fiscale Cryptographique Mon Gestionnaire Pro
public class FneFiscalSigner 
{
    public static string GenerateFiscalQrPayload(SaleTicket ticket, CompanyTaxProfile profile) 
    {
        var rawPayload = $"{profile.NIF}|{ticket.Uid}|{ticket.TotalTtc:F0}|{ticket.UtcTimestamp:O}";
        var signature = ComputeHmacSha256(rawPayload, profile.SecretKey);
        
        // QR Code conforme aux spécifications officielles de la DGI
        return $"https://fne.dgi.gouv.ci/v/{ticket.Uid}?s={signature}";
    }
}`,
  },

  lounan: {
    slug: 'lounan',
    title: 'Lounan Platform — Moteur de Recherche Immobilière Vérifié Anti-Fraude',
    category: 'PROPTECH & SECURE MARKETPLACE',
    tagline: 'Mise en relation immobilière sécurisée avec modération documentaire stricte',
    clientContext:
      'Le marché locatif et transactionnel d’Abidjan souffre d’une recrudescence d’annonces frauduleuses, d’intermédiaires fictifs et d’images trompeuses, générant une méfiance généralisée chez les acquéreurs et locataires.',
    problem:
      'Permettre aux utilisateurs de trouver des logements vérifiés en quelques clics sans risquer d’être victimes d’arnaques ou de frais de visite illégitimes.',
    technicalApproach:
      'Création d’un écosystème mobile et web avec modération par empreinte visuelle anti-doublon (dHash), vérification documentaire des titres de propriété ou mandats d’agences, et galeries d’images compressées pour un affichage instantané sur smartphone.',
    solutionArchitecture: [
      'Algorithme de détection des annonces dupliquées par similarité visuelle',
      'Géoréférencement précis par quartier et sous-quartier à Abidjan',
      'Filtres multicritères stricts (budget, pièces, commodités, sécurité)',
      'Canal de mise en relation directe sécurisée avec les agences certifiées',
    ],
    metrics: [
      { label: 'Annonces conformes', value: '99.2%', desc: 'Certification rigoureuse' },
      { label: 'Vitesse d’affichage', value: '< 0.8s', desc: 'Même sous réseau 3G' },
      { label: 'Filtrage anti-fraude', value: 'Automatisé', desc: 'Modération active' },
    ],
    technologies: ['React Native', 'Next.js', 'PostgreSQL', 'Cloudinary CDN', 'Vector Search'],
    codeArchitecture: `// Moteur de Vérification Anti-Fraude Lounan
async function verifyPropertyMandate(listingId: string, mandateDocument: Buffer) {
  const extractedMeta = await extractDocumentMetadata(mandateDocument);
  const isValidNif = await verifyAgencyTaxId(extractedMeta.agencyNif);
  
  if (!isValidNif) {
    return { status: 'REJECTED', reason: 'INVALID_TAX_ID' };
  }
  return { status: 'VERIFIED', certifiedAt: new Date().toISOString() };
}`,
  },

  djonan: {
    slug: 'djonan',
    title: 'Djonan Platform — Place de Marché des Artisans & Techniciens Qualifiés',
    category: 'ON-DEMAND LOCAL SERVICES',
    tagline: 'Mise en relation d’urgence avec des professionnels audités par commune',
    clientContext:
      'Face à une panne électrique, une fuite de tuyauterie ou un dysfonctionnement de climatiseur à Abidjan, trouver un technicien fiable et compétent relève souvent du parcours du combattant.',
    problem:
      'Les particuliers et professionnels perdaient des heures à chercher des contacts non qualifiés, sans garantie de compétences ni grille tarifaire claire.',
    technicalApproach:
      'Plateforme mobile géo-distribuée classant les artisans par commune et niveau d’évaluation certifié, avec notification push d’urgence et intégration de paiement par séquestre Wave.',
    solutionArchitecture: [
      'Répertoire d’artisans et techniciens vérifiés avec pièces d’identité',
      'Routing d’urgence vers les techniciens disponibles à proximité immédiate',
      'Système d’avis et d’évaluations vérifiés après chaque intervention',
      'Support et assistance pour le suivi des prestations',
    ],
    metrics: [
      { label: 'Délai moyen de contact', value: '< 4 min', desc: 'Dispatch de proximité' },
      { label: 'Artisans vérifiés', value: '100%', desc: 'Audit des compétences' },
      { label: 'Taux de satisfaction', value: '98.6%', desc: 'Sur les interventions réalisées' },
    ],
    technologies: ['Android', 'Node.js', 'MongoDB Geospatial', 'Firebase Push', 'Wave Pay'],
    codeArchitecture: `// Routing d'Intervention d'Urgence Djonan
async function findNearestAvailableTechnician(request: UrgentInterventionRequest) {
  return await Technician.findOne({
    commune: request.commune,
    skills: { $in: [request.requiredSkill] },
    isAvailable: true,
    verificationStatus: 'AUDITED'
  }).sort({ ratingScore: -1, proximityDistance: 1 });
}`,
  },

  'gerer-mon-argent': {
    slug: 'gerer-mon-argent',
    title: 'Gérer mon Argent — Application Mobile de Finances Personnelles & Épargne',
    category: 'FINTECH & LOCAL WEALTH MANAGEMENT',
    tagline: 'Suivi budgétaire intuitif en FCFA et confidentialité locale 100% sur l’appareil',
    clientContext:
      'La majorité des applications de budget du marché mondial sont conçues pour des monnaies étrangères (Euros, Dollars) et requièrent une connexion bancaire européenne impossible en Afrique francophone.',
    problem:
      'Les utilisateurs ouest-africains souhaitaient suivre leurs dépenses quotidiennes en FCFA (achats du marché, transport, Mobile Money) en toute confidentialité sans que leurs données financières soient envoyées sur des serveurs distants.',
    technicalApproach:
      'Application mobile légère avec base de données SQLite locale chiffrée, saisie vocale naturelle des dépenses en français ivoirien, quêtes d’épargne ludiques (« arbre de richesse ») et verrouillage biométrique.',
    solutionArchitecture: [
      'Saisie vocale intelligente traduisant la voix en transactions chiffrées en FCFA',
      'Budgets visuels par enveloppe avec alertes avant dépassement',
      'Stockage 100% local sur la mémoire du téléphone : zéro donnée financière transmise',
      'Verrouillage biométrique par empreinte digitale ou reconnaissance faciale',
    ],
    metrics: [
      { label: 'Confidentialité', value: '100% Locale', desc: 'Aucune donnée sur le cloud' },
      { label: 'Devise native', value: 'FCFA', desc: 'Zéro conversion complexe' },
      { label: 'Protection', value: 'Biométrique', desc: 'Secure Enclave Hardware' },
    ],
    technologies: ['React Native / Android', 'SQLite Encrypted', 'Voice API', 'Hardware Keystore'],
    codeArchitecture: `// Enregistrement Chiffré Local - Gérer mon Argent
async function recordExpenseLocally(expense: ExpenseRecord) {
  const cipher = createLocalCipherKey();
  const encryptedPayload = cipher.encrypt(JSON.stringify(expense));
  
  await db.execute(
    'INSERT INTO local_ledger (category, amount_fcfa, encrypted_data) VALUES (?, ?, ?)',
    [expense.category, expense.amountFcfa, encryptedPayload]
  );
}`,
  },
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) return { title: 'Étude de cas non trouvée' };

  return {
    title: `${project.title} — Étude de Cas LEBOSS TECH`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      {/* Back button & Breadcrumb */}
      <div className="studio-container py-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-type-secondary hover:text-type-primary transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>RETOUR AUX RÉALISATIONS</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="studio-container py-12 sm:py-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-accent-orange font-bold">
              {project.category}
            </span>
            <span className="text-white/20">//</span>
            <span className="technical-tag text-type-tertiary">
              SYSTÈME EN PRODUCTION
            </span>
          </div>

          <h1 className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-type-secondary font-sans leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md bg-dark-surface border border-white/[0.08] font-mono text-xs text-type-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="studio-container py-8 hairline-t hairline-b my-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-dark-surface/50 border border-white/[0.05]">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-accent-orange block">
                {m.value}
              </span>
              <span className="font-mono text-xs font-semibold text-type-primary block mt-1">
                {m.label}
              </span>
              <span className="text-xs text-type-secondary font-sans block mt-1">
                {m.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="studio-container py-12 space-y-16 max-w-4xl">
        {/* Context */}
        <div className="space-y-4">
          <span className="technical-tag text-accent-orange block">
            01 // CONTEXTE OPÉRATIONNEL
          </span>
          <h2 className="display-title text-2xl sm:text-3xl text-type-primary font-display font-medium">
            L&apos;état initial &amp; les contraintes locales
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            {project.clientContext}
          </p>
        </div>

        {/* Problem */}
        <div className="space-y-4">
          <span className="technical-tag text-accent-orange block">
            02 // LE DÉFI TECHNIQUE
          </span>
          <h2 className="display-title text-2xl sm:text-3xl text-type-primary font-display font-medium">
            Ce que les solutions conventionnelles ne pouvaient résoudre
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Technical Approach */}
        <div className="space-y-4">
          <span className="technical-tag text-accent-orange block">
            03 // APPROCHE ARCHITECTURALE DU STUDIO
          </span>
          <h2 className="display-title text-2xl sm:text-3xl text-type-primary font-display font-medium">
            Ingénierie sur mesure &amp; résilience mesurée
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            {project.technicalApproach}
          </p>
        </div>

        {/* Deliverables Matrix */}
        <div className="space-y-6">
          <span className="technical-tag text-accent-orange block">
            04 // COMPOSANTS MIS EN PRODUCTION
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.solutionArchitecture.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl glass-card border border-white/[0.08]"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-sm text-type-primary font-sans leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Kernel Implementation Code Viewport */}
        <div className="space-y-4">
          <span className="technical-tag text-accent-orange block">
            05 // EXTRAIT D&apos;IMPLÉMENTATION DU KERNEL
          </span>
          <div className="rounded-2xl bg-[#090A0B] border border-white/[0.12] p-6 shadow-2xl font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-3 hairline-b mb-4 text-type-tertiary text-[11px]">
              <span>MODULE // CORE_KERNEL_ARCHITECTURE</span>
              <span className="text-emerald-400">COMPILED // PROD</span>
            </div>
            <pre className="text-type-primary leading-relaxed">
              <code>{project.codeArchitecture}</code>
            </pre>
          </div>
        </div>

        {/* Outro Action */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/[0.1] text-center space-y-4">
          <h3 className="text-2xl font-display font-medium text-type-primary">
            Vous avez un défi d&apos;ingénierie similaire ?
          </h3>
          <p className="text-sm text-type-secondary max-w-xl mx-auto">
            Nos architectes étudient vos spécifications pour modéliser une solution adaptée.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-studio">
              CONTACTER LE STUDIO POUR CE TYPE DE SYSTÈME
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
