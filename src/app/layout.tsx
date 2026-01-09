import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { Analytics } from "@vercel/analytics/next"

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: "πPablo",
    description: "This is πPablo's personal Website",
    authors: [{url: "https://github.com/PaablooCH", name: "Pablo Cebollada"}],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <meta name="color-scheme" content="light dark"></meta>
            <body className={`${jetbrains.variable} ${inter.variable} antialiased flex flex-col overflow-x-hidden scroll-smooth bg-black`}>
                <NavBar></NavBar>
                <main className="grow">
                    {children}
                    <Analytics />
                </main>
            </body>
        </html>
    );
}
