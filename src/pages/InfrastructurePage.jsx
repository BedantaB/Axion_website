import React from "react";
import { Scale, DraftingCompass, KeyRound, FilePen, Boxes, House } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  PageHero,
  Section,
  FeatureCards,
  SplitFeature,
  StepCards,
  DataTable,
  IconRows,
  PathwayCards,
  ClosingCTA,
} from "@/components/page/Blocks";

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const IMG = {
  hero: "https://images.unsplash.com/photo-1648210475365-1b8ab66c1570?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
  jv: u("1600566753190-17f0baa2a6c3"),
  builderFloors: u("1574362848149-11496d93a7c7"),
  villas: u("1580587771525-78b9dba3b914"),
  engineering: u("1503387762-592deb58ef4e"),
};

const ethos = [
  { icon: Scale, title: "Uncompromising Ethics", text: "Clear contracts and zero hidden costs." },
  { icon: DraftingCompass, title: "Process-Driven Execution", text: "ISO-grade milestones and quality audits." },
  { icon: KeyRound, title: "Transparent Handover", text: "Certified structural warranties and full documentation." },
];

const pathways = [
  {
    eyebrow: "Method A",
    title: "Joint Venture (JV)",
    points: [
      ["Zero CapEx", "Landowner contributes plot (≥ 100 sq. yds)"],
      ["100% Funding", "Axion finances approvals, design, build"],
      ["Asset Sharing", "Pre-agreed floor or revenue ratio"],
    ],
  },
  {
    eyebrow: "Method B",
    title: "100% Upfront End-to-End",
    featured: true,
    points: [
      ["Full Ownership", "Client retains 100% built property"],
      ["Fixed BOQ", "Milestone-linked transparent pricing"],
      ["Single Window", "Architecture, permits, interiors, handover"],
    ],
  },
];

const jv = [
  ["Minimum Plot", "100 sq. yards in prime residential zones"],
  ["Zero Financial Burden", "Axion covers RERA, sanctions, construction, marketing"],
  ["Registered JDA", "Legal Joint Development Agreement with clear timelines"],
  ["High Value Unlock", "Maximize FAR/FSI potential into luxury builder floors"],
];

const turnkey = [
  { icon: FilePen, title: "Design, Soil Test & Municipal Sanctions", text: "Complete architectural drawings, structural engineering, statutory approvals." },
  { icon: Boxes, title: "Branded Material & Fixed-Cost BOQ", text: "Zero cost escalation with stage-linked escrow or milestone billing." },
  { icon: House, title: "100% Asset Retention (≥ 100 Sq. Yards)", text: "Ready-to-move-in luxury low-rise or villa delivered on schedule." },
];

const builderFloors = [
  ["Elevation Structure", "Stilt + 3 or Stilt + 4 independent floors"],
  ["Configurations", "2 BHK, 3 BHK & 4 BHK single-floor residences"],
  ["Modern Amenities", "High-speed elevator, stilt parking, terrace garden"],
  ["Plot Compatibility", "Optimized for 100 to 1,000+ sq. yard plots"],
];

const villas = [
  ["Architectural Formats", "Duplex (G+1) & Triplex (G+2) private estates"],
  ["Configurations", "3 BHK, 4 BHK & 5 BHK with double-height living"],
  ["Signature Features", "Private lawn, plunge pool, home theater, solar roof"],
  ["Plot Compatibility", "Compact 100 sq. yd town villas to 2,000+ sq. yd estates"],
];

const typology = {
  columns: [
    { key: "plot", label: "Plot Size" },
    { key: "type", label: "Development Type" },
    { key: "structure", label: "Structure" },
    { key: "config", label: "Unit Configuration", accent: true },
    { key: "inclusions", label: "Key Inclusions" },
  ],
  rows: [
    { plot: "100 – 150 Sq. Yds", type: "Compact Low-Rise / Town Villa", structure: "Stilt + 3 / G+1", config: "2 BHK / 3 BHK", inclusions: "Covered parking, modular kitchen, Vastu layout" },
    { plot: "150 – 250 Sq. Yds", type: "Mid-Segment Builder Floors", structure: "Stilt + 4", config: "3 BHK + Study", inclusions: "6-passenger lift, 2 car parks/floor, servant room" },
    { plot: "250 – 500 Sq. Yds", type: "Luxury Floors / Duplex Villa", structure: "Stilt + 4 / G+2", config: "4 BHK Luxury", inclusions: "VRV air-conditioning, Italian marble, EV charging" },
    { plot: "500+ Sq. Yds", type: "Signature Triplex Villa / Enclave", structure: "Basement + G + 2", config: "4 / 5 BHK Estate", inclusions: "Private lift, landscaped deck, home automation" },
  ],
};

const engineering = [
  ["Seismic Zone-IV/V RCC", "Fe-550D TMT steel & M25/M30 RMC concrete"],
  ["Space Optimization", "Zero dead-space layouts with natural cross-ventilation"],
  ["Premium Finishes", "Branded sanitaryware, UPVC soundproof glazing, concealed MEP"],
  ["150+ Quality Checks", "Independent stage-wise lab testing and digital logs"],
];

const workflow = [
  { title: "Feasibility & Title Audit", text: "Legal due diligence and FAR check." },
  { title: "JV or Turnkey Pact", text: "Open-book BOQ and registered agreement." },
  { title: "Sanctions & 3D BIM", text: "Approved blueprints and structural plans." },
  { title: "Tracked Construction", text: "Weekly site reports and lab certificates." },
  { title: "Snag-Free Handover", text: "OC, warranties, and as-built drawings." },
];

const InfrastructurePage = () => (
  <PageLayout title="Axion Infrastructure — Land, Low-Rise & Villa Construction">
    <PageHero
      img={IMG.hero}
      imgAlt="Modern residential construction"
      crumb="Infrastructure"
      eyebrow="Axion Infrastructure · Pan India"
      title="Land, Low-Rise &"
      goldTitle="Villa Construction"
      subtitle="Ethical Execution, Transparent Handover, and Flexible Joint Venture or 100% Upfront Turnkey Models Starting From 100 Sq. Yards"
      primary={{ label: "View Construction Pathways", href: "#pathways" }}
      secondary={{ label: "Build With Us", href: "#contact" }}
    />

    <Section id="ethos">
      <SectionHeading eyebrow="01 — Company Ethos" title="Built on Ethics," goldWord="Process & Trust" />
      <FeatureCards items={ethos} />
    </Section>

    <Section id="scale" alt>
      <SectionHeading eyebrow="02 — Entry Threshold & Scale" title="Accessible Land &" goldWord="Plot Development Scale" />
      <Reveal className="mt-20 text-center">
        <p className="font-serif font-light text-gold-gradient leading-none tracking-tight text-[4.5rem] sm:text-[7rem] lg:text-[11rem]" data-testid="min-plot">
          100 Sq. Yards
        </p>
        <div className="gold-hairline w-40 mx-auto my-10" />
        <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-[#C8C8C2] leading-relaxed">
          Minimum plot size for both Joint Venture collaborations and 100% Upfront Turnkey construction across urban and
          suburban India
        </p>
      </Reveal>
    </Section>

    <Section id="pathways">
      <SectionHeading eyebrow="03 — Engagement Models" title="Two Flexible" goldWord="Construction Pathways" />
      <PathwayCards items={pathways} />
    </Section>

    <SplitFeature
      id="joint-venture"
      alt
      eyebrow="04 — Method A · Collaboration"
      title="Joint Venture (JV)"
      goldWord="Development Model"
      items={jv}
      img={IMG.jv}
      imgAlt="Contemporary residence built on a private plot"
      tag="Method A · Joint Venture"
    />

    <Section id="turnkey">
      <SectionHeading eyebrow="05 — Method B · Turnkey Execution" title="100% Upfront" goldWord="End-to-End Construction" />
      <IconRows items={turnkey} />
    </Section>

    <SplitFeature
      id="builder-floors"
      alt
      reverse
      eyebrow="06 — Product Line 01"
      title="Luxury Low-Rise"
      goldWord="Builder Floors"
      items={builderFloors}
      img={IMG.builderFloors}
      imgAlt="Low-rise residential building with private balconies"
      tag="Low-Rise Builder Floors"
    />

    <SplitFeature
      id="villas"
      eyebrow="07 — Product Line 02"
      title="Bespoke Contemporary &"
      goldWord="Luxury Villas"
      items={villas}
      img={IMG.villas}
      imgAlt="Contemporary luxury villa with private pool"
      tag="Contemporary Villas"
    />

    <Section id="typology" alt>
      <SectionHeading eyebrow="08 — Technical Configurations" title="Plot Size to Typology &" goldWord="Configuration Guide" />
      <DataTable caption="Plot size to typology and configuration guide" columns={typology.columns} rows={typology.rows} />
    </Section>

    <SplitFeature
      id="engineering"
      reverse
      eyebrow="09 — Engineering & Quality"
      title="Architectural Precision &"
      goldWord="Grade-A Specs"
      items={engineering}
      img={IMG.engineering}
      imgAlt="Architect reviewing construction drawings"
      tag="Engineering & Quality"
    />

    <Section id="workflow" alt>
      <SectionHeading eyebrow="10 — Transparent Handover Protocol" title="5-Stage Ethical" goldWord="Delivery Workflow" />
      <StepCards steps={workflow} />
    </Section>

    <ClosingCTA
      eyebrow="Open to Collaborate Pan India"
      title="Build With"
      goldWord="Axion Infrastructure"
      tags={["Joint Ventures & 100% Upfront Turnkey Construction", "Plots From 100 Sq. Yards", "Land, Low-Rise & Villas"]}
      cta={{ label: "Discuss Your Plot", href: "#contact" }}
    />

    <EnquiryForm eyebrow="11 — Get in Touch" defaultInterest="Axion Infrastructure — JV & Turnkey Construction" />
  </PageLayout>
);

export default InfrastructurePage;
