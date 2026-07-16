import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Fotter from "./components/shared/Fotter";
import TopBar from "./components/layouts/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naqera",
  description: "Real state management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        
        {/* 1. Make TopBar fixed at the very top */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white">
          <TopBar />
        </div>

        {/* 2. Offset the body content by the height of the TopBar */}
        {/* Adjust [117px] and [81px] if your TopBar has a different height */}
        <main className="flex-1 pt-[117px] md:pt-[81px]">
          {children}
        </main>
        
        <Fotter />
      </body>
    </html>
  );
}