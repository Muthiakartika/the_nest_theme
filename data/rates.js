/* ==========================================================================
   ⚠  PLACEHOLDER TUITION RATES — NOT REAL PRICING
   ==========================================================================

   The client has not supplied fee figures. Every number below is a stand-in
   so the estimator can be built, tested and demonstrated.

   TO GO LIVE:
     1. Replace every `amount` with the centre’s real monthly fee.
     2. Set `RATES_CONFIRMED = true`.
     3. That flag removes the "indicative only" notice from the estimator UI.

   Until step 2 is done the estimator deliberately shows a range and refuses
   to present itself as a quote. Do not remove that notice by hand — a parent
   reading an invented fee as a real one is worse than no estimator at all.
   ========================================================================== */

export const RATES_CONFIRMED = false;

export const currency = {
  code: "IDR",
  symbol: "Rp",
  /** Fees are quoted per month unless the client says otherwise. */
  period: "per month",
};

export const attendanceOptions = [
  {
    id: "full",
    label: "Full-Day",
    detail: "Mon–Fri, 8:30am–2:30pm",
    appliesTo: ["infants", "toddlers", "preschool"],
  },
  {
    id: "half",
    label: "Half-Day",
    detail: "Mon–Fri, 8:30am–12:15pm",
    appliesTo: ["infants", "toddlers", "preschool"],
  },
  {
    id: "flexible",
    label: "Flexible",
    detail: "Mon–Sun, 7:00am–7:00pm",
    appliesTo: ["kids-club"],
  },
];

/** amount = placeholder monthly fee in IDR. */
export const rates = {
  infants: { full: 6500000, half: 4200000 },
  toddlers: { full: 5900000, half: 3800000 },
  preschool: { full: 5400000, half: 3500000 },
  "kids-club": { flexible: 850000 },
};

/** Kids’ Club is priced per session, not per month. */
export const ratePeriod = {
  infants: "per month",
  toddlers: "per month",
  preschool: "per month",
  "kids-club": "per day",
};

export function formatAmount(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(value);
}

export function getRate(programSlug, attendanceId) {
  const row = rates[programSlug];
  if (!row) return null;
  const amount = row[attendanceId];
  if (typeof amount !== "number") return null;
  return { amount, period: ratePeriod[programSlug] || currency.period };
}

export function attendanceFor(programSlug) {
  return attendanceOptions.filter((o) => o.appliesTo.includes(programSlug));
}
