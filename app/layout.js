import { Lora, Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../data/site";
import "./globals.css";
import "./components.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "A warm, nature-led daycare in Umalas, Bali for children aged 1–6. Reggio Emilia-inspired learning, ratios from 1:3, and a secure campus. Book a tour.",
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "A warm, nature-led daycare in Umalas, Bali for children aged 1–6. Reggio Emilia-inspired learning, ratios from 1:3, and a secure campus.",
    url: site.url,
    siteName: site.name,
    locale: "en_ID",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#EBE1D5",
};

const CONTRACT = `<!--
THE NEST DAYCARE — direction contract

THESIS: A sampler is learning you can see — careful at the top, loose and
confident by the foot, signed by the child who made it. That is the daycare
promise. Refuses the category’s pastel-blob card grid and its predictable
opposite, austere cream minimalism.

OWN-WORLD: Warm Cream #EBE1D5 linen ground. Forest Green #23362C is THREAD —
it draws every rule, motif and icon at one stroke weight. Gold Tan #DDCAB6 is
the second thread, used as fills only (it cannot carry a stroke on cream).
Paper White #F7F4F0 is mounted label stock. Running-stitch rules replace every
hairline. A drawn motif alphabet carries the cheerfulness. Photography
placeholders are unstitched pattern charts.

STORY: A parent under protective scrutiny learns what this place is, meets the
ratios and safeguarding early, walks four stages as one continuous journey,
and books a tour.

FIRST VIEWPORT: A tight, even motif band across the top. Lora display left —
"A second home for the first six years." — Gold Tan fill under the closing
phrase. Hero patch offset right. Book a Tour (forest solid) beside Explore
Programs (stitched). Ratios anchor the foot of the fold.

FORM: The Practice Cloth. Candidate 6 of 7 on the grounded list. Seed key
f3eca5c2.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning because the inline script below adds a `js`
    // class to this element before React hydrates. The mismatch is intended
    // and one level deep, which is exactly what this flag is for.
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Marks the document as script-capable before first paint, so the
            scroll-reveal enhancement can hide what it is about to stitch in.
            Without it every element simply stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <div
          hidden
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: CONTRACT }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
