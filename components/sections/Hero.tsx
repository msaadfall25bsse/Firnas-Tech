"use client";

import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import AntiGravityCanvas from "../effects/AntiGravityCanvas";
import MagneticWrapper from "../effects/MagneticWrapper";
import { SITE_DATA } from "../../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] h-full sm:min-h-[95vh] flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* 1. Responsive Video Background:
          - Mobile (sm:hidden): Dedicated 9:16 Portrait Canvas Video (hero_home_mobile.mp4)
            where all text ('Firnas.tech') fits 100% inside screen width without horizontal clipping.
          - Desktop (hidden sm:block): Landscape Video (please_add_new_white_green_com.mp4)
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Mobile Portrait Video (9:16 padded fit) */}
        <video
          src="/videos/hero_home_mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-85 sm:hidden filter brightness-110 contrast-110"
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

        {/* Responsive Video Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#05080F]/45 via-50% to-[#05080F]/90 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/40 to-transparent md:hidden" />
      </div>

      {/* 2. Integrated Anti-Gravity Multi-Depth Physics Canvas */}
      <AntiGravityCanvas density="medium" />

      {/* 3. Ambient Radial Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-radial-glow pointer-events-none blur-3xl opacity-40 z-[1]" />

      {/* 4. Hero Content Container (Fully Responsive with 100% Text Fit) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Top Status Pill Badge */}
        <div className="inline-flex mb-4 sm:mb-6 max-w-full">
          <Badge variant="emerald" dot size="md" className="text-[10px] sm:text-xs">
            Next-Gen Software &amp; AI Engineering
          </Badge>
        </div>

        {/* Hero Headline (Responsive Mobile Typography with 100% Fit) */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] break-words">
          Where Ideas Find <span className="text-gradient-emerald">Wings</span>.{" "}
          <br className="hidden sm:inline" />
          Scale with <span className="text-gradient-blue">World-Class</span> Tech.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xs sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] px-2 sm:px-0">
          {SITE_DATA.brand.description}
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-10 sm:mb-16 w-full max-w-xs sm:max-w-none mx-auto">
          <MagneticWrapper strength={0.28}>
            <Button
              href="#contact"
              variant="primary-emerald"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_35px_rgba(0,229,153,0.4)] text-xs sm:text-base py-3 sm:py-4"
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
              className="w-full sm:w-auto bg-[#05080F]/50 backdrop-blur-md text-xs sm:text-base py-3 sm:py-4"
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
