import Link from "next/link";
import type { Metadata } from "next";
import MorphImage from "@/components/MorphImage";

export const metadata: Metadata = {
  title: "About & Mandate — Phygital KSA",
};

export default function AboutPage() {
  return (
    <>
      <section
        className="section section--black section--black-photo"
        style={{ paddingTop: 56, ["--hero-image" as string]: "url(/images/abstract-orb.png)" }}
      >
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

      {/* ---------- What Is Phygital? ---------- */}
      <section className="section section--white">
        <div className="container">
          <span className="section-tag">What Is Phygital?</span>
          <h2>One Match, Two Worlds</h2>
          <p style={{ maxWidth: 640, marginBottom: 40 }}>
            Every phygital match runs through three stages — digital performance carries real
            weight into a physical showdown, and one combined score decides the winner.
          </p>
          <div className="phase-strip">
            <div className="phase-card">
              <div
                className="phase-icon"
                style={{ backgroundImage: "url(/images/playstation.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <h3>Digital Round</h3>
              <p>
                Athletes compete in digital formats — FIFA, sim racing, or digital basketball.
                Scores and performance are tracked and carried forward.
              </p>
            </div>
            <div className="phase-card">
              <div className="phase-icon">⚡</div>
              <h3>Transition</h3>
              <p>
                Digital performance determines starting positions, advantages, or qualification
                for the physical round. The two worlds connect seamlessly.
              </p>
            </div>
            <div className="phase-card">
              <div
                className="phase-icon"
                style={{ backgroundImage: "url(/images/winner.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <h3>Physical Round</h3>
              <p>
                Athletes transition to physical play — real football, go-kart racing, or
                basketball. Combined scores determine the ultimate winner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The Three Phygital Sports ---------- */}
      <section className="section section--light">
        <div className="container">
          <span className="section-tag">Disciplines</span>
          <h2>The Three Phygital Sports</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            <MorphImage src="/images/football.jpg" alt="Phygital Football" label="Phygital Football — FIFA → 5-a-side" />
            <MorphImage src="/images/hero-racing.png" alt="Phygital Racing" label="Phygital Racing — Sim Racing → Go-Kart" />
            <MorphImage src="/images/basketball.jpg" alt="Phygital Basketball" label="Phygital Basketball — Digital 3v3 → Physical Shootout" />
          </div>
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
                corporates.
              </p>
            </div>
            <div className="card">
              <h3>The National Operator Role</h3>
              <p className="desc">
                As national operator, Phygital KSA sanctions tournaments, certifies formats,
                maintains the institutions and players registry, and reports results into the
                international phygital ecosystem.
              </p>
            </div>
            <div className="card">
              <h3>Alignment with Phygital International</h3>
              <p className="desc">
                The national framework is built to mirror Phygital International&apos;s
                competition standards, ensuring institutions and players who progress through
                Phygital KSA are eligible for international sanctioned events.
              </p>
            </div>
            <div className="card">
              <h3>Pathway to Games of the Future</h3>
              <p className="desc">
                Top performers from the national deployment framework and the SEF Arena track form
                the pipeline toward Games of the Future eligibility.
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