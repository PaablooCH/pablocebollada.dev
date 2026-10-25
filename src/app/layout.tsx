import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { home as config, siteUrl } from "./resources/config";
import { createPageMetadata } from "./resources/metadata";

import { Analytics } from "@vercel/analytics/next"
import { me } from "./resources/content";
import { MyAnimatePresence } from "@/libs/animatePresence";

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    ...createPageMetadata(config),
    metadataBase: new URL(siteUrl),
    authors: [config.author],
    creator: me.GetFullName(),
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    }
};

export const viewport: Viewport = {
    colorScheme: "light",
    themeColor: "#c4c5c4",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jetbrains.variable} ${inter.variable} antialiased flex flex-col overflow-x-hidden scroll-smooth background min-h-dvh`}>
                <a href="#main-content" className="skip-link">Skip to content</a>
                <NavBar />
                <MyAnimatePresence>
                    <main id="main-content" tabIndex={-1} className="grow">
                        {children}
                        {process.env.VERCEL === "1" && <Analytics />}
                    </main>
                </MyAnimatePresence>                
            </body>
        </html>
    );
}
