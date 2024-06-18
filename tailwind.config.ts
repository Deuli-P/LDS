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
      'foreground': {
        "light":'#C9D9EF', //'#C9D9EF'
        "dark": "#8AB2DB", 
       }, 
      'primary':{
        'light': 'rgb(238, 139, 17)', //'#080D1B'
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
      'btnSecondary':{
        "light":"#A9B9CF",
        "dark":"#2F3F54",
      },
      'shadow':"#3C3939",
      'blanc': '#F4F4F4',
      'black': '#1E1F23',
      'gris':"#C0C5CD",
      'bleu': '#00A3E9',
      'rouge':'#7E0E0E',
      'vert':"#1EB937",
      'error':"#DD8383",
      "input": "#C9D4F0",
      "conversation": "#00A3E9",
      'lightBlue': '#7FC7D9',
      'lightpurple': 'rgb(146, 128, 255)', //'#8E80F3'
    },
  },
  plugins: [],
};
export default config;