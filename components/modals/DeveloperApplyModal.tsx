"use client";

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  developerEmail?: string;
  initialTab?: "hire" | "apply";
}

export default function DeveloperApplyModal({
  isOpen,
  onClose,
  developerEmail = "msaadbsse296@gmail.com",
  initialTab = "hire",
}: ApplyModalProps) {
  const [activeTab, setActiveTab] = useState<"hire" | "apply">(initialTab);

  // Hire Developer Form State
  const [hireData, setHireData] = useState({
    clientName: "",
    companyName: "",
    email: "",
    phone: "",
    teamType: "1 - 2 Dedicated Engineers",
    techStack: "",
    timeline: "Immediately (Within 1-2 weeks)",
    budgetRange: "$3,000 - $10,000 / month",
    projectDetails: "",
  });

  // Apply as Developer Form State
  const [applyData, setApplyData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Full-Stack Developer",
    experienceYears: "3 - 5 Years",
    portfolioUrl: "",
    skills: "",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Sync initial tab when opened
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setSubmitted(false);
      setError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialTab]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setError("File size exceeds 10MB limit. Please upload a smaller PDF/DOCX file.");
        return;
      }
      setResumeFile(file);
      setError("");
    }
  };

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hireData.clientName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!hireData.email.trim() || !hireData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`[Hire Developer Request] ${hireData.clientName} (${hireData.companyName || "Independent"})`);
    const body = encodeURIComponent(
      `HIRE DEVELOPER / SQUAD INQUIRY\n` +
      `------------------------------------\n` +
      `Contact Name: ${hireData.clientName}\n` +
      `Company: ${hireData.companyName || "N/A"}\n` +
      `Email: ${hireData.email}\n` +
      `Phone/WhatsApp: ${hireData.phone || "N/A"}\n` +
      `Team Model: ${hireData.teamType}\n` +
      `Required Tech Stack: ${hireData.techStack || "Not specified"}\n` +
      `Project Timeline: ${hireData.timeline}\n` +
      `Budget Range: ${hireData.budgetRange}\n\n` +
      `Project Scope & Requirements:\n${hireData.projectDetails || "No additional notes"}\n\n` +
      `Sent via FIRNAS.TECH Hire Developer Portal`
    );

    window.location.href = `mailto:${developerEmail}?subject=${subject}&body=${body}`;
    setError("");
    setSubmitted(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!applyData.email.trim() || !applyData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`[Developer Application] ${applyData.fullName} - ${applyData.role}`);
    const body = encodeURIComponent(
      `DEVELOPER TALENT APPLICATION\n` +
      `------------------------------------\n` +
      `Full Name: ${applyData.fullName}\n` +
      `Email: ${applyData.email}\n` +
      `Phone: ${applyData.phone || "N/A"}\n` +
      `Target Role: ${applyData.role}\n` +
      `Experience: ${applyData.experienceYears}\n` +
      `Portfolio / GitHub: ${applyData.portfolioUrl || "N/A"}\n` +
      `Primary Skills: ${applyData.skills || "N/A"}\n\n` +
      `Cover Letter / Summary:\n${applyData.coverLetter || "N/A"}\n\n` +
      `Attached Resume File: ${resumeFile ? resumeFile.name : "Will provide upon request"}\n\n` +
      `Sent via FIRNAS.TECH Developer Network`
    );

    window.location.href = `mailto:${developerEmail}?subject=${subject}&body=${body}`;
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* 1. Frosted Dark Glass Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-[#020408]/85 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300 z-[9998]"
        onClick={onClose}
      />

      {/* 2. Modal Dialog Card Container */}
      <div className="relative w-full max-w-2xl bg-[#080D1A] border border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-[9999] flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Pinned Modal Header (Always Visible, Never Cut Off) */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-white/10 bg-[#080D1A]/95 shrink-0 relative">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#94A3B8] hover:text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer z-10"
            aria-label="Close modal dialog"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>

          <div className="pr-10">
            {/* Modal Navigation Tabs: Hire vs Apply */}
            <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-xl max-w-fit mb-3">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("hire");
                  setError("");
                }}
                className={`text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "hire"
                    ? "bg-[#00E599] text-[#05080F] shadow-[0_0_15px_rgba(0,229,153,0.3)] font-bold"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <span>💼</span>
                <span>Hire Developers</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("apply");
                  setError("");
                }}
                className={`text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "apply"
                    ? "bg-[#00E599] text-[#05080F] shadow-[0_0_15px_rgba(0,229,153,0.3)] font-bold"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <span>👨‍💻</span>
                <span>Apply as Developer</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                {activeTab === "hire" ? "Hire Dedicated Engineering Talent" : "Join the FIRNAS.TECH Talent Squad"}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00E599]/15 text-[#00E599] border border-[#00E599]/40 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
                DIRECT PIPELINE &rarr; {developerEmail}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Form Body with Custom Scrollbar */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-7 py-4 sm:py-5 overscroll-contain">
          {submitted ? (
            <div className="text-center py-10 sm:py-14">
              <div className="w-16 h-16 rounded-full bg-[#00E599]/20 text-[#00E599] flex items-center justify-center mx-auto mb-4 text-3xl shadow-[0_0_30px_rgba(0,229,153,0.4)]">
                &check;
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {activeTab === "hire" ? "Inquiry Dispatched!" : "Application Sent!"}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you! Your information has been delivered to our engineering leadership at{" "}
                <span className="text-[#00E599] font-mono font-medium">{developerEmail}</span>. A senior technical advisor will reach out to you within 24 hours.
              </p>
              <Button variant="primary-emerald" size="md" onClick={onClose}>
                Done & Close Window
              </Button>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              {/* TAB 1: HIRE DEVELOPERS FORM */}
              {activeTab === "hire" && (
                <form onSubmit={handleHireSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Your Full Name <span className="text-[#00E599]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={hireData.clientName}
                        onChange={(e) => setHireData({ ...hireData, clientName: e.target.value })}
                        placeholder="e.g. Asad Khan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={hireData.companyName}
                        onChange={(e) => setHireData({ ...hireData, companyName: e.target.value })}
                        placeholder="e.g. FinTech Global"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Work Email Address <span className="text-[#00E599]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={hireData.email}
                        onChange={(e) => setHireData({ ...hireData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={hireData.phone}
                        onChange={(e) => setHireData({ ...hireData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Engagement Model
                      </label>
                      <select
                        value={hireData.teamType}
                        onChange={(e) => setHireData({ ...hireData, teamType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#05080F] border border-white/10 text-white text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors cursor-pointer"
                      >
                        <option value="1 - 2 Dedicated Engineers">1 - 2 Dedicated Engineers</option>
                        <option value="Full Cross-Functional Squad (Lead, Devs, QA)">Full Cross-Functional Squad</option>
                        <option value="Part-time / Fractional CTO Advisory">Fractional CTO / Tech Lead</option>
                        <option value="Fixed Price Milestone Project">Fixed Scope Milestone Project</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Project Start Timeline
                      </label>
                      <select
                        value={hireData.timeline}
                        onChange={(e) => setHireData({ ...hireData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#05080F] border border-white/10 text-white text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors cursor-pointer"
                      >
                        <option value="Immediately (Within 1-2 weeks)">Immediately (Within 1-2 weeks)</option>
                        <option value="In 2 to 4 weeks">In 2 to 4 weeks</option>
                        <option value="Next Quarter / Exploring Options">Next Quarter / Exploring Options</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                      Required Skills & Tech Stack
                    </label>
                    <input
                      type="text"
                      value={hireData.techStack}
                      onChange={(e) => setHireData({ ...hireData, techStack: e.target.value })}
                      placeholder="e.g. Next.js, React Native, Python, AI/LLMs, AWS"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                      Project Details & Key Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={hireData.projectDetails}
                      onChange={(e) => setHireData({ ...hireData, projectDetails: e.target.value })}
                      placeholder="Briefly describe what you're building, target deliverables, or specific requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 border-t border-white/10">
                    <Button variant="ghost" size="sm" type="button" onClick={onClose} className="w-full sm:w-auto text-xs">
                      Cancel
                    </Button>
                    <Button variant="primary-emerald" size="sm" type="submit" className="w-full sm:w-auto text-xs shadow-[0_0_20px_rgba(0,229,153,0.3)]">
                      Request Developer Matches &rarr;
                    </Button>
                  </div>
                </form>
              )}

              {/* TAB 2: APPLY AS DEVELOPER FORM */}
              {activeTab === "apply" && (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Full Name <span className="text-[#00E599]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applyData.fullName}
                        onChange={(e) => setApplyData({ ...applyData, fullName: e.target.value })}
                        placeholder="e.g. Asad Khan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Email Address <span className="text-[#00E599]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={applyData.email}
                        onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                        placeholder="developer@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={applyData.phone}
                        onChange={(e) => setApplyData({ ...applyData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Target Role
                      </label>
                      <select
                        value={applyData.role}
                        onChange={(e) => setApplyData({ ...applyData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#05080F] border border-white/10 text-white text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors cursor-pointer"
                      >
                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                        <option value="Frontend Engineer (React/Next.js)">Frontend Engineer (React/Next.js)</option>
                        <option value="Backend Developer (Node/Python)">Backend Developer (Node/Python)</option>
                        <option value="Mobile App Developer (Flutter/Native)">Mobile App Developer (Flutter/Native)</option>
                        <option value="AI / ML Engineer">AI / ML Engineer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="QA Automation Engineer">QA Automation Engineer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Portfolio / GitHub / LinkedIn
                      </label>
                      <input
                        type="url"
                        value={applyData.portfolioUrl}
                        onChange={(e) => setApplyData({ ...applyData, portfolioUrl: e.target.value })}
                        placeholder="https://github.com/username"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                        Years of Experience
                      </label>
                      <select
                        value={applyData.experienceYears}
                        onChange={(e) => setApplyData({ ...applyData, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#05080F] border border-white/10 text-white text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors cursor-pointer"
                      >
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5 - 8 Years">5 - 8 Years</option>
                        <option value="8+ Senior Lead">8+ Senior Lead</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                      Upload Resume / CV File (PDF / DOCX)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full text-xs text-[#94A3B8] file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#00E599]/10 file:text-[#00E599] hover:file:bg-[#00E599]/20 file:cursor-pointer"
                    />
                    {resumeFile && (
                      <p className="text-[11px] text-[#00E599] mt-1 font-mono">
                        ✓ Selected File: {resumeFile.name} ({(resumeFile.size / (1024 * 1024)).toFixed(2)} MB)
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs text-[#94A3B8] mb-1 font-medium">
                      Cover Letter / Technical Summary
                    </label>
                    <textarea
                      rows={3}
                      value={applyData.coverLetter}
                      onChange={(e) => setApplyData({ ...applyData, coverLetter: e.target.value })}
                      placeholder="Mention your core tech stack, achievements, and availability..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-base sm:text-xs focus:outline-none focus:border-[#00E599] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 border-t border-white/10">
                    <Button variant="ghost" size="sm" type="button" onClick={onClose} className="w-full sm:w-auto text-xs">
                      Cancel
                    </Button>
                    <Button variant="primary-emerald" size="sm" type="submit" className="w-full sm:w-auto text-xs shadow-[0_0_20px_rgba(0,229,153,0.3)]">
                      Submit Developer Application &rarr;
                    </Button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
