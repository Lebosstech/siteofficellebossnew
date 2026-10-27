import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  Layers,
  Server,
  Workflow,
  Headphones,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pôles d’Expertise — Ingénierie & Architectures Logicielles',
  description:
    'Explorez les 6 domaines d’ingénierie technologique de LEBOSS TECH : microservices, développement web & mobile, ERP SYSCOHADA, réseaux d’entreprise et infogérance.',
};

const DISCIPLINES = [
  {
    id: 'software',
    number: '01',
    icon: Code2,
    title: 'Software Engineering & Architectures Distribuées',
    subtitle: 'Moteurs critiques, APIs transactionnelles et microservices à haute disponibilité',
    description:
      'Nous concevons des backends solides capables d’orchestrer des millions d’opérations concurrentes avec un niveau de sécurité militaire. Nos systèmes s’appuient sur des modèles event-driven pour découpler les flux critiques et éliminer les points de défaillance unique (Single Point of Failure).',
    specs: [
      { label: 'Protocole de communication', value: 'gRPC / REST / WebSockets' },
      { label: 'Isolation & Conteneurs', value: 'Docker / Kubernetes' },
      { label: 'Garantie Transactionnelle', value: 'ACID Strict / Event Sourcing' },
      { label: 'Débit mesuré', value: '> 15 000 ops / sec' },
    ],
    deliverables: [
      'Conception et déploiement de microservices résilients',
      'Intégration d’APIs de paiement Mobile Money (Wave, Orange, MTN)',
      'Pipelines automatisés CI/CD avec tests de charge automatisés',
      'Moteurs de calcul financier conformes aux normes bancaires',
    ],
    stack: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'TypeScript'],
  },
  {
    id: 'mobile',
    number: '02',
    icon: Smartphone,
    title: 'Développement Web & Applications Mobiles',
    subtitle: 'Expériences tactiles fluides et architectures offline-first',
    description:
      'Nos applications mobiles et web sont façonnées pour offrir une réactivité instantanée, même sous les contraintes de connectivité du réseau ouest-africain. Grâce à la synchronisation différée et à la mise en cache locale chiffrée, vos utilisateurs continuent de travailler sans interruption.',
    specs: [
      { label: 'Temps de démarrage à froid', value: '< 1.1s sur mobile standard' },
      { label: 'Résilience hors-ligne', value: 'Mise en cache locale SQLite' },
      { label: 'Chiffrement local', value: 'AES-256 au repos' },
      { label: 'Mises à jour', value: 'OTA (Over-The-Air) sans interruption' },
    ],
    deliverables: [
      'Applications Android & iOS à haute performance graphique',
      'Plateformes web Next.js modernes optimisées pour les moteurs de recherche',
      'Interfaces de caisse et de gestion optimisées pour écran tactile',
      'Modules de géolocalisation et tracking en temps réel',
    ],
    stack: ['React Native', 'Next.js', 'Tailwind CSS', 'SQLite', 'WebSockets', 'Capacitor'],
  },
  {
    id: 'business',
    number: '03',
    icon: Layers,
    title: 'Business Systems, ERP & Facturation FNE',
    subtitle: 'Moteurs de gestion commerciale, stocks multi-dépôts et conformité DGI',
    description:
      'Nous éditons et intégrons des ERP robustes taillés pour les réalités des commerces, grossistes et PME de Côte d’Ivoire. Nos solutions intègrent nativement le protocole de Facture Normalisée Électronique (FNE) exigé par la DGI et automatisent la génération des journaux comptables SYSCOHADA.',
    specs: [
      { label: 'Temps d’encaissement ticket', value: '< 1.2s au clavier (F7/F8)' },
      { label: 'Synchronisation multi-boutiques', value: 'Delta asynchrone sécurisé' },
      { label: 'Agrément fiscal', value: 'Génération token QR Code FNE' },
      { label: 'Plan comptable', value: 'SYSCOHADA révisé 100% automatisé' },
    ],
    deliverables: [
      'Mise en place de caisses enregistreuses ultra-rapides POS',
      'Gestion centralisée de stocks, multi-magasins et inventaires',
      'Module d’émission et de transmission automatique des factures FNE',
      'Génération des états financiers certifiés pour les experts-comptables',
    ],
    stack: ['C# .NET 64-bit', 'SQLite Encrypted', 'SQL Server', 'Thermal POS', 'REST APIs'],
  },
  {
    id: 'infrastructure',
    number: '04',
    icon: Server,
    title: 'Infrastructures Réseau, Serveurs & Cloud',
    subtitle: 'Câblage structuré, interconnexion sécurisée et virtualisation',
    description:
      'L’excellence logicielle ne vaut rien sans une infrastructure matérielle irréprochable. Nous déployons des réseaux locaux d’entreprise fiables, des baies de brassage ordonnées, des pare-feux haute sécurité et des environnements de serveurs virtualisés avec plan de reprise d’activité (PRA).',
    specs: [
      { label: 'Norme de câblage', value: 'Catégorie 6A / 7 & Fibre Optique' },
      { label: 'Sécurité périmétrique', value: 'Next-Gen Firewall + Filtrage DPI' },
      { label: 'Disponibilité LAN', value: 'Redondance LACP & Spanning Tree' },
      { label: 'Stratégie de sauvegarde', value: 'Règle 3-2-1 chiffrée hors site' },
    ],
    deliverables: [
      'Audit, tirage de câbles structurés et certification de liens cuivre/fibre',
      'Installation et configuration de baies de brassage et switchs administrables',
      'Déploiement de serveurs d’entreprise Linux/Windows et virtualisation Proxmox',
      'Mise en place de VPN inter-sites chiffrés pour connecter vos succursales',
    ],
    stack: ['Cisco', 'Ubiquiti UniFi', 'Fortinet', 'Proxmox', 'WireGuard', 'Debian'],
  },
  {
    id: 'transformation',
    number: '05',
    icon: Workflow,
    title: 'Transformation Digitale & Automatisation',
    subtitle: 'Élimination des tâches manuelles répétitives et orchestration de flux',
    description:
      'Nous accompagnons les directions d’entreprise dans la rationalisation de leurs opérations. En connectant vos outils disparates et en automatisant les transferts de données, nous supprimons les erreurs humaines de ressaisie et offrons une visibilité en temps réel sur vos indicateurs clés.',
    specs: [
      { label: 'Gain de temps opérationnel', value: 'Jusqu’à 65% sur les saisies' },
      { label: 'Fiabilité des flux', value: 'Zéro perte de données transactionnelles' },
      { label: 'Connectivité', value: 'Webhooks sécurisés & connecteurs API' },
      { label: 'Visibilité', value: 'Dashboards décisionnels temps réel' },
    ],
    deliverables: [
      'Cartographie détaillée et diagnostic de vos processus d’affaires',
      'Création de passerelles d’échanges automatiques entre vos logiciels',
      'Mise en place de tableaux de bord décisionnels pour la direction générale',
      'Formation et conduite du changement auprès de vos collaborateurs',
    ],
    stack: ['Python', 'ETL Pipelines', 'Metabase', 'PostgreSQL', 'OpenAPI'],
  },
  {
    id: 'support',
    number: '06',
    icon: Headphones,
    title: 'Infogérance, Maintenance & SLA 24/7',
    subtitle: 'Surveillance proactive, continuité de service et interventions garanties',
    description:
      'Votre système d’information ne doit jamais devenir un frein. Nos contrats d’infogérance assurent la surveillance continue de vos équipements, la mise à jour proactive de vos systèmes et des interventions physiques prioritaires dans vos locaux à Abidjan.',
    specs: [
      { label: 'Temps d’intervention P1', value: '< 2 heures sur site à Abidjan' },
      { label: 'Monitoring télémétrique', value: 'Sondes actives 24h/24, 7j/7' },
      { label: 'Taux de résolution premier appel', value: '> 85%' },
      { label: 'Garantie de service', value: 'SLA contractuel avec astreinte' },
    ],
    deliverables: [
      'Contrat annuel d’infogérance sur mesure pour votre parc informatique',
      'Supervision proactive des serveurs, switchs et connexions internet',
      'Sauvegardes journalières vérifiées et tests réguliers de restauration',
      'Assistance technique directe pour vos collaborateurs',
    ],
    stack: ['Zabbix', 'Grafana', 'SNMP', 'Ticketing SLA', 'Secure Bastion'],
  },
];

export default function ExpertisePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="studio-container py-16 sm:py-24">
        <div className="max-w-4xl">
          <span className="technical-tag text-accent-orange block mb-4">
            // PÔLES D&apos;INGÉNIERIE &bull; STANDARDS TECHNIQUES
          </span>
          <h1 className="display-hero text-3xl sm:text-6xl lg:text-7xl text-type-primary font-display font-medium tracking-tightest leading-[1.08] break-words">
            Six disciplines.<br />
            <span className="text-type-secondary">Un même engagement de rigueur.</span>
          </h1>
          <p className="mt-8 text-type-secondary text-lg sm:text-xl font-sans leading-relaxed max-w-2xl">
            Découvrez nos expertises architecturales, nos méthodologies de déploiement et nos métriques d&apos;ingénierie pour bâtir des systèmes pérennes.
          </p>
        </div>
      </section>

      {/* Disciplines Deep-Dive List */}
      <section className="studio-container space-y-16">
        {DISCIPLINES.map((disc) => {
          const Icon = disc.icon;
          return (
            <div
              key={disc.id}
              id={disc.id}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.1] relative overflow-hidden space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 hairline-b gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.05] text-accent-orange">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-accent-orange font-bold">
                      DISCIPLINE {disc.number}
                    </span>
                    <h2 className="display-title text-2xl sm:text-3xl text-type-primary font-display font-medium">
                      {disc.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {disc.stack.slice(0, 3).map((st) => (
                    <span
                      key={st}
                      className="px-2.5 py-1 rounded bg-[#090A0B] border border-white/[0.06] font-mono text-[10px] text-type-secondary"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
                {disc.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div>
                <span className="technical-tag text-[10px] text-type-tertiary block mb-3">
                  // SPÉCIFICATIONS TECHNIQUES MESURÉES
                </span>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                  {disc.specs.map((sp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#090A0B]/80 border border-white/[0.04]"
                    >
                      <span className="text-[10px] text-type-tertiary block mb-1">
                        {sp.label}
                      </span>
                      <span className="text-type-primary font-semibold">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 hairline-t">
                <span className="technical-tag text-[10px] text-type-tertiary block mb-3">
                  // LIVRABLES OPÉRATIONNELS EN PRODUCTION
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {disc.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-surface2/60 border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-type-primary font-sans leading-snug">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-type-tertiary">
                  Interventions à Abidjan &amp; télé-ingénierie sous-régionale
                </span>
                <Link
                  href="/contact"
                  className="btn-studio group"
                >
                  <span>CONSULTER SUR CE PÔLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Outro CTA */}
      <section className="studio-container mt-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/[0.1] text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-display font-medium text-type-primary">
            Un besoin technique hybride ?
          </h3>
          <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
            La plupart des chantiers d&apos;envergure combinent architecture logicielle sur mesure et infrastructure réseau haute sécurité. Discutons de vos enjeux.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-studio">
              PLANIFIER UN ÉCHANGE TECHNIQUE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
