// English text — the source of truth. fr.ts and de.ts must match this shape exactly (checked by TypeScript).
// In highlight bullets, wrap a key result in **double asterisks** to render it in the accent colour.

export const en = {
  meta: {
    title: "Mohamed Aziz Sakiss | AI Engineer",
    description:
      "AI engineer who ships full products, not just models: computer vision, LLMs/RAG and autonomous agents, from architecture to production deployment.",
    ogAlt: "Mohamed Aziz Sakiss: AI engineer who ships full products, not just models",
    ogTagline: "AI engineer who ships full products, not just models.",
    ogTopics: "Computer Vision · LLMs & RAG · Autonomous Agents · MLOps",
  },
  nav: {
    about: "Profile",
    experience: "Experience",
    projects: "Selected Works",
    credentials: "Credentials",
    contact: "Contact",
    resume: "Resume",
    viewResume: "View Resume",
    language: "Language",
    menu: "Open menu",
  },
  hero: {
    intro: "Introduction",
    headline: "AI engineer who ships full products, not just models.",
    body: "Architecture, backend, and deployment included. Comfortable moving across computer vision, LLMs/RAG, and the infrastructure that gets them into production.",
    cta: "View Portfolio",
    email: "Email",
  },
  experience: {
    title: "Experience.",
    subtitle: "Where I've shipped AI into production for real teams.",
    present: "Present",
    items: {
      "tunisie-telecom": {
        role: "AI Engineering Intern",
        location: "Tunis, Tunisia",
        highlights: [
          "Built ErgoFit end-to-end: a real-time posture pipeline at **98%** detection accuracy.",
          "Shipped \"ErgoCoach\", a RAG assistant grounded in user history and certified ergonomic guides.",
          "Deployed the full stack myself (Node.js/FastAPI, Docker, GitHub Actions CI/CD), live in production.",
        ],
      },
      "business-scalable": {
        role: "Software Development Intern",
        location: "Remote, Switzerland",
        highlights: [
          "Built and deployed **RAG chatbots** (LangChain, Gemini/OpenAI) that cut support response time and manual ticket load.",
          "Built data pipelines connecting REST APIs to backend systems for real-time processing.",
          "Documented model performance and helped streamline the team's Docker/CI-CD deployment.",
        ],
      },
    },
  },
  projects: {
    title: "Selected Works.",
    subtitle: "A showcase of production-ready systems, ranging from embedded edge AI to distributed big data pipelines.",
    rolePrefix: "Role",
    watchDemo: "Watch Demo",
    closeDemo: "Close Demo",
    visitLive: "Visit Live Site",
    viewCode: "View Code",
    items: {
      "cles-auto-plus": {
        title: "Clés Auto +",
        category: "Client Project · Edge & Local SEO",
        role: "Full-Stack & Infrastructure Engineer",
        summary: "High-performance web platform for an emergency automotive locksmith, built around technical SEO, edge routing and conversion tracking.",
        highlights: [
          "**Zero-downtime** DNS migration from a legacy Yellow Pages/Wix setup to Vercel's Anycast edge network.",
          "Edge-level **HTTP 308** redirects replaced failing registrar redirects, preserving **100%** of the legacy domain's SEO authority.",
          "Google Tag Manager wired into the Next.js document head for Meta Ads tracking, with no hydration conflicts.",
          "Mobile-first Tailwind UI with GPU-accelerated scroll animations and PWA safe-area support.",
        ],
      },
      jobpilot: {
        title: "JobPilot",
        category: "Autonomous Agents · In Progress",
        role: "",
        summary: "An autonomous agentic SaaS that handles the job hunt end-to-end, from matching roles to interview practice.",
        highlights: [
          "Parses a resume and target job descriptions, then applies to matching roles on the user's behalf.",
          "Fully spoken mock interviews: **Whisper** listens and TTS responds, so it feels like a real interviewer.",
          "Multi-agent orchestration in **LangGraph** behind a FastAPI backend serving the dashboard.",
        ],
      },
      ergofit: {
        title: "ErgoFit",
        category: "AI Ergonomics Platform · Tunisie Telecom",
        role: "",
        summary: "Real-time posture-coaching platform, built end-to-end and deployed to production.",
        highlights: [
          "MediaPipe pose landmarks feed a Random Forest classifier for **98%** posture detection accuracy in real time.",
          "\"ErgoCoach\" hybrid RAG assistant grounds advice in each user's error history and certified ergonomic guides, preventing hallucinations.",
          "Scheduled agent reads database trends and emails each user a personalized weekly report.",
          "Node.js/FastAPI microservices, Dockerized, with CI/CD on GitHub Actions.",
        ],
      },
      "auto-driving": {
        title: "Autonomous Driving Detection",
        category: "Computer Vision",
        role: "",
        summary: "Real-time perception system for autonomous driving, trained on the BDD100K dataset.",
        highlights: [
          "Fine-tuned **YOLOv11m** on BDD100K driving scenes.",
          "SAHI slicing catches small, distant objects, reaching **84%** precision.",
        ],
      },
      "genai-agent": {
        title: "E-Commerce GenAI Agent",
        category: "Generative AI",
        role: "",
        summary: "Autonomous agent bridging a WooCommerce store and Dolibarr ERP.",
        highlights: [
          "Tool use runs **real-time SQL** inventory checks and order tracking.",
          "RAG over ERP data keeps answers grounded instead of hallucinated.",
        ],
      },
      "brain-tumor": {
        title: "NeuroChain",
        category: "Medical AI & Blockchain",
        role: "",
        summary: "Secure medical AI app that classifies brain tumors from MRI scans and anchors every prediction on a blockchain.",
        highlights: [
          "Parallel ensemble fusing **VGG16** and **ResNet50** with a Channel Attention (SE) block classifies glioma, meningioma and pituitary tumors.",
          "Each prediction and MRI hash is anchored on a blockchain ledger, so tampered records are flagged.",
          "End-to-end Streamlit workflow: upload, instant inference, automatic blockchain transaction.",
        ],
      },
      "fraud-system": {
        title: "Credit Card Fraud System",
        category: "Big Data & Security",
        role: "",
        summary: "Big-data fraud detection pipeline built on PySpark.",
        highlights: [
          "Processed **1M+** transactions with PySpark and MLlib.",
          "Custom class weighting handled heavy imbalance (8.7% fraud), reaching **98.8%** recall and **AUC > 0.99**.",
        ],
      },
      "fire-detection": {
        title: "Real-Time Fire Detection",
        category: "IoT & Embedded AI",
        role: "",
        summary: "Embedded fire-detection system running on a Raspberry Pi 4.",
        highlights: [
          "Custom CNN reaches **96%** accuracy on-device.",
          "HSV colour filtering eliminates false positives.",
        ],
      },
    },
  },
  credentials: {
    title: "Credentials.",
    subtitle: "Continuous learning and verified professional certifications.",
    verify: "Verify Credential",
    // Official certificate names stay in English; only entries listed here are translated.
    titles: {
      "german-b2": "ÖSD Zertifikat B2 (German)",
    },
  },
  contact: {
    title: "Let's Work Together.",
    body: "Currently open to full-time AI Engineering and Data Science roles. Let's discuss how I can bring value to your engineering team.",
    qrAlt: "Scan to get CV",
    scan: "Scan for digital CV",
    download: "Download PDF",
    viewSource: "View Source",
  },
  chat: {
    open: "Ask about Aziz",
    close: "Close chat",
    title: "Ask about Aziz",
    subtitle: "AI assistant · Answers from this portfolio",
    greeting: "Hi! I'm an AI assistant that knows Aziz's projects, experience and skills. What would you like to know?",
    suggestions: ["What is Aziz's tech stack?", "Tell me about ErgoFit", "Is Aziz open to work?"],
    placeholder: "Ask a question…",
    send: "Send",
    thinking: "Thinking…",
    error: "Something went wrong. Please try again, or email contact@mohamedsakiss.me.",
    rateLimit: "Too many messages. Please wait a minute and try again.",
    disclaimer: "AI-generated. Check the resume for the details that matter.",
  },
};

export type Dictionary = typeof en;
