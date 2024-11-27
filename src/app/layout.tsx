'use client';

import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Header, Footer } from '@/components/layout';
import { FONTS } from '@/configurations';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/images/bunny-logo.png" />
            </head>
            <body className={`${FONTS.alpha.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <main className="relative w-svw flex flex-col items-center justify-center">
                        <Header />
                        {children}
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
