import type { Metadata } from "next";
import { EB_Garamond } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

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
        className={`${garamond.className}`}
      >
        {children}
      </body>
    </html>
  );
}
