import type { Metadata } from 'next';
import { INITIAL_SERVICES } from '@/data/cms-seed-data';
import { ServiceLandingView } from '@/components/services/service-landing-view';

export const metadata: Metadata = {
  title: 'Installation Réseau Informatique, Câblage RJ45/Fibre & Wi-Fi Pro à Abidjan',
  description:
    'Déploiement d’infrastructures réseaux LAN/VLAN, baies de brassage, câblage structuré Cat6/Fibre, Wi-Fi professionnel Ubiquiti/Cisco et vidéosurveillance IP à Abidjan.',
  alternates: { canonical: 'https://lebosstech.ci/installation-reseau-informatique-abidjan' },
};

export default function InstallationReseauPage() {
  const service =
    INITIAL_SERVICES.find((s) => s.slug === 'installation-reseau-informatique-abidjan') ||
    INITIAL_SERVICES[6];
  return <ServiceLandingView service={service} />;
}
