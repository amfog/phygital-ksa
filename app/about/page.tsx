// app/about-phygital/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Phygital? — Phygital KSA",
  description: "Learn about phygital competition — the revolutionary hybrid of digital and physical sports that's transforming how we play and compete."
};

export default function AboutPhygitalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section section--black" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="container">
          <span className="section-tag">About Phygital</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", marginBottom: 20 }}>
            What is Phygital?
          </h1>
          <p style={{ maxWidth: 720, fontSize: "1.15rem", lineHeight: 1.7, color: "#c7cae0" }}>
            Phygital is the revolutionary fusion of <strong style={{ color: "var(--accent-blue)" }}>physical</strong> and <strong style={{ color: "var(--accent-purple)" }}>digital</strong> sports — 
            a new category of competition that combines the best of both worlds. Athletes compete in digital formats 
            (video games, simulators) and then transition to physical play, creating a unique hybrid experience 
            that appeals to traditional athletes and digital natives alike.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section--white">
        <div className="container">
          <span className="section-tag">How It Works</span>
          <h2 style={{ marginBottom: 32 }}>The Phygital Format</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <div className="card" style={{ textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎮</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 12 }}>Digital Round</h3>
              <p className="desc">
                Athletes compete in digital formats — FIFA, sim racing, or digital basketball. 
                Scores and performance are tracked and carried forward.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>⚡</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 12 }}>Transition</h3>
              <p className="desc">
                Digital performance determines starting positions, advantages, or qualification 
                for the physical round. The two worlds connect seamlessly.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🏆</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 12 }}>Physical Round</h3>
              <p className="desc">
                Athletes transition to physical play — real football, go-kart racing, or basketball. 
                Combined scores determine the ultimate winner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Disciplines */}
      <section className="section section--light">
        <div className="container">
          <span className="section-tag">Disciplines</span>
          <h2 style={{ marginBottom: 32 }}>The Three Phygital Sports</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            
            {/* Phygital Football */}
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, var(--black) 0%, var(--black-2) 100%)", padding: "32px 24px", color: "var(--white)" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>⚽</div>
                <h3 style={{ fontSize: "1.6rem", background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>Phygital Football</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "0.95rem" }}>
                  FIFA → 5-a-side
                </p>
              </div>
              <div style={{ padding: 24 }}>
                <p className="desc" style={{ marginBottom: 16 }}>
                  Athletes first compete in a FIFA video game match, then transition to a physical 5-a-side 
                  football game. The digital score contributes to the final aggregate result.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <span className="badge badge-lime">Digital + Physical</span>
                  <span className="badge">Team Sport</span>
                </div>
              </div>
            </div>

            {/* Phygital Racing */}
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, var(--black) 0%, var(--black-2) 100%)", padding: "32px 24px", color: "var(--white)" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>🏎️</div>
                <h3 style={{ fontSize: "1.6rem", background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>Phygital Racing</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "0.95rem" }}>
                  Sim Racing → Go-Kart
                </p>
              </div>
              <div style={{ padding: 24 }}>
                <p className="desc" style={{ marginBottom: 16 }}>
                  Competitors race in a sim racing simulator, earning qualifying positions for a physical 
                  go-kart or track race. Digital performance sets up the physical showdown.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <span className="badge badge-lime">Speed + Skill</span>
                  <span className="badge">Individual</span>
                </div>
              </div>
            </div>

            {/* Phygital Basketball */}
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, var(--black) 0%, var(--black-2) 100%)", padding: "32px 24px", color: "var(--white)" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>🏀</div>
                <h3 style={{ fontSize: "1.6rem", background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>Phygital Basketball</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "0.95rem" }}>
                  Digital 3v3 → Physical Shootout
                </p>
              </div>
              <div style={{ padding: 24 }}>
                <p className="desc" style={{ marginBottom: 16 }}>
                  Teams compete in a digital 3v3 basketball game, followed by a physical shootout or 
                  skills challenge. Combined scoring determines the winner.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <span className="badge badge-lime">Strategy + Athleticism</span>
                  <span className="badge">Team Sport</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Why It Matters</span>
          <h2 style={{ marginBottom: 32 }}>The Future of Sport</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, maxWidth: 900 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: "2rem", flexShrink: 0 }}>🎯</div>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 8 }}>Best of Both Worlds</h3>
                <p className="desc" style={{ margin: 0, fontSize: "0.95rem" }}>
                  Combines physical fitness and athletic skill with digital strategy and gaming expertise.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: "2rem", flexShrink: 0 }}>👥</div>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 8 }}>New Audiences</h3>
                <p className="desc" style={{ margin: 0, fontSize: "0.95rem" }}>
                  Appeals to traditional sports fans and digital natives, bridging generational gaps.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: "2rem", flexShrink: 0 }}>🌍</div>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 8 }}>Global Movement</h3>
                <p className="desc" style={{ margin: 0, fontSize: "0.95rem" }}>
                  Part of an international phygital ecosystem with Games of the Future and global competitions.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: "2rem", flexShrink: 0 }}>🇸🇦</div>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 8 }}>Saudi Leadership</h3>
                <p className="desc" style={{ margin: 0, fontSize: "0.95rem" }}>
                  Saudi Arabia is positioned to lead the phygital revolution, aligning with Vision 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
      <section className="section section--black">
        <div className="container">
          <span className="section-tag">Vision 2030</span>
          <h2 style={{ marginBottom: 24, color: "var(--white)" }}>Aligned with Saudi Vision 2030</h2>
          <p style={{ maxWidth: 720, fontSize: "1.05rem", lineHeight: 1.7, color: "#c7cae0", marginBottom: 32 }}>
            Phygital competition directly supports Saudi Arabia's Vision 2030 goals by:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <div className="card" style={{ background: "var(--black-2)", borderColor: "#2a2a4d" }}>
              <h3 style={{ background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "1.1rem", marginBottom: 10 }}>Quality of Life</h3>
              <p className="desc" style={{ color: "#a9acce", fontSize: "0.9rem", margin: 0 }}>
                Promoting active lifestyles and youth engagement through innovative sports formats.
              </p>
            </div>
            <div className="card" style={{ background: "var(--black-2)", borderColor: "#2a2a4d" }}>
              <h3 style={{ background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "1.1rem", marginBottom: 10 }}>Digital Transformation</h3>
              <p className="desc" style={{ color: "#a9acce", fontSize: "0.9rem", margin: 0 }}>
                Embracing digital innovation in sports and entertainment sectors.
              </p>
            </div>
            <div className="card" style={{ background: "var(--black-2)", borderColor: "#2a2a4d" }}>
              <h3 style={{ background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "1.1rem", marginBottom: 10 }}>Youth Empowerment</h3>
              <p className="desc" style={{ color: "#a9acce", fontSize: "0.9rem", margin: 0 }}>
                Creating new pathways for young Saudis to excel in sports and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section--white" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ marginBottom: 20 }}>Ready to Experience Phygital?</h2>
          <p style={{ maxWidth: 600, margin: "0 auto 32px", fontSize: "1.05rem", color: "#444" }}>
            Whether you're an institution looking to onboard or a player ready to compete, 
            Phygital KSA is your gateway to the future of sport.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/institutions" className="btn btn-primary">Register Your Institution</a>
            <a href="/national-team" className="btn btn-outline">Meet the National Team</a>
          </div>
        </div>
      </section>
    </>
  );
}