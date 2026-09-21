"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA, ServiceItem } from "../../data/siteData";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Custom SVG Icons for each service type
  const renderIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "web":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        );
      case "mobile":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        );
      case "custom":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "ai":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        );
      case "uiux":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
            <path d="m5 2 5 5M2 5l5 5" />
          </svg>
        );
      case "marketing":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case "branding":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
          </svg>
        );
      case "staff":
        return (
          <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E599]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0070F3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Our Core Offerings
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Comprehensive <span className="text-gradient-emerald">Software &amp; AI</span> Solutions.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Firnas.tech enables companies by means of creative IT solutions. Focusing on agility and accuracy, we drive digital transformation across all business layers.
          </p>
        </div>

        {/* 8 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.services.map((service, index) => {
            const isBlue = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`glass-card p-6 flex flex-col justify-between group ${
                  isBlue ? "glass-card-blue" : ""
                }`}
              >
                <div>
                  {/* Top Icon & Category Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isBlue
                          ? "bg-[#0070F3]/10 text-[#00A3FF] group-hover:bg-[#0070F3] group-hover:text-white"
                          : "bg-[#00E599]/10 text-[#00E599] group-hover:bg-[#00E599] group-hover:text-[#05080F]"
                      }`}
                    >
                      {renderIcon(service.iconType)}
                    </div>
                    <span className="text-xs font-mono text-[#64748B] group-hover:text-[#94A3B8]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E599] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Verified Sub-Services Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.subServices.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[#94A3B8]"
                      >
                        {sub}
                      </span>
                    ))}
                    {service.subServices.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-[#64748B]">
                        +{service.subServices.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn More Interactive Trigger */}
                <button
                  onClick={() => setSelectedService(service)}
                  className={`text-xs font-semibold inline-flex items-center gap-1 transition-all duration-300 pt-3 border-t border-white/[0.06] ${
                    isBlue
                      ? "text-[#00A3FF] hover:text-white"
                      : "text-[#00E599] hover:text-white"
                  }`}
                >
                  <span>Explore Capabilities</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full glass-card p-6 sm:p-8 border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00E599]/10 text-[#00E599] flex items-center justify-center">
                  {renderIcon(selectedService.iconType)}
                </div>
                <h3 className="text-xl font-extrabold text-white">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              {selectedService.shortDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#00E599] font-mono font-semibold mb-3">
                Included Specialized Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.subServices.map((sub) => (
                  <div
                    key={sub}
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs text-white flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedService(null)}
              >
                Close
              </Button>
              <Button
                href="#contact"
                variant="primary-emerald"
                size="sm"
                onClick={() => setSelectedService(null)}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
