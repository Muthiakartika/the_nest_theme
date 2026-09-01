/**
 * Parent knowledge base.
 *
 * Answers are either quoted from the client’s own copy or assembled strictly
 * from facts confirmed elsewhere on this site (ratios, hours, safety
 * protocols, nutrition, the enrollment journey).
 *
 * Where the client has not supplied a policy — exclusion periods after
 * illness, waitlist rules, the what-to-bring list — the entry is flagged
 * `pending`. Those render as an honest "confirmed at your tour" note rather
 * than an invented policy. Do not fill them in without the client.
 */

export const faqCategories = [
  "Health & Sickness",
  "Dietary & Nutrition",
  "Daily Operations",
  "Enrollment & Settling-In",
];

export const faqs = [
  /* ---------------------------------------------------------- Health */
  {
    category: "Health & Sickness",
    q: "What happens if my child becomes unwell?",
    a: "Our educators provide comfort and supervision while contacting parents. Families may be asked to collect their child to support their recovery, and to protect the other children in the group.",
  },
  {
    category: "Health & Sickness",
    q: "When can my child return after being sick?",
    a: "Return times depend on the illness, and we follow a written exclusion policy so that every family is treated consistently.",
    pending: "Exclusion periods to be confirmed by the centre.",
  },
  {
    category: "Health & Sickness",
    q: "Are your educators trained in first aid?",
    a: "Yes. All lead educators hold current pediatric first-aid certification, and emergency response, fire evacuation and first-aid readiness are reinforced through ongoing training every term.",
  },
  {
    category: "Health & Sickness",
    q: "How do you manage allergies and medical needs?",
    a: "Every child has an individual allergy and dietary plan, held by their educators and reflected in every meal we serve. Meal planning is allergy-aware as standard rather than on request.",
  },
  {
    category: "Health & Sickness",
    q: "What are your hygiene standards day to day?",
    a: "Strict sanitation protocols, daily cleaning routines, and ongoing staff health monitoring. Every educator wears The Nest’s signature denim bib apron — a durable, easily sanitised layer worn over their clothes for sensory play, creative activities and meal service, changed and laundered regularly.",
  },

  /* -------------------------------------------------------- Dietary */
  {
    category: "Dietary & Nutrition",
    q: "What do children eat at The Nest?",
    a: "Freshly prepared meals, whole foods where possible, and balanced nutrition — planned with allergies in mind. Cleanliness and nourishment are foundational here rather than an add-on.",
  },
  {
    category: "Dietary & Nutrition",
    q: "Can families provide breast milk (ASI) or formula?",
    a: "Yes. Both breast milk (ASI) and formula are supported in our Infant Program, following your child’s individual feeding schedule. You will receive daily updates on feeding and sleep.",
  },
  {
    category: "Dietary & Nutrition",
    q: "Are meals included in a Kids’ Club session?",
    a: "Meals or snacks are included depending on the length of the session booked. Our admissions team will confirm what is included when you book.",
  },
  {
    category: "Dietary & Nutrition",
    q: "Can you accommodate a specific diet?",
    a: "Yes. Every child has an individual dietary plan. Tell us about your child’s needs at enrollment and we will build them into daily meal planning.",
  },

  /* ----------------------------------------------------- Operations */
  {
    category: "Daily Operations",
    q: "What are your hours?",
    a: "Infants, Toddlers and Preschool run Monday to Friday: full-day 8:30am–2:30pm, half-day 8:30am–12:15pm. Kids’ Club runs Monday to Sunday, 7:00am–7:00pm for flexible and occasional care.",
  },
  {
    category: "Daily Operations",
    q: "What are your educator-to-child ratios?",
    a: "1:3 in Infants, 1:5 in Toddlers, and 1:8 in Preschool and Kids’ Club. Our ratios are lowest where children need us most — small groups are how every child is genuinely known.",
  },
  {
    category: "Daily Operations",
    q: "Who is allowed to collect my child?",
    a: "Only parents, guardians and staff you have authorised. Entry is access-controlled, and every arrival and departure is recorded for accountability.",
  },
  {
    category: "Daily Operations",
    q: "How will I know what my child did today?",
    a: "Through daily updates and open conversation with your child’s educators, alongside regular developmental observations. Infant families receive daily updates on feeding, sleep and care.",
  },
  {
    category: "Daily Operations",
    q: "What does my child need to bring?",
    a: "We will give you a short list at orientation so nothing is a surprise on the first morning.",
    pending: "Items list to be confirmed by the centre.",
  },

  /* ----------------------------------------------------- Enrollment */
  {
    category: "Enrollment & Settling-In",
    q: "How do we enroll?",
    a: "Four steps: book a tour and meet our educators, complete the enrollment form with your family and child information, attend orientation to meet your child’s educators, then begin. You can start the first two steps from this website.",
  },
  {
    category: "Enrollment & Settling-In",
    q: "Is there a waitlist?",
    a: "Availability varies by program and by month, so the honest answer depends on when you would like to start.",
    pending: "Current availability confirmed by the admissions desk.",
  },
  {
    category: "Enrollment & Settling-In",
    q: "How do educators support separation anxiety?",
    a: "Slowly, and with the same familiar faces. Settling in begins at orientation, before the first full day, so your child already knows their educators. We work in small groups, support emotional wellbeing through patience, and keep clear, consistent, respectful routines — because predictability is what makes a new place feel safe.",
  },
  {
    category: "Enrollment & Settling-In",
    q: "How do I know which program my child belongs in?",
    a: "By age: Infants 1–2 years, Toddlers 2–3 years, Preschool 3–5 years. Kids’ Club takes children from 1–6 years for flexible and occasional care. If your child sits near a boundary, we will talk it through on your tour.",
  },
  {
    category: "Enrollment & Settling-In",
    q: "Can we visit before deciding?",
    a: "Please do — we would rather you saw it. Book a tour and we will show you the rooms, the garden, and the educators your child would be with.",
  },
];
