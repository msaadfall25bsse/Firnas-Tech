import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Industries from "../components/sections/Industries";
import Technologies from "../components/sections/Technologies";
import GlobalPresence from "../components/sections/GlobalPresence";
import EngagementModels from "../components/sections/EngagementModels";
import TalentNetwork from "../components/sections/TalentNetwork";
import HiringProcess from "../components/sections/HiringProcess";
import ProductProcess from "../components/sections/ProductProcess";
import Testimonials from "../components/sections/Testimonials";
import NewsEvents from "../components/sections/NewsEvents";
import Careers from "../components/sections/Careers";
import FinalCta from "../components/sections/FinalCta";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05080F] text-[#F8FAFC]">
      {/* 1. Sticky/Fixed Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Anti-Gravity Hero Section */}
        <Hero />

        {/* 3. About IRNAS.TECH Section */}
        <About />

        {/* 4. Core Services (8 Categories) */}
        <Services />

        {/* 5. Industries Explorer (9 Verticals) */}
        <Industries />

        {/* 6. Technologies Ecosystem (13 Categories) */}
        <Technologies />

        {/* 7. Global Delivery Network (5 Countries) */}
        <GlobalPresence />

        {/* 8. Engagement Models */}
        <EngagementModels />

        {/* 9. Pre-Vetted Talent Network */}
        <TalentNetwork />

        {/* 10. 3-Step Hiring Process */}
        <HiringProcess />

        {/* 11. 6-Stage Product Development Process */}
        <ProductProcess />

        {/* 12. Verified Client Testimonials */}
        <Testimonials />

        {/* 13. Latest News & Academic MOUs */}
        <NewsEvents />

        {/* 14. Careers & Culture */}
        <Careers />

        {/* 15. Final Impact CTA */}
        <FinalCta />

        {/* 16. Contact & Technical Discovery */}
        <Contact />
      </main>

      {/* 17. Multi-Column Footer */}
      <Footer />
    </div>
  );
}
