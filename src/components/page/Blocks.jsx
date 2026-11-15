import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "../Reveal";
import { homeUrl } from "@/lib/links";

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

export const Section = ({ id, alt = false, children, className = "" }) => (
  <section
    id={id}
    data-testid={id ? `section-${id}` : undefined}
    className={`py-28 lg:py-36 px-6 lg:px-10 ${alt ? "bg-[#0C0C0C]" : ""} ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-[0.08em]">
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

export const PageHero = ({ img, imgAlt, crumb, eyebrow, title, goldTitle, subtitle, primary, secondary }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 220]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  return (
    <section id="top" data-testid="page-hero" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/50" />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-28">
        <motion.a
          href={homeUrl("#entities")}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          data-testid="hero-back-link"
          className="group inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#A0A0A0] hover:text-gold transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
          The Group <span className="text-gold/50">/</span> <span className="text-[#F5F5F0]">{crumb}</span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[11px] tracking-[0.5em] uppercase text-gold mb-8"
          data-testid="hero-eyebrow"
        >
          {eyebrow}
        </motion.p>

        <h1
          className="font-serif font-light text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.98] text-[#F5F5F0] max-w-5xl"
          data-testid="hero-title"
        >
          <MaskedLine delay={0.3}>{title}</MaskedLine>
          <MaskedLine delay={0.48}>
            <span className="text-gold-gradient italic">{goldTitle}</span>
          </MaskedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
          className="mt-10 max-w-2xl text-sm sm:text-base font-light text-[#C8C8C2] leading-relaxed"
          data-testid="hero-subtitle"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          {primary && (
            <a
              href={primary.href}
              data-testid="hero-cta-primary"
              className="px-10 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 hover:bg-gold-soft"
            >
              {primary.label}
            </a>
          )}
          {secondary && (
            <a
              href={secondary.href}
              data-testid="hero-cta-secondary"
              className="px-10 py-4 border border-[#F5F5F0]/25 text-[#F5F5F0] text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {secondary.label}
            </a>
          )}
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

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

/** Grid of icon cards: [{ icon, title, text }] */
export const FeatureCards = ({ items, cols = 3 }) => (
  <div className={`mt-16 grid sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-5`}>
    {items.map((it, i) => (
      <Reveal key={it.title} delay={i * 0.08}>
        <div
          data-testid={`feature-card-${i}`}
          className="group relative h-full bg-[#1A1A1A] border border-white/5 hover:border-gold/30 p-9 transition-colors duration-500 overflow-hidden"
        >
          <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <it.icon size={28} strokeWidth={1} className="text-gold transition-transform duration-500 group-hover:-translate-y-1" />
          <h3 className="mt-8 font-serif text-2xl font-light text-[#F5F5F0]">{it.title}</h3>
          <p className="mt-3 text-sm font-light text-[#A0A0A0] leading-relaxed">{it.text}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

/** Numbered list of [label, text] pairs, used beside images. */
export const LabeledList = ({ items }) => (
  <ul className="border-t border-gold/10">
    {items.map(([label, text], i) => (
      <Reveal key={label} delay={i * 0.06}>
        <li className="group flex gap-6 py-7 border-b border-white/5">
          <span className="font-serif text-sm text-gold/70 pt-1.5 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-light text-[#F5F5F0] group-hover:text-gold transition-colors duration-500">
              {label}
            </h4>
            <p className="mt-2 text-sm font-light text-[#A0A0A0] leading-relaxed">{text}</p>
          </div>
        </li>
      </Reveal>
    ))}
  </ul>
);

/** Framed image with the site's hover zoom and gold corner accents. */
export const MediaFrame = ({ src, alt, tag, className = "aspect-[4/3]" }) => (
  <Reveal>
    <figure className={`group relative overflow-hidden border border-white/5 hover:border-gold/30 transition-colors duration-500 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/60" />
      <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/60" />
      {tag && (
        <figcaption className="absolute bottom-6 left-6 text-[9px] tracking-[0.45em] uppercase text-gold">{tag}</figcaption>
      )}
    </figure>
  </Reveal>
);

/** Image + labeled list side by side. */
export const SplitFeature = ({ id, alt, eyebrow, title, goldWord, intro, items, img, imgAlt, tag, reverse = false, children }) => (
  <Section id={id} alt={alt}>
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <SectionHeading eyebrow={eyebrow} title={title} goldWord={goldWord} />
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm font-light text-[#A0A0A0] leading-relaxed max-w-lg">{intro}</p>
          </Reveal>
        )}
        <div className="mt-12">{children ?? <LabeledList items={items} />}</div>
      </div>
      <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
        <MediaFrame src={img} alt={imgAlt} tag={tag} className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
      </div>
    </div>
  </Section>
);

/** Numbered process cards: [{ title, text }]. The final step is highlighted. */
export const StepCards = ({ steps }) => {
  const cols = steps.length === 6 ? "lg:grid-cols-3 xl:grid-cols-6" : steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <div className={`mt-16 grid sm:grid-cols-2 ${cols} gap-5`}>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <Reveal key={s.title} delay={i * 0.07}>
            <div
              data-testid={`step-${i + 1}`}
              className={`group relative h-full p-8 border transition-colors duration-500 ${
                last ? "bg-gold/[0.06] border-gold/30" : "bg-[#1A1A1A] border-white/5 hover:border-gold/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex items-center justify-center w-11 h-11 rounded-full font-serif text-lg ${
                    last ? "bg-gold text-black" : "border border-gold/40 text-gold"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-light text-[#F5F5F0] leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm font-light text-[#A0A0A0] leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

/** Icon tile + title + text rows: [{ icon, title, text, href?, linkLabel? }] */
export const IconRows = ({ items }) => (
  <div className="mt-16 divide-y divide-white/5 border-y border-white/5">
    {items.map((it, i) => {
      const last = i === items.length - 1;
      return (
        <Reveal key={it.title} delay={i * 0.08}>
          <div className="group grid sm:grid-cols-[auto_1fr_auto] gap-6 sm:gap-10 items-center py-10">
            <span
              className={`flex items-center justify-center w-16 h-16 border transition-colors duration-500 ${
                last ? "bg-gold border-gold text-black" : "border-gold/30 text-gold group-hover:border-gold"
              }`}
            >
              <it.icon size={26} strokeWidth={1.25} />
            </span>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F5F5F0]">{it.title}</h3>
              <p className="mt-2 text-sm font-light text-[#A0A0A0] leading-relaxed max-w-2xl">{it.text}</p>
            </div>
            {it.href && (
              <a
                href={it.href}
                className="text-[10px] tracking-[0.35em] uppercase text-gold hover:text-gold-soft transition-colors duration-300 whitespace-nowrap"
              >
                {it.linkLabel ?? "Explore"} →
              </a>
            )}
          </div>
        </Reveal>
      );
    })}
  </div>
);

/** Two side-by-side option cards: [{ eyebrow, title, points: [[label, text]], featured? }] */
export const PathwayCards = ({ items }) => (
  <div className="mt-16 grid lg:grid-cols-2 gap-5">
    {items.map((it, i) => (
      <Reveal key={it.title} delay={i * 0.1}>
        <div
          data-testid={`pathway-${i}`}
          className={`relative h-full p-10 lg:p-12 border transition-colors duration-500 ${
            it.featured ? "bg-gold/[0.05] border-gold/30" : "bg-[#1A1A1A] border-white/5 hover:border-gold/30"
          }`}
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold">{it.eyebrow}</p>
          <h3 className="mt-5 font-serif text-3xl sm:text-4xl font-light text-[#F5F5F0] leading-tight">{it.title}</h3>
          <div className="gold-hairline w-24 mt-7" />
          <ul className="mt-8 space-y-6">
            {it.points.map(([label, text]) => (
              <li key={label} className="flex gap-4">
                <span className="mt-2.5 w-3 h-px bg-gold shrink-0" />
                <p className="text-sm font-light text-[#A0A0A0] leading-relaxed">
                  <span className="text-[#F5F5F0] font-normal">{label}:</span> {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    ))}
  </div>
);

/**
 * Responsive table. columns: [{ key, label, accent?, strong? }]
 * Renders a real table from md up and stacked cards on mobile.
 */
export const DataTable = ({ columns, rows, caption, note }) => (
  <Reveal className="mt-16">
    <div className="hidden md:block border border-white/5 bg-[#141414] overflow-x-auto">
      <table className="w-full text-left" data-testid="data-table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-gold/20">
            {columns.map((c) => (
              <th key={c.key} scope="col" className="px-6 lg:px-8 py-6 text-[10px] tracking-[0.35em] uppercase font-normal text-gold">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300">
              {columns.map((c, j) =>
                j === 0 ? (
                  <th key={c.key} scope="row" className="px-6 lg:px-8 py-6 font-serif text-lg lg:text-xl font-normal text-[#F5F5F0] align-top">
                    {r[c.key]}
                  </th>
                ) : (
                  <td
                    key={c.key}
                    className={`px-6 lg:px-8 py-6 text-sm align-top ${
                      c.accent ? "text-gold font-normal whitespace-nowrap" : "font-light text-[#C8C8C2]"
                    }`}
                  >
                    {r[c.key]}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="md:hidden space-y-4">
      {rows.map((r, i) => (
        <div key={i} className="bg-[#1A1A1A] border border-white/5 p-6">
          <p className="font-serif text-xl text-[#F5F5F0]">{r[columns[0].key]}</p>
          <div className="gold-hairline w-16 my-4" />
          <dl className="space-y-3">
            {columns.slice(1).map((c) => (
              <div key={c.key} className="flex justify-between gap-6">
                <dt className="shrink-0 text-[9px] tracking-[0.3em] uppercase text-[#A0A0A0] pt-1">{c.label}</dt>
                <dd className={`text-sm text-right ${c.accent ? "text-gold" : "font-light text-[#C8C8C2]"}`}>{r[c.key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
    {note && <p className="mt-6 text-[11px] font-light text-[#666] leading-relaxed">{note}</p>}
  </Reveal>
);

/** Large headline figures: [[value, label]]. Three or four per row. */
export const StatRow = ({ stats }) => {
  const four = stats.length >= 4;
  return (
    <div
      className={`mt-20 grid gap-12 border-t border-gold/10 pt-16 ${
        four ? "grid-cols-2 lg:grid-cols-4 gap-x-6" : "sm:grid-cols-3 sm:gap-6"
      }`}
    >
      {stats.map(([value, label], i) => (
        <Reveal key={label} delay={i * 0.1} className="text-center">
          <p
            className={`font-serif font-light text-gold-gradient leading-none ${
              four ? "text-5xl sm:text-6xl xl:text-7xl" : "text-7xl lg:text-8xl"
            }`}
          >
            {value}
          </p>
          <p className="mt-6 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#C8C8C2] leading-relaxed">
            {label}
          </p>
        </Reveal>
      ))}
    </div>
  );
};

/** Icon + label + value rows: [{ icon, label, value }]. Stacks label over value on small screens. */
export const FactList = ({ items }) => (
  <dl className="border-t border-gold/10">
    {items.map((it, i) => (
      <Reveal key={it.label} delay={i * 0.06}>
        <div className="flex gap-5 py-6 border-b border-white/5">
          <span className="flex items-center justify-center w-10 h-10 shrink-0 border border-gold/30 text-gold">
            <it.icon size={17} strokeWidth={1.25} />
          </span>
          <div className="min-w-0">
            <dt className="text-[10px] tracking-[0.35em] uppercase text-gold/80">{it.label}</dt>
            <dd className="mt-1.5 text-sm sm:text-base font-light text-[#F5F5F0] leading-relaxed break-words">{it.value}</dd>
          </div>
        </div>
      </Reveal>
    ))}
  </dl>
);

/** Side-by-side detail cards: [{ eyebrow?, title, points: [[label, text]], featured? }] */
export const DetailCards = ({ items, className = "mt-16" }) => (
  <div className={`${className} grid md:grid-cols-2 gap-5`}>
    {items.map((it, i) => (
      <Reveal key={it.title} delay={i * 0.08}>
        <div
          className={`h-full p-8 lg:p-10 border transition-colors duration-500 ${
            it.featured ? "bg-gold/[0.05] border-gold/30" : "bg-[#1A1A1A] border-white/5 hover:border-gold/30"
          }`}
        >
          {it.eyebrow && <p className="text-[10px] tracking-[0.4em] uppercase text-gold">{it.eyebrow}</p>}
          <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-light text-[#F5F5F0] leading-tight">{it.title}</h3>
          <div className="gold-hairline w-20 mt-6" />
          <dl className="mt-6 space-y-4">
            {it.points.map(([label, text]) => (
              <div key={label} className="grid sm:grid-cols-[7.5rem_minmax(0,1fr)] gap-1 sm:gap-4">
                <dt className="text-[10px] tracking-[0.25em] uppercase text-[#A0A0A0] pt-1">{label}</dt>
                <dd className="text-sm font-light text-[#F5F5F0] leading-relaxed break-words">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    ))}
  </div>
);

/** Chapter divider between groups of content. */
export const ChapterBand = ({ id, eyebrow, title, goldWord, text }) => (
  <section
    id={id}
    className="relative px-6 lg:px-10 py-24 lg:py-32 border-y border-gold/10 overflow-hidden"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.07),transparent_60%)]" />
    <Reveal className="relative max-w-7xl mx-auto">
      <span className="block w-12 h-px bg-gold mb-8" />
      <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-6">{eyebrow}</p>
      <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-7xl tracking-tight text-[#F5F5F0] leading-[1.05] max-w-5xl">
        {title} {goldWord && <span className="text-gold-gradient italic">{goldWord}</span>}
      </h2>
      {text && <p className="mt-8 max-w-2xl text-sm sm:text-base font-light text-[#A0A0A0] leading-relaxed">{text}</p>}
    </Reveal>
  </section>
);

/**
 * Single-series horizontal bar comparison: [{ label, value, display }].
 * Bars scale to the largest value; the figure is printed beside every bar.
 */
export const BarCompare = ({ rows, caption, note }) => {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <Reveal className="mt-16">
      <figure className="bg-[#141414] border border-white/5 p-6 sm:p-10">
        {caption && <figcaption className="sr-only">{caption}</figcaption>}
        <ul className="space-y-6 sm:space-y-5">
          {rows.map((r) => (
            <li
              key={r.label}
              title={`${r.label}: ${r.display}`}
              className="group grid grid-cols-[1fr_auto] sm:grid-cols-[minmax(0,15rem)_1fr_6.5rem] items-center gap-x-6 gap-y-3"
            >
              <span className="text-sm font-light text-[#F5F5F0] leading-snug">{r.label}</span>
              <span className="sm:order-last text-right font-serif text-lg text-[#F5F5F0] whitespace-nowrap">{r.display}</span>
              <span className="col-span-2 sm:col-span-1 block h-2.5 bg-white/[0.05] rounded-[4px] overflow-hidden">
                <span
                  className="block h-full rounded-[4px] bg-gold/80 transition-colors duration-300 group-hover:bg-gold"
                  style={{ width: `${(r.value / max) * 100}%` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </figure>
      {note && <p className="mt-6 text-[11px] font-light text-[#666] leading-relaxed">{note}</p>}
    </Reveal>
  );
};

/** Centered pull-quote. */
export const PullQuote = ({ quote, text }) => (
  <Reveal className="mt-20 max-w-4xl mx-auto text-center">
    <Quote size={36} strokeWidth={1} className="mx-auto text-gold" />
    <blockquote className="mt-8 font-serif italic font-light text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F0] leading-[1.1]">
      “{quote}”
    </blockquote>
    <div className="gold-hairline w-32 mx-auto my-10" />
    <p className="max-w-2xl mx-auto text-sm sm:text-base font-light text-[#A0A0A0] leading-relaxed">{text}</p>
  </Reveal>
);

/** Closing statement band. */
export const ClosingCTA = ({ eyebrow, title, goldWord, tags, cta = { label: "Begin the Conversation", href: "#contact" } }) => (
  <section data-testid="closing-cta" className="relative py-32 lg:py-44 px-6 lg:px-10 border-y border-gold/10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_65%)]" />
    <Reveal className="relative max-w-5xl mx-auto text-center">
      <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-8">{eyebrow}</p>
      <h2 className="font-serif font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F5F0] leading-[1.05]">
        {title} {goldWord && <span className="text-gold-gradient italic">{goldWord}</span>}
      </h2>
      <p className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] tracking-[0.3em] uppercase text-[#C8C8C2]">
        {tags.map((t, i) => (
          <span key={t} className="flex items-center gap-4">
            {i > 0 && <span className="text-gold/60">·</span>}
            {t}
          </span>
        ))}
      </p>
      <div className="gold-hairline w-32 mx-auto mt-10" />
      <a
        href={cta.href}
        data-testid="closing-cta-btn"
        className="mt-12 inline-block px-10 py-4 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 hover:bg-gold-soft"
      >
        {cta.label}
      </a>
    </Reveal>
  </section>
);
