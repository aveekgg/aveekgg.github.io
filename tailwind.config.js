/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FAF6EF',
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F2EAD8',
          300: '#E8DCC0',
        },
        ink: {
          DEFAULT: '#2A2420',
          light: '#5C5347',
        },
        accent: {
          DEFAULT: '#C1612F',
          light: '#E08642',
          dark: '#974B22',
          50: '#FBEFE6',
          100: '#F5DBC4',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
} 