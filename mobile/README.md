# Mobile-first Mohanji site

A parallel build of the Mohanji site, rebuilt mobile-first. The desktop site at the repo root is **untouched** — both versions live side-by-side until we're ready to merge.

## What's different

| Concern | Desktop site | Mobile-first build |
|---|---|---|
| Nav | horizontal bar with hover mega-menus, **disappears entirely below 980px** | sticky top bar + hamburger drawer with native disclosure groups |
| Tap targets | mixed | all interactive elements ≥ 48 × 48 px (WCAG AAA) |
| Type scale | desktop-leaning `clamp()` floors | rescaled for phone — readable without zoom |
| Hero height | 100vh, content cut off below the fold | ≤ 78vh, lede + CTA visible at first paint |
| Practice cards | dense grid | accordion-card hybrid — title visible, body expands on tap |
| Category nav | fixed sub-nav | horizontal-scroll snap chips with scroll-spy |
| Calendars / libraries | grid | horizontal swipe carousels (`scroll-snap-type: x mandatory`) |
| Always-reachable CTA | none | bottom-fixed CTA bar in thumb zone |
| Animations | always on | respect `prefers-reduced-motion` |
| Safe-area | none | `viewport-fit=cover` + `env(safe-area-inset-bottom)` for notched devices |

## Status

| Page | Mobile-first | Notes |
|---|---|---|
| `index.html` | ✅ rewritten | Hero, 5 pillars, swipe-carousel of practices, FAQ accordion, bottom CTA |
| `sadhana.html` | ✅ rewritten | Today's Sadhana anchor, 3 paths, sticky chips, 6 accordion category sections |
| `about.html` | ⏳ desktop copy | inherits desktop layout — to rebuild |
| `events.html` | ⏳ desktop copy | inherits desktop layout — to rebuild |
| `spaces.html` | ⏳ desktop copy | inherits desktop layout — to rebuild |
| `awards.html` | ⏳ desktop copy | inherits desktop layout — to rebuild |
| `kailash.html` | ⏳ desktop copy | inherits desktop layout — to rebuild |

The remaining pages still load and link correctly — they just don't yet have the mobile-first treatment applied. They're queued for the next pass.

## Try it

Live: https://successmpowered.github.io/mohanji/mobile/

Best viewed on a phone, or in Chrome DevTools device mode (iPhone 14 / Pixel 7 / iPad mini).

## Merge plan

When the team is happy with the mobile-first treatment:
1. Finish the remaining 5 pages mobile-first
2. Replace the root pages with these versions
3. Delete `/mobile/`

Until then, both versions stay in sync on content, divergent on layout.
