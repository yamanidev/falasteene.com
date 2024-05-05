/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ghost-white": "#F7F9FC",
        "anti-flash-white": "#F1F1F1",
        "palestine-red": "#EE2A35",
        "palestine-green": "#009736",
        "telegram-blue": "#2AABEE",
        "facebook-blue": "#0866FF"
      },
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"]
      },
      boxShadow: {
        navbar: "0px 4px 30px 0px rgba(0, 0, 0, 0.04)",
        card: "0px 4px 30px 0px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};
