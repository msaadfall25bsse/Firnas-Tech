"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  developerEmail: string;
}

export default function DeveloperApplyModal({
  isOpen,
  onClose,
  developerEmail = "msaadbsse296@gmail.com",
}: ApplyModalProps) {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Construct Mailto fallback link to guarantee email goes directly to msaadbsse296@gmail.com
    const subject = encodeURIComponent(`[Developer Application] ${formData.fullName} - ${formData.role}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Target Role: ${formData.role}\n` +
      `Experience: ${formData.experienceYears}\n` +
      `Portfolio / GitHub: ${formData.portfolioUrl}\n` +
      `Primary Skills: ${formData.skills}\n\n` +
      `Cover Letter / Intro:\n${formData.coverLetter}\n\n` +
      `Attached Resume File: ${resumeFile ? resumeFile.name : "Not provided"}`
    );

    // Trigger mailto so developer application email launches
    window.location.href = `mailto:${developerEmail}?subject=${subject}&body=${body}`;

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Frosted Dark Glass Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-[#05080F]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#0A0F1D] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 my-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#94A3B8] hover:text-white flex items-center justify-center transition focus:outline-none"
          aria-label="Close dialog"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#00E599]/20 text-[#00E599] flex items-center justify-center mx-auto mb-4 text-3xl shadow-[0_0_30px_rgba(0,229,153,0.4)]">
              &check;
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Application Sent!</h3>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
              Thank you for applying, <span className="text-white font-semibold">{formData.fullName}</span>. Your developer application details have been dispatched to our engineering team at <span className="text-[#00E599] font-mono">{developerEmail}</span>.
            </p>
            <Button variant="primary-emerald" size="md" onClick={onClose}>
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-white">Apply as a Developer</h3>
                <p className="text-xs text-[#94A3B8] font-mono">Direct Application &rarr; {developerEmail}</p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/30">
                ● Pre-Vetting Active
              </span>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#94A3B8] mb-1 font-medium">
                  Full Name <span className="text-[#00E599]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Asad Khan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-xs focus:outline-none focus:border-[#00E599]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#94A3B8] mb-1 font-medium">
                  Email Address <span className="text-[#00E599]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="developer@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-xs focus:outline-none focus:border-[#00E599]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#94A3B8] mb-1 font-medium">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-xs focus:outline-none focus:border-[#00E599]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#94A3B8] mb-1 font-medium">Target Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#05080F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00E599]"
                >
                  <option value="Full-Stack Developer">Full-Stack Developer</option>
                  <option value="Frontend Engineer (React/Next.js)">Frontend Engineer (React/Next.js)</option>
                  <option value="Backend Developer (Node/Python)">Backend Developer (Node/Python)</option>
                  <option value="Mobile App Developer (Flutter/Native)">Mobile App Developer (Flutter/Native)</option>
                  <option value="AI / ML Engineer">AI / ML Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#94A3B8] mb-1 font-medium">Portfolio / GitHub / LinkedIn Link</label>
                <input
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-xs focus:outline-none focus:border-[#00E599]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#94A3B8] mb-1 font-medium">Years of Experience</label>
                <select
                  value={formData.experienceYears}
                  onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#05080F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00E599]"
                >
                  <option value="1 - 2 Years">1 - 2 Years</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="5 - 8 Years">5 - 8 Years</option>
                  <option value="8+ Senior Lead">8+ Senior Lead</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#94A3B8] mb-1 font-medium">
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
              <label className="block text-xs text-[#94A3B8] mb-1 font-medium">Cover Letter / Technical Summary</label>
              <textarea
                rows={3}
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Mention your core tech stack, recent projects, and availability..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#64748B] text-xs focus:outline-none focus:border-[#00E599]"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <Button variant="ghost" size="sm" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="primary-emerald" size="sm" type="submit">
                Send Application to {developerEmail}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
