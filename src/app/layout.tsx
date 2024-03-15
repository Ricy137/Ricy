import type { Metadata } from 'next';
import NavBar from '@/modules/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ricy100',
  description: 'creative coding, generative art, and more',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
