'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Terminal, Activity, Zap } from 'lucide-react';

export function HeroInteractiveScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(6);
  const [rotateY, setRotateY] = useState(-8);
  const [activeNode, setActiveNode] = useState<string>('core-kernel');
  const [livePackets, setLivePackets] = useState(1482);

  // Live packet count increment for authentic living system sensation
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePackets((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Smooth pointer parallax on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt constraint (-8 to +8 degrees)
    const newRotateY = ((x - centerX) / centerX) * 8;
    const newRotateX = -((y - centerY) / centerY) * 8;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const handleMouseLeave = () => {
    // Return to default elegant isometric angle
    setRotateX(5);
    setRotateY(-6);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Subtle Radial Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.04),transparent_65%)] pointer-events-none" />

      {/* Grid Hairlines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Continuous Light Stream - Relay inspired vertical hairline */}
      <div className="vertical-light-track">
        <div className="vertical-light-pulse" />
      </div>

      <div className="studio-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Status indicator capsule */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-surface/80 border border-white/[0.08] backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
              <span className="technical-tag text-[10px] text-type-secondary">
                STUDIO D&apos;INGÉNIERIE &bull; ABIDJAN
              </span>
            </div>

            {/* Imposing Grotesque Heading */}
            <h1 className="display-hero text-3xl sm:text-6xl xl:text-7xl text-type-primary font-display font-medium tracking-tightest leading-[1.08] break-words">
              Nous imaginons.<br />
              Nous concevons.<br />
              <span className="text-white">Nous développons.</span>
            </h1>

            {/* Secondary Paragraph */}
            <p className="mt-8 text-type-secondary text-base sm:text-lg lg:text-xl font-sans max-w-xl leading-relaxed">
              LEBOSS TECH accompagne les organisations dans la conception de solutions numériques, l&apos;ingénierie informatique et la transformation critique de leurs activités.
            </p>

            {/* Technical Metadata Matrix */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 hairline-t w-full max-w-lg">
              <div>
                <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                  INFRASTRUCTURE
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold text-type-primary">
                  SYSCOHADA &bull; FNE
                </span>
              </div>
              <div>
                <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                  DISPONIBILITÉ
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold text-type-primary">
                  99.98% SLA
                </span>
              </div>
              <div>
                <span className="technical-tag text-[10px] text-type-tertiary block mb-1">
                  TÉLÉMÉTRIE
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold text-accent-orange">
                  18ms // ABJ
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/work" className="btn-studio group">
                <span>DÉCOUVRIR LES RÉALISATIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/studio" className="btn-studio-ghost">
                <span>NOTRE PHILOSOPHIE</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Tilted Glass Viewport / Living Interface */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative perspective-viewport flex items-center justify-center min-h-[460px] lg:min-h-[580px] w-full"
          >
            {/* Ambient Back Glow Behind Tilted Window */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.08),transparent_70%)] pointer-events-none" />

            {/* The 3D Glass Window Container */}
            <div
              className="relative w-full max-w-lg rounded-2xl glass-card border border-white/[0.12] p-6 transition-transform duration-300 ease-out preserve-3d shadow-2xl"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
            >
              {/* Window Header Bar */}
              <div className="flex items-center justify-between pb-4 hairline-b mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-[10px] text-type-secondary tracking-widest uppercase">
                    leboss.kernel // runtime-v4.2
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-accent-orange">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SYNC ACTIVE</span>
                </div>
              </div>

              {/* Central Architectural Topology Diagram */}
              <div className="space-y-4">
                {/* Node 1: Edge Ingestion & Security */}
                <div
                  onClick={() => setActiveNode('edge-security')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeNode === 'edge-security'
                      ? 'border-accent-orange/40 bg-white/[0.04] shadow-[0_0_20px_rgba(255,106,0,0.1)]'
                      : 'border-white/[0.06] bg-dark-surface/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-accent-orange" />
                      <span className="font-mono text-xs font-semibold text-type-primary">
                        01. EDGE &amp; PASS-THROUGH GATEWAY
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      TLS 1.3 OK
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-type-secondary">
                    <span>Flux Mobile Money (Wave, Orange, MTN)</span>
                    <span className="text-type-primary">0.02% failover</span>
                  </div>
                </div>

                {/* Node 2: Core Distributed Kernel */}
                <div
                  onClick={() => setActiveNode('core-kernel')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeNode === 'core-kernel'
                      ? 'border-accent-orange/40 bg-white/[0.04] shadow-[0_0_20px_rgba(255,106,0,0.1)]'
                      : 'border-white/[0.06] bg-dark-surface/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-accent-orange" />
                      <span className="font-mono text-xs font-semibold text-type-primary">
                        02. TRANSACTION KERNEL // SYSCOHADA
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-accent-orange bg-accent-orange/10 px-2 py-0.5 rounded-full">
                      ACTIVE RUNNER
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-type-secondary">
                    <span>Moteur POS offline-first &amp; Sync cloud</span>
                    <span className="text-type-primary">{livePackets} ops/sec</span>
                  </div>
                </div>

                {/* Node 3: Event Bus & Real-time Dispatch */}
                <div
                  onClick={() => setActiveNode('event-bus')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeNode === 'event-bus'
                      ? 'border-accent-orange/40 bg-white/[0.04] shadow-[0_0_20px_rgba(255,106,0,0.1)]'
                      : 'border-white/[0.06] bg-dark-surface/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-accent-orange" />
                      <span className="font-mono text-xs font-semibold text-type-primary">
                        03. LOGISTICS DISPATCH &amp; GPS ENGINE
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-type-secondary bg-white/5 px-2 py-0.5 rounded-full">
                      SRA ROUTING
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-type-secondary">
                    <span>Abidjan 10 communes &bull; Latence 14ms</span>
                    <span className="text-emerald-400">P99 22ms</span>
                  </div>
                </div>
              </div>

              {/* Terminal Readout Console */}
              <div className="mt-6 p-3 rounded-lg bg-[#090A0B]/90 border border-white/[0.06] font-mono text-[10px] text-type-secondary space-y-1">
                <div className="flex items-center gap-2 text-type-tertiary">
                  <Terminal className="w-3 h-3 text-accent-orange" />
                  <span>leboss-agent &mdash; telemetry stream</span>
                </div>
                <div className="text-type-primary truncate">
                  &gt; node [{activeNode}] calibrated: routing 100% requests with zero downtime
                </div>
              </div>

              {/* Physical Floating Depth Pill */}
              <div
                className="absolute -bottom-4 -right-4 p-3 rounded-xl bg-dark-surface2 border border-white/15 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-2 h-2 rounded-full bg-accent-orange animate-ping" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-type-tertiary">DISPATCH ABIDJAN</span>
                  <span className="text-xs font-mono font-bold text-type-primary">CLUSTER CI-01</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
