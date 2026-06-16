# HR Labs — Homepage Redesign Brief
**For Claude Code | Full Figma-to-Web Rebuild**

---

## 1. Project Overview

**Client:** HR Labs (`hrlabs.in`)
**Tagline:** People, Process & Performance
**What they do:** Human-centered HR consulting for startups, SMEs, and brands — specializing in people management, process systems, and performance transformation.
**Mission:** Help 1,00,000 startups build effective organizations.
**Credentials:** 18+ years experience | 50+ companies | 90+ projects | 4.8/5 rating | 6+ states | Featured in Outlook, ZEE Business, The Week, BrandZ Magazine

**Goal of this redesign:** Transform HR Labs from a generic-looking WordPress-style site into a sharp, credible, premium consulting firm that commands trust at first scroll.

---

## 2. Current Site — What's Broken (UX Audit)

### Visual Identity Problems
- No consistent type scale — every section uses a different font size arbitrarily
- Yellow stats section feels like a discount banner, not a premium brand
- Stock photos of generic businesspeople erode trust
- Logo placement is too small and visually weak in the navbar

### Layout Problems
- Hero is half-empty — text left, photo right with no real composition
- The blue "Department Suite" section slaps in below the hero with zero transition
- "Featured in" logos float in a white void — no container, no visual anchoring
- NGO Partner section is disconnected from the page's narrative flow
- No section hierarchy — every block fights for equal attention

### UX Problems
- No clear primary CTA journey — the only CTA is "Contact Us" in the top right
- No visual proof of *what* the consulting looks like (services, process, outcomes)
- Sections have no labels/eyebrows to orient the user as they scroll
- Mobile responsiveness untested — layout likely breaks
- Footer is barren — misses opportunity to build trust through links and social proof

### Copy Problems
- "HR Labs Where human-centered HR consulting meets transformative solutions" — no punctuation, no rhythm
- "Our Department Suite" — this means nothing to a first-time visitor
- Stats section says "Crafted in India | Designed for Global Excellence" — then shows local India stats. Contradictory messaging.

---

## 3. Design Direction

### Aesthetic
**Direction: "Corporate Confidence" — Clean, authoritative, premium.**

Not sterile. Not cold. Think McKinsey meets Notion — structured, spacious, highly readable, with one bold personality accent that signals Indian excellence without clichés.

**Avoid:**
- The yellow-heavy scheme (feels cheap/sale-like)
- Generic blue-gradient corporate look
- Stock photography of random businesspeople

**Aim for:**
- Deep navy/charcoal as the primary authority color
- Warm white (not pure white) as the page base
- A single vibrant accent — use HR Labs' existing blue (#1A73E8-adjacent) but elevated
- Data-driven section layouts (big numbers presented with precision)
- Subtle, purposeful motion (section reveals, number counters)

---

## 4. Token System

### Color Palette
```
--color-base:        #F8F7F5    /* warm off-white page background */
--color-navy:        #0F1F3D    /* primary dark — headings, navbar, hero */
--color-blue-mid:    #1B4FD8    /* brand blue — CTAs, links, accent text */
--color-blue-light:  #EEF2FF    /* soft tint for stat cards, section bgs */
--color-slate:       #4B5563    /* body text, secondary content */
--color-border:      #E5E7EB    /* subtle dividers */
--color-gold:        #C9A84C    /* premium accent — awards, ratings, featured-in */
--color-white:       #FFFFFF    /* card surfaces */
```

### Typography
```
Display font:    'Playfair Display' (Google Fonts) — used for hero headline ONLY
                 Conveys authority, age, expertise — signals "established firm"

Body font:       'Inter' (Google Fonts) — all body text, nav, stats, footer
                 Clean, modern, highly readable at all sizes

Caption/Label:   'Inter' 500, uppercase, letter-spacing: 0.08em
                 Used for eyebrows, section labels, stat labels
```

### Type Scale
```
--text-hero:     72px / 80px line-height (Playfair, bold, navy)
--text-h2:       42px / 50px (Inter, 700, navy)
--text-h3:       28px / 36px (Inter, 600, navy)
--text-h4:       20px / 28px (Inter, 600, slate)
--text-body:     17px / 27px (Inter, 400, slate)
--text-small:    14px / 20px (Inter, 400, slate)
--text-label:    12px / 16px (Inter, 500, uppercase, letter-spacing 0.08em)
```

### Spacing System (8px base)
```
--space-xs:   8px
--space-sm:   16px
--space-md:   24px
--space-lg:   48px
--space-xl:   80px
--space-2xl:  120px
```

### Border Radius
```
--radius-sm:  6px
--radius-md:  12px
--radius-lg:  20px
--radius-pill: 999px
```

### Shadows
```
--shadow-card:   0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.05)
--shadow-hover:  0 4px 12px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.08)
```

---

## 5. Component Architecture

### Navbar
- Sticky, transparent-on-load → white with subtle shadow on scroll
- Left: HR Labs logo (SVG, sized 140px wide minimum)
- Center: Nav links — Consulting | What We Do | Careers | Partners | DigiCloud
- Right: "Book a Consultation" button — filled blue, pill shape
- Links: Inter 500, 15px, #0F1F3D, hover underline-slide animation
- Mobile: hamburger → full-screen overlay menu

### Hero Section
**Layout: Full viewport, 2-column split**
- Left (55% width):
  - Eyebrow label: `INDIA'S TRUSTED HR CONSULTING FIRM` — small uppercase, gold color, letter-spacing
  - H1 (Playfair Display): "Building Organizations That Actually Work"
  - Subheading (Inter): "18+ years of turning struggling startups into high-performance businesses. We fix your people, your processes, and your performance."
  - Two CTAs: Primary = "Start the Conversation →" (blue filled) | Secondary = "See Our Work" (navy outline)
  - Trust strip below CTAs: 3 inline stats — `50+ Companies` | `4.8/5 Rated` | `90+ Projects`
- Right (45% width):
  - Bold geometric composition — abstract shapes in navy + blue gradient, layered with a professional team photo (or illustration if no photo available)
  - DO NOT use a plain stock photo dropped on white background
  - The image area should have a clipped/masked shape — e.g., a rounded rectangle with a subtle floating card overlay showing "4.8/5 Rating | Google Reviews"

**Background:** --color-base (#F8F7F5), no full-bleed color

### Social Proof Bar ("As Seen In")
- Thin strip section, 80px tall
- Label: `AS FEATURED IN` — small uppercase, slate color, centered left
- Right: Logo row — Outlook, ZEE Business, The Week, BrandZ Magazine
- Logos: grayscale filter by default, color on hover
- Thin top and bottom border: 1px solid --color-border
- Background: white

### "What We Do" / Services Section
**Section eyebrow:** `OUR SERVICES`
**Section headline:** "HR Solutions Built for Indian Business Reality"
**Layout:** 3-column card grid

Cards (3 cards, each with):
- Icon (line-style SVG, 32px, blue accent color)
- Service Title (Inter 600, 20px, navy)
- Short description (Inter 400, 15px, slate)
- Subtle border, white bg, hover: shadow lifts + blue left-border accent

**Services to include:**
1. **People Management** — Talent acquisition, retention frameworks, org design
2. **Process Architecture** — SOPs, workflow design, compliance systems
3. **Performance Systems** — OKRs, KPI setup, appraisal redesign

### Stats / Impact Section
**Background:** --color-navy (#0F1F3D) — the ONLY dark section on the page
**Layout:** 4 stats in a row, with a supporting headline above

Section headline (Playfair, white, large):
"18 Years. 50 Companies. One Mission."

Stats (4 columns):
- `50+` Companies Served
- `90+` Projects Completed
- `6+` States Across India
- `4.8/5` Average Rating

**Design details:**
- Numbers: Playfair Display, 64px, white
- Labels: Inter 400, 14px, #94A3B8 (muted)
- Thin gold dividers between each stat
- Subtle grain texture on the navy background
- Counter animation on scroll-into-view

**Bottom CTA inside this section:**
"Crafted in India. Designed for Excellence." — italic, centered, --color-gold

### Why HR Labs / Differentiators Section
**Background:** --color-blue-light (#EEF2FF)
**Layout:** Left text block (40%) + Right staggered card stack (60%)

Left block:
- Eyebrow: `WHY CHOOSE US`
- Headline: "We Don't Just Consult. We Build."
- Body: 2–3 sentences on their unique approach

Right block — 4 horizontal feature rows:
- ✓ Human-centered approach — not policy-first
- ✓ In-person + remote delivery across India
- ✓ Proven in 50+ real companies, not theory
- ✓ Mission-driven — partnered with NGO Loving Hearts

Each row: icon (checkmark or small illustration) + title + 1-line desc

### Testimonials / Trust Section
**Background:** white
**Layout:** Centered headline + 3-column testimonial card grid

Section headline: "What Our Clients Say"

Testimonial cards:
- Quote text (italic, slate)
- Client name + company (Inter 600, navy)
- Star rating (gold stars, 5/5)
- Card: white bg, subtle border, rounded-md

*Note for Claude Code:* Use placeholder testimonials from startups/SMEs if real ones are unavailable in the brief. Format: "Working with HR Labs transformed how our 40-person team operates. We went from constant firefighting to clear ownership structures." — Founder, Bengaluru-based SaaS company

### NGO Partner Section
**Don't bury this — it's a trust signal.**
**Layout:** Thin banner-style section, 2 columns

Left: Text — "Our Social Commitment" / small paragraph about Loving Hearts
Right: Loving Hearts logo + REG number

Background: soft warm cream (#FAF7F2)
Thin gold top border to signal a distinguished partnership

### Final CTA / Contact Section
**Background:** navy (#0F1F3D)
**Layout:** Centered, full width

Headline (Playfair, white, large): "Ready to Build a Better Organization?"
Subtext: "Book a free 30-minute consultation. No pitch, just clarity."
CTA Button: "Book Your Free Call →" (large, white text, blue background, pill shape)

Below button: Two contact options — Bangalore (+91 99165 55890) | Madurai (+91 97421 94666)
Both as clickable `tel:` links, styled as subtle white text pills

### Footer
**Background:** #0B1930 (darker navy)
**Layout:** 4 columns + bottom bar

Col 1: Logo + tagline "People, Process & Performance" + social icons (X, LinkedIn, Facebook, Instagram) as clean 20px icon buttons

Col 2: **Company**
- Home
- About Us
- Blog
- Careers

Col 3: **Services**
- HR Consulting
- DigiCloud
- Membership
- Partners

Col 4: **Contact**
- Bangalore office + phone
- Madurai office + phone
- hsreeraj4@gmail.com (if applicable)
- Privacy Policy | Terms

Bottom bar: thin border, then `© 2025 HR Labs · hrlabs.in · All Rights Reserved · Crafted in India`

---

## 6. Page Layout — Section Order

```
1. NAVBAR (sticky)
2. HERO (viewport height, 2-col)
3. SOCIAL PROOF BAR (as-seen-in strip)
4. SERVICES (3-col cards, white bg)
5. STATS / IMPACT (navy bg, 4 stats + counter)
6. WHY HR LABS (blue-light bg, feature rows)
7. TESTIMONIALS (white, 3 cards)
8. NGO PARTNER (warm cream strip)
9. FINAL CTA (navy, centered)
10. FOOTER (dark navy, 4-col)
```

---

## 7. Motion & Interactions

All animations should respect `prefers-reduced-motion`.

| Element | Animation |
|---|---|
| Hero headline | Fade-up + slight blur on load, 0.6s |
| Hero subheading | Fade-up, 100ms delay |
| Hero CTAs | Fade-up, 200ms delay |
| Section entry | Fade-up as section enters viewport (IntersectionObserver) |
| Stats numbers | Count-up animation when stats section enters viewport |
| Service cards | Lift shadow on hover |
| CTA buttons | Subtle scale(1.02) on hover |
| Navbar | Background transition transparent→white on scroll |
| Logo strip | Grayscale → color on hover |

---

## 8. Assets Available

The following logos/assets are provided and should be used:

| Asset | Usage |
|---|---|
| `hr-labs-logo.png` | Navbar logo, footer logo (remove black background if present) |
| `outlook-logo.png` | "As Seen In" strip |
| `zee-business-logo.png` | "As Seen In" strip |
| `the-week-logo.png` | "As Seen In" strip |
| `brandz-magazine-logo.png` | "As Seen In" strip |
| `loving-hearts-logo.png` | NGO Partner section |

**Important:** All logos in the "As Seen In" strip should be displayed in **grayscale** by default (CSS: `filter: grayscale(100%)`) and transition to full color on hover. This is a standard high-end design pattern.

**Hero image:** Use a clean professional photograph or abstract geometric SVG composition. Do NOT use the generic stock photo of people in suits standing in a row.

---

## 9. Tech Stack (for Claude Code)

```
Framework:       Next.js 14 (App Router)
Styling:         Tailwind CSS + custom CSS variables
Fonts:           Google Fonts — Playfair Display + Inter (next/font)
Icons:           Lucide React
Animations:      Framer Motion (or CSS transitions for simpler ones)
Images:          next/image with proper alt text
Deployment:      Vercel-ready
```

### Key Implementation Notes

1. **Fonts:** Import via `next/font/google` — NOT via `<link>` tag in HTML
2. **Tailwind config:** Extend the theme to include the custom color tokens listed above
3. **Counter animation:** Use `useInView` from Framer Motion + a simple count-up hook
4. **Sticky navbar:** Use `useScrollPosition` hook — add `shadow-sm bg-white` class after 80px scroll
5. **Responsive breakpoints:**
   - Hero: 2-col on desktop, single-col stacked on mobile
   - Services: 3-col → 2-col → 1-col
   - Stats: 4-col → 2×2 grid → single col
   - Footer: 4-col → 2-col → 1-col

---

## 10. File & Folder Structure

```
/app
  /page.tsx              — Homepage
  /layout.tsx            — Root layout with fonts
/components
  /Navbar.tsx
  /Hero.tsx
  /SocialProofBar.tsx
  /Services.tsx
  /Stats.tsx
  /WhyHRLabs.tsx
  /Testimonials.tsx
  /NGOPartner.tsx
  /FinalCTA.tsx
  /Footer.tsx
/lib
  /useCountUp.ts         — Counter animation hook
/public
  /images                — All logo assets
/styles
  /globals.css           — CSS custom properties + base reset
tailwind.config.ts
```

---

## 11. Accessibility Checklist

- [ ] All images have descriptive `alt` text
- [ ] Color contrast ratio ≥ 4.5:1 for all body text
- [ ] Focus states visible on all interactive elements (outline: 2px solid --color-blue-mid)
- [ ] Heading hierarchy: one `<h1>` per page, logical `<h2>` → `<h3>` nesting
- [ ] Navigation accessible via keyboard
- [ ] `prefers-reduced-motion` respected in all animations
- [ ] CTAs use descriptive text (not just "Click here")

---

## 12. What Success Looks Like

When the redesign is complete, the homepage should:

1. **In 3 seconds**, a visitor should understand: *"This is a serious HR consulting firm with 18 years of experience."*
2. **In 10 seconds**, they should see proof: *featured in major publications, 50+ companies served, 4.8 rating.*
3. **By end of scroll**, they should feel compelled to book a call — the CTA should feel inevitable, not forced.

The site should be able to stand next to **Keka HR**, **Zoho People**, or **EY's consulting division** and not feel out of place.

---

*Brief prepared for Claude Code implementation.*
*Assets: 9 screenshots + logo files provided.*
*Target: Production-ready Next.js homepage.*
