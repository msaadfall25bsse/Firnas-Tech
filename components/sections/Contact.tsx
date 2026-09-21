"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { SITE_DATA } from "../../data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$10k - $25k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError("Please enter a valid corporate email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setError("Please provide a brief message of at least 10 characters.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#05080F] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" dot size="sm" className="mb-4">
            Direct Inquiries
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Start a Conversation with <span className="text-gradient-emerald">Our Leads</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Reach out directly to discuss your enterprise requirements, request pre-vetted developer profiles, or schedule an architectural consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Real Contact Info & Office Addresses */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quick Contact Cards */}
            <div className="glass-card p-6 border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00E599]/10 text-[#00E599] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#64748B] uppercase font-mono">Direct Phone Call</div>
                <a
                  href={`tel:${SITE_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="text-base font-bold text-white hover:text-[#00E599] transition font-mono focus:outline-none focus:text-[#00E599]"
                >
                  {SITE_DATA.contact.phone}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0070F3]/10 text-[#00A3FF] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#64748B] uppercase font-mono">Official Email Inquiries</div>
                <div className="text-sm font-semibold text-white font-mono flex flex-col">
                  <a href={`mailto:${SITE_DATA.contact.primaryEmail}`} className="hover:text-[#00E599] transition focus:outline-none focus:text-[#00E599]">
                    {SITE_DATA.contact.primaryEmail}
                  </a>
                  <a href={`mailto:${SITE_DATA.contact.salesEmail}`} className="text-xs text-[#94A3B8] hover:text-[#00A3FF] transition focus:outline-none focus:text-[#00A3FF]">
                    {SITE_DATA.contact.salesEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Office Locations Accordion/List */}
            <div className="glass-card p-6 border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-[#00E599] font-mono font-semibold mb-4">
                Regional Hubs &amp; Facilities:
              </h4>
              <div className="space-y-3">
                {SITE_DATA.globalOffices.map((office) => (
                  <div key={office.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-0.5">
                      <span>{office.country}</span>
                      <span className="text-[10px] font-mono text-[#00A3FF]">{office.type}</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] font-mono">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 border-white/10 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#00E599]/20 text-[#00E599] flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_30px_rgba(0,229,153,0.3)]">
                    &check;
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Our technical leads will review your inquiry and connect via {formData.email} within 24 business hours.
                  </p>
                  <Button
                    variant="glass-outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Web Development",
                        budget: "$10k - $25k",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs uppercase tracking-wider text-white font-semibold">
                      Project Specification Form
                    </span>
                    <span className="text-xs font-mono text-[#00E599] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
                      256-Bit SSL Encrypted
                    </span>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                        Your Full Name <span className="text-[#00E599]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/30 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                        Corporate Email <span className="text-[#00E599]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/30 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                        Target Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0F1D] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/30 transition cursor-pointer"
                      >
                        {SITE_DATA.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                        Anticipated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0F1D] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/30 transition cursor-pointer"
                      >
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k+">$50,000+ (Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                      Project Goals &amp; Architecture Details <span className="text-[#00E599]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your product goals, timelines, or specific architectural needs..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/30 transition"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary-emerald"
                    size="lg"
                    className="w-full shadow-[0_0_30px_rgba(0,229,153,0.3)]"
                  >
                    Send Technical Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
