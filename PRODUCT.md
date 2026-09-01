# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + React, as specified by the client brief. Plain CSS with design tokens — no
utility framework — because the finished design must be realistic to rebuild in WordPress + Elementor
later, and Elementor authors work in plain CSS and containers.

## Users

**Primary:** Parents (mostly ages ~28–45) living in or relocating to the Umalas / Canggu area of Bali
— a mix of Indonesian families, long-term expatriates, and internationally mobile families. They are
evaluating where to leave a child aged 1–6 for the first time, often while managing work. Their job on
this site is to decide whether The Nest is safe, warm, and credible enough to visit in person, then
book a tour.

**Secondary:** Visiting or newly arrived families needing short-term or occasional care (Kids' Club).

**Tertiary:** Prospective educators reading the People & Care page before applying.

The dominant emotional state is protective scrutiny mixed with hope. Parents are scanning for red
flags (ratios, screening, hygiene, security) as much as they are scanning for warmth.

## Product Purpose

The Nest Daycare is an early learning centre in Umalas, Bali, serving children aged 1–6 across four
programs. The website exists to convert a searching parent into a booked campus tour, and to answer
enough operational questions along the way that the tour is a formality rather than an interrogation.

Success = tour bookings and enrollment enquiries. Secondary success = handbook / info-pack downloads
and WhatsApp conversations opened with the admissions desk.

## Positioning

"A second home for the first six years."

The differentiated mechanism is a **specific pairing of two named pedagogies**: the Balinese belief
that a child grows best in harmony — with family, community, and nature — held together with a Reggio
Emilia-inspired framework in which the environment is the child's "third teacher."

Proof a neighbouring centre could not truthfully copy-paste:

- Published educator-to-child ratios that get *better* the younger the child: 1:3 infants, 1:5
  toddlers, 1:8 preschool.
- The signature denim bib apron — a visible, physical hygiene standard worn by every educator daily.
- The stated standard that *every* person on campus (administrators, teaching assistants, cleaners,
  gardeners, drivers, security) is held to the same warmth-and-care standard, not just teaching staff.
- Named philosophy: **Nurture · Embrace · Inspire**, with three pillars — Care, Development,
  Experience ("Preparing wings to fly").

## Operating Context

Campus: Umalas, Bali, Indonesia. Contact: hello@thenestdaycare.com. WhatsApp is a primary, expected
admissions channel in this market — not a fallback.

Programs and hours (confirmed):

| Program | Ages | Ratio | Hours |
|---|---|---|---|
| Infants | 1–2 years | 1:3 | Full-day Mon–Fri 8:30am–2:30pm · Half-day Mon–Fri 8:30am–12:15pm |
| Toddlers | 2–3 years | 1:5 | Full-day Mon–Fri 8:30am–2:30pm · Half-day Mon–Fri 8:30am–12:15pm |
| Preschool | 3–5 years | 1:8 | Full-day Mon–Fri 8:30am–2:30pm · Half-day Mon–Fri 8:30am–12:15pm |
| Kids' Club | 1–6 years | 1:8 | Flexible, Mon–Sun 7:00am–7:00pm |

Site-wide age range is **1–6 years** (confirmed by the client this session; supersedes a conflicting
"6mo–6y" line in an earlier mockup).

Enrollment journey (4 steps): Book a Tour → Complete Enrollment Form → Attend Orientation → Begin Your
Journey.

## Capabilities and Constraints

Confirmed functionality to build:

- Tuition estimator — 3 steps (select program → select attendance → view estimate), calculating live.
- Digital enrollment form — multi-step, client-side validated, with a review screen before submit.
- Book-a-tour form, plus a captioned slot for a third-party scheduler embed and a Google Maps embed.
- FAQ accordion, grouped into four categories: Health & Sickness · Dietary & Nutrition · Daily
  Operations · Enrollment & Settling-In.
- Downloads: Centre Handbook / Info Pack, Safety Policy PDF.

Constraints:

- Every layout must be realistically rebuildable in WordPress + Elementor: modular sections,
  understandable container nesting, no heavy-JS or experimental interaction.
- Photography does not exist yet. All imagery ships as **descriptive, captioned placeholders**. No
  AI-generated photography, no stock substitutes, no dummy images.
- No lorem ipsum. Copy comes from the client content set.

Explicitly undecided / client-supplied later:

- **Fee figures — none supplied.** The estimator ships with clearly-marked placeholder rates isolated
  in one config file for swapping.
- **Parent testimonials — none supplied.** Ship as visibly-marked pending slots; do not invent.
- **Privacy Policy and Terms of Use legal copy** — to be supplied by client or counsel.
- Scheduler vendor for tour booking not chosen.
- No street address beyond "Umalas, Bali"; no phone number supplied.

## Brand Commitments

Binding, from the client Brand Guideline:

- **Name:** The Nest Daycare · thenestdaycare.com
- **Typography:** Lora for headlines, editorial statements, emotional messaging. Poppins for body,
  navigation, buttons, labels, forms, and all practical/UI information. No additional families.
- **Palette (five approved swatches only):**
  - Forest Green `#23362C` — primary dark: type, dark sections, nav, footer, primary buttons
  - Warm Cream `#EBE1D5` — primary light: main and warm section backgrounds
  - Soft Gold Tan `#DDCAB6` — accent only: tags, dividers, decorative details, small UI accents; never
    a full-page background
  - Paper White `#F7F4F0` — supporting neutral: clean backgrounds, cards, content areas
  - Ink Charcoal `#2B2B28` — long-form body text
  - Tonal variations of these five permitted only for hover states, depth, and accessibility. No
    unrelated colours.
- **Brand philosophy:** Nurture · Embrace · Inspire. Bird-and-nest metaphor — nurture, safety, growth,
  discovery, nature, community — as *inspiration for the visual language*, explicitly not as literal
  bird/nest graphics repeated across the site.
- **Voice:** warm, plain, specific, parent-to-parent. Never salesy, never institutional.
- **Required tone:** cheerful, playful, modern, warm, nurturing, creative, trustworthy — and
  specifically NOT dark or overly beige despite the natural palette.

## Evidence on Hand

- Full page-by-page website copy for 11 page types, recovered from the client mockup set
  (`TheNestWebsiteMockup-3design.pdf`, 55pp, prepared 29 Aug 2026). Treated as source of truth for
  headings, program detail, philosophy, safety, hygiene, FAQ questions, and CTAs.
- Confirmed ratios, hours, ages, program names, pillar names, and the five Reggio principles.
- Real FAQ questions (5 confirmed) with one confirmed answer ("What happens if my child becomes
  unwell?"). Remaining answers must be written in the client's established voice or marked pending.

**Absences future work must not fabricate:** fee figures, testimonials, staff names and bios, photos,
licence/accreditation numbers, phone number, street address, legal copy.

## Product Principles

1. **Answer the protective question before the emotional one.** Ratios, screening, and security are
   not fine print for this audience — they are the reason a parent keeps reading. Surface them early
   and plainly, in the site's own voice, not buried on a compliance page.
2. **Show the practice, not the promise.** Every claim should be attached to a concrete, checkable
   detail (1:3, the denim apron, recorded arrivals, individual sleep spaces) rather than an adjective.
3. **One continuous journey, four stages.** The four programs are one path a family walks, not four
   products in a catalogue. Structure and language should carry that continuity.
4. **The tour is the conversion.** Every page ends within reach of booking a visit; the site's job is
   to make an in-person visit feel obvious and low-friction, not to close an enrollment online.
5. **Warmth is a craft standard, not a colour.** Cheerfulness must come from composition, scale,
   rhythm, and drawn detail — because the palette itself is restrained and cannot be brightened.

## Accessibility & Inclusion

- Parents will read this one-handed on a phone, often while holding a child. Mobile is the primary
  reading device, not an adaptation.
- Bilingual audience (Indonesian and English speakers) — copy stays plain and jargon-light; Indonesian
  terms already in the content (ASI for breast milk) are kept.
- Body and placeholder text ≥4.5:1 contrast, large text ≥3:1. The Soft Gold Tan accent must never
  carry body text on cream.
- Full keyboard operability for the estimator, enrollment form, FAQ accordion, and mobile navigation.
