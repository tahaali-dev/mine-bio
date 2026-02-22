import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tahamill.com"),
  title: "A Life in Simple Words | Taha Mill Wala",
  description: "Explore the personal journey, passions, and simple life of Taha Mill Wala. A software developer and photography enthusiast from Indore.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Taha Mill Wala",
  },
  openGraph: {
    title: "Taha Mill Wala | Biodata",
    description: "I live a simple and calm life, focusing on honesty, responsibilities, and growth.",
    url: "https://tahamill.com",
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
