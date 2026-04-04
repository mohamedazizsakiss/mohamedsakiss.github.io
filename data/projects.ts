// data/projects.ts
export const projects = [
  {
    id: "auto-driving",
    title: "Autonomous Driving Detection",
    category: "Computer Vision",
    description: "Real-time perception system using YOLOv11m trained on BDD100K. Integrated SAHI to detect small distant objects with 84% Precision.",
    tech: ["YOLOv11", "SAHI", "PyTorch"],
    media: "/sahi_test_result.mp4",
    mediaType: "video",
    featured: true, //  the card span 2 columns
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
    category: " Professional internship (Tunisie Telecom)",
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
    title: "Brain Tumor Classification",
    category: "Medical AI",
    description: "Ensemble Deep Learning architecture combining VGG16 & ResNet50. Implemented a custom Channel Attention Mechanism to detect Glioma/Meningioma.",
    tech: ["TensorFlow", "Attention", "Medical Imaging"],
    featured: false,
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