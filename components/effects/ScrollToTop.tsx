"use client";

import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
          const winHeightPx =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;

          setIsVisible(scrollPx > 350);
          setScrollProgress(Math.min(100, Math.max(0, scrolled)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress math (radius = 18, circumference = 2 * PI * 18 ≈ 113.1)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="relative w-12 h-12 rounded-full glass-card border border-white/20 bg-[#05080F]/90 hover:bg-[#0A1020] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,229,153,0.5)] hover:border-[#00E599]/60 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
      >
        {/* Circular Progress Meter */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-white/10 fill-none stroke-[2]"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-[#00E599] fill-none stroke-[2.5] transition-all duration-100 ease-out"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              strokeLinecap: "round",
            }}
          />
        </svg>

        {/* Up Arrow Icon */}
        <svg
          className="w-5 h-5 text-white/90 group-hover:text-[#00E599] group-hover:-translate-y-0.5 transition-all duration-300 relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
