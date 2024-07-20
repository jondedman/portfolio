/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// screens: {
			// 	xs: "320px",
			// 	sm: "640px",
			// 	md: "768px",
			// 	lg: "1024px",
			// 	xl: "1280px",
			// 	"2xl": "1536px",
			// 	// ...
			// },
			boxShadow: {
				custom: "4px 4px 8px 8px #00000024",
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
			colors: {
				flippedCard: "#A4D8EB",
				seaShell: "#FFF5EE",
				shirtBlue: "#233550",
				skyBlue: "#A2E1FA",
				"monopoly-green": "#96C795",
				"background-color": "#F5EDDB",
				"banner-color": "#241A15",
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

// Ivory: #FFFFF0
// Ghost White: #F8F8FF
// Seashell: #FFF5EE
// Snow: #FFFAFA
// Linen: #FAF0E6
// Antique White: #FAEBD7
