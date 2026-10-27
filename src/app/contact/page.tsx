import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { QuoteQualificationForm } from '@/components/corporate/quote-qualification-form';
import { OFFICIAL_PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact & Demande de Devis B2B (Logiciel, Matériel, Réseau) à Abidjan',
  description:
    'Contactez LEBOSS TECH SARL à Abidjan (+225 05 66 82 16 09 / contact@lebosstech.ci) pour un devis matériel informatique, développement logiciel ou contrat de maintenance.',
  alternates: { canonical: 'https://lebosstech.ci/contact' },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const produit = typeof sp.produit === 'string' ? sp.produit : undefined;
  const sku = typeof sp.sku === 'string' ? sp.sku : undefined;
  const defaultProduct = produit ? `${produit}${sku ? ` (${sku})` : ''}` : undefined;

  const whatsappUrl = getWhatsAppUrl(
    'Bonjour LEBOSS TECH, je vous contacte depuis la page Contact de lebosstech.ci.'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dark Header */}
      <section className="bg-tech-grid text-white py-16 md:py-24 border-b border-white/10">
        <div className="container-leboss max-w-4xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-leboss-500/20 border border-leboss-500/40 text-leboss-400 text-xs font-extrabold uppercase tracking-wider mb-4">
            Contact &amp; Cadrage de Projet
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Parlons de votre besoin technologique.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Que vous recherchiez un devis pour équiper votre entreprise, une démonstration de nos logiciels ou un accompagnement en ingénierie logicielle et réseau, notre équipe basée à Abidjan vous répond sous 2h ouvrées.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section id="devis" className="py-16 scroll-mt-20">
        <div className="container-leboss grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-card space-y-5">
              <h2 className="text-lg font-extrabold text-navy-950">Coordonnées Directes</h2>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-10 h-10 rounded-xl bg-leboss-50 text-leboss-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold uppercase text-slate-400">Téléphone &amp; WhatsApp</p>
                  <a href="tel:+2250566821609" className="text-base font-extrabold text-navy-950 hover:text-leboss-600">
                    {OFFICIAL_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-10 h-10 rounded-xl bg-leboss-50 text-leboss-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold uppercase text-slate-400">E-mail Commercial</p>
                  <a href="mailto:contact@lebosstech.ci" className="text-sm font-extrabold text-navy-950 hover:text-leboss-600">
                    contact@lebosstech.ci
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-10 h-10 rounded-xl bg-leboss-50 text-leboss-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold uppercase text-slate-400">Localisation Abidjan</p>
                  <p className="text-sm font-bold text-navy-950">
                    Marcory Anoumabo &amp; Adjamé, Abidjan, Côte d&apos;Ivoire
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-10 h-10 rounded-xl bg-leboss-50 text-leboss-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold uppercase text-slate-400">Horaires d&apos;ouverture</p>
                  <p className="text-sm font-bold text-navy-950">Lundi – Samedi : 08h00 – 19h00</p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Discuter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Qualification Form (8 cols) */}
          <div className="lg:col-span-8">
            <QuoteQualificationForm
              defaultProduct={defaultProduct}
              defaultServiceType={defaultProduct ? 'HARDWARE' : 'SOFTWARE'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
