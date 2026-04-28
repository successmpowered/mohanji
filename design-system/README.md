# Mohanji Design System

Source-of-truth design tokens for Mohanji digital properties — extracted from the prototype at [mohanji.github.io](https://successmpowered.github.io/mohanji/).

> **Status:** v0.1 — design intent captured. Production-ready after one design review with the implementation team.

---

## What's in this folder

| File | Use it for | Stack |
|---|---|---|
| `tokens.css` | Drop-in CSS custom properties. Import once, use `var(--m-*)` everywhere. | Plain HTML, WordPress themes, any CSS pipeline |
| `tokens.json` | Neutral source format (Style Dictionary compatible). Convert to any platform output. | Style Dictionary → SCSS / Android / iOS / SwiftUI |
| `tailwind.tokens.js` | Tailwind preset. `presets: [mohanji]` in `tailwind.config.js`. | Next.js, Payload admin theme, any Tailwind app |

All three describe the **same** system. Pick the format that matches your build.

---

## Brand pillars (the reasons behind the tokens)

1. **Editorial reverence over generic SaaS.** Cormorant Garamond display + Manrope body. Sharp corners, generous negative space, italic emphasis carries the spiritual register.
2. **Warm paper, not cold white.** Surfaces are `#fdfcf9` and tints, never pure white. A faint paper-grain SVG overlay sits at `z:300` on every page at `opacity:0.025`.
3. **Gold as accent, never decoration.** Gold (`#b8924a` and tints) signals importance — kickers, dividers, CTAs. Never used as a background fill at full opacity except for primary CTAs and selected calendar bars.
4. **Semantic event colours.** Satsang (warm gold), Retreat (forest green), Pilgrimage (terracotta), Immersion (slate blue), Festival (gold), External/Invited (neutral, rendered with dashed borders). These are **content tokens**, not decoration — never repurpose for UI chrome.
5. **Kailash is its own brand.** The Kailash Yatra microsite uses the official sky-blue logo palette (`kailash.*` tokens). Do **not** mix Kailash blues into the main site sections, and do not use the Mohanji gold as the dominant on the Kailash microsite.

---

## Logo conventions

The Mohanji wordmark is **always** rendered as `Mohanji<em>.</em>` — italic gold period after the wordmark. This is non-negotiable; it's the single recurring brand mark across every page header and footer.

```html
<a class="m-logo" href="/">Mohanji<em>.</em></a>
```

The Kailash Yatra page uses the **circular blue badge logo** (asset to be added by the official team). When integrating, place it in the nav far-left at ~72px with a vertical gold divider before the parent "Mohanji." wordmark.

---

## Type scale

| Token | Use |
|---|---|
| `hero` (clamp 58–118px) | Single H1 per page on hero sections |
| `display` (46–84px) | Final-CTA and grace-section headings |
| `h1` (44–68px) | Section headings |
| `h2` (36–56px) | Subsection headings |
| `h3` (32px) | Card/feature titles |
| `lede` (19–24px) | Italic Cormorant lede after a kicker |
| `body` (16px) | Manrope 300 body text |
| `kicker` (11px, +0.26em tracking, uppercase) | Section eyebrow labels |

Italic display variants are used liberally for emphasis words within headings — see `<em>` in any prototype page. Treat italic-gold-em as a **system rule**, not a one-off style.

---

## Spacing rhythm

- Section vertical padding: `120px / 140px / 160px` (md / lg / xl). 80px on mobile.
- Section horizontal padding: `48px` desktop, `24px` mobile.
- Container widths: `narrow 820 / prose 900 / wide 1200 / full 1400`.
- Card padding: `48px` typical, `36px` for compact cards, `60px` for crown features.

---

## Motion

The prototype leans on a small set of looped, very-slow animations to create reverence:

| Token | Where |
|---|---|
| `breathe` (24s) | Hero background image (subtle scale) |
| `kenburns` (28s) | Kailash photo hero (zoom + pan) |
| `halo` (6s) | Gold glow behind hero subjects |
| `rotate` (180s) | Mandala watermarks, faint rings |
| `pulse` (2s) | Announce-bar dot |

UI-element transitions use `300ms cubic-bezier(0.4, 0, 0.2, 1)` as the default. Reserve `slow` and `page` for scroll-triggered reveals.

---

## How to consume in production

### Next.js + Payload (recommended)

```bash
# 1. Drop the preset
cp design-system/tailwind.tokens.js apps/web/

# 2. tailwind.config.js
const mohanji = require('./tailwind.tokens.js')
module.exports = {
  presets: [mohanji],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
}

# 3. Load fonts in app/layout.tsx
import { Cormorant_Garamond, Manrope } from 'next/font/google'
```

### WordPress + Elementor

```bash
# 1. Enqueue tokens.css in your child theme functions.php
wp_enqueue_style('mohanji-tokens', get_stylesheet_directory_uri() . '/design-system/tokens.css');

# 2. In Elementor Site Settings → Custom CSS, reference variables:
#    .elementor-button-link { background: var(--m-gold); color: var(--m-white); }
```

### Style Dictionary (for native or multi-platform)

```bash
npx style-dictionary build --config sd.config.js
# input: tokens.json
# outputs: SCSS, JS, Android XML, iOS Swift
```

---

## What this folder is NOT

- **Not a component library.** Components live in the implementation repo, built against these tokens. The handoff package will include a separate component inventory document.
- **Not exhaustive.** Edge cases (forms, error states, modals) will be added during the production build. Add them back here as PRs to keep the source of truth.
- **Not versioned yet.** v1.0 ships when the production site launches. Until then, expect tokens to shift slightly as we resolve in-context contrast and accessibility checks.

---

## Maintenance protocol

1. **Single source of truth:** changes to `tokens.json` first, then regenerate / hand-edit `tokens.css` and `tailwind.tokens.js` to match.
2. **No raw hex values in production code.** If you find yourself writing `#b8924a` in a component, you've drifted — promote it to a token.
3. **Document the why.** When adding a new token, include a `comment` field in JSON explaining when to use it. The next person on the team will thank you.

---

*Maintained by the Mohanji digital team. Questions: open an issue on the prototype repo.*
