/**
 * Motif — The Nest’s drawn alphabet.
 *
 * Every mark on this site is drawn here, at one stroke weight, in one family.
 * These are the "hundred languages" made graphic: the things a child at The
 * Nest actually meets in a day. They are the site’s cheerfulness engine —
 * colour is restrained by the guideline, so energy comes from drawing.
 *
 * Never substitute an emoji or a stock icon set for one of these.
 */

const P = {
  /* --- The sampler alphabet: what a day at The Nest is made of --- */

  // Sensory play, nature discovery
  leaf: (
    <>
      <path d="M4.2 19.8C4.2 11.6 9.4 5.6 20 3.6c1.2 10.6-5.2 16.4-13.6 16.4H4.2Z" />
      <path d="M4.6 19.4C8.4 14.6 12.8 10.6 17.6 8" />
    </>
  ),
  // Growth, the garden, "where does our food come from?"
  sprout: (
    <>
      <path d="M12 21v-7.2" />
      <path d="M12 13.8c0-3.1-2.3-5.2-5.4-5.2 0 3.1 2.3 5.2 5.4 5.2Z" />
      <path d="M12 13.8c0-3.5 2.4-5.8 5.7-5.8 0 3.5-2.4 5.8-5.7 5.8Z" />
    </>
  ),
  // Outdoor discovery, golden-hour play
  sun: (
    <>
      <circle cx="12" cy="12" r="4.1" />
      <path d="M12 2.6v2.4M12 19v2.4M21.4 12H19M5 12H2.6M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7M18.6 18.6l-1.7-1.7M7.1 7.1 5.4 5.4" />
    </>
  ),
  // Mealtime together
  bowl: (
    <>
      <path d="M3.4 11.4h17.2a8.6 8.6 0 0 1-17.2 0Z" />
      <path d="M9.2 7.9c0-1.6 1-1.9 1-3.2M13.8 7.9c0-1.6 1-1.9 1-3.2" />
    </>
  ),
  // Story time
  book: (
    <>
      <path d="M12 6.6C10 4.9 7.4 4.3 4 4.6v12.8c3.4-.3 6 .3 8 2 2-1.7 4.6-2.3 8-2V4.6c-3.4-.3-6 .3-8 2Z" />
      <path d="M12 6.6v12.8" />
    </>
  ),
  // Building & construction zone
  blocks: (
    <>
      <path d="M4 13.4h7.2v7.2H4zM12.8 13.4H20v7.2h-7.2z" />
      <path d="M8.4 6.2h7.2v7.2H8.4z" />
    </>
  ),
  // Creative arts, the hundred languages
  bloom: (
    <>
      <circle cx="12" cy="12" r="2.3" />
      <path d="M12 9.7c0-2.6.9-4.3 2.6-4.3s2.2 2.3.6 4M12 14.3c0 2.6-.9 4.3-2.6 4.3s-2.2-2.3-.6-4M9.7 12c-2.6 0-4.3-.9-4.3-2.6s2.3-2.2 4-.6M14.3 12c2.6 0 4.3.9 4.3 2.6s-2.3 2.2-4 .6" />
    </>
  ),
  // Care, being held, responsive relationships
  hand: (
    <>
      <path d="M8.6 11.3V5.7a1.6 1.6 0 0 1 3.2 0V11" />
      <path d="M11.8 11V4.5a1.6 1.6 0 0 1 3.2 0v6.6" />
      <path d="M15 11.7V6.8a1.55 1.55 0 0 1 3.1 0V15c0 3.3-2.7 6-6 6s-6-2.7-6-6v-2.7a1.6 1.6 0 0 1 3.2 0" />
    </>
  ),
  // Water play, the garden hose, Bali rain
  water: (
    <>
      <path d="M2.5 8.4c2.4-2.1 4.8-2.1 7.2 0s4.8 2.1 7.2 0 2.6-1.5 4.6-1.4" />
      <path d="M2.5 13.2c2.4-2.1 4.8-2.1 7.2 0s4.8 2.1 7.2 0 2.6-1.5 4.6-1.4" />
      <path d="M2.5 18c2.4-2.1 4.8-2.1 7.2 0s4.8 2.1 7.2 0 2.6-1.5 4.6-1.4" />
    </>
  ),
  // Home, the second home, family
  house: (
    <>
      <path d="M3.4 10.6 12 3.4l8.6 7.2" />
      <path d="M5.6 12.4v8.2h12.8v-8.2" />
      <path d="M9.9 20.6v-5.1h4.2v5.1" />
    </>
  ),
  // Community, our neighbourhood mapped
  boat: (
    <>
      <path d="M2.8 16.4h18.4l-2.6 4.4H5.4l-2.6-4.4Z" />
      <path d="M12 16.4V3.2l7.2 8.6H12" />
      <path d="M12 16.4H6.6l3-4.6H12" />
    </>
  ),
  // Rest & reflection
  moon: (
    <>
      <path d="M20 14.6A8.6 8.6 0 0 1 9.4 4 8.6 8.6 0 1 0 20 14.6Z" />
    </>
  ),
  // The eyelet — a sampler’s classic spot motif, and our brand asterisk
  eyelet: (
    <>
      <path d="M12 2.4v19.2M2.4 12h19.2M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7" />
    </>
  ),
  // The nest itself. Used sparingly — once or twice across the whole site.
  nest: (
    <>
      <path d="M3.2 12.6c0 4.2 3.9 7.4 8.8 7.4s8.8-3.2 8.8-7.4" />
      <path d="M3.2 12.6c0-1.7 3.9-3.1 8.8-3.1s8.8 1.4 8.8 3.1" />
      <circle cx="9.4" cy="11.2" r="1.4" />
      <circle cx="13.9" cy="10.9" r="1.4" />
    </>
  ),

  /* --- Utility marks --- */

  arrow: <path d="M4 12h14.5M13 6l6 6-6 6" />,
  tick: <path d="M4 12.7 9 18 20 5.6" />,
  chevron: <path d="M5.5 9 12 15.5 18.5 9" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  mail: (
    <>
      <path d="M3 6.4h18v11.2H3z" />
      <path d="m3.4 7 8.6 6.2L20.6 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s7-6.4 7-11.2a7 7 0 1 0-14 0c0 4.8 7 11.2 7 11.2Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 2.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21.2c4.4-2 7-5.6 7-10V5.6L12 2.8 5 5.6v5.6c0 4.4 2.6 8 7 10Z" />
      <path d="m8.9 11.9 2.2 2.3 4-4.4" />
    </>
  ),
  chat: (
    <>
      <path d="M3.4 19.8 4.9 15.6A8.4 8.4 0 1 1 8.6 19.1l-5.2.7Z" />
      <path d="M8.6 10.2c.5 2.6 2.6 4.7 5.2 5.2l1.4-1.7 2.2 1a5.6 5.6 0 0 1-8.1-5.2l1 2.2 1.7-1.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.6v11.2M7.4 10.4 12 15l4.6-4.6" />
      <path d="M4 18.8h16" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.6v5.2M12 16.2v.1" />
    </>
  ),
};

export const MOTIF_NAMES = [
  "leaf",
  "sprout",
  "sun",
  "bowl",
  "book",
  "blocks",
  "bloom",
  "hand",
  "water",
  "house",
  "boat",
  "moon",
  "eyelet",
];

export default function Motif({
  name = "eyelet",
  size = 24,
  strokeWidth,
  className = "",
  ...rest
}) {
  const d = P[name] || P.eyelet;
  // One thread weight throughout. The viewBox is fixed at 24, so the stroke
  // in user units has to fall as the mark grows for the *rendered* line to
  // stay at ~1.55px — a sampler is worked with the same thread whether the
  // motif is a corner spot or a full band.
  const sw = strokeWidth ?? Math.min(1.9, Math.max(0.3, (1.55 * 24) / size));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {d}
    </svg>
  );
}

/** The registration cross a pattern chart uses to mark its corners. */
export function RegMark({ size = 13, className = "", ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      <path d="M8 1.5v13M1.5 8h13" />
    </svg>
  );
}
