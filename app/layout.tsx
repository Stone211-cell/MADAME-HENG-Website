import type { Metadata } from "next";

import "./globals.css";
import HeadderNavbar from "@/components/NavbarLink/HeadderNavbar";
import Footerbar from "@/components/FooterLink/Footerbar";
import "@/lib/fontawesome";
import { Kanit } from "next/font/google";


const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["200", "400", "700"],
});


export const metadataBase = new URL("https:www.goggle.com");

export const metadata: Metadata = {
  title:
    "hhhhhhhhhhhhhhhhhhhhhh",
  description:
    "ั้้้hhhhhhhhhhhhhhhhhh",
  keywords: [
    "ซ่อทพ",
    "ซ่อทพ",

  ],

  icons: {
    icon: "/images/Banner/6511883982ee8.webp",
    apple: "/images/Banner/6511883982ee8.webp",
    shortcut: "/images/Banner/6511883982ee8.webp",
  },

  openGraph: {
    title:
      "รับซ่อ",
    description:
      "ช่าง ",
    url: "https:",
    type: "website",
    images: [
      {
        url: "/images/Banner/6511883982ee8.webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "รับซ่อม",
    description:
      "ช่างซ่อมประยวบริการรับ ",
    images: ["/images/Banner/6511883982ee8.webp"],
  },

  other: {
    charset: "UTF-8",
    canonical: "https:",
  },
};


// แยก export viewport ออกมาต่างหาก (Next.js แนะนำแบบนี้)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={kanit.className}>
      <body
      >
              <HeadderNavbar />
        {children}
        <Footerbar />
      </body>
    </html>
  );
}
