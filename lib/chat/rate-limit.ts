// lib/chat/rate-limit.ts
// Best-effort per-IP limiter held in memory. On serverless hosting each instance has its own copy,
// so this slows down casual abuse but is not a hard guarantee: the credit limit on the OpenRouter
// key is the real spending cap.

const WINDOWS = [
  { ms: 60_000, max: 8 }, // per minute
  { ms: 24 * 60 * 60_000, max: 60 }, // per day
];
const LONGEST = Math.max(...WINDOWS.map((w) => w.ms));
const MAX_TRACKED_IPS = 5_000;

const hits = new Map<string, number[]>();

export function allowRequest(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < LONGEST);
  const allowed = WINDOWS.every((w) => recent.filter((t) => now - t < w.ms).length < w.max);
  if (allowed) recent.push(now);

  // Re-insert so the Map stays ordered by last activity, then drop the stalest IPs if it grows too big.
  hits.delete(ip);
  hits.set(ip, recent);
  while (hits.size > MAX_TRACKED_IPS) hits.delete(hits.keys().next().value as string);

  return allowed;
}
