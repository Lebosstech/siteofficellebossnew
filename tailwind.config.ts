import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090A0B',
          surface: '#141517',
          surface2: '#1A1C1E',
          surface3: '#22252A',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderStrong: 'rgba(255, 255, 255, 0.16)',
        },
        type: {
          primary: '#F5F5F3',
          secondary: '#96989C',
          tertiary: '#61646B',
          inverted: '#090A0B',
        },
        accent: {
          orange: '#FF6A00',
          orangeSubtle: 'rgba(255, 106, 0, 0.12)',
          orangeHover: '#FF7D1E',
          cream: '#F2F0EC',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'Syne', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wideMono: '0.12em',
        widestMono: '0.2em',
      },
      boxShadow: {
        glass: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.15)',
        'orange-laser': '0 0 20px -2px rgba(255, 106, 0, 0.35)',
        'orange-dot': '0 0 10px rgba(255, 106, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'light-flow': 'lightFlow 6s linear infinite',
        'glow-scan': 'glowScan 4s ease-in-out infinite',
      },
      keyframes: {
        lightFlow: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glowScan: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.98)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
