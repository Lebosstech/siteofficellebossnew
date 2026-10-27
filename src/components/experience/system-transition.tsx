"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const states = [
  [
    [40, 32],
    [65, 12],
    [115, 8],
    [170, 15],
    [200, 32],
    [170, 50],
    [115, 56],
    [65, 50],
  ],
  [
    [30, 15],
    [90, 15],
    [150, 15],
    [210, 15],
    [210, 48],
    [150, 48],
    [90, 48],
    [30, 48],
  ],
  [
    [35, 10],
    [90, 10],
    [150, 10],
    [205, 10],
    [205, 54],
    [150, 54],
    [90, 54],
    [35, 54],
  ],
  [
    [25, 15],
    [85, 15],
    [145, 15],
    [205, 15],
    [205, 49],
    [145, 49],
    [85, 49],
    [25, 49],
  ],
  [
    [30, 12],
    [90, 12],
    [150, 12],
    [210, 12],
    [210, 52],
    [150, 52],
    [90, 52],
    [30, 52],
  ],
];
const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [1, 6],
  [2, 5],
];
export function SystemTransition({ stage }: { stage: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const from = states[Math.min(stage, 3)],
    to = states[Math.min(stage + 1, 4)];
  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const svg = ref.current;
    const dots = svg.querySelectorAll("circle"),
      lines = svg.querySelectorAll("line");
    const render = (progress: number) => {
      const points = from.map(([x, y], i) => [
        x + (to[i][0] - x) * progress,
        y + (to[i][1] - y) * progress,
      ]);
      dots.forEach((dot, i) => {
        dot.setAttribute("cx", String(points[i][0]));
        dot.setAttribute("cy", String(points[i][1]));
      });
      lines.forEach((line, i) => {
        const [a, b] = connections[i];
        line.setAttribute("x1", String(points[a][0]));
        line.setAttribute("y1", String(points[a][1]));
        line.setAttribute("x2", String(points[b][0]));
        line.setAttribute("y2", String(points[b][1]));
      });
    };
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = { progress: 0 };
      gsap.to(tween, {
        progress: 1,
        ease: "none",
        onUpdate: () => render(tween.progress),
        scrollTrigger: {
          trigger: svg,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, [from, to]);
  return (
    <svg
      className="system-transition"
      ref={ref}
      viewBox="0 0 240 64"
      aria-hidden="true"
    >
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={from[a][0]}
          y1={from[a][1]}
          x2={from[b][0]}
          y2={from[b][1]}
        />
      ))}
      {from.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 2.5 : 1.5} />
      ))}
    </svg>
  );
}
