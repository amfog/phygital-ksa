"use client";

import Image from "next/image";

/**
 * Shows a real photo that loops between its normal "physical" state and a
 * "digitized" state (color-shifted + scanline overlay), suggesting the
 * physical-to-digital transformation phygital competition is built on.
 *
 * Pure CSS — no second image asset needed. Respects prefers-reduced-motion
 * (falls back to the plain photo, no animation) via the .morph-card class
 * in globals.css.
 */
export default function MorphImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  return (
    <div className="morph-card">
      <div className="morph-card-photo">
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        <div className="morph-card-overlay" />
        <div className="morph-card-scanlines" />
      </div>
      {label && <div className="morph-card-label">{label}</div>}
    </div>
  );
}
