import React from "react";
import PageHero from "@/components/sections/PageHero";
import Industries from "@/components/sections/Industries";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Industry Verticals | FIRNAS.TECH — Tailored Solutions Across 9 Sectors",
  description:
    "Empowering FinTech, E-Commerce, HealthTech, EdTech, Logistics, Real Estate, Sports, Hospitality, and Enterprise platforms with specialized software architecture.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="Domain Expertise"
        badgeVariant="cyan"
        title="Bespoke Software Architecture for"
        titleGradient="9 High-Growth Sectors."
        description="We combine deep industry domain knowledge with modern cloud, mobile, and AI technologies to build compliant, high-throughput applications."
        videoSrc="/videos/hero_industries.mp4"
      >
        <Button href="#industries" variant="primary-emerald" size="md">
          Explore Industry Cards
        </Button>
        <Button href="/contact" variant="glass-outline" size="md">
          Discuss Your Domain
        </Button>
      </PageHero>

      {/* 2. 9 Industries Showcase */}
      <Industries />

      {/* 3. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
