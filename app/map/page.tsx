import type { Metadata } from "next";
import SaudiMap from "@/components/SaudiMap";
import { regions } from "@/lib/data";

export const metadata: Metadata = { title: "National Circuit Map — Phygital KSA" };

export default function MapPage() {
  const activeCount = regions.filter((r) => r.status === "Active").length;
  const onboardingCount = regions.filter((r) => r.status === "Onboarding").length;

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">National Circuit Map</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>The Kingdom, Region by Region</h1>
          <p style={{ maxWidth: 640 }}>
            Track the national deployment framework as it rolls out across all 13 provinces —
            {" "}{activeCount} active, {onboardingCount} onboarding, and the rest on the roadmap.
            Click a region to see what&apos;s registered there.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SaudiMap />
        </div>
      </section>
    </>
  );
}
