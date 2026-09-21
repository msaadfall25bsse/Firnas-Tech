"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import { SITE_DATA, GlobalOffice } from "../../data/siteData";

export default function GlobalPresence() {
  const [activeOffice, setActiveOffice] = useState<GlobalOffice>(SITE_DATA.globalOffices[0]);

  return (
    <section id="global" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Global Delivery Network
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            A Global Team of <span className="text-gradient-emerald">Innovators</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Navigate complex digital initiatives with confidence, backed by regional presence across 5 countries and a 24/7 delivery cycle.
          </p>
        </div>

        {/* Global Network Visual & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Stylized Map / Radar Container */}
          <div className="lg:col-span-7 relative">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative min-h-[360px] flex items-center justify-center overflow-hidden border-white/10 bg-[#05080F]/80">
              {/* World Map Circuit Background Lines */}
              <div className="absolute inset-0 bg-grid-cyber opacity-40" />
              <div className="absolute w-72 h-72 rounded-full border border-white/[0.05] animate-ping opacity-20 pointer-events-none" />
              <div className="absolute w-96 h-96 rounded-full border border-[#00E599]/10 pointer-events-none" />

              {/* Connected Coordinate Points for the 5 Countries */}
              <div className="relative w-full aspect-[16/9] max-w-xl mx-auto">
                {/* Visual World Silhouette Guides */}
                <svg className="w-full h-full opacity-30 fill-none stroke-[#64748B] stroke-1" viewBox="0 0 100 60">
                  {/* Stylized continent arcs */}
                  <path d="M15 20 Q 25 15 35 25 T 30 45" strokeDasharray="1 2" />
                  <path d="M45 15 Q 55 12 60 22 T 55 35" strokeDasharray="1 2" />
                  <path d="M60 25 Q 70 20 85 28 T 80 45" strokeDasharray="1 2" />
                </svg>

                {/* Office Interactive Pins */}
                {SITE_DATA.globalOffices.map((office) => {
                  const isSelected = activeOffice.id === office.id;
                  return (
                    <button
                      key={office.id}
                      onClick={() => setActiveOffice(office)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                      style={{
                        left: `${office.coordinates.x}%`,
                        top: `${office.coordinates.y}%`,
                      }}
                      title={`${office.city}, ${office.country}`}
                    >
                      {/* Pulse Wave */}
                      <span
                        className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${
                          isSelected ? "bg-[#00E599]" : "bg-[#0070F3] group-hover:bg-[#00E599]"
                        }`}
                      />
                      {/* Node Core */}
                      <span
                        className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#00E599] border-white shadow-[0_0_15px_#00E599] scale-125"
                            : "bg-[#05080F] border-[#00A3FF] group-hover:border-[#00E599]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? "bg-[#05080F]" : "bg-[#00A3FF]"
                          }`}
                        />
                      </span>

                      {/* Tooltip Label */}
                      <span className="absolute left-1/2 -translate-x-1/2 top-6 text-[10px] font-mono px-2 py-0.5 rounded bg-black/90 border border-white/10 text-white whitespace-nowrap opacity-90 group-hover:opacity-100">
                        {office.country}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Active Location Deep-Dive Card */}
          <div className="lg:col-span-5">
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
