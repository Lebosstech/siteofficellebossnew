"use client";
import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Check,
  GitBranch,
  Workflow,
  Database,
  Server,
  Globe,
  ShieldCheck,
  Monitor,
  Printer,
  Router,
  Wifi,
  Code2,
  Bell,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function useSequence(length: number, delay = 1400) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    setPlaying(!media.matches);
    const change = () => setPlaying(!media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    if (!playing) return;
    let visible = false;
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    if (ref.current) observer.observe(ref.current);
    const timer = setInterval(() => {
      if (visible && !document.hidden) setStep((s) => (s + 1) % length);
    }, delay);
    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [playing, length, delay]);
  return { step, setStep, playing, setPlaying, ref };
}
function Controls({
  playing,
  onPlay,
  onReset,
  onStep,
}: {
  playing: boolean;
  onPlay: () => void;
  onReset: () => void;
  onStep: () => void;
}) {
  return (
    <div className="demo-controls">
      <button
        onClick={onPlay}
        aria-label={playing ? "Mettre en pause" : "Lancer la démonstration"}
      >
        {playing ? <Pause size={15} /> : <Play size={15} />}
        <span>{playing ? "Pause" : "Lecture"}</span>
      </button>
      <button onClick={onReset} aria-label="Recommencer">
        <RotateCcw size={15} />
      </button>
      <button onClick={onStep}>
        Étape suivante <ArrowRight size={14} />
      </button>
    </div>
  );
}
const scenarios = [
  {
    name: "Demande client",
    nodes: [
      "Nouvelle demande",
      "Analyse des données",
      "Vérification",
      "Décision",
      "Action automatisée",
      "Notification",
      "Journal d’exécution",
    ],
    log: [
      "Demande reçue",
      "Champs analysés",
      "Informations complètes",
      "Validation acceptée",
      "Dossier créé",
      "Équipe informée",
      "Exécution terminée",
    ],
  },
  {
    name: "Rapport automatisé",
    nodes: [
      "Planification",
      "Collecte des données",
      "Contrôle qualité",
      "Données disponibles ?",
      "Génération PDF",
      "Envoi du rapport",
      "Archivage",
    ],
    log: [
      "Échéance atteinte",
      "Sources collectées",
      "Données vérifiées",
      "Génération autorisée",
      "Rapport préparé",
      "Rapport envoyé",
      "Rapport archivé",
    ],
  },
  {
    name: "Validation métier",
    nodes: [
      "Nouvelle dépense",
      "Analyse du dossier",
      "Pièce manquante",
      "Validation humaine",
      "Autorisation",
      "Notification comptable",
      "Journal d’approbation",
    ],
    log: [
      "Dossier reçu",
      "Justificatifs analysés",
      "Intervention nécessaire",
      "Justificatif ajouté • reprise",
      "Dépense autorisée",
      "Comptabilité informée",
      "Validation enregistrée",
    ],
  },
];
export function AutomationDemo() {
  const [scenario, setScenario] = useState(0);
  const seq = useSequence(9, 1350);
  const { setPlaying } = seq;
  useEffect(() => {
    if (scenario === 2 && seq.step === 2) setPlaying(false);
  }, [scenario, seq.step, setPlaying]);
  const data = scenarios[scenario];
  const s = Math.min(seq.step, 6);
  return (
    <div className="demo automation-demo" ref={seq.ref}>
      <div className="demo-bar">
        <span>
          <i /> WORKFLOW ENGINE
        </span>
        <span>DÉMONSTRATION INTERACTIVE</span>
      </div>
      <div className="demo-tabs" aria-label="Scénario">
        {scenarios.map((d, i) => (
          <button
            key={d.name}
            aria-pressed={scenario === i}
            onClick={() => {
              setScenario(i);
              seq.setStep(0);
            }}
          >
            {d.name}
          </button>
        ))}
      </div>
      <div className={`workflow-map ${scenario === 2 ? "human-path" : ""}`}>
        <svg
          viewBox="0 0 800 330"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="wire"
            d="M130 70H670V165H130V270M670 165V270H400V165"
          />
          <path
            className="signal-path"
            d={
              scenario === 0
                ? "M130 70H670V165H130V270"
                : scenario === 1
                  ? "M130 70H670V270H400V165H130V270"
                  : "M130 70H670V165H400V270H130V165"
            }
            style={{ strokeDashoffset: 500 - s * 95 }}
          />
        </svg>
        {data.nodes.map((label, i) => {
          const icons = [
            Workflow,
            Database,
            ShieldCheck,
            GitBranch,
            Code2,
            Bell,
            CheckCircle2,
          ];
          const Icon = icons[i];
          return (
            <div
              key={label}
              className={`workflow-node node-${i} ${s === i ? "is-active" : ""} ${s > i ? "is-complete" : ""}`}
            >
              <Icon size={17} />
              <span>{label}</span>
              <small>{s > i ? "✓" : s === i ? "●" : "·"}</small>
            </div>
          );
        })}
        <span className="branch-note">
          {scenario === 2
            ? s < 3
              ? "JUSTIFICATIF REQUIS"
              : "PIÈCE AJOUTÉE → REPRISE"
            : "INFORMATIONS COMPLÈTES"}
        </span>
      </div>
      <div className="execution-log">
        <span className="mono">{String(s + 1).padStart(2, "0")} / 07</span>
        <span role="status">{data.log[s]}</span>
        <small>
          {s === 6
            ? "✓ TERMINÉ"
            : scenario === 2 && s === 2
              ? "! ATTENTE HUMAINE"
              : "→ EN COURS"}
        </small>
      </div>
      {scenario === 2 && s === 2 && (
        <button
          className="human-confirm"
          onClick={() => {
            seq.setStep(3);
            seq.setPlaying(true);
          }}
        >
          Ajouter un justificatif (simulation) →
        </button>
      )}
      <Controls
        playing={seq.playing}
        onPlay={() => seq.setPlaying(!seq.playing)}
        onReset={() => seq.setStep(0)}
        onStep={() => seq.setStep((s + 1) % 7)}
      />
      <p className="demo-disclaimer">
        Données illustratives · Aucun processus réel n’est exécuté.
      </p>
    </div>
  );
}
const stages = ["Architecture", "Interface", "Développement", "Déploiement"];
export function DevelopmentDemo() {
  const [mode, setMode] = useState(0);
  const [stage, setStage] = useState(0);
  const [manual, setManual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (manual || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      end: "bottom 25%",
      onUpdate: (self) => setStage(Math.min(3, Math.floor(self.progress * 4))),
    });
    return () => trigger.kill();
  }, [manual]);
  return (
    <div className="demo development-demo" ref={ref}>
      <div className="demo-bar">
        <span>CODE → EXPERIENCE</span>
        <span>CONSTRUCTION ILLUSTRATIVE</span>
      </div>
      <div className="demo-tabs">
        {["Site web", "Application mobile", "Logiciel métier"].map((m, i) => (
          <button key={m} aria-pressed={mode === i} onClick={() => setMode(i)}>
            {m}
          </button>
        ))}
      </div>
      <div className={`development-stage stage-${stage} mode-${mode}`}>
        <div className="code-panel">
          <span className="mono">application.tsx</span>
          <pre>
            <code>
              {mode === 0
                ? "export function Website() {\n  return (\n    <main>\n      <Header />\n      <Projects />\n      <Contact />\n    </main>\n  );\n}"
                : mode === 1
                  ? 'async function loadProjects() {\n  const response = await fetch(\n    "/api/projects"\n  );\n  if (!response.ok) {\n    throw new Error("Erreur");\n  }\n  return response.json();\n}'
                  : 'type Task = {\n  id: string;\n  status: "pending" | "done";\n};\n\nfunction completed(tasks: Task[]) {\n  return tasks.filter(\n    task => task.status === "done"\n  );\n}'}
            </code>
          </pre>
          <div className="api-flow">
            Frontend <ArrowRight size={12} /> API <ArrowRight size={12} />{" "}
            Données
          </div>
          {stage > 1 && <p className="mono">✓ Réponse simulée : 200 OK</p>}
        </div>
        <div className="browser-mock">
          <div className="browser-top">
            <span>● ● ●</span>
            <span>{mode === 1 ? "application mobile" : "projet.exemple"}</span>
            <span>↗</span>
          </div>
          <div className="mock-content">
            <div className="mock-nav">
              {stage > 0 ? "STUDIO / DEMO" : "— — —"}
              <span>•••</span>
            </div>
            {mode === 2 ? (
              <>
                <small>VUE D’ENSEMBLE</small>
                <h3>
                  Votre activité,
                  <br />
                  en perspective.
                </h3>
                <div className="dashboard-bars">
                  {[40, 65, 50, 90, 75, 100, 85].map((h, i) => (
                    <i style={{ height: h }} key={i} />
                  ))}
                </div>
                <p>Activité illustrative · sans données client</p>
              </>
            ) : (
              <>
                <small>
                  {mode === 1
                    ? "VOTRE ESPACE MOBILE"
                    : "UNE IDÉE. UNE EXPÉRIENCE."}
                </small>
                <h3>
                  {stage > 0 ? (
                    <>
                      Le détail fait
                      <br />
                      la différence.
                    </>
                  ) : (
                    <>
                      <span className="skeleton" />
                      <span className="skeleton" />
                    </>
                  )}
                </h3>
                <div className="mock-art">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-bottom">
                  <span>{stage > 0 ? "Explorer le projet" : "————"}</span>
                  <ArrowRight size={16} />
                </div>
              </>
            )}
          </div>
          {stage === 3 && (
            <div className="deploy-status">
              <Check size={13} /> Build → Tests → Deploy → Available
            </div>
          )}
        </div>
      </div>
      <div className="stage-selector">
        {stages.map((label, i) => (
          <button
            key={label}
            aria-pressed={stage === i}
            onClick={() => {
              setManual(true);
              setStage(i);
            }}
          >
            <span>0{i + 1}</span>
            {label}
          </button>
        ))}
      </div>
      <button className="scroll-reset" onClick={() => setManual(false)}>
        Suivre le défilement ↕
      </button>
    </div>
  );
}
const infraModes = ["Requête HTTP", "Déploiement", "Maintenance"];
const infraLabels = [
  "Client",
  "DNS",
  "Reverse proxy",
  "Application",
  "API",
  "PostgreSQL",
  "Redis",
  "Worker",
  "Sauvegarde",
  "Monitoring",
];
const infraPaths = [
  [0, 1, 2, 3, 4, 5, 4, 3, 2, 0],
  [3, 4, 7, 3, 9],
  [3, 9, 4, 3, 9],
];
const infraMessages = [
  [
    "Requête reçue",
    "Résolution du nom",
    "Routage HTTPS",
    "Traitement applicatif",
    "Appel API",
    "Lecture des données",
    "Réponse API",
    "Réponse applicative",
    "Retour via le proxy",
    "Réponse au client",
  ],
  [
    "Build de la nouvelle version",
    "Validation",
    "Déploiement",
    "Nouvelle version disponible",
    "Health check réussi",
  ],
  [
    "Incident simulé : application indisponible",
    "Alerte de supervision",
    "Diagnostic de la dépendance API",
    "Reprise contrôlée du service",
    "Service rétabli — vérification",
  ],
];
export function InfrastructureDemo() {
  const [mode, setMode] = useState(0);
  const seq = useSequence(infraPaths[mode].length, 1700);
  const step = seq.step % infraPaths[mode].length,
    active = infraPaths[mode][step];
  const positions = [
    [70, 85],
    [235, 85],
    [400, 85],
    [565, 85],
    [730, 85],
    [730, 220],
    [565, 220],
    [400, 220],
    [730, 350],
    [565, 350],
  ];
  const paths = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 8],
    [9, 3],
    [9, 4],
  ];
  return (
    <div className="demo infrastructure-demo" ref={seq.ref}>
      <div className="demo-bar">
        <span>ARCHITECTURE EXPLORER</span>
        <span>ENVIRONNEMENT SIMULÉ</span>
      </div>
      <div className="demo-tabs">
        {infraModes.map((m, i) => (
          <button
            key={m}
            aria-pressed={mode === i}
            onClick={() => {
              setMode(i);
              seq.setStep(0);
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="infra-topology">
        <svg viewBox="0 0 800 410" aria-hidden="true">
          {paths.map(([a, b]) => {
            const [x, y] = positions[a],
              [tx, ty] = positions[b];
            return (
              <path
                key={`${a}-${b}`}
                className={a === active || b === active ? "is-active" : ""}
                d={`M${x} ${y} L${tx} ${ty}`}
              />
            );
          })}
        </svg>
        {infraLabels.map((label, i) => {
          const Icon =
            i === 0
              ? Globe
              : i === 5
                ? Database
                : i === 9
                  ? ShieldCheck
                  : Server;
          return (
            <div
              style={{
                left: `${positions[i][0] / 8}%`,
                top: `${positions[i][1] / 4.1}%`,
              }}
              className={`infra-node ${active === i ? "is-active" : ""} ${mode === 2 && step === 0 && i === 3 ? "has-incident" : ""}`}
              key={label}
            >
              <Icon size={22} />
              <span>{label}</span>
              <small>
                {mode === 2 && step === 0 && i === 3
                  ? "! INCIDENT"
                  : active === i
                    ? "● ACTIF"
                    : "—"}
              </small>
            </div>
          );
        })}
      </div>
      <div className="execution-log" role="status">
        <span className="mono">0{step + 1}</span>
        <span>{infraMessages[mode][step]}</span>
      </div>
      <Controls
        playing={seq.playing}
        onPlay={() => seq.setPlaying(!seq.playing)}
        onReset={() => seq.setStep(0)}
        onStep={() => seq.setStep((step + 1) % infraPaths[mode].length)}
      />
      <p className="demo-disclaimer">
        La reprise illustrée suppose un diagnostic et une intervention adaptés.
      </p>
    </div>
  );
}
const devices = [
  {
    label: "Routeur",
    Icon: Router,
    description:
      "Relie le réseau local à Internet et applique les règles de routage.",
    links: [1],
    x: 50,
    y: 13,
  },
  {
    label: "Switch",
    Icon: GitBranch,
    description:
      "Distribue les connexions filaires entre les équipements du bureau.",
    links: [0, 2, 3, 4, 5],
    x: 50,
    y: 45,
  },
  {
    label: "Postes de travail",
    Icon: Monitor,
    description:
      "Les postes accèdent aux applications et aux ressources partagées via le switch.",
    links: [1, 5],
    x: 15,
    y: 78,
  },
  {
    label: "Wi-Fi",
    Icon: Wifi,
    description:
      "Le point d’accès raccorde les appareils mobiles au réseau professionnel.",
    links: [1],
    x: 85,
    y: 45,
  },
  {
    label: "Imprimante partagée",
    Icon: Printer,
    description:
      "Les postes envoient leurs travaux via le switch vers l’imprimante réseau.",
    links: [1, 2],
    x: 50,
    y: 78,
  },
  {
    label: "Serveur",
    Icon: Server,
    description:
      "Héberge les services et données accessibles aux postes autorisés.",
    links: [1, 2],
    x: 85,
    y: 78,
  },
];
export function NetworkDemo() {
  const [active, setActive] = useState(1);
  return (
    <div className="demo network-demo">
      <div className="demo-bar">
        <span>LE BUREAU CONNECTÉ</span>
        <span>TOPOLOGIE ILLUSTRATIVE</span>
      </div>
      <div className="office-map">
        <svg
          viewBox="0 0 800 350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[
            [0, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
          ].map(([a, b]) => (
            <path
              key={b}
              className={
                active === a ||
                active === b ||
                devices[active].links.includes(b)
                  ? "is-active"
                  : ""
              }
              d={`M${devices[a].x * 8} ${devices[a].y * 3.5}H${devices[b].x * 8}V${devices[b].y * 3.5}`}
            />
          ))}
        </svg>
        {devices.map((d, i) => (
          <button
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
            key={d.label}
            className={`office-device ${active === i ? "is-active" : ""}`}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <d.Icon size={24} />
            <span>{d.label}</span>
          </button>
        ))}
      </div>
      <div className="network-description" role="status">
        <span className="mono">
          0{active + 1} / {devices[active].label}
        </span>
        <p>{devices[active].description}</p>
      </div>
    </div>
  );
}
