import React from "react";
import Metadata from "next";
import PageHero from "@/components/sections/PageHero";
import About from "@/components/sections/About";
import GlobalPresence from "@/components/sections/GlobalPresence";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Us | FIRNAS.TECH — Global Delivery & Engineering Flight",
  description:
    "Learn about FIRNAS.TECH's journey, team of 60+ engineers across 5 countries (UK, UAE, Saudi Arabia, Sweden, PK), academic MOUs, and enterprise digital transformation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="About FIRNAS.TECH"
        badgeVariant="emerald"
        title="Engineering Digital Wings for"
        titleGradient="Global Enterprises."
        description="Named in homage to Abbas ibn Firnas—the pioneer who dared to fly—we carry forward the spirit of fearless technological flight across our 5 global delivery hubs."
        videoSrc="/videos/hero_about.mp4"
      >
        <Button href="#about" variant="primary-emerald" size="md">
          Explore Our Journey
        </Button>
        <Button href="/contact" variant="glass-outline" size="md">
          Connect With Leadership
        </Button>
      </PageHero>

      {/* 2. Full About Us Content & History */}
      <About />

      {/* 3. Global Delivery Network (4 Countries) */}
      <GlobalPresence />

      {/* 4. Client Testimonials */}
      <Testimonials />

      {/* 5. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
