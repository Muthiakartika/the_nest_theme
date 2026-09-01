---
name: The Nest Daycare
description: A child's embroidered practice cloth, rendered as a website — learning you can see.
colors:
  forest-green: "#23362C"
  warm-cream: "#EBE1D5"
  gold-tan: "#DDCAB6"
  paper-white: "#F7F4F0"
  ink-charcoal: "#2B2B28"
  tan-ink: "#A78F72"
  forest-deep: "#17251D"
  forest-mid: "#354C3F"
  cream-deep: "#E2D5C4"
  tan-deep: "#CBB49B"
  ink-soft: "rgba(43, 43, 40, 0.72)"
  ink-faint: "rgba(43, 43, 40, 0.68)"
  on-dark-soft: "rgba(235, 225, 213, 0.76)"
  thread: "rgba(35, 54, 44, 0.34)"
  thread-strong: "rgba(35, 54, 44, 0.55)"
  thread-dark: "rgba(235, 225, 213, 0.34)"
typography:
  display-xl:
    fontFamily: "Lora, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.9rem, 6.6vw, 5rem)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.03em"
  display-lg:
    fontFamily: "Lora, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.15rem, 4.6vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.024em"
  display-md:
    fontFamily: "Lora, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.65rem, 2.9vw, 2.4rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  pullquote:
    fontFamily: "Lora, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.4rem, 3.1vw, 2.35rem)"
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Poppins, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  lede:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.19em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "3px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "44px"
  section: "clamp(4.5rem, 9vw, 8.25rem)"
  section-tight: "clamp(3.25rem, 6vw, 5.5rem)"
  gutter: "clamp(1.25rem, 5vw, 3.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.xs}"
    padding: "1.06rem 1.65rem 0.98rem"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.warm-cream}"
  button-stitch:
    backgroundColor: "transparent"
    textColor: "{colors.forest-green}"
    rounded: "{rounded.xs}"
    padding: "1.06rem 1.65rem 0.98rem"
  button-stitch-hover:
    backgroundColor: "rgba(221, 202, 182, 0.4)"
    textColor: "{colors.forest-green}"
  button-tan:
    backgroundColor: "{colors.gold-tan}"
    textColor: "{colors.forest-green}"
    rounded: "{rounded.xs}"
    padding: "1.06rem 1.65rem 0.98rem"
  chip:
    backgroundColor: "{colors.gold-tan}"
    textColor: "{colors.forest-green}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "0.4rem 0.72rem 0.34rem"
  input:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-charcoal}"
    rounded: "{rounded.xs}"
    padding: "0.88rem 1rem"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-charcoal}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 2.6vw, 2.15rem)"
  image-placeholder:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "clamp(1.1rem, 2.4vw, 1.75rem)"
---

# The Nest Daycare — design system

## Overview

**Creative North Star: The Practice Cloth.**

A child's embroidered sampler. The alphabet at the top is careful and even; by
the foot of the cloth the stitches have gone loose and confident, and the child
signed and dated it. Learning you can see — which is exactly what a daycare is
selling to a parent who has never left their child anywhere before.

The whole system falls out of that one object. Warm Cream is the linen. Forest
Green is the thread, and it draws every rule, motif and icon on the site at one
weight. Gold Tan is the second thread. Paper White is the label tape sewn on to
name the work. Running stitch replaces the hairline everywhere — under headings,
between bands, around buttons, beneath navigation.

**Mood:** cheerful, warm, made-by-hand, precise, unhurried, trustworthy.
Restraint in colour, generosity in drawing.

**Anti-references, confirmed:** the pastel-blob card grid the early-learning
category ships by default; and its predictable opposite, austere cream editorial
minimalism. Also refused: gradients, glassmorphism, floating card stacks,
rounded-rectangle everything, and the Hero → Cards → Cards → CTA skeleton.

**The problem the system solves:** the approved palette is five restrained
natural tones and cannot be brightened. So cheerfulness is carried by
*drawing, density and rhythm* rather than by hue — the motif alphabet, the
worked bands, the varying section compositions.

## Colors

| Token | Value | Character | Role |
|---|---|---|---|
| `forest-green` | `#23362C` | Deep Forest Green | The thread. Headings, body on light, dark sections, nav, footer, primary buttons, every drawn rule. |
| `warm-cream` | `#EBE1D5` | Warm Linen Cream | The ground. Default page background and the largest warm surfaces. |
| `gold-tan` | `#DDCAB6` | Soft Gold Tan | The second thread. **Fills only** — chips, the hero underscore, the accordion sign, step numerals. Also text and rules on Forest. Never a page background. |
| `paper-white` | `#F7F4F0` | Paper White | Label stock. Cards, form controls, placeholder grounds, alternating sections. |
| `ink-charcoal` | `#2B2B28` | Ink Charcoal | Long-form reading text. |
| `tan-ink` | `#A78F72` | Tan Ink | Gold Tan taken down far enough to draw with. Every drawn mark on a light ground. |
| `forest-deep` | `#17251D` | — | Primary button hover only. |
| `forest-mid` | `#354C3F` | — | Cards and placeholders inside dark sections. |
| `cream-deep` | `#E2D5C4` | — | The fourth ground, for section alternation. |
| `tan-deep` | `#CBB49B` | — | Tan button hover only. |

**The Gold Tan rule.** `#DDCAB6` on `#EBE1D5` is 1.2:1. A line in it is
invisible. So Tan is a *fill* on light grounds and `tan-ink` does the drawing.
On Forest Green, Tan reads 8.2:1 and is used freely, text included.

**Contrast, measured on Warm Cream:** Forest Green 10.1:1 · Ink Charcoal 11.1:1
· `ink-soft` 5.7:1 · `ink-faint` 5.3:1. Forest Green on Gold Tan is 6.5:1, which
is what makes the chip legible. `ink-faint` is the floor for small text — it is
not a lighter grey to reach for.

**Ground rotation.** Never two identical grounds adjacent. The home page runs
cream → forest → cream → paper → cream-deep → cream → forest → cream.

## Typography

Two families, strict roles, nothing else.

**Lora** carries every heading, every editorial statement and every emotional
line. Weights 400/500/600 plus italic. Italic Lora is reserved for pull quotes,
the footer signature, and the program band notes — the site's quiet asides.

**Poppins** carries body copy, navigation, buttons, labels, forms, ages, hours,
ratios and all practical information. Weights 400/500/600.

The relationship is the point: Lora is warm and human, Poppins is clear and
practical. A parent reads the feeling in Lora and checks the facts in Poppins.

- Display sizes are fluid `clamp()` and top out at 5rem. Tracking tightens as
  size grows, floor −0.03em.
- Headings use `text-wrap: balance`.
- Body measure is capped at 70ch, ledes at 60ch.
- Labels are Poppins 600, 0.6875rem, 0.19em tracking, uppercase.
- **No text eyebrow above a heading.** A section opens with a drawn motif and
  the heading carries itself. Information that would have sat in an eyebrow —
  an age, a ratio, a stage — is set *below* the rule as a chip, as data.

Both families are self-hosted at build via `next/font/google`; no runtime
request to a font CDN.

## Layout

- Content wrap `1240px`; reading wrap `760px`. Gutter `clamp(1.25rem, 5vw, 3.5rem)`.
- Section rhythm `clamp(4.5rem, 9vw, 8.25rem)`, tight variant `clamp(3.25rem, 6vw, 5.5rem)`.
- More space above a heading than below it, everywhere.
- The workhorse is a two-column split at `1fr / 1fr`, with `--wide-left`
  (1.25/0.75) and `--wide-right` (0.8/1.2) variants. Asymmetry is the default;
  a 50/50 split is the exception.
- Splits collapse to one column at 900px. `split__media-first` reorders the
  image above the text on mobile where the image is the lead.
- Grids collapse 4→2 at 980px and 2→1 at 620px.
- Sections are flat: Section → wrap → one or two containers. Nothing nests more
  than two levels deep, so an Elementor rebuild maps one-to-one.

## Elevation & Depth

**Flat by intent.** A sampler has no drop shadows; it has stitching, and layers
of cloth basted on top of one another.

Depth comes from three places only:

1. **Ground changes** between sections.
2. **The stitched frame** — four running-stitch edges drawn with
   `repeating-linear-gradient`, which reads as an edge without a border.
3. **Two deliberate shadows.** The hero inset patch
   (`0 18px 40px -28px rgba(23,37,29,0.6)`) and the primary button on hover
   (`0 4px 14px -6px rgba(23,37,29,0.55)`). Both carry a real offset and a soft
   blur. Nothing else on the site has a shadow.

The sticky header gains `0 6px 22px -18px` once scrolled, and nothing more.

## Shapes

Rectilinear and precise. Radii are `2px` on chips, buttons, inputs and the
accordion sign; `0` on cards, placeholders and sections. Nothing is a pill,
nothing is a soft-cornered floating card.

**The stitch geometry** is one setting used site-wide: `9px` dash, `7px` gap,
`1.5px` weight. Change it in `:root` and every rule, frame, divider and
underline on the site changes together.

**The drawn alphabet** (`components/Motif.js`) is 20 marks on a 24 viewBox —
leaf, sprout, sun, bowl, book, blocks, bloom, hand, water, house, boat, moon,
eyelet, nest, plus utility marks. Round caps, round joins, no fills. The
component scales stroke *down* as size goes up so the rendered line holds at
~1.55px at every size. This is the single most identity-carrying decision in
the system: one thread, one weight, whether the mark is a 13px bullet or a
104px watermark.

## Components

**Buttons — three voices.** `primary` solid Forest (one per view, on the action
we want); `stitch`, the sampler's own outline button worked in running stitch;
`tan`, reserved for Forest grounds where Tan reads 8.2:1. All use
`background-color`, never the `background` shorthand — the shorthand resets the
`background-image` that draws the stitched frame. Same rule for cards.

**ImagePlaceholder — the basted patch.** The Nest has no photography yet, so
placeholders borrow the sampler's own notation: a chart is what the work looks
like *before* it is stitched. Gridded ground at 15px, registration crosses at
three corners, the motif that belongs in the square, and the photographer's
brief set on a solid Paper White label along the foot. The label carries its own
ground so the grid never runs through the type. Every caption is a real
production instruction; the set is the shot list.

**ProgramBand — the signature component.** The four programs are one journey,
so they are four stacked bands, not four cards in a grid. Each band's motif row
is worked at its own density and size — Infants 14 marks at 15px, tight and
even; Kids' Club 6 marks at 24px, open and rotated. The row always spans the
full width; what changes is how densely it is filled. The age leads at display
scale, because "my child is two" is the first question a parent is actually
asking.

**Lists over card grids.** Where a card grid was the obvious move — trust
points, the five Reggio principles, safety layers — the system uses a worked
list: a large drawn mark, a Lora title, body copy, and a running-stitch rule
between rows. Cards are reserved for genuinely card-shaped content (project
examples, suitability).

**Forms.** Labels are Poppins caps above the control. Errors name the problem
*and* the recovery in the site's voice, are wired with `aria-describedby`, and
are carried by a 2px ring plus text — never colour alone. `align-content: start`
on the field so a neighbour's hint can't stretch an unrelated control.

**Pending slots.** Where the client still owes content — testimonials, legal
copy — the slot ships visibly marked with an alert chip and italic faint text.
Never filled with invented content.

## Do's and Don'ts

**Do**

- Draw with `tan-ink` on light grounds and `gold-tan` on Forest.
- Open a section with a motif and let the heading carry itself.
- Vary section composition: split, worked list, band, full-bleed patch, quote.
- Add new marks to `Motif.js` at the same stroke weight.
- Use `background-color` on anything that also carries `.stitched`.
- Keep `--ink-faint` as the floor for small text.
- Alternate grounds; never repeat one across a boundary.

**Don't**

- Don't put a text eyebrow above a heading.
- Don't use Gold Tan as a stroke on Cream, or as a page background.
- Don't reach for emoji or an icon library — the alphabet is drawn.
- Don't repeat the nest motif. It appears at the philosophy block, the CTA, the
  contact close and the 404; the brand guideline asks for the nest as a way of
  thinking, not a graphic to repeat.
- Don't add shadows, gradients, glass, or a second radius scale.
- Don't build a same-size card grid as a page's structure.
- Don't scatter scroll animations. There is one authored motion — the stitch
  drawing itself in — and it is gated behind `.js` so nothing is ever hidden
  when scripts fail.
