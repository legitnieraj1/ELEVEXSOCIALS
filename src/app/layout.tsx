import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "ELEVEXSOCIALS - AI Tech & Social Solutions",
    template: "%s | ELEVEXSOCIALS",
  },
  description:
    "Empowering businesses with cutting-edge AI automation and social media strategies. Transform your digital presence today.",
  keywords: [
    "AI automation",
    "social media marketing",
    "digital agency",
    "web development",
    "SEO services",
    "digital transformation",
    "Bengaluru",
  ],
  openGraph: {
    type: "website",
    siteName: "ELEVEXSOCIALS",
    title: "ELEVEXSOCIALS - AI Tech & Social Solutions",
    description:
      "Empowering businesses with cutting-edge AI automation and social media strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVEXSOCIALS - AI Tech & Social Solutions",
    description:
      "Empowering businesses with cutting-edge AI automation and social media strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-background text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
