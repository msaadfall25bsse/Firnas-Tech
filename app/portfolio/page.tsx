import React from "react";
import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Portfolio & Case Studies | FIRNAS.TECH — Our Success Stories",
  description:
    "Discover how FIRNAS.TECH transformed luxury retail, vehicle security, real estate, and limousine services with high-impact software solutions.",
};

const CASE_STUDIES = [
  {
    id: "italo-milan",
    title: "Italo Milan",
    tagline: "Luxury Redefined in E-Commerce",
    category: "Luxury E-Commerce & Retail",
    impact: "+140% Mobile Conversion Rate",
    description:
      "Engineered an ultra-fast headless e-commerce experience with sub-second page loads, automated inventory synchronization, and bespoke luxury checkout UI.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Headless Commerce", "Tailwind CSS", "Stripe API"],
  },
  {
    id: "vanlock",
    title: "VanLock Security",
    tagline: "Fleet Protection & Smart Hardware Control",
    category: "IoT & Commercial Security",
    impact: "99.99% Remote Telemetry Uptime",
    description:
      "Developed an encrypted mobile control app and fleet tracking portal allowing commercial van owners to monitor, lock, and manage security hardware remotely in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Node.js", "IoT Protocols", "AWS WebSockets"],
  },
  {
    id: "rukan-albait",
    title: "Rukan Albait",
    tagline: "PropTech & Property Management Platform",
    category: "Real Estate & Hospitality",
    impact: "15,000+ Active Monthly Tenants",
    description:
      "Constructed a unified real estate management system supporting digital lease signing, automated maintenance ticketing, and multi-currency payment collection.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Full-Stack Web", "Python / Django", "PostgreSQL", "Flutter App"],
  },
  {
    id: "black-sea-limo",
    title: "Black Sea Limo",
    tagline: "Premier Chauffeur Booking Engine",
    category: "Transportation & Chauffeur Logistics",
    impact: "3.5x Monthly Booking Volume",
    description:
      "Created an automated VIP limousine dispatch, real-time driver GPS tracking, and instant price calculator tailored for executive travel across Europe.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js App", "Google Maps API", "Dispatch Engine", "Real-Time Tracking"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* 1. Page Hero with Infinite Video Background */}
      <PageHero
        badge="Success Stories"
        badgeVariant="emerald"
        title="High-Impact Digital Products Built for"
        titleGradient="Market Leaders."
        description="Explore our portfolio of enterprise web portals, high-security IoT applications, and luxury mobile platforms built for clients across the globe."
        videoSrc="/videos/hero_portfolio.mp4"
      >
        <Button href="#case-studies" variant="primary-emerald" size="md">
          View Success Stories
        </Button>
        <Button href="/contact" variant="glass-outline" size="md">
          Start Your Project
        </Button>
      </PageHero>

      {/* 2. Featured Portfolio Case Studies */}
      <section id="case-studies" className="py-24 bg-[#05080F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal" data-revealed="true">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Featured <span className="text-gradient-emerald">Case Studies</span>.
            </h2>
            <p className="text-base text-[#94A3B8]">
              Proven software engineering results delivered for global enterprises and ambitious startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, idx) => (
              <div
                key={cs.id}
                data-revealed="true"
                className="glass-card rounded-3xl overflow-hidden border border-white/10 group hover:border-[#00E599]/50 transition-all duration-500 shadow-xl scroll-reveal"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-[#00E599]">
                    {cs.category}
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#00E599]/20 border border-[#00E599]/40 text-xs font-mono text-[#00E599] font-bold shadow-lg">
                    ⚡ {cs.impact}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#00E599] transition-colors">
                    {cs.title}
                  </h3>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-4">
                    {cs.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                    {cs.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white/80 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Client Testimonials */}
      <Testimonials />

      {/* 4. Final Call to Action */}
      <FinalCta />
    </main>
  );
}
