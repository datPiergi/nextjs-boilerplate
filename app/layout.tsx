import type { Metadata } from "next";
import { EB_Garamond } from 'next/font/google';
import { Rouge_Script } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const rougeScript = Rouge_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rouge-script',
});

const garamond = EB_Garamond({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erika e Piergi",
  description: "Sito del matrimonio di Erika e Piergi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
      </head>
      <body
        className={`${garamond.className} ${rougeScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
