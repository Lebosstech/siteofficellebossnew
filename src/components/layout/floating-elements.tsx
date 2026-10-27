'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function FloatingElements() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const whatsappUrl = getWhatsAppUrl(
    'Bonjour LEBOSS TECH, je vous contacte depuis votre plateforme lebosstech.ci.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Remonter en haut de page"
          className="w-11 h-11 rounded-2xl bg-navy-950/90 hover:bg-navy-900 text-white border border-white/15 shadow-lg flex items-center justify-center transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs shadow-xl transition-all"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Discuter sur WhatsApp</span>
      </a>
    </div>
  );
}
