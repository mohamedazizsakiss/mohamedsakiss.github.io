// data/experience.ts

// Wrap a key result in **double asterisks** to render it in the accent colour.
export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    id: "tunisie-telecom",
    role: "AI Engineering Intern",
    company: "Tunisie Telecom",
    location: "Tunis, Tunisia",
    period: "Feb 2026 – Jul 2026",
    highlights: [
      "Built ErgoFit end-to-end: a real-time posture pipeline at **98%** detection accuracy.",
      "Shipped \"ErgoCoach\", a RAG assistant grounded in user history and certified ergonomic guides.",
      "Deployed the full stack myself (Node.js/FastAPI, Docker, GitHub Actions CI/CD), live in production.",
    ],
  },
  {
    id: "business-scalable",
    role: "Software Development Intern",
    company: "Business Scalable",
    location: "Remote, Switzerland",
    period: "Jul 2025 – Aug 2025",
    highlights: [
      "Built and deployed **RAG chatbots** (LangChain, Gemini/OpenAI) that cut support response time and manual ticket load.",
      "Built data pipelines connecting REST APIs to backend systems for real-time processing.",
      "Documented model performance and helped streamline the team's Docker/CI-CD deployment.",
    ],
  },
];
