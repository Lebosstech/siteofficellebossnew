"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, X, RotateCcw, Sparkles } from "lucide-react";
const palettes = [
  {
    id: "royal",
    name: "Royal Blue & Pearl",
    description: "Cobalt et reflets nacrés sur un horizon clair.",
    color: "#2F69FF",
  },
  {
    id: "rose",
    name: "Rose Blush & Crème",
    description: "Verre rosé, surfaces douces et lumière perlée.",
    color: "#FFC5C2",
  },
  {
    id: "lime",
    name: "Volt Lime & Slate",
    description: "Contraste électrique dans un studio lumineux.",
    color: "#E1FC03",
  },
  {
    id: "arctic",
    name: "Arctic Sky & Crystal",
    description: "Bleu arctique et profondeur cristalline.",
    color: "#96E5FF",
  },
];
export function GravityExperience() {
  const container = useRef<HTMLDivElement>(null),
    canvas = useRef<HTMLCanvasElement>(null),
    dialog = useRef<HTMLDialogElement>(null);
  const [theme, setTheme] = useState(0),
    [open, setOpen] = useState(false),
    [progress, setProgress] = useState(0),
    [revealed, setRevealed] = useState(false),
    [fallback, setFallback] = useState(false),
    [reduced, setReduced] = useState(false),
    [paused, setPaused] = useState(false);
  const revealedRef = useRef(false);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reduced || paused) return;
    let target = window.scrollY,
      expected = window.scrollY,
      frame = 0;
    const wheel = (e: WheelEvent) => {
      if (
        e.ctrlKey ||
        dialog.current?.open ||
        (e.target instanceof Element &&
          e.target.closest(
            "input, textarea, select, #mobile-nav, [data-lenis-prevent]",
          ))
      )
        return;
      e.preventDefault();
      const delta =
        e.deltaMode === 1
          ? e.deltaY * 16
          : e.deltaMode === 2
            ? e.deltaY * innerHeight
            : e.deltaY;
      target = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - innerHeight,
          target + delta,
        ),
      );
    };
    const sync = () => {
      if (Math.abs(window.scrollY - expected) > 2) target = window.scrollY;
    };
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (
        document.hidden ||
        dialog.current?.open ||
        document.body.style.overflow === "hidden"
      ) {
        target = window.scrollY;
        return;
      }
      const delta = target - window.scrollY;
      if (Math.abs(delta) > 0.5) {
        expected = window.scrollY + delta * 0.09;
        window.scrollTo(0, expected);
      }
    };
    addEventListener("wheel", wheel, { passive: false });
    addEventListener("scroll", sync, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("wheel", wheel);
      removeEventListener("scroll", sync);
    };
  }, [reduced, paused]);
  useEffect(() => {
    if (!open) {
      dialog.current?.close();
      return;
    }
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    let cancelled = false,
      system: { start: () => void; dispose: () => void } | undefined,
      frame = 0,
      ready = false;
    let value = 0,
      last = performance.now(),
      done = false;
    const noMotion = reduced || paused;
    function reveal() {
      if (done) return;
      done = true;
      setProgress(100);
      setRevealed(true);
      revealedRef.current = true;
      system?.start();
    }
    function tick(now: number) {
      if (cancelled || done) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      value += ((ready ? 100 : 92) - value) * (ready ? 6 : 1.7) * dt;
      if (ready && value >= 99.4) {
        reveal();
        return;
      }
      setProgress(value);
      frame = requestAnimationFrame(tick);
    }
    if (!revealedRef.current && !noMotion) {
      setProgress(0);
      frame = requestAnimationFrame(tick);
    }
    const timeout = setTimeout(() => {
      if (!ready) {
        setFallback(true);
        reveal();
      }
    }, 9000);
    import("./gravity-runtime")
      .then(({ createGravitySystem }) => {
        if (cancelled || !container.current || !canvas.current) return;
        try {
          system = createGravitySystem({
            container: container.current,
            canvas: canvas.current,
            ballColor: palettes[theme].color,
            reducedMotion: noMotion,
            onReady: () => {
              ready = true;
              clearTimeout(timeout);
              if (noMotion || revealedRef.current) reveal();
            },
          });
          if (revealedRef.current) system.start();
          setFallback(false);
        } catch {
          setFallback(true);
          reveal();
        }
      })
      .catch(() => {
        setFallback(true);
        reveal();
      });
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
      system?.dispose();
    };
  }, [theme, reduced, paused]);
  useEffect(() => {
    document.documentElement.classList.toggle("gravity-revealed", revealed);
    return () => document.documentElement.classList.remove("gravity-revealed");
  }, [revealed]);
  return (
    <>
      <div
        className={`gravity-field palette-${theme} ${fallback ? "gravity-fallback" : ""}`}
        ref={container}
        data-stage="0"
        aria-hidden="true"
      >
        <div className="gravity-gradient" />
        <canvas ref={canvas} />
        {fallback && (
          <div className="gravity-static-orbs">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
      {hydrated && !revealed && (
        <div
          className="gravity-loader"
          aria-label="Préparation du décor interactif"
        >
          <span>CALIBRAGE DU STUDIO</span>
          <div className="loader-track">
            <i style={{ width: `${progress}%` }} />
          </div>
          <b>{String(Math.round(progress)).padStart(3, "0")}%</b>
          <button
            onClick={() => {
              setRevealed(true);
              revealedRef.current = true;
            }}
          >
            Passer l’introduction →
          </button>
        </div>
      )}
      {hydrated &&
        createPortal(
          <button
            className="gravity-controls-trigger"
            aria-label="Ouvrir les réglages du studio"
            onClick={() => setOpen(true)}
          >
            <SlidersHorizontal size={17} />
          </button>,
          document.body,
        )}
      <dialog
        ref={dialog}
        className="gravity-controls"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const r = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              setOpen(false);
          }
        }}
      >
        <div className="gravity-controls-header">
          <SlidersHorizontal size={17} />
          <h2>Réglages du studio</h2>
          <button
            aria-label="Fermer les réglages"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <p>
          Choisissez la palette du décor d’accueil. Au fil du défilement, les
          sphères passent au vert citron, puis au rose et se rassemblent en
          cœur.
        </p>
        <h3>
          <Sparkles size={14} /> Palette des sphères
        </h3>
        <div className="gravity-palette-list">
          {palettes.map((p, i) => (
            <button
              key={p.id}
              aria-pressed={theme === i}
              onClick={() => setTheme(i)}
            >
              <span>
                <b>{p.name}</b>
                <i style={{ background: p.color }} />
              </span>
              <small>{p.description}</small>
            </button>
          ))}
        </div>
        <button className="gravity-reset" onClick={() => setTheme(0)}>
          <RotateCcw size={14} /> Réinitialiser
        </button>
        <button
          className="gravity-pause"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
        >
          {paused
            ? "Reprendre les animations"
            : "Mettre les animations en pause"}
        </button>
        <div className="gravity-render-info">
          <span>RENDU / THREE.JS WEBGL</span>
          <span>DYNAMIQUE / COLLISIONS 3D</span>
          <span>
            {reduced
              ? "MOUVEMENT RÉDUIT ACTIVÉ"
              : "DÉCOR INTERACTIF PROCÉDURAL"}
          </span>
        </div>
      </dialog>
    </>
  );
}
