import React from 'react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/home/contact-section';

export const metadata: Metadata = {
  title: 'Contact & Dialogue Technique — Studio LEBOSS TECH Abidjan',
  description:
    'Contactez la direction d’ingénierie de LEBOSS TECH à Abidjan pour soumettre un projet technologique d’envergure ou demander un audit de système.',
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
}
