import React, { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

/** Shared chrome for every page: smooth scroll, noise, navbar, footer, contact FABs. */
export const PageLayout = ({ title, home = false, children }) => {
  useEffect(() => {
    if (title) document.title = title;
    const lenis = new Lenis({ lerp: 0.09, duration: 1.4 });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Arriving from another page with a hash (e.g. "/#entities"): the target only
    // exists after React renders, so jump to it once mounted.
    if (window.location.hash) {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) requestAnimationFrame(() => lenis.scrollTo(target, { immediate: true }));
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [title]);

  return (
    <div className="App bg-[#0F0F0F] text-[#F5F5F0] min-h-screen">
      <div className="noise-overlay" aria-hidden />
      <Navbar home={home} />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
};
