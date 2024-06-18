import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
export const roboto = localFont({
  src: [
    {
      path:'./Roboto-Light.ttf',
      weight: '300'
    },
    {
      path:'./Roboto-Regular.ttf',
      weight: '400'
    },
    {
      path: './Roboto-Black.ttf',
      weight: '900',

    }
  ],
  variable:'--roboto',
})
