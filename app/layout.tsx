import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import DeerAnimation from "@/components/DeerAnimation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Haven Restoration",
  description: "Documenting our home restoration journey - from hardwood floors to rooftops, follow along as we restore Gabriel Haven to its former glory.",
  keywords: ["home restoration", "renovation", "DIY", "home improvement", "Gabriel Haven"],
  openGraph: {
    title: "Gabriel Haven Restoration",
    description: "Documenting our home restoration journey",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DeerAnimation />
        {children}
      </body>
    </html>
  );
}
