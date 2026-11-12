// lib/chat/tools.ts
// The assistant's retrieval layer. Each tool reads the same files the site renders, so answers
// can't drift from what the portfolio shows. Server-only: imported by app/api/chat/route.ts.

import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { SITE_URL, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { contact, freelanceWork, profile, projectDates } from "@/knowledge/profile";

// Dictionary bullets mark key results with **asterisks** for the UI; the model doesn't need them.
const plain = (text: string) => text.replace(/\*\*/g, "");

const noArgs = { type: "object", properties: {}, additionalProperties: false } as const;

// OpenAI-style function definitions, the format OpenRouter expects.
export const toolDefinitions = [
  {
    type: "function",
    function: {
      name: "get_profile",
      description:
        "Aziz's summary, location, availability for work, education, technical skills by category, and spoken languages.",
      parameters: noArgs,
    },
  },
  {
    type: "function",
    function: {
      name: "get_experience",
      description: "Aziz's work history: internships and freelance work, with company, role, location, dates and results.",
      parameters: noArgs,
    },
  },
  {
    type: "function",
    function: {
      name: "get_projects",
      description:
        "Every project in the portfolio: title, category, summary, results, tech stack, dates when known, and live/GitHub links.",
      parameters: noArgs,
    },
  },
  {
    type: "function",
    function: {
      name: "get_certifications",
      description: "Aziz's certifications: title, issuer, date and verification link.",
      parameters: noArgs,
    },
  },
  {
    type: "function",
    function: {
      name: "get_contact",
      description: "How to reach Aziz: email, LinkedIn, GitHub, website and the resume PDF link.",
      parameters: noArgs,
    },
  },
] as const;

type ToolName = (typeof toolDefinitions)[number]["function"]["name"];

const handlers: Record<ToolName, (lang: Locale) => unknown> = {
  get_profile: () => profile,

  get_experience: (lang) => {
    const t = getDictionary(lang).experience.items;
    return {
      positions: experience.map((job) => ({
        company: job.company,
        role: t[job.id].role,
        location: t[job.id].location,
        start: job.start,
        end: job.end ?? "present",
        highlights: t[job.id].highlights.map(plain),
      })),
      freelance: freelanceWork,
    };
  },

  get_projects: (lang) => {
    const t = getDictionary(lang).projects.items;
    return projects.map((project) => {
      const text = t[project.id];
      return {
        title: text.title,
        category: text.category,
        ...(text.role && { role: text.role }),
        summary: text.summary,
        highlights: text.highlights.map(plain),
        tech: project.tech,
        ...(projectDates[project.id] && {
          start: projectDates[project.id].start,
          end: projectDates[project.id].end ?? "present",
        }),
        ...(project.liveUrl && { liveUrl: project.liveUrl }),
        ...(project.githubUrl && { githubUrl: project.githubUrl }),
      };
    });
  },

  get_certifications: (lang) => {
    const titles: Record<string, string> = getDictionary(lang).credentials.titles;
    return certifications.map((cert) => ({
      title: titles[cert.id] ?? cert.title,
      issuer: cert.issuer,
      date: cert.date,
      // "#" means no public link; site-relative links need the domain to be clickable in chat.
      ...(cert.link !== "#" && { link: cert.link.startsWith("/") ? `${SITE_URL}${cert.link}` : cert.link }),
    }));
  },

  get_contact: () => contact,
};

export function runTool(name: string, lang: Locale): string {
  if (!Object.hasOwn(handlers, name)) return JSON.stringify({ error: `Unknown tool: ${name}` });
  return JSON.stringify(handlers[name as ToolName](lang));
}
