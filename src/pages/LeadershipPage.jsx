import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero, Section } from "@/components/page/Blocks";
import { Portrait } from "@/components/page/People";
import { pageUrl } from "@/lib/links";

const IMG = {
  hero: "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
};

/*
 * To fill a role later: set `name` (and optionally `profile` and `photo`).
 * Roles without a name show "To be announced". Photos go in public/leadership/,
 * e.g. photo: "/leadership/rishab.jpg".
 */
const groups = [
  {
    id: "executive-board",
    eyebrow: "01 — Axion Space LLP",
    title: "Group Executive",
    goldWord: "Board",
    leaders: [
      { role: "Chairman & Whole Time Director", focus: "Group Vision & Fractional", name: "Mr Vishal Barman" },
      { role: "Co-Founder / Executive Director", focus: "Operations & Expansion" },
      { role: "Director — Finance & Fincorp", focus: "Underwriting & Escrow" },
    ],
  },
  {
    id: "vertical-heads",
    eyebrow: "02 — All Verticals",
    title: "Business Vertical",
    goldWord: "Heads",
    leaders: [
      { role: "Head — Real Estate & Land", focus: "Axion Realty & Infra" },
      { role: "Head — Hospitality & Stays", focus: "Hotels, Resorts & PGs" },
      { role: "Head — Fuel & Energy Retail", focus: "Petrol Pumps" },
      { role: "Head — Luxury Intercity Transit", focus: "Volvo 9600 Fleet" },
      { role: "Head — Restaurants & Dhabas", focus: "Culinary & Highway Hubs" },
      { role: "Head — Warehousing & 3PL", focus: "Logistics" },
    ],
  },
  {
    id: "department-heads",
    eyebrow: "03 — Functional Leadership",
    title: "Functional & Department",
    goldWord: "Heads",
    leaders: [
      {
        role: "IT Head — Interior Process",
        focus: "Axion Group IT Department",
        name: "Mr Bedanta Bhaumik",
        profile: "Heads the interior process of the Axion Group IT Department.",
      },
      { role: "Regional Head — Dubai (UAE)", focus: "International Operations" },
      { role: "Head — Sales & Channel Partners", focus: "Revenue & CP Network" },
    ],
  },
];

const LeaderCard = ({ l, i }) => (
  <Reveal delay={(i % 3) * 0.08}>
    <article
      data-testid={`leader-${l.role.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="group h-full bg-[#1A1A1A] border border-white/5 hover:border-gold/30 p-8 transition-colors duration-500"
    >
      <div className="flex items-center gap-5">
        <Portrait name={l.name} photo={l.photo} size="sm" />
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold leading-relaxed">{l.focus}</p>
          {l.name ? (
            <h3 className="mt-2 font-serif text-2xl font-light text-[#F5F5F0] leading-tight">{l.name}</h3>
          ) : (
            <p className="mt-2 font-serif italic text-xl font-light text-[#666] leading-tight">To be announced</p>
          )}
        </div>
      </div>
      <div className="gold-hairline w-16 mt-7" />
      <p className="mt-6 text-sm text-[#F5F5F0] leading-relaxed">{l.role}</p>
      {l.profile && <p className="mt-3 text-sm font-light text-[#A0A0A0] leading-relaxed">{l.profile}</p>}
    </article>
  </Reveal>
);

export default function LeadershipPage() {
  return (
    <PageLayout title="Leadership Team — Axion Space Group of Companies">
      <PageHero
        img={IMG.hero}
        imgAlt="Corporate office at dusk"
        crumb="Leadership Team"
        eyebrow="Executive Governance"
        title="Leadership"
        goldTitle="Team"
        subtitle="Guided by the “We Not Me” collective philosophy, Axion Space Group of Companies structures its leadership across core group governance, business verticals, and functional departments."
        primary={{ label: "Meet the Team", href: "#executive-board" }}
        secondary={{ label: "Board of Directors", href: pageUrl("board-of-directors") }}
      />

      {groups.map((g, gi) => (
        <Section key={g.id} id={g.id} alt={gi % 2 === 1}>
          <SectionHeading eyebrow={g.eyebrow} title={g.title} goldWord={g.goldWord} />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {g.leaders.map((l, i) => (
              <LeaderCard key={l.role} l={l} i={i} />
            ))}
          </div>
        </Section>
      ))}

      <EnquiryForm eyebrow="04 — Get in Touch" defaultInterest="General / Partnership" />
    </PageLayout>
  );
}
