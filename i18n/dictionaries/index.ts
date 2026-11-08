import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { fr } from "./fr";
import { de } from "./de";

const dictionaries: Record<Locale, Dictionary> = { en, fr, de };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

export type { Dictionary };
