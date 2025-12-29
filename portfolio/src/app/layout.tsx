import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import FooterBar from "@/components/footerBar";
import { ThemeProvider } from "@/libs/themeProvider";

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
            <body className={`${jetbrains.variable} ${inter.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
                <ThemeProvider>
                    <NavBar></NavBar>
                    <main className="grow">
                        {children}
                    </main>
                    {/* <FooterBar></FooterBar> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
