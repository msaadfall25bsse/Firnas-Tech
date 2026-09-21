"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = SITE_DATA.industries[activeTab];

  return (
    <section id="industries" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" dot size="sm" className="mb-4">
            Domain Expertise
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Preferred <span className="text-gradient-blue">Transformation Partner</span> of Global Leaders.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Combining deep engineering talent with industry-specific insight to craft solutions across 9 high-growth sectors.
          </p>
        </div>

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical/Horizontal Industry Tab List */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {SITE_DATA.industries.map((ind, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3.5 rounded-xl text-left font-medium transition-all duration-300 flex items-center justify-between shrink-0 lg:shrink select-none cursor-pointer ${
                    isActive
                      ? "bg-[#0070F3] text-white shadow-[0_0_25px_-5px_rgba(0,112,243,0.5)] border border-[#00A3FF]/40"
                      : "bg-white/[0.02] border border-white/[0.06] text-[#94A3B8] hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono ${isActive ? "text-white/80" : "text-[#64748B]"}`}>
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold">{ind.name}</span>
                  </div>
                  <span className={`text-xs transition-transform duration-300 ${isActive ? "translate-x-1" : "opacity-40"}`}>
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Showcase Card */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 sm:p-10 relative overflow-hidden border-white/10 min-h-[420px] flex flex-col justify-between">
              {/* Background Geometric Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0070F3]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#00E599]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Active Indicator & Sector */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-[#00E599] font-mono">
                      VERTICAL // {activeIndustry.name.toUpperCase()}
                    </span>
                  </div>
                  <Badge variant="cyan" size="sm">
                    Enterprise Ready
                  </Badge>
                </div>

                {/* Dynamic Title & Narrative */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  {activeIndustry.headline}
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
                  {activeIndustry.description}
                </p>

                {/* Key Strategic Benefits */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-3">
                    Specialized Solutions &amp; Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeIndustry.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white flex items-start gap-2"
                      >
                        <span className="text-[#00E599] mt-0.5">&check;</span>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                <span className="text-xs text-[#64748B]">
                  Tailored architectural blueprints available for {activeIndustry.name}.
                </span>
                <Button
                  href="#contact"
                  variant="primary-emerald"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Discuss {activeIndustry.name} Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
