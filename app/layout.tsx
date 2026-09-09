import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './sections.css';
import './refinements.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wrkstream.com'),
  title: 'WRKSTREAM — Product + Venture Studio',
  description: 'We build businesses. Sometimes they’re ours. Sometimes they’re yours.',
  openGraph: {
    title: 'WRKSTREAM — Product + Venture Studio',
    description: 'We build businesses. Sometimes they’re ours. Sometimes they’re yours.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'WRKSTREAM — We build businesses.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WRKSTREAM — Product + Venture Studio',
    description: 'We build businesses. Sometimes they’re ours. Sometimes they’re yours.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
