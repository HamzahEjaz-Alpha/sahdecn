import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ShadeCn App",
  description: "Created by Hamzah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black font-sans`}>
        {children}
      </body>
    </html>
  );
}
