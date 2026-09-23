import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialPlatformsSection } from './components/SocialPlatformsSection';
import { StorytellingSection } from './components/StorytellingSection';
import { WhatsAppCTASection } from './components/WhatsAppCTASection';
import { TripAdvisorSection } from './components/TripAdvisorSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const handleExploreClick = () => {
    const el = document.getElementById('o-sabor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralOrder = () => {
    // Scrolls to WhatsApp CTA or opens WhatsApp
    const el = document.getElementById('contato-whatsapp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections in Vertical Storytelling Flow */}
      <main>
        {/* 1. HERO / PRIMEIRO BANNER PRINCIPAL */}
        <HeroSection
          onExploreClick={handleExploreClick}
          onOpenOrderModal={handleOpenGeneralOrder}
        />

        {/* 2. CANAIS OFICIAIS — ENCONTRE A GENTE */}
        <SocialPlatformsSection />

        {/* 3. O SABOR DO NORDESTE (Identidade do Restaurante e Oeste Paulista) */}
        <StorytellingSection />

        {/* 4. FRASE DE IMPACTO & WHATSAPP CTA PRINCIPAL */}
        <WhatsAppCTASection />

        {/* 5. TRIPADVISOR - RECONHECIDO PELOS NOSSOS CLIENTES */}
        <TripAdvisorSection />

        {/* 6. INSTAGRAM (Siga o Sabor do Nordeste) */}
        <InstagramSection />

        {/* 7. LOCALIZAÇÃO (Venha Nos Visitar · Google Maps) */}
        <LocationSection />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* Floating Order / WhatsApp Action */}
      <FloatingWhatsApp onQuickOrderClick={handleOpenGeneralOrder} />
    </div>
  );
}
