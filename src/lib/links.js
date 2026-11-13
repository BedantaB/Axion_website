// URL helpers so links keep working if the site is served from a sub-path (Vite `base`).
const BASE = import.meta.env.BASE_URL || "/";

/** Link to a section of the homepage, e.g. homeUrl("#entities"). */
export const homeUrl = (hash = "") => `${BASE}${hash}`;

/** Link to an entity page, e.g. pageUrl("interiors") -> "/interiors/". */
export const pageUrl = (slug, hash = "") => `${BASE}${slug}/${hash}`;
