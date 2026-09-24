import React from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import AboutPhotoSlider from "./AboutPhotoSlider";
import { SITE_DATA } from "../../data/siteData";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#070B14]/60 backdrop-blur-[2px] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E599]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0070F3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-6 flex flex-col gap-6 scroll-reveal-left">
            <div className="inline-flex">
              <Badge variant="blue" dot size="sm">
                About FIRNAS.TECH
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Journey of <br />
              <span className="text-gradient-emerald">Building Success</span> &amp; Digital Wings.
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Firnas.tech is a leading IT service provider dedicated to helping companies transform and expand their digital capabilities. With a team of over 60 skilled professionals across 5 countries, we design and implement robust digital infrastructure that empowers our clients to excel in fast-changing environments.
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed">
              Named in homage to Abbas ibn Firnas—the pioneer who dared to fly—we carry forward the spirit of fearless technological flight. By uniting AI, cloud scalability, and human-centric UI design, we turn ambitious concepts into reliable enterprise software.
            </p>

            {/* Academic & Ecosystem Credibility */}
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold mb-3">
                Academic &amp; Research Partners:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {SITE_DATA.academicPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-white flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                    <span>{partner.name}</span>
                    <span className="text-[10px] text-[#64748B]">({partner.label})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#process" variant="primary-emerald" size="md">
                Our Development Process
              </Button>
              <Button href="#talent" variant="glass-outline" size="md">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Box Auto-Rotating Photo Slider & Stats */}
          <div className="lg:col-span-6 flex flex-col gap-6 scroll-reveal-right">
            {/* 1. Interactive 3D Box Slider Showcase Container */}
            <AboutPhotoSlider />

            {/* 2. High-Tech Stats Grid Under Banner */}
            <div className="glass-card p-6 sm:p-7 border-white/10 relative overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center hover:border-[#00E599]/30 transition">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">
                    4<span className="text-[#00E599]"></span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-medium">Countries</div>
                  <div className="text-[9px] text-[#64748B] mt-0.5 font-mono">UK, UAE, SE, PK</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center hover:border-[#0070F3]/30 transition">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">
                    60<span className="text-[#0070F3]">+</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-medium">Engineers</div>
                  <div className="text-[9px] text-[#64748B] mt-0.5 font-mono">Senior Specialists</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center hover:border-[#00E599]/30 transition">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">
                    25<span className="text-[#00E599]">%</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-medium">Women in Tech</div>
                  <div className="text-[9px] text-[#64748B] mt-0.5 font-mono">Diversity Focus</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center hover:border-[#0070F3]/30 transition">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">
                    150<span className="text-[#0070F3]">+</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] font-medium">Talent Pool</div>
                  <div className="text-[9px] text-[#64748B] mt-0.5 font-mono">On-Demand</div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#00E599]/5 border border-[#00E599]/20 flex items-center justify-between text-xs text-[#94A3B8]">
                <div>
                  <span className="text-[#00E599] font-semibold">Agility with Precision:</span> Discovery, research, cloud architecture &amp; 24/7 post-launch support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
