"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
const domains = [
  ["AUTOMATISATION", "automatisation"],
  ["DÉVELOPPEMENT", "developpement"],
  ["INFRASTRUCTURE", "cloud-infrastructure"],
  ["RÉSEAUX & SUPPORT", "maintenance"],
];
export function TechnologyCore() {
  const mount = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;
    if (reduced) {
      setReady(false);
      return;
    }
    import("three")
      .then((T) => {
        if (cancelled || !mount.current) return;
        const host = mount.current;
        let renderer: InstanceType<typeof T.WebGLRenderer>;
        try {
          renderer = new T.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
          });
        } catch {
          return;
        }
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
        host.appendChild(renderer.domElement);
        const scene = new T.Scene();
        const camera = new T.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(0, 1.3, 9);
        camera.lookAt(0, 0, 0);
        const group = new T.Group();
        scene.add(group);
        scene.add(new T.AmbientLight(0xffffff, 1.5));
        const light = new T.DirectionalLight(0xffffff, 4);
        light.position.set(3, 5, 4);
        scene.add(light);
        const rim = new T.PointLight(0xd6e3f2, 35);
        rim.position.set(-4, 1, 2);
        scene.add(rim);
        const material = new T.MeshStandardMaterial({
          color: 0x666b73,
          metalness: 0.9,
          roughness: 0.27,
        });
        const core = new T.Mesh(new T.OctahedronGeometry(1.05, 0), material);
        core.rotation.set(0.35, 0.5, 0.25);
        group.add(core);
        const edges = new T.LineSegments(
          new T.EdgesGeometry(core.geometry),
          new T.LineBasicMaterial({
            color: 0xd4d8df,
            transparent: true,
            opacity: 0.4,
          }),
        );
        core.add(edges);
        for (let i = 0; i < 3; i++) {
          const ring = new T.Mesh(
            new T.TorusGeometry(1.65 + i * 0.46, 0.014, 6, 80),
            material,
          );
          ring.rotation.set(Math.PI / 2 + (i - 1) * 0.4, 0.3 * i, 0.2);
          group.add(ring);
        }
        const count = window.innerWidth < 600 ? 8 : 16;
        const nodes: InstanceType<typeof T.Vector3>[] = [];
        const nodeMeshes: InstanceType<typeof T.Mesh>[] = [];
        const entrance = performance.now();
        for (let i = 0; i < count; i++) {
          const a = (i / count) * Math.PI * 2;
          const p = new T.Vector3(
            Math.cos(a) * 2.6,
            Math.sin(a * 2) * 0.6,
            Math.sin(a) * 2.2,
          );
          nodes.push(p);
          const box = new T.Mesh(new T.BoxGeometry(0.18, 0.18, 0.18), material);
          box.position.copy(p);
          nodeMeshes.push(box);
          group.add(box);
          const line = new T.Line(
            new T.BufferGeometry().setFromPoints([
              p.clone().multiplyScalar(0.44),
              p,
            ]),
            new T.LineBasicMaterial({
              color: 0x6b7078,
              transparent: true,
              opacity: 0.5,
            }),
          );
          group.add(line);
        }
        const packet = new T.Mesh(
          new T.SphereGeometry(0.045, 8, 8),
          new T.MeshBasicMaterial({ color: 0xff6a00 }),
        );
        group.add(packet);
        group.rotation.z = -0.13;
        let visible = true,
          frame = 0,
          last = 0;
        let px = 0,
          py = 0;
        const pointer = (e: PointerEvent) => {
          const r = host.getBoundingClientRect();
          px = ((e.clientX - r.left) / r.width - 0.5) * 0.13;
          py = ((e.clientY - r.top) / r.height - 0.5) * 0.09;
        };
        host.addEventListener("pointermove", pointer);
        const resize = new ResizeObserver(() => {
          const w = host.clientWidth,
            h = host.clientHeight;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        });
        resize.observe(host);
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        });
        observer.observe(host);
        function animate(t: number) {
          frame = requestAnimationFrame(animate);
          if (!visible || document.hidden || t - last < (count === 8 ? 30 : 14))
            return;
          last = t;
          const elapsed = t - entrance;
          nodeMeshes.forEach((mesh, i) => {
            mesh.scale.setScalar(
              Math.max(0.001, Math.min(1, (elapsed - i * 60) / 500)),
            );
          });
          const assembled = Math.min(1, elapsed / 1200);
          group.scale.setScalar(0.8 + 0.2 * (1 - Math.pow(1 - assembled, 3)));
          group.rotation.y += (px - group.rotation.y) * 0.08;
          group.rotation.x += (py - group.rotation.x) * 0.08;
          core.rotation.y = 0.5 + Math.sin(t * 0.0002) * 0.14;
          const p = nodes[Math.floor(t / 2200) % nodes.length];
          packet.position
            .copy(p)
            .multiplyScalar(0.44 + ((t % 2200) / 2200) * 0.56);
          renderer.render(scene, camera);
        }
        frame = requestAnimationFrame(animate);
        setReady(true);
        cleanup = () => {
          cancelAnimationFrame(frame);
          resize.disconnect();
          observer.disconnect();
          host.removeEventListener("pointermove", pointer);
          scene.traverse((obj) => {
            if (obj instanceof T.Mesh || obj instanceof T.Line) {
              obj.geometry.dispose();
              const mats = Array.isArray(obj.material)
                ? obj.material
                : [obj.material];
              mats.forEach((m) => m.dispose());
            }
          });
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {
        /* SVG remains visible if the renderer chunk cannot load. */
      });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [reduced]);
  return (
    <div className="core-scene">
      <div className="core-coordinates mono">
        <span>FIG. 01 — THE INTELLIGENT SYSTEM</span>
        <span>ABJ / 05.3097° N</span>
      </div>
      <div className="core-render" ref={mount} aria-hidden="true" />
      {!ready && (
        <svg className="core-fallback" viewBox="0 0 600 460" aria-hidden="true">
          <g fill="none" stroke="#656970">
            <ellipse
              cx="300"
              cy="230"
              rx="230"
              ry="85"
              transform="rotate(-25 300 230)"
            />
            <ellipse
              cx="300"
              cy="230"
              rx="180"
              ry="115"
              transform="rotate(25 300 230)"
            />
            <path fill="#191c21" d="M300 95 410 220 300 350 190 220Z" />
            <path d="m300 95 0 255m-110-130 220 0m-220 0 110 45 110-45" />
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i * Math.PI) / 4,
                x = 300 + 240 * Math.cos(a),
                y = 230 + 150 * Math.sin(a);
              return (
                <g key={i}>
                  <path d={`M300 230 ${x} ${y}`} />
                  <rect
                    x={x - 4}
                    y={y - 4}
                    width="8"
                    height="8"
                    fill={i === 0 ? "#ff6a00" : "#b4b7bd"}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      )}
      <div className="core-domains">
        {domains.map(([name, slug], i) => (
          <Link key={slug} href={`/expertises/${slug}`}>
            <span>0{i + 1}</span>
            {name}
            <b>↗</b>
          </Link>
        ))}
      </div>
      <div className="core-caption mono">
        <span>
          <i /> SYSTÈMES CONNECTÉS
        </span>
        <span>GÉOMÉTRIE ORIGINALE / 3D</span>
      </div>
    </div>
  );
}
