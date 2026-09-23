import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageCircle, ShoppingBag } from 'lucide-react';

interface FloatingWhatsAppProps {
  onQuickOrderClick?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onQuickOrderClick }) => {
  return (
    <aside aria-label="Ações rápidas de contato" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Order / WhatsApp Pill Button */}
      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 pl-3.5 pr-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_12px_28px_rgba(16,185,129,0.45)] border border-emerald-300/40 active:scale-95 transition-all duration-300"
        aria-label="Fazer Pedido / Falar no WhatsApp"
      >
        {/* Pulsing notification circle */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500 transition-transform group-hover:scale-110" />

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100 leading-none">
            Fazer Pedido
          </span>
          <span className="text-xs font-extrabold tracking-tight leading-tight">
            WhatsApp Online
          </span>
        </div>
      </a>
    </aside>
  );
};
