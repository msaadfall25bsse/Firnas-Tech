"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function ProductProcess() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" dot size="sm" className="mb-4">
            Engineering Methodology
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our <span className="text-gradient-blue">Product Development</span> Lifecycle.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Our product development process is built to turn your ideas into impactful solutions step by step. From initial discovery and planning to design, development, testing, and continuous launch.
          </p>
        </div>

        {/* Desktop Horizontal Interactive Timeline (hidden on mobile) */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-16">
          {/* Progress Connector Track */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-white/[0.08] -translate-y-1/2 rounded-full" />
            <div
              className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-[#00E599] to-[#0070F3] -translate-y-1/2 rounded-full transition-all duration-500"
              style={{
                width: `${(activeStage / (SITE_DATA.developmentProcess.length - 1)) * 90}%`,
              }}
            />

            {/* Interactive Timeline Stepper Buttons */}
            <div className="relative z-10 flex items-center justify-between">
              {SITE_DATA.developmentProcess.map((proc, index) => {
                const isActive = activeStage === index;
                const isPast = activeStage > index;

                return (
                  <button
                    key={proc.step}
                    onClick={() => setActiveStage(index)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-[#00E599] text-[#05080F] shadow-[0_0_25px_rgba(0,229,153,0.5)] scale-110"
                          : isPast
                          ? "bg-[#0070F3] text-white"
                          : "bg-[#05080F] border border-white/15 text-[#94A3B8] hover:border-white/40"
                      }`}
                    >
                      {proc.step}
                    </div>
                    <span
                      className={`text-xs mt-3 font-semibold tracking-wide transition-colors ${
                        isActive ? "text-[#00E599]" : "text-[#64748B] group-hover:text-white"
                      }`}
                    >
                      {proc.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Display Card */}
          <div className="glass-card p-8 rounded-2xl border-white/10 max-w-3xl mx-auto text-center relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest text-[#00E599] font-mono mb-2">
              STAGE {SITE_DATA.developmentProcess[activeStage].step} OF 06
            </div>
            <h3 className="text-2xl font-black text-white mb-3">
              {SITE_DATA.developmentProcess[activeStage].title}
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xl mx-auto">
              {SITE_DATA.developmentProcess[activeStage].description}
            </p>
          </div>
        </div>

        {/* Mobile Vertical Connected Timeline (visible on mobile and tablet) */}
        <div className="lg:hidden relative max-w-xl mx-auto space-y-6 mb-12">
          {/* Vertical Track Line */}
          <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-gradient-to-b from-[#00E599] via-[#0070F3] to-[#00E599]/20" />

          {SITE_DATA.developmentProcess.map((proc, index) => (
            <div
              key={proc.step}
              onClick={() => setActiveStage(index)}
              className="relative flex items-start gap-4 pl-2 group cursor-pointer"
            >
              {/* Step Circle Node */}
              <div
                className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-mono font-bold text-xs relative z-10 transition duration-300 ${
                  activeStage === index
                    ? "bg-[#00E599] text-[#05080F] shadow-[0_0_15px_#00E599]"
                    : "bg-[#05080F] border border-white/20 text-[#94A3B8]"
                }`}
              >
                {proc.step}
              </div>

              {/* Content Card */}
              <div className="glass-card p-5 rounded-xl border-white/10 flex-1">
                <h4 className="text-base font-bold text-white mb-1">
                  {proc.title}
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {proc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="text-center">
          <Button href="#contact" variant="primary-emerald" size="md">
            Fuel Your Digital Idea with 60+ Experts
          </Button>
        </div>
      </div>
    </section>
  );
}
