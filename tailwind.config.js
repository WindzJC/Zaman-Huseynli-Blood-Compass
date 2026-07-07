/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#05070b',
        charcoal: '#10131a',
        iron: '#1a202c',
        oxblood: '#641a22',
        ember: '#b14835',
        copper: '#c88345',
        bone: '#f4eadc',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        ember: '0 22px 80px rgba(177, 72, 53, 0.24)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 70px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
