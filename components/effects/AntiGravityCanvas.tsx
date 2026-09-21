"use client";

import React, { useState, useEffect } from "react";

interface AntiGravityCanvasProps {
  className?: string;
  density?: "low" | "medium" | "high";
}

export default function AntiGravityCanvas({
  className = "",
}: AntiGravityCanvasProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile / small screen or touch device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (window.innerWidth < 768) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      animationFrameId = requestAnimationFrame(() => {
        setMouseOffset({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* ====================================================
          LAYER 1: BACKGROUND (Slow Drift, Low Parallax 0.3x)
          ==================================================== */}
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out will-change-transform"
        style={{
          transform: isMobile
            ? "none"
            : `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 6}px, 0)`,
        }}
      >
        {/* Soft Ambient Node A */}
        <div className="absolute top-[18%] left-[8%] animate-zg-back">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00E599]/40 blur-[1px]" />
          <div className="w-8 h-8 -translate-x-3 -translate-y-3 rounded-full bg-[#00E599]/10 blur-sm" />
        </div>

        {/* Soft Ambient Node B */}
        <div className="absolute top-[65%] right-[12%] animate-zg-back" style={{ animationDelay: "-5s" }}>
          <div className="w-3 h-3 rounded-full bg-[#0070F3]/40 blur-[1px]" />
          <div className="w-10 h-10 -translate-x-3.5 -translate-y-3.5 rounded-full bg-[#0070F3]/10 blur-md" />
        </div>

        {/* Thin Circuit Geometry Grid Fragment (desktop only) */}
        {!isMobile && (
          <div className="absolute top-[35%] right-[6%] opacity-20 animate-zg-back" style={{ animationDelay: "-9s" }}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" stroke="#00A3FF" strokeWidth="0.75" strokeDasharray="3 3" />
              <path d="M10 30H50M30 10V50" stroke="#00E599" strokeWidth="0.5" />
            </svg>
          </div>
        )}
      </div>

      {/* ====================================================
          LAYER 2: MIDGROUND (Moderate Float, Parallax 0.8x)
          ==================================================== */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: isMobile
            ? "none"
            : `translate3d(${mouseOffset.x * 14}px, ${mouseOffset.y * 14}px, 0)`,
        }}
      >
        {/* Floating Wireframe Cube */}
        <div className="absolute top-[28%] right-[22%] hidden sm:block animate-zg-mid" style={{ animationDelay: "-3s" }}>
          <div className="w-7 h-7 rounded border border-[#00E599]/30 rotate-45 backdrop-blur-[2px] bg-[#00E599]/[0.02] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]/60" />
          </div>
        </div>

        {/* Telemetry Coordinate Node (desktop only) */}
        {!isMobile && (
          <div className="absolute bottom-[24%] left-[16%] hidden md:flex items-center gap-2 p-1.5 rounded-lg border border-white/[0.08] bg-[#05080F]/60 backdrop-blur-md animate-zg-mid" style={{ animationDelay: "-7s" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-ping" />
            <span className="font-mono text-[9px] text-[#94A3B8]">GEO::ABT//034</span>
          </div>
        )}

        {/* Floating Diamond Node */}
        <div className="absolute top-[52%] left-[6%] animate-zg-mid" style={{ animationDelay: "-2s" }}>
          <div className="w-5 h-5 border border-[#0070F3]/40 rotate-12 flex items-center justify-center">
            <span className="w-1 h-1 bg-[#0070F3]" />
          </div>
        </div>
      </div>

      {/* ====================================================
          LAYER 3: FOREGROUND (Dynamic Physics, Parallax 1.5x)
          ==================================================== */}
      {!isMobile && (
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translate3d(${mouseOffset.x * 24}px, ${mouseOffset.y * 24}px, 0)`,
          }}
        >
          {/* Floating AI Core Chip Node */}
          <div className="absolute top-[14%] right-[10%] hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#00E599]/30 bg-[#05080F]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,153,0.15)] animate-zg-front">
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
            <span className="font-mono text-[10px] text-white">ZERO_G::ORBIT_OK</span>
          </div>

          {/* Cyber Hologram Fragment */}
          <div className="absolute bottom-[18%] right-[18%] hidden sm:block animate-zg-front" style={{ animationDelay: "-4s" }}>
            <div className="px-2.5 py-1 rounded border border-[#0070F3]/30 bg-white/[0.02] backdrop-blur-md">
              <span className="font-mono text-[9px] text-[#00A3FF]">AI_ML::GENAI_SYS</span>
            </div>
          </div>

          {/* Small Luminous Particle */}
          <div className="absolute top-[42%] left-[24%] animate-zg-front" style={{ animationDelay: "-6s" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00E599]" />
          </div>
        </div>
      )}
    </div>
  );
}
