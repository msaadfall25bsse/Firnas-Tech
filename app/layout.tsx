import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/effects/ScrollProgressBar";
import ScrollObserver from "@/components/effects/ScrollObserver";
import ScrollToTop from "@/components/effects/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRNAS.TECH — Where Ideas Find Wings | Enterprise Software & AI",
  description:
    "IRNAS.TECH delivers innovative custom software engineering, AI/ML development, mobile apps, and digital transformation for global enterprises.",
  keywords: [
    "IRNAS.TECH",
    "Firnas Tech",
    "Software Development",
    "AI ML GenAI",
    "Mobile Applications",
    "Staff Augmentation",
    "Web Development",
  ],
  authors: [{ name: "IRNAS.TECH" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#05080F] text-[#F8FAFC] antialiased selection:bg-[#00E599]/30 selection:text-white">
        {/* Global Scroll Progress Tracker & Observers */}
        <ScrollProgressBar />
        <ScrollObserver />
        <ScrollToTop />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1">{children}</div>

        {/* Global Multi-Column Footer */}
        <Footer />
      </body>
    </html>
  );
}
