import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata:Metadata ={
  title: 'Demo Next JS App',
  description: 'This is my demo nextjs app',
  keywords: ['nextjs', 'react', 'typescript'],
  authors: [{ name: 'Kishore', url: 'https://example.com' }],
  creator: 'Kishore',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col bg-background`}>
        <div className="flex min-h-full flex-col">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="container flex h-full items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">Your Logo</span>
              </Link>
              <nav className="flex items-center space-x-4">
                <Link href="/about">
                  <Button variant="ghost">About</Button>
                </Link>
                <Link href="/products-db">
                  <Button variant="ghost">Products</Button>
                </Link>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              </nav>
            </div>
          </header>

          {/* Main content with padding for header and footer */}
          <main className="flex-1 overflow-auto pt-16 pb-16">
            {children}
          </main>

          {/* Footer */}
          <footer className="fixed bottom-0 left-0 right-0 h-16 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-full items-center justify-between">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
