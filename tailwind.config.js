/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#edf1f7',
          100: '#d0daea',
          200: '#b0c2d8',
          300: '#8ea9c5',
          400: '#6d91b2',
          500: '#4d79a0',
          600: '#3d6490',
          700: '#2e5080',
          800: '#1F3A5F',   // primary
          900: '#132338',
          950: '#0a1520',
        },
        nepal: {
          red:   '#C0392B',   // primary accent
          gold:  '#D4AF37',   // secondary accent / eyebrow
          sky:   '#5B9BD5',
          green: '#2E8B57',
          earth: '#8B6914',
          cream: '#F7F4EF',   // section bg
          'cream-dark': '#EDE9E3',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
        tight:    '-0.01em',
        normal:   '0',
        wide:     '0.04em',
        wider:    '0.08em',
        widest:   '0.14em',
        ultra:    '0.22em',
      },
      lineHeight: {
        display:  '1.05',
        heading:  '1.15',
        relaxed:  '1.65',
        loose:    '1.8',
      },
      screens: {
        xs: '480px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in':   'fadeIn 0.6s ease-out forwards',
        'slide-up':  'slideUp 0.6s ease-out forwards',
        'ken-burns': 'kenBurns 10s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1)    translateX(0)' },
          '100%': { transform: 'scale(1.07) translateX(-1.5%)' },
        },
      },
    },
  },
  plugins: [],
}
