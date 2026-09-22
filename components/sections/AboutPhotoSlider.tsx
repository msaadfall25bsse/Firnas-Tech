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
  const [rotationAngle, setRotationAngle] = useState(0);

  // Auto-rotate the 3D Cube exactly every 3 seconds (3000ms) by 90 degrees
  useEffect(() => {
    const timer = setInterval(() => {
      setRotationAngle((prev) => prev - 90);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Compute active face index for HUD counter (0 to 3)
  const activeIndex = Math.abs(Math.round(rotationAngle / 90)) % SLIDES.length;

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card p-2.5 sm:p-3 border-[#00E599]/35 shadow-[0_0_45px_-10px_rgba(0,229,153,0.3)] group transition-all duration-500 hover:border-[#00E599]/60">
      {/* Top Cyber HUD Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] mb-3 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-[#00E599] uppercase">
            GLOBAL_TECH_HUB // 3D_CUBE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-[#94A3B8]">
            0{activeIndex + 1} / 0{SLIDES.length}
          </span>
          <Badge variant="emerald" size="sm">
            3-SEC CUBE ROTATION
          </Badge>
        </div>
      </div>

      {/* 3D Perspective Stage Container */}
      <div
        className="relative w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-[#03050a]"
        style={{ perspective: "1400px" }}
      >
        {/* The 4-Sided 3D Cube Box */}
        <div
          className="w-full h-full relative transition-transform duration-1000 cubic-bezier(0.2, 0.9, 0.3, 1)"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-280px) rotateY(${rotationAngle}deg)`,
          }}
        >
          {/* Face 1: Front (0 deg) */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
            style={{
              transform: "rotateY(0deg) translateZ(280px)",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={SLIDES[0].image}
              alt={SLIDES[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="px-3.5 py-2 rounded-xl bg-[#05080F]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {SLIDES[0].title}
                  </h4>
                  <p className="text-[10px] text-[#00E599] font-mono">
                    {SLIDES[0].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Face 2: Right (90 deg) */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
            style={{
              transform: "rotateY(90deg) translateZ(280px)",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={SLIDES[1].image}
              alt={SLIDES[1].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="px-3.5 py-2 rounded-xl bg-[#05080F]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {SLIDES[1].title}
                  </h4>
                  <p className="text-[10px] text-[#00E599] font-mono">
                    {SLIDES[1].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Face 3: Back (180 deg) */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
            style={{
              transform: "rotateY(180deg) translateZ(280px)",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={SLIDES[2].image}
              alt={SLIDES[2].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="px-3.5 py-2 rounded-xl bg-[#05080F]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {SLIDES[2].title}
                  </h4>
                  <p className="text-[10px] text-[#00E599] font-mono">
                    {SLIDES[2].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Face 4: Left (270 deg) */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
            style={{
              transform: "rotateY(270deg) translateZ(280px)",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={SLIDES[3].image}
              alt={SLIDES[3].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="px-3.5 py-2 rounded-xl bg-[#05080F]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {SLIDES[3].title}
                  </h4>
                  <p className="text-[10px] text-[#00E599] font-mono">
                    {SLIDES[3].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Synchronized Active Cube Face Dots */}
      <div className="flex items-center justify-center gap-2 pt-3 pb-1 select-none">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              // Rotate directly to target face index
              const currentMod = (rotationAngle % 360 + 360) % 360;
              const targetMod = (idx * 90) % 360;
              let diff = targetMod - currentMod;
              if (diff > 180) diff -= 360;
              if (diff < -180) diff += 360;
              setRotationAngle((prev) => prev - diff);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === activeIndex
                ? "w-8 bg-[#00E599] shadow-[0_0_10px_#00E599]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Rotate 3D Cube to face ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
