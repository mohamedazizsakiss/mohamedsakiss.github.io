// knowledge/profile.ts
// Facts the chat assistant may state about Aziz that are not already in data/*.ts or the dictionaries.
// Taken from the resume (public/mohamed_aziz_resume.pdf). Edit this file to change what the assistant knows:
// it only ever repeats what is written here and in the site data, so keep it accurate.

import { SITE_URL } from "@/i18n/config";

export const profile = {
  name: "Mohamed Aziz Sakiss",
  title: "AI Engineer",
  location: "Sousse, Tunisia",
  summary:
    "AI engineer who ships full products, not just models: architecture, backend, and deployment included. " +
    "Built ErgoFit's real-time posture-coaching pipeline end-to-end (98% detection accuracy) and took it live; " +
    "currently building JobPilot, an autonomous job-application agent. Comfortable moving across computer vision, " +
    "LLMs/RAG, and the infrastructure that gets them into production.",
  availability: "Open to full-time AI Engineering and Data Science roles.",
  education: [
    {
      school: "EPI International Multidisciplinary School",
      degree: "Engineering Degree in Artificial Intelligence & Data Science",
      location: "Sousse, Tunisia",
      start: "2021-09",
      end: "2026-09",
    },
  ],
  skills: {
    "Generative AI & LLMs": [
      "LLMs", "LangGraph", "Agents", "RAG", "Prompt Engineering", "Embeddings", "LangChain", "Hallucination Analysis",
    ],
    "Machine Learning": [
      "Transformers", "CNNs", "Scikit-Learn", "XGBoost", "Random Forest", "TensorFlow/Keras", "PyTorch",
    ],
    "Computer Vision": [
      "YOLO (v8/v11)", "OpenCV", "MediaPipe", "ResNet", "Image Classification", "SAHI", "Object Detection",
    ],
    "Backend, MLOps & Systems": [
      "FastAPI", "Node.js", "PostgreSQL", "Apache Spark (PySpark)", "Docker", "CI/CD", "GitHub Actions", "Git",
      "Streamlit", "Blockchain",
    ],
    "Web & Infrastructure": [
      "Next.js", "React", "Tailwind CSS", "Vercel (Edge Network)", "DNS Management", "Google Tag Manager",
      "Technical SEO",
    ],
    Programming: ["Python", "C++", "JavaScript/TypeScript", "Bash", "SQL"],
  },
  spokenLanguages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Professional" },
    { language: "French", level: "Professional" },
    { language: "German", level: "B2 (ÖSD certificate)" },
  ],
};

// Work that the resume lists under experience but the site shows as a project.
export const freelanceWork = [
  {
    role: "Freelance Full-Stack & Infrastructure Engineer",
    client: "Clés Auto + (client project)",
    location: "Remote, Quebec, Canada",
    start: "2026-10",
    end: "2026-11",
    note: "Details are in the projects list under Clés Auto +.",
  },
];

// Project timelines from the resume, keyed by the project id used in data/projects.ts.
export const projectDates: Record<string, { start: string; end: string | null }> = {
  jobpilot: { start: "2026-08", end: null },
  "brain-tumor": { start: "2025-11", end: "2026-01" },
  "genai-agent": { start: "2025-11", end: "2025-12" },
};

export const contact = {
  email: "contact@mohamedsakiss.me",
  linkedin: "https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319",
  github: "https://github.com/mohamedazizsakiss",
  website: SITE_URL,
  resumePdf: `${SITE_URL}/mohamed_aziz_resume.pdf`,
};
