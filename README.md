# Mohamed Aziz Sakiss | AI Engineering Portfolio

> **Live Site:** [mohamedsakiss.me](https://mohamedsakiss.me)

Personal portfolio website designed to showcase production-ready engineering projects across Computer Vision, Distributed Big Data, and Autonomous GenAI Agents. 

Built with a modern component-driven architecture, featuring interactive 3D WebGL elements, responsive layouts, and strict TypeScript data typing.

## 🚀 Tech Stack

* **Framework:** Next.js (React)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **3D Integration:** Spline WebGL
* **Deployment & CI/CD:** Vercel

## ✨ Architecture & Features

* **Progressive Enhancement:** Interactive 3D hero section optimized for desktop, falling back to a clean, high-performance layout on mobile devices.
* **Dynamic Data Layer:** The "Bento Box" project grid and certifications list are rendered dynamically from a strict-typed TS data structure, separating logic from UI.
* **Component Isolation:** Clean, maintainable codebase utilizing modern React components (`Hero`, `Projects`, `Certifications`, `Contact`).
* **ATS Resume Integration:** Seamless PDF download functionality built directly into the UI for hiring managers.

## 🤖 Chat Assistant

The "Ask about Aziz" widget answers visitor questions through `app/api/chat/route.ts`. The model looks facts up with tools (`lib/chat/tools.ts`) that read the same `data/*.ts` files and dictionaries the pages render, plus `knowledge/profile.ts` for resume-only facts, so it can only repeat what the site already says.

The first question of a conversation goes through a semantic cache (`lib/chat/cache.ts`): it is embedded, and if an earlier question is at least 90% similar (cosine), that answer is returned without calling the chat model. The cache lives in memory, so it resets on deploy.

It calls [OpenRouter](https://openrouter.ai) and needs one environment variable, locally in `.env` and on the host:

```bash
OPENROUTER_API_KEY=your-key   # use a dedicated key with a credit limit
OPENROUTER_MODEL=anthropic/claude-haiku-5.5            # optional, this is the default
OPENROUTER_EMBEDDING_MODEL=qwen/qwen3-embedding-8b     # optional, this is the default
CHAT_CACHE_THRESHOLD=0.9                               # optional, this is the default
```

## 💻 Local Development

To run this application locally on your machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/mohamedazizsakiss/mohamedsakiss.github.io.git](https://github.com/mohamedazizsakiss/mohamedsakiss.github.io.git)
