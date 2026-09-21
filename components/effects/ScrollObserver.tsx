"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver, reveal all elements immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll(
          ".scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right"
        )
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const targets = document.querySelectorAll(
        ".scroll-reveal:not(.is-visible), .scroll-reveal-scale:not(.is-visible), .scroll-reveal-left:not(.is-visible), .scroll-reveal-right:not(.is-visible)"
      );
      targets.forEach((el) => observer.observe(el));
    };

    // Initial scan
    observeElements();

    // Re-scan after short delays to catch hydrated content & dynamic sections
    const timeout1 = setTimeout(observeElements, 200);
    const timeout2 = setTimeout(observeElements, 800);

    // Safety fallback: after 3 seconds, reveal all to guarantee 100% content visibility on any device
    const safetyTimeout = setTimeout(() => {
      document
        .querySelectorAll(
          ".scroll-reveal:not(.is-visible), .scroll-reveal-scale:not(.is-visible), .scroll-reveal-left:not(.is-visible), .scroll-reveal-right:not(.is-visible)"
        )
        .forEach((el) => el.classList.add("is-visible"));
    }, 3000);

    // Watch for dynamic DOM changes (e.g. tab switches, accordions)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return null;
}
