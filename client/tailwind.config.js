/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      colors: {
        customGray: 'var(--gray)',
        customBlue: 'var(--blue)',
        softBlue: 'var(--softBlue)',
        bgColor: 'var(--bgColor)',
        textColor: 'var(--textColor)',
        error: 'var(--error)',
        softError: 'var(--softError)',
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
};
