import React from 'react';
import { Social3DIcon } from './Social3DIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUpRight } from 'lucide-react';

export const SocialPlatformsSection: React.FC = () => {
  const platforms = [
    {
      name: 'Instagram',
      subtitle: 'Fotos & Bastidores',
      url: RESTAURANT_INFO.instagramUrl,
      type: 'instagram' as const,
      accentBorder: 'hover:border-pink-500/50',
      tagText: 'Seguir',
    },
    {
      name: 'WhatsApp',
      subtitle: 'Reservas & Pedidos',
      url: RESTAURANT_INFO.whatsappUrl,
      type: 'whatsapp' as const,
      accentBorder: 'hover:border-emerald-500/50',
      tagText: 'Conversar',
    },
    {
      name: 'TripAdvisor',
      subtitle: 'Avaliações Reais',
      url: RESTAURANT_INFO.tripAdvisorUrl,
      type: 'tripadvisor' as const,
      accentBorder: 'hover:border-teal-500/50',
      tagText: 'Avaliar',
    },
    {
      name: 'Como chegar',
      subtitle: 'Google Maps · Rota',
      url: RESTAURANT_INFO.googleMapsUrl,
      type: 'googlemaps' as const,
      accentBorder: 'hover:border-blue-500/50',
      tagText: 'Traçar rota',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Canais Oficiais
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-3">
            ENCONTRE A GENTE
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Conecte-se com o Fulô de Mandacaru Bistrô em todas as nossas plataformas oficiais com um clique.
          </p>
        </div>

        {/* 4 Official 3D Platform Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {platforms.map((plat, idx) => (
            <a
              key={idx}
              href={plat.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center justify-between p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900 shadow-xl ${plat.accentBorder}`}
            >
              {/* Corner Action Arrow */}
              <div className="absolute top-4 right-4 text-zinc-500 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* 3D High-Relief Official Logo */}
              <div className="my-3">
                <Social3DIcon platform={plat.type} size={64} />
              </div>

              {/* Text Info */}
              <div className="text-center mt-2">
                <h3 className="text-white font-bold text-base sm:text-lg mb-0.5 group-hover:text-amber-400 transition-colors">
                  {plat.name}
                </h3>
                <p className="text-zinc-400 text-xs">{plat.subtitle}</p>
              </div>

              {/* Action Tag Button */}
              <span className="mt-4 text-[11px] font-semibold text-zinc-300 group-hover:text-black group-hover:bg-amber-400 bg-zinc-800 px-3 py-1 rounded-full transition-all duration-300">
                {plat.tagText}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
