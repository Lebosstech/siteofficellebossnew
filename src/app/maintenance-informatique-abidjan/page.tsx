import type { Metadata } from 'next';
import { INITIAL_SERVICES } from '@/data/cms-seed-data';
import { ServiceLandingView } from '@/components/services/service-landing-view';

export const metadata: Metadata = {
  title: 'Maintenance Informatique, Infogérance & Support PME à Abidjan',
  description:
    'Contrats de maintenance informatique préventive et curative, dépannage d’ordinateurs et d’imprimantes, sauvegarde et infogérance pour les PME à Abidjan.',
  alternates: { canonical: 'https://lebosstech.ci/maintenance-informatique-abidjan' },
};

export default function MaintenanceInformatiquePage() {
  const service =
    INITIAL_SERVICES.find((s) => s.slug === 'maintenance-informatique-abidjan') ||
    INITIAL_SERVICES[7];
  return <ServiceLandingView service={service} />;
}
