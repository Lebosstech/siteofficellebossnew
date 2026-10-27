'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface IntroSequenceProps {
  onComplete?: () => void;
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState<'calibrating' | 'focus' | 'reveal' | 'finished'>('calibrating');
  const [progress, setProgress] = useState(0);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this tab session
    const seen = sessionStorage.getItem('leboss_intro_seen');
    if (seen === '1') {
      setPhase('finished');
      setHasDismissed(true);
      onComplete?.();
      return;
    }

    // High precision counter animation
    const startTime = performance.now();
    const duration = 1400; // 1.4s counter

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Step to focus phase
        setPhase('focus');
        setTimeout(() => {
          setPhase('reveal');
          setTimeout(() => {
            setPhase('finished');
            setHasDismissed(true);
            sessionStorage.setItem('leboss_intro_seen', '1');
            onComplete?.();
          }, 850);
        }, 550);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('finished');
    setHasDismissed(true);
    sessionStorage.setItem('leboss_intro_seen', '1');
    onComplete?.();
  };

  if (hasDismissed || phase === 'finished') {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Introduction LEBOSS TECH"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#090A0B] transition-all duration-700 ${
        phase === 'reveal' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background radial calibration grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      {/* Skip button for zero friction navigation */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-30 technical-tag text-type-secondary hover:text-type-primary transition-colors py-2 px-4 border border-white/10 rounded-full bg-dark-surface/50 backdrop-blur-md"
      >
        Passer [ESC]
      </button>

      {/* Kinetic Ring & Geometric Assembly */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer Rotating Calibration Ring */}
        <div
          className={`relative flex items-center justify-center transition-transform duration-1000 ${
            phase === 'focus' ? 'scale-90' : 'scale-100'
          }`}
          style={{ width: 280, height: 280 }}
        >
          {/* SVG Precision Dial */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 280 280">
            {/* Background Track */}
            <circle
              cx="140"
              cy="140"
              r="120"
              fill="none"
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="1.5"
            />
            {/* Dynamic Counter Arc */}
            <circle
              cx="140"
              cy="140"
              r="120"
              fill="none"
              stroke="#FF6A00"
              strokeWidth="2"
              strokeDasharray={2 * Math.PI * 120}
              strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
              strokeLinecap="round"
              className="transition-all duration-75"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(255, 106, 0, 0.7))',
              }}
            />
            {/* Quadrant tick lines */}
            <line x1="140" y1="12" x2="140" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="140" y1="260" x2="140" y2="268" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="12" y1="140" x2="20" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="260" y1="140" x2="268" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </svg>

          {/* Central Logo Chamber — Strict Rule: Authenticity preserved, never distorted */}
          <div
            className={`relative z-10 flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-surface/90 border border-white/10 shadow-2xl transition-all duration-700 ${
              phase === 'focus' ? 'border-[#FF6A00]/40 shadow-[0_0_40px_rgba(255,106,0,0.2)]' : ''
            }`}
          >
            <div className="relative w-36 h-12 flex items-center justify-center">
              <Image
                src="/images/logo.webp"
                alt="LEBOSS TECH"
                fill
                priority
                className="object-contain"
                sizes="150px"
              />
            </div>

            {/* Micro Coordinates Bar */}
            <div className="mt-3 flex items-center gap-2 technical-tag text-[10px] text-type-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-ping" />
              <span>ABJ // 05°18&apos;N 03°59&apos;W</span>
            </div>
          </div>
        </div>

        {/* Telemetry percentage readout */}
        <div className="mt-8 flex flex-col items-center gap-1 font-mono text-xs tracking-widest text-type-secondary">
          <div className="flex items-center gap-2">
            <span className="text-[#FF6A00]">SYS.CALIBRATION</span>
            <span className="text-type-primary font-bold">
              {progress.toString().padStart(3, '0')}%
            </span>
          </div>
          <span className="text-[10px] text-type-tertiary">
            ARCHITECTURE STUDIO &bull; INITIATING
          </span>
        </div>
      </div>
    </div>
  );
}

