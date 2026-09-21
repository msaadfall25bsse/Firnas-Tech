import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex">
              <Badge variant="blue" dot size="sm">
                About IRNAS.TECH
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

            <div className="pt-2 flex items-center gap-4">
              <Button href="#process" variant="primary-emerald" size="md">
                Our Development Process
              </Button>
              <Button href="#talent" variant="glass-outline" size="md">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Right Column: High-Tech Stats & Values Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 border-white/10 relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E599]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="text-xs uppercase tracking-widest text-[#00E599] font-mono">
                  VERIFIED_METRICS // 2026
                </div>
                <Badge variant="emerald" size="sm">
                  Active
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                    5<span className="text-[#00E599]"> Countries</span>
                  </div>
                  <div className="text-xs text-[#94A3B8]">Global Presence</div>
                  <div className="text-[10px] text-[#64748B] mt-1">USA, UK, UAE, SE, PK</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                    60<span className="text-[#0070F3]">+</span>
                  </div>
                  <div className="text-xs text-[#94A3B8]">In-House Experts</div>
                  <div className="text-[10px] text-[#64748B] mt-1">Senior Engineers &amp; PMs</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                    25<span className="text-[#00E599]">%</span>
                  </div>
                  <div className="text-xs text-[#94A3B8]">Women in Tech</div>
                  <div className="text-[10px] text-[#64748B] mt-1">Global Diversity Metric</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                    150<span className="text-[#0070F3]">+</span>
                  </div>
                  <div className="text-xs text-[#94A3B8]">Vetted Talent Pool</div>
                  <div className="text-[10px] text-[#64748B] mt-1">On-Demand Augmentation</div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#00E599]/5 border border-[#00E599]/20 text-xs text-[#94A3B8] leading-relaxed">
                <span className="text-[#00E599] font-semibold">Agility with Precision:</span> We take full responsibility from discovery and user research to cloud architecture and 24/7 post-launch support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
