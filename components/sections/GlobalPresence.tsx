"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import { SITE_DATA, GlobalOffice } from "../../data/siteData";

import InteractiveGlobe from "../effects/InteractiveGlobe";

export default function GlobalPresence() {
  const [activeOffice, setActiveOffice] = useState<GlobalOffice>(SITE_DATA.globalOffices[0]);

  return (
    <section id="global" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Global Delivery Network
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            A Global Team of <span className="text-gradient-emerald">Innovators</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Navigate complex digital initiatives with confidence, backed by regional presence across 4 countries and a 24/7 delivery cycle.
          </p>
        </div>

        {/* Global Network Visual & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Interactive Rotating Cyber Globe */}
          <div className="lg:col-span-7 relative scroll-reveal-scale">
            <div className="glass-card p-4 sm:p-6 rounded-3xl relative flex flex-col items-center justify-center overflow-hidden border-white/10 bg-[#05080F]/90 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Ambient Grid Backdrop */}
              <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#0070F3]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Telemetry */}
              <div className="w-full flex items-center justify-between px-2 sm:px-4 py-2 border-b border-white/[0.08] mb-2 z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
                  <span className="text-[11px] font-mono tracking-widest text-[#00E599] uppercase">
                    EARTH_3D_SURFACE // ORBITAL_ROTATION
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#64748B]">
                  ACTIVE_HUBS: 4
                </div>
              </div>

              {/* 3D Rotating Earth Sphere with 4 Geographic Beacons */}
              <InteractiveGlobe
                offices={SITE_DATA.globalOffices}
                activeOffice={activeOffice}
                onSelectOffice={setActiveOffice}
              />
            </div>
          </div>

          {/* Right: Active Location Deep-Dive Card */}
          <div className="lg:col-span-5 scroll-reveal-right">
            <div className="glass-card p-6 sm:p-8 border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-[#00E599] font-mono">
                    {activeOffice.type}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#64748B]">NODE::{activeOffice.id.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">
                {activeOffice.country}
              </h3>
              <div className="text-sm font-semibold text-[#00A3FF] mb-4">
                {activeOffice.city}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold mb-1">
                  Physical Registered Address:
                </div>
                <p className="text-xs text-white leading-relaxed font-mono">
                  {activeOffice.address}
                </p>
              </div>

              {/* Office Selector Quick Tabs */}
              <div>
                <div className="text-xs text-[#94A3B8] font-semibold mb-3">
                  Switch Regional Hub:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SITE_DATA.globalOffices.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setActiveOffice(office)}
                      className={`p-2 rounded-lg text-left text-xs transition cursor-pointer ${
                        activeOffice.id === office.id
                          ? "bg-[#00E599]/15 border border-[#00E599]/40 text-[#00E599] font-semibold"
                          : "bg-white/[0.02] border border-white/[0.06] text-[#94A3B8] hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {office.country}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
