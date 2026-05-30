import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { MarketingNav } from "@/components/marketing/nav";
import { MarketingFooter } from "@/components/marketing/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taiyoml.com"),
  title: {
    default: "TaiyoML — Cross-border go-to-market",
    template: "%s · TaiyoML",
  },
  description:
    "TaiyoML does cross-border go-to-market. We source partners and capital, structure joint ventures or distribution where the deal calls for it, and stand up the leadership team that runs whatever we set up. Across India, Southeast Asia, and the Americas.",
  openGraph: {
    title: "TaiyoML — Cross-border go-to-market",
    description:
      "Cross-border go-to-market for technology that crosses oceans. India, Southeast Asia, the Americas.",
    url: "https://taiyoml.com",
    siteName: "TaiyoML",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaiyoML — Cross-border go-to-market",
    description:
      "Cross-border go-to-market for technology that crosses oceans.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper-50 text-paper-900">
        <SmoothScroll>
          <MarketingNav />
          <main className="flex-1">{children}</main>
          <MarketingFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
