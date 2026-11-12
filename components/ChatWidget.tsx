"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Message = { role: "user" | "assistant"; content: string; failed?: boolean };

const MAX_INPUT_CHARS = 600; // keep in sync with MAX_USER_CHARS in app/api/chat/route.ts

// Turns **bold**, URLs and email addresses in the model's plain-text answer into elements.
function renderText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*\n]+\*\*|https?:\/\/[^\s<>()]+|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const isUrl = /^https?:\/\//.test(part);
    if (isUrl || /^[\w.+-]+@[\w-]+(?:\.[\w-]+)+$/.test(part)) {
      // Sentence punctuation right after a link belongs to the sentence, not the link.
      const trailing = part.match(/[.,;:!?]+$/)?.[0] ?? "";
      const target = trailing ? part.slice(0, -trailing.length) : part;
      return (
        <span key={i}>
          <a
            href={isUrl ? target : `mailto:${target}`}
            {...(isUrl && { target: "_blank", rel: "noopener noreferrer" })}
            className="text-accent underline underline-offset-2 break-all hover:opacity-80"
          >
            {target.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
          {trailing}
        </span>
      );
    }
    return part;
  });
}

export default function ChatWidget({ lang, t }: { lang: Locale; t: Dictionary["chat"] }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Keep the newest message in view.
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(question: string) {
    const text = question.trim();
    if (!text || busy) return;

    // Failed turns are shown to the visitor but not sent back to the model.
    const history = [...messages.filter((m) => !m.failed), { role: "user" as const, content: text }];
    setMessages([...messages, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const setAnswer = (update: (current: Message) => Message) =>
      setMessages((all) => [...all.slice(0, -1), update(all[all.length - 1])]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, messages: history.map(({ role, content }) => ({ role, content })) }),
      });
      const data: { answer?: string } | null = await response.json().catch(() => null);
      if (!response.ok || !data?.answer) {
        setAnswer(() => ({
          role: "assistant",
          content: response.status === 429 ? t.rateLimit : t.error,
          failed: true,
        }));
        return;
      }
      // The whole answer arrives at once and replaces the "Thinking…" placeholder.
      setAnswer(() => ({ role: "assistant", content: data.answer as string }));
    } catch {
      setAnswer(() => ({ role: "assistant", content: t.error, failed: true }));
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    send(input);
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label={t.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex flex-col w-[min(24rem,calc(100vw-2rem))] h-[min(34rem,calc(100dvh-7rem))] bg-surface-elevated border border-structural rounded-2xl shadow-2xl overflow-hidden"
          >
            <header className="flex items-center justify-between gap-4 px-5 py-4 border-b border-structural">
              <div className="min-w-0">
                <h2 className="text-base font-bold tracking-tight text-text-primary" style={{ fontFamily: "var(--font-outfit)" }}>
                  {t.title}
                </h2>
                <p className="text-[10px] font-mono uppercase tracking-widest text-text-secondary truncate">{t.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="w-9 h-9 shrink-0 rounded-full border border-structural flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </header>

            <div ref={logRef} role="log" aria-live="polite" className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
              <p className="max-w-[90%] self-start text-sm leading-relaxed text-text-secondary">{t.greeting}</p>

              {messages.map((message, i) =>
                message.role === "user" ? (
                  <p key={i} className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-accent px-4 py-2 text-sm leading-relaxed text-surface-base whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                ) : (
                  <p key={i} className="max-w-[90%] self-start rounded-2xl rounded-bl-sm bg-surface-base border border-structural px-4 py-2 text-sm leading-relaxed text-text-secondary whitespace-pre-wrap break-words">
                    {message.content ? renderText(message.content) : <span className="animate-pulse">{t.thinking}</span>}
                  </p>
                ),
              )}

              {messages.length === 0 && (
                <div className="mt-auto flex flex-col items-start gap-2">
                  {t.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => send(suggestion)}
                      className="rounded-full border border-structural px-4 py-2 text-left text-xs text-text-primary hover:border-accent hover:text-accent transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="border-t border-structural p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  maxLength={MAX_INPUT_CHARS}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  autoComplete="off"
                  className="flex-1 min-w-0 rounded-full bg-surface-base border border-structural px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label={t.send}
                  className="w-10 h-10 shrink-0 rounded-full bg-accent text-surface-base flex items-center justify-center transition-opacity disabled:opacity-40"
                >
                  <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-text-secondary">{t.disclaimer}</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? t.close : t.open}
        className="h-14 rounded-full bg-accent text-surface-base shadow-2xl flex items-center gap-3 px-5 font-mono text-xs font-bold uppercase tracking-widest hover:brightness-110 transition"
      >
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-comment-dots"} text-base`} aria-hidden="true"></i>
        {!open && <span className="hidden sm:inline">{t.open}</span>}
      </button>
    </div>
  );
}
