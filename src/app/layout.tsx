// Header and Footer removed for pure clone
import { Providers } from "@/providers/providers";
import { type Metadata, type Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import type React from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dpi360.com.tw"),
  title: {
    default: "宏宇工藝",
    template: `%s | 宏宇工藝`,
  },
  description: "專業完善一貫性服務的印刷設計公司",
  keywords: [
    "印刷",
    "大圖輸出",
    "品牌設計",
    "商業設計",
    "宏宇工藝",
  ],
  alternates: {
    canonical: "https://www.dpi360.com.tw/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.dpi360.com.tw/",
    siteName: "宏宇工藝",
    title: "宏宇工藝",
    description: "專業完善一貫性服務的印刷設計公司",
  },
  twitter: {
    card: "summary_large_image",
    title: "宏宇工藝",
    description: "專業完善一貫性服務的印刷設計公司",
  },
  icons: {
    icon: "/dpi360/250401_[宏宇]LOGO-27.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        {process.env.HIMETRICA_API_KEY && (
          <Script
            src="https://cdn.himetrica.com/tracker.js"
            data-api-key={process.env.HIMETRICA_API_KEY}
            strategy="afterInteractive"
          />
        )}
        <Providers>
          <div className="relative flex min-h-screen flex-col selection:bg-neutral-900 selection:text-white">
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
