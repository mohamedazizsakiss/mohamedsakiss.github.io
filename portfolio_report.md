# Portfolio Redesign Project Report

> [!NOTE]
> This report summarizes the comprehensive visual and structural redesign of Mohamed Aziz Sakiss's portfolio. The objective was to elevate the site from a standard template aesthetic into a premium, editorial-style experience driven by scroll, motion, and intentional typography.

## 1. Executive Summary
The portfolio redesign successfully established a highly custom visual identity. By enforcing a strict design token system and leveraging smooth, scroll-driven reveals, the portfolio now reads as a bespoke, premium digital experience. The content architecture was preserved, while the presentation was entirely overhauled to emphasize the user's expertise in AI, Data Science, and Autonomous GenAI Agents.

## 2. Technical Stack
The project leverages a modern React ecosystem, prioritizing performance, maintainability, and fluid interactions:

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (v4) with custom global design tokens
* **Animations:** Framer Motion for complex layout transitions and scroll-reveals
* **Typography:** Next.js Google Fonts optimization (`Outfit`, `Inter`, `JetBrains Mono`)
* **Icons:** FontAwesome

## 3. Visual Identity & Design System
A custom dark-mode token system was implemented to provide a sleek, high-contrast canvas.

### Color Palette
* **Surface Base (`#1A1B22`):** A deep, rich charcoal used for the main background.
* **Surface Elevated (`#282A36`):** Used for cards and modals to create depth.
* **Accent (`#F9A826`):** A vibrant yellow/gold used sparingly for active states, highlight lines, and primary call-to-actions.
* **Typography:** `Text-Primary` (`#F8F9FA`) for high-contrast headers, and `Text-Secondary` (`#9BA1A6`) for easily readable body copy.

### Typography Hierarchy
* **Display (`Outfit`):** Used for massive, confident headers (e.g., the Hero name and Project titles).
* **Body (`Inter`):** Used for standard text blocks, descriptions, and paragraphs to ensure maximum legibility.
* **Metadata (`JetBrains Mono`):** Used for technical tags, small labels, and structural data to reinforce the engineering focus of the portfolio.

## 4. Demonstrated Skills & Expertise
While the site is built with modern web technologies, the core objective of the portfolio is to showcase complex AI and Data Science capabilities. The `projects.ts` data layer highlights the following core competencies:

* **Computer Vision:** YOLOv11, SAHI (Slicing Aided Hyper Inference), MediaPipe, OpenCV.
* **Deep Learning & Frameworks:** PyTorch, TensorFlow, custom Attention Mechanisms (Channel Attention), ResNet50, VGG16, CNNs.
* **Generative AI & LLMs:** LangChain, Agentic Tool Use, LLM-to-ERP Integration.
* **Big Data & Distributed Systems:** PySpark, MLlib, handling 1M+ record datasets.
* **Edge AI & Embedded Systems:** Raspberry Pi 4 deployments, real-time optimization.
* **Languages & Scripting:** Python.

## 5. Key Architectural Features

### Floating "Pill" Navigation (`Navbar.tsx`)
* **Design:** A sticky, frosted-glass (backdrop blur) pill positioned at the top of the viewport.
* **Intelligence:** Utilizes `IntersectionObserver` to track the user's scroll position and dynamically update the active link with a Framer Motion layout indicator.
* **Responsiveness:** On mobile, the pill smoothly morphs into an expanding container via `AnimatePresence`, revealing a hamburger menu dropdown. 

### Editorial Hero Section (`Hero.tsx`)
* **Layout:** A bespoke 3-column structural layout mimicking high-end editorial design.
* **Typography:** Left-anchored massive typography with choreographed entrance animations.
* **Portrait Integration:** The profile picture is placed absolutely in the center background. A custom `radial-gradient` CSS mask was applied to seamlessly fade the image edges into the dark background, preventing hard edges and blending the subject organically into the UI.
* **Summary Block:** A dedicated right-column block for a quick bio, establishing immediate professional context.

### Selected Works (`Projects.tsx`)
* **Typography-First:** Replaced traditional grid cards with a massive, list-based typography approach. 
* **Inline Media Expansion:** Removed obtrusive floating videos. Instead, implemented a "Watch Demo" interaction that smoothly slides open an inline video player using Framer Motion's `AnimatePresence`.
* **Content:** Detailed project descriptions and tech stack tags (`JetBrains Mono`) are permanently visible under each title, giving immediate context before the user even opens the demo.

### Choreographed Motion (`Reveal.tsx`)
* A reusable wrapper component built with `framer-motion` and `useInView`.
* Applies a consistent staggered upward fade to elements as they enter the viewport, ensuring that the site feels "alive" and intentional as the user scrolls, rather than static.

## 5. Conclusion
The portfolio has been successfully transitioned into a premium digital space. The dark, asymmetric, and motion-rich design accurately reflects the cutting-edge nature of the AI and Data Science work being showcased. The codebase is scalable, responsive, and ready for future iterations.
