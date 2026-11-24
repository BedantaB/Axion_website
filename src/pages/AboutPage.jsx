import React from "react";
import { Layers, Landmark, Users, Compass } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero, Section, DataTable, FeatureCards, PullQuote, ClosingCTA } from "@/components/page/Blocks";
import { pageUrl } from "@/lib/links";

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: u("1486406146926-c627a92ad1ab"),
};

const Entity = ({ name, note }) => (
  <>
    {name}
    {note && <span className="block mt-1 font-sans text-[10px] tracking-[0.3em] uppercase text-gold/80">{note}</span>}
  </>
);

const architecture = {
  columns: [
    { key: "entity", label: "Group Entity" },
    { key: "mandate", label: "Core Mandate", accent: true },
    { key: "scope", label: "Operational Scope & Value Delivery" },
  ],
  rows: [
    {
      entity: <Entity name="Axion Space LLP" note="Parent Holding" />,
      mandate: "Governance, Brand & Strategy",
      scope:
        "Acts as the central holding enterprise overseeing corporate governance, investor relations, digital sales infrastructure, and channel partner networks.",
    },
    {
      entity: <Entity name="Axion Infra & Development" />,
      mandate: "Land Aggregation & Construction",
      scope:
        "Executes master planning, Vastu-compliant architectural design, luxury farmhouse estates, residential plots, and turn-key commercial construction.",
    },
    {
      entity: <Entity name="Axion Fincorp & Investments" />,
      mandate: "Underwriting & Fractional SPVs",
      scope:
        "Structures bulk commercial inventory underwriting, 10% to 25% Micro-Registry fractional share blocks, Special Purpose Vehicles (SPVs), and escrow flows.",
    },
    {
      entity: <Entity name="Vishal’s Hotel & Resort" note="Hospitality & Crafting" />,
      mandate: "Leasing, Interiors & Yield Ops",
      scope:
        "Manages commercial studio suites, boutique resorts, highway culinary hubs, interior fit-outs, and recurring monthly rental yield distributions.",
    },
  ],
};

const portfolio = {
  columns: [
    { key: "vertical", label: "Business Vertical" },
    { key: "india", label: "India Market Execution" },
    { key: "dubai", label: "Dubai (UAE) Market Execution" },
  ],
  rows: [
    {
      vertical: "Real Estate & Hospitality",
      india: "Vastu heritage farmhouses, branded PGs, boutique resorts, and commercial studio suites.",
      dubai: "Prime tourism holiday homes and branded hotel apartments in DLD-regulated hubs.",
    },
    {
      vertical: "Fuel & Forecourt Retail",
      india: "Highway petrol pump land leases, OMC dealership acquisitions, and non-fuel retail kiosks.",
      dubai: "Forecourt automation setups and commercial energy equipment trading via free-zone entities.",
    },
    {
      vertical: "Luxury Intercity Travel",
      india: "Fractional fleet pooling of luxury Volvo 9600 coaches operating across high-demand interstate routes.",
      dubai: "VIP corporate coaches and luxury inter-emirate tourist shuttles managed via licensed operators.",
    },
    {
      vertical: "Restaurants & Dhabas",
      india: "Themed highway dhabas and standardized urban vegetarian restaurants with aggregator integration.",
      dubai: "Trans-emirate highway rest stops and fine-dining culinary concepts meeting municipal standards.",
    },
    {
      vertical: "Warehousing & Logistics",
      india: "Grade-A warehouses and commercial EV delivery fleets leased to Fortune 500 3PL partners.",
      dubai: "Automated fulfillment centers and trade logistics assets anchored near major UAE free zones.",
    },
  ],
};

const edge = [
  {
    icon: Layers,
    title: "Micro-Registry Fractional Participation",
    text: "High-value physical assets are structured into deed-backed SPV blocks of 10% to 25%, letting investors diversify across multiple properties while retaining legal title security.",
  },
  {
    icon: Landmark,
    title: "Regulated Escrow & Direct Payouts",
    text: "All investor capital moves through dedicated banking escrow accounts tied to acquisition milestones, with monthly operating yields credited directly via NEFT/RTGS/SWIFT.",
  },
  {
    icon: Users,
    title: "Lean, High-Accountability Leadership",
    text: "Managed centrally by a dedicated leadership core and specialized sales teams: low administrative overhead, transparent quarterly reporting, and complete passive ownership for investors.",
  },
  {
    icon: Compass,
    title: "Technology & Vastu Synthesis",
    text: "Combines ancient Vastu Shastra spatial harmony with 360-degree Virtual Reality property walkthroughs and data-driven financial underwriting.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout title="About Us — Axion Space Group of Companies">
      <PageHero
        img={IMG.hero}
        imgAlt="Modern corporate tower"
        crumb="About Us"
        eyebrow="Corporate Profile & Group Overview"
        title="Axion Space"
        goldTitle="Group of Companies"
        subtitle="“We Not Me” — collective wealth creation and institutional asset development across Delhi-NCR and Dubai."
        primary={{ label: "Board of Directors", href: pageUrl("board-of-directors") }}
        secondary={{ label: "Begin the Conversation", href: "#contact" }}
      />

      <Section id="who-we-are">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="01 — Who We Are" title="Built on" goldWord="Disciplined Precision" />
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 space-y-6 text-sm sm:text-base font-light text-[#A0A0A0] leading-relaxed">
            <p>
              <span className="text-[#F5F5F0]">Axion Space Group of Companies</span> (anchored by{" "}
              <span className="text-[#F5F5F0]">Axion Space LLP</span>) is a full-stack real estate development,
              institutional investment syndication, and multi-vertical asset management enterprise. Operating across
              high-growth corridors in <span className="text-[#F5F5F0]">India (Delhi-NCR)</span> and{" "}
              <span className="text-[#F5F5F0]">Dubai (UAE)</span>, the Group bridges traditional brick-and-mortar
              asset development with modern, deed-backed fractional ownership models.
            </p>
            <p>
              Founded on the principle of disciplined underwriting and architectural precision, Axion Space transforms
              high-barrier commercial, residential, hospitality, and infrastructure assets into accessible, transparent
              wealth-building opportunities for High-Net-Worth Individuals (HNIs), institutional syndicates, and retail
              partners.
            </p>
          </Reveal>
        </div>

        <PullQuote
          quote="We Not Me"
          text="Every venture under the Axion Space banner is built on collaborative growth. Rather than concentrating capital risk or reward within a single entity, we pool institutional expertise, Vastu-compliant architectural planning, and shared investor equity so every stakeholder prospers together."
        />
      </Section>

      <Section id="group-architecture" alt>
        <SectionHeading eyebrow="02 — Group Architecture" title="Four-Tier Group" goldWord="Architecture" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-sm font-light text-[#A0A0A0] leading-relaxed">
            To maintain strict governance, operational clarity, and risk isolation across diverse asset classes, the
            Axion Space Group operates through four specialized vertical entities.
          </p>
        </Reveal>
        <DataTable caption="Axion Space group entities" {...architecture} />
      </Section>

      <Section id="portfolio-footprint">
        <SectionHeading eyebrow="03 — Market Footprint" title="Multi-Vertical" goldWord="Portfolio" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-sm font-light text-[#A0A0A0] leading-relaxed">
            Beyond core real estate development in Greater Noida West and the Noida Expressway corridor (including
            Sector 1 land banks, Savior Sec 16C, Rudra Heights, Urbtech Sec 153, and gated farmhouse communities), Axion
            Space deploys its fractional asset model across five revenue-generating verticals in India and Dubai.
          </p>
        </Reveal>
        <DataTable caption="Business verticals in India and Dubai" {...portfolio} />
      </Section>

      <Section id="governance-edge" alt>
        <SectionHeading eyebrow="04 — Our Edge" title="Governance, Transparency &" goldWord="Execution" />
        <FeatureCards items={edge} cols={4} />
      </Section>

      <ClosingCTA
        eyebrow="Leadership"
        title="Meet the Board of"
        goldWord="Directors"
        tags={["Strategic Oversight", "Capital Governance", "Fiduciary Stewardship"]}
        cta={{ label: "View the Board", href: pageUrl("board-of-directors") }}
      />

      <EnquiryForm eyebrow="05 — Get in Touch" defaultInterest="General / Partnership" />
    </PageLayout>
  );
}
