"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import { SITE_DATA } from "../../data/siteData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Testimonial Interactive Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden border-white/10 shadow-2xl min-h-[320px] flex flex-col justify-between">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Star Rating & Location Badge */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-1 text-[#00E599]">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-mono text-[#64748B]">
                  VERIFIED_REVIEW // {current.location.toUpperCase()}
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-2xl text-white font-medium leading-relaxed italic mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Info & Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
              <div>
                <h4 className="text-base font-extrabold text-white">
                  {current.author}
                </h4>
                <div className="text-xs text-[#00E599]">
                  {current.role} &bull; <span className="text-[#94A3B8]">{current.location}</span>
                </div>
              </div>

              {/* Next/Prev Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition cursor-pointer"
                  aria-label="Previous review"
                >
                  &larr;
                </button>
                <span className="text-xs font-mono text-[#64748B]">
                  0{currentIndex + 1} / 0{SITE_DATA.testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition cursor-pointer"
                  aria-label="Next review"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
