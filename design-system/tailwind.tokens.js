/**
 * Mohanji Design Tokens — Tailwind preset
 * --------------------------------------
 * Drop into a Next.js / Tailwind project:
 *
 *   // tailwind.config.js
 *   const mohanji = require('./design-system/tailwind.tokens.js')
 *   module.exports = {
 *     presets: [mohanji],
 *     content: ['./app/**\/*.{ts,tsx}', './components/**\/*.{ts,tsx}']
 *   }
 *
 * All Mohanji classes are namespaced (e.g. text-ink-soft, bg-gold-light)
 * to avoid collisions with Tailwind defaults.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        white:      '#fdfcf9',
        'white-soft': '#faf7f0',
        'white-warm': '#f5efe2',
        cream:      '#faf4e6',

        ink: {
          DEFAULT: '#2a241b',
          soft:    '#5a5347',
          mute:    '#8a8278',
          deep:    '#1a1510',
          black:   '#0a0908',
        },

        gold: {
          DEFAULT: '#b8924a',
          light:   '#d4ae6b',
          deep:    '#8a6a2f',
          bright:  '#f2d48a',
          whisper: '#f0e6ce',
        },

        // Kailash With Mohanji yatra brand — only on the Kailash microsite.
        kailash: {
          DEFAULT: '#1c94cc',
          light:   '#54b5db',
          deep:    '#0e6b99',
          ink:     '#0a4c72',
          pale:    '#e8f3fa',
        },

        // Semantic event-type palette for journey cards & calendar bars.
        event: {
          satsang:     '#8a6a2f',
          retreat:     '#4a6b5a',
          pilgrimage:  '#9a4a3a',
          immersion:   '#4a5a7a',
          festival:    '#b8924a',
          external:    '#6a6055',
        },
      },

      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'Georgia', 'serif'],
        sans:  ['"Manrope"', '-apple-system', 'system-ui', '"Segoe UI"', 'sans-serif'],
      },

      fontSize: {
        // [size, { lineHeight, letterSpacing }]
        hero:    ['clamp(58px, 7vw, 118px)', { lineHeight: '0.96', letterSpacing: '-0.024em' }],
        display: ['clamp(46px, 5vw, 84px)',  { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        h1:      ['clamp(44px, 4.8vw, 68px)',{ lineHeight: '1.04', letterSpacing: '-0.018em' }],
        h2:      ['clamp(36px, 4vw, 56px)',  { lineHeight: '1.1',  letterSpacing: '-0.018em' }],
        h3:      ['32px',                    { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h4:      ['24px',                    { lineHeight: '1.25' }],
        lede:    ['clamp(19px, 1.6vw, 24px)',{ lineHeight: '1.55' }],
        body:    ['16px',                    { lineHeight: '1.7'  }],
        small:   ['14px',                    { lineHeight: '1.6'  }],
        caption: ['12px',                    { lineHeight: '1.4'  }],
        kicker:  ['11px',                    { lineHeight: '1',    letterSpacing: '0.26em' }],
        'kicker-lg': ['11px',                { lineHeight: '1',    letterSpacing: '0.36em' }],
        'kicker-xl': ['12px',                { lineHeight: '1',    letterSpacing: '0.42em' }],
        micro:   ['10px',                    { lineHeight: '1',    letterSpacing: '0.28em' }],
      },

      letterSpacing: {
        display:   '-0.024em',
        h2:        '-0.018em',
        h3:        '-0.01em',
        kicker:    '0.26em',
        'kicker-lg':'0.36em',
        'kicker-xl':'0.42em',
      },

      spacing: {
        // Section rhythm
        'sec-sm':  '80px',
        'sec-md':  '120px',
        'sec-lg':  '140px',
        'sec-xl':  '160px',
        'sec-x':   '48px',
      },

      maxWidth: {
        narrow: '820px',
        prose:  '900px',
        wide:   '1200px',
        full:   '1400px',
      },

      borderColor: {
        line:           'rgba(42,36,27,0.08)',
        'line-strong':  'rgba(42,36,27,0.16)',
        'line-gold':    'rgba(184,146,74,0.3)',
        'line-gold-strong': 'rgba(184,146,74,0.55)',
        'line-on-dark': 'rgba(201,161,78,0.22)',
      },

      boxShadow: {
        card:     '0 20px 60px rgba(138,106,47,0.15)',
        'card-sm':'0 8px 30px rgba(42,36,27,0.08)',
        hero:     '0 10px 80px rgba(0,0,0,0.7)',
        glow:     '0 0 100px rgba(240,230,206,0.5)',
      },

      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        out:      'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      transitionDuration: {
        fast: '180ms',
        base: '300ms',
        slow: '500ms',
        page: '800ms',
      },

      keyframes: {
        breathe:  { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.04)' } },
        kenburns: { '0%': { transform: 'scale(1.02) translate(0,0)' }, '100%': { transform: 'scale(1.12) translate(-1.5%,-2%)' } },
        halo:     { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
        rotate:   { from: { transform: 'rotate(0)' }, to: { transform: 'rotate(360deg)' } },
        pulse:    { '0%,100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.5)', opacity: '0.5' } },
      },

      animation: {
        breathe:  'breathe 24s ease-in-out infinite alternate',
        kenburns: 'kenburns 28s ease-in-out infinite alternate',
        halo:     'halo 6s ease-in-out infinite alternate',
        rotate:   'rotate 180s linear infinite',
        pulse:    'pulse 2s ease-in-out infinite',
      },
    },
  },
}
