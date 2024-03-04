import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ricy',
  description: 'Personal website of Ricy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
