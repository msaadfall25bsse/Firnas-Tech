import React from "react";
import PageHero from "@/components/sections/PageHero";
import Technologies from "@/components/sections/Technologies";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Tech Stack & Ecosystem | FIRNAS.TECH — 13 Modern Framework Domains",
  description:
    "Explore our modern tech ecosystem: React, Next.js, Angular, Node.js, Python, Flutter, PyTorch, TensorFlow, Docker, Kubernetes, AWS, and Cloud Architecture.",
};

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="Technology Stack"
        badgeVariant="blue"
        title="Battle-Tested Tools &"
        titleGradient="Next-Gen AI Frameworks."
        description="Our engineers utilize cutting-edge frontend, backend, AI/ML, cross-platform mobile, and DevOps stacks to construct scalable enterprise systems."
        videoSrc="/videos/hero_technologies.mp4"
      >
        <Button href="#technologies" variant="secondary-blue" size="md">
          Explore Tech Ecosystem
        </Button>
        <Button href="/contact" variant="glass-outline" size="md">
          Consult Tech Architect
        </Button>
      </PageHero>

      {/* 2. 13 Technologies Framework Marquees & Filters */}
      <Technologies />

      {/* 3. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
