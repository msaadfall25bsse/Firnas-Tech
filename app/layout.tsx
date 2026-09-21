import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05080F] text-[#F8FAFC] antialiased selection:bg-[#00E599]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
