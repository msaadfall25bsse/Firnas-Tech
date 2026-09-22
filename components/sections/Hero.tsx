"use client";

import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import AntiGravityCanvas from "../effects/AntiGravityCanvas";
import MagneticWrapper from "../effects/MagneticWrapper";
import { SITE_DATA } from "../../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* 1. Full-Screen Cinematic 3D Circuit Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          src="/Logo_animation_with_circuit_effects_20260921061901.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-65 sm:opacity-75 filter brightness-115 contrast-110"
        />
        {/* Responsive Video Fade Mask:
            Desktop: Right side clear & prominent -> Left side smooth fade out
            Mobile: Top side clear & prominent -> Bottom side smooth fade out
        */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#05080F]/40 via-50% to-[#05080F]/90 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/40 to-transparent md:hidden" />
      </div>

      {/* 2. Integrated Anti-Gravity Multi-Depth Physics Canvas */}
      <AntiGravityCanvas density="medium" />

      {/* 3. Ambient Radial Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none blur-3xl opacity-40 z-[1]" />

      {/* 4. Hero Content Container (Positioned On Top of Full Video Background) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Status Pill Badge */}
        <div className="inline-flex mb-6">
          <Badge variant="emerald" dot size="md">
            Next-Gen Software &amp; AI Engineering
          </Badge>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          Where Ideas Find <span className="text-gradient-emerald">Wings</span>.{" "}
          <br className="hidden sm:inline" />
          Scale with <span className="text-gradient-blue">World-Class</span> Tech.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed mb-10 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {SITE_DATA.brand.description}
        </p>

        {/* Dual Primary & Secondary CTAs with Magnetic Micro-Interaction */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <MagneticWrapper strength={0.28}>
            <Button
              href="#contact"
              variant="primary-emerald"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_35px_rgba(0,229,153,0.4)]"
              icon={
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
            >
              Start Your Project
            </Button>
          </MagneticWrapper>

          <MagneticWrapper strength={0.2}>
            <Button
              href="#services"
              variant="glass-outline"
              size="lg"
              className="w-full sm:w-auto bg-[#05080F]/40 backdrop-blur-md"
            >
              Explore Services &amp; Capabilities
            </Button>
          </MagneticWrapper>
        </div>

        {/* Social Proof Metrics with Frosted Glassmorphic Depth */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/[0.12]">
          {SITE_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl glass-panel bg-[#05080F]/60 backdrop-blur-lg border border-white/[0.1] text-center hover:border-[#00E599]/40 transition duration-300 shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {stat.value}
                <span className="text-[#00E599]">{stat.suffix}</span>
              </div>
              <div className="text-xs text-[#94A3B8] font-medium">{stat.label}</div>
              <div className="text-[10px] text-[#64748B] mt-0.5 font-mono">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
