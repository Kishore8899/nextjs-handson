import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LinkPage from "./(linkroutes)/link/page";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header
       style={{ padding: '1rem', backgroundColor: '#30a6bbff', marginBottom: '20px',textAlign: 'center' }}>
       <p>Header</p>
      </header>
       <LinkPage></LinkPage>
        <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
          {children}
          </div>
        <footer
          style={{ padding: '1rem', backgroundColor: '#4b4edfff', marginTop: '20px', textAlign: 'center' }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
