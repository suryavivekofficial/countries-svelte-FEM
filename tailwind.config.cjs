/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			white: 'hsl(0, 0%, 100%)',
			darkBlue: '#3B4D5E',
			darkBlueBg: 'hsl(207, 26%, 17%)',
			darkBlueText: 'hsl(200, 15%, 8%)',
			darkGray: 'hsl(0, 0%, 52%)',
			lightGray: 'hsl(0, 0%, 98%)'
		}
	},
	plugins: []
};
