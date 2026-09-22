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
    // Ensure body scrolling is unlocked when route changes
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

          {/* Desktop Navigation Links */}
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

          {/* Desktop CTAs */}
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
        <div className="flex flex-col gap-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {NAV_LINKS.map((link) => {
            const active = checkIsActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
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
                <span>{link.label}</span>
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
              href="/contact"
              variant="glass-outline"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = "unset";
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
