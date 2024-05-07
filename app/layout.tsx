import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "octa-ui/dist/style.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octa UI",
  description: "Beautiful, fast and modern React UI library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
