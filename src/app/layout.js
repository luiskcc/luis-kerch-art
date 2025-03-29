import { Geist, Geist_Mono } from "next/font/google";
import { Questrial } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

export const metadata = {
  title: "Luis Kerch 2025",
  description: "Luis Kerch 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${geistSans.variable} ${geistMono.variable} ${questrial.variable} ${jost.variable} text-black bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
