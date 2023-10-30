/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"ghost-white": "#F7F9FC"
			},
			fontFamily: {
				alexandria: ['Alexandria', 'sans-serif']
			},
		},
	},
	plugins: [],
}
