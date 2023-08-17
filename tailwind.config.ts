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
        text: "#0f1315",
        background: "#f7fdf9",
        primary: "#22c55e",
        secondary: "#cdfedf",
        accent: "#39935a",
        neutral: {
          100: "#D6DCD8",
          200: "#B5BAB8",
          300: "#949997",
          400: "#727777",
          500: "#515656",
          600: "#303436",
        },
      },
      backgroundImage: {
        "spider-man": "url('/products-images/spider-man.png')",
      },
    },
  },
  plugins: [],
};
export default config;
