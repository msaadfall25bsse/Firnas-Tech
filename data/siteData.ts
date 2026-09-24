export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  subServices: string[];
  iconType: "web" | "mobile" | "custom" | "ai" | "uiux" | "marketing" | "branding" | "staff";
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  benefits: string[];
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface GlobalOffice {
  id: string;
  country: string;
  city: string;
  type: "Global Delivery Center" | "Regional Office";
  address: string;
  coordinates: { x: number; y: number }; // Percentage for flat maps
  lat: number;
  lng: number;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
}

export const SITE_DATA = {
  brand: {
    name: "FIRNAS.TECH",
    tagline: "Where Ideas Find Wings",
    subheadline: "Helping Companies Scale with World-Class Technology",
    description:
      "We design, develop, and deliver comprehensive software, prioritizing user experience, engagement, and intelligent AI solutions for diverse enterprise platforms.",
  },
  stats: [
    { label: "Global Presence", value: 4, suffix: " Countries", sub: "UK, UAE, Sweden & PK" },
    { label: "Transformation Experts", value: 60, suffix: "+", sub: "Engineers & Innovators" },
    { label: "Women in Tech", value: 25, suffix: "%", sub: "Global Workforce Leadership" },
    { label: "Pre-Vetted Talent Pool", value: 150, suffix: "+", sub: "Ready for On-Demand Scale" },
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      shortDesc: "From customized portals to complex system modernizations that improve operational efficiency and foster innovation.",
      subServices: [
        "Web App Development",
        "E-commerce Development",
        "Web Portal Development",
        "CMS Development (Headless & Decoupled)",
      ],
      iconType: "web",
    },
    {
      id: "mobile-app",
      title: "Mobile Application",
      shortDesc: "Native and cross-platform applications built to be ultra-responsive, fit specific enterprise requirements, and elevate user engagement.",
      subServices: [
        "Android App Development",
        "iOS App Development",
        "Cross Platform (Flutter & React Native)",
        "Support & Maintenance",
      ],
      iconType: "mobile",
    },
    {
      id: "custom-dev",
      title: "Custom Development",
      shortDesc: "Tailored enterprise solutions engineered to match your distinct business logic, boosting organizational efficiency and speed.",
      subServices: [
        "Web & Mobile Architecture",
        "API Development & Microservices",
        "AI/ML & GenAI Integration",
        "Legacy Software Modernization",
      ],
      iconType: "custom",
    },
    {
      id: "ai-ml",
      title: "AI / ML / GenAI Development",
      shortDesc: "Using artificial intelligence and machine learning to build creative, data-driven solutions that power autonomous workflows and corporate scale.",
      subServices: [
        "AI Software Development",
        "AI & ML Strategic Consulting",
        "Custom Machine Learning Integration",
        "OpenAI as a Service & LLM Systems",
      ],
      iconType: "ai",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      shortDesc: "Creating captivating, human-centric user interfaces with smooth interactions that guarantee elevated consumer satisfaction and conversion.",
      subServices: [
        "Web UI/UX Architecture",
        "Mobile App UI/UX",
        "Comprehensive UI/UX Audits",
        "Motion Design & Micro-Interactions",
      ],
      iconType: "uiux",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      shortDesc: "Data-driven growth strategies to expand your digital footprint, engage global audiences, and drive measurable revenue expansion.",
      subServices: [
        "Search Engine Optimization (SEO)",
        "Content Marketing Strategy",
        "Social Media Growth Campaigns",
        "Online Reputation Management (ORM)",
      ],
      iconType: "marketing",
    },
    {
      id: "branding",
      title: "Branding",
      shortDesc: "Forging distinctive, memorable brand identities that resonate deeply with audiences, establish trust, and cultivate lasting loyalty.",
      subServices: [
        "Logo Design & Brand Identity Redesign",
        "Strategic Taglines & Messaging",
        "Stationery Design & Brand Guidelines",
      ],
      iconType: "branding",
    },
    {
      id: "staff-augmentation",
      title: "Staff Augmentation",
      shortDesc: "Pre-vetted, elite software engineers and designers ready to seamlessly integrate into your team and accelerate project delivery on demand.",
      subServices: [
        "Dedicated Team Model",
        "Fixed-Price Dedicated Squads",
        "On-Demand Senior Engineers",
      ],
      iconType: "staff",
    },
  ] as ServiceItem[],
  industries: [
    {
      id: "logistics",
      name: "Logistics",
      headline: "Optimizing Global Supply Chains",
      description: "Streamlining supply chain operations to ensure efficient freight tracking, dispatch optimization, and optimal resource management.",
      benefits: ["Real-time GPS fleet tracking", "Automated dispatch workflows", "Warehouse ERP integration"],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      headline: "HIPAA-Compliant Patient Centric Tools",
      description: "Our secure digital healthcare solutions streamline clinical workflows, telehealth consultations, and elevate patient care.",
      benefits: ["Secure EHR/EMR integrations", "Telemedicine video portals", "Automated patient scheduling"],
    },
    {
      id: "travel",
      name: "Travel",
      headline: "Frictionless Travel Experiences",
      description: "Intuitive, high-performance booking engines and itinerary management systems that boost customer loyalty and satisfaction.",
      benefits: ["Instant flight/hotel APIs", "Dynamic currency pricing", "Interactive travel guides"],
    },
    {
      id: "ecommerce",
      name: "eCommerce",
      headline: "High-Conversion Retail Engines",
      description: "Creating resilient, lightning-fast online storefronts that make discovery and checkout effortless, secure, and delightful.",
      benefits: ["Headless checkout architecture", "AI product recommendations", "Omnichannel inventory sync"],
    },
    {
      id: "finance",
      name: "Finance",
      headline: "Data-Driven FinTech Platforms",
      description: "Providing secure FinTech systems that help businesses make informed decisions, automate reconciliation, and manage risks.",
      benefits: ["Bank-grade data encryption", "Algorithmic risk assessment", "Automated audit trails"],
    },
    {
      id: "education",
      name: "Education",
      headline: "Interactive Learning Ecosystems",
      description: "Empowering educational institutions with collaborative LMS platforms and data analytics that personalize student outcomes.",
      benefits: ["Interactive virtual classrooms", "Adaptive learning pathways", "Automated assessment systems"],
    },
    {
      id: "sports",
      name: "Sports",
      headline: "Athletic Intelligence & Fan Engagement",
      description: "Providing actionable performance analytics, ticketing integrations, and interactive fan communities that give clubs a competitive edge.",
      benefits: ["Biometric player telemetry", "Dynamic ticketing platforms", "Live fan engagement apps"],
    },
    {
      id: "restaurant",
      name: "Restaurant",
      headline: "Digital Dining & Kitchen Operations",
      description: "Helping restaurant chains connect better with guests, accelerate table turns, and make smart data-driven inventory choices.",
      benefits: ["Contactless QR ordering", "Kitchen Display System (KDS)", "Automated loyalty programs"],
    },
    {
      id: "real-estate",
      name: "Real Estate",
      headline: "Modern Property Management & Sales",
      description: "Streamlining property discovery, virtual tours, and transaction closing through cutting-edge proptech applications.",
      benefits: ["3D virtual walkthroughs", "Automated tenant lease signing", "Centralized CRM lead management"],
    },
  ] as IndustryItem[],
  technologies: [
    {
      name: "Frontend",
      items: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "HTML5 / CSS3", "TailwindCSS", "REST APIs"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Python", "Nest.js", "PHP", "Laravel", "Django", "Flask", "GraphQL"],
    },
    {
      name: "CMS",
      items: ["WordPress", "Shopify", "Drupal", "Webflow", "WIX", "Framer"],
    },
    {
      name: "Cross-Platform",
      items: ["Flutter", "React Native", "Capacitor", "Electron"],
    },
    {
      name: "Android",
      items: ["Kotlin", "Java", "MVVM Architecture", "Retrofit", "Android Jetpack", "RxJava"],
    },
    {
      name: "iOS",
      items: ["Swift", "SwiftUI", "UIKit", "Alamofire", "Core Data", "Combine"],
    },
    {
      name: "AI & ML",
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Hugging Face"],
    },
    {
      name: "Generative AI",
      items: ["OpenAI API", "Large Language Models (LLMs)", "LangChain", "Vector DBs", "Prompt Engineering"],
    },
    {
      name: "NLP & Computer Vision",
      items: ["OpenCV", "NLTK", "spaCy", "YOLO", "Image Processing"],
    },
    {
      name: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "Canva", "Adobe Illustrator", "Photoshop"],
    },
    {
      name: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "MSSQL", "Redis", "Supabase"],
    },
    {
      name: "DevOps",
      items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Gradle", "Terraform"],
    },
    {
      name: "Cloud",
      items: ["AWS", "Google Cloud", "Microsoft Azure", "Firebase", "Vercel"],
    },
  ] as TechCategory[],
  globalOffices: [
    {
      id: "pk",
      country: "Pakistan",
      city: "Abbottabad",
      type: "Global Delivery Center",
      address: "Firnas.tech, Javeed Shaheed Road, Near COMSATS, Abbottabad",
      coordinates: { x: 67, y: 38 },
      lat: 15.66,
      lng: 52.85,
    },
    {
      id: "sa",
      country: "Saudi Arabia",
      city: "Riyadh",
      type: "Regional Office",
      address: "King Fahd Road, Al Olaya District, Riyadh, Kingdom of Saudi Arabia",
      coordinates: { x: 60, y: 33 },
      lat: 2.73,
      lng: 26.27,
    },
    {
      id: "ae",
      country: "United Arab Emirates",
      city: "Sharjah",
      type: "Regional Office",
      address: "Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE",
      coordinates: { x: 62, y: 32 },
      lat: 6.89,
      lng: 32.68,
    },
    {
      id: "uk",
      country: "United Kingdom",
      city: "London",
      type: "Regional Office",
      address: "260 Bastable Avenue, Barking, London, UK",
      coordinates: { x: 48, y: 26 },
      lat: 51.5074,
      lng: -0.1278,
    },
    {
      id: "se",
      country: "Sweden",
      city: "Stockholm",
      type: "Regional Office",
      address: "Malmvägen 2B, 19161 Sollentuna, Stockholm, Sweden",
      coordinates: { x: 53, y: 20 },
      lat: 59.3293,
      lng: 18.0686,
    },
  ] as GlobalOffice[],
  engagementModels: [
    {
      id: "dedicated-team",
      title: "Dedicated Team Model",
      badge: "Fast Scale & Agile",
      description:
        "Build your custom squad of hand-picked developers, designers, and QA engineers matching your exact stack. Work directly with them through agile two-week sprints.",
      features: [
        "Billed weekly or monthly with transparent hours",
        "Ideal for startups in discovery and rapid iteration",
        "Seamless integration with your in-house product leads",
        "Full direct communication via Slack/Teams and Jira",
      ],
      ctaText: "Build Your Dedicated Team",
      ctaHref: "#contact",
      highlight: true,
    },
    {
      id: "fixed-price",
      title: "Fixed Price Project",
      badge: "Milestone-Driven",
      description:
        "Recommended for projects with clearly defined specifications and budget caps. We take end-to-end responsibility from user research to deployment and warranty.",
      features: [
        "Fixed timeline, milestones, and guaranteed budget",
        "Comprehensive scoping, architecture, and UI prototypes upfront",
        "Strict quality gates before each milestone sign-off",
        "Dedicated post-launch warranty and SLA support",
      ],
      ctaText: "Discuss Fixed-Price Scope",
      ctaHref: "#contact",
      highlight: false,
    },
  ],
  talentNetwork: [
    {
      name: "Noman Tariq",
      role: "CTO / Backend & AI Lead",
      skills: ["Python", "AI / LLMs", "Computer Vision", "NLP", "FastAPI"],
      image: "/team/noman_tariq.png",
    },
    {
      name: "Asfand Yar",
      role: "Lead Visual & Brand Designer",
      skills: ["Figma", "UI/UX", "Adobe Suite", "3D Motion", "Brand Systems"],
      image: "/team/asfand_yar.png",
    },
    {
      name: "Asim Tariq",
      role: "Senior Mobile Engineer",
      skills: ["Android", "iOS", "Flutter", "React Native", "Java / Kotlin"],
      image: "/team/asim_tariq.png",
    },
    {
      name: "Muhammad Haris",
      role: "Lead CMS & Web Architect",
      skills: ["WordPress", "Shopify", "Webflow", "Next.js", "Framer"],
      image: "/team/muhammad_haris.png",
    },
  ],
  hiringSteps: [
    {
      step: "01",
      title: "Share Your Needs",
      description:
        "Tell us about your project scope, target tech stack, and team size. Our technical managers analyze your requirements to find the ideal match.",
    },
    {
      step: "02",
      title: "Meet Your Matches",
      description:
        "We share shortlisted profiles of pre-vetted engineers within 24 to 48 hours. Save over 60% of recruitment time.",
    },
    {
      step: "03",
      title: "Interview & Shortlist",
      description:
        "Conduct live coding sessions and culture checks with your selected candidates. Onboard effortlessly with zero operational headache.",
    },
  ],
  developmentProcess: [
    {
      step: "01",
      title: "Ideate",
      description: "Thorough discovery and feasibility analysis to ensure architectural roadmaps perfectly match your enterprise goals.",
    },
    {
      step: "02",
      title: "Design",
      description: "Crafting wireframes, design systems, and rapid MVPs that balance aesthetics with intuitive usability.",
    },
    {
      step: "03",
      title: "Develop",
      description: "Engineering clean, test-driven code using modern frameworks and agile bi-weekly delivery sprints.",
    },
    {
      step: "04",
      title: "Test",
      description: "Rigorous automated QA, security audits, and cross-device testing to ensure uncompromising reliability.",
    },
    {
      step: "05",
      title: "Launch",
      description: "Smooth production deployments with automated CI/CD pipelines and zero downtime.",
    },
    {
      step: "06",
      title: "Support",
      description: "Proactive monitoring, telemetry analytics, and continuous feature evolution.",
    },
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "Working with Firnas.tech has been an incredible experience. Their team not only understood our business model but also delivered a platform that perfectly aligned with our goals. Thanks to their work, our customer engagement increased by more than 40%.",
      author: "Masood Ahmed",
      role: "Managing Director",
      location: "Dubai, UAE",
      rating: 5,
    },
    {
      id: "t2",
      quote:
        "We partnered with Firnas.tech to build our mobile application and integrate AI features. What impressed us most was their ability to turn complex logic into user-friendly solutions. Their predictive analytics feature completely transformed our customer experience.",
      author: "William Connor",
      role: "VP of Product",
      location: "Cornwall, United Kingdom",
      rating: 5,
    },
    {
      id: "t3",
      quote:
        "Their UI/UX team gave our platform a modern, intuitive design that boosted sign-ups and conversions significantly. The communication was seamless, delivery was always on time, and the results exceeded our expectations.",
      author: "Ethan David",
      role: "Chief Technology Officer",
      location: "Stockholm, Sweden",
      rating: 5,
    },
    {
      id: "t4",
      quote:
        "From the initial consultation to final deployment, their approach was highly professional and collaborative. They took time to understand our needs and implemented every feature flawlessly.",
      author: "Michael Roberts",
      role: "Founder & CEO",
      location: "London, United Kingdom",
      rating: 5,
    },
  ] as TestimonialItem[],
  newsAndEvents: [
    {
      id: "n1",
      title: "Empowering Young Minds: Firnas.tech Visits SOS Youth Village Abbottabad",
      category: "Community & Impact",
      date: "February 17, 2026",
      excerpt: "Sharing technological inspiration and digital mentorship with students at the SOS Youth Village in Abbottabad.",
      slug: "empowering-young-minds-firnas-tech-visits-sos-youth-village-abbottabad",
    },
    {
      id: "n2",
      title: "Firnas.Tech and The Millennium Universal College (TMUC) Sign MOU",
      category: "Academic Partnership",
      date: "February 17, 2026",
      excerpt: "Strategic partnership aimed at bridging academia and enterprise through hands-on technology workshops and internships.",
      slug: "firnas-tech-and-the-millennium-universal-college-tmuc-sign-mou",
    },
    {
      id: "n3",
      title: "Fostering R&D: Firnas.Tech and COMSATS University Collaboration",
      category: "Research & Innovation",
      date: "October 10, 2025",
      excerpt: "Joint initiative to develop high-impact AI research, student incubation, and cutting-edge software engineering pipelines.",
      slug: "fostering-research-and-development-firnas-tech-and-comsats-collaboration",
    },
    {
      id: "n4",
      title: "Strengthening Academic Partnerships: AUST Abbottabad MOU Signing",
      category: "Industry Linkages",
      date: "March 10, 2025",
      excerpt: "Formalizing research exchange and talent incubation between Abbottabad University of Science and Technology and Firnas.tech.",
      slug: "strengthening-academic-partnerships-firnas-tech-and-aust-abbottabad-mou-signing",
    },
  ] as NewsItem[],
  academicPartners: [
    { name: "COMSATS University", label: "Strategic R&D Partner" },
    { name: "AUST Abbottabad", label: "Academic Collaboration" },
    { name: "TMUC Pakistan", label: "Talent Development Partner" },
  ],
  contact: {
    phone: "+92 319 5536276",
    primaryEmail: "info@firnas.tech",
    salesEmail: "sales@firnas.tech",
    socials: {
      linkedin: "https://www.linkedin.com/company/101592035/",
      instagram: "https://www.instagram.com/firnas.tech/",
      facebook: "https://www.facebook.com/profile.php?id=61556134889784",
    },
  },
};
