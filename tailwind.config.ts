import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['var(--roboto)'],
        chopin: ['var(--chopin)'],
        munday: ['var(--munday)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'primary':'#EE8B11',
      'primaryAccent':"#202981",
      'secondary':"#244C75",
      'secondaryAccent':"#F7A834",
      'accent':"#3717EE",
      'shadow':"#3C3939",
      'noir':"#1E1F23",
      'blanc':"#F4F4F4",
      'gris':"#D9D9D9",
      'rouge':'#7E0E0E',
      'background':"#E4E9F7",
      'foreground':"#C9D9EF",
      'error':"#DD8383",
      'valid':"#1EB937",
      "input": "#C9D4F0",
      "conversation": "#00A3E9",
      "texte-light" : "#0C1A27",
      "texte-dark" : "#D8E6F3"
    },
  },
  plugins: [],
};
export default config;
