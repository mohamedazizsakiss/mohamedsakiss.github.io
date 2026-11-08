import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { SITE_URL, hasLocale, localePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

// Pre-render /en, /fr and /de; any other first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const ogLocale = { en: "en_US", fr: "fr_FR", de: "de_DE" } as const;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  const path = localePath(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
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
    // Tell search engines the three pages are translations of each other.
    alternates: {
      canonical: path,
      languages: {
        en: localePath("en"),
        fr: localePath("fr"),
        de: localePath("de"),
        "x-default": localePath("en"),
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Mohamed Aziz Sakiss",
      title: meta.title,
      description: meta.description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className="scroll-smooth">
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
