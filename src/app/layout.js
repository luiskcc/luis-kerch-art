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
  title: "Luis Kerch | Artist Portfolio 2025",
  description: "Explore the artistic works of Luis Kerch, a painter who creates ethereal landscapes through light and color. View paintings, exhibitions, and biography.",
  keywords: ["Luis Kerch", "artist", "painter", "contemporary art", "exhibitions", "paintings"],
  authors: [{ name: "Luis Kerch" }],
  creator: "Luis Kerch",
  publisher: "Luis Kerch Studio",
  robots: "index, follow",
  openGraph: {
    title: "Luis Kerch | Contemporary Artist",
    description: "Explore the artistic works of Luis Kerch, a painter who creates ethereal landscapes through light and color.",
    url: "https://luiskerch.com",
    siteName: "Luis Kerch",
    images: [
      {
        url: "/hero_luis_kerch.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Kerch Artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Kerch | Contemporary Artist",
    description: "Explore the artistic works of Luis Kerch, a painter who creates ethereal landscapes through light and color.",
    images: ["/hero_luis_kerch.jpg"],
  },
  other: {
    'whatsapp-platform': 'website',
    'whatsapp-share-text': 'Check out Luis Kerch\'s beautiful artwork!',
    'whatsapp-theme-color': '#25D366',
    'whatsapp-share-title': 'Luis Kerch',
    'whatsapp-share-description': 'Explore the artistic works of Luis Kerch, a painter who creates ethereal landscapes through light and color.',
    'whatsapp-share-image': '/hero_luis_kerch.jpg',
  }
};

// Move themeColor to viewport export as per Next.js warning
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
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