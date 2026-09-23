import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle } from 'lucide-react';

export const MenuSection: React.FC = () => {
  return (
    <section id="cardapio" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header: preserved only requested titles */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Cardápio Selecionado
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Sabores do Sertão à Mesa
          </h2>
        </div>

        {/* Category: Only Pratos Principais */}
        <div className="flex items-center justify-center p-1.5 bg-zinc-900 rounded-2xl border border-zinc-800 max-w-xs mx-auto mb-12">
          <div className="py-2.5 px-6 rounded-xl text-sm font-semibold bg-amber-400 text-black shadow-md">
            Pratos principais
          </div>
        </div>

        {/* Note / WhatsApp Action */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center max-w-xl mx-auto">
          <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
            Consulte o cardápio completo de pratos principais do dia e faça sua reserva ou pedido diretamente pelo WhatsApp do bistrô.
          </p>

          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-amber-400 text-black font-bold text-sm hover:bg-amber-300 active:scale-95 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>CONSULTAR PRATOS NO WHATSAPP</span>
          </a>
        </div>

        {/* Bottom Menu Note */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-xs sm:text-sm">
            Dúvidas sobre disponibilidade ou reservas para grupos? Fale diretamente pelo WhatsApp{' '}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold underline underline-offset-4 hover:text-amber-300"
            >
              {RESTAURANT_INFO.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
