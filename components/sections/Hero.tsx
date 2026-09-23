"use client";

import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import AntiGravityCanvas from "../effects/AntiGravityCanvas";
import MagneticWrapper from "../effects/MagneticWrapper";
import { SITE_DATA } from "../../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] h-full sm:min-h-[95vh] flex items-center justify-center pt-20 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* 1. Responsive Video Background:
          - Mobile (sm:hidden): Top-aligned 9:16 Portrait Video (hero_home_mobile.mp4)
            positioned right below header, perfectly covering the headline & badge.
          - Desktop (hidden sm:block): Landscape Video (please_add_new_white_green_com.mp4)
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Mobile Portrait Video (Aligned to Top below Header) */}
        <video
          src="/videos/hero_home_mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-top opacity-90 sm:hidden filter brightness-105 contrast-105"
        />

        {/* Desktop Landscape Video (16:9) */}
        <video
          src="/videos/please_add_new_white_green_com.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hidden sm:block w-full h-full object-cover object-center opacity-65 sm:opacity-75 filter brightness-115 contrast-110"
        />

        {/* Responsive Video Fade Overlays:
            Mobile: Video covers top heading area, then seamlessly dissolves into #05080F before buttons
            Desktop: Smooth left-to-right fade mask
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05080F]/25 via-35% to-[#05080F] via-50% sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#05080F]/45 via-50% to-[#05080F]/90 hidden sm:block" />
      </div>

      {/* 2. Integrated Anti-Gravity Multi-Depth Physics Canvas */}
      <AntiGravityCanvas density="medium" />

      {/* 3. Ambient Radial Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-radial-glow pointer-events-none blur-3xl opacity-40 z-[1]" />

      {/* 4. Hero Content Container (Scaled for 100% Fit Inside Video Framing on Mobile) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Top Status Pill Badge */}
        <div className="inline-flex mb-3 sm:mb-6 max-w-full">
          <Badge variant="emerald" dot size="md" className="text-[9px] sm:text-xs py-0.5 sm:py-1">
            Next-Gen Software &amp; AI Engineering
          </Badge>
        </div>

        {/* Hero Headline (Slightly more compact on mobile to be fully framed by the top video) */}
        <h1 className="text-2xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] sm:leading-[1.1] mb-3 sm:mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] break-words">
          Where Ideas Find <span className="text-gradient-emerald">Wings</span>.{" "}
          <br className="hidden sm:inline" />
          Scale with <span className="text-gradient-blue">World-Class</span> Tech.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-[11px] sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-2 sm:px-0">
          {SITE_DATA.brand.description}
        </p>

        {/* Dual Primary & Secondary CTAs (Positioned in clean black zone below video) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-16 w-full max-w-xs sm:max-w-none mx-auto">
          <MagneticWrapper strength={0.28}>
            <Button
              href="#contact"
              variant="primary-emerald"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_35px_rgba(0,229,153,0.4)] text-xs sm:text-base py-3 sm:py-4 font-semibold"
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
              className="w-full sm:w-auto bg-[#05080F]/60 backdrop-blur-md text-xs sm:text-base py-3 sm:py-4 border-white/20"
            >
              Explore Services &amp; Capabilities
            </Button>
          </MagneticWrapper>
        </div>

        {/* Social Proof Metrics with Frosted Glassmorphic Depth */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto pt-5 sm:pt-8 border-t border-white/[0.12]">
          {SITE_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-2.5 sm:p-4 rounded-xl glass-panel bg-[#05080F]/60 backdrop-blur-lg border border-white/[0.1] text-center hover:border-[#00E599]/40 transition duration-300 shadow-lg"
            >
              <div className="text-lg sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">
                {stat.value}
                <span className="text-[#00E599]">{stat.suffix}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-[#94A3B8] font-medium">{stat.label}</div>
              <div className="text-[8px] sm:text-[10px] text-[#64748B] mt-0.5 font-mono">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
