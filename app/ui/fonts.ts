import {Inter, Lusitana} from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({subsets: ['latin']})

export const localInter = localFont({src: '/Inter.ttf', display: "swap"})

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});