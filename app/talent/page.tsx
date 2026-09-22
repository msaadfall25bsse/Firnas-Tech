import React from "react";
import PageHero from "@/components/sections/PageHero";
import TalentNetwork from "@/components/sections/TalentNetwork";
import HiringProcess from "@/components/sections/HiringProcess";
import EngagementModels from "@/components/sections/EngagementModels";
import Careers from "@/components/sections/Careers";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Talent Network & Careers | FIRNAS.TECH — Hire Pre-Vetted Engineers",
  description:
    "Meet our elite engineering leaders (Noman Tariq, Asfand Yar, Asim Tariq, Muhammad Haris) and hire on-demand pre-vetted developer squads in 3 easy steps.",
};

export default function TalentPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="Talent Network & Careers"
        badgeVariant="emerald"
        title="Hire Pre-Vetted Engineers & Scale"
        titleGradient="On Demand."
        description="Access our network of 150+ senior full-stack developers, AI engineers, and UI/UX designers ready to integrate seamlessly into your engineering workflows."
        videoSrc="/videos/hero_talent.mp4"
      >
        <Button href="#talent" variant="primary-emerald" size="md">
          Meet Team Leaders
        </Button>
        <Button href="/contact" variant="glass-outline" size="md">
          Hire Pre-Vetted Engineers
        </Button>
      </PageHero>

      {/* 2. Official Team Portraits & Talent Network */}
      <TalentNetwork />

      {/* 3. 3-Step Hiring Process */}
      <HiringProcess />

      {/* 4. Flexible Engagement Models */}
      <EngagementModels />

      {/* 5. Culture & Perks */}
      <Careers />

      {/* 6. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
