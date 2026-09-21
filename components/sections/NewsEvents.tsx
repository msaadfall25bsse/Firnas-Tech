import React from "react";
import Badge from "../ui/Badge";
import { SITE_DATA } from "../../data/siteData";

export default function NewsEvents() {
  return (
    <section id="news" className="relative py-28 bg-[#070B14] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <Badge variant="cyan" dot size="sm" className="mb-4">
            Updates &amp; Academic Linkages
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Latest News &amp; <span className="text-gradient-cyber">Institutional MOUs</span>.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Stay updated with our ongoing research collaborations, academic memorandums of understanding, and community tech enablement initiatives.
          </p>
        </div>

        {/* News Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SITE_DATA.newsAndEvents.map((news, idx) => (
            <div
              key={news.id}
              className={`glass-card p-6 flex flex-col justify-between group hover:border-[#0070F3]/50 transition duration-300 scroll-reveal stagger-${idx + 1}`}
            >
              <div>
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#00A3FF]">
                    {news.category}
                  </span>
                  <span className="text-[11px] text-[#64748B]">{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#00E599] transition-colors leading-snug line-clamp-3">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
              </div>

              {/* Read More link */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#00E599] font-medium group-hover:underline flex items-center gap-1">
                  Read Article <span>&rarr;</span>
                </span>
                <span className="text-[10px] font-mono text-[#64748B]">ARCHIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
