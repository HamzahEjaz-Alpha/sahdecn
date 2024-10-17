import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-black font-sans">
        {children}
      </body>
    </html>
  );
}
