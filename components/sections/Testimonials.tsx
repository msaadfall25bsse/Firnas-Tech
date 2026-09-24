"use client";

import React, { useState, useEffect } from "react";
import Badge from "../ui/Badge";
import { SITE_DATA } from "../../data/siteData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch review every 4 seconds (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SITE_DATA.testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? SITE_DATA.testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === SITE_DATA.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = SITE_DATA.testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Why Global Clients <span className="text-gradient-emerald">Trust Us</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Real feedback from enterprise leaders who scaled their digital presence, user engagement, and technology platforms with Firnas.tech.
          </p>
        </div>

        {/* Single Review Card (One at a time on Mobile & Laptop) */}
        <div
          className="max-w-4xl mx-auto relative scroll-reveal-scale"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Ambient Back Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none" />

          <div
            key={current.id}
            className="glass-card p-8 sm:p-14 relative overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] min-h-[340px] sm:min-h-[360px] flex flex-col justify-between transition-all duration-500 animate-fadeIn"
          >
            {/* Top 4-Second Animated Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/[0.06] overflow-hidden">
              <div
                key={`prog-${currentIndex}-${isPaused}`}
                className={`h-full bg-gradient-to-r from-[#00E599] via-[#0070F3] to-[#00E599] ${
                  isPaused ? "w-full opacity-60" : "animate-progress-4s"
                }`}
              />
            </div>

            <div>
              {/* Star Rating & Verified Location */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5 text-[#00E599]">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
                  VERIFIED_REVIEW // {current.location.toUpperCase()}
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-2xl text-white font-medium leading-relaxed italic mb-8 sm:mb-10">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Info & Interactive Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E599]/20 to-[#0070F3]/20 border border-white/10 flex items-center justify-center font-black text-lg text-[#00E599] shadow-lg">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    {current.author}
                  </h4>
                  <div className="text-xs sm:text-sm text-[#00E599] font-medium">
                    {current.role} &bull; <span className="text-[#94A3B8]">{current.location}</span>
                  </div>
                </div>
              </div>

              {/* Next/Prev Navigation Buttons & Counter */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={prevTestimonial}
                  className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/15 hover:border-[#00E599]/40 flex items-center justify-center transition cursor-pointer"
                  aria-label="Previous review"
                >
                  &larr;
                </button>
                <span className="text-xs font-mono text-[#94A3B8] px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  0{currentIndex + 1} / 0{SITE_DATA.testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/15 hover:border-[#00E599]/40 flex items-center justify-center transition cursor-pointer"
                  aria-label="Next review"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Dots (4 Reviews) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {SITE_DATA.testimonials.map((item, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === dotIdx
                    ? "w-10 bg-gradient-to-r from-[#00E599] to-[#0070F3] shadow-[0_0_15px_rgba(0,229,153,0.6)]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View review ${dotIdx + 1} from ${item.author}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
