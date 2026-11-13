import React from "react";

export const Monogram = ({ size = 44, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    aria-label="Axion Space monogram"
    data-testid="axion-monogram"
  >
    <rect x="4" y="4" width="56" height="56" fill="none" stroke="#D4AF37" strokeWidth="2" />
    <rect x="9" y="9" width="46" height="46" fill="none" stroke="#D4AF37" strokeWidth="0.6" opacity="0.55" />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fontFamily="'Cormorant Garamond', Georgia, serif"
      fontWeight="500"
      fontSize="24"
      letterSpacing="1"
      fill="#D4AF37"
    >
      AS
    </text>
  </svg>
);

export const Logo = ({ compact = false, href = "#top" }) => (
  <a href={href} className="flex items-center gap-3 group" data-testid="brand-logo">
    <Monogram size={compact ? 46 : 54} className="transition-all duration-500 group-hover:rotate-90" />
    <span className="leading-none">
      <span className="block font-serif text-xl tracking-[0.22em] text-[#F5F5F0]">
        AXION <span className="text-gold">SPACE</span>
      </span>
      <span className="block text-[10px] tracking-[0.5em] text-[#A0A0A0] mt-1.5">LLP</span>
    </span>
  </a>
);
