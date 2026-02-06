import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A19 Connects | Premium Marketing Solutions",
    template: "%s | A19 Connects",
  },

  description:
    "A19 News, Properties, Campaign & Digital Marketing solutions.",

  icons: {
    icon: "/Logo.jpg",
    shortcut: "/Logo.jpg",
    apple: "/Logo.jpg",
  },

  openGraph: {
    title: "A19 Connects | Premium Marketing Solutions",
    description:
      "A19 News, Properties, Campaign & Digital Marketing solutions.",
    images: [
      {
        url: "/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "A19 Connects",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
