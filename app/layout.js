'use client';

import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {router !== '/auth' && <Navbar />}

        {children}
      </body>
    </html>
  );
}
