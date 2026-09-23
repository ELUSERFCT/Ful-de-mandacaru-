import React from 'react';

interface FuloLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withGlow?: boolean;
}

export const FuloLogo: React.FC<FuloLogoProps> = ({
  className = '',
  size = 'md',
  withGlow = false,
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-40 h-40 md:w-48 md:h-48',
    xl: 'w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
      style={{
        filter: withGlow ? 'drop-shadow(0 0 35px rgba(255, 195, 0, 0.45)) drop-shadow(0 10px 25px rgba(0, 0, 0, 0.6))' : 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5))',
      }}
      role="img"
      aria-label="Logo Fulô de Mandacaru Bistrô"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <defs>
          {/* Subtle warm radial gradient to give life and richness to the yellow circle */}
          <radialGradient id="fuloYellowGrad" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="70%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FFA000" />
          </radialGradient>

          {/* Soft inner vignette on the circle */}
          <radialGradient id="fuloInnerShadow" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
          </radialGradient>

          {/* Deep rich dark brown/ebony color matching original logo */}
          <linearGradient id="fuloDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1F1610" />
            <stop offset="100%" stopColor="#140E0A" />
          </linearGradient>

          {/* Subtle gold bevel for 3D depth */}
          <filter id="subtleBevel" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Badge */}
        <circle cx="200" cy="200" r="190" fill="url(#fuloYellowGrad)" />
        <circle cx="200" cy="200" r="190" fill="url(#fuloInnerShadow)" />
        
        {/* Subtle rim border */}
        <circle cx="200" cy="200" r="189" stroke="#FFE082" strokeWidth="1.5" opacity="0.6" />

        {/* --- MANDACARU FLOWER / FULÔ (Identical motif to IMG_8902.jpeg) --- */}
        <g id="mandacaru-flower" transform="translate(200, 140)">
          {/* 10 Radiating Stylized Petals */}
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle})`}>
              {/* Petal Silhouette */}
              <path
                d="M 0 -62 C 10 -46, 17 -26, 15 -8 C 10 -3, -10 -3, -15 -8 C -17 -26, -10 -46, 0 -62 Z"
                fill="url(#fuloDark)"
              />
              {/* Inner yellow accent vein of petal */}
              <path
                d="M 0 -54 C 4 -40, 6 -24, 0 -12 C -6 -24, -4 -40, 0 -54 Z"
                fill="#FFC107"
              />
              <circle cx="0" cy="-30" r="2.5" fill="#140E0A" />
            </g>
          ))}

          {/* Center Flower Pistil / Core */}
          <circle cx="0" cy="0" r="23" fill="url(#fuloDark)" />
          <circle cx="0" cy="0" r="17" fill="#FFC107" />
          <circle cx="0" cy="0" r="11" fill="url(#fuloDark)" />
          <circle cx="0" cy="0" r="4.5" fill="#FFD54F" />
        </g>

        {/* --- TYPOGRAPHY "FULÔ DE" --- */}
        <g id="fulo-de-text" filter="url(#subtleBevel)">
          {/* FULÔ */}
          <text
            x="200"
            y="244"
            textAnchor="middle"
            fill="url(#fuloDark)"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="43"
            letterSpacing="3"
            style={{ textTransform: 'uppercase' }}
          >
            FULÔ DE
          </text>
        </g>

        {/* --- TYPOGRAPHY "MANDACARU" --- */}
        <g id="mandacaru-text" filter="url(#subtleBevel)">
          <text
            x="200"
            y="288"
            textAnchor="middle"
            fill="url(#fuloDark)"
            fontFamily="'Cinzel', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="41"
            letterSpacing="2.5"
            style={{ textTransform: 'uppercase' }}
          >
            MANDACARU
          </text>
        </g>

        {/* --- BISTRÔ BANNER --- */}
        <g id="bistro-banner" transform="translate(200, 314)">
          {/* Angled Dark Ribbon */}
          <polygon
            points="-85,-17 85,-17 78,16 -92,16"
            fill="url(#fuloDark)"
          />
          {/* BISTRÔ Letters */}
          <text
            x="-4"
            y="4.5"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFC107"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="17.5"
            letterSpacing="7.5"
          >
            BISTRÔ
          </text>
        </g>
      </svg>
    </div>
  );
};
