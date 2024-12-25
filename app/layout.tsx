import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import '@/css/globals.css';
import '@/css/twemoji.css';
import { siteMetadata } from '@/data/site-metadata';
import clsx from 'clsx';
import { ThemeProviders } from './providers';
import Header from '@/components/header';
import { Footer } from '@/components/footer';

const FONT_RUBIK = Rubik({
  variable: '--font-rubik',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${FONT_RUBIK.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className={clsx(
          'antialiased',
          'relative min-h-screen pl-[calc(100vw-100%)]',
          'flex flex-col',
          'bg-white text-neutral-900',
          'dark:bg-gray-900 dark:text-gray-100'
        )}
      >
        <ThemeProviders>
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProviders>
      </body>
    </html>
  );
}
