export interface SubService {
  title: string;
  slug: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
  icon: string;
}

export interface ServiceDetail {
  slug: string;
  badge: string;
  title: string;
  titleGradient: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  videoSrc?: string;
  subServices: SubService[];
  process: ProcessStep[];
  technologies: TechItem[];
  keyHighlights: { metric: string; label: string }[];
  methodologies: string[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    badge: "Web Engineering",
    title: "Web Development Solutions That",
    titleGradient: "Drive Real Business Results.",
    tagline: "Building Dynamic, High-Performance & Scalable Web Systems",
    description:
      "Transform your digital presence with enterprise-grade web development services. From real-time SaaS portals and e-commerce platforms to bespoke CMS architectures, we engineer web solutions built for speed, security, and global scale.",
    metaTitle: "Web Development Services | FIRNAS.TECH — Scalable Web & SaaS Systems",
    metaDescription:
      "Expert web development services by FIRNAS.TECH. We craft custom web applications, e-commerce stores, scalable cloud portals, and headless CMS architectures.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Web App Development",
        slug: "web-app-development",
        icon: "⚡",
        description: "Bespoke full-stack web applications with high concurrency, real-time sync, and fluid reactive UI.",
        deliverables: ["Microservices Architecture", "Responsive Single Page Apps", "PWA Support", "Secure REST & GraphQL APIs"],
      },
      {
        title: "E-Commerce Development",
        slug: "ecommerce-development",
        icon: "🛒",
        description: "End-to-end commerce solutions engineered for high conversion rates, multi-currency checkout, and rapid load times.",
        deliverables: ["Shopify Plus & Custom Stores", "Stripe & PayPal Integration", "Inventory & Order Management", "Headless Commerce"],
      },
      {
        title: "Web Portal Development",
        slug: "web-portal-development",
        icon: "🏢",
        description: "Custom enterprise portals connecting customers, vendors, and internal teams through unified dashboards.",
        deliverables: ["Role-Based Access Control", "Data Analytics Dashboards", "ERP & CRM Integrations", "Bank-Grade Encryption"],
      },
      {
        title: "CMS & Headless Systems",
        slug: "cms-development",
        icon: "📝",
        description: "Scalable content management platforms empowering marketing teams to publish without developer dependencies.",
        deliverables: ["Strapi, Sanity & Payload CMS", "Static Site Generation (SSG)", "SEO Optimization", "Multi-Language Localization"],
      },
    ],
    process: [
      { step: "01", title: "Discovery", description: "In-depth requirement analysis, architectural planning, and business milestone mapping." },
      { step: "02", title: "Architecture & Wireframing", description: "Information architecture, database schema design, and interactive UI wireframes." },
      { step: "03", title: "UI/UX Design", description: "High-fidelity prototypes crafted with modern design systems and intuitive user journeys." },
      { step: "04", title: "Front-End Development", description: "Pixel-perfect implementation using Next.js, React, TypeScript, and modern CSS." },
      { step: "05", title: "Back-End & API Integration", description: "Scalable microservices, distributed caching, and bulletproof database design." },
      { step: "06", title: "Rigorous QA & Security", description: "Automated regression tests, vulnerability audits, and cross-browser stress testing." },
      { step: "07", title: "Deployment & CI/CD", description: "Zero-downtime deployment pipelines on AWS, Vercel, or hybrid cloud infrastructure." },
      { step: "08", title: "Post-Launch Support", description: "24/7 SLA monitoring, speed optimization, and continuous feature expansion." },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend", icon: "▲" },
      { name: "React.js", category: "Frontend", icon: "⚛️" },
      { name: "TypeScript", category: "Frontend", icon: "🔷" },
      { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
      { name: "Node.js", category: "Backend", icon: "🟢" },
      { name: "Python / Django", category: "Backend", icon: "🐍" },
      { name: "NestJS", category: "Backend", icon: "🦁" },
      { name: "PostgreSQL", category: "Database", icon: "🐘" },
      { name: "MongoDB", category: "Database", icon: "🍃" },
      { name: "Redis", category: "Cache", icon: "⚡" },
      { name: "Docker", category: "DevOps", icon: "🐳" },
      { name: "AWS Cloud", category: "Cloud", icon: "☁️" },
    ],
    keyHighlights: [
      { metric: "99.9%", label: "Uptime Guarantee" },
      { metric: "<1.2s", label: "Core Web Vitals Avg Speed" },
      { metric: "100+", label: "Web Applications Delivered" },
      { metric: "40%", label: "Average Infrastructure Cost Reduction" },
    ],
    methodologies: ["Agile Scrum", "DevOps CI/CD", "Test-Driven Development", "Micro-frontends"],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    badge: "Mobile Engineering",
    title: "Mobile App Development Built for",
    titleGradient: "Scale, Speed & High Engagement.",
    tagline: "iOS, Android & Cross-Platform Mobile Applications",
    description:
      "Create high-performance mobile experiences that users love. FIRNAS.TECH develops native iOS, Android, and cross-platform apps using Flutter and React Native, combining intuitive UI with robust background architectures.",
    metaTitle: "Mobile App Development Services | FIRNAS.TECH — iOS & Android Apps",
    metaDescription:
      "Top-tier mobile application development by FIRNAS.TECH. Native Swift, Kotlin, Flutter & React Native solutions designed for global scale.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "iOS App Development",
        slug: "ios-app-development",
        icon: "🍎",
        description: "Native applications engineered with Swift and SwiftUI, fully compliant with Apple Human Interface Guidelines.",
        deliverables: ["SwiftUI & Combine", "Apple Pay & StoreKit", "CoreML Integration", "TestFlight & App Store Publishing"],
      },
      {
        title: "Android App Development",
        slug: "android-app-development",
        icon: "🤖",
        description: "Robust native Android applications built with Kotlin and Jetpack Compose across thousands of device form factors.",
        deliverables: ["Modern Jetpack Compose", "Google Play Billing", "Offline-First Sync", "Push Notification Architecture"],
      },
      {
        title: "Cross-Platform Development",
        slug: "cross-platform-development",
        icon: "📱",
        description: "Unified codebase using Flutter or React Native to slash time-to-market while retaining near-native 60fps performance.",
        deliverables: ["Flutter & Dart", "React Native", "Shared Business Logic", "Simultaneous Multi-Store Launch"],
      },
      {
        title: "App Maintenance & Evolution",
        slug: "mobile-maintenance",
        icon: "🛡️",
        description: "Continuous version updates, OS compatibility patches, crash diagnostics, and proactive security monitoring.",
        deliverables: ["OS Compatibility Upgrades", "Crashlytics & Performance Audits", "Feature Iterations", "Dedicated Support SLAs"],
      },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Target user profiling, OS platform strategy, and technical viability assessment." },
      { step: "02", title: "Consultation & Scope", description: "Architecture selection (Native vs Cross-platform) and API contract definition." },
      { step: "03", title: "UI/UX & Interactive Prototypes", description: "Haptic feedback, thumb-friendly navigation, and smooth mobile transitions." },
      { step: "04", title: "Agile Mobile Sprints", description: "Bi-weekly builds delivered directly to your device via TestFlight and Firebase App Distribution." },
      { step: "05", title: "Device Farm Testing", description: "Stress testing across 50+ real physical iOS and Android hardware configurations." },
      { step: "06", title: "Store Submission & Launch", description: "Handling Apple App Store & Google Play approval processes with zero rejection." },
    ],
    technologies: [
      { name: "Flutter", category: "Cross-Platform", icon: "💙" },
      { name: "React Native", category: "Cross-Platform", icon: "⚛️" },
      { name: "Swift / SwiftUI", category: "iOS", icon: "🍎" },
      { name: "Kotlin", category: "Android", icon: "🤖" },
      { name: "Firebase", category: "Backend", icon: "🔥" },
      { name: "GraphQL", category: "API", icon: "🔗" },
      { name: "SQLite / Realm", category: "Database", icon: "💾" },
      { name: "Fastlane", category: "CI/CD", icon: "🚀" },
    ],
    keyHighlights: [
      { metric: "4.8★", label: "Average App Store Rating" },
      { metric: "60 FPS", label: "Smooth Animation Fidelity" },
      { metric: "80+", label: "Mobile Apps Shipped" },
      { metric: "100%", label: "First-Time App Store Approval" },
    ],
    methodologies: ["Mobile DevOps", "Feature Branching", "Offline-First Sync", "Automated Device Farms"],
  },

  "custom-software-development": {
    slug: "custom-software-development",
    badge: "Custom Engineering",
    title: "Bespoke Enterprise Software Engineered",
    titleGradient: "For Uncompromising Reliability.",
    tagline: "Tailored Software Systems & Mission-Critical Architectures",
    description:
      "When off-the-shelf software falls short, FIRNAS.TECH builds custom software architectures tailored specifically to your workflow, data compliance regulations, and enterprise scalability requirements.",
    metaTitle: "Custom Software Development | FIRNAS.TECH — Enterprise Solutions",
    metaDescription:
      "Custom enterprise software development by FIRNAS.TECH. Tailored microservices, API ecosystems, workflow automations, and legacy modernization.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Enterprise Web & Mobile Systems",
        slug: "enterprise-systems",
        icon: "🏢",
        description: "Bespoke business platforms replacing fragmented third-party subscriptions with one cohesive system.",
        deliverables: ["Custom ERP & CRM", "HRMS Portals", "Inventory Automation", "Role-Based Security"],
      },
      {
        title: "API Development & Integration",
        slug: "api-development",
        icon: "🔌",
        description: "High-throughput, secure REST and GraphQL APIs connecting disparate internal and third-party services.",
        deliverables: ["Microservices Architecture", "API Gateway & Throttling", "Swagger/OpenAPI Documentation", "Webhook Engine"],
      },
      {
        title: "Legacy Software Modernization",
        slug: "legacy-modernization",
        icon: "🔄",
        description: "Migrating legacy monoliths into scalable cloud-native microservices with zero business disruption.",
        deliverables: ["Cloud Migration to AWS/GCP", "Database Re-architecture", "Security Hardening", "Automated Testing Suites"],
      },
      {
        title: "Workflow & Data Automation",
        slug: "workflow-automation",
        icon: "⚙️",
        description: "Automating repetitive operational workflows, batch ETL data pipelines, and third-party data sync.",
        deliverables: ["Distributed Worker Queues", "Real-Time Event Processing", "Audit Logging", "Compliance Reporting"],
      },
    ],
    process: [
      { step: "01", title: "Define", description: "Deep-dive business discovery, process mapping, and bottleneck analysis." },
      { step: "02", title: "Architect", description: "Designing fault-tolerant system architecture, data models, and API interfaces." },
      { step: "03", title: "Develop", description: "Modular agile engineering with continuous peer code reviews and clean code standards." },
      { step: "04", title: "Test", description: "Comprehensive unit, integration, stress, and security penetration testing." },
      { step: "05", title: "Deploy", description: "Staged deployment with automated rollback safeguards and live data migration." },
      { step: "06", title: "Maintain", description: "Proactive monitoring, telemetry tracking, and continuous lifecycle maintenance." },
    ],
    technologies: [
      { name: "Node.js", category: "Runtime", icon: "🟢" },
      { name: "Python", category: "Language", icon: "🐍" },
      { name: "Go (Golang)", category: "Systems", icon: "🔷" },
      { name: "PostgreSQL", category: "Database", icon: "🐘" },
      { name: "Kubernetes", category: "Orchestration", icon: "☸️" },
      { name: "Docker", category: "Containers", icon: "🐳" },
      { name: "Kafka / RabbitMQ", category: "Messaging", icon: "📨" },
      { name: "AWS / Azure", category: "Cloud", icon: "☁️" },
    ],
    keyHighlights: [
      { metric: "50+", label: "Custom Enterprise Projects" },
      { metric: "99.99%", label: "System Availability" },
      { metric: "3.5x", label: "Operational Speed Increase" },
      { metric: "0", label: "Data Breaches Recorded" },
    ],
    methodologies: ["Domain-Driven Design", "Twelve-Factor App", "Event-Driven Architecture", "DevSecOps"],
  },

  "ai-ml-genai-development": {
    slug: "ai-ml-genai-development",
    badge: "Artificial Intelligence",
    title: "Generative AI & Machine Learning That",
    titleGradient: "Transforms Enterprise Intelligence.",
    tagline: "LLM Fine-Tuning, Autonomous Agents & Predictive Analytics",
    description:
      "Unlock competitive advantages with cutting-edge AI. FIRNAS.TECH builds enterprise LLM applications, custom RAG (Retrieval-Augmented Generation) knowledge engines, computer vision pipelines, and predictive models.",
    metaTitle: "AI, ML & GenAI Development | FIRNAS.TECH — Enterprise AI Systems",
    metaDescription:
      "Enterprise AI & Machine Learning solutions by FIRNAS.TECH. Custom LLM fine-tuning, RAG agents, computer vision, and OpenAI API integration.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Custom AI Software Development",
        slug: "ai-software-development",
        icon: "🧠",
        description: "Autonomous AI agents and intelligent software assistants integrated directly into your business software.",
        deliverables: ["Custom LLM Integration", "Agentic Workflows", "Vector Embeddings & Search", "Natural Language Interfaces"],
      },
      {
        title: "AI & ML Consulting",
        slug: "ai-consulting",
        icon: "💡",
        description: "Strategic roadmaps evaluating technical feasibility, ROI modeling, and data readiness for enterprise AI adoption.",
        deliverables: ["AI Readiness Audit", "Model Selection & Benchmark", "Ethical AI & Compliance", "Data Pipeline Strategy"],
      },
      {
        title: "Enterprise AI/ML Integration",
        slug: "ai-integration",
        icon: "⚡",
        description: "Embedding predictive models and automated computer vision pipelines into existing production databases.",
        deliverables: ["Predictive Analytics", "Document OCR & Extraction", "Recommendation Engines", "Real-Time Inference APIs"],
      },
      {
        title: "OpenAI as a Service & RAG",
        slug: "openai-rag-service",
        icon: "🤖",
        description: "Private, hallucination-resistant knowledge bases trained strictly on your proprietary enterprise data.",
        deliverables: ["RAG Architecture", "Pinecone / ChromaDB", "Private Data Guardrails", "Enterprise Chatbots"],
      },
    ],
    process: [
      { step: "01", title: "Problem Formulation", description: "Identifying high-impact AI use cases and defining benchmark accuracy metrics." },
      { step: "02", title: "Data Preparation", description: "Data ingestion, cleaning, tokenization, anonymization, and vector indexing." },
      { step: "03", title: "Model Engineering", description: "Fine-tuning foundational models, prompting strategies, and RAG pipeline setup." },
      { step: "04", title: "Evaluation & Guardrails", description: "Red-teaming models, preventing hallucinations, and ensuring safety compliance." },
      { step: "05", title: "Production Deployment", description: "Optimized GPU inference endpoints with auto-scaling and low latency." },
      { step: "06", title: "Continuous Learning", description: "Active telemetry monitoring, drift detection, and automated retraining." },
    ],
    technologies: [
      { name: "OpenAI / Claude", category: "Foundation Models", icon: "✨" },
      { name: "LangChain", category: "Framework", icon: "🦜" },
      { name: "LlamaIndex", category: "RAG", icon: "🦙" },
      { name: "Python / PyTorch", category: "Core AI", icon: "🔥" },
      { name: "Pinecone / Qdrant", category: "Vector DB", icon: "🌲" },
      { name: "Hugging Face", category: "Ecosystem", icon: "🤗" },
      { name: "TensorFlow", category: "Deep Learning", icon: "🧠" },
      { name: "NVIDIA Triton", category: "Inference", icon: "⚡" },
    ],
    keyHighlights: [
      { metric: "92%", label: "RAG Retrieval Accuracy" },
      { metric: "70%", label: "Manual Workflow Time Saved" },
      { metric: "40+", label: "AI Models in Production" },
      { metric: "<250ms", label: "Average Inference Latency" },
    ],
    methodologies: ["Responsible AI", "MLOps", "Model Quantization", "Few-Shot Engineering"],
  },

  "ui-ux": {
    slug: "ui-ux",
    badge: "Product Design",
    title: "Human-Centered UI/UX Design That",
    titleGradient: "Transforms Users Into Advocates.",
    tagline: "Intuitive Interfaces, Design Systems & Motion Aesthetics",
    description:
      "We design captivating digital products that balance aesthetic beauty with conversion psychology. FIRNAS.TECH delivers user research, wireframing, complete design systems, and fluid motion design.",
    metaTitle: "UI/UX Design Services | FIRNAS.TECH — Intuitive Product Design",
    metaDescription:
      "Modern UI/UX design services by FIRNAS.TECH. Web and mobile design systems, wireframing, usability audits, and interactive motion design.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Web UI/UX Design",
        slug: "web-ui-ux",
        icon: "💻",
        description: "Responsive web interfaces designed for clarity, seamless navigation, and maximum visitor conversion.",
        deliverables: ["Design Systems in Figma", "Responsive Layouts", "Accessibility (WCAG)", "Developer-Ready Specs"],
      },
      {
        title: "Mobile App UI/UX",
        slug: "mobile-ui-ux",
        icon: "📱",
        description: "Ergonomic mobile layouts tailored specifically to native iOS and Android gesture paradigms.",
        deliverables: ["Touch Target Optimization", "Dark & Light Themes", "App Store Mockups", "Interactive Prototype"],
      },
      {
        title: "UI/UX Audits & Optimization",
        slug: "ui-ux-audits",
        icon: "🔍",
        description: "Heuristic evaluation of existing software to uncover UX friction, drop-offs, and accessibility bottlenecks.",
        deliverables: ["Friction Map Analysis", "Usability Scorecard", "Conversion Rate Optimization", "Redesign Roadmap"],
      },
      {
        title: "Motion & Micro-Interactions",
        slug: "motion-design",
        icon: "✨",
        description: "Subtle micro-animations and physics-based transitions that bring software interfaces to life.",
        deliverables: ["Lottie Animations", "State Transitions", "Interactive Component Specs", "Scroll-Driven Storytelling"],
      },
    ],
    process: [
      { step: "01", title: "Research & Strategy", description: "User persona discovery, competitive analysis, and stakeholder interviews." },
      { step: "02", title: "Information Architecture", description: "Card sorting, sitemaps, user flow diagrams, and wireframe blueprints." },
      { step: "03", title: "Wireframe & Prototype", description: "Clickable low-fidelity wireframes validating core interactions early." },
      { step: "04", title: "Visual Design System", description: "Typography hierarchies, color tokens, and atomic UI component libraries." },
      { step: "05", title: "Developer Handoff", description: "Comprehensive Figma tokens, assets export, and responsive guidelines." },
      { step: "06", title: "Usability Testing", description: "Task-completion testing with real users to refine and polish every detail." },
    ],
    technologies: [
      { name: "Figma", category: "Core Design", icon: "🎨" },
      { name: "Adobe XD", category: "Prototyping", icon: "📐" },
      { name: "Sketch", category: "Vector UI", icon: "💎" },
      { name: "Framer", category: "Motion", icon: "⚡" },
      { name: "Lottie", category: "Animation", icon: "✨" },
      { name: "Storybook", category: "Design System", icon: "📚" },
    ],
    keyHighlights: [
      { metric: "35%+", label: "Avg Conversion Uplift" },
      { metric: "150+", label: "Products Designed" },
      { metric: "100%", label: "WCAG 2.1 AA Compliance" },
      { metric: "10x", label: "Dev Handoff Speed with Token Systems" },
    ],
    methodologies: ["Atomic Design", "Design Thinking", "Heuristic Evaluation", "Accessibility-First"],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    badge: "Growth Engine",
    title: "Result-Driven Digital Marketing That",
    titleGradient: "Accelerates Scalable Growth.",
    tagline: "SEO, Performance Marketing, Social & Brand Authority",
    description:
      "Scale your revenue with measurable data-driven digital marketing. FIRNAS.TECH combines technical SEO, targeted paid media campaigns, content strategy, and online reputation management.",
    metaTitle: "Digital Marketing Services | FIRNAS.TECH — SEO & Growth Marketing",
    metaDescription:
      "Full-service digital marketing solutions by FIRNAS.TECH. Technical SEO, Google & Meta Ads, content marketing, and reputation management.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Search Engine Optimization (SEO)",
        slug: "seo-services",
        icon: "📈",
        description: "Technical SEO audits, high-intent keyword strategies, and authoritative backlink acquisition.",
        deliverables: ["Technical Site Audits", "On-Page Optimization", "Semantic Content Clusters", "Rank Tracking"],
      },
      {
        title: "Content Marketing",
        slug: "content-marketing",
        icon: "✍️",
        description: "High-value articles, technical case studies, and whitepapers establishing your brand as an industry thought leader.",
        deliverables: ["Editorial Calendar", "Thought Leadership Articles", "Lead Magnet eBooks", "SEO Copywriting"],
      },
      {
        title: "Social Media & Performance Ads",
        slug: "social-media-marketing",
        icon: "📣",
        description: "Hyper-targeted paid advertising across Google Search, LinkedIn, and Meta with clear ROAS tracking.",
        deliverables: ["PPC Campaigns", "LinkedIn B2B Lead Gen", "A/B Creative Testing", "Conversion Pixel Setup"],
      },
      {
        title: "Online Reputation Management",
        slug: "reputation-management",
        icon: "🛡️",
        description: "Building resilient digital brand sentiment, monitoring sentiment, and protecting executive reputation.",
        deliverables: ["Brand Sentiment Audits", "Review Generation", "Crisis PR Strategy", "SERP Reputation Cleanup"],
      },
    ],
    process: [
      { step: "01", title: "Discovery & Audit", description: "Deep analysis of existing organic rankings, ad spend efficiency, and competitor gaps." },
      { step: "02", title: "Strategy Development", description: "Formulating customer acquisition funnels, target CAC, and channel priorities." },
      { step: "03", title: "Campaign Planning", description: "Developing ad creative, landing pages, tracking pixels, and content roadmaps." },
      { step: "04", title: "Execution", description: "Launching multi-channel campaigns with automated bid optimization." },
      { step: "05", title: "Monitoring & Tuning", description: "Continuous A/B testing of ad copies, headlines, and landing page conversions." },
      { step: "06", title: "Reporting & Insights", description: "Transparent weekly dashboards detailing ROAS, CPA, and pipeline attribution." },
    ],
    technologies: [
      { name: "Google Ads", category: "PPC", icon: "🎯" },
      { name: "Meta Ads", category: "Social", icon: "📱" },
      { name: "SEMrush / Ahrefs", category: "SEO", icon: "🔍" },
      { name: "Google Analytics 4", category: "Analytics", icon: "📊" },
      { name: "HubSpot", category: "CRM", icon: "🧲" },
      { name: "Looker Studio", category: "BI", icon: "📈" },
    ],
    keyHighlights: [
      { metric: "3.8x", label: "Average Client ROAS" },
      { metric: "240%", label: "Average Organic Traffic Growth" },
      { metric: "$10M+", label: "Ad Spend Managed Profitably" },
      { metric: "Top 3", label: "Keywords in Google SERP" },
    ],
    methodologies: ["Data-Driven Attribution", "Growth Hacking", "Conversion Rate Optimization", "Semantic SEO"],
  },

  "branding": {
    slug: "branding",
    badge: "Brand Identity",
    title: "Brand Strategy & Visual Identities That",
    titleGradient: "Command Respect & Loyalty.",
    tagline: "Logos, Typography Systems & Distinctive Brand Guidelines",
    description:
      "Craft a memorable brand that resonates emotionally with your audience. FIRNAS.TECH builds cohesive brand identities—from timeless logo marks and color psychology to complete corporate collateral.",
    metaTitle: "Branding & Identity Services | FIRNAS.TECH — Corporate Identity",
    metaDescription:
      "Elevate your brand with FIRNAS.TECH. Complete corporate identity, logo design, typography systems, and brand guidelines.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Logo Design & Redesign",
        slug: "logo-design",
        icon: "✨",
        description: "Timeless, scalable vector logo marks engineered with geometric harmony and meaningful symbolism.",
        deliverables: ["Primary & Secondary Marks", "Monochrome Variants", "App Icons & Favicons", "Vector Master Assets"],
      },
      {
        title: "Brand Voice & Taglines",
        slug: "brand-voice",
        icon: "🗣️",
        description: "Defining your unique tone of voice, punchy taglines, and messaging framework for consistent communication.",
        deliverables: ["Brand Core Values", "Mission & Vision", "Taglines & Slogans", "Communication Matrix"],
      },
      {
        title: "Corporate Stationery & Collateral",
        slug: "corporate-stationery",
        icon: "📁",
        description: "Professional business stationery, pitch deck templates, and presentation assets reflecting your quality.",
        deliverables: ["Business Cards & Letterheads", "Pitch Deck Templates", "Email Signatures", "Social Media Kits"],
      },
      {
        title: "Comprehensive Brand Guidelines",
        slug: "brand-guidelines",
        icon: "📖",
        description: "The definitive brand manual ensuring team members and external partners maintain visual purity.",
        deliverables: ["Color Palette (Hex/CMYK/Pantone)", "Typography Guidelines", "Do's & Don'ts", "Clear Space Rules"],
      },
    ],
    process: [
      { step: "01", title: "Architecture Analysis", description: "Understanding your heritage, competitive landscape, and vision." },
      { step: "02", title: "Content Research", description: "Moodboarding, color psychology exploration, and conceptual sketching." },
      { step: "03", title: "Design Exploration", description: "Developing distinct logo concepts with real-world application mockups." },
      { step: "04", title: "Production & Refinement", description: "Mathematical alignment, optical kerning, and file preparation across all print/digital formats." },
      { step: "05", title: "Guidelines Delivery", description: "Publishing the master brand book and asset repository for your team." },
    ],
    technologies: [
      { name: "Adobe Illustrator", category: "Vector", icon: "📐" },
      { name: "Adobe Photoshop", category: "Raster", icon: "🖼️" },
      { name: "Figma", category: "Digital", icon: "🎨" },
      { name: "InDesign", category: "Print", icon: "📰" },
      { name: "Pantone Guides", category: "Color", icon: "🌈" },
    ],
    keyHighlights: [
      { metric: "100+", label: "Brand Identities Created" },
      { metric: "100%", label: "Original Vector Artwork" },
      { metric: "15+", label: "Global Design Awards" },
      { metric: "End-to-End", label: "Digital & Print Ready Assets" },
    ],
    methodologies: ["Color Psychology", "Golden Ratio Geometry", "Story-Driven Branding", "Consistency Architecture"],
  },

  "staff-augmentation": {
    slug: "staff-augmentation",
    badge: "Talent Solutions",
    title: "Reliable, Pre-Vetted Tech Talent",
    titleGradient: "Ready to Accelerate Your Roadmap.",
    tagline: "Top 1% Senior Engineers, AI Specialists & Dedicated Squads",
    description:
      "Scale your engineering velocity instantly. FIRNAS.TECH provides top senior software developers, AI architects, UI/UX designers, and QA leads who seamlessly integrate into your sprint cycles.",
    metaTitle: "Staff Augmentation Services | FIRNAS.TECH — Dedicated Tech Squads",
    metaDescription:
      "Hire pre-vetted senior software engineers with FIRNAS.TECH. On-demand staff augmentation, dedicated teams, and timezone-aligned developers.",
    videoSrc: "/videos/hero_services.mp4",
    subServices: [
      {
        title: "Dedicated Developers",
        slug: "dedicated-developers",
        icon: "👨‍💻",
        description: "Full-time senior engineers working exclusively on your product under your direct engineering leadership.",
        deliverables: ["Full-Time 160h/month", "Timezone Alignment", "Direct Slack/Git Integration", "Daily Standups"],
      },
      {
        title: "Self-Managed Squads",
        slug: "squad-augmentation",
        icon: "👥",
        description: "Complete cross-functional teams (Tech Lead, Full-Stack Devs, QA, UI/UX) taking full ownership of deliverables.",
        deliverables: ["Scrum Master & PM Included", "Sprint Delivery Commitment", "KPI-Driven Milestones", "Turnkey Velocity"],
      },
      {
        title: "CTO & Technical Advisory",
        slug: "technical-advisory",
        icon: "🎖️",
        description: "Fractional CTOs and senior architects providing code audits, cloud roadmap planning, and tech debt reduction.",
        deliverables: ["System Architecture Reviews", "Cloud Cost Optimization", "Team Mentorship", "Investor Tech DD"],
      },
      {
        title: "QA & SQA Engineers",
        slug: "qa-engineers",
        icon: "🧪",
        description: "Dedicated QA engineers automating test coverage, load testing, and ensuring zero production regressions.",
        deliverables: ["Cypress & Playwright Automation", "API Security Audits", "Performance Load Testing", "CI/CD Test Gates"],
      },
    ],
    process: [
      { step: "01", title: "Share Your Needs", description: "Specify tech stack, seniority, timezone overlap, and sprint schedule." },
      { step: "02", title: "Meet Your Matches", description: "Within 48 hours, receive shortlisted candidate profiles matching your exact requirements." },
      { step: "03", title: "Interview & Code Review", description: "Direct 1-on-1 technical interview and live coding test with your engineering managers." },
      { step: "04", title: "Risk-Free Trial", description: "2-week trial period to evaluate code quality, communication, and team chemistry." },
      { step: "05", title: "Seamless Sprint Integration", description: "Developers join your repo, Jira/Linear board, and Slack from day one." },
    ],
    technologies: [
      { name: "Full-Stack Devs", category: "Engineering", icon: "💻" },
      { name: "Mobile Specialists", category: "iOS/Android", icon: "📱" },
      { name: "AI/ML Engineers", category: "Intelligence", icon: "🤖" },
      { name: "DevOps / SRE", category: "Infrastructure", icon: "☁️" },
      { name: "QA Automation", category: "Testing", icon: "🧪" },
      { name: "UI/UX Designers", category: "Design", icon: "🎨" },
    ],
    keyHighlights: [
      { metric: "Top 1%", label: "Vetted Candidate Acceptance Rate" },
      { metric: "48h", label: "Average Time to Candidate Match" },
      { metric: "96%", label: "Trial-to-Hire Retention Rate" },
      { metric: "4+ Hrs", label: "Guaranteed Timezone Overlap" },
    ],
    methodologies: ["Agile/Scrum", "Continuous Integration", "Transparent Time Tracking", "Zero Onboarding Overhead"],
  },
};
