import { Metadata } from 'next';

export const StaticMetaTags: Metadata = {
  title: 'Ahmed Soran Portfolio',
  description:
    'Ahmed Soran, a Full-Stack Developer from Kurdistan, specializing in software development with expertise in React, React Native, Next.js, Node.js, Electron.js, GoLang, MongoDB, and MySQL.',
  keywords:
    'Ahmed Soran, Full-Stack Developer, Kurdistan, software development, React, React Native, Next.js, Node.js, Electron.js, GoLang, MongoDB, MySQL',
  robots: 'index, follow',
  authors: [
    {
      name: 'Ahmed Soran',
      url: 'https://www.ahmedsoran.dev',
    },
  ],
  openGraph: {
    type: 'website',
    alternateLocale: ['en', 'ar', 'ku'],
    countryName: 'Kurdistan',
    siteName: 'Ahmed Soran Portfolio',
    description:
      'Ahmed Soran, a Full-Stack Developer from Kurdistan, specializing in software development with expertise in React, React Native, Next.js, Node.js, Electron.js, GoLang, MongoDB, and MySQL.',
    emails: ['ahmadsorann1@gmail.com'],
    images: ['https://www.ahmedsoran.dev/assets/images/a-logo.png'],
    title: 'Ahmed Soran Portfolio',
    phoneNumbers: ['+964 7705480188'],
    url: 'https://www.ahmedsoran.dev',
    determiner: 'auto',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ahmedsoran.dev',
    creator: '@ahmedsorannn',
    images: 'https://www.ahmedsoran.dev/assets/images/a-logo.png',
  },
  abstract:
    'Ahmed Soran, a Full-Stack Developer from Kurdistan, specializing in software development with expertise in React, React Native, Next.js, Node.js, Electron.js, GoLang, MongoDB, and MySQL.',
  alternates: {
    canonical: 'https://www.ahmedsoran.dev',
    languages: {
      en: 'https://www.ahmedsoran.dev',
      ar: 'https://www.ahmedsoran.dev/ar',
      ku: 'https://www.ahmedsoran.dev/ku',
    },
  },
  applicationName: 'Ahmed Soran Portfolio',
  category: 'Software Development',
  classification: 'Software Development',
  creator: 'Ahmed Soran',
  generator: 'Next.js',
  publisher: 'Ahmed Soran',
  icons: [
    {
      rel: 'icon',
      // favicon
      type: 'image/x-icon',
      url: 'https://www.ahmedsoran.dev/favicon.ico',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      // favicon
      type: 'image/png',
      url: 'https://www.ahmedsoran.dev/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      // favicon
      type: 'image/png',
      url: 'https://www.ahmedsoran.dev/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      // apple touch icon
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: 'https://www.ahmedsoran.dev/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      // android chrome icon
      rel: 'manifest',
      type: 'image/png',
      url: 'https://www.ahmedsoran.dev/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      // android chrome icon
      rel: 'manifest',
      type: 'image/png',
      url: 'https://www.ahmedsoran.dev/android-chrome-512x512.png',
      sizes: '512x512',
    },
  ],
  verification: {},
};
