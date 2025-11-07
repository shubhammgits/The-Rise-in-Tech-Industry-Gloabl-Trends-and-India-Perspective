import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Industry Analysis - Global Trends and Indian Perspective",
  description: "Data analysis of global technology industry trends and India's tech ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}