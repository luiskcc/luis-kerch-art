/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      padding: {
        '25': '25rem',
        '50': '50rem',
        '75': '75rem',
        '100': '100rem',
        '125': '125rem',
        '150': '150rem',
        '175': '175rem',
        '200': '200rem',
      },
      fontFamily: {
        jost: ['var(--font-jost)', 'sans-serif'],
        questrial: ['var(--font-questrial)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};