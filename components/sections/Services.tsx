"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA, ServiceItem } from "../../data/siteData";

import Image from "next/image";

// Map each service to its tailored futuristic background image
const SERVICE_IMAGES: Record<string, string> = {
  "web-app": "/services/service_web_dev.jpg",
  "mobile-app": "/services/service_mobile_dev.jpg",
  "custom-software": "/services/service_custom_software.jpg",
  "ai-ml": "/services/service_ai_ml.jpg",
  "ui-ux": "/services/service_ui_ux.jpg",
  "digital-marketing": "/services/service_digital_marketing.jpg",
  "branding": "/services/service_branding.jpg",
  "staff-augmentation": "/services/service_staff_aug.jpg",
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Toggle card state: when clicked, image goes to background and content comes to top
  // If clicked again, image comes back. Or auto-reverts after exactly 30 seconds!
  const handleCardClick = (serviceId: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (activeCardId === serviceId) {
      // Content / card clicked while active -> return image to front
      setActiveCardId(null);
    } else {
      // Open card -> reveal content and start 30s auto-revert timer
      setActiveCardId(serviceId);
      timerRef.current = setTimeout(() => {
        setActiveCardId((current) => (current === serviceId ? null : current));
      }, 30000); // 30 seconds auto-revert
    }
  };

  const handleCloseCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveCardId(null);
  };

  // Cleanup timer on unmount
  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Custom SVG Icons for each service type
  const renderIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "web":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        );
      case "mobile":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        );
      case "custom":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "ai":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        );
      case "uiux":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
            <path d="m5 2 5 5M2 5l5 5" />
          </svg>
        );
      case "marketing":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case "branding":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
          </svg>
        );
      case "staff":
        return (
          <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#05080F]/65 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E599]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0070F3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal" data-revealed="true">
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

        {/* 8 Interactive Hover/Tap Reveal Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.services.map((service, index) => {
            const isBlue = index % 2 === 1;
            const bgImage = SERVICE_IMAGES[service.id] || "/services/service_web_dev.jpg";
            const isActive = activeCardId === service.id;
            const staggerClass = `stagger-${(index % 4) + 1}`;

            return (
              <div
                key={service.id}
                data-revealed="true"
                onClick={() => handleCardClick(service.id)}
                className={`relative min-h-[440px] sm:min-h-[430px] rounded-3xl overflow-hidden glass-card border transition-all duration-500 cursor-pointer select-none shadow-xl scroll-reveal ${staggerClass} ${
                  isBlue
                    ? "hover:border-[#0070F3]/60 hover:shadow-[0_0_35px_rgba(0,112,243,0.25)]"
                    : "hover:border-[#00E599]/60 hover:shadow-[0_0_35px_rgba(0,229,153,0.25)]"
                } ${
                  isActive
                    ? isBlue
                      ? "border-[#0070F3] ring-1 ring-[#0070F3]/50 shadow-[0_0_35px_rgba(0,112,243,0.3)]"
                      : "border-[#00E599] ring-1 ring-[#00E599]/50 shadow-[0_0_35px_rgba(0,229,153,0.3)]"
                    : "border-white/[0.09]"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                {/* 30-Second Countdown Progress Bar when Active */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
                    <div
                      className={`h-full ${
                        isBlue ? "bg-[#0070F3]" : "bg-[#00E599]"
                      } animate-timer-30s shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                )}

                {/* 1. Tailored High-Resolution Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                  <Image
                    src={bgImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover object-center transform transition-all duration-700 ease-out ${
                      isActive
                        ? "scale-110 opacity-20 filter blur-[3px]"
                        : "scale-100 opacity-95 group-hover:scale-105"
                    }`}
                    priority={index < 4}
                  />

                  {/* Subtle Gradient for Bottom Idle Text Readability */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/80 via-45% to-transparent transition-opacity duration-500 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Deep Glass Overlay when Active so Content Pops */}
                  <div
                    className={`absolute inset-0 bg-[#05080F]/92 backdrop-blur-md transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Top Corner: Service Number or Return to Image Button */}
                {isActive ? (
                  <button
                    onClick={handleCloseCard}
                    className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs font-mono border border-white/15 backdrop-blur-md transition-all duration-200 shadow-md active:scale-95"
                    title="Click to return to image preview"
                  >
                    <span>Image</span>
                    <span>✕</span>
                  </button>
                ) : (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isBlue ? "bg-[#0070F3]" : "bg-[#00E599]"
                      } animate-pulse`}
                    />
                    <span className="text-[11px] font-mono text-white/80">0{index + 1}</span>
                  </div>
                )}

                {/* 2. IDLE STATE: Image on Front with Title at the Bottom */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end transition-all duration-500 transform ${
                    isActive
                      ? "opacity-0 translate-y-4 pointer-events-none"
                      : "opacity-100 translate-y-0 pointer-events-auto"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 shadow-lg backdrop-blur-md border ${
                      isBlue
                        ? "bg-[#0070F3]/20 border-[#0070F3]/40 text-[#00A3FF]"
                        : "bg-[#00E599]/20 border-[#00E599]/40 text-[#00E599]"
                    }`}
                  >
                    {renderIcon(service.iconType)}
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#94A3B8] mb-1">
                    FIRNAS CORE SERVICE
                  </span>

                  <h3 className="text-xl font-black text-white leading-tight drop-shadow-md mb-2">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] font-medium pt-1">
                    <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
                    <span>Click / Tap to view details &rarr;</span>
                  </div>
                </div>

                {/* 3. ACTIVE STATE: Content on Front, Image in Background */}
                {/* Clicking anywhere on the active card body returns image back */}
                <div
                  className={`absolute inset-0 p-6 z-20 flex flex-col justify-between transition-all duration-500 transform ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <div>
                    {/* Header with Icon and Title */}
                    <div className="flex items-center gap-3 mb-3 pr-20">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                          isBlue
                            ? "bg-[#0070F3]/20 border-[#0070F3]/40 text-[#00A3FF]"
                            : "bg-[#00E599]/20 border-[#00E599]/40 text-[#00E599]"
                        }`}
                      >
                        {renderIcon(service.iconType)}
                      </div>
                      <h3 className="text-base font-extrabold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Service Description */}
                    <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Sub-Services Matrix Pills */}
                    <div className="mb-3">
                      <div className="text-[10px] uppercase tracking-wider text-[#00E599] font-mono font-semibold mb-2">
                        Key Capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.subServices.map((sub) => (
                          <span
                            key={sub}
                            className="text-[10px] px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.1] text-white/90 font-medium"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer & Return Hint */}
                  <div>
                    <div className="text-[10px] font-mono text-[#64748B] flex items-center justify-between mb-2">
                      <span>Click card to return &uarr;</span>
                      <span className="text-[#00E599]/80 font-mono text-[9px]">Auto-resets 30s</span>
                    </div>

                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                        className={`text-xs font-bold inline-flex items-center gap-1.5 py-2 px-3.5 rounded-lg transition-all duration-300 active:scale-95 ${
                          isBlue
                            ? "bg-[#0070F3] hover:bg-[#0055c4] text-white shadow-[0_0_15px_rgba(0,112,243,0.4)]"
                            : "bg-[#00E599] hover:bg-[#00c985] text-[#05080F] shadow-[0_0_15px_rgba(0,229,153,0.4)]"
                        }`}
                      >
                        <span>Explore Capabilities</span>
                        <span>&rarr;</span>
                      </button>

                      <span className="text-[10px] font-mono text-[#64748B]">
                        VERIFIED // 2026
                      </span>
                    </div>
                  </div>
                </div>
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
