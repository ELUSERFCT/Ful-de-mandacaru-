import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface TripAdvisorBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TripAdvisorBadge: React.FC<TripAdvisorBadgeProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-28 h-36',
    md: 'w-40 h-52 md:w-48 md:h-64',
    lg: 'w-52 h-68 md:w-60 md:h-80',
  };

  return (
    <a
      href={RESTAURANT_INFO.tripAdvisorUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-block transition-all duration-500 ease-out hover:scale-105 ${sizeClasses[size]} ${className}`}
      aria-label="Ver avaliações no TripAdvisor - Prêmio Travelers' Choice"
    >
      {/* 3D Drop Glow & Depth Shadow */}
      <div className="absolute inset-0 bg-emerald-500/20 rounded-t-[50%] rounded-b-2xl blur-xl transition-opacity duration-500 group-hover:opacity-80 opacity-40 group-hover:blur-2xl" />

      {/* Badge Container */}
      <div className="relative w-full h-full rounded-t-[50%] rounded-b-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,235,128,0.25)] border border-emerald-400/30 transition-transform duration-500 group-hover:-translate-y-1">
        
        {/* SVG Graphic faithful to IMG_8901.jpeg */}
        <svg
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* TripAdvisor Vibrant Green Gradient */}
            <linearGradient id="taGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00FF8E" />
              <stop offset="50%" stopColor="#00EB80" />
              <stop offset="100%" stopColor="#00B862" />
            </linearGradient>

            {/* Subtle Metallic Bevel Highlight */}
            <linearGradient id="taShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.45" />
              <stop offset="35%" stopColor="white" stopOpacity="0.1" />
              <stop offset="70%" stopColor="transparent" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="0.2" />
            </linearGradient>

            {/* Deep dark green for text and owl matching IMG_8901.jpeg */}
            <linearGradient id="taDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#002917" />
              <stop offset="100%" stopColor="#001F11" />
            </linearGradient>

            <filter id="taDropShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#00180B" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Arched Tombstone / Shield Background */}
          <path
            d="M 10 150 C 10 60, 60 10, 150 10 C 240 10, 290 60, 290 150 L 290 365 C 290 380, 280 390, 265 390 L 35 390 C 20 390, 10 380, 10 365 Z"
            fill="url(#taGreenGrad)"
          />

          {/* Glossy Overlay Mask for 3D reflection */}
          <path
            d="M 10 150 C 10 60, 60 10, 150 10 C 240 10, 290 60, 290 150 L 290 365 C 290 380, 280 390, 265 390 L 35 390 C 20 390, 10 380, 10 365 Z"
            fill="url(#taShine)"
          />

          {/* Subtle Inner Border */}
          <path
            d="M 18 152 C 18 68, 64 18, 150 18 C 236 18, 282 68, 282 152 L 282 360 C 282 372, 272 382, 260 382 L 40 382 C 28 382, 18 372, 18 360 Z"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.3"
            fill="none"
          />

          {/* --- TRIPADVISOR OWL (Identical to IMG_8901.jpeg) --- */}
          <g id="ta-owl" filter="url(#taDropShadow)" transform="translate(150, 175)">
            {/* Owl Brow & Ears outline */}
            <path
              d="M -70 -38 C -55 -45, -35 -30, -5 -25 C 0 -24, 0 -24, 5 -25 C 35 -30, 55 -45, 70 -38 C 75 -25, 72 -5, 62 10 C 45 28, 20 30, 5 18 L 0 28 L -5 18 C -20 30, -45 28, -62 10 C -72 -5, -75 -25, -70 -38 Z"
              fill="url(#taDark)"
            />

            {/* Left Eye outer ring */}
            <circle cx="-35" cy="-2" r="28" fill="#00EB80" />
            <circle cx="-35" cy="-2" r="21" fill="url(#taDark)" />
            <circle cx="-35" cy="-2" r="14" fill="#00EB80" />

            {/* Right Eye outer ring */}
            <circle cx="35" cy="-2" r="28" fill="#00EB80" />
            <circle cx="35" cy="-2" r="21" fill="url(#taDark)" />
            <circle cx="35" cy="-2" r="14" fill="#00EB80" />

            {/* Center Beak Triangle */}
            <polygon points="0,5 -6,-8 6,-8" fill="url(#taDark)" />
          </g>

          {/* --- LAUREL WREATH (Identical to IMG_8901.jpeg) --- */}
          <g id="ta-wreath" fill="url(#taDark)" transform="translate(150, 220)">
            {/* Center bottom dot */}
            <circle cx="0" cy="18" r="8" />

            {/* Left Leaf Arch */}
            <path d="M -18 12 C -24 10, -28 6, -30 2 C -28 8, -22 13, -15 15 Z" />
            <path d="M -38 6 C -46 2, -50 -4, -53 -10 C -49 -4, -42 2, -34 6 Z" />
            <path d="M -58 -6 C -68 -12, -72 -20, -75 -28 C -70 -20, -62 -12, -52 -5 Z" />
            <path d="M -75 -26 C -86 -34, -89 -45, -90 -56 C -86 -44, -77 -34, -68 -24 Z" />
            <path d="M -86 -54 C -96 -65, -96 -80, -94 -94 C -92 -79, -84 -67, -76 -52 Z" />
            <path d="M -90 -88 C -98 -102, -94 -120, -90 -134 C -90 -117, -84 -103, -78 -88 Z" />

            {/* Right Leaf Arch (Mirrored) */}
            <path d="M 18 12 C 24 10, 28 6, 30 2 C 28 8, 22 13, 15 15 Z" />
            <path d="M 38 6 C 46 2, 50 -4, 53 -10 C 49 -4, 42 2, 34 6 Z" />
            <path d="M 58 -6 C 68 -12, 72 -20, 75 -28 C 70 -20, 62 -12, 52 -5 Z" />
            <path d="M 75 -26 C 86 -34, 89 -45, 90 -56 C 86 -44, 77 -34, 68 -24 Z" />
            <path d="M 86 -54 C 96 -65, 96 -80, 94 -94 C 92 -79, 84 -67, 76 -52 Z" />
            <path d="M 90 -88 C 98 -102, 94 -120, 90 -134 C 90 -117, 84 -103, 78 -88 Z" />
          </g>

          {/* --- TEXT "Travelers' Choice™" --- */}
          <g id="ta-text" filter="url(#taDropShadow)">
            <text
              x="150"
              y="298"
              textAnchor="middle"
              fill="url(#taDark)"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="800"
              fontSize="37"
              letterSpacing="-0.5"
            >
              Travelers’
            </text>

            <text
              x="142"
              y="342"
              textAnchor="middle"
              fill="url(#taDark)"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="800"
              fontSize="37"
              letterSpacing="-0.5"
            >
              Choice
            </text>

            {/* TM superscript */}
            <text
              x="215"
              y="322"
              fill="url(#taDark)"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="700"
              fontSize="12"
            >
              TM
            </text>
          </g>
        </svg>

        {/* Hover light sheen animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      </div>
    </a>
  );
};
