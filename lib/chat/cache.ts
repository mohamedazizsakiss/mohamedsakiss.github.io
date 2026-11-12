// lib/chat/cache.ts
// Semantic answer cache. A question is turned into an embedding vector; if a previously answered
// question in the same language is at least SIMILARITY_THRESHOLD similar (cosine), its answer is
// reused and the chat model is not called.
//
// Held in memory: on serverless hosting each instance has its own cache and it empties on a cold
// start or deploy. That also means a deploy with new portfolio content never serves stale answers.

import type { Locale } from "@/i18n/config";

const BASE_URL = process.env.OPENROUTER_BASE_URL ?? "https://openrouter.ai/api/v1";
// Chosen by measurement: at 0.90 it matched every paraphrase pair tested (0.93 to 0.96) and kept
// different questions well apart (0.48 to 0.77), e.g. "tell me about ErgoFit" vs "...JobPilot".
// If you change the model, re-check the threshold: similarity scales differ between models.
const EMBEDDING_MODEL = process.env.OPENROUTER_EMBEDDING_MODEL ?? "qwen/qwen3-embedding-8b";
const SIMILARITY_THRESHOLD = Number(process.env.CHAT_CACHE_THRESHOLD ?? 0.9);

const MAX_ENTRIES = 300;
const TTL_MS = 24 * 60 * 60_000;
const EMBEDDING_TIMEOUT_MS = 4_000;

type Entry = { lang: Locale; question: string; vector: Float32Array; answer: string; at: number };
const entries: Entry[] = [];

// "Tell me about ErgoFit " and "tell me about ergofit" should be the same question.
export function normalizeQuestion(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

// Unit-length vectors make cosine similarity a plain dot product.
function toUnitVector(values: number[]): Float32Array {
  const vector = Float32Array.from(values);
  const length = Math.hypot(...vector) || 1;
  return vector.map((v) => v / length);
}

function dot(a: Float32Array, b: Float32Array): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

function dropExpired(now: number) {
  while (entries.length && now - entries[0].at > TTL_MS) entries.shift();
}

// Returns null when the embedding call fails; the caller then just skips the cache.
async function embed(question: string, apiKey: string): Promise<Float32Array | null> {
  try {
    const response = await fetch(`${BASE_URL}/embeddings`, {
      method: "POST",
      signal: AbortSignal.timeout(EMBEDDING_TIMEOUT_MS),
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: EMBEDDING_MODEL, input: question }),
    });
    const values = (await response.json())?.data?.[0]?.embedding;
    if (!response.ok || !Array.isArray(values)) throw new Error(`embedding request failed (${response.status})`);
    return toUnitVector(values);
  } catch (error) {
    console.error("[chat cache]", error);
    return null;
  }
}

export type CacheLookup = {
  answer: string | null;
  similarity: number; // best match found, 0 when nothing was compared
  // Call with the model's answer after a miss to remember it. No-op if the question couldn't be embedded.
  store: (answer: string) => void;
};

export async function lookupAnswer(rawQuestion: string, lang: Locale, apiKey: string): Promise<CacheLookup> {
  const question = normalizeQuestion(rawQuestion);
  const now = Date.now();
  dropExpired(now);
  const candidates = entries.filter((entry) => entry.lang === lang);

  // Identical wording (the suggested-question buttons, mostly): no embedding call needed.
  const exact = candidates.find((entry) => entry.question === question);
  if (exact) return { answer: exact.answer, similarity: 1, store: () => {} };

  const vector = await embed(question, apiKey);
  if (!vector) return { answer: null, similarity: 0, store: () => {} };

  let best: Entry | null = null;
  let similarity = 0;
  for (const entry of candidates) {
    const score = entry.vector.length === vector.length ? dot(entry.vector, vector) : 0;
    if (score > similarity) {
      similarity = score;
      best = entry;
    }
  }
  if (best && similarity >= SIMILARITY_THRESHOLD) return { answer: best.answer, similarity, store: () => {} };

  return {
    answer: null,
    similarity,
    store: (answer) => {
      entries.push({ lang, question, vector, answer, at: Date.now() });
      if (entries.length > MAX_ENTRIES) entries.shift();
    },
  };
}
