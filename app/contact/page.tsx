import React from "react";
import PageHero from "@/components/sections/PageHero";
import Contact from "@/components/sections/Contact";
import GlobalPresence from "@/components/sections/GlobalPresence";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact & Consultation | FIRNAS.TECH — Global Delivery Hubs",
  description:
    "Get in touch with FIRNAS.TECH for custom software, AI integrations, or developer talent. Regional offices in UK, UAE, Sweden, and Pakistan.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="Direct Connection"
        badgeVariant="cyan"
        title="Let's Bring Your Vision to Life with"
        titleGradient="24/7 Global Agility."
        description="Whether you have an ambitious product idea, need custom enterprise software, or wish to augment your team with pre-vetted engineers, our regional leaders are ready to connect."
        videoSrc="/videos/hero_contact.mp4"
      >
        <Button href="#contact" variant="primary-emerald" size="md">
          Fill Consultation Form
        </Button>
      </PageHero>

      {/* 2. Interactive Consultation Form & Direct Office Contacts */}
      <Contact />

      {/* 3. Global 4-Country Office Hubs */}
      <GlobalPresence />
    </main>
  );
}
