import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defrian Bagus Dewanta Putra | Frontend Developer",
  description:
    "Personal portfolio of Defrian Bagus Dewanta Putra, a Frontend Developer crafting modern, accessible, and user-centric web applications.",
  keywords: [
    "Defrian Bagus Dewanta Putra",
    "Frontend Developer",
    "Web Developer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Defrian Bagus Dewanta Putra" }],
  creator: "Defrian Bagus Dewanta Putra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://defrian.dev",
    title: "Defrian Bagus Dewanta Putra | Frontend Developer",
    description:
      "Frontend Developer focused on building responsive, accessible, and user-friendly web applications.",
    siteName: "Defrian.dev Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}
