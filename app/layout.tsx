import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "HR Labs — People, Process & Performance",
  description:
    "India's trusted HR consulting firm. 18+ years turning startups into high-performance businesses through people management, process architecture, and performance systems.",
  keywords: "HR consulting India, people management, process architecture, performance systems, HR Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-base antialiased">{children}</body>
    </html>
  );
}
