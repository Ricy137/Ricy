import type { Metadata } from 'next';
import RyIcon from '@/assets/icons/Ry.svg';
import NavBar from '@/modules/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ricy100',
  applicationName: 'Ricy100',
  keywords: [
    'creative coding',
    'generative art',
    'animation',
    'react',
    'nextjs',
    'typescript',
    'tailwindcss',
  ],
  description: 'creative coding, generative art, and more',
  icons: RyIcon,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
