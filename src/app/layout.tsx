import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarRoot } from "../components/Navbar";
import Providers from "./api/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Social Media",
   description: "A social media app for researchers",
   icons: {
      icon: "/icon.svg",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en' data-theme='light'>
         <body className={inter.className}>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
