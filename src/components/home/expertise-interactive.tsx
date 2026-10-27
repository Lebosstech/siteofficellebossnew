'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  Layers,
  Server,
  Workflow,
  Headphones,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  techStack: string[];
  schematicTitle: string;
  schematicDetails: {
    layer: string;
    spec: string;
    latency: string;
  }[];
}

const EXPERTISES: ExpertiseItem[] = [
  {
    id: 'software-engineering',
    number: '01',
    title: 'Software Engineering',
    subtitle: 'Systèmes critiques & architectures distribuées',
    icon: Code2,
    description:
      'Conception de moteurs logiciels haute performance, microservices scalables et APIs transactionnelles résilientes, taillés pour traiter d’importants volumes de données avec une tolérance aux pannes maximale.',
    deliverables: [
      'Architectures Event-Driven & Microservices',
      'APIs RESTful & GraphQL ultra-sécurisées',
      'Pipelines CI/CD & orchestration conteneurisée',
      'Moteurs de calcul financier & comptable SYSCOHADA',
    ],
    techStack: ['Node.js', 'Go', 'PostgreSQL', 'Docker', 'Redis', 'TypeScript'],
    schematicTitle: 'DISTRIBUTED ARCHITECTURE PIPELINE',
    schematicDetails: [
      { layer: 'Ingress & Rate Limiting', spec: 'WAF + Envoy Proxy', latency: '< 2ms' },
      { layer: 'Transaction Engine Core', spec: 'Stateless Workers Cluster', latency: '6ms' },
      { layer: 'Persistence Layer', spec: 'PostgreSQL ACID Sharded', latency: '4ms' },
      { layer: 'Event Streaming', spec: 'Kafka / Redis PubSub', latency: '1ms' },
    ],
  },
  {
    id: 'web-mobile',
    number: '02',
    title: 'Web & Mobile Development',
    subtitle: 'Applications réactives & offline-first',
    icon: Smartphone,
    description:
      'Développement d’interfaces mobiles et web sur mesure offrant une fluidité tactile sans compromis, même sous connectivité réseau intermittente en Afrique de l’Ouest grâce à des stratégies offline-first éprouvées.',
    deliverables: [
      'Applications mobiles Android & iOS natives/hybrides',
      'Applications web temps réel (Next.js, React)',
      'Synchronisation locale SQLite / Room & Cloud Sync',
      'Intégration transparente Mobile Money & Cartes bancaires',
    ],
    techStack: ['React Native', 'Next.js', 'Tailwind CSS', 'SQLite', 'Capacitor', 'WebSockets'],
    schematicTitle: 'OFFLINE-FIRST SYNCHRONIZATION FLOW',
    schematicDetails: [
      { layer: 'Local State Engine', spec: 'Encrypted IndexedDB / SQLite', latency: '0ms (Instant)' },
      { layer: 'Conflict Resolution Queue', spec: 'CRDT / Vector Clocks', latency: 'Background' },
      { layer: 'Delta Sync Protocol', spec: 'Binary Compressed Payloads', latency: 'Adaptive' },
      { layer: 'Biometric Security', spec: 'Hardware Keystore / Secure Enclave', latency: 'Hardware' },
    ],
  },
  {
    id: 'business-systems',
    number: '03',
    title: 'Business Systems & ERP',
    subtitle: 'Moteurs de gestion d’entreprise & conformité légale',
    icon: Layers,
    description:
      'Édition et intégration de solutions ERP, caisses enregistreuses POS et gestion d’entrepôts adaptées aux spécificités fiscales et comptables ivoiriennes (Facture Normalisée Électronique FNE, plan SYSCOHADA).',
    deliverables: [
      'Systèmes ERP modulaires (Stocks, Ventes, Caisse POS)',
      'Conformité DGI Côte d’Ivoire & Facture FNE',
      'Gestion multi-magasins et inventaires en temps réel',
      'Génération automatisée des états financiers certifiés',
    ],
    techStack: ['Windows Desktop 64-bit', 'PostgreSQL', 'SQL Server', 'REST APIs', 'Receipt Terminals'],
    schematicTitle: 'ERP & FISCAL DATA DISPATCH KERNEL',
    schematicDetails: [
      { layer: 'POS Fast-Key Input', spec: 'Keyboard-driven Caisse (F7/F8)', latency: 'Instant' },
      { layer: 'Inventory Ledger', spec: 'Multi-warehouse FIFO Ledger', latency: 'Real-time' },
      { layer: 'FNE Fiscal Signature', spec: 'DGI Cryptographic Token', latency: 'Verified' },
      { layer: 'SYSCOHADA Journal', spec: 'Double-entry Automated Ledger', latency: 'Synchronized' },
    ],
  },
  {
    id: 'it-infrastructure',
    number: '04',
    title: 'IT Infrastructure & Cloud',
    subtitle: 'Réseaux d’entreprise, serveurs & haute sécurité',
    icon: Server,
    description:
      'Ingénierie des infrastructures matérielles et logiques : câblage structuré cuivre/fibre optique, baie de brassage, virtualisation de serveurs, VPN sécurisés inter-sites et plans de reprise d’activité (PRA).',
    deliverables: [
      'Réseaux locaux d’entreprise (LAN, VLANs, Wi-Fi 6 haute densité)',
      'Déploiement et sécurisation de serveurs Linux & Windows',
      'Pare-feu d’entreprise (Fortinet, pfSense, Sophos)',
      'Sauvegardes chiffrées automatiques 3-2-1 & PRA',
    ],
    techStack: ['Cisco', 'Ubiquiti UniFi', 'Fortinet', 'Proxmox', 'Debian', 'WireGuard'],
    schematicTitle: 'ENTERPRISE ZERO-TRUST NETWORK',
    schematicDetails: [
      { layer: 'Perimeter Defense', spec: 'Next-Gen Firewall + IPS/IDS', latency: 'Sub-millisecond' },
      { layer: 'Core Switching', spec: '10GbE SFP+ Fiber Backbone', latency: 'Wire-speed' },
      { layer: 'Secure Remote Access', spec: 'WireGuard Multi-peer Mesh', latency: '< 5ms' },
      { layer: 'Automated Backup Vault', spec: 'Offsite Encrypted Replication', latency: 'Immutable' },
    ],
  },
  {
    id: 'digital-transformation',
    number: '05',
    title: 'Digital Transformation',
    subtitle: 'Audit stratégique, automatisation & refonte de processus',
    icon: Workflow,
    description:
      'Modernisation des flux organisationnels des entreprises. Nous identifions les goulets d’étranglement manuels et déployons des architectures logicielles automatisées pour décupler la rentabilité opérationnelle.',
    deliverables: [
      'Audit technique complet & cartographie des processus',
      'Automatisation de flux métiers et réduction des saisies manuelles',
      'Interfaçage des banques et passerelles de paiement locales',
      'Tableaux de bord décisionnels pour directions générales',
    ],
    techStack: ['Python', 'ETL Pipelines', 'Metabase', 'Webhook Hubs', 'OpenAPI'],
    schematicTitle: 'PROCESS AUTOMATION WORKFLOW',
    schematicDetails: [
      { layer: 'Source Data Ingestion', spec: 'Multi-system Connectors', latency: 'Continuous' },
      { layer: 'ETL & Normalization', spec: 'Validation & Deduplication', latency: 'Guaranteed' },
      { layer: 'Executive Analytics', spec: 'Real-time KPI Streaming', latency: 'Live' },
      { layer: 'Alerting & SLA Rules', spec: 'Automated Escalation Triggers', latency: '< 30s' },
    ],
  },
  {
    id: 'support-maintenance',
    number: '06',
    title: 'Support & Maintenance',
    subtitle: 'Supervision proactive & engagements de service SLA',
    icon: Headphones,
    description:
      'Garantie de continuité d’activité 24/7. Notre pôle d’infogérance supervise vos parcs et serveurs, prévient les pannes matérielles et logicielles, et intervient sur site à Abidjan avec des délais contractuels stricts.',
    deliverables: [
      'Contrats d’infogérance avec SLA garanti (P1 sous 2h à Abidjan)',
      'Monitoring télémétrique et alertes 24/7',
      'Maintenance préventive logicielle et nettoyage d’équipements',
      'Support utilisateur de niveau 1, 2 et 3 dédié',
    ],
    techStack: ['Zabbix', 'Grafana', 'SNMP', 'Remote Access Secure Gate', 'Ticketing SLA'],
    schematicTitle: 'CONTINUOUS MONITORING & SLA MESH',
    schematicDetails: [
      { layer: 'Proactive Telemetry', spec: 'Heartbeat & Resource Probing', latency: '10s intervals' },
      { layer: 'Threshold Detection', spec: 'Anomaly Detection Engine', latency: 'Instant' },
      { layer: 'Field Dispatch Abidjan', spec: 'Dedicated Engineering Squad', latency: '< 2h SLA' },
      { layer: 'Post-Mortem & Audit', spec: 'Automated Incident Reporting', latency: 'Standardized' },
    ],
  },
];

export function ExpertiseInteractive() {
  const [selectedId, setSelectedId] = useState<string>('software-engineering');
  const activeExpertise = EXPERTISES.find((e) => e.id === selectedId) || EXPERTISES[0];

  return (
    <section className="relative py-28 sm:py-36 bg-[#090A0B] overflow-hidden">
      {/* Background hairlines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.03),transparent_70%)] pointer-events-none" />

      {/* Vertical stream continuity */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" style={{ animationDelay: '5s' }} />
      </div>

      <div className="studio-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="technical-tag text-accent-orange block mb-4">
            // CHAPITRE 04 &mdash; NOS PÔLES D&apos;EXPERTISE
          </span>
          <h2 className="display-hero text-3xl sm:text-5xl lg:text-6xl text-type-primary font-display font-medium tracking-tightest">
            Une ingénierie de précision.<br />
            <span className="text-type-secondary">Sans artifice commercial.</span>
          </h2>
          <p className="mt-6 text-type-secondary text-base sm:text-lg leading-relaxed">
            Nous intervenons sur les chantiers technologiques exigeants. Sélectionnez un pôle pour observer notre approche architecturale, nos livrables et nos standards d&apos;exécution.
          </p>
        </div>

        {/* Dynamic Studio Layout: Selector Navigation on Left / Deep Architectural Canvas on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Domain Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {EXPERTISES.map((exp) => {
              const isSelected = exp.id === selectedId;
              const Icon = exp.icon;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative group flex items-start gap-4 border ${
                    isSelected
                      ? 'bg-dark-surface border-white/[0.12] shadow-2xl'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/[0.04]'
                  }`}
                >
                  {/* Active indicator hairline */}
                  {isSelected && (
                    <span className="absolute left-0 top-3 bottom-3 w-1 bg-accent-orange rounded-r" />
                  )}

                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-white/[0.08] text-accent-orange'
                        : 'bg-white/[0.03] text-type-tertiary group-hover:text-type-secondary'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-type-tertiary">
                        {exp.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'text-accent-orange bg-accent-orange/10'
                            : 'text-type-tertiary opacity-0 group-hover:opacity-100 transition-opacity'
                        }`}
                      >
                        EXPLORER
                      </span>
                    </div>
                    <div
                      className={`text-base sm:text-lg font-display font-medium ${
                        isSelected ? 'text-type-primary' : 'text-type-secondary group-hover:text-type-primary'
                      }`}
                    >
                      {exp.title}
                    </div>
                    <div className="text-xs text-type-tertiary font-sans mt-0.5">
                      {exp.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Architectural Canvas Column (Transforms dynamically) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.1] relative overflow-hidden transition-all duration-500 min-h-[560px] flex flex-col justify-between">
              
              {/* Subtle background ambient pulse */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.06),transparent_70%)] pointer-events-none" />

              <div>
                {/* Header of Active Domain */}
                <div className="flex items-center justify-between pb-6 hairline-b">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-accent-orange">
                      POLE {activeExpertise.number}
                    </span>
                    <span className="text-type-tertiary">//</span>
                    <span className="technical-tag text-type-secondary text-xs">
                      {activeExpertise.schematicTitle}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>PRODUCTION READY</span>
                  </div>
                </div>

                {/* Domain Title & Expanded Narrative */}
                <div className="mt-8">
                  <h3 className="display-title text-2xl sm:text-3xl lg:text-4xl text-type-primary font-display font-medium">
                    {activeExpertise.title}
                  </h3>
                  <p className="mt-4 text-type-secondary text-sm sm:text-base leading-relaxed font-sans">
                    {activeExpertise.description}
                  </p>
                </div>

                {/* Key Deliverables Matrix */}
                <div className="mt-8">
                  <span className="technical-tag text-[10px] text-type-tertiary block mb-4">
                    // LIVRABLES &amp; COMPOSANTS ARCHITECTURAUX
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeExpertise.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-surface2/60 border border-white/[0.04]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-type-primary font-sans leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schematic Topology Layers (Unique technical representation) */}
                <div className="mt-8">
                  <span className="technical-tag text-[10px] text-type-tertiary block mb-4">
                    // COUCHES DU SYSTÈME &bull; PERFORMANCES MESURÉES
                  </span>
                  <div className="space-y-2 font-mono text-xs">
                    {activeExpertise.schematicDetails.map((layer, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#090A0B]/80 border border-white/[0.04]"
                      >
                        <div className="flex items-center gap-2 text-type-secondary">
                          <Terminal className="w-3 h-3 text-accent-orange" />
                          <span>{layer.layer}</span>
                        </div>
                        <div className="flex items-center gap-4 text-type-primary">
                          <span className="text-type-tertiary hidden sm:inline">{layer.spec}</span>
                          <span className="text-accent-orange font-semibold">{layer.latency}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack & Deep-dive Link Footer */}
              <div className="mt-10 pt-6 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="technical-tag text-[10px] text-type-tertiary mr-1">STACK :</span>
                  {activeExpertise.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-type-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-2 text-xs font-mono text-type-primary hover:text-accent-orange transition-colors group shrink-0"
                >
                  <span>SPÉCIFICATIONS DÉTAILLÉES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
