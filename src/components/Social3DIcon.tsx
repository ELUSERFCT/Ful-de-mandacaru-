import React from 'react';

type PlatformType = 'instagram' | 'whatsapp' | 'tripadvisor' | 'googlemaps';

interface Social3DIconProps {
  platform: PlatformType;
  size?: number;
  className?: string;
}

export const Social3DIcon: React.FC<Social3DIconProps> = ({
  platform,
  size = 56,
  className = '',
}) => {
  return (
    <div
      className={`relative select-none flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* 3D Depth ambient glow under the icon */}
      <div
        className="absolute inset-0 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundColor:
            platform === 'instagram'
              ? '#E1306C'
              : platform === 'whatsapp'
              ? '#25D366'
              : platform === 'tripadvisor'
              ? '#00EB80'
              : '#EA4335',
        }}
      />

      {/* SVG Icon with 3D Emboss and Metallic Sheen */}
      <svg
        viewBox="0 0 100 100"
        className="relative w-full h-full drop-shadow-[0_10px_16px_rgba(0,0,0,0.7)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Instagram Official Mesh Gradient */}
          <radialGradient id="igGlow" cx="20%" cy="105%" r="105%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="10%" stopColor="#FCAF45" />
            <stop offset="35%" stopColor="#F77737" />
            <stop offset="60%" stopColor="#F56040" />
            <stop offset="80%" stopColor="#FD1D1D" />
            <stop offset="100%" stopColor="#833AB4" />
          </radialGradient>
          <radialGradient id="igCorner" cx="80%" cy="10%" r="80%">
            <stop offset="0%" stopColor="#405DE6" />
            <stop offset="50%" stopColor="#5851DB" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* WhatsApp Green Gradient */}
          <linearGradient id="waGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2FE474" />
            <stop offset="60%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#1EBE5D" />
          </linearGradient>

          {/* TripAdvisor Green Gradient */}
          <linearGradient id="taSmallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00FF8E" />
            <stop offset="50%" stopColor="#00EB80" />
            <stop offset="100%" stopColor="#00B862" />
          </linearGradient>

          {/* Universal 3D Gloss / Metallic Glass Reflection */}
          <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </linearGradient>

          {/* Bevel highlight */}
          <filter id="bevelFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#FFFFFF" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="-2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* --- INSTAGRAM --- */}
        {platform === 'instagram' && (
          <g>
            {/* Base Rounded Squircle */}
            <rect x="5" y="5" width="90" height="90" rx="26" fill="url(#igGlow)" />
            <rect x="5" y="5" width="90" height="90" rx="26" fill="url(#igCorner)" />
            {/* 3D Gloss Top-Curved Shield */}
            <rect x="5" y="5" width="90" height="90" rx="26" fill="url(#glossHighlight)" />
            <rect x="6.5" y="6.5" width="87" height="87" rx="24.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            
            {/* White Camera Outline with subtle 3D emboss */}
            <rect
              x="26"
              y="26"
              width="48"
              height="48"
              rx="13"
              stroke="#FFFFFF"
              strokeWidth="6"
              fill="none"
              style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}
            />
            {/* Lens */}
            <circle
              cx="50"
              cy="50"
              r="12"
              stroke="#FFFFFF"
              strokeWidth="6"
              fill="none"
              style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}
            />
            {/* Flash Dot */}
            <circle cx="63" cy="37" r="3.5" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
          </g>
        )}

        {/* --- WHATSAPP --- */}
        {platform === 'whatsapp' && (
          <g>
            {/* Circular / Squircle 3D Body */}
            <circle cx="50" cy="50" r="45" fill="url(#waGrad)" />
            <circle cx="50" cy="50" r="45" fill="url(#glossHighlight)" />
            <circle cx="50" cy="50" r="43.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            
            {/* WhatsApp Speech Bubble */}
            <path
              d="M 50 18 C 32.3 18 18 32.3 18 50 C 18 56.2 19.8 62 23 66.8 L 19 82 L 34.6 77.9 C 39.1 80.5 44.4 82 50 82 C 67.7 82 82 67.7 82 50 C 82 32.3 67.7 18 50 18 Z"
              fill="#FFFFFF"
              style={{ filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.35))' }}
            />
            
            {/* Phone handset in bubble */}
            <path
              d="M 40.5 35 C 39.5 35 38.3 35.5 37.4 37 C 36.5 38.5 33.7 41.2 33.7 46.8 C 33.7 52.4 37.8 57.7 38.4 58.5 C 39 59.3 46.4 70.8 57.8 75.6 C 67.3 79.6 69.2 78.4 71.3 78.2 C 73.4 78 78 75.4 78.9 72.8 C 79.8 70.2 79.8 68 79.5 67.5 C 79.2 67 78.3 66.7 76.9 66 C 75.5 65.3 68.7 61.9 67.4 61.4 C 66.1 60.9 65.2 60.7 64.2 62.1 C 63.2 63.5 60.5 66.9 59.7 67.8 C 58.9 68.7 58.1 68.8 56.7 68.1 C 55.3 67.4 50.8 65.9 45.4 61.1 C 41.2 57.4 38.4 52.8 37.6 51.4 C 36.8 50 37.5 49.2 38.2 48.5 C 38.8 47.9 39.5 47 40.2 46.2 C 40.9 45.4 41.2 44.7 41.6 43.8 C 42 42.9 41.8 42.1 41.5 41.4 C 41.2 40.7 38.6 34.3 37.5 31.6 C 36.4 29 35.3 29.4 34.4 29.4 L 40.5 35 Z"
              fill="#25D366"
              transform="scale(0.8) translate(12, 10)"
            />
          </g>
        )}

        {/* --- TRIPADVISOR --- */}
        {platform === 'tripadvisor' && (
          <g>
            {/* Arched 3D Pill Base */}
            <path
              d="M 12 42 C 12 20 28 6 50 6 C 72 6 88 20 88 42 L 88 84 C 88 90 84 94 78 94 L 22 94 C 16 94 12 90 12 84 Z"
              fill="url(#taSmallGrad)"
            />
            {/* 3D Gloss Highlight */}
            <path
              d="M 12 42 C 12 20 28 6 50 6 C 72 6 88 20 88 42 L 88 84 C 88 90 84 94 78 94 L 22 94 C 16 94 12 90 12 84 Z"
              fill="url(#glossHighlight)"
            />
            <path
              d="M 14 43 C 14 22 30 8 50 8 C 70 8 86 22 86 43 L 86 82 C 86 88 82 92 76 92 L 24 92 C 18 92 14 88 14 82 Z"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
            
            {/* TripAdvisor Owl Iconic Face */}
            <g transform="translate(50, 42) scale(0.48)">
              <path
                d="M -70 -38 C -55 -45, -35 -30, -5 -25 C 0 -24, 0 -24, 5 -25 C 35 -30, 55 -45, 70 -38 C 75 -25, 72 -5, 62 10 C 45 28, 20 30, 5 18 L 0 28 L -5 18 C -20 30, -45 28, -62 10 C -72 -5, -75 -25, -70 -38 Z"
                fill="#002E1B"
              />
              {/* Left Eye */}
              <circle cx="-35" cy="-2" r="28" fill="#00EB80" />
              <circle cx="-35" cy="-2" r="20" fill="#002E1B" />
              <circle cx="-35" cy="-2" r="12" fill="#00EB80" />
              {/* Right Eye */}
              <circle cx="35" cy="-2" r="28" fill="#00EB80" />
              <circle cx="35" cy="-2" r="20" fill="#002E1B" />
              <circle cx="35" cy="-2" r="12" fill="#00EB80" />
              {/* Beak */}
              <polygon points="0,5 -6,-8 6,-8" fill="#002E1B" />
            </g>

            {/* Micro Laurel & Dots */}
            <circle cx="50" cy="74" r="3" fill="#002E1B" />
            <path d="M 40 73 C 35 71 30 67 27 60" stroke="#002E1B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 60 73 C 65 71 70 67 73 60" stroke="#002E1B" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* --- GOOGLE MAPS --- */}
        {platform === 'googlemaps' && (
          <g>
            {/* Neutral Dark Slate / Charcoal Round Pedestal */}
            <circle cx="50" cy="50" r="45" fill="#1E293B" />
            <circle cx="50" cy="50" r="45" fill="url(#glossHighlight)" />
            <circle cx="50" cy="50" r="43.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Google Pin with standard 4 Google colors */}
            <g transform="translate(50, 48) scale(0.65)">
              {/* Top Arch Red */}
              <path
                d="M 0 -45 C -22 -45 -40 -27 -40 -5 C -40 10 -25 30 0 58 C 25 30 40 10 40 -5 C 40 -27 22 -45 0 -45 Z"
                fill="#EA4335"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}
              />
              {/* Yellow Segment Left */}
              <path
                d="M -40 -5 C -40 10 -25 30 0 58 L 0 25 C -15 10 -25 -5 -25 -5 Z"
                fill="#FBBC04"
                opacity="0.9"
              />
              {/* Green Segment Right */}
              <path
                d="M 40 -5 C 40 10 25 30 0 58 L 0 25 C 15 10 25 -5 25 -5 Z"
                fill="#34A853"
              />
              {/* Blue Segment Base */}
              <path
                d="M 0 58 L -10 45 L 0 35 L 10 45 Z"
                fill="#4285F4"
              />

              {/* White Inner Center Circle */}
              <circle cx="0" cy="-5" r="14" fill="#FFFFFF" />
              {/* Subtle inner center dot */}
              <circle cx="0" cy="-5" r="7" fill="#EA4335" opacity="0.3" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
