"use client";

import React, { useState } from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA, IndustryItem } from "../../data/siteData";

// Map each industry vertical to its authentic high-definition image
const INDUSTRY_IMAGES: Record<string, string> = {
  logistics: "/industries/industry_logistics.jpg",
  healthcare: "/industries/industry_healthcare.jpg",
  travel: "/industries/industry_travel.jpg",
  ecommerce: "/industries/industry_ecommerce.jpg",
  finance: "/industries/industry_finance.jpg",
  education: "/industries/industry_education.jpg",
  sports: "/industries/industry_sports.jpg",
  restaurant: "/industries/industry_restaurant.jpg",
  "real-estate": "/industries/industry_real_estate.jpg",
};

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  const openModal = (ind: IndustryItem) => {
    setSelectedIndustry(ind);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedIndustry(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="industries" className="relative py-28 bg-[#070B14]/65 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <Badge variant="blue" dot size="sm" className="mb-4">
            Domain Expertise
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Preferred <span className="text-gradient-blue">Transformation Partner</span> of Global Leaders.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Combining deep engineering talent with industry-specific insight to craft solutions across 9 high-growth sectors.
          </p>
        </div>

        {/* 9 Industry Cards Grid:
            - Desktop / Laptop: 3 Columns x 3 Rows grid layout (or 5 per line responsive flow)
            - Tablet / Mobile: 3 Columns (or 2-3 responsive grid flow)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {SITE_DATA.industries.map((ind, index) => {
            const bgImage = INDUSTRY_IMAGES[ind.id] || "/industries/industry_logistics.jpg";

            return (
              <div
                key={ind.id}
                onClick={() => openModal(ind)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#00E599]/60 cursor-pointer transition-all duration-500 shadow-xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[300px] p-6"
              >
                {/* Authentic Industry Background Photo with Sharp 75-80% Opacity */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                  <Image
                    src={bgImage}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center opacity-75 sm:opacity-80 filter brightness-110 contrast-115 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Dark Contrast Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/65 to-black/30" />
                </div>

                {/* Top Badge & Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[#00E599] font-bold">
                    0{index + 1} // SECTOR
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#00E599] text-white group-hover:text-black flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-lg">
                    &rarr;
                  </span>
                </div>

                {/* Bottom Card Title & Sub-Text */}
                <div className="relative z-10 pt-12">
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#00E599] transition-colors leading-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] line-clamp-2 leading-relaxed font-normal mb-3">
                    {ind.headline}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#00E599] font-semibold group-hover:underline">
                    <span>Explore Solutions</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Popup for Selected Industry Card */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Blurred Background Overlay */}
          <div
            className="fixed inset-0 bg-[#05080F]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
            onClick={closeModal}
          />

          {/* Modal Content Dialog Box */}
          <div className="relative w-full max-w-3xl bg-[#0A0F1D] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-auto animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-white/20 text-[#94A3B8] hover:text-white flex items-center justify-center transition border border-white/10 focus:outline-none"
              aria-label="Close dialog"
            >
              &times;
            </button>

            {/* Modal Header Banner */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <Image
                src={INDUSTRY_IMAGES[selectedIndustry.id] || "/industries/industry_logistics.jpg"}
                alt={selectedIndustry.name}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center filter brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/50 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <Badge variant="emerald" dot size="sm" className="mb-2">
                  VERTICAL // {selectedIndustry.name.toUpperCase()}
                </Badge>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {selectedIndustry.name}
                </h3>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#00E599] mb-2">
                  {selectedIndustry.headline}
                </h4>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {selectedIndustry.description}
                </p>
              </div>

              {/* Capabilities & Solutions List */}
              <div>
                <h5 className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono font-semibold mb-3">
                  Core Specialized Capabilities &amp; Blueprints:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedIndustry.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white flex items-start gap-2.5"
                    >
                      <span className="text-[#00E599] font-bold text-sm">&check;</span>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#64748B] font-mono">
                  Custom architecture ready for {selectedIndustry.name}
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button variant="ghost" size="sm" onClick={closeModal} className="w-full sm:w-auto">
                    Close Window
                  </Button>
                  <Button
                    href="/contact"
                    variant="primary-emerald"
                    size="sm"
                    onClick={closeModal}
                    className="w-full sm:w-auto shadow-[0_0_20px_rgba(0,229,153,0.3)]"
                  >
                    Discuss Solution &rarr;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
