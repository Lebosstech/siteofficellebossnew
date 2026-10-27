import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INITIAL_SERVICES } from '@/data/cms-seed-data';
import { ServiceLandingView } from '@/components/services/service-landing-view';

export async function generateStaticParams() {
  return [
    { slug: 'application-mobile-abidjan' },
    { slug: 'application-web-saas' },
    { slug: 'logiciel-sur-mesure-cote-ivoire' },
    { slug: 'integration-api-mobile-money' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = INITIAL_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Expertise Logicielle' };

  return {
    title: `${service.title} | LEBOSS TECH Abidjan`,
    description: service.shortDesc,
    alternates: { canonical: `https://lebosstech.ci/developpement/${service.slug}` },
  };
}

export default async function DeveloppementSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = INITIAL_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return <ServiceLandingView service={service} />;
}
