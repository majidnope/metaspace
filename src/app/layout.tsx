"use client";

import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metaspace",
  description: "Social networking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
         {children}
        </SessionProvider>
      </body>
    </html>
  );
}
