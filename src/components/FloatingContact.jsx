import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919318411787";
const CALL_NUMBER = "+919318411787";

export const FloatingContact = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.2, duration: 0.8 }}
    className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
  >
    <a
      href={`tel:${CALL_NUMBER}`}
      data-testid="call-fab"
      aria-label="Call Axion Space"
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors duration-300"
    >
      <Phone size={18} strokeWidth={1.5} />
    </a>
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Axion Space LLP Group, I'd like to enquire about your services.")}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-black hover:bg-gold-soft transition-colors duration-300"
    >
      <span className="absolute inset-0 rounded-full border border-gold animate-pulse-ring" />
      <MessageCircle size={22} strokeWidth={1.75} />
    </a>
  </motion.div>
);
