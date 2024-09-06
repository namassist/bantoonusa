import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import "../styles/typography.css";

const inter = Inter({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sourcesans",
});

export const metadata: Metadata = {
  title: "Bantoonusa",
  description:
    "Solusi website Nusantara yang terarah, responsif, dan menjadikan pengguna sebagai fokus utama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSans.variable} font-primary-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
