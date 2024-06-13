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
      transparent: 'transparent',
      current: 'currentColor',
      'background': {
        'light' : 'rgb(228, 233, 247)', //'#E4E9F7'
        'dark' : 'rgb(8, 13, 27)'
      }, 
      'foreGround': 'rgb(201, 217, 239)', //'#C9D9EF'
      'primary':{
        'light': 'rgb(8, 13, 27)', //'#080D1B'
        'dark' : 'rgb(238, 139, 17)'
      }, 
      'secondary':{
        'light' : "rgb(36, 76, 117)",
        'dark' : 'rgb(138, 178, 219)',
      },
      'accent':{
        'light' : "rgb(55, 23, 238)",
        'dark' : 'rgb(153, 136, 244)'},
      "texte" : {
        'light' : "rgb(12, 26, 39)",
        'dark' : 'rgb(216, 230, 243)'
      },
      
      'shadow':"#3C3939",
      'gris':"#D9D9D9",
      'rouge':'rgb(126, 14, 14)',
      'foreground':"#C9D9EF",
      'error':"#DD8383",
      'valid':"#1EB937",
      "input": "#C9D4F0",
      "conversation": "#00A3E9",
      'white': 'rgb(240, 240, 240)',
      'black': 'rgb(5, 5, 5)',
      'lightBlue': 'rgb(138, 178, 219)', //'#8AB2DB'
      'lightpurple': 'rgb(146, 128, 255)', //'#8E80F3'
      'blue': 'rgb(50, 17, 232)', //'#3211E8'
      'red': 'rgb(126, 14, 14)', //'#7E0E0E'
    },
  },
  plugins: [],
};
export default config;
