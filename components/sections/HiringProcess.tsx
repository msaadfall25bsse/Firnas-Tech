import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function HiringProcess() {
  return (
    <section className="relative py-28 bg-[#05080F]/80 border-t border-white/[0.06] overflow-hidden">
      {/* 1. Static Fixed High-Tech Background Image (globe, compass, antenna) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-35 mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: "url('/tech-news-globe-bg.jpg')" }}
      />
      {/* Gradient vignette for 100% heading and text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05080F]/90 via-[#05080F]/75 to-[#05080F]/90 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Rapid Staff Augmentation
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Hire Pre-Vetted Engineers in <span className="text-gradient-emerald">3 Easy Steps</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Eliminate traditional hiring friction. Access senior talent matched to your specific architectural requirements in hours, not weeks.
          </p>
        </div>

        {/* 3 Step Interactive Workflow with Animated Connector Lines */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Horizontal Desktop Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#00E599]/30 via-[#0070F3]/30 to-[#00E599]/30 -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {SITE_DATA.hiringSteps.map((step, idx) => (
              <div
                key={step.step}
                className={`glass-card p-8 flex flex-col items-center text-center relative group hover:border-[#00E599]/50 transition duration-300 scroll-reveal stagger-${idx + 1}`}
              >
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#05080F] border border-[#00E599]/40 flex items-center justify-center text-lg font-mono font-black text-[#00E599] mb-6 shadow-[0_0_20px_rgba(0,229,153,0.2)] group-hover:scale-110 group-hover:bg-[#00E599] group-hover:text-[#05080F] transition duration-300">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center scroll-reveal-scale">
          <Button href="#contact" variant="primary-emerald" size="md">
            Start Your Developer Match Today
          </Button>
        </div>
      </div>
    </section>
  );
}
