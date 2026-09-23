import React from 'react';
import { FuloLogo } from './FuloLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle, Instagram, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-zinc-900">
          
          {/* Logo & Brand Identity */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4">
              <FuloLogo size="sm" withGlow={false} />
            </div>
            <h3 className="text-xl font-bold font-serif text-white tracking-wide">
              {RESTAURANT_INFO.name}
            </h3>
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mt-1">
              {RESTAURANT_INFO.category}
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-sm">
              {RESTAURANT_INFO.tagline} {RESTAURANT_INFO.uniquePosition}
            </p>
          </div>

          {/* Direct Contacts & Location */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
              Contato & Localização
            </span>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{RESTAURANT_INFO.city}</span>
            </a>

            <div className="text-xs text-zinc-500 pt-1">
              Atendimento presencial e pedidos pelo WhatsApp
            </div>
          </div>

          {/* Social Quick Links & Scroll to Top */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-black hover:bg-amber-400 transition-all"
                aria-label="WhatsApp do Restaurante"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 transition-all"
                aria-label="Instagram do Restaurante"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-black hover:bg-emerald-400 transition-all text-xs font-bold"
                aria-label="TripAdvisor do Restaurante"
              >
                TA
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors font-medium pt-2"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. Todos os direitos reservados.</p>
          <p className="text-zinc-400">
            Presidente Prudente - SP · Telefone: {RESTAURANT_INFO.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};
