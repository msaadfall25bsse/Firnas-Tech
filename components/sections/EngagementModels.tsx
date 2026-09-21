import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function EngagementModels() {
  return (
    <section id="models" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Collaboration Frameworks
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Flexible <span className="text-gradient-emerald">Engagement Models</span> Tailored to Scale.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Choose the engagement model that best aligns with your organizational stage, budgeting preference, and project velocity.
          </p>
        </div>

        {/* 2 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SITE_DATA.engagementModels.map((model) => (
            <div
              key={model.id}
              className={`glass-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden ${
                model.highlight
                  ? "border-[#00E599]/40 shadow-[0_0_40px_-15px_rgba(0,229,153,0.2)]"
                  : "border-white/10"
              }`}
            >
              {/* Top Accent Gradient */}
              {model.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E599] via-[#06B6D4] to-[#0070F3]" />
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant={model.highlight ? "emerald" : "blue"} size="sm">
                    {model.badge}
                  </Badge>
                  <span className="text-xs font-mono text-[#64748B]">MODEL::{model.id.toUpperCase()}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  {model.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                  {model.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-xs text-white">
                      <span className="w-4 h-4 rounded-full bg-[#00E599]/15 text-[#00E599] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        &check;
                      </span>
                      <span className="text-[#94A3B8]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/[0.08]">
                <Button
                  href={model.ctaHref}
                  variant={model.highlight ? "primary-emerald" : "secondary-blue"}
                  size="md"
                  className="w-full"
                >
                  {model.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
