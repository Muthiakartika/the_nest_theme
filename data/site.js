/**
 * Site-wide facts. Every value here is confirmed client content.
 * Anything the client has not supplied is marked TODO and must not be invented.
 */

export const site = {
  name: "The Nest Daycare",
  shortName: "The Nest",
  domain: "thenestdaycare.com",
  url: "https://thenestdaycare.com",
  tagline: "A second home for the first six years.",
  location: "Umalas, Bali",
  locationLong: "Umalas, Bali, Indonesia",
  ages: "Ages 1–6",
  email: "hello@thenestdaycare.com",
  // TODO(client): no phone number, WhatsApp number or Instagram handle
  // supplied. These stay null on purpose — a null href renders as plain,
  // non-clickable text carrying a "pending" note, so nothing on the site ever
  // looks like a working contact route when it is not one. Fill them in and
  // every link turns on by itself.
  whatsapp: null, // e.g. "https://wa.me/62..."
  instagram: null, // e.g. "https://instagram.com/thenestdaycare"
  philosophy: "Nurture · Embrace · Inspire",
};

export const nav = [
  { href: "/programs", label: "Programs" },
  { href: "/our-approach", label: "Our Approach" },
  { href: "/about", label: "About" },
  { href: "/child-safety", label: "Safety" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = [
  {
    heading: "Explore",
    links: [
      { href: "/programs", label: "Programs" },
      { href: "/our-approach", label: "Our Approach" },
      { href: "/about", label: "Our Story" },
      { href: "/about/people-and-care", label: "Our People & Care" },
    ],
  },
  {
    heading: "Family",
    links: [
      { href: "/admissions", label: "Admissions & Enrollment" },
      { href: "/child-safety", label: "Child Safety" },
      { href: "/about/health-hygiene-nutrition", label: "Health & Nutrition" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "/contact", label: "Book a Tour" },
      { href: site.whatsapp, label: "WhatsApp", pending: "coming soon" },
      { href: site.instagram, label: "Instagram", pending: "coming soon" },
      { href: `mailto:${site.email}`, label: site.email },
    ],
  },
];

/** The three foundational pillars — "Preparing wings to fly". */
export const pillars = [
  {
    kicker: "Care",
    title: "Safety & Trust",
    body: "Warm, responsive relationships where every child feels seen and valued.",
    motif: "hand",
  },
  {
    kicker: "Development",
    title: "Structured Learning",
    body: "An age-based framework supporting language, motor and social growth.",
    motif: "sprout",
  },
  {
    kicker: "Experience",
    title: "Immersive Environments",
    body: "Nature, creativity and movement shape daily learning experiences.",
    motif: "leaf",
  },
];

/** The Balinese philosophy triangle. */
export const harmony = [
  {
    title: "Nature",
    body: "The environment as a third teacher.",
    motif: "leaf",
  },
  {
    title: "Family",
    body: "Partnership at every stage of growth.",
    motif: "house",
  },
  {
    title: "Community",
    body: "A village of educators and caregivers.",
    motif: "boat",
  },
];

/** Reggio Emilia — the five principles, as the client states them. */
export const principles = [
  {
    title: "Children as capable learners",
    body: "Active participants, not passive recipients of instruction. Their ideas, questions and theories shape daily experience.",
    motif: "sprout",
  },
  {
    title: "Learning through play & relationships",
    body: "Play, exploration and shared experience, rather than instruction alone.",
    motif: "blocks",
  },
  {
    title: "Supporting individual development",
    body: "Educators observe closely, supporting each child’s own milestones and pace.",
    motif: "hand",
  },
  {
    title: "The environment as third teacher",
    body: "Natural light and open-ended materials support calm and creativity.",
    motif: "house",
  },
  {
    title: "The hundred languages of children",
    body: "Drawing, movement, storytelling, music, construction and play — every form of expression is valued.",
    motif: "bloom",
  },
];

/** A day at The Nest. */
export const dayAtTheNest = [
  { label: "Sensory play", motif: "water" },
  { label: "Story time", motif: "book" },
  { label: "Outdoor discovery", motif: "sun" },
  { label: "Mealtime together", motif: "bowl" },
  { label: "Rest & reflection", motif: "moon" },
];

/** Why parents choose The Nest — the protective questions, answered first. */
export const trustPoints = [
  {
    title: "Low ratios, always",
    body: "From 1:3 in infancy to 1:8 in preschool — every child is genuinely known.",
    motif: "hand",
  },
  {
    title: "People, not just policy",
    body: "We hire for character first: nurturers, guides, co-learners.",
    motif: "sprout",
  },
  {
    title: "A secure campus",
    body: "Access control, CCTV, and screened staff — set out in full on our Safety page.",
    motif: "shield",
  },
  {
    title: "Real relationships",
    body: "Small groups mean every child is truly known, every day.",
    motif: "book",
  },
];

/** The enrollment journey. */
export const enrollmentSteps = [
  {
    title: "Book a Tour",
    body: "Visit the campus and meet our educators.",
    motif: "pin",
  },
  {
    title: "Complete Enrollment Form",
    body: "Submit your family and child information online.",
    motif: "book",
  },
  {
    title: "Attend Orientation",
    body: "Meet your child’s educators and settle in together.",
    motif: "hand",
  },
  {
    title: "Begin Your Journey",
    body: "Welcome to The Nest.",
    motif: "nest",
  },
];

/** Family partnership. */
export const partnership = [
  {
    title: "Ongoing Communication",
    body: "Daily updates and open conversation between families and educators.",
    motif: "chat",
  },
  {
    title: "Developmental Observations",
    body: "Regular, individual insight into how your child is growing.",
    motif: "sprout",
  },
  {
    title: "Shared Celebrations",
    body: "Milestones, big and small, celebrated together.",
    motif: "bloom",
  },
];

/** Educator commitments — eight, exactly as the client sets them out. */
export const educatorCommitments = [
  "Building trusting relationships with every child",
  "Working with small groups for individual attention",
  "Practising child-led, inquiry-based learning",
  "Supporting emotional wellbeing through patience",
  "Setting clear, respectful, consistent boundaries",
  "Encouraging independence and confidence",
  "Maintaining high standards of safeguarding & hygiene",
  "Building family partnerships through open communication",
];

/**
 * Child safety — three layers.
 *
 * `points` is the checkable fact set. `body` must never restate it: it says
 * what a bullet cannot — who the standard applies to and how far it reaches.
 * A page under this much parental scrutiny cannot afford to say everything
 * twice.
 */
export const safetyLayers = [
  {
    title: "Secure Campus Protocols",
    body: "The gate is the first thing you will notice, and that is deliberate. Nobody reaches a child without being on your list, and the record of who came and went is kept so that a question about any given day can be answered honestly.",
    motif: "shield",
    points: [
      "Access-controlled entry for authorised parents, guardians and staff",
      "High-definition CCTV across learning, sleeping and outdoor areas",
      "Every arrival and departure recorded for accountability",
    ],
  },
  {
    title: "Staff Screening",
    // The roles are the client's own words (they appear verbatim on the
    // People & Care page). What is NOT client-supplied is when screening
    // completes, so no timing is claimed here.
    body: "This standard covers everyone who sets foot on campus — not only educators, but administrators, teaching assistants, cleaners, gardeners, drivers and our security team. There is one bar, and it does not move.",
    motif: "hand",
    points: [
      "Identity verification",
      "Professional references",
      "Background screening",
      "Child-safeguarding compliance",
    ],
  },
  {
    title: "Safe Sleep & Medical Care",
    // No claim about where plans are held or how they are distributed —
    // the centre has not told us, and it is not ours to describe.
    body: "The youngest children carry the most individual arrangements, and each is planned for that child rather than applied as a general rule. Lead educators keep their pediatric first-aid certification current.",
    motif: "moon",
    points: [
      "Individual sleep spaces for infants",
      "Pediatric first-aid certified lead educators",
      "Individual allergy & dietary plans",
    ],
  },
];

/** Daily-life gallery — the shot list for the photographer. */
export const dailyLife = [
  { label: "Garden", caption: "Water play in the garden — children barefoot, mid-splash, late morning light", motif: "water", ratio: "3 / 4" },
  { label: "Blocks", caption: "The building and construction zone — natural timber blocks stacked high", motif: "blocks", ratio: "1 / 1" },
  { label: "Story", caption: "An educator reading with toddlers, gathered close on a woven mat", motif: "book", ratio: "1 / 1" },
  { label: "Walk", caption: "A nature discovery walk — small hands holding a found leaf", motif: "leaf", ratio: "3 / 4" },
];
