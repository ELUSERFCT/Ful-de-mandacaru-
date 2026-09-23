import React, { useState } from 'react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';
import { X, MessageCircle, Plus, Minus, Check } from 'lucide-react';

interface OrderModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  if (!isOpen || !item) return null;

  const handleSendToWhatsApp = () => {
    let message = `Olá! Gostaria de pedir no *Fulô de Mandacaru Bistrô*:\n\n`;
    message += `• *${quantity}x ${item.name}*`;
    if (item.price) {
      message += ` (${item.price})`;
    }
    message += `\n`;
    if (notes.trim()) {
      message += `• Observações: ${notes.trim()}\n`;
    }
    message += `\nFavor confirmar disponibilidade e tempo estimado. Obrigado!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div
        className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Image Header */}
        <div className="relative aspect-video w-full bg-black">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              {item.highlight || 'Cardápio Especial'}
            </span>
            <h3 className="text-xl font-bold font-serif text-white drop-shadow">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Quantity selector */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
            <span className="text-sm font-medium text-zinc-300">Quantidade</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white active:scale-95 transition-transform"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-mono font-bold text-base min-w-[20px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white active:scale-95 transition-transform"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Notes Input */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
              Observações (opcional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: sem cebola, ponto da carne, etc."
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Direct WhatsApp submit */}
          <button
            onClick={handleSendToWhatsApp}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-amber-400 text-black font-extrabold text-sm sm:text-base hover:bg-amber-300 active:scale-[0.98] transition-all shadow-[0_8px_20px_rgba(250,204,21,0.3)]"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Enviar Pedido no WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-zinc-500">
            Você será direcionado diretamente ao WhatsApp do restaurante ({RESTAURANT_INFO.phone})
          </p>
        </div>
      </div>
    </div>
  );
};
