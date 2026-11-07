import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://www.mohamedsakiss.me";
const TITLE = "Mohamed Aziz Sakiss | AI Engineer";
const DESCRIPTION =
  "AI engineer who ships full products, not just models: computer vision, LLMs/RAG and autonomous agents, from architecture to production deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Mohamed Aziz Sakiss",
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "LLM",
    "RAG",
    "LangGraph",
    "FastAPI",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Aziz Sakiss", url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mohamed Aziz Sakiss",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
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
      <body className={`${outfit.variable} ${inter.variable} ${jetbrains.variable} bg-surface-base text-text-primary selection:bg-accent selection:text-surface-base`}>
        <div className="min-h-screen flex flex-col w-full px-4 sm:px-8 lg:px-16">
          {children}
        </div>
      </body>
    </html>
  );
}