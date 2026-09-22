"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../brand/Logo";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Projects", href: "/projects" },
  { label: "Talent", href: "/talent" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const checkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05080F]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Multi-Page Navigation */}
        <nav className="hidden xl:flex items-center gap-5">
          {NAV_LINKS.map((link) => {
            const active = checkIsActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold tracking-wide py-1 px-2.5 rounded-lg transition-all duration-200 relative flex items-center gap-1.5 ${
                  active
                    ? "text-[#00E599] bg-[#00E599]/10 border border-[#00E599]/30"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href="/contact"
            variant="glass-outline"
            size="sm"
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

        {/* Mobile Menu Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <Button
            href="/contact"
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
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const active = checkIsActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-xl border transition-colors flex items-center justify-between ${
                    active
                      ? "text-[#00E599] bg-[#00E599]/10 border-[#00E599]/30"
                      : "text-[#94A3B8] border-transparent hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#00E599]" />}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="primary-emerald"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                Get Started
              </Button>
              <Button
                href="/contact"
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
