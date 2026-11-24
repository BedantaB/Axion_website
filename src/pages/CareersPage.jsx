import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2, Upload, FileText, Mail, MapPin } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { PageHero, Section } from "@/components/page/Blocks";
import { submitToSheet } from "@/lib/sheets";
import { pageUrl } from "@/lib/links";

const IMG = {
  hero: "https://images.unsplash.com/photo-1648210475365-1b8ab66c1570?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
};

const jobs = [
  {
    title: "Sales Manager — Fincorp",
    unit: "Axion Fincorp · Fractional & Syndicate",
    summary:
      "Drive investor onboarding, fractional micro-registry allocations (10%–25%), and structured syndicate placements across high-yield group assets.",
    points: [
      ["Investor & HNI Acquisition", "Source, pitch, and onboard HNIs, family offices, and retail investors into SPV-backed fractional real estate and commercial asset pools."],
      ["Yield & Structure Advisory", "Present cap-rate projections, cash-flow schedules, escrow safeguards, and lock-in/exit terms clearly and transparently."],
      ["Pipeline & Conversion", "Manage inbound/outbound investor leads, conduct financial walkthroughs, and close fractional ticket commitments."],
      ["Coordination & Compliance", "Work closely with finance, legal, and escrow teams to ensure smooth KYC, agreement execution, and onboarding."],
    ],
  },
  {
    title: "Sales Manager — Interior",
    unit: "Axion Interior & Turnkey Fit-Outs",
    summary:
      "Lead client acquisition, consultative pitching, and contract closures for residential, commercial, studio, hospitality, and farmhouse interior projects.",
    points: [
      ["Consultative Interior Sales", "Engage property owners, commercial buyers, and farmhouse/resort investors to sell bespoke design and turnkey fit-out packages."],
      ["Estimation & Proposal Delivery", "Coordinate with design and estimation teams to prepare BOQs, timelines, material specs, and commercial proposals."],
      ["Site Visits & Walkthroughs", "Host client meetings, showcase sample materials/VR concepts, and convert design inquiries into signed work orders."],
      ["Post-Signoff Handover", "Ensure smooth transition from sales closure to project execution while maintaining high client satisfaction."],
    ],
  },
  {
    title: "Vice President — Realty",
    unit: "Axion Realty · Executive Leadership",
    summary:
      "Own end-to-end real estate sales strategy, revenue growth, channel partner scaling, and sales team leadership across core group projects.",
    points: [
      ["Revenue & Target Leadership", "Drive aggressive monthly and quarterly sales targets across plots, residential apartments, commercial units, and farmhouse/leasing mandates."],
      ["Team & Channel Scaling", "Lead, mentor, and scale sales leaders, executives, and empanelled Channel Partners to maximize site visits and closures."],
      ["Pricing, Inventory & Strategy", "Partner with leadership on inventory positioning, payment plans, brokerage slabs, and campaign ROI optimization."],
      ["Key Account & Deal Closure", "Personally anchor high-value closures and resolve complex client or channel negotiations."],
    ],
  },
  {
    title: "Tele Sales Executive — Fincorp & Real Estate",
    unit: "Inside Sales · Fincorp & Realty",
    summary:
      "Qualify leads, conduct structured outbound/inbound calls, and book high-intent meetings or site visits for Fincorp fractional offerings and Realty projects.",
    points: [
      ["Daily Outreach & Follow-Ups", "Execute high-discipline calling and follow-ups on daily campaign leads across Fincorp investment opportunities and Realty properties."],
      ["Lead Qualification & Profiling", "Assess buyer/investor budget, investment horizon, and asset preference before scheduling calls or site visits."],
      ["Appointment & Visit Scheduling", "Book qualified meetings with sales managers, VPs, or on-site advisors and confirm attendance."],
      ["CRM Hygiene & Reporting", "Maintain accurate daily call logs, lead statuses, and follow-up reminders in the sales tracker."],
    ],
  },
];

const OPEN_APPLICATION = "Open Application / Other Role";
const roles = [...jobs.map((j) => j.title), OPEN_APPLICATION];

const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const RESUME_MAX_MB = 5;

const field =
  "w-full bg-[#141414] border border-white/10 focus:border-gold/60 text-[#F5F5F0] text-sm font-light px-5 py-4 placeholder:text-[#666] transition-colors duration-300 outline-none";

/** File -> base64 (without the "data:...;base64," prefix). */
const readBase64 = (file) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(",")[1]);
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });

const JobCard = ({ job, i, onApply }) => (
  <Reveal delay={(i % 2) * 0.08}>
    <article
      data-testid={`job-${i}`}
      className="group h-full flex flex-col bg-[#1A1A1A] border border-white/5 hover:border-gold/30 p-8 lg:p-10 transition-colors duration-500"
    >
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold leading-relaxed">{job.unit}</p>
      <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-light text-[#F5F5F0] leading-tight">{job.title}</h3>
      <div className="gold-hairline w-20 mt-6" />
      <p className="mt-6 text-sm font-light text-[#C8C8C2] leading-relaxed">{job.summary}</p>
      <ul className="mt-6 space-y-4 flex-1">
        {job.points.map(([label, text]) => (
          <li key={label} className="flex gap-4">
            <span className="mt-2.5 w-3 h-px bg-gold shrink-0" />
            <p className="text-sm font-light text-[#A0A0A0] leading-relaxed">
              <span className="text-[#F5F5F0] font-normal">{label}:</span> {text}
            </p>
          </li>
        ))}
      </ul>
      <a
        href="#apply"
        onClick={() => onApply(job.title)}
        data-testid={`job-apply-${i}`}
        className="mt-8 self-start text-[10px] tracking-[0.35em] uppercase text-gold border border-gold/40 px-7 py-3 hover:bg-gold hover:text-black transition-colors duration-300"
      >
        Apply for this Role
      </a>
    </article>
  </Reveal>
);

const CareerForm = ({ role, setRole }) => {
  const initial = { name: "", phone: "", email: "", compensation: "", notice: "", portfolio: "", message: "", website: "" };
  const [form, setForm] = useState(initial);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const fileInput = useRef(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const pickFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!RESUME_TYPES.includes(f.type)) {
      toast.error("Please upload your resume as a PDF or Word document.");
      e.target.value = "";
      return;
    }
    if (f.size > RESUME_MAX_MB * 1024 * 1024) {
      toast.error(`Resume must be under ${RESUME_MAX_MB} MB.`);
      e.target.value = "";
      return;
    }
    setFile(f);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast.error("Please fill in your name, phone and email.");
      return;
    }
    if (!file) {
      toast.error("Please attach your resume.");
      return;
    }
    setLoading(true);
    try {
      await submitToSheet({
        ...form,
        form: "career",
        role,
        resumeName: file.name,
        resumeType: file.type,
        resumeData: await readBase64(file),
      });
      setDone(true);
      setForm(initial);
      setFile(null);
      toast.success("Application received. Our HR team will be in touch.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div
        data-testid="career-success"
        className="h-full min-h-[420px] flex flex-col items-center justify-center bg-[#1A1A1A] border border-gold/25 p-12 text-center"
      >
        <CheckCircle2 size={44} strokeWidth={1} className="text-gold" />
        <h3 className="mt-8 font-serif text-3xl font-light text-[#F5F5F0]">Thank You</h3>
        <p className="mt-4 max-w-sm text-sm font-light text-[#A0A0A0] leading-relaxed">
          Your application has been received. If your profile matches the role, our HR team will contact you.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-10 text-[10px] tracking-[0.35em] uppercase text-gold border border-gold/40 px-8 py-3 hover:bg-gold hover:text-black transition-colors duration-300"
        >
          Apply for Another Role
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="career-form" className="bg-[#1A1A1A] border border-white/5 p-8 sm:p-12 space-y-6">
      <select data-testid="career-role" value={role} onChange={(e) => setRole(e.target.value)} className={`${field} appearance-none cursor-pointer`}>
        {roles.map((r) => (
          <option key={r} value={r} className="bg-[#141414]">{r}</option>
        ))}
      </select>
      <div className="grid sm:grid-cols-2 gap-6">
        <input data-testid="career-name" required placeholder="Full Name *" value={form.name} onChange={set("name")} className={field} />
        <input data-testid="career-phone" required placeholder="Phone *" value={form.phone} onChange={set("phone")} className={field} />
      </div>
      <input data-testid="career-email" required type="email" placeholder="Email Address *" value={form.email} onChange={set("email")} className={field} />
      {/* Honeypot: hidden from people, bots fill it and get silently dropped. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set("website")} className="hidden" />
      <div className="grid sm:grid-cols-2 gap-6">
        <input data-testid="career-compensation" placeholder="Current Compensation (CTC)" value={form.compensation} onChange={set("compensation")} className={field} />
        <input data-testid="career-notice" placeholder="Notice Period" value={form.notice} onChange={set("notice")} className={field} />
      </div>
      <input data-testid="career-portfolio" placeholder="LinkedIn / Portfolio Link" value={form.portfolio} onChange={set("portfolio")} className={field} />
      <textarea data-testid="career-message" rows={4} placeholder="Your track record — key results, deals closed, targets achieved…" value={form.message} onChange={set("message")} className={`${field} resize-none`} />

      <div>
        <input ref={fileInput} type="file" accept=".pdf,.doc,.docx" onChange={pickFile} className="hidden" data-testid="career-resume" />
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className="w-full flex items-center gap-4 border border-dashed border-gold/40 hover:border-gold px-5 py-5 text-left transition-colors duration-300"
        >
          {file ? <FileText size={18} strokeWidth={1.25} className="text-gold shrink-0" /> : <Upload size={18} strokeWidth={1.25} className="text-gold shrink-0" />}
          <span className="min-w-0 text-sm font-light text-[#F5F5F0] truncate">{file ? file.name : "Upload Resume *"}</span>
          <span className="ml-auto shrink-0 text-[10px] tracking-[0.25em] uppercase text-[#666]">PDF / DOC · Max {RESUME_MAX_MB} MB</span>
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        data-testid="career-submit-btn"
        className="group w-full flex items-center justify-center gap-3 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium py-5 hover:bg-gold-soft transition-colors duration-300 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Submit Application"}
        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default function CareersPage() {
  const [role, setRole] = useState(roles[0]);

  return (
    <PageLayout title="Careers — Axion Space Group of Companies">
      <PageHero
        img={IMG.hero}
        imgAlt="Modern office workspace"
        crumb="Careers"
        eyebrow="Careers & Talent Acquisition"
        title="We Are"
        goldTitle="Hiring"
        subtitle="We are expanding across real estate, fractional finance, commercial leasing, and turnkey interiors in India and Dubai. Driven by our “We Not Me” culture, we reward high-ownership professionals with clear growth paths and performance-linked upside."
        primary={{ label: "View Open Roles", href: "#open-roles" }}
        secondary={{ label: "Apply Now", href: "#apply" }}
      />

      <Section id="open-roles">
        <SectionHeading eyebrow="01 — Open Positions" title="Roles &" goldWord="Job Descriptions" />
        <div className="mt-16 grid lg:grid-cols-2 gap-5">
          {jobs.map((job, i) => (
            <JobCard key={job.title} job={job} i={i} onApply={setRole} />
          ))}
        </div>
      </Section>

      <section id="contact" className="py-28 lg:py-36 px-6 lg:px-10 bg-[#0C0C0C]">
        <div id="apply" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionHeading eyebrow="02 — How to Apply" title="Build Your Career on" goldWord="We Not Me" />
            <Reveal delay={0.1} className="mt-12 space-y-8">
              <p className="text-sm font-light text-[#A0A0A0] leading-relaxed">
                Select your desired role and submit your updated resume, current compensation, notice period, and
                relevant portfolio or track record. Don’t see your role? Choose{" "}
                <span className="text-[#F5F5F0]">Open Application</span> and tell us how you’d contribute.
              </p>
              <div className="flex gap-5">
                <Mail size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#A0A0A0] mb-2">Email</p>
                  <a href="mailto:info@axionspace.com" className="text-sm font-light text-[#F5F5F0] hover:text-gold transition-colors duration-300">
                    info@axionspace.com
                  </a>
                </div>
              </div>
              <div className="flex gap-5">
                <MapPin size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#A0A0A0] mb-2">Where We Work</p>
                  <p className="text-sm font-light text-[#F5F5F0] leading-relaxed">
                    Noida · Gurgaon · Kolkata
                    <span className="block mt-1 text-[#A0A0A0]">Opening soon: Dubai · Goa · Bombay · Pune</span>
                  </p>
                </div>
              </div>
              <a
                href={pageUrl("about")}
                className="inline-block text-[10px] tracking-[0.35em] uppercase text-gold hover:text-gold-soft transition-colors duration-300"
              >
                About the Group →
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <CareerForm role={role} setRole={setRole} />
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
