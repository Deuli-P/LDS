import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'primary':'#1A1833',
      'primaryAccent':"#202981",
      'secondary':"#F2C141",
      'secondaryAccent':"#F7A834",
      'accent':"#4F7A90",
      'shadow':"#3C3939",
      'noir':"#1E1F23",
      'blanc':"#F4F4F4",
      'gris':"#D9D9D9",
      'rouge':'#7E0E0E',
      'background':"#FFFFF",
      'foreground':"#F8F2EA",
      'error':"#DD8383",
      'valid':"#1EB937",
      "input": "#C9D4F0",
      "conversation": "#00A3E9"
    },
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
  },
  plugins: [],
};
export default config;
