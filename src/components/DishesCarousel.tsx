import React from 'react';

export const DishesCarousel: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white border-t border-zinc-900">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          Galeria Gastronômica
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight">
          A Essência no Prato
        </h2>
      </div>
    </section>
  );
};
