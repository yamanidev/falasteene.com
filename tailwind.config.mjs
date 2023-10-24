/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#009736",
        mainRed: "#EE2A35",
        mainBlue:"#56CCF2",
        backGround: "#F1F1F1",
        mainText: "#1C1C1C",
        disabledText: "#817A99",
      },
    },
  },
  plugins: [],
};
