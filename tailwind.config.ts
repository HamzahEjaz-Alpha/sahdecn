import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./Views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			primaryText: "#A3A3A3", 
		  },
		  fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui']
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
