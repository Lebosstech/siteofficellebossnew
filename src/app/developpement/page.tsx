import type { Metadata } from 'next';
import { INITIAL_SERVICES } from '@/data/cms-seed-data';
import { ServiceLandingView } from '@/components/services/service-landing-view';

export const metadata: Metadata = {
  title: 'Développement Logiciel, Applications Mobiles & SaaS à Abidjan',
  description:
    'LEBOSS TECH conçoit vos applications mobiles Android/iOS, plateformes web SaaS, logiciels de gestion sur mesure et intégrations API Mobile Money en Côte d’Ivoire.',
  alternates: { canonical: 'https://lebosstech.ci/developpement' },
};

export default function DeveloppementPage() {
  const service = INITIAL_SERVICES.find((s) => s.slug === 'developpement') || INITIAL_SERVICES[0];
  return <ServiceLandingView service={service} />;
}
