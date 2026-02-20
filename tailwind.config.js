/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ── Brand Fonts ──────────────────────────────────────────
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      // ── Brand Color Palette ───────────────────────────────────
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#D4AF64',
          dark:    '#A8893A',
          muted:   'rgba(201,168,76,0.15)',
          50:  '#FBF8F0',
          100: '#F5EDD9',
          200: '#EBD9A8',
          300: '#D4AF64',
          400: '#C9A84C',
          500: '#A8893A',
          600: '#8A7230',
          700: '#6B5824',
          800: '#4D3F19',
          900: '#2E260F',
        },
        obsidian: {
          DEFAULT: '#080604',
          soft:    '#0E0C09',
          mid:     '#141208',
          light:   '#1E1A10',
          50:  '#F5F3F0',
          100: '#E8E4DD',
          200: '#D1C9BA',
          300: '#1E1A10',
          400: '#141208',
          500: '#0E0C09',
          600: '#080604',
          700: '#060503',
          800: '#040302',
          900: '#020201',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark:    '#EDE5D0',
          50:  '#FFFEFB',
          100: '#FBF8F2',
          200: '#F5F0E8',
          300: '#EDE5D0',
          400: '#E5DAB8',
          500: '#DDD0A0',
        },
      },
      // ── Spacing / Sizing ──────────────────────────────────────
      maxWidth: { 
        '8xl': '1440px',
        '9xl': '1600px',
      },
      // ── Letter Spacing ────────────────────────────────────────
      letterSpacing: {
        luxury: '0.35em',
        wide:   '0.18em',
        wider:  '0.25em',
      },
      // ── Box Shadows ───────────────────────────────────────────
      boxShadow: {
        gold: '0 12px 48px rgba(201,168,76,0.25), 0 4px 16px rgba(201,168,76,0.15)',
        deep: '0 24px 60px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)',
        luxury: '0 20px 60px rgba(0,0,0,0.5), 0 0 1px rgba(201,168,76,0.2)',
        glow: '0 0 30px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.15)',
        inner: 'inset 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      // ── Backdrop Blur ─────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        'luxury': '24px',
      },
      // ── Animations ────────────────────────────────────────────
      keyframes: {
        marquee: { 
          '0%': { transform: 'translateX(0)' }, 
          '100%': { transform: 'translateX(-50%)' } 
        },
        fadeUp:  { 
          from: { opacity: 0, transform: 'translateY(40px)' }, 
          to: { opacity: 1, transform: 'translateY(0)' } 
        },
        shimmer: { 
          '0%': { backgroundPosition: '-200% center' }, 
          '100%': { backgroundPosition: '200% center' } 
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.5)' },
        },
        'reveal-text': {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        shimmer:   'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'reveal-text': 'reveal-text 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      // ── Transition Timings ────────────────────────────────────
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
