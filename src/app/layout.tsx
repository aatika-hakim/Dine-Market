import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar'
import "./globals.css";
import Footer from "@/components/Footer";
import AppProviders from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Market",
  description: "E-commerce clothing web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppProviders>
        <Navbar />
        {children}
        <Footer/>
        </AppProviders>
        </body>
    </html>
  );
}
