import type { Metadata } from "next";
import { Bricolage_Grotesque, Albert_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Aziz Sakiss | AI Engineer",
  description: "AI & Data Science Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${bricolage.variable} ${albert.variable} ${jetbrains.variable} selection:bg-accent selection:text-white`}>
        {/* Continuous Broadsheet Wrapper */}
        <div className="min-h-screen border-l border-r border-structural mx-auto max-w-7xl flex flex-col md:flex-row">
          {children}
        </div>
      </body>
    </html>
  );
}