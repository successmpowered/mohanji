# Design System — Asset Index

A directory of every extractable asset in this folder. Use the "I need…" column to find what you want, then copy the file straight into your project (Next.js, WordPress, Figma import, etc.). Every component HTML is self-contained — paste it into a page and it works.

---

## 🎨 Tokens (the design DNA)

| I need… | File | Format |
|---|---|---|
| CSS variables I can drop into any stylesheet | `tokens.css` | CSS custom properties (`--m-*`) |
| Neutral source for Style Dictionary / build pipelines | `tokens.json` | Style Dictionary JSON |
| A Tailwind preset for Next.js | `tailwind.tokens.js` | Tailwind config preset |
| The brand pillars, type scale, motion rules, consumption guides | `README.md` | Markdown |
| The full component catalogue with build-priority tiers | `components.md` | Markdown |

---

## 🖼 SVG Assets (`assets/svg/`)

### Brand & ornament
| I need… | File |
|---|---|
| The Kailash With Mohanji circular badge logo | `kailash-logo.svg` |
| 12-petal mandala wreath (rotates behind heroes) | `mandala.svg` |
| Om symbol (ॐ) | `om.svg` |
| Halo glow ring (decorative, behind subjects) | `halo-ring.svg` |
| Section divider rule (gold hairline + dot) | `divider-rule.svg` |
| Paper-grain noise pattern (overlay) | `grain-pattern.svg` |
| Elevation profile chart (Kailash trek) | `elevation-chart.svg` |

### Medals (awards page)
| I need… | File |
|---|---|
| Generic gold medal | `medal-gold.svg` |
| Honour medal | `medal-honour.svg` |
| Humanitarian medal | `medal-humanitarian.svg` |

### Icons (events / journeys)
| I need… | File |
|---|---|
| Parikrama (circumambulation) | `icon-parikrama.svg` |
| Manas Sarovar / sacred lake | `icon-lake.svg` |
| Ashtapad (eight-stepped peak) | `icon-ashtapad.svg` |
| Energy transmission | `icon-transmission.svg` |
| Dev Kumbh (gathering of devas) | `icon-devkumbh.svg` |
| Satsang | `icon-satsang.svg` |
| Retreat | `icon-retreat.svg` |
| Festival | `icon-festival.svg` |
| Immersion | `icon-immersion.svg` |

All SVGs use the brand gold (`#b8924a` / `#d4ae6b`) or are colour-agnostic (`currentColor`). Resize freely.

---

## 🧩 Components (`components/`)

Each file is **self-contained** — `<style>` and `<script>` are inline. Copy the whole thing, paste into a page, replace placeholder content. No external CSS dependencies (fonts come from Google: Cormorant Garamond + Manrope).

| I need… | File | Notes |
|---|---|---|
| Announce bar, sticky/floating nav, footer, FAQ accordion, section head, kicker, paper-grain overlay | `chrome.html` | Global building blocks. Two nav variants: `m-nav-wrap` (sticky-light) and `m-nav-wrap--dark` (floating overlay for hero pages). |
| Light/editorial photo hero (centred or left-aligned) | `hero-photo.html` | Used on index, about, awards, spaces. Breathe animation, mandala, halo. Add `.m-hero--left` for the home page variant. |
| Cinematic Ken-Burns hero (the "video effect" without a video) | `hero-cinematic.html` | Used on Kailash. Ken-Burns photo, letterbox bars, halo glow, rotating ring, flicker. Includes commented `<video>` swap-in. |
| Calendar with multi-day event bars | `calendar.html` | The trickiest one. Role-based bar segments (single / start / mid / end / start-wrap) with `-11px` negative margins for visual continuity across week breaks. Edit the `EVENTS` array at the bottom. |
| Live D · H · M · S countdown | `countdown.html` | Set `data-target` to an ISO-8601 datetime. Light + dark variants (`.m-count--light`). |
| Pillar card, event card, testimonial card, pricing tier, itinerary row | `cards.html` | Five card patterns in one file. All `.m-*` namespaced — no class collisions. |

---

## 🛠 How to consume

### Next.js + Tailwind
1. Copy `tailwind.tokens.js` into your repo.
2. In `tailwind.config.js`: `presets: [require('./tailwind.tokens.js')]`.
3. Import SVGs as React components via `@svgr/webpack` or use `<img>` directly.
4. Port component HTML into JSX — the class names are already namespaced.

### WordPress + Elementor
1. Enqueue `tokens.css` once in your theme.
2. Each component HTML can be pasted into an Elementor HTML widget verbatim.
3. SVGs upload into the media library.

### Payload CMS (content models — not yet built)
Next deliverable: `Event`, `Award`, `Space`, `Yatra`, `Testimonial`, `PressMention`, `Page` collections with field schemas matching the front-end components above.

### Figma
- SVGs drag straight in.
- Tokens: import `tokens.json` via the Tokens Studio plugin.

---

## 📁 Folder map

```
design-system/
├── INDEX.md              ← you are here
├── README.md             brand pillars, type scale, motion
├── components.md         component catalogue + build tiers
├── tokens.css            CSS custom properties
├── tokens.json           Style Dictionary source
├── tailwind.tokens.js    Tailwind preset
├── assets/
│   └── svg/              19 SVG files (logo, mandala, icons, medals)
└── components/           6 self-contained HTML components
    ├── chrome.html
    ├── hero-photo.html
    ├── hero-cinematic.html
    ├── calendar.html
    ├── countdown.html
    └── cards.html
```

---

## 🔜 Coming next

- Payload CMS collection schemas
- React/JSX ports of the six components
- Figma library file (`.fig`) mirroring the tokens
- Component Storybook (optional)

For questions or to request additional components, open an issue at `successmpowered/mohanji`.
