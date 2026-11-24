import React from "react";

/** "Mr Vishal Barman" -> "VB". */
export const initials = (name) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

/** Square portrait: the photo if given, otherwise gold initials (or a fallback mark). */
export const Portrait = ({ name, photo, size = "md" }) => {
  const box = { sm: "w-16 h-16", md: "w-20 h-20", lg: "w-24 h-24 sm:w-28 sm:h-28" }[size];
  const text = { sm: "text-2xl", md: "text-3xl", lg: "text-4xl" }[size];
  return (
    <div className={`relative shrink-0 flex items-center justify-center overflow-hidden border border-gold/40 bg-[#141414] ${box}`}>
      {photo ? (
        <img src={photo} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <span className={`font-serif text-gold-gradient ${text}`} aria-hidden>
          {name ? initials(name) : "AS"}
        </span>
      )}
    </div>
  );
};
