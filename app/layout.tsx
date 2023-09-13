import Header from "@/components/ui/structuralComponents/Header";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "MovieBox",
  description: "MovieApp to show different trending movies and their details",
  icons: {
    icon: "/tvlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
