"use client";

import { useEffect, useState } from "react";

export interface HeroSlide {
  src: string;
  alt: string;
  label?: string;
}

const DEFAULT_SLIDES: HeroSlide[] = [
  { src: "/images/hero-football.png", alt: "Phygital Football athlete in motion", label: "Phygital Football" },
  { src: "/images/hero-basketball.png", alt: "Phygital Basketball athlete mid-dunk", label: "Phygital Basketball" },
  { src: "/images/hero-racing.png", alt: "Phygital Racing athlete sprinting to start", label: "Phygital Racing" },
];

/**
 * Full-bleed rotating hero background, crossfading between slides.
 * Renders as an absolutely-positioned layer — drop it inside any element
 * with position:relative + overflow:hidden (the .hero class already has
 * both) and put real content in a sibling element with a higher z-index.
 *
 * Pauses on prefers-reduced-motion (shows the first slide only, no motion).
 */
export default function HeroCarousel({
  slides = DEFAULT_SLIDES,
  intervalMs = 6000,
}: {
  slides?: HeroSlide[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [reducedMotion, slides.length, intervalMs]);

  return (
    <div className="hero-carousel" aria-hidden="true">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="hero-carousel-slide"
          style={{
            backgroundImage: `url(${slide.src})`,
            opacity: i === active || reducedMotion ? (reducedMotion ? (i === 0 ? 1 : 0) : 1) : 0,
          }}
        />
      ))}
      <div className="hero-carousel-overlay" />
      {slides.length > 1 && !reducedMotion && (
        <div className="hero-carousel-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              className={`hero-carousel-dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${slide.label ?? `slide ${i + 1}`}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}