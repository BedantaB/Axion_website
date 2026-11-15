import React from "react";
import Marquee from "react-fast-marquee";
import { Reveal, SectionHeading } from "./Reveal";
import { Home, KeyRound, HardHat, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Home,
    title: "Home Loan",
    text: "Competitive interest rates, flexible tenures and end-to-end processing for residential property buyers — from application to disbursal.",
    points: ["Rates from leading banks", "Tenure up to 30 years", "Doorstep documentation"],
  },
  {
    icon: KeyRound,
    title: "Loan Against Property",
    text: "High-value liquidity unlocked securely against your residential and commercial real estate assets, with structured repayment.",
    points: ["High LTV structuring", "Business & personal use", "Swift valuation cycle"],
  },
  {
    icon: HardHat,
    title: "Construction Loan",
    text: "Milestone-based funding for self-build projects, developers and infrastructure ventures — disbursed as your structure rises.",
    points: ["Stage-wise disbursal", "Developer-friendly terms", "Project monitoring support"],
  },
];

const partners = [
  { name: "HDFC Bank", type: "Banking Partner" },
  { name: "State Bank of India", type: "Banking Partner" },
  { name: "ICICI Bank", type: "Banking Partner" },
  { name: "Bajaj Housing Finance", type: "NBFC Partner" },
  { name: "Tata Capital", type: "NBFC Partner" },
];

export const Fincorp = () => (
  <section id="fincorp" data-testid="fincorp-section" className="py-28 lg:py-36 px-6 lg:px-10">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <SectionHeading eyebrow="03 — Axion Fincorp" title="Capital, Structured" goldWord="with Precision" />
        <Reveal delay={0.15}>
          <p className="max-w-md text-sm font-light text-[#A0A0A0] leading-relaxed lg:text-right">
            Powered by <span className="text-gold">Urban Money</span>, Axion Fincorp bridges borrowers
            and top-tier financial institutions — ensuring seamless capital access for individuals
            and businesses.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {products.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div
              data-testid={`fincorp-product-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative h-full bg-[#1A1A1A] border border-white/5 hover:border-gold/30 p-7 lg:p-9 transition-colors duration-500 overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between">
                <p.icon size={30} strokeWidth={1} className="text-gold" />
                <ArrowUpRight size={18} strokeWidth={1.5} className="text-[#A0A0A0] opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-gold" />
              </div>
              <h3 className="mt-8 font-serif text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-light text-[#F5F5F0]">{p.title}</h3>
              <p className="mt-4 text-sm font-light text-[#A0A0A0] leading-relaxed">{p.text}</p>
              <ul className="mt-7 space-y-3 border-t border-white/5 pt-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-xs tracking-wide text-[#C8C8C2]">
                    <span className="w-3 h-px bg-gold" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                data-testid={`fincorp-enquire-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-8 inline-block text-[10px] tracking-[0.35em] uppercase text-gold hover:text-gold-soft transition-colors duration-300"
              >
                Enquire Now →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-24">
      <Reveal>
        <p className="text-center text-[10px] tracking-[0.5em] uppercase text-[#A0A0A0] mb-10" data-testid="partners-eyebrow">
          Our Banking & NBFC Ecosystem
        </p>
      </Reveal>
      <div className="border-y border-gold/10 py-8" data-testid="partners-marquee">
        <Marquee speed={22} gradient={false} pauseOnHover>
          {partners.map((p) => (
            <div key={p.name} className="flex items-baseline gap-4 px-12">
              <span className="font-serif text-2xl sm:text-3xl font-light text-[#F5F5F0]/70 whitespace-nowrap">{p.name}</span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-gold/70 whitespace-nowrap">{p.type}</span>
              <span className="ml-8 text-gold/40 font-serif">·</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  </section>
);
