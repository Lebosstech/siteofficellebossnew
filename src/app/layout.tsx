import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingElements } from '@/components/layout/floating-elements';

export const metadata: Metadata = {
  metadataBase: new URL('https://lebosstech.ci'),
  title: {
    default: 'LEBOSS TECH — Ingénierie Logicielle, Matériel Informatique & Infrastructure IT à Abidjan',
    template: '%s | LEBOSS TECH',
  },
  description:
    'Entreprise de Services Numériques (ESN), éditeur de logiciels métier (Mon Gestionnaire Pro, SRA, Lounan, Djonan) et centrale de matériel informatique professionnel & maintenance IT à Abidjan, Côte d’Ivoire.',
  keywords: [
    'LEBOSS TECH',
    'ESN Abidjan',
    'développement logiciel Côte d’Ivoire',
    'application mobile Abidjan',
    'matériel informatique Abidjan',
    'ordinateur portable professionnel Abidjan',
    'maintenance informatique PME Abidjan',
    'installation réseau informatique Abidjan',
    'Mon Gestionnaire Pro',
    'Lounan',
    'Djonan',
    'SRA livraison',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: 'https://lebosstech.ci',
    siteName: 'LEBOSS TECH',
    title: 'LEBOSS TECH — Votre Technologie. Notre Expertise.',
    description:
      'Équipements informatiques, infrastructures réseau, développement logiciel et maintenance : LEBOSS TECH accompagne les entreprises dans leur performance numérique.',
    images: [
      {
        url: '/images/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'LEBOSS TECH — Ingénierie Logicielle, Matériel & Infrastructure IT',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-navy-950 font-sans">
        <CartProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingElements />
        </CartProvider>
      </body>
    </html>
  );
}
