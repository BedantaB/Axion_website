import React from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { Landmark, TrendingUp, Home, Building2, ArrowUpRight } from "lucide-react";
import { pageUrl } from "@/lib/links";

const IMG = {
  fincorp:
    "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ycG9yYXRlJTIwZmluYW5jZSUyMG9mZmljZSUyMGR1c2t8ZW58MHx8fHwxNzkzMDQ1Mzc1fDA&ixlib=rb-4.1.0&q=85",
  infrastructure:
    "https://images.unsplash.com/photo-1648210475365-1b8ab66c1570?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwY29ycG9yYXRlJTIwZmluYW5jZSUyMG9mZmljZSUyMGR1c2t8ZW58MHx8fHwxNzkzMDQ1Mzc1fDA&ixlib=rb-4.1.0&q=85",
  interiors:
    "https://images.unsplash.com/photo-1616611213095-58abb651f70c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbmlnaHQlMjBsaWdodGluZ3xlbnwwfHx8fDE3OTMwNDUzNzV8MA&ixlib=rb-4.1.0&q=85",
  realty: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=1600&q=80",
};

const pillars = [
  { icon: Landmark, title: "Landmark Developments", text: "Prime NCR corridor locations with transparent documentation and structured MOUs." },
  { icon: TrendingUp, title: "High-Yield Assets", text: "Commercial underwriting and leasing engineered to maximise investor returns." },
  { icon: Home, title: "Luxury Farmhouse Living", text: "Vastu Heritage — The Vedic Village: 5-acre exclusive green living in Greater Noida." },
  { icon: Building2, title: "Architectural Innovation", text: "Exceptional construction quality across residential and commercial formats." },
];

const entities = [
  {
    id: "realty",
    name: "AXION REALTY",
    tag: "Noida Extension Portfolio",
    motto: "Prime Builder Projects",
    text: "Curated townships, ready-to-move apartments and luxury farmhouses from premier and Category A+ builders.",
    img: IMG.realty,
    href: pageUrl("realty"),
    span: "lg:col-span-7",
  },
  {
    id: "fincorp",
    name: "AXION FINCORP",
    tag: "Powered by Urban Money",
    motto: "Financial Solutions",
    text: "Institutional-grade loan structuring — Home Loans, LAP and Construction Loans through top banking and NBFC partners.",
    img: IMG.fincorp,
    href: pageUrl("fincorp"),
    span: "lg:col-span-5",
  },
  {
    id: "interiors",
    name: "AXION INTERIOR & CRAFTING",
    tag: "Turnkey Luxury Design",
    motto: "Crafting Excellence",
    text: "Bespoke interiors, precision woodwork and premium finishes for villas, offices and hospitality fit-outs.",
    img: IMG.interiors,
    href: pageUrl("interiors"),
    span: "lg:col-span-5",
  },
  {
    id: "infrastructure",
    name: "AXION INFRASTRUCTURE",
    tag: "Land, Low-Rise & Villas",
    motto: "Building Futures",
    text: "Joint Venture or 100% upfront turnkey construction of builder floors and villas from 100 sq. yards, pan India.",
    img: IMG.infrastructure,
    href: pageUrl("infrastructure"),
    span: "lg:col-span-7",
  },
];

const EntityCard = ({ e, delay }) => (
  <Reveal delay={delay} className={e.span}>
    <a
      href={e.href ?? "#entities"}
      data-testid={`entity-card-${e.id}`}
      className="group relative block h-full min-h-[340px] lg:min-h-[400px] overflow-hidden border border-white/5 hover:border-gold/30 transition-colors duration-500"
    >
      <img
        src={e.img}
        alt={e.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/55 transition-colors duration-500 group-hover:bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      {e.href && (
        <span className="absolute top-6 right-6 z-10 flex items-center justify-center w-10 h-10 border border-gold/30 text-gold opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:bg-gold group-hover:text-black">
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </span>
      )}
      <div className="relative h-full flex flex-col justify-end p-7 sm:p-8 lg:p-10">
        <span className="block w-10 h-px bg-gold mb-5 transition-all duration-500 group-hover:w-20" />
        <p className="pr-14 text-[9px] tracking-[0.4em] uppercase text-gold mb-3">{e.tag}</p>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide text-[#F5F5F0] break-words">
          {e.name}
        </h3>
        {/* Always visible on touch-sized screens; revealed on hover from lg up. */}
        <p className="mt-3 text-sm font-light text-[#C8C8C2] max-w-md transition-all duration-500 lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
          {e.text}
        </p>
        <p className="mt-4 text-[9px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#A0A0A0] leading-loose">
          {e.motto}
          {e.href && <span className="ml-3 text-gold whitespace-nowrap">· Explore →</span>}
        </p>
      </div>
    </a>
  </Reveal>
);

export const Portfolio = () => (
  <>
    <section id="portfolio" data-testid="realty-section" className="py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="01 — The Foundation" title="Axion Realty &" goldWord="Infrastructure" />
        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <p className="text-base font-light text-[#C8C8C2] leading-relaxed">
              Axion Realty & Infrastructure is the cornerstone of the group — delivering landmark
              developments, luxury farmhouses, commercial hubs and high-yield residential
              properties across Delhi NCR's prime growth corridors.
            </p>
            <p className="mt-6 text-sm font-light text-[#A0A0A0] leading-relaxed">
              From the tranquil greens of Vastu Heritage in Greater Noida to commercial
              underwriting at Urbtech NPX and Spectrum Metro Mall, every project is curated for
              location, documentation transparency and exceptional construction quality.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-gold/10 pt-8" data-testid="realty-stats">
              {[
                ["5+", "Acre Farmhouse Enclave"],
                ["3", "Prime NCR Destinations"],
                ["100%", "Transparent MOUs"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-serif text-3xl sm:text-4xl text-gold-gradient">{num}</p>
                  <p className="mt-2 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] uppercase text-[#A0A0A0] leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["Explore Axion Realty", pageUrl("realty")],
                ["Axion Infrastructure", pageUrl("infrastructure")],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-[10px] tracking-[0.35em] uppercase text-gold hover:text-gold-soft transition-colors duration-300"
                >
                  {label} →
                </a>
              ))}
            </div>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div
                  data-testid={`realty-pillar-${i}`}
                  className="group h-full bg-[#1A1A1A] border border-white/5 hover:border-gold/25 p-8 transition-colors duration-500"
                >
                  <p.icon size={26} strokeWidth={1} className="text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="mt-6 font-serif text-xl text-[#F5F5F0]">{p.title}</h3>
                  <p className="mt-3 text-sm font-light text-[#A0A0A0] leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="entities" data-testid="entities-bento" className="py-28 lg:py-36 px-6 lg:px-10 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="02 — The Group" title="Four Visions," goldWord="One Signature" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {entities.map((e, i) => (
            <EntityCard key={e.id} e={e} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  </>
);
