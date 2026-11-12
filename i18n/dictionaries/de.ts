import type { Dictionary } from "./en";

export const de: Dictionary = {
  meta: {
    title: "Mohamed Aziz Sakiss | KI-Ingenieur",
    description:
      "KI-Ingenieur, der komplette Produkte liefert, nicht nur Modelle: Computer Vision, LLMs/RAG und autonome Agenten, von der Architektur bis zum Produktivbetrieb.",
    ogAlt: "Mohamed Aziz Sakiss: KI-Ingenieur, der komplette Produkte liefert, nicht nur Modelle",
    ogTagline: "KI-Ingenieur, der komplette Produkte liefert, nicht nur Modelle.",
    ogTopics: "Computer Vision · LLMs & RAG · Autonome Agenten · MLOps",
  },
  nav: {
    about: "Profil",
    experience: "Erfahrung",
    projects: "Projekte",
    credentials: "Zertifikate",
    contact: "Kontakt",
    resume: "Lebenslauf",
    viewResume: "Lebenslauf ansehen",
    language: "Sprache",
    menu: "Menü öffnen",
  },
  hero: {
    intro: "Vorstellung",
    headline: "KI-Ingenieur, der komplette Produkte liefert, nicht nur Modelle.",
    body: "Architektur, Backend und Deployment inklusive. Zu Hause in Computer Vision, LLMs/RAG und der Infrastruktur, die sie in Produktion bringt.",
    cta: "Portfolio ansehen",
    email: "E-Mail",
  },
  experience: {
    title: "Erfahrung.",
    subtitle: "Wo ich KI für echte Teams in Produktion gebracht habe.",
    present: "Heute",
    items: {
      "tunisie-telecom": {
        role: "Praktikant AI Engineering",
        location: "Tunis, Tunesien",
        highlights: [
          "ErgoFit komplett entwickelt: eine Echtzeit-Haltungserkennung mit **98 %** Genauigkeit.",
          "„ErgoCoach“ ausgeliefert, einen RAG-Assistenten auf Basis des Nutzerverlaufs und zertifizierter Ergonomie-Leitfäden.",
          "Den gesamten Stack selbst deployt (Node.js/FastAPI, Docker, CI/CD mit GitHub Actions), produktiv im Einsatz.",
        ],
      },
      "business-scalable": {
        role: "Praktikant Softwareentwicklung",
        location: "Remote, Schweiz",
        highlights: [
          "**RAG-Chatbots** (LangChain, Gemini/OpenAI) entwickelt und deployt, die Support-Antwortzeiten und manuelle Tickets reduziert haben.",
          "Datenpipelines gebaut, die REST-APIs für die Echtzeitverarbeitung mit Backend-Systemen verbinden.",
          "Modellleistung dokumentiert und das Docker/CI-CD-Deployment des Teams verschlankt.",
        ],
      },
    },
  },
  projects: {
    title: "Projekte.",
    subtitle: "Eine Auswahl produktionsreifer Systeme, von Edge-KI auf Embedded-Geräten bis zu verteilten Big-Data-Pipelines.",
    rolePrefix: "Rolle",
    watchDemo: "Demo ansehen",
    closeDemo: "Demo schließen",
    visitLive: "Website besuchen",
    viewCode: "Code ansehen",
    items: {
      "cles-auto-plus": {
        title: "Clés Auto +",
        category: "Kundenprojekt · Edge & lokales SEO",
        role: "Full-Stack- & Infrastruktur-Ingenieur",
        summary: "Leistungsstarke Webplattform für einen Auto-Schlüsselnotdienst, ausgerichtet auf technisches SEO, Edge-Routing und Conversion-Tracking.",
        highlights: [
          "DNS-Migration **ohne Ausfallzeit** von einer alten Gelbe-Seiten/Wix-Infrastruktur zum Anycast-Edge-Netzwerk von Vercel.",
          "**HTTP-308**-Weiterleitungen auf Edge-Ebene ersetzten fehlerhafte Registrar-Weiterleitungen und erhielten **100 %** der SEO-Autorität der alten Domain.",
          "Google Tag Manager im Next.js-Dokumentkopf für das Meta-Ads-Tracking eingebunden, ohne Hydration-Konflikte.",
          "Mobile-first-Oberfläche mit Tailwind, GPU-beschleunigten Scroll-Animationen und PWA-Safe-Area-Unterstützung.",
        ],
      },
      jobpilot: {
        title: "JobPilot",
        category: "Autonome Agenten · In Entwicklung",
        role: "",
        summary: "Ein autonomes, agentenbasiertes SaaS, das die gesamte Jobsuche übernimmt, von passenden Stellen bis zum Interviewtraining.",
        highlights: [
          "Analysiert Lebenslauf und Zielstellen und bewirbt sich im Namen des Nutzers auf passende Positionen.",
          "Vollständig gesprochene Probeinterviews: **Whisper** hört zu, TTS antwortet, wie bei einem echten Interviewer.",
          "Multi-Agenten-Orchestrierung mit **LangGraph** hinter einem FastAPI-Backend für das Dashboard.",
        ],
      },
      ergofit: {
        title: "ErgoFit",
        category: "KI-Ergonomieplattform · Tunisie Telecom",
        role: "",
        summary: "Plattform für Haltungscoaching in Echtzeit, komplett entwickelt und in Produktion gebracht.",
        highlights: [
          "MediaPipe-Körperpunkte speisen einen Random-Forest-Klassifikator mit **98 %** Genauigkeit bei der Haltungserkennung in Echtzeit.",
          "Der hybride RAG-Assistent „ErgoCoach“ stützt seine Tipps auf den Fehlerverlauf jedes Nutzers und zertifizierte Ergonomie-Leitfäden und verhindert so Halluzinationen.",
          "Ein zeitgesteuerter Agent wertet Datenbanktrends aus und schickt jedem Nutzer einen persönlichen Wochenbericht.",
          "Node.js/FastAPI-Microservices mit Docker containerisiert, CI/CD über GitHub Actions.",
        ],
      },
      "auto-driving": {
        title: "Objekterkennung für autonomes Fahren",
        category: "Computer Vision",
        role: "",
        summary: "Echtzeit-Wahrnehmungssystem für autonomes Fahren, trainiert auf dem BDD100K-Datensatz.",
        highlights: [
          "**YOLOv11m** auf BDD100K-Fahrszenen feinabgestimmt.",
          "SAHI-Slicing erkennt kleine, weit entfernte Objekte mit **84 %** Präzision.",
        ],
      },
      "genai-agent": {
        title: "GenAI-Agent für E-Commerce",
        category: "Generative KI",
        role: "",
        summary: "Autonomer Agent, der einen WooCommerce-Shop mit dem Dolibarr-ERP verbindet.",
        highlights: [
          "Per Tool-Use führt er Lagerabfragen in **Echtzeit-SQL** und Sendungsverfolgung aus.",
          "RAG über ERP-Daten hält die Antworten faktenbasiert statt halluziniert.",
        ],
      },
      "brain-tumor": {
        title: "NeuroChain",
        category: "Medizinische KI & Blockchain",
        role: "",
        summary: "Sichere medizinische KI-App, die Hirntumoren auf MRT-Bildern klassifiziert und jede Vorhersage in einer Blockchain verankert.",
        highlights: [
          "Ein paralleles Ensemble aus **VGG16** und **ResNet50** mit Channel-Attention-Block (SE) klassifiziert Gliome, Meningeome und Hypophysentumoren.",
          "Jede Vorhersage und der Hash des MRT-Bildes werden in einer Blockchain verankert, manipulierte Datensätze werden erkannt.",
          "Durchgängiger Streamlit-Workflow: Upload, sofortige Inferenz, automatische Blockchain-Transaktion.",
        ],
      },
      "fraud-system": {
        title: "Kreditkartenbetrugserkennung",
        category: "Big Data & Sicherheit",
        role: "",
        summary: "Big-Data-Pipeline zur Betrugserkennung auf Basis von PySpark.",
        highlights: [
          "**1 Mio.+** Transaktionen mit PySpark und MLlib verarbeitet.",
          "Eigene Klassengewichtung bewältigt das starke Ungleichgewicht (8,7 % Betrug): **98,8 %** Recall und **AUC > 0,99**.",
        ],
      },
      "fire-detection": {
        title: "Branderkennung in Echtzeit",
        category: "IoT & Embedded-KI",
        role: "",
        summary: "Embedded-System zur Branderkennung auf einem Raspberry Pi 4.",
        highlights: [
          "Ein eigenes CNN erreicht **96 %** Genauigkeit direkt auf dem Gerät.",
          "HSV-Farbfilterung eliminiert Fehlalarme.",
        ],
      },
    },
  },
  credentials: {
    title: "Zertifikate.",
    subtitle: "Kontinuierliche Weiterbildung und verifizierte Fachzertifikate.",
    verify: "Zertifikat prüfen",
    titles: {
      "german-b2": "ÖSD Zertifikat B2 (Deutsch)",
    },
  },
  contact: {
    title: "Lassen Sie uns zusammenarbeiten.",
    body: "Derzeit offen für Vollzeitstellen in AI Engineering und Data Science. Sprechen wir darüber, welchen Mehrwert ich Ihrem Team bringen kann.",
    qrAlt: "Scannen, um den Lebenslauf zu erhalten",
    scan: "Scannen für den digitalen Lebenslauf",
    download: "PDF herunterladen",
    viewSource: "Quellcode ansehen",
  },
  chat: {
    open: "Fragen zu Aziz",
    close: "Chat schließen",
    title: "Fragen zu Aziz",
    subtitle: "KI-Assistent · Antworten aus diesem Portfolio",
    greeting: "Hallo! Ich bin ein KI-Assistent und kenne Aziz' Projekte, Erfahrung und Fähigkeiten. Was möchten Sie wissen?",
    suggestions: ["Welchen Tech-Stack nutzt Aziz?", "Erzählen Sie mir von ErgoFit", "Ist Aziz offen für Stellen?"],
    placeholder: "Frage stellen…",
    send: "Senden",
    thinking: "Denkt nach…",
    error: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder an contact@mohamedsakiss.me schreiben.",
    rateLimit: "Zu viele Nachrichten. Bitte eine Minute warten und erneut versuchen.",
    disclaimer: "KI-generiert. Wichtige Details bitte im Lebenslauf prüfen.",
  },
};
