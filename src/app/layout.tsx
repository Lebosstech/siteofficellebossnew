import type { Metadata } from "next";

import "./globals.css";
import "./experience.css";
import "./gravity.css";
import "@fontsource/raleway/latin-400.css";
import "@fontsource/raleway/latin-500.css";
import "@fontsource/raleway/latin-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import { StudioHeader } from "@/components/layout/studio-header";
import { StudioFooter } from "@/components/layout/studio-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lebosstech.ci"),
  title: {
    default:
      "LEBOSS TECH — Studio Technologique & Ingénierie Numérique Haut de Gamme",
    template: "%s | LEBOSS TECH",
  },
  description:
    "Studio technologique d’ingénierie logicielle, d’architectures distribuées et d’infrastructures informatiques d’entreprise basé à Abidjan, Côte d’Ivoire.",
  keywords: [
    "LEBOSS TECH",
    "studio technologique Abidjan",
    "ingénierie logicielle Côte d’Ivoire",
    "architecture microservices",
    "développement sur mesure",
    "Mon Gestionnaire Pro",
    "SRA logistique",
    "Lounan",
    "Djonan",
  ],
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: "https://lebosstech.ci",
    siteName: "LEBOSS TECH",
    title: "LEBOSS TECH — Luxury Technology Studio",
    description:
      "Nous imaginons. Nous concevons. Nous développons. Studio d’ingénierie et de transformation technologique à Abidjan.",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "LEBOSS TECH — Luxury Technology Studio",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="gravity-design">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <>
          <StudioHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <StudioFooter />
        </>
      </body>
    </html>
  );
}
