"use client";

import React from "react";
import Badge from "../ui/Badge";
import Link from "next/link";

interface PageHeroProps {
  badge: string;
  badgeVariant?: "emerald" | "blue" | "cyan";
  title: string;
  titleGradient: string;
  description: string;
  videoSrc?: string;
  posterSrc?: string;
  breadcrumbs?: { label: string; href: string }[];
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  badgeVariant = "emerald",
  title,
  titleGradient,
  description,
  videoSrc = "/Logo_animation_with_circuit_effects_20260921061901.mp4",
  posterSrc,
  breadcrumbs = [
    { label: "Home", href: "/" },
  ],
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center pt-32 pb-20 bg-[#05080F] border-b border-white/[0.08] overflow-hidden">
      {/* 1. Infinite Background Video Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          className="w-full h-full object-cover object-center opacity-70 sm:opacity-75 filter brightness-115 contrast-125 transition-opacity duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Responsive Video Fade Mask:
            Desktop: Right side clear/visible -> Left side smooth fade out
            Mobile: Top side clear/visible -> Bottom side smooth fade out
        */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#05080F]/45 via-45% to-[#05080F]/90 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/50 to-transparent md:hidden" />
        <div className="absolute inset-0 bg-grid-cyber opacity-20" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0070F3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-reveal" data-revealed="true">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-[#64748B] mb-6">
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={bc.label}>
                {idx > 0 && <span>/</span>}
                <Link
                  href={bc.href}
                  className="hover:text-[#00E599] transition-colors"
                >
                  {bc.label}
                </Link>
              </React.Fragment>
            ))}
            <span>/</span>
            <span className="text-[#00E599] font-semibold">{badge}</span>
          </nav>
        )}

        {/* Hero Badge */}
        <Badge variant={badgeVariant} dot size="sm" className="mb-4 shadow-lg">
          {badge}
        </Badge>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-md">
          {title}{" "}
          <span className="text-gradient-emerald">{titleGradient}</span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow">
          {description}
        </p>

        {/* Optional Action Buttons or Telemetry */}
        {children && <div className="pt-2 flex flex-wrap items-center justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
