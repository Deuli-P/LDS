import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "../components/HOC/Header";
import Footer from "../components/HOC/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SignsConnect",
  description: "Application de traduction de langue des signes française",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        <Header />

        <main className="flex flex-col items-center">
          {children}
        </main>
        
        <Footer />

      </body>
    </html>
  );
}
