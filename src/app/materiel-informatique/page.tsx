import type { Metadata } from 'next';
import { INITIAL_SERVICES } from '@/data/cms-seed-data';
import { ServiceLandingView } from '@/components/services/service-landing-view';

export const metadata: Metadata = {
  title: 'Fourniture de Matériel Informatique Professionnel & Parcs B2B à Abidjan',
  description:
    'Centrale d’achat informatique LEBOSS TECH à Abidjan : ordinateurs portables HP/Dell/Lenovo, postes de bureau, imprimantes LaserJet, onduleurs APC et équipements réseaux garantis.',
  alternates: { canonical: 'https://lebosstech.ci/materiel-informatique' },
};

export default function MaterielInformatiquePage() {
  const service =
    INITIAL_SERVICES.find((s) => s.slug === 'materiel-informatique') || INITIAL_SERVICES[5];
  return <ServiceLandingView service={service} />;
}
