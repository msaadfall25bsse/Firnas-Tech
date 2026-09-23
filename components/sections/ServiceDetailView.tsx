"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";
import DeveloperApplyModal from "@/components/modals/DeveloperApplyModal";
import { ServiceDetail } from "@/lib/data/servicesData";

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState(0);

  return (
    <main className="min-h-screen bg-[#05080F] text-white">
      <DeveloperApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        developerEmail="msaadbsse296@gmail.com"
      />

      {/* 1. Page Hero with Video Background & Breadcrumbs */}
      <PageHero
        badge={service.badge}
        badgeVariant="emerald"
        title={service.title}
        titleGradient={service.titleGradient}
        description={service.description}
        videoSrc={service.videoSrc || "/videos/hero_services.mp4"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      >
        <Button href="/contact" variant="primary-emerald" size="md">
          Request Project Consultation
        </Button>
        <Button
          type="button"
          variant="glass-outline"
          size="md"
          onClick={() => setApplyModalOpen(true)}
        >
          Hire Dedicated Squad
        </Button>
      </PageHero>

      {/* 2. Key Highlights / Impact Metrics Bar */}
      <section className="relative -mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B132B]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {service.keyHighlights.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#00E599] font-mono tracking-tight">
                {item.metric}
              </div>
              <div className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Capabilities & Sub-Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E599] px-3 py-1 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 inline-block mb-3">
            Core Service Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Solutions Tailored to Your Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed">
            {service.tagline}. Built with enterprise security, responsive agility, and modern modular code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.subServices.map((sub, idx) => (
            <div
              key={sub.title}
              onMouseEnter={() => setSelectedSubService(idx)}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                selectedSubService === idx
                  ? "bg-gradient-to-br from-[#0B1528] to-[#050B18] border-[#00E599]/50 shadow-[0_15px_40px_rgba(0,229,153,0.1)]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E599]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00E599]/15 transition-colors" />

              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl p-3 rounded-xl bg-white/[0.05] border border-white/10 shrink-0">
                  {sub.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E599] transition-colors">
                    {sub.title}
                  </h3>
                  <span className="text-xs font-mono text-[#64748B]">
                    FIRNAS.TECH / {service.slug}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {sub.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                  Key Deliverables & Specs:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sub.deliverables.map((del) => (
                    <div
                      key={del}
                      className="text-xs text-[#94A3B8] flex items-center gap-2 bg-white/[0.02] border border-white/5 p-2 rounded-lg"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#00E599] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-[#00E599] hover:underline flex items-center gap-1.5"
                >
                  Request Specs for {sub.title} &rarr;
                </Link>
                <span className="text-[11px] font-mono text-[#64748B]">Ready to Deploy</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Step-by-Step Delivery Roadmap */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#091122]/60 to-transparent border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E599] px-3 py-1 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 inline-block mb-3">
              Proven Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Step-by-Step Execution Process
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
              Transparent, repeatable, and milestone-driven execution from day one to continuous support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((p, idx) => (
              <div
                key={p.step}
                className="bg-[#050A14]/80 backdrop-blur-md border border-white/10 hover:border-[#00E599]/40 p-6 rounded-2xl transition-all hover:-translate-y-1 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-black text-[#00E599]/80 group-hover:text-[#00E599] transition-colors">
                    {p.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#64748B] bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00E599] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technologies & Frameworks Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E599] px-3 py-1 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 inline-block mb-3">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Frameworks & Languages We Master
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Battle-tested technologies powering resilient and future-proof systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {service.technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#00E599]/40 p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <div className="text-xs font-semibold text-white group-hover:text-[#00E599] transition-colors">
                {tech.name}
              </div>
              <div className="text-[10px] font-mono text-[#64748B] mt-0.5">
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies & Standards Pills */}
        <div className="mt-12 bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg">⚡</span>
            <div>
              <div className="text-xs font-semibold text-white">
                Engineering Methodologies & Standards
              </div>
              <div className="text-[11px] text-[#64748B]">
                DevSecOps, automated CI/CD pipelines, and high code test coverage.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.methodologies.map((m) => (
              <span
                key={m}
                className="text-xs font-mono text-[#CBD5E1] bg-white/[0.05] border border-white/10 px-3 py-1 rounded-lg"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Other Services Navigation Bar */}
      <section className="py-12 border-t border-white/10 bg-[#05080F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#94A3B8]">
            Looking for other solutions? Explore all core offerings from FIRNAS.TECH.
          </div>
          <div className="flex items-center gap-3">
            <Button href="/services" variant="glass-outline" size="sm">
              All Services
            </Button>
            <Button href="/work" variant="glass-outline" size="sm">
              View Case Studies
            </Button>
            <Button href="/contact" variant="primary-emerald" size="sm">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
