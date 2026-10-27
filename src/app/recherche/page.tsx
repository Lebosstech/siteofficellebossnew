import { redirect } from 'next/navigation';

export default async function RechercheRedirectPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const q = typeof sp.q === 'string' ? sp.q : '';
  redirect(q ? `/produits?q=${encodeURIComponent(q)}` : '/produits');
}
