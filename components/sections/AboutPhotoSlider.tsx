"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Badge from "../ui/Badge";

const SLIDES = [
  {
    id: 1,
    title: "Firnas Tech Career Fair & Leadership Team",
    location: "Global Engineering Hub",
    image: "/team/about_slide_1.jpg",
  },
  {
    id: 2,
    title: "Software Developers Collaboration",
    location: "Engineering Workspace",
    image: "/team/about_slide_2.jpg",
  },
  {
    id: 3,
    title: "Tech Innovation & Mentorship Squad",
    location: "R&D Operations Center",
    image: "/team/about_slide_3.jpg",
  },
  {
    id: 4,
    title: "Firnas Tech Campus Career Fair Event",
    location: "COMSATS / University Hub",
    image: "/team/about_slide_4.jpg",
  },
];

export default function AboutPhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate every 4 seconds with smooth 3D box cube turn effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card p-2 sm:p-3 border-[#00E599]/30 shadow-[0_0_40px_-10px_rgba(0,229,153,0.25)] group transition-all duration-500 hover:border-[#00E599]/60 hover:shadow-[0_0_50px_-5px_rgba(0,229,153,0.35)]">
      {/* Top Cyber HUD Telemetry Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] mb-2 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-[#00E599] uppercase">
            GLOBAL_TECH_HUB // HQ_OPS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-[#94A3B8]">
            0{currentIndex + 1} / 0{SLIDES.length}
          </span>
          <Badge variant="emerald" size="sm">
            3D AUTO-ROTATING
          </Badge>
        </div>
      </div>

      {/* 3D Perspective Box Stage */}
      <div
        className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] w-full bg-[#05080F]"
        style={{ perspective: "1200px" }}
      >
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          const isPrev = idx === (currentIndex - 1 + SLIDES.length) % SLIDES.length;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
                isActive
                  ? "opacity-100 z-10 translate-x-0 rotate-y-0 scale-100"
                  : isPrev
                  ? "opacity-0 z-0 -translate-x-full -rotate-y-45 scale-90"
                  : "opacity-0 z-0 translate-x-full rotate-y-45 scale-90"
              }`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                priority={idx === 0}
              />

              {/* Edge Gradient & Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-[#05080F]/30 to-transparent pointer-events-none" />

              {/* Slide Info Pill Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between z-20">
                <div className="px-3.5 py-2 rounded-xl bg-[#05080F]/85 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {slide.title}
                    </h4>
                    <p className="text-[10px] text-[#00E599] font-mono">
                      {slide.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 3D Box Slide Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#00E599] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl focus:outline-none"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#00E599] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl focus:outline-none"
          aria-label="Next Slide"
        >
          &#8250;
        </button>
      </div>

      {/* Progress Dots Indicator */}
      <div className="flex items-center justify-center gap-2 pt-3 pb-1">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsTransitioning(false), 800);
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-[#00E599] shadow-[0_0_10px_#00E599]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
