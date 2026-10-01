import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnimatedBackground from "@/app/components/layout/AnimatedBackground";
import HomeMark from "@/app/components/layout/HomeMark";
import Nav from "@/app/components/layout/Nav";
import Providers from "@/app/components/layout/Providers";
import { getDictionary } from "@/app/i18n/dictionaries";
import { getLocale } from "@/app/i18n/server";

const dirtyline = localFont({
    src: [
        { path: "../public/fonts/Dirtyline 36daysoftype 2022.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/Dirtyline 36daysoftype 2022.woff", weight: "400", style: "normal" },
    ],
    variable: "--font-dirtyline",
    display: "swap",
});

const nohemi = localFont({
    src: [
        { path: "../public/fonts/Nohemi-Thin.woff2", weight: "100", style: "normal" },
        { path: "../public/fonts/Nohemi-Regular.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/Nohemi-Bold.woff2", weight: "700", style: "normal" },
        { path: "../public/fonts/Nohemi-ExtraBold.woff2", weight: "800", style: "normal" },
    ],
    variable: "--font-nohemi",
    display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
    const { meta } = getDictionary(await getLocale());
    return { title: meta.title, description: meta.description };
}

export const viewport: Viewport = {
    themeColor: "#0A0A0A",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <body className={`${dirtyline.variable} ${nohemi.variable} antialiased`}>
                <Providers locale={locale}>
                    <AnimatedBackground />
                    <main>{children}</main>
                    <Nav />
                    <HomeMark />
                </Providers>
            </body>
        </html>
    );
}
