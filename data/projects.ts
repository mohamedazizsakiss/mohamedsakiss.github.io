// data/projects.ts

// Wrap a key result in **double asterisks** inside `highlights` to render it in the accent colour.
export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;      // One-line pitch shown first
  highlights: string[]; // 2–4 short, result-first bullets
  tech: string[];
  featured: boolean;
  role?: string;        // Role on client engagements
  liveUrl?: string;     // Public production URL
  githubUrl?: string;   // Public source repository
  media?: string;
  mediaType?: "video";
};

export const projects: Project[] = [
  {
    id: "cles-auto-plus",
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
    tech: ["Next.js 16", "Tailwind CSS", "Vercel Edge", "Google Tag Manager", "DNS"],
    liveUrl: "https://clesautoplus.ca",
    featured: true,
  },
  {
    id: "jobpilot",
    title: "JobPilot",
    category: "Autonomous Agents · In Progress",
    summary: "An autonomous agentic SaaS that handles the job hunt end-to-end, from matching roles to interview practice.",
    highlights: [
      "Parses a resume and target job descriptions, then applies to matching roles on the user's behalf.",
      "Fully spoken mock interviews: **Whisper** listens and TTS responds, so it feels like a real interviewer.",
      "Multi-agent orchestration in **LangGraph** behind a FastAPI backend serving the dashboard.",
    ],
    tech: ["Python", "LangGraph", "FastAPI", "Whisper"],
    featured: true,
  },
  {
    id: "ergofit",
    title: "ErgoFit",
    category: "AI Ergonomics Platform · Tunisie Telecom",
    summary: "Real-time posture-coaching platform, built end-to-end and deployed to production.",
    highlights: [
      "MediaPipe pose landmarks feed a Random Forest classifier for **98%** posture detection accuracy in real time.",
      "\"ErgoCoach\" hybrid RAG assistant grounds advice in each user's error history and certified ergonomic guides, preventing hallucinations.",
      "Scheduled agent reads database trends and emails each user a personalized weekly report.",
      "Node.js/FastAPI microservices, Dockerized, with CI/CD on GitHub Actions.",
    ],
    tech: ["MediaPipe", "FastAPI", "Node.js", "Docker", "RAG", "PostgreSQL"],
    liveUrl: "https://ergofit.live",
    featured: true,
  },
  {
    id: "auto-driving",
    title: "Autonomous Driving Detection",
    category: "Computer Vision",
    summary: "Real-time perception system for autonomous driving, trained on the BDD100K dataset.",
    highlights: [
      "Fine-tuned **YOLOv11m** on BDD100K driving scenes.",
      "SAHI slicing catches small, distant objects, reaching **84%** precision.",
    ],
    tech: ["YOLOv11", "SAHI", "PyTorch"],
    githubUrl: "https://github.com/mohamedazizsakiss/Autonomous-Driving-YOLOv11",
    media: "/sahi_test_result.mp4",
    mediaType: "video",
    featured: true,
  },
  {
    id: "genai-agent",
    title: "E-Commerce GenAI Agent",
    category: "Generative AI",
    summary: "Autonomous agent bridging a WooCommerce store and Dolibarr ERP.",
    highlights: [
      "Tool use runs **real-time SQL** inventory checks and order tracking.",
      "RAG over ERP data keeps answers grounded instead of hallucinated.",
    ],
    tech: ["LLMs", "LangChain", "ERP Integration"],
    media: "/chatbot.mp4",
    mediaType: "video",
    featured: true,
  },
  {
    id: "brain-tumor",
    title: "NeuroChain",
    category: "Medical AI & Blockchain",
    summary: "Secure medical AI app that classifies brain tumors from MRI scans and anchors every prediction on a blockchain.",
    highlights: [
      "Parallel ensemble fusing **VGG16** and **ResNet50** with a Channel Attention (SE) block classifies glioma, meningioma and pituitary tumors.",
      "Each prediction and MRI hash is anchored on a blockchain ledger, so tampered records are flagged.",
      "End-to-end Streamlit workflow: upload, instant inference, automatic blockchain transaction.",
    ],
    tech: ["TensorFlow", "Blockchain", "Streamlit", "OpenCV", "Python"],
    githubUrl: "https://github.com/mohamedazizsakiss/Brain-Tumor-Classification",
    featured: true,
  },
  {
    id: "fraud-system",
    title: "Credit Card Fraud System",
    category: "Big Data & Security",
    summary: "Big-data fraud detection pipeline built on PySpark.",
    highlights: [
      "Processed **1M+** transactions with PySpark and MLlib.",
      "Custom class weighting handled heavy imbalance (8.7% fraud), reaching **98.8%** recall and **AUC > 0.99**.",
    ],
    tech: ["PySpark", "MLlib", "Big Data"],
    githubUrl: "https://github.com/mohamedazizsakiss/fraud-detection-pyspark",
    featured: false,
  },
  {
    id: "fire-detection",
    title: "Real-Time Fire Detection",
    category: "IoT & Embedded AI",
    summary: "Embedded fire-detection system running on a Raspberry Pi 4.",
    highlights: [
      "Custom CNN reaches **96%** accuracy on-device.",
      "HSV colour filtering eliminates false positives.",
    ],
    tech: ["Edge AI", "Raspberry Pi", "OpenCV"],
    githubUrl: "https://github.com/mohamedazizsakiss/Fire-Detection-IoT",
    featured: false,
  },
];
