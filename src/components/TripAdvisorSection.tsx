import React from 'react';
import { TripAdvisorBadge } from './TripAdvisorBadge';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ExternalLink, Star } from 'lucide-react';

export const TripAdvisorSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Subtle emerald ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Title */}
        <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
          Excelência Comprovada
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-4">
          RECONHECIDO PELOS NOSSOS CLIENTES
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Nosso compromisso diário com a comida nordestina nativa reflete em cada avaliação de quem nos visita em Presidente Prudente.
        </p>

        {/* 3D Highlight TripAdvisor Badge Container */}
        <div className="flex flex-col items-center justify-center my-6">
          <div className="p-4 rounded-3xl bg-zinc-900/60 border border-emerald-500/20 backdrop-blur-sm shadow-2xl">
            <TripAdvisorBadge size="lg" />
          </div>

          <div className="flex items-center gap-1.5 mt-6 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-xs text-zinc-400 mt-2">
            Prêmio <span className="text-emerald-400 font-semibold">Travelers’ Choice™</span> TripAdvisor
          </p>

          <a
            href={RESTAURANT_INFO.tripAdvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-sm font-bold transition-all shadow-md active:scale-95"
          >
            <span>Ver perfil no TripAdvisor</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
