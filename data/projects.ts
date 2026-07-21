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
    id: "tt-posture",
    title: "Ergonomics Monitoring AI Platform",
    category: " Professional Internship (Tunisie Telecom)",
    description: "Actively engineering an end-to-end computer vision platform to monitor employee posture and workplace ergonomics. Architecture leverages MediaPipe for high-performance, real-time pose estimation.",
    tech: ["MediaPipe", "Computer Vision", "Python", "Deep Learning"],
    featured: false,
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