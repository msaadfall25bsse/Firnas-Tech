import React from "react";
import Button from "../ui/Button";
import MagneticWrapper from "../effects/MagneticWrapper";

export default function FinalCta() {
  return (
    <section className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      {/* Background Pulsing Radial Glow & Floating Circuit Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-radial-glow blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      {/* Subtle Zero Gravity Floating Particles for Final Banner */}
      <div className="absolute top-12 left-[12%] animate-zg-back pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#00E599]/50 shadow-[0_0_10px_#00E599]" />
      </div>
      <div className="absolute bottom-12 right-[15%] animate-zg-mid pointer-events-none" style={{ animationDelay: "-4s" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#0070F3]/50 shadow-[0_0_10px_#0070F3]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block text-xs uppercase font-mono tracking-widest text-[#00E599] mb-4">
          // INITIATE TRANSFORMATION
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Pull the Trigger! <br />
          Let’s Bring Your <span className="text-gradient-emerald">Vision to Life</span>.
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you need a full-scale digital transformation, an AI integration, or an elite dedicated developer squad, our teams in the USA, UK, UAE, Sweden, and Pakistan are ready to build.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <MagneticWrapper strength={0.3}>
            <Button
              href="#contact"
              variant="primary-emerald"
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,229,153,0.35)]"
            >
              Get Started Now
            </Button>
          </MagneticWrapper>

          <MagneticWrapper strength={0.2}>
            <Button
              href="#contact"
              variant="secondary-blue"
              size="lg"
              className="w-full sm:w-auto"
            >
              Schedule Technical Discovery
            </Button>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}
