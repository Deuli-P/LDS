import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'rgb(240, 240, 240)',
      'black': 'rgb(5, 5, 5)',
      'purple': 'rgb(15, 16, 53)',
      'yellow': 'rgb(251, 168, 52)',
      'lightBlue': 'rgb(127, 199, 217)',
      'lightGrey': 'rgb(192, 197, 205)',
      'red': 'rgb(199, 18, 18)',
    },
  },
  plugins: [],
};
export default config;
