// data/projects.ts
// Language-independent project data. Titles, summaries and bullets live in i18n/dictionaries/*.ts,
// keyed by the same `id`, so every language shows the same projects in the same order.

import type { Dictionary } from "@/i18n/dictionaries/en";

export type ProjectId = keyof Dictionary["projects"]["items"];

export type Project = {
  id: ProjectId;
  tech: string[];
  featured: boolean;
  liveUrl?: string;   // Public production URL
  githubUrl?: string; // Public source repository
  media?: string;
  mediaType?: "video";
};

export const projects: Project[] = [
  {
    id: "cles-auto-plus",
    tech: ["Next.js 16", "Tailwind CSS", "Vercel Edge", "Google Tag Manager", "DNS"],
    liveUrl: "https://clesautoplus.ca",
    featured: true,
  },
  {
    id: "jobpilot",
    tech: ["Python", "LangGraph", "FastAPI", "Whisper"],
    featured: true,
  },
  {
    id: "ergofit",
    tech: ["MediaPipe", "FastAPI", "Node.js", "Docker", "RAG", "PostgreSQL"],
    liveUrl: "https://ergofit.live",
    featured: true,
  },
  {
    id: "auto-driving",
    tech: ["YOLOv11", "SAHI", "PyTorch"],
    githubUrl: "https://github.com/mohamedazizsakiss/Autonomous-Driving-YOLOv11",
    media: "/sahi_test_result.mp4",
    mediaType: "video",
    featured: true,
  },
  {
    id: "genai-agent",
    tech: ["LLMs", "LangChain", "ERP Integration"],
    media: "/chatbot.mp4",
    mediaType: "video",
    featured: true,
  },
  {
    id: "brain-tumor",
    tech: ["TensorFlow", "Blockchain", "Streamlit", "OpenCV", "Python"],
    githubUrl: "https://github.com/mohamedazizsakiss/Brain-Tumor-Classification",
    featured: true,
  },
  {
    id: "fraud-system",
    tech: ["PySpark", "MLlib", "Big Data"],
    githubUrl: "https://github.com/mohamedazizsakiss/fraud-detection-pyspark",
    featured: false,
  },
  {
    id: "fire-detection",
    tech: ["Edge AI", "Raspberry Pi", "OpenCV"],
    githubUrl: "https://github.com/mohamedazizsakiss/Fire-Detection-IoT",
    featured: false,
  },
];
