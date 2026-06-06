/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-light': '#0F1F38',
        'navy-border': '#1E2D47',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        'gold-hover': '#b8960c',
        'off-white': '#F8F6F1',
        'brand-gold': '#C9A84C',
        'brand-dark': '#0a0e1a',
        'brand-darkSecondary': '#111827',
        'brand-cream': '#f8f7f4',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
