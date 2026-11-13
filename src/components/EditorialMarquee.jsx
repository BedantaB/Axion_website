import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  "AXION REALTY",
  "AXION FINCORP",
  "AXION INFRASTRUCTURE",
  "AXION INTERIOR & CRAFTING",
  "AXION HOSPITALITY",
];

export const EditorialMarquee = () => (
  <div
    data-testid="editorial-marquee"
    className="relative py-14 border-y border-gold/10 bg-[#0F0F0F] overflow-hidden"
  >
    <Marquee speed={28} gradient={false} pauseOnHover>
      {items.map((item) => (
        <div key={item} className="flex items-center">
          <span className="font-serif text-3xl sm:text-5xl font-light tracking-[0.15em] text-[#F5F5F0]/25 whitespace-nowrap px-8">
            {item}
          </span>
          <svg width="10" height="10" viewBox="0 0 10 10" className="mx-4 shrink-0" aria-hidden>
            <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#D4AF37" opacity="0.7" />
          </svg>
        </div>
      ))}
    </Marquee>
  </div>
);
