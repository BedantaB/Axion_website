import React from "react";
import {
  MapPin,
  Ruler,
  IndianRupee,
  KeyRound,
  Building2,
  Layers,
  BadgeCheck,
  Sparkles,
  Maximize,
  Home,
  Route,
  Tag,
  Leaf,
  Landmark,
  DoorOpen,
  Trees,
  ShieldCheck,
  Store,
  Waves,
  School,
  ArrowUpDown,
  Clapperboard,
  Compass,
  Scale,
  Clock,
  Briefcase,
  TrainFront,
  ArrowUpRight,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  PageHero,
  Section,
  FeatureCards,
  MediaFrame,
  DataTable,
  StatRow,
  FactList,
  DetailCards,
  ChapterBand,
  BarCompare,
  ClosingCTA,
} from "@/components/page/Blocks";

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

// Representative imagery. Swap for the builders' official project renders when available.
const IMG = {
  hero: u("1582407947304-fd86f028f716"),
  vastu: u("1600585154340-be6161a56a0c"),
  jkg: u("1580041065738-e72023775cdc"),
  saviour: u("1597047084897-51e81819a499"),
  jnc: u("1534237710431-e2fc698436d0"),
  rudra: u("1460317442991-0ec209397118"),
  eternia: u("1515263487990-61b07816b324"),
  nbcc: u("1565402170291-8491f14678db"),
  urbtech: u("1554469384-e58fac16e23a"),
};

const snapshot = [
  ["12", "Premier & Category A+ Builders"],
  ["₹58L", "Entry Price Point"],
  ["7", "Key Growth Sectors"],
  ["100%", "RERA & Authority Verified"],
];

const index = [
  { no: "01", id: "vastu-heritage", name: "Vastu Heritage Farm Houses", where: "Techzone, Greater Noida", from: "₹69.55 Lac" },
  { no: "02", id: "jkg-palm-court", name: "JKG Palm Court", where: "Sector 16C", from: "₹76.3 Lac" },
  { no: "03", id: "saviour-saumyam", name: "Saviour Saumyam", where: "Sector 16C", from: "New Launch" },
  { no: "04", id: "jnc-the-park", name: "JNC The Park", where: "Sector 16C, Gaur City 2", from: "₹70.38 Lac" },
  { no: "05", id: "rudra-palace-heights", name: "Rudra Palace Heights", where: "Sector 1", from: "₹83.04 Lac" },
  { no: "06", id: "eternia-residences", name: "Eternia Residences", where: "Techzone 4, Ek Murti", from: "₹1.72 Cr*" },
  { no: "07", id: "nbcc-aspire", name: "NBCC Aspire Townships", where: "Greater Noida West", from: "₹1.74 Cr*" },
  { no: "A+", id: "category-a", name: "Godrej, M3M, ACE, Eldeco & Urbtech", where: "Noida Ext. & Expressway", from: "₹58 Lac*" },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

const projects = {
  vastu: {
    facts: [
      { icon: MapPin, label: "Location", value: "WTC Road, Techzone, Greater Noida" },
      { icon: Ruler, label: "Plot Sizes", value: "1,008 to 4,032 Sq. Yards" },
      { icon: IndianRupee, label: "Price Range", value: "₹69.55 Lac to ₹2.82 Cr" },
      { icon: KeyRound, label: "Status", value: "Ready to Move Farmland Retreat" },
    ],
    highlights: [
      { icon: Trees, title: "1,008 Sq. Yd Plot", text: "Entry estates starting ₹69.55 Lac." },
      { icon: Home, title: "4,032 Sq. Yd Estate", text: "Grand farmhouses up to ₹2.82 Cr." },
      { icon: ShieldCheck, title: "Gated Leisure", text: "24/7 CCTV, gym, jogging tracks." },
    ],
  },
  jkg: {
    facts: [
      { icon: Building2, label: "Scale", value: "5.2 Acres, 7 Towers, 875 Units" },
      { icon: Layers, label: "Layouts", value: "2 & 3 BHK (1,090 – 2,005 Sq. Ft.)" },
      { icon: IndianRupee, label: "Pricing", value: "₹76.3 Lac to ₹1.51 Cr" },
      { icon: BadgeCheck, label: "Status", value: "Ready to Move (UPRERAPRJ7088)" },
    ],
    table: {
      columns: [
        { key: "config", label: "Configuration" },
        { key: "area", label: "Super Area" },
        { key: "price", label: "Starting Price", accent: true },
        { key: "highlight", label: "Key Highlight" },
      ],
      rows: [
        { config: "2 BHK + 2T", area: "1,090 Sq. Ft.", price: "₹76.30 Lac", highlight: "Private entry lobby" },
        { config: "2 BHK + Store", area: "1,185 Sq. Ft.", price: "₹82.90 Lac", highlight: "60m wide road facing" },
        { config: "3 BHK + 2T/3T", area: "1,395 – 1,765 Sq. Ft.", price: "₹1.04 Cr+", highlight: "Vastu-compliant layout" },
        { config: "3 BHK + Study", area: "2,005 Sq. Ft.", price: "₹1.51 Cr+", highlight: "4 washrooms + study" },
      ],
    },
  },
  saviour: {
    facts: [
      { icon: Sparkles, label: "Concept", value: "New Launch Ultra-Luxury Residences" },
      { icon: Maximize, label: "Footprint", value: "~5 Acres Landscaped Podium" },
      { icon: Home, label: "Configurations", value: "Spacious 2, 3 & 4 BHK" },
      { icon: Route, label: "Connectivity", value: "1 km from Kisan Chowk, 60m Road" },
    ],
    launches: [
      {
        eyebrow: "Sector 16C",
        title: "Saviour Saumyam",
        points: [
          ["Typology", "2, 3 & 4 BHK Luxury Flats"],
          ["Land Area", "~5 Acres Green Campus"],
          ["Transit", "2 km to Upcoming Metro"],
          ["Access", "15 mins to Noida City Centre"],
        ],
      },
      {
        eyebrow: "Sector 16",
        title: "Saviour Vridhi Towers",
        featured: true,
        points: [
          ["Typology", "3 BHK (1,424 – 1,650 Sq. Ft.)"],
          ["Scale", "7 Towers, 19 Floors, 733 Units"],
          ["Pricing", "₹1.50 Cr onwards"],
          ["Timeline", "Possession by Aug 2028"],
        ],
      },
    ],
  },
  jnc: {
    facts: [
      { icon: MapPin, label: "Address", value: "Plot GH-1C, Sector 16C, Noida Ext." },
      { icon: Building2, label: "Scale", value: "5 Acres, 7 Towers, 934 Homes" },
      { icon: Home, label: "Units", value: "2, 2.5, 3 & 4 BHK (920 – 1,880 Sq. Ft.)" },
      { icon: Tag, label: "Pricing", value: "₹70.38 Lac to ₹1.49 Cr (RERA Ready)" },
    ],
    highlights: [
      { icon: Store, title: "JNC Park Plaza", text: "High-footfall retail shops in Sector 16C." },
      { icon: Waves, title: "30+ Club Amenities", text: "Swimming pool, amphitheater, sauna, courts." },
      { icon: School, title: "Prime Proximity", text: "0.7 km from Gaur International School." },
    ],
  },
  rudra: {
    facts: [
      { icon: Leaf, label: "Master Plan", value: "8.29 Acres with 80% Open Area" },
      { icon: Landmark, label: "Towers", value: "10 Towers, 22 Floors, 1,434 Units" },
      { icon: DoorOpen, label: "Layouts", value: "1 to 4 BHK + Study (700 – 2,285 Sq. Ft.)" },
      { icon: IndianRupee, label: "Pricing", value: "₹83.04 Lac to ₹1.87 Cr (Ready)" },
    ],
  },
  eternia: {
    facts: [
      { icon: MapPin, label: "Location", value: "Plot GH-09, Techzone 4, Near Ek Murti" },
      { icon: Building2, label: "Master Plan", value: "6 Acres, 6 Symmetrical Towers" },
      { icon: Home, label: "Residences", value: "3 & 4 BHK + Study (1,932 – 2,625 Sq. Ft.)" },
      { icon: IndianRupee, label: "Pricing", value: "₹1.72 Cr* onwards (130m Prime Road)" },
    ],
    highlights: [
      { icon: ArrowUpDown, title: "4 High-Speed Lifts", text: "Dedicated vertical transit per tower." },
      { icon: Clapperboard, title: "25+ Lifestyle Clubs", text: "Mini theatre, golf greens, yoga deck." },
      { icon: Compass, title: "100m Green Belt", text: "Vastu-compliant homes on 130m road." },
    ],
  },
  nbcc: {
    facts: [
      { icon: Scale, label: "Mandate", value: "Supreme Court Monitored Delivery" },
      { icon: Home, label: "Scale", value: "40,000+ Homes Revived Across NCR" },
      { icon: ShieldCheck, label: "Developer", value: "Navratna CPSE Execution Guarantee" },
      { icon: Clock, label: "Status", value: "Fast-Track Construction & Ready Units" },
    ],
    table: {
      columns: [
        { key: "project", label: "NBCC Project" },
        { key: "location", label: "Location" },
        { key: "config", label: "Configurations" },
        { key: "highlight", label: "Highlights" },
      ],
      rows: [
        { project: "Aspire Leisure Valley", location: "Sector 1, Noida Ext.", config: "3 & 4 BHK (1,500 – 1,941 Sq. Ft.)", highlight: "₹1.74 Cr* Onwards" },
        { project: "Aspire Dream Valley", location: "Techzone 4", config: "1, 2 & 3 BHK Apartments", highlight: "Phase 2 & Enchante" },
        { project: "Aspire Golf Homes", location: "Sector 4, Gr. Noida (W)", config: "2 & 3 BHK Residences", highlight: "Adjacent Kingswood" },
        { project: "Centurian Park & Verona", location: "Techzone 4 / Gr. Noida (W)", config: "2 & 3 BHK Terrace Homes", highlight: "O2 Valley & Verona Heights" },
      ],
    },
  },
};

const categoryA = [
  {
    eyebrow: "Godrej Properties",
    title: "Godrej Sector 10, Noida Extension",
    points: [
      ["Location", "Sector 10, Greater Noida West"],
      ["Residences", "2 & 3 BHK Smart Luxury Homes"],
      ["Pricing", "₹1.09 Cr* onwards"],
      ["Pedigree", "80M+ Sq. Ft. Delivered Across NCR"],
    ],
  },
  {
    eyebrow: "M3M India",
    title: "M3M Noida – Greater Noida Luxury",
    points: [
      ["Portfolio", "M3M The Cullinan & The Line"],
      ["Noida–Gr. Noida", "2 & 3 BHK Golf-Facing Towers"],
      ["Density", "Only 4 Residences Per Floor"],
      ["Corridor", "Direct Expressway & Jewar Access"],
    ],
  },
  {
    eyebrow: "ACE Group",
    title: "ACE Han'ei & ACE Divino",
    points: [
      ["Flagships", "ACE Han'ei (Sec 12) & ACE Divino"],
      ["Configurations", "2, 3 & 4 BHK + Penthouses"],
      ["Track Record", "ACE Aspire (988 Ready Units)"],
      ["Commercial", "ACE City Square & ACE 153"],
    ],
  },
  {
    eyebrow: "Eldeco · Sector 12",
    title: "Eldeco La Vida Bella",
    featured: true,
    points: [
      ["Residences", "2, 3 & 4 BHK Ultra-Luxury"],
      ["Pricing", "₹1.85 Cr to ₹3.04 Cr+"],
      ["Design", "10.5 ft Ceilings & Rooftop Pool"],
      ["RERA", "UPRERAPRJ136219/04/2024"],
    ],
  },
];

const urbtech = [
  { icon: Building2, label: "Scale", value: "4.94 Acres, G+16 Floors, 1M Sq. Ft." },
  { icon: Briefcase, label: "Spaces", value: "IT Suites (412 – 830 Sq. Ft.), Offices, Retail" },
  { icon: IndianRupee, label: "Pricing", value: "Business Suites from ₹58 – 60 Lac*" },
  { icon: TrainFront, label: "Status", value: "Ready to Move · 5 Mins to Sec 148 Metro" },
];

const benchmark = [
  { label: "Urbtech NPX (Sec 153 Suites)", value: 58, display: "₹58.00 L*" },
  { label: "Vastu Heritage (Farmhouse)", value: 69.55, display: "₹69.55 L" },
  { label: "JNC The Park / JKG Palm Court", value: 70.38, display: "₹70.38 L" },
  { label: "Rudra Palace Heights (Sec 1)", value: 83.04, display: "₹83.04 L" },
  { label: "Godrej Sector 10 (Noida Ext.)", value: 109, display: "₹1.09 Cr*" },
  { label: "Eternia / NBCC Aspire", value: 172, display: "₹1.72 Cr*" },
  { label: "Eldeco La Vida Bella (Sec 12)", value: 185, display: "₹1.85 Cr" },
];

/* ------------------------------------------------------------------ */
/* Page-specific layout                                                */
/* ------------------------------------------------------------------ */

/** One flagship project: heading, fact list and image side by side, then optional extras below. */
const Project = ({ id, alt, reverse, eyebrow, title, goldWord, facts, img, imgAlt, tag, children }) => (
  <Section id={id} alt={alt}>
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <SectionHeading eyebrow={eyebrow} title={title} goldWord={goldWord} />
        <div className="mt-12">
          <FactList items={facts} />
        </div>
      </div>
      <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
        <MediaFrame src={img} alt={imgAlt} tag={tag} className="aspect-[4/3] lg:aspect-[5/6]" />
      </div>
    </div>
    {children}
  </Section>
);

const SubHeading = ({ eyebrow, title }) => (
  <Reveal className="mt-24">
    <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4">{eyebrow}</p>
    <h3 className="font-serif font-light text-3xl sm:text-4xl text-[#F5F5F0] leading-tight">{title}</h3>
  </Reveal>
);

const ProjectIndex = () => (
  <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {index.map((p, i) => (
      <Reveal key={p.id} delay={(i % 4) * 0.06}>
        <a
          href={`#${p.id}`}
          className="group relative flex flex-col h-full bg-[#1A1A1A] border border-white/5 hover:border-gold/30 p-7 transition-colors duration-500"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-serif text-3xl text-gold-gradient leading-none">{p.no}</span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="text-[#A0A0A0] transition-colors duration-300 group-hover:text-gold"
            />
          </div>
          <h3 className="mt-6 font-serif text-xl font-light text-[#F5F5F0] leading-snug group-hover:text-gold transition-colors duration-500">
            {p.name}
          </h3>
          <p className="mt-2 text-xs font-light text-[#A0A0A0]">{p.where}</p>
          <p className="mt-auto pt-6 text-[10px] tracking-[0.3em] uppercase text-gold/90">
            From <span className="text-[#F5F5F0]">{p.from}</span>
          </p>
        </a>
      </Reveal>
    ))}
  </div>
);

const RealtyPage = () => (
  <PageLayout title="Axion Realty — Prime Builder Projects in Noida Extension">
    <PageHero
      img={IMG.hero}
      imgAlt="Residential towers against the sky"
      crumb="Realty"
      eyebrow="Axion Realty · Greater Noida West Portfolio"
      title="Prime Builder Projects"
      goldTitle="in Noida Extension"
      subtitle="Curated residential townships, ready-to-move apartments, and luxury farmhouses across top sectors."
      primary={{ label: "Explore the Projects", href: "#projects" }}
      secondary={{ label: "Schedule a Site Visit", href: "#contact" }}
    />

    <Section id="snapshot">
      <SectionHeading eyebrow="01 — Portfolio Snapshot" title="Seven Flagship" goldWord="Developments" />
      <StatRow stats={snapshot} />
    </Section>

    <Section id="projects" alt>
      <SectionHeading eyebrow="02 — Project Index" title="Every Project," goldWord="At a Glance" />
      <ProjectIndex />
    </Section>

    <Project
      id="vastu-heritage"
      eyebrow="Project 01 · Ma Laxmi Group"
      title="Vastu Heritage"
      goldWord="Farm Houses"
      facts={projects.vastu.facts}
      img={IMG.vastu}
      imgAlt="Contemporary farmhouse set in a landscaped lawn"
      tag="Farmland Retreat"
    >
      <SubHeading eyebrow="Vastu Heritage · Lifestyle & Plots" title="Gated Serenity & Custom Estates" />
      <FeatureCards items={projects.vastu.highlights} />
    </Project>

    <Project
      id="jkg-palm-court"
      alt
      reverse
      eyebrow="Project 02 · JKG Group"
      title="JKG Palm Court,"
      goldWord="Sector 16C"
      facts={projects.jkg.facts}
      img={IMG.jkg}
      imgAlt="Residential towers around a landscaped pool deck"
      tag="Ready to Move"
    >
      <SubHeading eyebrow="JKG Palm Court · Unit Configurations" title="Podium Living Near Gaur City 2" />
      <DataTable caption="JKG Palm Court unit configurations" columns={projects.jkg.table.columns} rows={projects.jkg.table.rows} />
    </Project>

    <ChapterBand
      id="sector-16c"
      eyebrow="High-Growth Corridor"
      title="Sector 16C: Saviour &"
      goldWord="JNC Developments"
    />

    <Project
      id="saviour-saumyam"
      eyebrow="Project 03 · Saviour Builders"
      title="Saviour Saumyam,"
      goldWord="Sector 16C"
      facts={projects.saviour.facts}
      img={IMG.saviour}
      imgAlt="White residential tower"
      tag="New Launch"
    >
      <SubHeading eyebrow="Saviour Group · Regional Footprint" title="Upcoming & Active Saviour Launches" />
      <DetailCards items={projects.saviour.launches} />
    </Project>

    <Project
      id="jnc-the-park"
      alt
      reverse
      eyebrow="Project 04 · JNC Constructions"
      title="JNC The Park,"
      goldWord="Gaur City 2"
      facts={projects.jnc.facts}
      img={IMG.jnc}
      imgAlt="Twin residential high-rise towers"
      tag="RERA Ready"
    >
      <SubHeading eyebrow="JNC Group · Sector 16C Presence" title="Integrated Residential & Retail Hub" />
      <FeatureCards items={projects.jnc.highlights} />
    </Project>

    <Project
      id="rudra-palace-heights"
      eyebrow="Project 05 · Rudra Buildwell Projects"
      title="Rudra Palace Heights,"
      goldWord="Sector 1"
      facts={projects.rudra.facts}
      img={IMG.rudra}
      imgAlt="Apartment facade with private balconies"
      tag="Ready to Move"
    >
      <SubHeading eyebrow="Rudra Palace Heights · Sector 1 Advantage" title="Expansive Green Living at Gaur Chowk" />
      <Reveal className="mt-14 text-center border border-white/5 bg-[#141414] px-6 py-16 sm:py-20">
        <p className="font-serif font-light text-gold-gradient leading-none text-[5.5rem] sm:text-[8rem] lg:text-[10rem]">80%</p>
        <div className="gold-hairline w-32 mx-auto my-8" />
        <p className="font-serif text-xl sm:text-2xl font-light text-[#F5F5F0]">Dedicated Open Landscape Across 8.29 Acres</p>
        <p className="mt-4 text-sm font-light text-[#A0A0A0] leading-relaxed">
          1 km from Gaur Chowk & Proposed Metro Station <span className="text-gold/60 mx-2">·</span> Prefabricated Steel
          Framework
        </p>
      </Reveal>
    </Project>

    <Project
      id="eternia-residences"
      alt
      reverse
      eyebrow="Project 06 · Techzone 4 Near Ek Murti"
      title="Eternia Residences,"
      goldWord="1 Murti Chowk"
      facts={projects.eternia.facts}
      img={IMG.eternia}
      imgAlt="Contemporary residential tower block"
      tag="Luxury Design"
    >
      <SubHeading eyebrow="Eternia Residences · Luxury Design" title="Skyline Living Facing 100m Green Belt" />
      <FeatureCards items={projects.eternia.highlights} />
    </Project>

    <ChapterBand
      id="nbcc"
      eyebrow="Government-Backed Delivery"
      title="NBCC Projects in"
      goldWord="Noida Extension"
    />

    <Project
      id="nbcc-aspire"
      eyebrow="Project 07 · NBCC (India) Limited"
      title="NBCC Aspire"
      goldWord="Townships"
      facts={projects.nbcc.facts}
      img={IMG.nbcc}
      imgAlt="Aerial view of a planned residential township"
      tag="Government-Backed"
    >
      <SubHeading eyebrow="NBCC Aspire · Greater Noida West Cluster" title="Flagship NBCC Developments" />
      <DataTable caption="Flagship NBCC developments" columns={projects.nbcc.table.columns} rows={projects.nbcc.table.rows} />
    </Project>

    <ChapterBand
      id="category-a"
      eyebrow="Category A+ & Expressway Commercial"
      title="Godrej, M3M, ACE, Eldeco &"
      goldWord="Urbtech Sec 153"
    />

    <Section id="category-a-developers">
      <SectionHeading eyebrow="Category A+ · Trusted NCR Developers" title="Category A+" goldWord="Residences" />
      <DetailCards items={categoryA} />
    </Section>

    <Section id="urbtech" alt>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 lg:order-2">
          <SectionHeading eyebrow="Noida Expressway Hub · Sector 153" title="Urbtech NPX" goldWord="Trade Center" />
          <div className="mt-12">
            <FactList items={urbtech} />
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <MediaFrame src={IMG.urbtech} alt="Glass-fronted commercial office building" tag="Commercial · Ready to Move" className="aspect-[4/3] lg:aspect-[5/6]" />
        </div>
      </div>
    </Section>

    <Section id="benchmark">
      <SectionHeading eyebrow="03 — Investment Benchmark" title="Starting Price Comparison" goldWord="Across Builders" />
      <BarCompare
        caption="Starting price by project"
        rows={benchmark}
        note="* Indicative starting prices shared by developers; subject to change, taxes and availability. Verify RERA disclosures before booking."
      />
    </Section>

    <ClosingCTA
      eyebrow="Noida Extension & Expressway"
      title="Schedule Your"
      goldWord="Site Visit Today"
      tags={["Floor Plans", "RERA Disclosures", "Exclusive Builder Inventory"]}
      cta={{ label: "Book a Site Visit", href: "#contact" }}
    />

    <EnquiryForm eyebrow="04 — Get in Touch" defaultInterest="Axion Realty — Residential & Commercial Projects" />
  </PageLayout>
);

export default RealtyPage;
