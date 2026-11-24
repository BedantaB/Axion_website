import React from "react";
import { MapPin } from "lucide-react";
import { Monogram } from "./Logo";
import { pageUrl } from "@/lib/links";

// [label, href]. A null href renders as plain text until that page exists.
const columns = [
  {
    title: "Entities",
    links: [
      ["Axion Realty", pageUrl("realty")],
      ["Axion Infrastructure", pageUrl("infrastructure")],
      ["Axion Fincorp", pageUrl("fincorp")],
      ["Axion Interior & Crafting", pageUrl("interiors")],
    ],
  },
  {
    title: "Fincorp Products",
    links: [
      ["Home Loan", pageUrl("fincorp", "#home-loans")],
      ["Loan Against Property", pageUrl("fincorp", "#lap")],
      ["Construction Loan", pageUrl("fincorp", "#construction-loans")],
    ],
  },
  {
    title: "Services",
    links: [
      ["Transaction Advisory", "#contact"],
      ["Leasing & Investment Advisory", "#contact"],
      ["Management Services", "#contact"],
      ["Technology Solutions", "#contact"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", pageUrl("about")],
      ["Leadership Team", pageUrl("leadership-team")],
      ["Board of Directors", pageUrl("board-of-directors")],
      ["Community Impact", null],
      ["Careers", pageUrl("careers")],
      ["Contact Us", "#contact"],
    ],
  },
];

const offices = ["Noida", "Gurgaon", "Kolkata"];
const upcomingOffices = ["Dubai", "Goa", "Bombay", "Pune"];

const linkClass = "text-xs font-light text-[#A0A0A0] leading-relaxed";

const ColumnTitle = ({ children }) => (
  <p className="flex items-start gap-3 text-[10px] leading-[1.4] tracking-[0.4em] uppercase text-gold mb-6">
    <span className="w-px h-3 mt-px bg-gold shrink-0" aria-hidden />
    {children}
  </p>
);

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-gold/10 px-6 lg:px-10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-3">
        <div className="flex items-center gap-4">
          <Monogram size={52} />
          <div>
            <p className="font-serif text-xl tracking-[0.2em] text-[#F5F5F0]">
              AXION <span className="text-gold">SPACE</span>
            </p>
            <p className="text-[9px] tracking-[0.5em] text-[#A0A0A0] mt-1">LLP</p>
          </div>
        </div>
        <p className="mt-8 max-w-sm text-sm font-light text-[#A0A0A0] leading-relaxed">
          A multi-disciplinary conglomerate driven by visionary leadership and uncompromising
          quality — across realty, infrastructure, finance and interiors in Delhi NCR.
        </p>
        <a
          href="mailto:support@axionspace.com"
          className="mt-6 inline-block text-xs font-light text-[#A0A0A0] hover:text-gold transition-colors duration-300"
        >
          support@axionspace.com
        </a>
      </div>

      <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
        {columns.map((c) => (
          <div key={c.title} data-testid={`footer-col-${c.title.toLowerCase().replace(/\s+/g, "-")}`}>
            <ColumnTitle>{c.title}</ColumnTitle>
            <ul className="space-y-3">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  {href ? (
                    <a href={href} className={`${linkClass} hover:text-gold transition-colors duration-300`}>
                      {label}
                    </a>
                  ) : (
                    <span className={linkClass}>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div data-testid="footer-col-offices">
          <ColumnTitle>Offices</ColumnTitle>
          <ul className="space-y-3">
            {offices.map((o) => (
              <li key={o} className={`flex items-center gap-2 ${linkClass}`}>
                <MapPin size={12} strokeWidth={1.5} className="text-gold/70 shrink-0" />
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-8 mb-4 text-[9px] tracking-[0.35em] uppercase text-gold/70">Opening Soon</p>
          <ul className="space-y-3" data-testid="footer-upcoming-offices">
            {upcomingOffices.map((o) => (
              <li key={o} className="flex items-center gap-2 text-xs font-light text-[#777] leading-relaxed">
                <MapPin size={12} strokeWidth={1.5} className="text-gold/35 shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[10px] tracking-[0.25em] uppercase text-[#666]">
        © {new Date().getFullYear()} Axion Space LLP. All rights reserved.
      </p>
      <p className="text-[10px] tracking-[0.25em] uppercase text-[#666]">Crafting Excellence · Building Futures</p>
    </div>
  </footer>
);
