import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import Nav from "@/app/components/Tabs/Nav";

const dirtylineFont = localFont({
    src: [
        {
            path: "../public/fonts/Dirtyline 36daysoftype 2022.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Dirtyline 36daysoftype 2022.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Dirtyline 36daysoftype 2022.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-dirtyline",
    display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} ${dirtylineFont.variable} antialiased`}>
    {/* Background for all pages */}
    <AnimatedBackground/>

    {/* NAV */}
    <Nav/>

    {children}
    </body>
    </html>
  );
}
