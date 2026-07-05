import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Mandate — Phygital KSA",
};

export default function AboutPage() {
  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56 }}>
        <div className="container">
          <span className="section-tag">About &amp; Mandate</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
            National Operator for Phygital Competition
          </h1>
          <p style={{ maxWidth: 640, fontSize: "1.05rem" }}>
            Phygital KSA holds the national operator mandate for phygital competition in Saudi
            Arabia, responsible for standardizing format, sanctioning tournaments, and building the
            pathway from grassroots participation to international eligibility.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h3>Who We Are</h3>
              <p className="desc">
                Phygital KSA is the national platform for phygital competition in the Kingdom — the
                hybrid of digital and physical play — covering schools, universities, and
                corporates. [PLACEHOLDER — expanded organizational background].
              </p>
            </div>
            <div className="card">
              <h3>The National Operator Role</h3>
              <p className="desc">
                As national operator, Phygital KSA sanctions tournaments, certifies formats,
                maintains the institutions and players registry, and reports results into the
                international phygital ecosystem. [PLACEHOLDER — scope of authority language].
              </p>
            </div>
            <div className="card">
              <h3>Alignment with Phygital International</h3>
              <p className="desc">
                The national framework is built to mirror Phygital International&apos;s
                competition standards, ensuring institutions and players who progress through
                Phygital KSA are eligible for international sanctioned events. [PLACEHOLDER —
                pending formal alignment documentation].
              </p>
            </div>
            <div className="card">
              <h3>Pathway to Games of the Future</h3>
              <p className="desc">
                Top performers from the national deployment framework and the SEF Arena track form
                the pipeline toward Games of the Future eligibility. [PLACEHOLDER — qualification
                criteria pending federation confirmation].
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Two Tracks. One National System.</h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/institutions" className="btn btn-primary">Register an Institution</Link>
            <Link href="/partners" className="btn btn-outline">View Partners</Link>
          </div>
        </div>
      </section>
    </>
  );
}
