"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import DeveloperApplyModal from "../modals/DeveloperApplyModal";

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const perks = [
    {
      title: "Global Projects & Tech Stacks",
      desc: "Work on enterprise systems, AI/LLM applications, and modern cloud architectures for international clients in the UK, UAE, and Europe.",
    },
    {
      title: "Engineering Autonomy",
      desc: "High ownership culture where engineers lead architectural design, code review standards, and continuous integration.",
    },
    {
      title: "Growth & University Links",
      desc: "Direct access to our R&D initiatives, joint research publications with COMSATS and AUST, and continuous professional certifications.",
    },
    {
      title: "Inclusive Global Culture",
      desc: "25% women in tech leadership, flexible distributed work policies, and transparent merit-based career progression.",
    },
  ];

  return (
    <>
      <DeveloperApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        developerEmail="msaadbsse296@gmail.com"
      />

      <section id="careers" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Narrative & CTA */}
            <div className="lg:col-span-6 flex flex-col gap-6 scroll-reveal-left">
              <div className="inline-flex">
                <Badge variant="emerald" dot size="sm">
                  Join the Flight
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Innovate with the <span className="text-gradient-emerald">Latest Technologies</span> on Coolest Projects.
              </h2>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                We are constantly scouting exceptional talent in Full-Stack Web Development, Mobile Engineering, AI/Machine Learning, UI/UX Design, and Software Quality Assurance.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  type="button"
                  variant="primary-emerald"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply as a Developer
                </Button>
                <Button
                  type="button"
                  variant="glass-outline"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Explore Open Roles
                </Button>
              </div>
            </div>

            {/* Right Column: Perks Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, i) => (
                <div
                  key={perk.title}
                  className={`glass-card p-6 border-white/[0.08] flex flex-col justify-between hover:border-[#00E599]/40 transition duration-300 scroll-reveal-right stagger-${i + 1}`}
                >
                  <div>
                    <span className="text-xs font-mono text-[#00E599] mb-2 block">
                      0{i + 1} // BENEFIT
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
