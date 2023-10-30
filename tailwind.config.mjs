/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#F7F9FC',
        'anti-flash-white': '#F1F1F1',
        'palestine-red': '#EE2A35',
        'palestine-green': '#009736',
        'mainBlue': '#56CCF2',
        'mainText': '#1C1C1C',
        'disabledText': '#817A99'
      },
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif']
      }
    }
  },
  plugins: []
};
