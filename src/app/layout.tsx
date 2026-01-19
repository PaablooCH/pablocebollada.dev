import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { home as config } from "./resources/config";

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
    metadataBase: new URL(`https://${config.baseUrl}`),
    title: config.title,
    description: config.description,
    authors: [config.author],
    creator: me.GetFullName(),
    keywords: config.keywords,
    openGraph: {
        title: config.title,
        description: config.description,
        url: `https://${config.baseUrl}`,
        siteName: config.title,
        images: [
            {
                url: "/og-image.png",
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta name="color-scheme" content="light dark"></meta>

            <body className={`${jetbrains.variable} ${inter.variable} antialiased flex flex-col overflow-x-hidden scroll-smooth bg-black`}>
                <NavBar />
                <MyAnimatePresence>
                    <main className="grow">
                        {children}
                        <Analytics />
                    </main>
                </MyAnimatePresence>                
            </body>
        </html>
    );
}
