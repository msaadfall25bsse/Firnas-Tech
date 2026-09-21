"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../brand/Logo";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technologies", href: "#technologies" },
  { label: "Process", href: "#process" },
  { label: "Talent", href: "#talent" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05080F]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#00E599] transition-colors tracking-wide py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href="#contact"
            variant="glass-outline"
            size="sm"
            className="border-white/10 text-xs"
          >
            Hire Developers
          </Button>
          <Button
            href="#contact"
            variant="primary-emerald"
            size="sm"
            className="text-xs"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <Button
            href="#contact"
            variant="primary-emerald"
            size="sm"
            className="text-xs sm:hidden"
          >
            Start
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-[#94A3B8] hover:text-white transition focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5 bg-[#00E599]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#00E599]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#05080F]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#94A3B8] hover:text-[#00E599] transition-colors py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                href="#contact"
                variant="primary-emerald"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                Get Started
              </Button>
              <Button
                href="#contact"
                variant="glass-outline"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                Hire Dedicated Developers
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
