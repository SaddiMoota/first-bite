"use client"

import { Lora, Inter } from "next/font/google";
import './globals.css';
import { usePathname } from 'next/navigation';
import { CartProvider } from './context/CartContext';
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} font-inter antialiased`}>
        <CartProvider>
          {!isAuthPage && <Navbar />}
          {children}
          {!isAuthPage && <Footer />}
        </CartProvider>
      </body>
    </html>
  )
}
