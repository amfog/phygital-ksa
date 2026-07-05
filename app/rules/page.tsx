import type { Metadata } from "next";
import { rules } from "@/lib/data";

export const metadata: Metadata = { title: "Rules & Formats — Phygital KSA" };

export default function RulesPage() {
  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">Rules &amp; Formats</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Public Rulebook Summaries</h1>
          <p style={{ maxWidth: 600 }}>
            Format summaries per discipline. Full rulebooks are published once confirmed with
            Phygital International and Al-Ittihad Al-Saudi.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid-3">
            {rules.map((r) => (
              <div className="card" key={r.id}>
                <h3>{r.discipline}</h3>
                <p className="desc">{r.summary}</p>
                <p className="desc"><strong>Eligibility:</strong> {r.eligibility}</p>
                {r.rulebookLink ? (
                  <a href={r.rulebookLink} className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                    Full Rulebook (PDF)
                  </a>
                ) : (
                  <div className="placeholder-note">
                    [PLACEHOLDER — full rulebook PDF pending official release.]
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
