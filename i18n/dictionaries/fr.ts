import type { Dictionary } from "./en";

export const fr: Dictionary = {
  meta: {
    title: "Mohamed Aziz Sakiss | Ingénieur IA",
    description:
      "Ingénieur IA qui livre des produits complets, pas seulement des modèles : vision par ordinateur, LLM/RAG et agents autonomes, de l'architecture au déploiement en production.",
    ogAlt: "Mohamed Aziz Sakiss : ingénieur IA qui livre des produits complets, pas seulement des modèles",
    ogTagline: "Ingénieur IA qui livre des produits complets, pas seulement des modèles.",
    ogTopics: "Vision par ordinateur · LLM & RAG · Agents autonomes · MLOps",
  },
  nav: {
    about: "Profil",
    experience: "Expérience",
    projects: "Réalisations",
    credentials: "Certifications",
    contact: "Contact",
    resume: "CV",
    viewResume: "Voir le CV",
    language: "Langue",
    menu: "Ouvrir le menu",
  },
  hero: {
    intro: "Présentation",
    headline: "Ingénieur IA qui livre des produits complets, pas seulement des modèles.",
    body: "Architecture, backend et déploiement compris. À l'aise en vision par ordinateur, en LLM/RAG et dans l'infrastructure qui les met en production.",
    cta: "Voir le portfolio",
    email: "E-mail",
  },
  experience: {
    title: "Expérience.",
    subtitle: "Là où j'ai mis l'IA en production pour de vraies équipes.",
    present: "Aujourd'hui",
    items: {
      "tunisie-telecom": {
        role: "Stagiaire Ingénieur IA",
        location: "Tunis, Tunisie",
        highlights: [
          "Conception complète d'ErgoFit : un pipeline de détection de posture en temps réel avec **98 %** de précision.",
          "Livraison d'« ErgoCoach », un assistant RAG fondé sur l'historique de l'utilisateur et des guides ergonomiques certifiés.",
          "Déploiement de toute la stack en autonomie (Node.js/FastAPI, Docker, CI/CD GitHub Actions), en production.",
        ],
      },
      "business-scalable": {
        role: "Stagiaire Développeur Logiciel",
        location: "À distance, Suisse",
        highlights: [
          "Création et déploiement de **chatbots RAG** (LangChain, Gemini/OpenAI) qui ont réduit le temps de réponse du support et le volume de tickets manuels.",
          "Création de pipelines de données reliant des API REST aux systèmes backend pour un traitement en temps réel.",
          "Documentation des performances des modèles et optimisation du déploiement Docker/CI-CD de l'équipe.",
        ],
      },
    },
  },
  projects: {
    title: "Réalisations.",
    subtitle: "Une sélection de systèmes prêts pour la production, de l'IA embarquée aux pipelines big data distribués.",
    rolePrefix: "Rôle",
    watchDemo: "Voir la démo",
    closeDemo: "Fermer la démo",
    visitLive: "Voir le site",
    viewCode: "Voir le code",
    items: {
      "cles-auto-plus": {
        title: "Clés Auto +",
        category: "Projet client · Edge & SEO local",
        role: "Ingénieur Full-Stack & Infrastructure",
        summary: "Plateforme web haute performance pour un serrurier automobile d'urgence, centrée sur le SEO technique, le routage edge et le suivi des conversions.",
        highlights: [
          "Migration DNS **sans interruption** d'une infrastructure Pages Jaunes/Wix vers le réseau edge Anycast de Vercel.",
          "Des redirections **HTTP 308** au niveau edge ont remplacé les redirections défaillantes du registraire, préservant **100 %** de l'autorité SEO de l'ancien domaine.",
          "Google Tag Manager intégré dans le head du document Next.js pour le suivi Meta Ads, sans conflit d'hydratation.",
          "Interface Tailwind pensée mobile d'abord, avec animations au défilement accélérées par GPU et prise en charge des zones sûres PWA.",
        ],
      },
      jobpilot: {
        title: "JobPilot",
        category: "Agents autonomes · En cours",
        role: "",
        summary: "Un SaaS agentique autonome qui gère toute la recherche d'emploi, de la sélection des offres à l'entraînement aux entretiens.",
        highlights: [
          "Analyse un CV et les offres ciblées, puis postule aux offres correspondantes au nom de l'utilisateur.",
          "Entretiens blancs entièrement vocaux : **Whisper** écoute et la synthèse vocale répond, comme face à un vrai recruteur.",
          "Orchestration multi-agents avec **LangGraph** derrière un backend FastAPI qui alimente le tableau de bord.",
        ],
      },
      ergofit: {
        title: "ErgoFit",
        category: "Plateforme d'ergonomie IA · Tunisie Telecom",
        role: "",
        summary: "Plateforme de coaching postural en temps réel, conçue de bout en bout et déployée en production.",
        highlights: [
          "Les points clés de MediaPipe alimentent un classifieur Random Forest : **98 %** de précision de détection de posture en temps réel.",
          "« ErgoCoach », assistant RAG hybride, fonde ses conseils sur l'historique d'erreurs de chaque utilisateur et des guides ergonomiques certifiés, sans hallucination.",
          "Un agent planifié analyse les tendances de la base de données et envoie à chaque utilisateur un rapport hebdomadaire personnalisé.",
          "Microservices Node.js/FastAPI conteneurisés avec Docker, CI/CD sur GitHub Actions.",
        ],
      },
      "auto-driving": {
        title: "Détection pour la conduite autonome",
        category: "Vision par ordinateur",
        role: "",
        summary: "Système de perception en temps réel pour la conduite autonome, entraîné sur le jeu de données BDD100K.",
        highlights: [
          "Fine-tuning de **YOLOv11m** sur des scènes de conduite BDD100K.",
          "Le découpage SAHI détecte les petits objets lointains, avec **84 %** de précision.",
        ],
      },
      "genai-agent": {
        title: "Agent IA générative e-commerce",
        category: "IA générative",
        role: "",
        summary: "Agent autonome reliant une boutique WooCommerce à l'ERP Dolibarr.",
        highlights: [
          "L'appel d'outils exécute des vérifications de stock en **SQL temps réel** et le suivi des commandes.",
          "Le RAG sur les données de l'ERP garantit des réponses fondées, sans hallucination.",
        ],
      },
      "brain-tumor": {
        title: "NeuroChain",
        category: "IA médicale & blockchain",
        role: "",
        summary: "Application d'IA médicale sécurisée qui classifie les tumeurs cérébrales à partir d'IRM et ancre chaque prédiction sur une blockchain.",
        highlights: [
          "Un ensemble parallèle fusionnant **VGG16** et **ResNet50** avec un bloc d'attention par canal (SE) classe gliomes, méningiomes et tumeurs hypophysaires.",
          "Chaque prédiction et l'empreinte de l'IRM sont ancrées sur une blockchain : tout dossier modifié est signalé.",
          "Parcours Streamlit complet : import, inférence instantanée, transaction blockchain automatique.",
        ],
      },
      "fraud-system": {
        title: "Détection de fraude bancaire",
        category: "Big data & sécurité",
        role: "",
        summary: "Pipeline big data de détection de fraude construit sur PySpark.",
        highlights: [
          "Traitement de **1M+** transactions avec PySpark et MLlib.",
          "Une pondération des classes sur mesure gère le fort déséquilibre (8,7 % de fraude) : **98,8 %** de rappel et **AUC > 0,99**.",
        ],
      },
      "fire-detection": {
        title: "Détection d'incendie en temps réel",
        category: "IoT & IA embarquée",
        role: "",
        summary: "Système embarqué de détection d'incendie fonctionnant sur un Raspberry Pi 4.",
        highlights: [
          "Un CNN sur mesure atteint **96 %** de précision directement sur l'appareil.",
          "Un filtrage couleur HSV élimine les faux positifs.",
        ],
      },
    },
  },
  credentials: {
    title: "Certifications.",
    subtitle: "Formation continue et certifications professionnelles vérifiées.",
    verify: "Vérifier",
    titles: {
      "german-b2": "ÖSD Zertifikat B2 (allemand)",
    },
  },
  contact: {
    title: "Travaillons ensemble.",
    body: "Actuellement ouvert à des postes à temps plein en ingénierie IA et data science. Échangeons sur ce que je peux apporter à votre équipe.",
    qrAlt: "Scanner pour obtenir le CV",
    scan: "Scannez pour le CV numérique",
    download: "Télécharger le PDF",
    viewSource: "Voir le code source",
  },
  chat: {
    open: "Questions sur Aziz",
    close: "Fermer le chat",
    title: "Questions sur Aziz",
    subtitle: "Assistant IA · Réponses tirées de ce portfolio",
    greeting: "Bonjour ! Je suis un assistant IA qui connaît les projets, l'expérience et les compétences d'Aziz. Que souhaitez-vous savoir ?",
    suggestions: ["Quelle est la stack technique d'Aziz ?", "Parlez-moi d'ErgoFit", "Aziz est-il disponible ?"],
    placeholder: "Posez une question…",
    send: "Envoyer",
    thinking: "Réflexion…",
    error: "Une erreur est survenue. Réessayez, ou écrivez à contact@mohamedsakiss.me.",
    rateLimit: "Trop de messages. Patientez une minute avant de réessayer.",
    disclaimer: "Généré par IA. Vérifiez les détails importants dans le CV.",
  },
};
