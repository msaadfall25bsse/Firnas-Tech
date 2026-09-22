import React from "react";
import PageHero from "@/components/sections/PageHero";
import Services from "@/components/sections/Services";
import ProductProcess from "@/components/sections/ProductProcess";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Core Offerings & Services | FIRNAS.TECH — AI, Web, Mobile & Custom Software",
  description:
    "Explore FIRNAS.TECH's 8 core software offerings: Web Development, Mobile Applications, Custom Software, AI/ML/GenAI, UI/UX Design, Digital Marketing, Branding, and Staff Augmentation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="Core Software Offerings"
        badgeVariant="emerald"
        title="Scalable Solutions Engineered with"
        titleGradient="Precision & AI Agility."
        description="From bespoke web portals to generative AI integrations and dedicated engineering squads, discover how FIRNAS.TECH drives end-to-end digital transformation."
        videoSrc="/Logo_animation_with_circuit_effects_20260921061901.mp4"
      >
        <Button href="#services" variant="primary-emerald" size="md">
          View Interactive Cards
        </Button>
        <Button href="/contact" variant="glass-outline" size="md">
          Request Technical Consultation
        </Button>
      </PageHero>

      {/* 2. 8 Interactive Services Cards with 30s Auto-Reset */}
      <Services />

      {/* 3. Product Development Process (01 Ideate to 06 Support) */}
      <ProductProcess />

      {/* 4. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
