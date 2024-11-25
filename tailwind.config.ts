import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          default: "#29C3C3",
          dark: "#104D4D",
          ligth: "#33F6F6",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
