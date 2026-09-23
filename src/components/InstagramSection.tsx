import React, { useState, useRef } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Social3DIcon } from './Social3DIcon';
import { Instagram, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface InstagramPost {
  id: number;
  image: string;
  alt: string;
  tag: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    image: '/assets/images/insta_prato_nordestino_1790181192469.jpg',
    alt: 'Arroz de baião de dois com carne de sol desfiada e purê de jerimum',
    tag: 'Prato do Bistrô',
  },
  {
    id: 2,
    image: '/assets/images/insta_acaraje_1790181212254.jpg',
    alt: 'Última Quinta do mês - Acarajé com vatapá e camarões',
    tag: 'Acarajé Especial',
  },
  {
    id: 3,
    image: '/assets/images/insta_escondidinhos_1790181233599.jpg',
    alt: 'Quarta - Promoção de Escondidinhos gratinados',
    tag: 'Quarta de Escondidinhos',
  },
  {
    id: 4,
    image: '/assets/images/insta_degustacao_1790181258148.jpg',
    alt: 'Terça - Menu de Degustação no bistrô',
    tag: 'Menu Degustação',
  },
  {
    id: 5,
    image: '/assets/images/insta_se_agende_1790181292523.jpg',
    alt: 'Se agende aí - Mesa farta com escondidinhos, linguiça e petiscos',
    tag: 'Se Agende Aí',
  },
];

export const InstagramSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? INSTAGRAM_POSTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === INSTAGRAM_POSTS.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      {/* Background soft pink/purple gradient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* 3D Instagram Logo with high relief and shine */}
        <div className="inline-block mb-6 transform hover:scale-110 transition-transform duration-300">
          <Social3DIcon platform="instagram" size={80} />
        </div>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-3">
          SIGA O SABOR DO NORDESTE
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Acompanhe no Instagram os bastidores das nossas panelas, as novidades do cardápio e o dia a dia do melhor bistrô nordestino do Oeste Paulista.
        </p>

        {/* Instagram CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 py-3.5 px-8 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(221,42,123,0.3)] hover:shadow-[0_15px_35px_rgba(221,42,123,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-white" />
            <span>VER INSTAGRAM</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Carrossel Interativo com as Novas Fotos Reais Anexadas */}
        <div className="relative max-w-sm sm:max-w-md mx-auto">
          {/* Main Slide Card */}
          <div
            className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {INSTAGRAM_POSTS.map((post, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={post.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle bottom shadow vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Caption & Tag */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="text-xs font-semibold text-white bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                      {post.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-amber-400/30">
                      0{index + 1} / 0{INSTAGRAM_POSTS.length}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 border border-zinc-700 text-white hover:bg-amber-400 hover:text-black transition-all shadow-xl active:scale-95"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 border border-zinc-700 text-white hover:bg-amber-400 hover:text-black transition-all shadow-xl active:scale-95"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {INSTAGRAM_POSTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
