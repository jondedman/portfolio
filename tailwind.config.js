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
			perspective: {
				none: "none",
				"1000": "1000px",
			},
			rotate: {
				"0": "0",
				"45": "45deg",
				"90": "90deg",
				"135": "135deg",
				"180": "180deg",
				"270": "270deg",
				"360": "360deg",
			},
			backfaceVisibility: {
				hidden: "hidden",
			},
			transformStyle: {
				preserve: "preserve-3d",
			},
		},
	},
	variants: {
		extend: {
			scale: ["active"],
			boxShadow: ["active"],
			transform: ["hover", "focus"],
			transformStyle: ["hover", "focus"],
		},
	},
	plugins: [],
};
