import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Social3DIcon } from './Social3DIcon';
import { MapPin, Navigation, Phone, ExternalLink, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-black text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Localização & Acesso
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-3">
            VENHA NOS VISITAR
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Estamos prontos para acolher você com o melhor da culinária nordestina em Presidente Prudente - SP.
          </p>
        </div>

        {/* Location Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-[0_25px_50px_rgba(0,0,0,0.8)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details & CTA */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Social3DIcon platform="googlemaps" size={56} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                    {RESTAURANT_INFO.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs sm:text-sm font-semibold mt-0.5">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{RESTAURANT_INFO.city} (Oeste Paulista)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Telefone & WhatsApp de Atendimento</span>
                    <a
                      href={RESTAURANT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-400 font-bold text-sm sm:text-base transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Ambiente do Bistrô</span>
                    <span className="text-white text-xs sm:text-sm">
                      Climatizado, acolhedor e com a autêntica hospitalidade nordestina.
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão COMO CHEGAR */}
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-amber-400 text-black font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(250,204,21,0.35)] hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
                >
                  <Navigation className="w-5 h-5 fill-black text-black transition-transform group-hover:rotate-45" />
                  <span>COMO CHEGAR</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Styled Map Card Preview */}
            <div className="lg:col-span-5">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-950 border border-zinc-700/60 shadow-xl cursor-pointer"
                title="Clique para abrir no Google Maps"
              >
                {/* Stylized dark cartographic illustration */}
                <div className="absolute inset-0 bg-[#161a23] p-4 flex flex-col justify-between overflow-hidden">
                  {/* Grid Lines mimicking city blocks */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  {/* Simulated road arteries */}
                  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 300">
                    <path d="M-20,150 Q120,120 200,160 T420,140" stroke="#f59e0b" strokeWidth="6" fill="none" opacity="0.6" />
                    <path d="M180,-20 L220,320" stroke="#4b5563" strokeWidth="8" fill="none" />
                    <path d="M60,320 L320,-20" stroke="#374151" strokeWidth="5" fill="none" />
                    <path d="M200,160 L360,280" stroke="#f59e0b" strokeWidth="4" fill="none" opacity="0.7" />
                  </svg>

                  {/* Pulsing Pin in Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-amber-400 animate-ping opacity-30 absolute -inset-1" />
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-2xl border-2 border-black">
                        <MapPin className="w-6 h-6 text-black fill-black" />
                      </div>
                    </div>
                    <div className="mt-2 bg-black/90 backdrop-blur-md px-3 py-1 rounded-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-lg whitespace-nowrap">
                      Fulô de Mandacaru Bistrô
                    </div>
                  </div>

                  {/* Map Pin Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-amber-400 text-black font-bold text-xs shadow-xl flex items-center gap-2">
                      <Navigation className="w-3.5 h-3.5" />
                      Abrir no Google Maps
                    </span>
                  </div>
                </div>

                {/* Bottom mini bar */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] text-zinc-400 px-2 py-1 bg-black/70 rounded-lg backdrop-blur-sm border border-white/5">
                  <span>Presidente Prudente, SP</span>
                  <span className="text-amber-400 font-medium">Toque para navegar</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
