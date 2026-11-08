// data/experience.ts
// Language-independent job data. Role, location and bullets live in i18n/dictionaries/*.ts, keyed by `id`.
// Dates are "YYYY-MM" and get formatted per language; `end: null` means "Present".

import type { Dictionary } from "@/i18n/dictionaries/en";

export type ExperienceId = keyof Dictionary["experience"]["items"];

export type Experience = {
  id: ExperienceId;
  company: string;
  start: string;
  end: string | null;
};

export const experience: Experience[] = [
  { id: "tunisie-telecom", company: "Tunisie Telecom", start: "2026-02", end: "2026-07" },
  { id: "business-scalable", company: "Business Scalable", start: "2025-07", end: "2025-08" },
];
