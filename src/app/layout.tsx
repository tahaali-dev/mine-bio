import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: "My Journey | Taha Mill Wala Biodata",
  description: "A storytelling journey of Taha Mill Wala - Software Developer, Photographer, and Fragrance Enthusiast.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Taha Mill Wala Biodata",
  },
  openGraph: {
    title: "Taha Mill Wala Biodata",
    description: "I'm building more than websites – I'm building a beautiful life together.",
    url: "https://your-domain.com",
    siteName: "Taha Mill Wala",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased bg-[#f8f9fb] text-pastel-text`}>
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
