"use client";

import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import AntiGravityCanvas from "../effects/AntiGravityCanvas";
import MagneticWrapper from "../effects/MagneticWrapper";
import { SITE_DATA } from "../../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-cyber">
      {/* 1. Integrated Anti-Gravity Multi-Depth Physics Canvas */}
      <AntiGravityCanvas density="high" />

      {/* 2. Ambient Radial Glow Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none blur-3xl opacity-75" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00E599]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0070F3]/8 rounded-full blur-3xl pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Status Pill Badge */}
        <div className="inline-flex mb-6">
          <Badge variant="emerald" dot size="md">
            Next-Gen Software &amp; AI Engineering
          </Badge>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
          Where Ideas Find <span className="text-gradient-emerald">Wings</span>.{" "}
          <br className="hidden sm:inline" />
          Scale with <span className="text-gradient-blue">World-Class</span> Tech.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {SITE_DATA.brand.description}
        </p>

        {/* Dual Primary & Secondary CTAs with Magnetic Micro-Interaction */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          <MagneticWrapper strength={0.28}>
            <Button
              href="#contact"
              variant="primary-emerald"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,229,153,0.3)]"
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
              className="w-full sm:w-auto"
            >
              Explore Services &amp; Capabilities
            </Button>
          </MagneticWrapper>
        </div>

        {/* 4. Cinematic 3D Circuit Video Showcase (Infinite Loop & Fully Responsive) */}
        <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-[#00E599]/30 shadow-[0_0_50px_-10px_rgba(0,229,153,0.25)] group transition-all duration-500 hover:border-[#00E599]/60 hover:shadow-[0_0_60px_-5px_rgba(0,229,153,0.35)]">
          {/* Cyber HUD Corner Telemetry */}
          <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[#00E599] uppercase">
              CIRCUIT_SYS::V1.7 // CORE_ACTIVE
            </span>
          </div>

          <div className="absolute top-3 right-4 z-20 hidden sm:flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#94A3B8]">
              RES::CINEMATIC // 60FPS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] animate-pulse" />
          </div>

          {/* Vignette Overlay for Seamless Edge Blending */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#05080F]/50 via-transparent to-black/20" />

          {/* Autoplay Infinite Looping Responsive Video */}
          <video
            src="/Logo_animation_with_circuit_effects_20260921061901.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto aspect-video object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>

        {/* Bottom Social Proof Metrics with Subtle Hover Depth */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/[0.08]">
          {SITE_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl glass-panel text-center hover:border-[#00E599]/30 transition duration-300"
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
