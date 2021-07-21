module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./helpers/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		maxWidth: {
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
