'use client';

import Navbar from '@/components/Navbar';
import './globals.css';
import { Bebas_Neue, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';

const inter = Inter({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const vantage = localFont({
  src: './Vantage.ttf',
  // weight: [""],
  variable: '--font-vantage',
});

export default function RootLayout({ children }) {
  const router = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas_neue.variable} ${vantage.variable} bg-gray-50`}>
        {router !== '/auth' && <Navbar />}

        {children}
      </body>
    </html>
  );
}
