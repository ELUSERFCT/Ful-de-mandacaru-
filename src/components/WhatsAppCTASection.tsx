import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react';

export const WhatsAppCTASection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden border-t border-zinc-900">
      {/* Radiant amber spotlight behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
          
          {/* Glowing Pill Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atendimento Rápido & Personalizado</span>
          </div>

          {/* User Requested Statement */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white tracking-tight leading-tight max-w-2xl mx-auto mb-4">
            O único e melhor restaurante de comida nordestina nativa.
            <span className="block text-amber-400 mt-1">Aqui no Oeste Paulista!</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Reserve sua mesa, consulte os pratos do dia ou faça seu pedido diretamente com nossa equipe em Presidente Prudente - SP.
          </p>

          {/* Large CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-amber-400 text-black font-extrabold text-base md:text-lg shadow-[0_10px_30px_rgba(250,204,21,0.4)] hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 fill-black text-black transition-transform group-hover:rotate-12" />
              <span>FALE CONOSCO NO WHATSAPP</span>
            </a>
          </div>

          {/* Quick Info Badges */}
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{RESTAURANT_INFO.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{RESTAURANT_INFO.city}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Almoço & Jantar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
