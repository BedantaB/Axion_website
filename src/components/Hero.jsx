import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Pause, Play } from "lucide-react";
import { pageUrl } from "@/lib/links";
import { featuredProjects } from "@/data/featuredProjects";
import { Monogram } from "./Logo";

const HERO_IMG =
  "https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZHVzayUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3OTMwNDUzNzZ8MA&ixlib=rb-4.1.0&q=85";

// Slide 1 is the Axion brand introduction; the projects follow.
const slides = [
  { id: "axion", brand: true, title: "Axion Space", goldWord: "LLP", img: HERO_IMG, alt: "Luxury Axion property at dusk" },
  ...featuredProjects,
];

const EASE = [0.16, 1, 0.3, 1];

/** Time each slide stays on screen while autoplaying. */
const DURATION = 7000;

const pad = (n) => String(n).padStart(2, "0");

const ControlButton = ({ label, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className="w-11 h-11 shrink-0 flex items-center justify-center border border-[#F5F5F0]/25 bg-black/20 backdrop-blur-sm text-[#F5F5F0] hover:border-gold hover:text-gold transition-colors duration-300"
  >
    {children}
  </button>
);

/** Full-screen homepage hero: the Axion brand slide, then an autoplaying slideshow of Axion Realty projects. */
export const Hero = () => {
  const count = slides.length;
  const [{ active, prev, dir }, setState] = useState({ active: 0, prev: null, dir: "next" });
  const [playing, setPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const swipe = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Respect the OS "reduce motion" setting: start paused, the visitor can still press play.
  useEffect(() => {
    if (reduceMotion) setPlaying(false);
  }, [reduceMotion]);

  const running = playing && inView;

  const goTo = useCallback(
    (index, direction) =>
      setState((s) => {
        const next = (index + count) % count;
        if (next === s.active) return s;
        return { active: next, prev: s.active, dir: direction ?? (next > s.active ? "next" : "prev") };
      }),
    [count]
  );
  const next = () => goTo(active + 1, "next");
  const previous = () => goTo(active - 1, "prev");

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); previous(); }
  };
  const onPointerDown = (e) => {
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    if (!swipe.current) return;
    const dx = e.clientX - swipe.current.x;
    const dy = e.clientY - swipe.current.y;
    swipe.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next : previous)();
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      data-testid="hero-section"
      role="region"
      aria-roledescription="carousel"
      aria-label="Axion Realty projects"
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (swipe.current = null)}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#0F0F0F] touch-pan-y"
    >
      <h1 className="sr-only">Axion Space LLP: prime builder projects in Noida Extension</h1>

      {/* Images */}
      <div className="absolute inset-0 select-none">
        {slides.map((s, i) => {
          const isActive = i === active;
          const reveal = isActive && prev !== null ? `slide-reveal-${dir}` : "";
          const zoomed = isActive && mounted;
          return (
            <div
              key={s.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 ${reveal} ${isActive ? "z-20" : i === prev ? "z-10" : "z-0 opacity-0"}`}
            >
              <img
                src={s.img}
                alt={isActive ? s.alt : ""}
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                fetchpriority={i === 0 ? "high" : undefined}
                className="w-full h-full object-cover"
                style={{
                  transform: zoomed || reduceMotion ? "scale(1)" : "scale(1.12)",
                  transition: zoomed && !reduceMotion ? `transform ${DURATION + 2000}ms ease-out` : "none",
                }}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#0F0F0F] via-black/45 to-black/55" />
        <div className={`absolute inset-0 z-30 hidden lg:block bg-gradient-to-r from-black/75 via-black/30 to-transparent transition-opacity duration-700 ${slides[active].brand ? "opacity-0" : "opacity-100"}`} />
      </div>

      {/* Content */}
      <div className="relative z-40 flex-1 flex flex-col justify-end px-6 lg:px-10 pt-28 sm:pt-36 pb-6 sm:pb-10">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          <div className="grid flex-1" aria-live={running ? "off" : "polite"}>
            {slides.map((s, i) => {
              const isActive = i === active;
              const visible = isActive && mounted;
              if (s.brand) {
                return (
                  <article
                    key={s.id}
                    inert={!isActive}
                    aria-hidden={!isActive}
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}: Axion Space LLP`}
                    className={`[grid-area:1/1] self-center w-full text-center transition-opacity ease-out ${
                      visible ? "opacity-100 duration-700" : "opacity-0 duration-300 pointer-events-none"
                    }`}
                  >
                    <motion.div
                      initial={false}
                      animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -8 }}
                      transition={{ duration: 1, ease: EASE }}
                      className="flex justify-center mb-6 sm:mb-8"
                    >
                      <Monogram size={72} />
                    </motion.div>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.45em] sm:tracking-[0.6em] uppercase text-gold mb-6 sm:mb-8" data-testid="hero-eyebrow">
                      The V · A Legacy of Excellence
                    </p>
                    <h2
                      className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl xl:[@media(min-height:900px)]:text-8xl tracking-tight leading-[0.95] text-[#F5F5F0]"
                      data-testid="hero-title"
                    >
                      {["AXION", "SPACE LLP"].map((line, j) => (
                        <span key={line} className="block overflow-hidden">
                          <motion.span
                            className="block"
                            initial={false}
                            animate={{ y: visible ? 0 : "110%" }}
                            transition={{ duration: 1.1, delay: visible ? 0.2 + j * 0.18 : 0, ease: EASE }}
                          >
                            {j ? <span className="text-gold-gradient">{line}</span> : line}
                          </motion.span>
                        </span>
                      ))}
                    </h2>
                    <p className="mt-6 sm:mt-8 max-w-xl mx-auto text-sm sm:text-base font-light text-[#C8C8C2] leading-relaxed" data-testid="hero-subtitle">
                      Redefining excellence across realty, finance, infrastructure and interiors
                      — one group, four visions of luxury.
                    </p>
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                      <a
                        href="#portfolio"
                        data-testid="hero-cta-portfolio"
                        className="px-10 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-soft transition-colors duration-300"
                      >
                        Explore the Portfolio
                      </a>
                      <a
                        href="#contact"
                        className="px-10 py-4 border border-[#F5F5F0]/25 bg-black/20 backdrop-blur-sm text-[#F5F5F0] text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors duration-300"
                      >
                        Partner With Us
                      </a>
                    </div>
                  </article>
                );
              }
              return (
                <article
                  key={s.id}
                  inert={!isActive}
                  aria-hidden={!isActive}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}: ${s.title} ${s.goldWord}`}
                  className={`[grid-area:1/1] self-end min-w-0 max-w-3xl transition-all ease-out ${
                    visible
                      ? "opacity-100 translate-y-0 duration-1000 delay-300"
                      : "opacity-0 translate-y-6 duration-300 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                    <span className="px-3 py-1.5 border border-gold/40 bg-black/30 backdrop-blur-sm text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold">
                      {s.tag}
                    </span>
                    <span className="text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#E8E8E2] leading-relaxed">
                      Project {s.no} · {s.developer}
                    </span>
                  </div>
                  <h2 className="mt-5 sm:mt-6 font-serif font-light text-4xl sm:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-[#F5F5F0] break-words">
                    {s.title} <span className="text-gold-gradient italic whitespace-nowrap">{s.goldWord}</span>
                  </h2>
                  <p className="mt-4 sm:mt-5 flex items-start gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#E8E8E2] leading-relaxed">
                    <MapPin size={14} strokeWidth={1.5} className="text-gold shrink-0 mt-px" />
                    <span className="min-w-0">{s.location}</span>
                  </p>
                  <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base font-light text-[#D0D0CA] leading-relaxed">{s.text}</p>
                  <dl className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
                    {s.stats.map(([label, value]) => (
                      <div key={label} className="min-w-0 border-l border-gold/40 pl-3 sm:pl-4">
                        <dt className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[#B0B0AA]">{label}</dt>
                        <dd className="mt-1.5 font-serif text-lg sm:text-2xl leading-tight text-gold break-words">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
                    <a
                      href={pageUrl("realty", `#${s.id}`)}
                      data-testid="hero-cta-project"
                      className="inline-flex items-center gap-3 px-7 sm:px-9 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-soft transition-colors duration-300"
                    >
                      View Project <ArrowUpRight size={16} strokeWidth={1.5} />
                    </a>
                    <a
                      href="#contact"
                      data-testid="hero-cta-partner"
                      className="inline-flex items-center px-7 sm:px-9 py-4 border border-[#F5F5F0]/30 bg-black/20 backdrop-blur-sm text-[#F5F5F0] text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors duration-300"
                    >
                      Enquire
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Controls */}
          {/* Right padding keeps the buttons clear of the floating call/chat buttons (bottom-right). */}
          <div className="relative mt-8 sm:mt-12 pt-4 border-t border-white/15 flex items-center gap-3 sm:gap-5 pr-[4.5rem] 2xl:pr-0">
            {/* Mobile: the divider line doubles as the progress bar. Only the visible bar animates, so only one advances the slide. */}
            <div className="sm:hidden absolute -top-px inset-x-0 h-[2px] overflow-hidden" aria-hidden="true">
              <span
                key={`m-${active}-${playing}`}
                className={`block h-full bg-gold origin-left ${playing ? "slide-progress" : ""}`}
                style={{ animationDuration: `${DURATION}ms`, animationPlayState: running ? "running" : "paused" }}
                onAnimationEnd={next}
              />
            </div>
            <p className="sm:hidden mr-auto font-serif text-[#F5F5F0] text-lg shrink-0" aria-hidden="true">
              {pad(active + 1)} <span className="text-sm text-[#F5F5F0]/50">/ {pad(count)}</span>
            </p>
            <div className="flex-1 hidden sm:flex gap-2 min-w-0">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show slide ${i + 1}: ${s.title} ${s.goldWord}`}
                  aria-current={i === active ? "true" : undefined}
                  className="group flex-1 min-w-0 pt-3 pb-1 text-left"
                >
                  <span className="block h-[2px] bg-white/20 overflow-hidden group-hover:bg-white/35 transition-colors">
                    {i === active ? (
                      <span
                        key={`${active}-${playing}`}
                        className={`block h-full bg-gold origin-left ${playing ? "slide-progress" : ""}`}
                        style={{ animationDuration: `${DURATION}ms`, animationPlayState: running ? "running" : "paused" }}
                        onAnimationEnd={next}
                      />
                    ) : (
                      <span className={`block h-full ${i < active ? "bg-gold/40" : ""}`} />
                    )}
                  </span>
                  <span
                    className={`mt-3 hidden md:block text-[10px] tracking-[0.3em] uppercase transition-colors ${
                      i === active ? "text-gold" : "text-[#F5F5F0]/45 group-hover:text-[#F5F5F0]/80"
                    }`}
                  >
                    {s.brand ? "AS" : s.no}
                  </span>
                </button>
              ))}
            </div>
            <ControlButton label={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying((p) => !p)}>
              {playing ? <Pause size={15} strokeWidth={1.5} /> : <Play size={15} strokeWidth={1.5} />}
            </ControlButton>
            <ControlButton label="Previous project" onClick={previous}>
              <ArrowLeft size={16} strokeWidth={1.5} />
            </ControlButton>
            <ControlButton label="Next project" onClick={next}>
              <ArrowRight size={16} strokeWidth={1.5} />
            </ControlButton>
          </div>
        </div>
      </div>
    </section>
  );
};
