"use client";

import React, { useState, useEffect } from "react";
import Badge from "../ui/Badge";
import { SITE_DATA } from "../../data/siteData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Smooth periodic highlight progression
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SITE_DATA.testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
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

        {/* Interactive Reviews Grid with Smooth Scroll-Reveal & Fluid Hover Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {SITE_DATA.testimonials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`glass-card p-7 sm:p-8 flex flex-col justify-between relative group cursor-pointer transition-all duration-500 border ${
                currentIndex === idx
                  ? "border-[#00E599]/60 shadow-[0_0_35px_rgba(0,229,153,0.18)] bg-white/[0.05] -translate-y-1.5"
                  : "border-white/[0.08] hover:border-[#00E599]/30 hover:bg-white/[0.03]"
              } ${
                idx % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"
              } stagger-${idx + 1}`}
            >
              {/* Subtle Corner Glow on Active */}
              {currentIndex === idx && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E599]/15 rounded-full blur-2xl pointer-events-none" />
              )}

              <div>
                {/* Rating Stars & Location */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1 text-[#00E599]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                    VERIFIED // {item.location.toUpperCase()}
                  </span>
                </div>

                {/* Quote Text with Quotation Accent */}
                <p className="text-sm sm:text-base text-[#CBD5E1] group-hover:text-white leading-relaxed italic transition-colors mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Details with Verified Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E599]/20 to-[#0070F3]/20 border border-white/10 flex items-center justify-center font-bold text-sm text-[#00E599]">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00E599] transition-colors">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#94A3B8]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#64748B] bg-white/[0.04] px-2 py-1 rounded-md border border-white/[0.06]">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Interactive Indicator Pills */}
        <div className="flex items-center justify-center gap-3">
          {SITE_DATA.testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIdx
                  ? "w-8 bg-gradient-to-r from-[#00E599] to-[#0070F3] shadow-[0_0_12px_rgba(0,229,153,0.5)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`View review ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
