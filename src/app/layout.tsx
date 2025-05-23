import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Orbitron as LogoFont } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
const orbitron = LogoFont({ subsets: ["latin"], weight: "700" });
export const metadata: Metadata = {
  title: "Welcome to Gamezone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header logoFont={orbitron} />
        {children}
        <Footer logoFont={orbitron} />
      </body>
    </html>
  );
}
