"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  Check,
  CheckCheck,
  Code2,
  Database,
  GitBranch,
  Globe,
  Play,
  Pause,
  RotateCcw,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import "./digital-engine.css";

const modes = ["Automatisation", "Développement", "Infrastructure"];
const workflow = [
  "Demande reçue",
  "Validation",
  "Traitement",
  "Décision",
  "Action",
  "Terminé",
];
const infrastructure = ["Client", "Reverse proxy", "Application", "Database"];
const icons = [Zap, ShieldCheck, Workflow, GitBranch, ArrowUpRight, CheckCheck];
const statuses = ["Build", "Test", "Deploy", "Healthy"];
const events = [
  "Prêt à recevoir une demande",
  "Réception de la demande",
  "Données vérifiées",
  "Traitement et décision",
  "Action exécutée",
  "Composant généré",
  "Vérification du build",
  "Exécution terminée",
];
const code = [
  "type Request = { approved: boolean };",
  "",
  "export function process(request: Request) {",
  "  if (!request.approved) return null;",
  '  return <Confirmation status="ready" />;',
  "}",
];

export function DigitalEngine() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const transition = useRef<gsap.core.Timeline | null>(null);
  const [mode, setMode] = useState(0);
  const [selected, setSelected] = useState(0);
  const [phase, setPhase] = useState(7);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [run, setRun] = useState(0);
  const [deployStep, setDeployStep] = useState(3);
  const userPaused = useRef(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const host = root.current;
    if (!host) return;
    if (reduced) {
      setPhase(7);
      setPlaying(false);
      return;
    }
    userPaused.current = false;
    setPlaying(true);
    setPhase(0);
    setDeployStep(-1);
    const context = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setPlaying(false) });
      timeline.current = tl;
      if (run === 0) {
        tl.fromTo(
          ".engine-drawline",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: "power2.inOut" },
          0,
        );
        tl.fromTo(
          ".engine-window",
          { opacity: 0, scale: 0.93, y: 35, rotateX: 9 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 4,
            duration: 0.55,
            ease: "power3.out",
          },
          0.4,
        );
        tl.fromTo(
          ".engine-node",
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.32,
            stagger: 0.07,
            ease: "power3.out",
          },
          0.95,
        );
        tl.fromTo(
          ".engine-wire",
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.6, stagger: 0.035 },
          1,
        );
        tl.fromTo(
          ".engine-code",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          2.4,
        );
      }
      const beats =
        run === 0
          ? [1.6, 1.85, 2.1, 2.4, 2.7, 3.2, 4]
          : [0.1, 0.6, 1.1, 1.6, 2.1, 2.7, 3.5];
      beats.forEach((time, i) => tl.call(() => setPhase(i + 1), [], time));
      [0, 1, 2, 3].forEach((i) =>
        tl.call(() => setDeployStep(i), [], (run === 0 ? 3.2 : 2.7) + i * 0.2),
      );
      tl.to({}, { duration: 0.01 }, run === 0 ? 4 : 3.5);
    }, host);
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !document.hidden && !userPaused.current)
        timeline.current?.resume();
      else timeline.current?.pause();
    });
    observer.observe(host);
    const visibility = () => {
      if (document.hidden) timeline.current?.pause();
      else if (!userPaused.current) timeline.current?.resume();
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      context.revert();
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      timeline.current = null;
    };
  }, [reduced, run]);
  useEffect(
    () => () => {
      transition.current?.kill();
    },
    [],
  );
  function finish() {
    timeline.current?.progress(1).kill();
    setPhase(7);
    setPlaying(false);
    userPaused.current = true;
  }
  function choose(next: number) {
    if (next === selected) return;
    finish();
    setSelected(next);
    transition.current?.kill();
    const host = root.current;
    if (!host) return;
    if (reduced) {
      setMode(next);
      setPhase(7);
      return;
    }
    transition.current = gsap
      .timeline()
      .to(host.querySelector(".engine-stage"), {
        opacity: 0.25,
        y: -7,
        scale: 0.985,
        duration: 0.23,
        ease: "power2.in",
      })
      .call(() => {
        setMode(next);
        setPhase(7);
      })
      .to(host.querySelector(".engine-stage"), {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.57,
        ease: "power3.out",
      });
  }
  function replay() {
    if (reduced) {
      setPhase(0);
      return;
    }
    setRun((r) => r + 1);
  }
  const activeNode = Math.min(5, Math.max(0, phase - 1));
  const deployment = phase === 7 ? 3 : deployStep;
  return (
    <div
      className="digital-engine"
      ref={root}
      aria-label="LEBOSS Digital Engine — démonstration interactive"
    >
      <div className="engine-eyebrow">
        <span>
          <i /> LEBOSS DIGITAL ENGINE
        </span>
        <span>AUTOMATE / BUILD / DEPLOY</span>
      </div>
      <div className="engine-perspective">
        <div className="engine-drawline" />
        <div className="engine-window">
          <div className="engine-chrome">
            <span className="engine-window-dots" aria-hidden="true">
              ● ● ●
            </span>
            <span>
              leboss.engine /{" "}
              {["workflow", "workspace", "infrastructure"][mode]}
            </span>
            <span className="engine-demo-tag">DÉMONSTRATION</span>
          </div>
          <div
            className={`engine-stage engine-mode-${mode}`}
            role="tabpanel"
            id="engine-panel"
            aria-labelledby={`engine-tab-${selected}`}
          >
            <div className="engine-canvas-heading">
              <span>
                {["01 / AUTOMATE", "02 / BUILD", "03 / DEPLOY"][mode]}
              </span>
              <span>
                {phase === 7 ? "✓ SÉQUENCE COMPLÈTE" : "EXÉCUTION ILLUSTRATIVE"}
              </span>
            </div>
            <div
              className="engine-graph"
              aria-label={
                mode === 2
                  ? "Client vers proxy, application et base de données"
                  : "Réception, validation, traitement, décision, action et fin"
              }
            >
              <svg
                className="engine-connections"
                viewBox="0 0 620 200"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {mode !== 2 ? (
                  <>
                    {[
                      "M102 46C140 46 155 46 207 46",
                      "M300 46C345 46 360 46 405 46",
                      "M503 46C575 46 575 145 503 145",
                      "M405 145C360 145 345 145 300 145",
                      "M207 145C155 145 140 145 102 145",
                    ].map((d, i) => (
                      <g key={d}>
                        <path className="engine-wire" pathLength="1" d={d} />
                        <path
                          className={`engine-signal ${phase > i + 1 ? "passed" : ""} ${activeNode === i ? "travelling" : ""}`}
                          pathLength="1"
                          d={d}
                        />
                      </g>
                    ))}
                  </>
                ) : (
                  <>
                    {[
                      "M77 90C110 90 120 90 155 90",
                      "M233 90C267 90 275 90 310 90",
                      "M388 90C425 90 435 90 465 90",
                    ].map((d, i) => (
                      <g key={d}>
                        <path className="engine-wire" pathLength="1" d={d} />
                        <path
                          className={`engine-signal ${phase > i ? "passed" : ""} ${phase > 0 && phase < 7 ? "travelling" : ""}`}
                          pathLength="1"
                          d={d}
                        />
                      </g>
                    ))}
                    <path
                      className={`engine-return ${phase > 3 ? "return-active" : ""}`}
                      d="M500 120V177H42V120"
                      pathLength="1"
                    />
                  </>
                )}
              </svg>
              {(mode === 2 ? infrastructure : workflow).map((label, i) => {
                const Icon =
                  mode === 2
                    ? [Globe, ShieldCheck, Server, Database][i]
                    : icons[i];
                const done =
                  phase === 7 || (mode === 2 ? phase > i + 2 : activeNode > i);
                const active =
                  mode === 2 ? phase === i + 1 : activeNode === i && phase < 7;
                return (
                  <div
                    key={i}
                    className={`engine-node engine-n${i} ${done ? "node-done" : ""} ${active ? "node-current" : ""}`}
                  >
                    <span className="engine-node-icon">
                      <Icon size={17} />
                    </span>
                    <span>
                      {label}
                      <small>
                        {mode === 2
                          ? ["HTTPS", "ROUTAGE", "SERVICE", "POSTGRESQL"][i]
                          : [
                              "WEBHOOK",
                              "CONTRÔLE",
                              "PROCESSUS",
                              "CONDITION",
                              "EXÉCUTION",
                              "CONFIRMATION",
                            ][i]}
                      </small>
                    </span>
                    <b>{done ? <Check size={11} /> : active ? "•" : "·"}</b>
                  </div>
                );
              })}
              {mode === 2 && (
                <span className="engine-response">
                  ← Réponse de l’application · données simulées
                </span>
              )}
            </div>
            <div className="engine-code">
              <div className="engine-panel-title">
                <Code2 size={13} />
                <span>
                  {mode === 2 ? "deployment.config.ts" : "request.tsx"}
                </span>
                <span>TS</span>
              </div>
              <pre aria-label="Exemple de code TypeScript">
                {(mode === 2
                  ? [
                      "const deployment = {",
                      '  service: "application",',
                      '  proxy: "https",',
                      '  database: "postgresql",',
                      '  healthCheck: "/health",',
                      "};",
                    ]
                  : code
                ).map((line, i) => (
                  <span
                    key={i}
                    className={`engine-code-line ${phase >= 5 || i < Math.max(1, phase) ? "line-written" : ""}`}
                  >
                    <i>{i + 1}</i>
                    <code>{line || " "}</code>
                  </span>
                ))}
              </pre>
              <div className="engine-code-foot">
                <span>
                  {phase >= 5
                    ? "✓ Fonction complète"
                    : "▏ Écriture du composant"}
                </span>
                <span>TypeScript</span>
              </div>
            </div>
            <div
              className={`engine-preview ${phase >= 5 ? "preview-complete" : ""}`}
            >
              <div className="engine-panel-title">
                <span>APERÇU COMPOSANT</span>
                <span>↗</span>
              </div>
              <div className="engine-preview-inner">
                <span className="preview-check">
                  {phase >= 5 ? <CheckCheck size={21} /> : <Code2 size={21} />}
                </span>
                <strong>
                  {phase >= 5 ? "Demande confirmée" : "Votre demande"}
                </strong>
                <p>
                  {phase >= 5
                    ? "Le processus est prêt."
                    : "Construction de l’interface…"}
                </p>
                <span className="preview-button">
                  {phase >= 5 ? "Consulter le dossier ↗" : "— — —"}
                </span>
              </div>
            </div>
            <div className="engine-deploy">
              <div className="engine-panel-title">
                <span>
                  <Server size={13} /> DEPLOYMENT PIPELINE
                </span>
                <span>SIMULATION</span>
              </div>
              <div className="engine-deploy-states">
                {statuses.map((label, i) => (
                  <div
                    key={label}
                    className={deployment >= i ? "deploy-done" : ""}
                  >
                    <span>
                      {deployment >= i ? (
                        <Check size={11} />
                      ) : (
                        String(i + 1).padStart(2, "0")
                      )}
                    </span>
                    <b>{label}</b>
                  </div>
                ))}
              </div>
              <div className="engine-deploy-caption">
                {phase === 7
                  ? "✓ Health check simulé : réussi"
                  : "Validation avant mise à disposition"}
              </div>
            </div>
          </div>
          <div className="engine-console">
            <span className="engine-terminal-mark">›_</span>
            <span role="status" aria-live="off">
              {mode === 2
                ? phase === 7
                  ? "Requête traitée · réponse retournée"
                  : phase > 3
                    ? "Lecture des données · retour HTTP"
                    : "Acheminement de la requête"
                : events[phase]}
            </span>
            <span className="engine-console-end">
              {phase === 7 ? "COMPLETE" : "RUNNING"}
            </span>
          </div>
        </div>
      </div>
      <div className="engine-navigation">
        <div
          className="engine-tabs"
          role="tablist"
          aria-label="Mode du Digital Engine"
        >
          {modes.map((label, i) => (
            <button
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`engine-tab-${i}`}
              key={label}
              role="tab"
              aria-selected={selected === i}
              aria-controls="engine-panel"
              tabIndex={selected === i ? 0 : -1}
              onClick={() => choose(i)}
              onKeyDown={(e) => {
                if (
                  ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)
                ) {
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 2
                        : (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                  choose(next);
                  tabRefs.current[next]?.focus();
                }
              }}
            >
              <small>0{i + 1}</small>
              {label}
            </button>
          ))}
        </div>
        <div className="engine-playback">
          <button onClick={replay} aria-label="Rejouer le Digital Engine">
            <RotateCcw size={14} />
          </button>
          {reduced ? (
            <button
              onClick={() => setPhase((p) => Math.min(7, p + 1))}
              aria-label="Étape suivante du Digital Engine"
            >
              →
            </button>
          ) : (
            <button
              aria-label={
                playing
                  ? "Mettre le Digital Engine en pause"
                  : "Lire le Digital Engine"
              }
              onClick={() => {
                if (phase === 7) {
                  replay();
                  return;
                }
                if (playing) {
                  timeline.current?.pause();
                  userPaused.current = true;
                } else {
                  timeline.current?.resume();
                  userPaused.current = false;
                }
                setPlaying(!playing);
              }}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
          )}
        </div>
      </div>
      <div className="engine-footnote">
        <span>SCÉNARIO ILLUSTRATIF · AUCUNE OPÉRATION RÉELLE</span>
        <button onClick={finish}>Passer l’animation ↗</button>
      </div>
    </div>
  );
}
