"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  ".hero h1", ".hero p", ".hero-actions", ".hero-stats",
  ".section h2", ".section-tag", ".card", ".profile-head",
  "table.leaderboard", ".form-block", ".placeholder-note",
].join(", ");

/**
 * Mount once in the root layout. Re-scans the DOM on every route change
 * (App Router doesn't full-reload, so a plain window.load listener won't refire).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
      ).filter((el) => !el.classList.contains("reveal"));

      const groups = new Map<Element | null, number>();
      targets.forEach((el) => {
        const parent = el.parentElement;
        const idx = groups.get(parent) ?? 0;
        groups.set(parent, idx + 1);
        el.classList.add("reveal");
        el.style.transitionDelay = Math.min(idx * 70, 350) + "ms";
      });

      if (!("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-visible"));
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
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((el) => observer.observe(el));
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
