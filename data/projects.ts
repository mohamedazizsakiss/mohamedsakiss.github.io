// data/projects.ts

// 1. Define the strict TypeScript interface
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  featured: boolean;
  media?: string;     // The '?' makes this optional so TS doesn't panic
  mediaType?: string; // The '?' makes this optional
};

// 2. Apply the type to the array
export const projects: Project[] = [
  {
    id: "ergofit",
    title: "ErgoFit — AI Ergonomics Platform",
    category: "Professional Internship (Tunisie Telecom)",
    description: "Real-Time Vision & ML Pipeline: Engineered ErgoFit to monitor live ergonomics, combining MediaPipe pose landmark extraction with a Random Forest classifier to achieve 98% posture detection accuracy.\n\nHybrid RAG & Hallucination Prevention: Developed \"ErgoCoach,\" an LLM assistant that fuses structured PostgreSQL data (user error patterns) with certified ergonomic PDFs to generate medically grounded advice while strictly preventing model hallucinations.\n\nAutonomous Reporting Agent: Designed a scheduled AI agent that analyzes temporal database metrics to generate and dispatch personalized weekly reports, offering actionable insights for continuous posture improvement.\n\nArchitecture & Live Deployment: Built a hybrid backend (Node.js/FastAPI), containerized microservices using Docker, and automated CI/CD pipelines via GitHub Actions to launch the platform live at ergofit.live.",
    tech: ["MediaPipe", "FastAPI", "Node.js", "Docker", "RAG", "PostgreSQL"],
    featured: true,
  },
  {
    id: "auto-driving",
    title: "Autonomous Driving Detection",
    category: "Computer Vision",
    description: "Real-time perception system using YOLOv11m trained on BDD100K. Integrated SAHI to detect small distant objects with 84% Precision.",
    tech: ["YOLOv11", "SAHI", "PyTorch"],
    media: "/sahi_test_result.mp4",
    mediaType: "video",
    featured: true,
  },
  {
    id: "genai-agent",
    title: "E-Commerce GenAI Agent",
    category: "Generative AI",
    description: "Autonomous agent bridging WooCommerce and Dolibarr ERP. Features 'Tool Use' capabilities to perform real-time SQL inventory checks.",
    tech: ["LLMs", "LangChain", "ERP Integration"],
    media: "/chatbot.mp4",
    mediaType: "video",
    featured: true, 
  },
  {
    id: "fraud-system",
    title: "Credit Card Fraud System",
    category: "Big Data & Security",
    description: "Processed 1 Million+ transactions using PySpark. Solved class imbalance (8.7% fraud) using custom class weighting, achieving AUC > 0.99.",
    tech: ["PySpark", "MLlib", "Big Data"],
    featured: false,
  },
  {
    id: "brain-tumor",
    title: "Secure Brain Tumor Classification System",
    category: "Medical AI & Blockchain",
    description: "Developed a secure medical AI application that automates the classification of Brain Tumors (Glioma, Meningioma, Pituitary). The architecture utilizes a Parallel Ensemble Model, fusing features from VGG16 and ResNet50 backbones with a custom Channel Attention (SE) block for high diagnostic accuracy.\n\nEngineered a decentralized ledger (NeuroChain) where the model's prediction and the hash of the MRI image are instantly anchored on a blockchain to prevent data tampering. Features an end-to-end Streamlit workflow for real-time image upload, instant inference, and automatic blockchain transaction generation.",
    tech: ["TensorFlow", "Blockchain", "Streamlit", "OpenCV", "Python"],
    featured: true,
  },
  {
    id: "fire-detection",
    title: "Real-Time Fire Detection",
    category: "IoT & Embedded AI",
    description: "Embedded system deployed on Raspberry Pi 4. Uses a custom CNN (96% accuracy) combined with HSV filtering to eliminate false positives.",
    tech: ["Edge AI", "Raspberry Pi", "OpenCV"],
    featured: false,
  }
];