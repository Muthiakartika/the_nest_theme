/**
 * The four programs — one continuous journey, four stages.
 *
 * Each program is a band on the practice cloth. `bandNote` is the sampler
 * reading of the stage; `density` drives how tightly that band’s motif row is
 * worked, so the composition itself carries the development the copy
 * describes. Infants is worked close and even; Kids’ Club is worked open.
 *
 * All ages, ratios and hours are confirmed client content.
 */

export const programs = [
  {
    slug: "infants",
    order: 1,
    name: "Infants",
    ageLabel: "1–2 Years",
    ageShort: "1–2y",
    ratio: "1 : 3",
    ratioLabel: "Our lowest ratio",
    ratioNote:
      "One educator per three infants — our most responsive, individual level of care.",
    tagline: "Nurturing First Connections",
    cardBlurb: "Nurturing first connections in a calm, responsive nursery.",
    intro:
      "The first years of life are built on trust, connection, responsive care, and meaningful exploration. Our Infant Program provides a calm, nurturing environment where young children feel secure, supported, and encouraged to explore the world around them at their own pace.",
    motif: "hand",
    bandNote: "The first row — worked slowly, evenly, stitches held close together.",
    density: 14,
    heroCaption:
      "An educator holding an infant close in a calm, sunlit nursery corner — soft natural light, timber and linen",
    heroRatio: "5 / 4",
    attendance: [
      { label: "Full-Day Care", detail: "Monday–Friday, 8:30am–2:30pm" },
      { label: "Half-Day Care", detail: "Monday–Friday, 8:30am–12:15pm" },
    ],
    environment: [
      "Soft low-stimulation rest areas",
      "Sensory exploration materials",
      "Tummy-time & movement space",
      "Individual sleep spaces",
      "Natural light & calm colour palette",
    ],
    experience: [
      "Secure attachment & responsive care",
      "Sensory & motor development",
      "Early language exposure",
      "Consistent feeding & sleep routines",
      "Gentle social interaction",
    ],
    feature: {
      label: "Our commitment",
      title: "Safe Sleep & Feeding",
      body: "Every detail of an infant’s day is watched over, recorded, and shared with you before you collect them.",
      motif: "moon",
      points: [
        "Internationally recognised safe sleep practices",
        "Individual sleep & feeding schedules",
        "Breast milk (ASI) & formula supported",
        "Continuous supervision",
        "Daily family updates",
      ],
      caption:
        "An individual infant sleep space — a single cot, low light, a named linen tag at the foot",
    },
  },

  {
    slug: "toddlers",
    order: 2,
    name: "Toddlers",
    ageLabel: "2–3 Years",
    ageShort: "2–3y",
    ratio: "1 : 5",
    ratioLabel: "Premium staff ratio",
    ratioNote:
      "One educator per five children — personalised support with collaborative learning.",
    tagline: "Curious Explorers",
    cardBlurb: "Curious explorers building independence through play.",
    intro:
      "Toddlers are developing independence, communication and confidence. Our program encourages exploration through hands-on experience, consistent routines, and play-based learning.",
    motif: "blocks",
    bandNote: "The second row — the hand steadies, and the stitches begin to travel.",
    density: 11,
    heroCaption:
      "A toddler stacking natural timber blocks, focused and joyful, floor-level camera",
    heroRatio: "5 / 4",
    attendance: [
      { label: "Full-Day Care", detail: "Monday–Friday, 8:30am–2:30pm" },
      { label: "Half-Day Care", detail: "Monday–Friday, 8:30am–12:15pm" },
    ],
    experience: [
      "Language & communication",
      "Nature exploration",
      "Creative arts",
      "Practical life skills",
      "Physical development",
      "Social & emotional growth",
      "Toilet learning readiness",
      "Early cognitive development",
    ],
    experienceTitle: "An active discovery zone",
    feature: {
      label: "Growing up",
      title: "Supported Independence",
      body: "The everyday milestones of this age are met with patience and consistency, never pressure.",
      motif: "sprout",
      points: [
        "Toilet learning readiness",
        "Independent eating",
        "Emotional regulation",
      ],
      caption:
        "A toddler managing their own snack bowl at a low timber table, an educator seated alongside",
    },
  },

  {
    slug: "preschool",
    order: 3,
    name: "Preschool",
    ageLabel: "3–5 Years",
    ageShort: "3–5y",
    ratio: "1 : 8",
    ratioLabel: "Premium staff ratio",
    ratioNote:
      "One educator per eight children — collaborative, project-based learning in a strong peer community.",
    tagline: "Preparing for School and Beyond",
    cardBlurb: "Project-based learning that prepares for school and beyond.",
    intro:
      "Our Preschool Program helps children develop the confidence, independence, and foundational skills needed for a successful transition into primary school — engaging in project-based learning that encourages curiosity, critical thinking, creativity, and collaboration.",
    motif: "bloom",
    bandNote: "The third row — bigger stitches, bolder motifs, worked with intent.",
    density: 8,
    heroCaption:
      "Preschoolers gathered around a garden bed, examining seedlings together, mid-conversation",
    heroRatio: "5 / 4",
    attendance: [
      { label: "Full-Day Care", detail: "Monday–Friday, 8:30am–2:30pm" },
      { label: "Half-Day Care", detail: "Monday–Friday, 8:30am–12:15pm" },
    ],
    environment: [
      "Literacy corners with rich print materials",
      "STEM materials for hands-on inquiry",
      "Dedicated project-based learning spaces",
      "Collaborative group work areas",
    ],
    experience: [
      "Early literacy & numeracy",
      "Inquiry-based, hands-on STEM",
      "Bilingual language exposure",
      "Critical thinking & collaboration",
    ],
    projects: [
      {
        title: "Where Does Our Food Come From?",
        body: "A garden-to-table investigation, from planting to a shared meal.",
        motif: "sprout",
      },
      {
        title: "Building a Bridge",
        body: "Children design, test, and rebuild structures — an early lesson in persistence.",
        motif: "blocks",
      },
      {
        title: "Our Neighbourhood, Mapped",
        body: "A collaborative mapping project exploring community and belonging.",
        motif: "boat",
      },
    ],
    feature: {
      label: "Social leadership development",
      title: "Learning to lead, together",
      body: "As the oldest children in our community, preschoolers are given real opportunities to lead — mentoring younger children and taking ownership of classroom responsibilities.",
      motif: "sun",
      points: [
        "Peer mentoring with younger children",
        "Leading small-group activities",
        "Classroom responsibilities & routines",
        "Conflict resolution & empathy-building",
      ],
      caption:
        "A preschooler showing a younger child how something works — both absorbed, no adult in frame",
    },
  },

  {
    slug: "kids-club",
    order: 4,
    name: "Kids’ Club",
    ageLabel: "1–6 Years",
    ageShort: "1–6y",
    ratio: "1 : 8",
    ratioLabel: "Staff ratio",
    ratioNote:
      "One educator per eight children across our flexible-care group.",
    tagline: "Flexible Care for Modern Families",
    cardBlurb: "Flexible, play-based care for modern family schedules.",
    intro:
      "Need occasional childcare, flexible scheduling, or additional care beyond your child’s regular program? Kids’ Club offers children opportunities to play, explore, socialise, rest, and participate in age-appropriate activities — Monday to Sunday, 7am–7pm.",
    motif: "sun",
    bandNote: "The open band — worked whenever the family needs it.",
    density: 6,
    heroCaption:
      "Children of mixed ages playing together in a flexible, light-filled playroom, relaxed afternoon light",
    heroRatio: "5 / 4",
    availability: "Monday–Sunday, 7:00am–7:00pm",
    attendance: [
      { label: "Flexible Attendance", detail: "Monday–Sunday, 7:00am–7:00pm" },
    ],
    suitableFor: [
      {
        title: "Occasional Care",
        body: "A day here and there, around a changing schedule.",
        motif: "moon",
      },
      {
        title: "Visiting Families",
        body: "Families visiting or new to Bali, needing short-term care.",
        motif: "boat",
      },
      {
        title: "Short-Term Care",
        body: "Weekend, evening, or holiday coverage.",
        motif: "sun",
      },
    ],
    experience: [
      "Play & free exploration",
      "Creative activities",
      "Rest & quiet time",
      "Age-appropriate group activities",
      "Meals or snacks (by session length)",
      "Supervision by familiar educators",
    ],
    experienceTitle: "Every session, thoughtfully filled",
  },
];

export const programBySlug = (slug) => programs.find((p) => p.slug === slug);
