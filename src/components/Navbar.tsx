import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-serif font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          {RESTAURANT_INFO.name}
        </a>

        {/* Zone 2: clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-zinc-300">
          <a href="#o-sabor" className="hover:text-amber-400 transition-colors">
            O Sabor
          </a>
          <a href="#localizacao" className="hover:text-amber-400 transition-colors">
            Localização
          </a>
          <a
            href={RESTAURANT_INFO.tripAdvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            TripAdvisor
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3">
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-amber-400 text-black text-xs font-extrabold hover:bg-amber-300 transition-all shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>(18) 997378972</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-5 space-y-4 animate-[fadeIn_0.2s_ease-out]">
          <nav className="flex flex-col space-y-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            <a
              href="#o-sabor"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              O Sabor do Nordeste
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Localização (Presidente Prudente)
            </a>
            <a
              href={RESTAURANT_INFO.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 py-1"
            >
              Selo TripAdvisor Travelers' Choice
            </a>
          </nav>

          <div className="pt-2 border-t border-zinc-800">
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400 text-black text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Chamar no WhatsApp ({RESTAURANT_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
