import type { Metadata } from 'next';
import './globals.css';
import { fonts } from '../constant/const';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/styles/theme';
import Providers from '@/components/common/provider';
import Head from 'next/head';
import { StaticMetaTags } from '@/constant/meta-tags';

export const metadata: Metadata = StaticMetaTags;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={fonts.poppinsFont.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
