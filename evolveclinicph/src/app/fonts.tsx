import localFont from 'next/font/local'

export const lexendDeca = localFont({
  src: [
    {
      path: './fonts/lexend-deca.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/lexend-deca-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lexend-deca',
})
