/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      small: "375",
      large: "1440",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      accent: "hsl(75, 94%, 57%)",
      light: "#fff",
      primary: "hsl(0, 0%, 20%)",
      secondary: "hsl(0, 0%, 12%)",
      base: "hsl(0, 0%, 8%)",
    },
    extend: {},
  },
  plugins: [],
};
