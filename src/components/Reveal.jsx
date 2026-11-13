import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ eyebrow, title, goldWord, align = "left" }) => (
  <Reveal className={align === "center" ? "text-center" : ""}>
    <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-5" data-testid="section-eyebrow">
      {eyebrow}
    </p>
    <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5F5F0] leading-[1.05]">
      {title}{" "}
      {goldWord && <span className="text-gold-gradient italic">{goldWord}</span>}
    </h2>
    <div className={`gold-hairline w-32 mt-8 ${align === "center" ? "mx-auto" : ""}`} />
  </Reveal>
);
