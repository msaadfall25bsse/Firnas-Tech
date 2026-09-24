import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Technologies from "@/components/sections/Technologies";
import GlobalPresence from "@/components/sections/GlobalPresence";
import EngagementModels from "@/components/sections/EngagementModels";
import TalentNetwork from "@/components/sections/TalentNetwork";
import HiringProcess from "@/components/sections/HiringProcess";
import ProductProcess from "@/components/sections/ProductProcess";
import Testimonials from "@/components/sections/Testimonials";
import NewsEvents from "@/components/sections/NewsEvents";
import Careers from "@/components/sections/Careers";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. Full Hero Section with 3D Circuit Video Background (Untouched) */}
      <Hero />

      {/* 2. Lower Sections Wrapper with Fixed High-Tech Globe / Compass / Antenna Background Image */}
      <div className="relative bg-[#05080F]">
        {/* Fixed Ambient Background Image (Stay Paki Paki behind section headings & content) */}
        <div 
          className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 mix-blend-screen"
          style={{ backgroundImage: "url('/tech-news-globe-bg.jpg')" }}
        />
        {/* Subtle Dark Vignette & Mesh Overlay for Maximum Legibility of Section Headings */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-gradient-to-b from-[#05080F]/90 via-[#05080F]/70 to-[#05080F]/90" />

        {/* Content Layer (Float smoothly over stay background) */}
        <div className="relative z-10">
          {/* 2. About IRNAS.TECH Section */}
          <About />

          {/* 3. Core Services (8 Categories with 30s Auto-Reset Flip Cards) */}
          <Services />

          {/* 4. Industries Explorer (9 Verticals) */}
          <Industries />

          {/* 5. Technologies Ecosystem (13 Framework Categories) */}
          <Technologies />

          {/* 6. Global Delivery Network (5 Registered Countries) */}
          <GlobalPresence />

          {/* 7. Engagement Models */}
          <EngagementModels />

          {/* 8. Pre-Vetted Talent Network */}
          <TalentNetwork />

          {/* 9. 3-Step Hiring Process */}
          <HiringProcess />

          {/* 10. 6-Stage Product Development Process */}
          <ProductProcess />

          {/* 11. Verified Client Testimonials */}
          <Testimonials />

          {/* 12. Latest News & Academic MOUs */}
          <NewsEvents />

          {/* 13. Careers & Culture */}
          <Careers />

          {/* 14. Final Impact CTA */}
          <FinalCta />

          {/* 15. Contact & Technical Discovery */}
          <Contact />
        </div>
      </div>
    </main>
  );
}
