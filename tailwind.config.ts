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
      boxShadow: {
        'first': '0 5px 15px -5px rgba(0, 0, 0, 0.9)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'rgb(240, 240, 240)',
      'black': 'rgb(5, 5, 5)',
      'purple': 'rgb(8, 13, 27)', //'#080D1B'
      'yellow': 'rgb(238, 139, 17)', //'#EE8B11'
      'background': 'rgb(228, 233, 247)', //'#E4E9F7'
      'foreGround': 'rgb(201, 217, 239)', //'#C9D9EF'
      'lightBlue': 'rgb(138, 178, 219)', //'#8AB2DB'
      'lightpurple': 'rgb(146, 128, 255)', //'#8E80F3'
      'blue': 'rgb(50, 17, 232)', //'#3211E8'
      'red': 'rgb(126, 14, 14)', //'#7E0E0E'
    },
  },
  plugins: [],
};
export default config;
