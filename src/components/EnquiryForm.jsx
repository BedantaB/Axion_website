import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { MapPin, Mail, Send, CheckCircle2 } from "lucide-react";

const API = `${import.meta.env.VITE_BACKEND_URL ?? ""}/api`;

const interests = [
  "Axion Realty — Residential & Commercial Projects",
  "Axion Infrastructure — JV & Turnkey Construction",
  "Axion Fincorp — Home Loan",
  "Axion Fincorp — Loan Against Property",
  "Axion Fincorp — Construction Loan",
  "Axion Interior & Crafting",
  "General / Partnership",
];

const field =
  "w-full bg-[#141414] border border-white/10 focus:border-gold/60 text-[#F5F5F0] text-sm font-light px-5 py-4 placeholder:text-[#666] transition-colors duration-300 outline-none";

export const EnquiryForm = ({ eyebrow = "05 — Get in Touch", defaultInterest = interests[0] }) => {
  const initial = { name: "", phone: "", email: "", interest: defaultInterest, message: "" };
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast.error("Please fill in your name, phone and email.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      setDone(true);
      setForm(initial);
      toast.success("Enquiry received. Our team will reach out shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-28 lg:py-36 px-6 lg:px-10 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <SectionHeading eyebrow={eyebrow} title="Begin the" goldWord="Conversation" />
          <Reveal delay={0.1} className="mt-12 space-y-8">
            <div className="flex gap-5">
              <MapPin size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#A0A0A0] mb-2">Corporate Headquarters</p>
                <p className="text-sm font-light text-[#F5F5F0] leading-relaxed">
                  Noida / Greater Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Mail size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#A0A0A0] mb-2">Email</p>
                <p className="text-sm font-light text-[#F5F5F0] leading-relaxed">
                  support@axionspace.com<br />info@axionspace.com
                </p>
              </div>
            </div>
            <p className="text-sm font-light text-[#A0A0A0] leading-relaxed border-l border-gold/30 pl-6">
              Connect with our Realty, Infrastructure, Financial Advisory or Interiors desks directly —
              every enquiry is answered by a dedicated relationship manager.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {done ? (
            <div
              data-testid="enquiry-success"
              className="h-full min-h-[420px] flex flex-col items-center justify-center bg-[#1A1A1A] border border-gold/25 p-12 text-center"
            >
              <CheckCircle2 size={44} strokeWidth={1} className="text-gold" />
              <h3 className="mt-8 font-serif text-3xl font-light text-[#F5F5F0]">Thank You</h3>
              <p className="mt-4 max-w-sm text-sm font-light text-[#A0A0A0] leading-relaxed">
                Your enquiry has been received. A member of the Axion team will contact you within
                one business day.
              </p>
              <button
                data-testid="enquiry-again-btn"
                onClick={() => setDone(false)}
                className="mt-10 text-[10px] tracking-[0.35em] uppercase text-gold border border-gold/40 px-8 py-3 hover:bg-gold hover:text-black transition-colors duration-300"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit} data-testid="enquiry-form" className="bg-[#1A1A1A] border border-white/5 p-8 sm:p-12 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input data-testid="enquiry-name" required placeholder="Full Name *" value={form.name} onChange={set("name")} className={field} />
                <input data-testid="enquiry-phone" required placeholder="Phone *" value={form.phone} onChange={set("phone")} className={field} />
              </div>
              <input data-testid="enquiry-email" required type="email" placeholder="Email Address *" value={form.email} onChange={set("email")} className={field} />
              <select data-testid="enquiry-interest" value={form.interest} onChange={set("interest")} className={`${field} appearance-none cursor-pointer`}>
                {interests.map((i) => (
                  <option key={i} value={i} className="bg-[#141414]">{i}</option>
                ))}
              </select>
              <textarea data-testid="enquiry-message" rows={4} placeholder="Tell us about your requirement…" value={form.message} onChange={set("message")} className={`${field} resize-none`} />
              <button
                type="submit"
                disabled={loading}
                data-testid="enquiry-submit-btn"
                className="group w-full flex items-center justify-center gap-3 bg-gold text-black text-[11px] tracking-[0.3em] uppercase font-medium py-5 hover:bg-gold-soft transition-colors duration-300 disabled:opacity-60"
              >
                {loading ? "Sending…" : "Submit Enquiry"}
                <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
