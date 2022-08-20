/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				128: '32rem',
			},
			minWidth: {
				128: '32rem',
			},
			maxWidth: {
				screen: '100vw',
			},
			maxHeight: {
				'1/2-screen': '50vh',
			},
		},
	},
	plugins: [],
}
