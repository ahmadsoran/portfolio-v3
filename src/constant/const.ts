import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const poppinsFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: true,
  style: ['normal', 'italic'],
  // fallback to system fonts if the font is not available apple system, segoe ui, roboto, noto sans, sans-serif
  fallback: ['-apple-system', 'Segoe UI', 'Roboto', 'Noto Sans', 'sans-serif'],
  subsets: ['latin'],
});

const tuskerMid = localFont({
  src: [
    {
      path: '../../public/assets/fonts/tg-mid.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
});

export const fonts = { poppinsFont, tuskerMid };

export const NavigationLinks = [
  {
    link: '/#about',
    text: 'Works',
  },
  {
    link: '/#skills-section',
    text: 'Skills',
  },
  {
    link: '/#service',
    text: 'Service',
  },
  {
    link: '/#contact',
    text: 'Contact',
  },
] as const;
