"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SITE_DATA.technologies.map((t) => t.name)];

  const displayedTechs =
    selectedCategory === "All"
      ? SITE_DATA.technologies.flatMap((cat) =>
          cat.items.map((item) => ({ item, category: cat.name }))
        )
      : SITE_DATA.technologies
          .find((cat) => cat.name === selectedCategory)
          ?.items.map((item) => ({ item, category: selectedCategory })) || [];

  return (
    <section id="technologies" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden bg-grid-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#00E599] text-[#05080F] shadow-[0_0_20px_rgba(0,229,153,0.4)]"
                    : "bg-white/[0.03] border border-white/[0.08] text-[#94A3B8] hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Connected Circuit Technology Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto mb-16">
          {displayedTechs.slice(0, 36).map(({ item, category }) => (
            <div
              key={`${category}-${item}`}
              className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center group relative border-white/[0.07] hover:border-[#00E599]/40 hover:-translate-y-1 transition duration-300"
            >
              {/* Circuit Corner Dots */}
              <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#00E599]/30 group-hover:bg-[#00E599]" />
              
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-xs font-mono text-[#00E599] mb-2 group-hover:bg-[#00E599]/10 group-hover:text-white transition">
                &lt;/&gt;
              </div>

              <span className="text-xs font-bold text-white tracking-wide group-hover:text-[#00E599] transition-colors">
                {item}
              </span>
              <span className="text-[10px] text-[#64748B] mt-0.5 font-mono">
                {category}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl glass-panel border-[#0070F3]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
