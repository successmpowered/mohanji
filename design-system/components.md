# Mohanji Component Inventory

Every reusable block in the prototype, catalogued for the implementation team. Use this as a build checklist — when each component is built once in code, against the [design tokens](./tokens.css), it should never need to be re-styled.

> **Conventions in this doc**
> - **Used on** — which prototype page exemplifies the component (canonical reference)
> - **Variants** — props or modifier classes the component must support
> - **Notes** — gotchas, behaviour rules, or accessibility concerns the implementer needs to know

Total: **42 components** across 9 categories.

---

## 1. Chrome (global layout)

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 1.1 | **AnnounceBar** | All pages | `default`, `dark` (Kailash) | Pulsing dot (2s ease-in-out, scale 1→1.6, opacity 1→0.4). Contains a single CTA link. Hides on scroll-down on mobile. |
| 1.2 | **Nav · sticky-light** | index, about, events, spaces, awards | `default`, `with-active-state` | `position: sticky; top: 0` over a `rgba(253,252,249,0.94)` blur-16 surface. Logo left, menu centre, primary CTA right. |
| 1.3 | **Nav · floating-dark** | kailash | — | `position: absolute` over the hero. No background — just text-shadow on items. Switches to a sticky-dark variant on scroll past hero (TBD). |
| 1.4 | **LogoWordmark** | All pages | `light`, `on-dark` | `Mohanji<em>.</em>` — italic gold period. **Non-negotiable rule.** |
| 1.5 | **LogoBadge · Kailash** | kailash only | — | Circular blue badge with mountain + sun + "KAILASH WITH MOHANJI" text. Use only on the Kailash microsite. Pair with a vertical gold divider before the parent `Mohanji.` wordmark. |
| 1.6 | **Footer** | All pages | `light`, `dark` (Kailash) | 4-column grid: brand+blurb / Explore / Section-specific / Connect. Bottom strip with copyright + Sanskrit mantra. |
| 1.7 | **PaperGrainOverlay** | All pages | — | Fixed `<div>` at `z:300`, `opacity:0.025`, SVG fractal-noise via data URI. Pointer-events none. |

---

## 2. Hero variants

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 2.1 | **HeroPhoto** | index, about, awards | `centred`, `left-aligned` (home) | Background image + scrim (`linear-gradient`+`radial-gradient`) + mandala watermark (rotating, 180s) + halo glow + content layer. Min-height 80vh. Photo has `breathe` animation (24s). |
| 2.2 | **HeroCinematic** | kailash | — | Photo with `kenburns` (28s zoom + pan), letterbox bars top/bottom, gold halo, mandala ring, flicker overlay, optional snow particles. The "video effect" without a video. |
| 2.3 | **HeroLeft** | home | — | Specialised layout: content max-width 560px on the left, vertically-centred quote on the right at `top:50%; right:88px`. Mandala shifted to `left:18%`. |
| 2.4 | **HeroMeta** | awards | — | Bottom strip of the hero: `flex` row of stat blocks (number + label) separated by gold rule. |
| 2.5 | **HeroDateBlock** | kailash | — | Date strip with double horizontal rules (top + bottom), `text-transform: uppercase`, `letter-spacing: 0.28em`. Used for major dates (e.g. yatra window). |
| 2.6 | **HeroCountdown** | kailash | — | Live countdown (D · H · M · S) with serif numerals. Backdrop-blur 20px on `rgba(0,0,0,0.5)`. Updates every 1s via `setInterval`. |
| 2.7 | **HeroScrollHint** | kailash | — | Vertical-text "Scroll" label, animated `scrollPulse` (3s, opacity + Y translate). |

---

## 3. Section primitives

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 3.1 | **SectionHead** | All pages | `centred`, `left` | Triple: kicker + h2 (with em-italic gold word) + italic Cormorant lede. Max-width 820px. |
| 3.2 | **Kicker** | All pages | `default`, `inline-flex`, `centred` | Eyebrow label, 11px, +0.26em tracking, uppercase, gold. Flanked by `width:28px` horizontal rules left + right. |
| 3.3 | **PullQuote** | awards, about | — | Centred italic Cormorant, 22–32px, with optional attribution underline. |
| 3.4 | **Divider · vertical-gold** | awards, kailash | — | 1px wide, 90px tall, `linear-gradient(180deg,transparent,gold,transparent)`. |
| 3.5 | **Divider · horizontal-rule** | All pages | — | `width: 32–48px`, `height: 1px`, gold. Used in card headers and section heads. |
| 3.6 | **StatBlock** | awards hero, Kailash significance | — | Pair: serif number (38–46px) over uppercase 10–11px label. Used in groups separated by `60px` gap or 2px gold gridlines. |

---

## 4. Card components

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 4.1 | **PillarCard** | events, kailash, index | `4-up grid`, `with-icon`, `with-sanskrit` | Top gradient bar (3px gold). Roman numeral kicker, optional Sanskrit subtitle, h3 with em-gold word, body copy, optional bottom meta row. Hover: translateY(-6px) + shadow-card. |
| 4.2 | **CrownCard · featured-award** | awards | — | Medal SVG (custom gradient), title, year, body. Three-up grid. The visual peak of the awards page. |
| 4.3 | **TypeMockCard** | events | one per event-type | Top colour-bar (per event type), image, floating badge, h3, lede, 3-row meta list (Duration / Where / Best for). |
| 4.4 | **EventCard** | events, index | `default`, `external` (dashed border) | Compact card with type-dot, title, date, lede. External variant uses `--m-event-external` and dashed border. |
| 4.5 | **TestimonialCard** | kailash, about | `light`, `dark` | Large gold opening quote mark, italic body, divider, avatar circle (gradient gold) + name + location. |
| 4.6 | **PressMentionCard** | awards | — | Logo placeholder (or text wordmark), title, source, date. 6-up grid on awards page. |
| 4.7 | **DegreeCard** | awards | — | Year, institution, degree title, italic location. |
| 4.8 | **PricingTier** | kailash | `default`, `feature` (highlighted) | Name, tag, price (large serif), per-line, feature bullets (◆ markers in gold), CTA button. Feature variant: gold top border, gradient surface, "Most chosen" badge. |
| 4.9 | **SpaceCard** | spaces | — | Image, location kicker, name, capacity meta, brief description. |

---

## 5. Calendar & timeline

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 5.1 | **CalendarGrid** | events | `month-view` | 7-column grid. Header row (Sun…Sat). Day cells include numeric day + stack of event pills. |
| 5.2 | **CalendarEventBar** | events | role: `single`, `start`, `mid`, `end`, `start-wrap`; type: `satsang \| retreat \| pilgrimage \| immersion \| festival`; `external` modifier | **The trickiest component.** Multi-day continuity uses negative `margin: -11px` (matches cell padding+border) and selective `border-radius` removal. `mid` cells render `color: transparent` so the bar reads as a continuous strip. `start-wrap` re-renders the title on Sunday cells when the event spans a week boundary. |
| 5.3 | **CalendarLegend** | events | — | Horizontal row of chips (one per event type) + dashed-border "Invited appearance" chip. |
| 5.4 | **TimelineMonth** | events, kailash itinerary | — | `mmonth` block: month label + ordered list of event entries (`mev` items). Each entry has a colour-coded left border. External entries use a dashed border. |
| 5.5 | **AwardsTimelineEntry** | awards | type: `honour \| humanitarian \| spiritual \| civic \| media` | Year (large serif) + colour-coded kind tag + title + body. 16-row vertical list. |
| 5.6 | **ItineraryDayRow** | kailash | `default`, `peak` (key day) | Two-column grid (130px / auto). Left: day number with "DAY" eyebrow. Right: title with em-gold word, meta strip (altitude · duration), body. Connected by left border + dot marker. Peak variant: larger gold dot with glow. |
| 5.7 | **ElevationChartSVG** | kailash | — | Inline SVG. 900×240 viewBox, area fill with linearGradient, polyline stroke, labelled markers (Manasarovar, Drolma La, Ashtapad). |

---

## 6. Buttons & links

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 6.1 | **Button** | All pages | `primary` (gold), `ghost` (transparent on dark), `outline` (gold border on light) | 11–12px caps, 0.22–0.28em tracking, 17–18px vertical padding, `transition: all 0.35s`. Primary hover: `translateY(-2px)` and bright-gold. |
| 6.2 | **NavCTA** | All pages | — | Smaller button in the nav (12px, 12-24px padding). Gold fill on light surfaces, gold-bright on dark. |
| 6.3 | **TextLink · gold-deep** | Body copy | — | `color: var(--m-gold-deep)`, `border-bottom: 1px solid` matching colour. No underline animation — simple. |
| 6.4 | **TierCTA** | kailash pricing | — | Full-width block button at the foot of a pricing tier. Inverts in the feature-tier variant. |

---

## 7. Decorative

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 7.1 | **MandalaSVG** | All hero sections | `static`, `rotating` | 12-petal wreath, gold strokes at 0.5px, opacity 0.15–0.35. Rotating variant: `rotate` keyframe, 180s linear. |
| 7.2 | **HaloGlow** | All hero + crown sections | — | `radial-gradient` ellipse, 720px square, mix-blend-mode screen on dark, `halo` keyframe (6s alternate). |
| 7.3 | **MedalSVG** | awards crown cards | `gradient-1`, `gradient-2`, `gradient-3` (slight hue variants) | Custom inline SVG with `<linearGradient>` defs reused across three medals. |
| 7.4 | **MountainPeaksSVG** | (deprecated — kailash v1 only) | — | Layered polygons. Replaced by the photo hero in v2. Keep the SVG in version control as a fallback for low-bandwidth. |
| 7.5 | **SnowParticles** | kailash | — | 10× absolutely-positioned `<span>` elements with `snowfall` keyframe, randomised per-instance via inline `style`. |
| 7.6 | **LetterboxBars** | kailash | `top`, `bottom` | 72px gradient-to-transparent bars at top + bottom of cinematic heroes. Pure decoration. |
| 7.7 | **GrainFlickerOverlay** | kailash | — | Radial gradient at `mix-blend-mode: screen`, animated `flicker` keyframe (7s alternate). Adds subtle film texture. |

---

## 8. Forms & interaction

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 8.1 | **FAQItem** | kailash | — | Native `<details>` + `<summary>`. `+` rotates 45° on `[open]`. Question in serif 22px, answer in 15px sans. |
| 8.2 | **FilterPill** *(planned)* | events | — | Toggleable filter chip for event-type filtering. Inactive: light surface + gold border. Active: gold fill + white text. |
| 8.3 | **NewsletterForm** *(planned)* | footer / index | — | Email input (underline-only style) + arrow-icon submit. To be designed for production build. |

---

## 9. Specialty

| # | Component | Used on | Variants | Notes |
|---|---|---|---|---|
| 9.1 | **InclusionGrid** | kailash | `included`, `excluded` (two-column pair) | 2×1 grid of cards, each with h3 + bulleted list of items. Item bullets are gold horizontal rules (18px). |
| 9.2 | **SignatureSeal** | kailash Dev Kumbh section | — | Inline-flex block with 1px gold border, 14px / 28px padding, uppercase 11px text. The "Dev Kumbh · 2026 · A Generational Yatra" badge. |
| 9.3 | **WordsBlockquote** | kailash, awards | — | Large left-aligned italic Cormorant pull quote (22–32px) with gold opening mark (140px serif glyph) and attribution rule. |
| 9.4 | **GraceInvocation** | kailash opening | — | Centred Om glyph (72px gold) + h2 + vertical gold divider line + paragraphs + uppercase attribution kicker. The opening "ritual" of any reverent page. |
| 9.5 | **FinalCTA** | All pages | `light`, `dark`, `image-bg` | Closing section with kicker + display headline + lede + CTA pair + signature line ("Only one thing matters — Grace"). The page's emotional close. |

---

## Implementation priority (build order)

If the production team wants to sequence the build, this is roughly the order I'd attack it:

**Tier 1 — foundations** (need before any page renders)
1.1 AnnounceBar · 1.2 Nav · 1.4 LogoWordmark · 1.6 Footer · 1.7 PaperGrainOverlay · 3.1 SectionHead · 3.2 Kicker · 6.1 Button

**Tier 2 — content blocks** (covers 80% of pages)
2.1 HeroPhoto · 4.1 PillarCard · 4.4 EventCard · 4.5 TestimonialCard · 5.6 ItineraryDayRow · 9.5 FinalCTA · 7.1 MandalaSVG · 7.2 HaloGlow

**Tier 3 — page specials**
2.2 HeroCinematic · 2.6 HeroCountdown · 5.1 CalendarGrid + 5.2 CalendarEventBar (the hardest single component) · 4.2 CrownCard · 7.3 MedalSVG

**Tier 4 — polish**
8.1 FAQItem · 8.2 FilterPill · 5.7 ElevationChartSVG · 7.5 SnowParticles · 7.7 GrainFlickerOverlay

Tier 1 should be one developer for ~3 days. Tier 2 ~1 week. Tier 3 ~1 week (the calendar bar alone is 2 days). Tier 4 fills polish sprints.

---

## Open design questions for the production team

These are decisions that were *implied* by the prototype but not formally resolved — flag them in your kickoff:

1. **Mobile nav.** Prototype hides the menu on `<980px`. Production needs a hamburger drawer — design TBD.
2. **Form styling.** No real forms in the prototype. Inputs, validation states, error messaging need the design treatment.
3. **Donate flow.** Almost certainly the highest-conversion path on the production site. Not designed in the prototype.
4. **Multilingual.** Mohanji's audience is global. Cormorant Garamond doesn't cover Devanagari, Cyrillic at full quality — pair fonts will be needed.
5. **Sticky-dark nav variant.** The Kailash floating-dark nav needs a scroll-into-sticky-dark transition. Design that micro-interaction.
6. **Loading states.** Skeleton design TBD — follow the warm-paper / shimmer-gold idiom.
7. **Empty states.** Calendar with no events, awards page with no upcoming honours, etc.
8. **Press logos.** Awards page uses text placeholders. Need real wordmark assets cleared with each publication.

---

*Last updated alongside `tokens.json` v0.1. When a new component is built, add it here with its canonical reference page.*
