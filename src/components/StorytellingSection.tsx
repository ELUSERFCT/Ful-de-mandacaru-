import React from 'react';
import { RESTAURANT_INFO, GASTRONOMY_PILLARS } from '../data/restaurantData';
import { Sparkles, Award } from 'lucide-react';

export const StorytellingSection: React.FC = () => {
  return (
    <section id="o-sabor" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tradição & Autenticidade</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-serif mb-5 leading-tight">
            {RESTAURANT_INFO.subheading}
          </h2>

          <p className="text-lg sm:text-xl text-amber-300 font-medium leading-relaxed">
            {RESTAURANT_INFO.uniquePosition}
          </p>
        </div>

        {/* Western SP highlight card preserved */}
        <div className="my-10 max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-amber-400/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 font-serif">
                  Oeste Paulista com alma nordestina
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Localizado em Presidente Prudente - SP, o Fulô de Mandacaru Bistrô é o refúgio para quem busca a riqueza, os aromas e o sabor genuíno do Nordeste.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Gastronomy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 pt-8 border-t border-zinc-900">
          {GASTRONOMY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-400/40 transition-all duration-300 group"
            >
              <span className="text-amber-400/60 font-mono text-xs font-bold block mb-2">0{idx + 1}.</span>
              <h3 className="text-white font-serif font-bold text-base mb-1 group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-amber-300/80 text-xs font-medium mb-2">{pillar.subtitle}</p>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
