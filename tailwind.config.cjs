/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			darkBlue: 'hsl(209, 23 %, 22 %)',
			darkBlueBg: 'hsl(207, 26%, 17%)',
			darkBlueText: 'hsl(200, 15%, 8%)',
			darkGray: 'hsl(0, 0%, 52%)',
			lightGray: 'hsl(0, 0%, 98%)',
			white: 'hsl(0, 0%, 100%)'
		}
	},
	plugins: []
};
