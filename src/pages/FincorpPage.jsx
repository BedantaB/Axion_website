import React from "react";
import { motion } from "framer-motion";
import { Landmark, Gauge, Percent, Home, Building2, HardHat } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  PageHero,
  Section,
  FeatureCards,
  SplitFeature,
  DataTable,
  IconRows,
  PathwayCards,
  ClosingCTA,
} from "@/components/page/Blocks";

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  homeLoans: u("1560518883-ce09059eeffa"),
  lap: u("1486406146926-c627a92ad1ab"),
  construction: u("1581092160562-40aa08e78837"),
  journey: u("1450101499163-c8848c66ca85"),
};

const platform = [
  { icon: Landmark, title: "30+ Lending Partners", text: "Top public banks, private banks, NBFCs." },
  { icon: Gauge, title: "Rapid Sanctioning", text: "Digital underwriting within 72 hours." },
  { icon: Percent, title: "Lowest Rate Matching", text: "Starting at 7.10% p.a. floating." },
];

const verticals = [
  {
    icon: Home,
    title: "Home Loans",
    text: "Up to 90% LTV for ready homes, under-construction flats, balance transfers.",
    href: "#home-loans",
    linkLabel: "Key Highlights",
  },
  {
    icon: Building2,
    title: "Loan Against Property (LAP)",
    text: "High-value business capital unlocked via residential or commercial real estate.",
    href: "#lap",
    linkLabel: "Unlock Equity",
  },
  {
    icon: HardHat,
    title: "Land & Construction Loans",
    text: "Tranche-based disbursements for residential plots, self-construction, composite projects.",
    href: "#construction-loans",
    linkLabel: "Tailored Funding",
  },
];

const homeLoans = [
  ["Interest Rates", "Starting 7.10% p.a. repo-linked floating"],
  ["Loan Quantum", "₹15 Lakh up to ₹15 Crore+"],
  ["Flexible Tenure", "Repayment window up to 30 years"],
  ["Zero Prepayment Penalty", "Standard across all floating-rate loans"],
];

const bankRates = {
  columns: [
    { key: "bank", label: "Bank Name" },
    { key: "sector", label: "Sector" },
    { key: "rate", label: "Interest Rate (p.a.)", accent: true },
    { key: "tenure", label: "Max Tenure" },
    { key: "fee", label: "Processing Fee" },
  ],
  rows: [
    { bank: "Bank of India", sector: "Public", rate: "7.10% – 9.35%", tenure: "30 Years", fee: "0.25% + GST" },
    { bank: "Bank of Baroda", sector: "Public", rate: "7.20% – 9.10%", tenure: "30 Years", fee: "Up to 0.50% + GST" },
    { bank: "State Bank of India (SBI)", sector: "Public", rate: "7.25% – 8.70%", tenure: "30 Years", fee: "0.35% + GST" },
    { bank: "HDFC Bank", sector: "Private", rate: "7.20% – 9.00%", tenure: "30 Years", fee: "Up to ₹10,000 + GST" },
    { bank: "Axis Bank", sector: "Private", rate: "7.60% – 9.90%", tenure: "30 Years", fee: "Up to 1.00% + GST" },
    { bank: "ICICI Bank", sector: "Private", rate: "7.65% – 9.80%", tenure: "30 Years", fee: "0.50% + GST" },
    { bank: "Kotak Mahindra Bank", sector: "Private", rate: "7.60% – 9.50%", tenure: "25 Years", fee: "Up to 0.50% + GST" },
  ],
};

const nbfcRates = [
  ["LIC Housing Finance", 7.15],
  ["Bajaj Housing Finance", 7.45],
  ["Tata Capital Housing", 7.75],
  ["Godrej Housing Finance", 7.75],
  ["L&T Finance", 7.8],
  ["PNB Housing Finance", 7.99],
];

const lap = [
  ["High LTV Ratio", "Up to 70% of property market value"],
  ["End-Use Freedom", "Business expansion, working capital, debt consolidation"],
  ["Extended Tenure", "Structured repayment up to 15–20 years"],
  ["Collateral Options", "Residential, commercial, or industrial properties"],
];

const lapRates = {
  columns: [
    { key: "lender", label: "Lender Name" },
    { key: "category", label: "Category" },
    { key: "rate", label: "LAP Interest Rate (p.a.)", accent: true },
    { key: "ltv", label: "Max LTV" },
    { key: "tenure", label: "Max Tenure" },
  ],
  rows: [
    { lender: "HDFC Bank", category: "Private Bank", rate: "9.00% – 11.00%", ltv: "Up to 65%", tenure: "15 Years" },
    { lender: "IDFC FIRST Bank", category: "Private Bank", rate: "9.25% onwards", ltv: "Up to 70%", tenure: "25 Years" },
    { lender: "State Bank of India (SBI)", category: "Public Bank", rate: "9.45% – 10.85%", ltv: "Up to 65%", tenure: "15 Years" },
    { lender: "ICICI Bank", category: "Private Bank", rate: "9.50% – 11.25%", ltv: "Up to 70%", tenure: "15 Years" },
    { lender: "Bajaj Finance", category: "NBFC", rate: "9.75% – 13.50%", ltv: "Up to 75%", tenure: "18 Years" },
    { lender: "Tata Capital", category: "NBFC", rate: "10.10% – 13.75%", ltv: "Up to 70%", tenure: "15 Years" },
    { lender: "Aditya Birla Finance", category: "NBFC", rate: "10.25% – 14.00%", ltv: "Up to 70%", tenure: "15 Years" },
  ],
};

const construction = [
  ["Interest Rates", "7.45% to 9.75% p.a. across top lenders"],
  ["Composite Loans", "Single facility covering plot purchase plus construction"],
  ["Stage Disbursement", "Funds released per verified construction milestone"],
  ["Major Lenders", "SBI, HDFC Bank, PNB Housing, LIC HFL, Bajaj"],
];

const lenderStrategy = [
  {
    eyebrow: "Banks",
    title: "Banks (SBI, HDFC, ICICI)",
    points: [
      ["Lowest Pricing", "7.10% – 7.65% starting rates"],
      ["Repo Linked", "Rapid downward rate transmission"],
      ["Ideal Profile", "Salaried applicants with 750+ CIBIL"],
    ],
  },
  {
    eyebrow: "NBFCs",
    title: "NBFCs (Bajaj, Tata, LIC HFL)",
    featured: true,
    points: [
      ["Flexible Underwriting", "Cash-flow and surrogate income programs"],
      ["Higher LTV", "Up to 75% on LAP & commercial assets"],
      ["Ideal Profile", "Self-employed, MSMEs, complex properties"],
    ],
  },
];

const journey = [
  ["Credit & Property Assessment", "Instant eligibility check across 30+ lenders."],
  ["Rate & Term Negotiation", "Tailored bank or NBFC offer selection."],
  ["Legal & Technical Valuation", "End-to-end title verification and valuation."],
  ["Fast Sanction & Disbursal", "Direct fund transfer with zero hidden charges."],
];

/* Starting-rate bar list. Bars share a zero baseline so lengths stay honest;
   values are printed beside each bar so nobody has to read lengths precisely. */
const SCALE_MAX = 10;

const RateBars = ({ data }) => (
  <Reveal className="mt-16">
    <div className="bg-[#141414] border border-white/5 p-8 sm:p-12" role="figure" aria-label="Home loan starting rates at top NBFCs and HFCs">
      <ul className="space-y-6">
        {data.map(([name, rate], i) => (
          <li
            key={name}
            title={`${name}: starting ${rate.toFixed(2)}% p.a.`}
            className="group grid grid-cols-[1fr_auto] sm:grid-cols-[14rem_1fr_6.5rem] items-center gap-x-6 gap-y-3"
          >
            <span className="font-serif text-lg sm:text-xl text-[#F5F5F0] group-hover:text-gold transition-colors duration-300">{name}</span>
            <span className="order-last col-span-2 sm:order-none sm:col-span-1 relative h-3 bg-white/[0.04] rounded-r-[4px]">
              {/* Full-size element scaled from 0 — a zero-width element never registers as "in view". */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: `${(rate / SCALE_MAX) * 100}%` }}
                className="absolute inset-y-0 left-0 origin-left rounded-r-[4px] bg-gradient-to-r from-gold/70 to-gold group-hover:to-gold-soft"
              />
            </span>
            <span className="text-right text-sm tabular-nums text-[#F5F5F0]">
              {rate.toFixed(2)}% <span className="text-[#A0A0A0] text-xs">p.a.</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] tracking-[0.3em] uppercase text-[#666]">
        <span>0%</span>
        <span>Starting rate, p.a.</span>
        <span>{SCALE_MAX}%</span>
      </div>
    </div>
  </Reveal>
);

const FincorpPage = () => (
  <PageLayout title="Axion Fincorp — Smart Property & Housing Finance">
    <PageHero
      img={IMG.hero}
      imgAlt="Finance advisory desk"
      crumb="Fincorp"
      eyebrow="Axion Fincorp"
      title="Smart Property &"
      goldTitle="Housing Finance"
      subtitle="Home Loans, Loan Against Property, and Land & Construction Funding Across Top Banks & NBFCs"
      primary={{ label: "Compare Lender Rates", href: "#bank-rates" }}
      secondary={{ label: "Check Eligibility", href: "#contact" }}
    />

    <Section id="platform">
      <SectionHeading eyebrow="01 — Platform Overview" title="One Platform." goldWord="Every Property Loan." />
      <FeatureCards items={platform} />
    </Section>

    <Section id="products" alt>
      <SectionHeading eyebrow="02 — Product Suite" title="Three Core" goldWord="Financing Verticals" />
      <IconRows items={verticals} />
    </Section>

    <SplitFeature
      id="home-loans"
      eyebrow="03 — Vertical 01"
      title="Home Loans:"
      goldWord="Key Highlights"
      items={homeLoans}
      img={IMG.homeLoans}
      imgAlt="House model with keys"
      tag="Home Loans"
    />

    <Section id="bank-rates" alt>
      <SectionHeading eyebrow="04 — Rate Benchmark — Banks" title="Home Loan Interest Rates:" goldWord="Major Banks" />
      <DataTable caption="Home loan interest rates at major banks" columns={bankRates.columns} rows={bankRates.rows} />
    </Section>

    <Section id="nbfc-rates">
      <SectionHeading eyebrow="05 — Rate Benchmark — HFCs & NBFCs" title="Home Loan Starting Rates:" goldWord="Top NBFCs & HFCs" />
      <RateBars data={nbfcRates} />
    </Section>

    <SplitFeature
      id="lap"
      alt
      reverse
      eyebrow="06 — Vertical 02"
      title="Loan Against Property (LAP):"
      goldWord="Unlock Equity"
      items={lap}
      img={IMG.lap}
      imgAlt="Commercial office towers"
      tag="Loan Against Property"
    />

    <Section id="lap-rates">
      <SectionHeading eyebrow="07 — LAP Rate Matrix" title="Loan Against Property:" goldWord="Major Banks & NBFCs" />
      <DataTable caption="Loan against property rates at major banks and NBFCs" columns={lapRates.columns} rows={lapRates.rows} />
    </Section>

    <SplitFeature
      id="construction-loans"
      alt
      eyebrow="08 — Vertical 03"
      title="Land & Construction Loans:"
      goldWord="Tailored Funding"
      items={construction}
      img={IMG.construction}
      imgAlt="Architectural drawings on a desk"
      tag="Land & Construction"
    />

    <Section id="lender-strategy">
      <SectionHeading eyebrow="09 — Lender Selection Strategy" title="Public & Private Banks" goldWord="vs. NBFCs" />
      <PathwayCards items={lenderStrategy} />
    </Section>

    <SplitFeature
      id="journey"
      alt
      reverse
      eyebrow="10 — Customer Journey"
      title="Seamless 4-Step"
      goldWord="Sanction Workflow"
      img={IMG.journey}
      imgAlt="Signing loan documents"
      items={journey}
      tag="Customer Journey"
    />

    <ClosingCTA
      eyebrow="Partner With Axion Fincorp"
      title="Unlock the Best Property Loan"
      goldWord="Rates Today"
      tags={["Home Loans", "Loan Against Property", "Land & Construction"]}
      cta={{ label: "Get a Rate Quote", href: "#contact" }}
    />

    <EnquiryForm eyebrow="11 — Get in Touch" defaultInterest="Axion Fincorp — Home Loan" />
  </PageLayout>
);

export default FincorpPage;
