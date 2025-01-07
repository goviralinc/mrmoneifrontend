import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-colors": "#008eba",
        steelblue: "rgba(0, 142, 186, 0.3)",
        black: "#000",
        skyblue: "#4db0cf",
        "background-dark": "#1c1c1c",
        gray: {
          "100": "#1c1b1c",
          "200": "rgba(0, 0, 0, 0.7)",
        },
        lightblue: "#b3ddea",
        whitesmoke: "#f3f3f3",
        "m3-ref-neutral-neutral20": "#313030",
      },
      spacing: {},
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        montserrat: ["Montserrat", "sans-serif"],
        libreFranklin: ["Libre-Franklin", "san-serif"]
      },
      borderRadius: {
        "29xl": "48px",
        "25xl": "40px",
        "77xl": "96px",
        "200xl": "200px",
      },
      boxShadow: {
        'custom-glow': '0px 0px 12px 0px rgba(0, 142, 186, 0.30)', // Custom shadow
      }
    },
    fontSize: {
      "40xl": "40px",
      "48xl": "48px",
      "50xl": "55px",
      "60xl": "60px",
      "70xl": "75px",
      "5xl": "24px",
      "21xl": "40px",
      "9xl": "28px",
      "29xl": "34px",
      "77xl": "88px",
      "100xl": "110px",
      "xl": "20px",
      "md": "15px",
      "xsm": "16px",
      "17xl": "25px",
      "20xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
