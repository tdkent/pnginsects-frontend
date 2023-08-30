import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#E3F9E5",
        100: "#C1EAC5",
        200: "#A3D9A5",
        300: "#7BC47F",
        400: "#57AE5B",
        500: "#3F9142",
        600: "#2F8132",
        700: "#207227",
        800: "#0E5814",
        900: "#05400A",
      },
      neutral: {
        50: "#F7F7F7",
        100: "#E1E1E1",
        200: "#CFCFCF",
        300: "#B1B1B1",
        400: "#9E9E9E",
        500: "#7E7E7E",
        600: "#626262",
        700: "#515151",
        800: "#3B3B3B",
        900: "#222222",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        serif: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
}
export default config
