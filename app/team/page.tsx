import type { Metadata } from "next";
import Link from "next/link";
import { saudiLegendsRoster, gamesOfTheFuture2026, fmtDate } from "@/lib/data";

export const metadata: Metadata = { title: "Saudi Legends — National Team | Phygital KSA" };

export default function TeamPage() {
  const comp = gamesOfTheFuture2026;

  return (
    <>
      <section className="hero" style={{ padding: "90px 0 70px" }}>
        <div className="container">
          <span className="section-tag eyebrow">National Team</span>
          <h1>Saudi Legends</h1>
          <p style={{ maxWidth: 600, fontSize: "1.05rem", color: "#ddd" }}>
            The Kingdom&apos;s national phygital football team, representing Saudi Arabia on the
            international stage.
          </p>
          <div className="hero-actions">
            <span className="badge badge-lime">{comp.status}</span>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">The Competition</span>
          <h2>{comp.name}</h2>
          <div className="stat-strip" style={{ borderTop: "none", paddingTop: 0, marginTop: 16 }}>
            <div>
              <div className="n" style={{ WebkitTextFillColor: "initial", background: "none", color: "var(--black)" }}>
                {comp.location}
              </div>
              <div className="l" style={{ color: "var(--gray-mid)" }}>Location</div>
            </div>
            <div>
              <div className="n" style={{ WebkitTextFillColor: "initial", background: "none", color: "var(--black)" }}>
                {fmtDate(comp.dateStart)}
              </div>
              <div className="l" style={{ color: "var(--gray-mid)" }}>Opens</div>
            </div>
            <div>
              <div className="n" style={{ WebkitTextFillColor: "initial", background: "none", color: "var(--black)" }}>
                {fmtDate(comp.dateEnd)}
              </div>
              <div className="l" style={{ color: "var(--gray-mid)" }}>Closes</div>
            </div>
          </div>
          <p style={{ maxWidth: 640, marginTop: 24 }}>{comp.description}</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <span className="section-tag">The Squad</span>
          <h2>National Roster</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {saudiLegendsRoster.map((p) => (
              <div className="card" key={p.id}>
                <div className="card-photo">{p.photo}</div>
                <h3>{p.name}</h3>
                <p className="meta">{p.role}</p>
                <p className="desc">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--black">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Follow the Road to Astana</h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/news" className="btn btn-primary">Latest Updates</Link>
            <Link href="/map" className="btn btn-outline">National Circuit Map</Link>
          </div>
        </div>
      </section>
    </>
  );
}