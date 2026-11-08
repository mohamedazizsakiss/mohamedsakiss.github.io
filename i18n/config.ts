// i18n/config.ts — supported languages and small helpers shared by server and client code.

export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

export const SITE_URL = "https://www.mohamedsakiss.me";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// English lives at "/", other languages under "/fr" and "/de".
export function localePath(lang: Locale): string {
  return lang === defaultLocale ? "/" : `/${lang}`;
}

const intlLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR", de: "de-DE" };

// "2026-03" -> "Mar 2026" / "mars 2026" / "März 2026"; "2026" stays "2026"; null -> fallback (e.g. "Present").
export function formatMonth(value: string | null, lang: Locale, fallback = ""): string {
  if (!value) return fallback;
  const [year, month] = value.split("-").map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(intlLocale[lang], { month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace(/^./, (c) => c.toUpperCase());
}
