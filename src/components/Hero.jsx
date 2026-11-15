import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monogram } from "./Logo";

const HERO_IMG =
  "https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZHVzayUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3OTMwNDUzNzZ8MA&ixlib=rb-4.1.0&q=85";

const lines = ["AXION", "SPACE LLP"];

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 220]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img src={HERO_IMG} alt="Luxury Axion property at dusk" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/40" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10"
        >
          <Monogram size={88} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[11px] tracking-[0.6em] uppercase text-gold mb-8"
          data-testid="hero-eyebrow"
        >
          The V · A Legacy of Excellence
        </motion.p>

        <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.95] text-[#F5F5F0]" data-testid="hero-title">
          {lines.map((l, i) => (
            <MaskedLine key={l} delay={0.3 + i * 0.18}>
              {l === "SPACE LLP" ? <span className="text-gold-gradient">{l}</span> : l}
            </MaskedLine>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
          className="mt-8 max-w-xl mx-auto text-sm sm:text-base font-light text-[#C8C8C2] leading-relaxed"
          data-testid="hero-subtitle"
        >
          Redefining excellence across realty, finance, infrastructure and interiors
          — one group, four visions of luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#portfolio"
            data-testid="hero-cta-portfolio"
            className="group relative px-10 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-colors duration-300 hover:bg-gold-soft"
          >
            Explore the Portfolio
          </a>
          <a
            href="#contact"
            data-testid="hero-cta-partner"
            className="px-10 py-4 border border-[#F5F5F0]/25 text-[#F5F5F0] text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Partner With Us
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase text-[#A0A0A0]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};
