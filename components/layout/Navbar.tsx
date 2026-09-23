"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../brand/Logo";
import Button from "../ui/Button";
import DeveloperApplyModal from "../modals/DeveloperApplyModal";

interface SubLink {
  label: string;
  href: string;
  desc?: string;
  icon?: string;
}

interface NavItem {
  label: string;
  href: string;
  subLinks?: SubLink[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    subLinks: [
      { label: "About Us", href: "/about", desc: "Our story, vision & Abbas ibn Firnas heritage" },
      { label: "Our Team", href: "/talent#talent", desc: "60+ transformation experts & leaders" },
      { label: "Global Presence", href: "/about#about", desc: "Offices in UK, UAE, Sweden & PK" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    subLinks: [
      { label: "Web Development", href: "/services/web-development", desc: "Portals, e-commerce & modern web apps", icon: "🌐" },
      { label: "Mobile Application", href: "/services/mobile-app-development", desc: "iOS, Android & Flutter cross-platform", icon: "📱" },
      { label: "Custom Software", href: "/services/custom-software-development", desc: "Enterprise systems & scalable APIs", icon: "⚙️" },
      { label: "AI / ML / GenAI", href: "/services/ai-ml-genai-development", desc: "LLMs, automation & predictive intelligence", icon: "🤖" },
      { label: "UI / UX Design", href: "/services/ui-ux", desc: "Human-centric design & motion systems", icon: "🎨" },
      { label: "Digital Marketing", href: "/services/digital-marketing", desc: "SEO, growth strategies & social reach", icon: "📈" },
      { label: "Branding", href: "/services/branding", desc: "Identities, visual guidelines & logos", icon: "✨" },
      { label: "Staff Augmentation", href: "/services/staff-augmentation", desc: "On-demand dedicated senior squads", icon: "👥" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Work", href: "/work" },
  { label: "Talent", href: "/talent" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"hire" | "apply">("hire");
  const pathname = usePathname();

  // Scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile drawer whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  // Lock/Unlock body scrolling when mobile drawer opens/closes
  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const checkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <DeveloperApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialTab={modalTab}
        developerEmail="msaadbsse296@gmail.com"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#05080F]/95 backdrop-blur-2xl border-b border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.8)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links with Rich Dropdown Flow */}
          <nav className="hidden xl:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const active = checkIsActive(item.href);
              const hasDropdown = Boolean(item.subLinks?.length);
              const isServices = item.label === "Our Services";
              const isAbout = item.label === "About";

              if (hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (isServices) setServicesDropdownOpen(true);
                      if (isAbout) setAboutDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (isServices) setServicesDropdownOpen(false);
                      if (isAbout) setAboutDropdownOpen(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`text-xs font-semibold tracking-wide py-1.5 px-3 rounded-lg transition-all duration-200 relative flex items-center gap-1.5 ${
                        active
                          ? "text-[#00E599] bg-[#00E599]/10 border border-[#00E599]/30"
                          : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />}
                      <span>{item.label}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 opacity-60 ${
                          (isServices && servicesDropdownOpen) || (isAbout && aboutDropdownOpen)
                            ? "rotate-180 text-[#00E599] opacity-100"
                            : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Services Mega Dropdown */}
                    {isServices && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[760px] transition-all duration-200 ${
                          servicesDropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="bg-[#05080F]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.9)] grid grid-cols-12 gap-5">
                          {/* Left Column: Core Services Grid */}
                          <div className="col-span-8 pr-4 border-r border-white/10">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E599] flex items-center gap-1.5 font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                                Core Services & Solutions
                              </span>
                              <Link
                                href="/services"
                                className="text-[11px] text-[#94A3B8] hover:text-[#00E599] transition-colors font-medium flex items-center gap-1 group/all"
                              >
                                View All Services <span className="group-hover/all:translate-x-0.5 transition-transform">&rarr;</span>
                              </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {item.subLinks?.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all"
                                >
                                  <span className="text-lg p-2 rounded-lg bg-white/[0.04] border border-white/10 shrink-0 group-hover/item:scale-110 group-hover/item:border-[#00E599]/40 transition-all">
                                    {sub.icon}
                                  </span>
                                  <div>
                                    <div className="text-xs font-semibold text-white group-hover/item:text-[#00E599] transition-colors">
                                      {sub.label}
                                    </div>
                                    <div className="text-[10px] text-[#64748B] leading-tight line-clamp-1 mt-0.5">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Column: Tech Stack & Languages Panel */}
                          <div className="col-span-4 flex flex-col justify-between">
                            <div>
                              <div className="pb-3 mb-3 border-b border-white/10">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold">
                                  Tech & Frameworks
                                </span>
                              </div>
                              
                              <p className="text-[10px] text-[#64748B] mb-3 leading-relaxed">
                                Technologies we specialize in to deliver high-performance applications:
                              </p>

                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {[
                                  { name: "React / Next.js", icon: "⚡" },
                                  { name: "Node.js / Python", icon: "🐍" },
                                  { name: "Flutter / Swift", icon: "📱" },
                                  { name: "AI & LLMs", icon: "🤖" },
                                  { name: "AWS & Cloud", icon: "☁️" },
                                  { name: "GraphQL / REST", icon: "🔗" },
                                ].map((tech) => (
                                  <Link
                                    key={tech.name}
                                    href="/technologies"
                                    className="text-[10px] font-medium text-[#CBD5E1] bg-white/[0.04] hover:bg-[#00E599]/15 hover:text-[#00E599] border border-white/10 hover:border-[#00E599]/40 px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5"
                                  >
                                    <span className="text-[11px]">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Prominent CTA Box */}
                            <div className="bg-gradient-to-br from-[#00E599]/15 to-emerald-900/20 border border-[#00E599]/30 rounded-xl p-3">
                              <div className="text-xs font-semibold text-white mb-1">
                                Need Dedicated Developers?
                              </div>
                              <p className="text-[10px] text-[#94A3B8] mb-2.5 leading-snug">
                                Hire top 1% vetted engineers for your next ambitious project.
                              </p>
                              <button
                                type="button"
                                onClick={() => {
                                  setModalTab("hire");
                                  setApplyModalOpen(true);
                                }}
                                className="w-full text-[10px] font-semibold text-[#05080F] bg-[#00E599] hover:bg-[#00cc88] py-1.5 px-3 rounded-lg transition-colors text-center font-mono uppercase tracking-wider"
                              >
                                Hire Squad &rarr;
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* About Dropdown */}
                    {isAbout && (
                      <div
                        className={`absolute top-full left-0 pt-2 w-64 transition-all duration-200 ${
                          aboutDropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="bg-[#05080F]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-1">
                          {item.subLinks?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="p-2.5 rounded-xl hover:bg-white/[0.06] text-left transition-all group"
                            >
                              <div className="text-xs font-semibold text-white group-hover:text-[#00E599] transition-colors">
                                {sub.label}
                              </div>
                              <div className="text-[10px] text-[#64748B] mt-0.5">{sub.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold tracking-wide py-1.5 px-3 rounded-lg transition-all duration-200 relative flex items-center gap-1.5 ${
                    active
                      ? "text-[#00E599] bg-[#00E599]/10 border border-[#00E599]/30"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              type="button"
              variant="glass-outline"
              size="sm"
              onClick={() => {
                setModalTab("hire");
                setApplyModalOpen(true);
              }}
              className="border-white/10 text-xs"
            >
              Hire Developers
            </Button>
            <Button
              href="/contact"
              variant="primary-emerald"
              size="sm"
              className="text-xs"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Action Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="primary-emerald"
              size="sm"
              className="text-xs sm:hidden"
            >
              Start
            </Button>
            
            {/* Robust 100% Clickable Hamburger Toggle Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-3 rounded-xl bg-white/[0.08] active:bg-[#00E599]/20 border border-white/15 text-[#94A3B8] hover:text-white transition-all focus:outline-none touch-manipulation cursor-pointer z-[110]"
              aria-label="Toggle Mobile Navigation Drawer"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between pointer-events-none">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5 bg-[#00E599]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#00E599]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 100% Reliable Mobile Navigation Overlay Drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-[90] bg-[#05080F]/80 backdrop-blur-md transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      <div
        className={`xl:hidden fixed top-0 left-0 right-0 z-[95] bg-[#05080F] border-b border-white/15 pt-24 pb-8 px-6 shadow-2xl transition-all duration-300 ease-out transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 max-h-[75vh] overflow-y-auto pr-1">
          {NAV_ITEMS.map((item) => {
            const active = checkIsActive(item.href);
            const isServices = item.label === "Our Services";
            const isAbout = item.label === "About";

            if (isServices) {
              return (
                <div key={item.label} className="flex flex-col">
                  <div
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`text-base font-semibold py-3 px-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      active
                        ? "text-[#00E599] bg-[#00E599]/15 border-[#00E599]/40"
                        : "text-[#CBD5E1] border-white/[0.06] bg-white/[0.02]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-xs transition-transform duration-200 text-[#00E599] ${
                        mobileServicesOpen ? "rotate-90" : ""
                      }`}
                    >
                      &gt;
                    </span>
                  </div>

                  {mobileServicesOpen && (
                    <div className="grid grid-cols-1 gap-1.5 pl-3 pt-2 pb-1 border-l-2 border-[#00E599]/30 ml-3 mt-1">
                      {item.subLinks?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            document.body.style.overflow = "unset";
                          }}
                          className="text-xs text-[#94A3B8] hover:text-[#00E599] py-2 px-3 rounded-lg hover:bg-white/[0.04] flex items-center justify-between"
                        >
                          <span>
                            {sub.icon} {sub.label}
                          </span>
                          <span className="text-[10px] text-[#64748B] font-mono">&rarr;</span>
                        </Link>
                      ))}

                      {/* Tech Stack Pills in Mobile Menu */}
                      <div className="pt-2 mt-2 border-t border-white/10">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-2 px-3">
                          Tech & Languages:
                        </span>
                        <div className="flex flex-wrap gap-1 px-3">
                          {["React", "Next.js", "Node.js", "Python", "Flutter", "AI/ML"].map((tech) => (
                            <Link
                              key={tech}
                              href="/technologies"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                document.body.style.overflow = "unset";
                              }}
                              className="text-[10px] bg-white/[0.06] text-[#CBD5E1] px-2 py-0.5 rounded border border-white/10 hover:text-[#00E599]"
                            >
                              {tech}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (isAbout) {
              return (
                <div key={item.label} className="flex flex-col">
                  <div
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`text-base font-semibold py-3 px-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      active
                        ? "text-[#00E599] bg-[#00E599]/15 border-[#00E599]/40"
                        : "text-[#CBD5E1] border-white/[0.06] bg-white/[0.02]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-xs transition-transform duration-200 text-[#00E599] ${
                        mobileAboutOpen ? "rotate-90" : ""
                      }`}
                    >
                      &gt;
                    </span>
                  </div>

                  {mobileAboutOpen && (
                    <div className="grid grid-cols-1 gap-1.5 pl-3 pt-2 pb-1 border-l-2 border-[#00E599]/30 ml-3 mt-1">
                      {item.subLinks?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            document.body.style.overflow = "unset";
                          }}
                          className="text-xs text-[#94A3B8] hover:text-[#00E599] py-2 px-3 rounded-lg hover:bg-white/[0.04] flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          <span className="text-[10px] text-[#64748B] font-mono">&rarr;</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = "unset";
                }}
                className={`text-base font-semibold py-3 px-4 rounded-xl border transition-all flex items-center justify-between active:scale-[0.98] ${
                  active
                    ? "text-[#00E599] bg-[#00E599]/15 border-[#00E599]/40 shadow-[0_0_20px_rgba(0,229,153,0.15)]"
                    : "text-[#CBD5E1] border-white/[0.06] bg-white/[0.02] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span>{item.label}</span>
                {active ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] shadow-[0_0_8px_#00E599]" />
                ) : (
                  <span className="text-xs text-[#64748B] font-mono">&rarr;</span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 flex flex-col gap-3 border-t border-white/10 mt-2">
            <Button
              href="/contact"
              variant="primary-emerald"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = "unset";
              }}
              className="w-full text-center shadow-[0_0_25px_rgba(0,229,153,0.3)]"
            >
              Get Started
            </Button>
            <Button
              type="button"
              variant="glass-outline"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                setModalTab("hire");
                setApplyModalOpen(true);
              }}
              className="w-full text-center"
            >
              Hire Dedicated Developers
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

