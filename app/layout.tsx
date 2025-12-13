import type { Metadata } from "next";
import { Inter , IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";
import { Variable, Weight } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const iBM_Plex_Serif = IBM_Plex_Serif({
  weight:['400','700'],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Bajaj Bank",
  description: "Bajaj Bank Customer Portal",
  icons: {icon:'/logo.png'}
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${iBM_Plex_Serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
