/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8d6e63',
          DEFAULT: '#6d4c41',
          dark: '#4e342e',
        },
        secondary: {
          light: '#a5d6a7',
          DEFAULT: '#66bb6a',
          dark: '#43a047',
        },
        accent: {
          light: '#ffcc80',
          DEFAULT: '#ffb74d',
          dark: '#ffa726',
        },
        background: {
          light: '#5d4037',
          DEFAULT: '#3e2723',
          dark: '#271510',
        }
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-secondary)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'baobab-pattern': "url('/images/baobab/pattern.png')",
      },
    },
  },
  plugins: [],
}
