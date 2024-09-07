/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			colors: {
				app: {
					50: "#E8EBFF",
					100: "#A7B2F2",
					200: "#858BF2",
					300: "#5C64F2",
					400: "#3D46F2",
					500: "#1B25F2",
				},
			},
		},
	},
	plugins: [],
};
