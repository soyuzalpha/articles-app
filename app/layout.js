"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  const router = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {router !== "/auth" && <Navbar />}

        {children}
      </body>
    </html>
  );
}
