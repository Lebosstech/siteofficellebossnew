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
        leboss: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6A00', // Orange officiel LEBOSS TECH
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0b1220',
          950: '#060b14', // Noir profond architectural
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(6, 11, 20, 0.05)',
        card: '0 4px 20px -2px rgba(6, 11, 20, 0.05), 0 1px 3px 0 rgba(6, 11, 20, 0.03)',
        'card-hover': '0 24px 48px -12px rgba(6, 11, 20, 0.14), 0 4px 14px -2px rgba(255, 106, 0, 0.10)',
        'glow-orange': '0 10px 30px -5px rgba(255, 106, 0, 0.42)',
        premium: '0 20px 50px -12px rgba(6, 11, 20, 0.08)',
        'premium-lg': '0 25px 60px -15px rgba(6, 11, 20, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
