import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero, Section, DataTable } from "@/components/page/Blocks";
import { Portrait } from "@/components/page/People";
import { pageUrl } from "@/lib/links";

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: u("1450101499163-c8848c66ca85"),
};

// To add a photo later: put the image in public/board/ and set photo: "/board/<file>.jpg".
const directors = [
  {
    name: "Mr Vishal Barman",
    role: "Chairman, Whole Time Director & Promoter",
    vertical: "Fractional & All the Group of Companies",
    chair: true,
    roles: [
      [
        "Group Vision & Strategic Leadership",
        "Leads the Board of Directors, sets overarching corporate vision, and drives long-term expansion across all group entities in India and Dubai.",
      ],
      [
        "Fractional Ecosystem Architect",
        "Spearheads the flagship 10%–25% Micro-Registry fractional investment model across Real Estate, Hospitality, Petrol Pumps, Luxury Transit (Volvo 9600), Restaurants & Dhabas, and Logistics.",
      ],
      [
        "Cross-Vertical Synergy & Governance",
        "Chairs Board meetings, aligns vertical CEOs, and enforces the group’s “We Not Me” collaborative wealth ethos.",
      ],
      [
        "Institutional & HNI Relations",
        "Serves as chief ambassador for HNIs, family offices, and international partners, safeguarding investor trust and escrow transparency.",
      ],
    ],
  },
  {
    name: "Mr Yash Garg",
    role: "CEO & Co-Promoter",
    vertical: "Axion Realty",
    roles: [
      [
        "Real Estate Sales & Underwriting Strategy",
        "Directs overall operations, revenue targets, and go-to-market execution for Axion Realty, including bulk inventory underwriting and retail/investor distribution.",
      ],
      [
        "Pipeline & Project Execution",
        "Leads deal closures and sales velocity across core residential, commercial, and land pipelines (Sector 1 Land, Savior Sec 16C, Rudra Heights, and Luxury Farmhouses).",
      ],
      [
        "Sales Force & Channel Partner Network",
        "Oversees internal sales leadership (Team Leaders and Sales Executives) and scales the empanelled Channel Partner network to achieve the 5x monthly revenue benchmark.",
      ],
      [
        "Client Acquisition & VR Experience",
        "Champions modern sales workflows, including 360-degree VR walkthroughs, transparent cost-sheet structuring, and seamless buyer/investor onboarding.",
      ],
    ],
  },
  {
    name: "Mr Aditya Harayan",
    role: "CEO & Co-Promoter",
    vertical: "Axion Infrastructure & Leasing Commercial Advisory",
    roles: [
      [
        "Infrastructure & Master Planning",
        "Leads land aggregation, site development, architectural execution, and Vastu-compliant master planning for farmhouse estates, resorts, and commercial hubs.",
      ],
      [
        "Commercial Leasing & Corporate Advisory",
        "Directs institutional and corporate leasing strategies for commercial studio suites, office floors, retail hubs (Urbtech Sec 153 corridors), and warehousing assets.",
      ],
      [
        "Yield & Tenant Management",
        "Secures long-term anchor tenants, negotiates institutional lease agreements, and maintains high occupancy to deliver predictable monthly rental yields to fractional investors.",
      ],
      [
        "Regulatory & Technical Compliance",
        "Oversees RERA adherence, municipal approvals, construction timelines, and quality audits across all infrastructure projects.",
      ],
    ],
  },
  {
    name: "Mr Rishab Singhal",
    role: "CEO & Co-Promoter",
    vertical: "Interior & Fincorp",
    roles: [
      [
        "Financial Structuring & Syndicate Pooling (Fincorp)",
        "Designs debt/equity structures, manages SPV formations, oversees investor capital pooling, and monitors escrow account compliance and monthly ROI payouts.",
      ],
      [
        "Asset Valuation & Yield Modeling",
        "Conducts financial due diligence, cap-rate analysis, and 5-year IRR projections for every fractional asset class prior to investor onboarding.",
      ],
      [
        "Turnkey Interior Execution & Asset Enhancement (Interior)",
        "Leads luxury interior design, fit-outs, and furnishing for commercial studios, boutique hotels, PGs, and farmhouses to elevate asset value and rental appeal.",
      ],
      [
        "Cost Control & Vendor Procurement",
        "Manages OPEX/CAPEX efficiency, turnkey fit-out budgets, and strategic vendor partnerships to maximize net profit margins across group projects.",
      ],
    ],
  },
];

const matrix = {
  columns: [
    { key: "member", label: "Board Member" },
    { key: "designation", label: "Designation", accent: true },
    { key: "vertical", label: "Core Vertical" },
    { key: "mandate", label: "Primary Mandate" },
  ],
  rows: [
    {
      member: "Mr Vishal Barman",
      designation: "Chairman, Whole Time Director & Promoter",
      vertical: "Fractional & All Group Companies",
      mandate: "Group vision, fractional ecosystem, HNI/global expansion & board governance",
    },
    {
      member: "Mr Yash Garg",
      designation: "CEO & Co-Promoter",
      vertical: "Axion Realty",
      mandate: "Real estate sales, underwriting velocity, sales team & channel partner scaling",
    },
    {
      member: "Mr Aditya Harayan",
      designation: "CEO & Co-Promoter",
      vertical: "Axion Infrastructure & Leasing Commercial Advisory",
      mandate: "Land development, Vastu planning, commercial leasing & anchor tenant yields",
    },
    {
      member: "Mr Rishab Singhal",
      designation: "CEO & Co-Promoter",
      vertical: "Interior & Fincorp",
      mandate: "Financial structuring, escrow/SPV governance, ROI modeling & turnkey interiors",
    },
  ],
};

const DirectorCard = ({ d, i }) => (
  <Reveal delay={d.chair ? 0 : i * 0.08} className={d.chair ? "lg:col-span-3" : ""}>
    <article
      data-testid={`director-${i}`}
      className={`h-full p-8 lg:p-10 border transition-colors duration-500 ${
        d.chair ? "bg-gold/[0.05] border-gold/30" : "bg-[#1A1A1A] border-white/5 hover:border-gold/30"
      }`}
    >
      <div className="flex items-center gap-6">
        <Portrait name={d.name} photo={d.photo} size={d.chair ? "lg" : "md"} />
        <div className="min-w-0">
          <h3 className={`font-serif font-light text-[#F5F5F0] leading-tight ${d.chair ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
            {d.name}
          </h3>
          <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-gold leading-relaxed">{d.role}</p>
          <p className="mt-1.5 text-xs font-light text-[#C8C8C2] leading-relaxed">{d.vertical}</p>
        </div>
      </div>

      <div className="gold-hairline w-20 mt-8" />
      <p className="mt-8 text-[10px] tracking-[0.4em] uppercase text-[#A0A0A0]">Key Roles & Responsibilities</p>
      <ul className={`mt-6 grid gap-6 ${d.chair ? "md:grid-cols-2 md:gap-x-12" : ""}`}>
        {d.roles.map(([label, text]) => (
          <li key={label} className="flex gap-4">
            <span className="mt-2.5 w-3 h-px bg-gold shrink-0" />
            <p className="text-sm font-light text-[#A0A0A0] leading-relaxed">
              <span className="text-[#F5F5F0] font-normal">{label}:</span> {text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  </Reveal>
);

export default function BoardPage() {
  return (
    <PageLayout title="Board of Directors — Axion Space Group of Companies">
      <PageHero
        img={IMG.hero}
        imgAlt="Executive boardroom meeting"
        crumb="Board of Directors"
        eyebrow="Corporate Governance & Executive Board"
        title="Board of"
        goldTitle="Directors"
        subtitle="The Board provides strategic oversight, capital governance, and fiduciary stewardship across all entities and fractional business verticals of the Axion Space Group of Companies."
        primary={{ label: "Meet the Board", href: "#directors" }}
        secondary={{ label: "About the Group", href: pageUrl("about") }}
      />

      <Section id="directors">
        <SectionHeading eyebrow="01 — Board Members & Vertical Governance" title="The People Behind" goldWord="We Not Me" />
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {directors.map((d, i) => (
            <DirectorCard key={d.name} d={d} i={i} />
          ))}
        </div>
      </Section>

      <Section id="governance-matrix" alt>
        <SectionHeading eyebrow="02 — At a Glance" title="Summary Governance" goldWord="Matrix" />
        <DataTable caption="Board members, designations, verticals and mandates" {...matrix} />
      </Section>

      <EnquiryForm eyebrow="03 — Get in Touch" defaultInterest="General / Partnership" />
    </PageLayout>
  );
}
