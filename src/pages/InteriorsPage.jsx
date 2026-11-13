import React from "react";
import { Clapperboard, UtensilsCrossed, Award, Handshake, Receipt, UserCheck } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  PageHero,
  Section,
  FeatureCards,
  SplitFeature,
  StepCards,
  DataTable,
  StatRow,
  IconRows,
  PullQuote,
  ClosingCTA,
} from "@/components/page/Blocks";

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: "https://images.unsplash.com/photo-1616611213095-58abb651f70c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  residential: u("1600607687939-ce8a6c25118c"),
  multiplex: u("1489599849927-2ee91cede3ba"),
  foodCourt: u("1517248135467-4c7edcad34c4"),
  workshop: u("1513467535987-fd81bc7d62f8"),
};

const partnership = [
  { icon: Clapperboard, title: "INOX & Multiplexes", text: "Acoustic auditoriums and luxury cinema lobbies." },
  { icon: UtensilsCrossed, title: "Food Court Crafting", text: "High-durability dining zones and bespoke millwork." },
  { icon: Award, title: "Multi-Category Pedigree", text: "Proven delivery across retail, hospitality, residences." },
];

const residential = [
  ["Complete Home Transformation", "2BHK, 3BHK, 4BHK flats, penthouses, villas"],
  ["Modular & Custom Craft", "Ergonomic kitchens, walk-in wardrobes, TV consoles"],
  ["Lighting & False Ceiling", "Layered ambient LEDs, acoustic panels, veneers"],
  ["Ready-to-Live Handover", "Soft furnishings, decor styling, deep sanitization"],
];

const multiplex = [
  ["Grand Concourse & Lobbies", "Statement ceilings, ticket kiosks, architectural lighting"],
  ["Acoustic Wall Crafting", "Sound-absorbing fabric panels and cinema-grade baffling"],
  ["VIP Lounge Fit-Outs", "Plush recliner zones and bespoke concession counters"],
  ["Fire & Safety Compliance", "Strict adherence to national multiplex codes"],
];

const foodCourt = [
  ["High-Traffic Zoning", "Smart crowd flow, QSR facades, ergonomic seating"],
  ["Bespoke Furniture Crafting", "Solid-surface tables, booth seating, planter dividers"],
  ["MEP & Exhaust Integration", "Seamless kitchen ventilation, drainage, utility ducts"],
  ["Durable Aesthetics", "Stain-resistant laminates, metal accents, warm pendants"],
];

const crafting = [
  ["Factory-Finished Precision", "German CNC cutting, edge-banding, PU spray booths"],
  ["Master Joinery & Veneers", "Seasoned teak, fluted panels, brass & stone inlays"],
  ["Zero On-Site Mess", "Pre-engineered modules assembled rapidly at site"],
  ["10-Year Craft Warranty", "Termite-proof BWP marine ply and branded hardware"],
];

const method = [
  { title: "Brief & Site Audit", text: "Laser measurement and lifestyle mapping." },
  { title: "3D VR Design", text: "Photorealistic renders and material boards." },
  { title: "Fixed-Cost BOQ", text: "Transparent itemized quote, zero surprises." },
  { title: "Factory Crafting", text: "Parallel CNC fabrication and MEP prep." },
  { title: "Site Installation", text: "Supervised assembly and 85-point QC." },
  { title: "Key Handover", text: "Styled walkthrough and warranty pack." },
];

const tiers = {
  columns: [
    { key: "vertical", label: "Business Vertical" },
    { key: "model", label: "Engagement Model" },
    { key: "scope", label: "Scope & Deliverables" },
    { key: "timeline", label: "Timeline", accent: true },
    { key: "warranty", label: "Warranty" },
  ],
  rows: [
    { vertical: "Essential Home", model: "Fixed Turnkey Package", scope: "Modular kitchen, wardrobes, ceiling, painting", timeline: "45 Days", warranty: "10 Years" },
    { vertical: "Bespoke Luxury Home", model: "Design + Custom Craft", scope: "Italian veneers, automation, loose furniture, decor", timeline: "60–75 Days", warranty: "10 Years" },
    { vertical: "Food Court & Retail", model: "BOQ + Crafting Contract", scope: "Seating craft, QSR counters, MEP, lighting", timeline: "60–90 Days", warranty: "5 Years" },
    { vertical: "INOX & Multiplexes", model: "Alliance Execution (The Nest)", scope: "Lobby architecture, acoustics, VIP lounges", timeline: "90–150 Days", warranty: "5 Years" },
  ],
};

const assurance = [
  { icon: Handshake, title: "Synergy With Legend “The Nest”", text: "Enterprise-grade execution standards brought directly into private residences." },
  { icon: Receipt, title: "Open-Book Pricing & Branded Specs", text: "Hettich, Häfele, Greenply, Saint-Gobain, and Asian Paints certified materials." },
  { icon: UserCheck, title: "Single-Point Accountability", text: "Dedicated design lead and site project manager from bare shell to handover." },
];

const InteriorsPage = () => (
  <PageLayout title="Axion Interior & Crafting — You Buy a Flat, We Will Make It Home">
    <PageHero
      img={IMG.hero}
      imgAlt="Luxury interior lounge with warm lighting"
      crumb="Interior & Crafting"
      eyebrow="Axion Interior & Crafting · In Alliance With The Nest"
      title="You Buy a Flat,"
      goldTitle="We Will Make It Home"
      subtitle="Bespoke Residential Interiors, Master Wood Crafting, and Landmark Commercial Execution Across Multiplexes & Food Courts"
      primary={{ label: "Explore Our Verticals", href: "#residential" }}
      secondary={{ label: "Start Your Project", href: "#contact" }}
    />

    <Section id="promise">
      <SectionHeading eyebrow="01 — Our Signature Promise" title="Transforming Concrete Shells Into" goldWord="Soulful Spaces" />
      <PullQuote
        quote="You buy a flat, we will make it home."
        text="End-to-end interior architecture, factory-precision furniture crafting, and turnkey execution for homes and high-footfall commercial destinations."
      />
    </Section>

    <Section id="partnership" alt>
      <SectionHeading eyebrow="02 — Powerhouse Partnership" title="Tied Up With Industry Legend" goldWord="“The Nest”" />
      <FeatureCards items={partnership} />
    </Section>

    <SplitFeature
      id="residential"
      eyebrow="03 — Portfolio Vertical 01"
      title="Bespoke Residential"
      goldWord="Interiors"
      items={residential}
      img={IMG.residential}
      imgAlt="Contemporary living room interior"
      tag="Residential Interiors"
    />

    <SplitFeature
      id="multiplex"
      alt
      reverse
      eyebrow="04 — Portfolio Vertical 02 · With The Nest"
      title="INOX & Luxury Multiplex"
      goldWord="Interiors"
      items={multiplex}
      img={IMG.multiplex}
      imgAlt="Cinema auditorium with red seating"
      tag="Multiplex Interiors"
    />

    <SplitFeature
      id="food-court"
      eyebrow="05 — Portfolio Vertical 03 · Hospitality & Retail"
      title="Food Court Design &"
      goldWord="Custom Crafting"
      items={foodCourt}
      img={IMG.foodCourt}
      imgAlt="Restaurant dining hall with timber ceiling and pendant lights"
      tag="Hospitality & Retail"
    />

    <SplitFeature
      id="crafting"
      alt
      reverse
      eyebrow="06 — Manufacturing & Artisanship"
      title="The Axion"
      goldWord="Crafting Advantage"
      items={crafting}
      img={IMG.workshop}
      imgAlt="Craftsman cutting timber in the workshop"
      tag="Factory & Joinery"
    />

    <Section id="method">
      <SectionHeading eyebrow="07 — The Total Method" title="6-Phase End-to-End" goldWord="Interior Delivery Method" />
      <StepCards steps={method} />
    </Section>

    <Section id="tiers" alt>
      <SectionHeading eyebrow="08 — Business Configuration" title="Service Tiers & Commercial" goldWord="Engagement Models" />
      <DataTable caption="Service tiers and commercial engagement models" columns={tiers.columns} rows={tiers.rows} />
    </Section>

    <Section id="track-record">
      <SectionHeading eyebrow="09 — Proven Track Record" title="Residential & Commercial" goldWord="Delivery Excellence" />
      <StatRow
        stats={[
          ["250+", "Luxury Flats & Villas Delivered"],
          ["40+", "Multiplexes & Food Courts"],
          ["100%", "On-Time Transparent Handover"],
        ]}
      />
    </Section>

    <Section id="assurance" alt>
      <SectionHeading eyebrow="10 — Client Assurance" title="Why Homeowners & Brands" goldWord="Trust Axion" />
      <IconRows items={assurance} />
    </Section>

    <ClosingCTA
      eyebrow="Axion Interior & Crafting · In Alliance With The Nest"
      title="You Buy a Flat,"
      goldWord="We Will Make It Home"
      tags={["Residential Interiors", "Bespoke Crafting", "INOX & Multiplexes", "Food Courts"]}
      cta={{ label: "Start Your Project", href: "#contact" }}
    />

    <EnquiryForm eyebrow="11 — Get in Touch" defaultInterest="Axion Interior & Crafting" />
  </PageLayout>
);

export default InteriorsPage;
