"use client";

import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import TechIcon from "../brand/TechIcon";

// 1. Line 1: Frontend Frameworks & Design Tools (Left to Right)
const ROW1_FRONTEND_DESIGN = [
  { name: "Next.js", category: "Full-Stack React" },
  { name: "React.js", category: "UI Library" },
  { name: "Angular", category: "Web Framework" },
  { name: "Vue.js", category: "Progressive UI" },
  { name: "TypeScript", category: "Typed JavaScript" },
  { name: "TailwindCSS", category: "Modern Styling" },
  { name: "HTML5 / CSS3", category: "Core Web" },
  { name: "Figma", category: "UI/UX Design" },
  { name: "Adobe XD", category: "Interactive Prototype" },
  { name: "Sketch", category: "Vector UI" },
  { name: "Canva", category: "Visual Assets" },
  { name: "Adobe Illustrator", category: "Vector Graphics" },
  { name: "Photoshop", category: "Creative Imagery" },
  { name: "REST APIs", category: "Data Architecture" },
];

// 2. Line 2: Backend Frameworks & Databases (Right to Left)
const ROW2_BACKEND_DATABASE = [
  { name: "Node.js", category: "Async Runtime" },
  { name: "Python", category: "Backend & AI" },
  { name: "Nest.js", category: "Enterprise TypeScript" },
  { name: "PHP", category: "Web Engine" },
  { name: "Laravel", category: "PHP Architecture" },
  { name: "Django", category: "High-Level Python" },
  { name: "Flask", category: "Microservices" },
  { name: "GraphQL", category: "Query API" },
  { name: "MongoDB", category: "Document NoSQL" },
  { name: "PostgreSQL", category: "Relational SQL" },
  { name: "MySQL", category: "High-Perf Database" },
  { name: "MSSQL", category: "Enterprise SQL" },
  { name: "Redis", category: "In-Memory Cache" },
  { name: "Supabase", category: "Realtime Database" },
];

// 3. Line 3: Mobile, AI/ML, Cloud & DevOps (Left to Right)
const ROW3_MOBILE_AI_CLOUD = [
  { name: "Flutter", category: "Cross-Platform" },
  { name: "React Native", category: "Mobile Native" },
  { name: "Kotlin", category: "Modern Android" },
  { name: "Swift", category: "Apple iOS" },
  { name: "Android Jetpack", category: "Android Suite" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "PyTorch", category: "Neural Framework" },
  { name: "OpenAI API", category: "LLM Systems" },
  { name: "Hugging Face", category: "NLP Transformers" },
  { name: "Docker", category: "App Containers" },
  { name: "Kubernetes", category: "Cloud Orchestration" },
  { name: "AWS", category: "Cloud Architecture" },
  { name: "Google Cloud", category: "Compute & AI" },
  { name: "Microsoft Azure", category: "Enterprise Cloud" },
  { name: "Firebase", category: "Serverless Backend" },
  { name: "Vercel", category: "Edge Delivery" },
  { name: "GitHub Actions", category: "CI/CD Pipeline" },
];

export default function Technologies() {
  // Seamless loop duplicators
  const trackRow1 = [...ROW1_FRONTEND_DESIGN, ...ROW1_FRONTEND_DESIGN];
  const trackRow2 = [...ROW2_BACKEND_DATABASE, ...ROW2_BACKEND_DATABASE];
  const trackRow3 = [...ROW3_MOBILE_AI_CLOUD, ...ROW3_MOBILE_AI_CLOUD];

  return (
    <section id="technologies" className="relative py-28 bg-[#05080F]/65 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden bg-grid-cyber">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00E599]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0070F3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto scroll-reveal">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Technology Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Engineered with <span className="text-gradient-emerald">Modern Stacks</span> &amp; Frameworks.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Hire from our pool of 60+ specialized experts in web, mobile, AI, and software engineering—ready to scale your products effortlessly.
          </p>
        </div>
      </div>

      {/* 3 Continuous Moving Streams with Identical Speed */}
      <div className="relative w-full overflow-hidden marquee-container flex flex-col gap-6 py-4 scroll-reveal-scale">
        {/* Left & Right Smooth Vignette Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#05080F] via-[#05080F]/90 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#05080F] via-[#05080F]/90 to-transparent z-20" />

        {/* LINE 1: Frontend & Design Tools (Left to Right) */}
        <div className="relative overflow-hidden w-full">
          <div className="flex items-center gap-2 mb-2 px-6 sm:px-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#00E599] uppercase">
              LINE_01 // FRONTEND FRAMEWORKS &amp; DESIGN ECOSYSTEM &rarr;
            </span>
          </div>
          <div className="animate-marquee-ltr flex items-center gap-4">
            {trackRow1.map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl glass-card bg-white/[0.025] hover:bg-white/[0.08] border-white/[0.08] hover:border-[#00E599]/60 hover:shadow-[0_0_30px_rgba(0,229,153,0.25)] transition-all duration-300 shrink-0 select-none group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-[#00E599]/40 group-hover:bg-[#00E599]/10 transition-all duration-300">
                  <TechIcon name={item.name} size={22} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white group-hover:text-[#00E599] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#64748B] font-mono whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINE 2: Backend & Databases (Right to Left) */}
        <div className="relative overflow-hidden w-full">
          <div className="flex items-center gap-2 mb-2 px-6 sm:px-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#0070F3] uppercase">
              &larr; LINE_02 // ENTERPRISE BACKEND &amp; HIGH-SCALE DATABASES
            </span>
          </div>
          <div className="animate-marquee-rtl flex items-center gap-4">
            {trackRow2.map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl glass-card bg-white/[0.025] hover:bg-white/[0.08] border-white/[0.08] hover:border-[#0070F3]/60 hover:shadow-[0_0_30px_rgba(0,112,243,0.25)] transition-all duration-300 shrink-0 select-none group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-[#0070F3]/40 group-hover:bg-[#0070F3]/10 transition-all duration-300">
                  <TechIcon name={item.name} size={22} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white group-hover:text-[#0070F3] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#64748B] font-mono whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINE 3: Mobile, AI/ML, Cloud & DevOps (Left to Right) */}
        <div className="relative overflow-hidden w-full">
          <div className="flex items-center gap-2 mb-2 px-6 sm:px-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] uppercase">
              LINE_03 // MOBILE, AI/ML, CLOUD &amp; DEVOPS AUTOMATION &rarr;
            </span>
          </div>
          <div className="animate-marquee-ltr flex items-center gap-4">
            {trackRow3.map((item, idx) => (
              <div
                key={`r3-${item.name}-${idx}`}
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl glass-card bg-white/[0.025] hover:bg-white/[0.08] border-white/[0.08] hover:border-[#06B6D4]/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 shrink-0 select-none group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-[#06B6D4]/40 group-hover:bg-[#06B6D4]/10 transition-all duration-300">
                  <TechIcon name={item.name} size={22} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white group-hover:text-[#06B6D4] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#64748B] font-mono whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Callout Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-14 relative z-10">
        <div className="p-6 rounded-2xl glass-panel border-[#0070F3]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white mb-1">
              Need a Custom Stacks Consultation?
            </h4>
            <p className="text-xs text-[#94A3B8]">
              We match enterprise architectures to your exact security, performance, and compliance benchmarks.
            </p>
          </div>
          <Button href="#contact" variant="secondary-blue" size="sm" className="shrink-0">
            Audit Your Tech Stack
          </Button>
        </div>
      </div>
    </section>
  );
}

