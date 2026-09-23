import React from 'react';
import { FuloLogo } from './FuloLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle, ChevronDown, UtensilsCrossed } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenOrderModal,
}) => {
  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 py-8 overflow-hidden bg-black text-white">
      {/* Background with Ken Burns zoom and dark gastronomic overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/images/hero_northeastern_dish_1790151439260.jpg"
          alt="Prato nordestino tradicional com carne de sol e baião de dois"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_14s_ease-in-out_infinite] opacity-35"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic scrims to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        
        {/* Subtle warm golden ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[600px] md:h-[600px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Top subtle location bar */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs tracking-widest uppercase text-amber-300/80 pt-2 border-b border-white/10 pb-3">
        <span className="font-medium text-amber-400">Presidente Prudente · SP</span>
        <span className="text-zinc-400 hidden sm:inline">Oeste Paulista</span>
        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-0.5" />
          Aberto para atendimento
        </a>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center my-auto py-6">
        {/* Prominent Large Logo with 3D depth and warm glow */}
        <div className="mb-6 transform transition-all duration-700 ease-out hover:scale-105">
          <FuloLogo size="xl" withGlow={true} />
        </div>

        {/* Bio Instagram Callouts */}
        <div className="space-y-3 max-w-lg px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-serif drop-shadow-md">
            {RESTAURANT_INFO.tagline}
          </h1>

          <p className="text-amber-400 font-medium text-sm sm:text-base tracking-wide uppercase">
            {RESTAURANT_INFO.category}
          </p>

          <p className="text-zinc-300 text-base sm:text-lg italic font-serif">
            "{RESTAURANT_INFO.bioCallout}"
          </p>
        </div>

        {/* Primary CTAs with microinteractions */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full max-w-md px-2">
          {/* Main WhatsApp CTA Button */}
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-sm md:text-base bg-amber-400 text-black shadow-[0_10px_25px_rgba(250,204,21,0.35)] hover:bg-amber-300 hover:shadow-[0_15px_30px_rgba(250,204,21,0.5)] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-black text-black transition-transform group-hover:scale-110" />
            <span>FALE CONOSCO NO WHATSAPP</span>
          </a>

          {/* Secondary Action: Explore Restaurant & Menu */}
          <button
            onClick={onExploreClick}
            className="group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm md:text-base text-zinc-100 bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 hover:border-amber-400/50 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400 transition-transform group-hover:rotate-12" />
            <span>CONHEÇA O RESTAURANTE</span>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center text-zinc-400 text-xs tracking-wider uppercase pt-4 pb-2 animate-bounce">
        <button
          onClick={onExploreClick}
          className="flex flex-col items-center gap-1 hover:text-amber-400 transition-colors"
          aria-label="Rolar para ver o restaurante"
        >
          <span>Deslize para saborear</span>
          <ChevronDown className="w-4 h-4 text-amber-400" />
        </button>
      </div>
    </header>
  );
};
