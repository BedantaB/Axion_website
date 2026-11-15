import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { homeUrl, pageUrl } from "@/lib/links";

// On entity pages Portfolio, Fincorp and Entities point back to homepage sections; every page has its own #contact.
const getLinks = (home) => [
  { label: "Portfolio", href: home ? "#portfolio" : homeUrl("#portfolio") },
  { label: "Realty", href: pageUrl("realty") },
  { label: "Fincorp", href: home ? "#fincorp" : homeUrl("#fincorp") },
  { label: "Entities", href: home ? "#entities" : homeUrl("#entities") },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ home = true }) => {
  const links = getLinks(home);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-gold/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
        <Logo compact={scrolled} href={home ? "#top" : homeUrl()} />
        <nav className="hidden lg:flex items-center gap-8 xl:gap-11">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-xs tracking-[0.35em] uppercase text-[#A0A0A0] hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta-enquire"
            className="text-xs tracking-[0.3em] uppercase border border-gold/40 text-gold px-7 py-3.5 hover:bg-gold hover:text-black transition-colors duration-300"
          >
            Enquire
          </a>
        </nav>
        <button
          data-testid="nav-menu-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-gold transition-transform duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-gold transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-black/90 backdrop-blur-md border-b border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.35em] uppercase text-[#F5F5F0] hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="self-start mt-1 text-xs tracking-[0.3em] uppercase border border-gold/40 text-gold px-6 py-3 hover:bg-gold hover:text-black transition-colors duration-300"
              >
                Enquire
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
