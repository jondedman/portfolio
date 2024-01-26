/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				custom: "5px 5px 10px #474343, -5px -5px 10px #fff",
				active: "1px 1px 1px 2px #fff8f8, -1px -1px 2px #474343",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {
			scale: ["active"],
			boxShadow: ["active"],
		},
	},
	plugins: [],
};
