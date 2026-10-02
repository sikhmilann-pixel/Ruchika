/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkbg: {
          light: '#FFF4F6',
          DEFAULT: '#FCE7EC',
          soft: '#FAD1DC',
          medium: '#F3A6B9',
          alt1: '#FFF7F8',
          alt2: '#FFF1F4',
        },
        rose: {
          accent: '#E85D7A',
          deep: '#B4234D',
          dark: '#4A1527',
          darker: '#360E1B',
          muted: '#8E5365',
          strong: '#7B2943',
          softText: '#C76A82',
        },
        gold: {
          soft: '#C99A5B',
          light: '#DFCAAF',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'Georgia', 'serif'],
      },
      animation: {
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'sway-petal': 'swayPetal 16s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 7s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        swayPetal: {
          '0%': { transform: 'translateY(-50px) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(50vh) translateX(30px) rotate(180deg)' },
          '100%': { transform: 'translateY(105vh) translateX(-20px) rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
