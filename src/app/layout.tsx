import type { Metadata } from "next";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from '@next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the font weights you want to use
  variable: '--font-montserrat', // Optional: Use for CSS variables
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans`}
      >
        <AnimatePresence mode="wait">
          <Navbar />
          
          {children}
        </AnimatePresence>
        
      </body>
    </html>
  );
}
