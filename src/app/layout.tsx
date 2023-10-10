import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarTop from "./tools/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel99 - Bem Vindo",
  description: "Transformando sonhos em pixels!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-custom-background`}>
        <NavbarTop />
        {children}
      </body>
    </html>
  );
}
