import React from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function TalentNetwork() {
  return (
    <section id="talent" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <Badge variant="blue" dot size="sm" className="mb-4">
            Elite Engineering Pool
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Meet Our <span className="text-gradient-blue">Talent Network</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Reliable, pre-vetted professionals on demand. Connect with top software developers, AI researchers, and UI/UX architects tested by industry veterans.
          </p>
        </div>

        {/* Selected Talent Profiles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          {SITE_DATA.talentNetwork.map((talent, idx) => (
            <div
              key={talent.name}
              className={`glass-card p-5 sm:p-6 flex flex-col justify-between group hover:border-[#0070F3]/60 transition-all duration-500 shadow-xl scroll-reveal stagger-${idx + 1}`}
            >
              <div>
                {/* Official Talent Portrait Photo */}
                <div className="w-full aspect-square max-h-56 rounded-2xl overflow-hidden relative mb-4 bg-white/[0.02] border border-white/10 group-hover:border-[#00E599]/50 shadow-inner transition-all duration-300">
                  <Image
                    src={talent.image || "/team/noman_tariq.png"}
                    alt={talent.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle Gradient & Verified Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
                    <span className="text-[10px] font-mono text-white/90">VERIFIED</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00E599] transition-colors">
                  {talent.name}
                </h3>
                <div className="text-xs text-[#00A3FF] font-medium mb-4">
                  {talent.role}
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {talent.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#94A3B8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#00E599] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                  Pre-Vetted
                </span>
                <span className="text-xs text-[#94A3B8] group-hover:text-white transition-colors font-medium">
                  Available &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Talent CTA Bar */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl glass-card border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left scroll-reveal-scale">
          <div>
            <h4 className="text-xl font-extrabold text-white mb-1">
              Discover 150+ More Specialized Experts
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Scale your team with Senior Full-Stack, AI Engineers, QA, and DevOps specialists within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button href="#contact" variant="primary-emerald" size="sm">
              Request Candidates
            </Button>
            <Button href="#contact" variant="glass-outline" size="sm">
              Apply as a Developer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
