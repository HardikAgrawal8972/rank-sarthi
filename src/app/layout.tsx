import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora-var",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-var",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rank Sarthi — Smart Exam Preparation for JEE, NEET & NDA",
    template: "%s | Rank Sarthi",
  },
  description:
    "India's premium competitive exam preparation platform. Expert-curated mock tests, AI analytics, and personalized study plans for JEE, NEET, and NDA aspirants.",
  keywords: [
    "JEE preparation",
    "NEET preparation",
    "NDA preparation",
    "mock tests",
    "competitive exam",
    "Rank Sarthi",
    "JeeRankUp",
    "NeetRankUp",
    "NDARankUp",
  ],
  authors: [{ name: "Rank Sarthi" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rank Sarthi",
    title: "Rank Sarthi — Smart Exam Preparation",
    description:
      "India's premium competitive exam preparation platform for JEE, NEET & NDA.",
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
      className={`${sora.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-navy text-white font-jakarta overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
