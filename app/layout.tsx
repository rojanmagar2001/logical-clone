"use client";
import "./globals.css";
import type { Metadata } from "next";
import { ParallaxProvider } from "react-scroll-parallax";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "logical.so",
  description: "Build Better Backends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
