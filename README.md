# The Nest Daycare — website

Next.js front-end for **thenestdaycare.com**. Umalas, Bali. Ages 1–6.

```bash
npm install
npm run dev      # http://localhost:3210 — the one you want day to day
npm run preview  # production build + serve on http://localhost:3212
npm run shots    # 30 full-page screenshots  → screens/
npm run pdf      # one PDF per page          → pdf/
```

`dev` and `preview` write to **separate output directories** (`.next` and
`.next-prod`, via `NEXT_DIST` in `next.config.mjs`), so you can run both at the
same time. That separation exists for a reason: `next dev` and `next build`
write incompatible manifests, and when they shared `.next` the dev server
started returning `500 — Cannot find module`. If you ever see that, the cause
is two Next processes sharing one output directory: stop everything,
`rm -rf .next .next-prod`, and start again.

`npm run shots` and `npm run pdf` both expect `npm run preview` to be running.

---

## The design direction

**The Practice Cloth.** A child's embroidered sampler — the alphabet careful and
even at the top, looser and more confident by the foot, signed by the child who
made it. Learning you can see. That is the daycare promise, so the site is built
as one.

The whole visual language falls out of that:

| Sampler | On the site |
|---|---|
| Linen ground | Warm Cream `#EBE1D5` |
| The thread | Forest Green `#23362C` — draws every rule, motif and icon |
| The second thread | Gold Tan `#DDCAB6` — **fills only** |
| Sewn-on label tape | Paper White `#F7F4F0` |
| Running stitch | Every rule and border on the site |
| Worked motif bands | The drawn alphabet in `components/Motif.js` |
| Bands of increasing difficulty | The four programs, worked at falling density |
| An unstitched pattern chart | Every image placeholder |
| The signature at the foot | The footer |

**Why Gold Tan is never a line.** `#DDCAB6` on `#EBE1D5` is 1.2:1 — a stroke in
it is invisible. So Tan is used as a *fill* (chips, the hero underscore, the
accordion sign, step numerals) and a darker step of the same hue, `--tan-ink`
`#A78F72`, does the drawing on light grounds. On Forest Green, Tan reads 8.2:1
and is used freely, including for text.

**Type.** Lora carries every heading and every emotional line. Poppins carries
body, navigation, buttons, labels, forms and all practical information. Nothing
else. Loaded via `next/font/google` — self-hosted at build, no external request.

**Motion.** One authored moment: a section's running-stitch rule draws itself
across and its motifs land in sequence, like a row being worked. Nothing else
moves on scroll. It is gated behind a `.js` class set before first paint, so
with no JavaScript every element simply renders visible and in place.

---

## Structure

```
app/
  layout.js                          root shell, fonts, direction contract
  globals.css                        tokens + the stitch language
  components.css                     component styles
  page.js                            Home
  about/                             Our Story
    people-and-care/                 Our People & Care
    health-hygiene-nutrition/        Health, Hygiene & Nutrition
  our-approach/                      Nurture · Embrace · Inspire
  programs/                          index
    [slug]/                          ONE template, four instances
  child-safety/  admissions/  faqs/  contact/
  privacy-policy/  terms-of-use/     one shared legal template
  not-found.js                       404

components/
  Motif.js          the drawn alphabet — every mark on the site
  Stitch.js         StitchRule · MotifBand · SectionHeading · TickList
  ImagePlaceholder.js  the basted patch / pattern chart
  Button.js         primary · stitch · tan, plus TextLink
  Header.js  Footer.js  Page.js  ProgramCard.js  LegalPage.js
  FAQ.js  Form.js  TuitionEstimator.js  EnrollmentForm.js  TourForm.js

data/
  site.js       nav, contact, pillars, principles, safety, trust points
  programs.js   the four programs — drives the whole [slug] template
  faqs.js       19 questions in 4 categories
  rates.js      ⚠ PLACEHOLDER FEES — see below

scripts/
  shoot.mjs     full-page screenshots of every route, desktop + mobile
  crop.mjs      slices a tall capture into readable sections
```

Add or reorder a program by editing `data/programs.js` alone — the index bands,
the detail page, the cross-links and the estimator all read from it.

---

## ⚠ What the client still owes

Nothing below was invented. Each ships as a visibly marked slot.

| # | Item | Where | What happens now |
|---|---|---|---|
| 1 | **Fee figures** | `data/rates.js` | Estimator runs on placeholder rates and says so in the panel. Replace the amounts, then set `RATES_CONFIRMED = true` to remove the "indicative only" notice. **Do not remove that notice by hand.** |
| 2 | **All photography** | every `<ImagePlaceholder>` | Each one carries its own shot brief as the caption — the set is the photographer's brief. Swap the component for `next/image`. |
| 3 | **Parent testimonials** | `app/page.js`, families section | Three marked "Testimonial pending" slots. |
| 4 | **Privacy Policy + Terms copy** | `app/privacy-policy`, `app/terms-of-use` | Sections are structured with a note on what belongs in each. Legal text is not ours to draft. |
| 5 | **3 FAQ answers** | `data/faqs.js`, entries with `pending:` | Illness exclusion periods, waitlist availability, the what-to-bring list. |
| 6 | **WhatsApp number, phone, street address** | `data/site.js` | `whatsapp` and `instagram` are `TODO(client)` stubs. |
| 7 | **Handbook + Safety Policy PDFs** | `/admissions`, `/child-safety`, `/about` | Buttons render; `href="#"`. |
| 8 | **Booking scheduler + Google Map** | `app/contact/page.js` | Two captioned embed slots, sized and framed. |
| 9 | **Form endpoints** | `EnrollmentForm.js`, `TourForm.js` | Both validate fully client-side and show a real success state. `handleSubmit` / `onSubmit` need a POST to the centre's endpoint or CRM. |

Everything else on the site is the client's own copy.

---

## Rebuilding in WordPress + Elementor

The design was constrained to stay portable. Nothing here needs a custom plugin.

- **Every section is a flat Elementor Section → Container → Container.** No
  section nests more than two levels. No section depends on a sibling.
- **Running-stitch rules** are one Divider widget plus a custom-CSS snippet —
  `repeating-linear-gradient(90deg, <colour> 0 9px, transparent 9px 16px)` at
  1.5px. The `.stitched` frame is the same idea on four edges; copy the rule
  from `globals.css`. Use `background-color`, never the `background`
  shorthand, or you will wipe the frame out.
- **Motifs** are inline SVG in `components/Motif.js` — paste straight into an
  Elementor HTML widget, or upload them as an SVG icon set. Keep one stroke
  weight; the component scales stroke down as size goes up so the rendered
  line stays ~1.55px.
- **Program bands** are a loop over `data/programs.js`; in Elementor use a
  Loop Grid over a `program` CPT with the same fields (age, ratio, blurb,
  band note, motif, density).
- **The estimator, multi-step enrollment and tour form** are the only real
  JavaScript. Rebuild them with a form plugin with conditional logic, or keep
  this Next.js front-end and use WordPress as a headless source.
- **Motion** is one CSS transition on a class toggle. Elementor's built-in
  entrance animations are a fine substitute — set them to fade-up, and use
  them once per section, not on every element.
- **Do not** introduce Elementor's default rounded cards, box shadows or
  gradient headings. The whole design depends on flat, precise, stitched edges.

---

## Design-system rules worth keeping

1. **No text eyebrow above a heading.** A section opens with a worked motif and
   the heading carries itself. Where a label held real information (an age, a
   ratio) it is set *below* the rule as a chip, as data.
2. **Never two identical grounds adjacent.** The order runs
   cream → forest → cream → paper → cream-deep → cream → forest → cream.
3. **Cards are not the page structure.** Where a card grid was the obvious
   move — trust points, the five principles — it is a worked list with drawn
   marks and stitched rules instead.
4. **`--ink-faint` is the floor for small text**, not a lighter grey. It sits
   at 5.3:1 on cream deliberately.
5. **One drawn alphabet.** No emoji, no icon library. Add new marks to
   `components/Motif.js` at the same stroke weight or not at all.
6. **The nest motif is used sparingly** — the philosophy block, the CTA, and
   the 404. The brand guideline asks for the bird-and-nest idea as a way of
   thinking, not as a graphic to repeat.

---

## Review tooling

```bash
node scripts/shoot.mjs http://localhost:3212       # 30 full-page captures → screens/
node scripts/crop.mjs screens/home-mobile.png 1300 # slice a tall one
node scripts/pdf.mjs http://localhost:3212         # one PDF per page → pdf/
node scripts/pdf.mjs http://localhost:3212 both    # desktop + mobile PDFs
```

`pdf.mjs` exports each route as its own PDF, numbered in reading order, each a
single continuous page sized to the full content height so no section is cut in
half by a paper break. Backgrounds are printed and `screen` media is emulated —
the design is almost entirely background colour, and print media would drop it.

`shoot.mjs` drives the installed Chrome through `puppeteer-core` (dev
dependency only). It walks each page slowly so the scroll-reveal observers all
fire before capture — jumping the scroll leaves sections un-revealed, because
IntersectionObserver coalesces its callbacks.
