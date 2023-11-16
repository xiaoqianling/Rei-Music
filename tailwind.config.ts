import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: {
          main: "#12cc91",
          active: "#47e7ac",
          950: "#12cc91",
          900: "#24d099",
          800: "#36d4a2",
          700: "#49d8aa",
          600: "#5bdcb3",
          500: "#6de0bb",
          400: "#7fe4c4",
          300: "#92e7cc",
          200: "#a4ebd5",
          100: "#b6efdd",
          50: "#c8f3e6",
        }
      },
      animation: {
        'skeleton-load': 'skeleton-load 1s ease-in-out infinite'
      },
      keyframes: {
        'skeleton-load': {
          '100%': {
            backgroundPosition: '-20% 0'
          }
        }
      },
      backgroundSize: {
        '200%': '200%'
      },
      backgroundPosition: {
        'x-150%': "150% 0",
        'x-180%': "180% 0",
        'x-120%': "120% 0"
      }
    },
  },
  plugins: [],
}

export default config;

