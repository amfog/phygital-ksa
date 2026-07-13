import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import SponsorMarquee from "@/components/SponsorMarquee";
import HeroCarousel from "@/components/HeroCarousel";
import {
  institutions,
  players,
  tournaments,
  results,
  getTournament,
  getWinnerName,
  fmtDate,
  statusBadgeClass,
  getTournamentHero,
} from "@/lib/data";

export default function Home() {
  const featured =
    tournaments.find((t) => t.status === "Ongoing") ??
    tournaments.find((t) => t.status === "Upcoming");

  const latestResult = [...results].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
  const latestTournament = latestResult ? getTournament(latestResult.tournamentId) : null;

  return (
    <>
      <section className="hero">
        <HeroCarousel />
        <div className="container">
          <span className="section-tag eyebrow">National Operator · Saudi Arabia</span>
          <h1>
            The National Face
            <br />
            of Phygital in
            <br />
            Saudi Arabia
          </h1>
          <p style={{ maxWidth: 560, fontSize: "1.05rem", color: "#ddd" }}>
            Phygital KSA runs phygital competition across the Kingdom — hosting the SEF Arena
            tournament with Al-Ittihad Al-Saudi, and deploying a standardized framework across
            schools, universities, and corporates, aligned with Phygital International and the
            Games of the Future.
          </p>
          <div className="hero-actions">
            <Link href="/institutions" className="btn btn-primary">
              Register Your Institution
            </Link>
            <Link href="/calendar" className="btn btn-outline">
              View National Calendar
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num"><CountUp target={institutions.length} /></div>
              <div className="lbl">Institutions Registered</div>
            </div>
            <div className="hero-stat">
              <div className="num"><CountUp target={players.length} /></div>
              <div className="lbl">Registered Players</div>
            </div>
            <div className="hero-stat">
              <div className="num"><CountUp target={tournaments.length} /></div>
              <div className="lbl">Sanctioned Tournaments</div>
            </div>
          </div>
        </div>
      </section>

      <SponsorMarquee />

      <section className="section section--light">
        <div className="container">
          <span className="section-tag">Two Tracks, One System</span>
          <h2>How Phygital KSA Works</h2>
          <div className="grid grid-2" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>SEF Arena Hosting</h3>
              <p className="desc">
                In partnership with Al-Ittihad Al-Saudi, Phygital KSA hosts the flagship Phygital
                Tournament at SEF Arena — the Kingdom&apos;s marquee phygital competition event.
              </p>
              <Link href="/tournaments/trn-001" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                View SEF Arena Open
              </Link>
            </div>
            <div className="card">
              <h3>National Deployment Framework</h3>
              <p className="desc">
                A standardized onboarding system for schools, universities, and corporates —
                building a pathway to Phygital International and Games of the Future eligibility.
              </p>
              <Link href="/institutions" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                Onboard an Institution
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Live Now</span>
          <h2>Featured Tournament</h2>
          <div style={{ marginTop: 24 }}>
            {featured ? (
              <div className="card" style={{ maxWidth: 560, padding: 0, overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                  <Image
                    src={getTournamentHero(featured, 0)}
                    alt={`${featured.name} — ${featured.venue}`}
                    fill
                    sizes="(max-width: 620px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div style={{ padding: 22 }}>
                <span className={`badge ${statusBadgeClass(featured.status)}`}>{featured.status}</span>
                <h3>{featured.name}</h3>
                <p className="meta">{featured.discipline} · {featured.venue}</p>
                <p className="desc">{featured.description}</p>
                <Link href={`/tournaments/${featured.id}`} className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                  View Details
                </Link>
                </div>
              </div>
            ) : (
              <p>No live tournament right now — check the calendar.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--black">
        <div className="container">
          <span className="section-tag">Hall of Fame</span>
          <h2>Most Recent Winner</h2>
          <div style={{ marginTop: 24 }}>
            {latestResult ? (
              <div className="card" style={{ maxWidth: 560, background: "#141414", borderColor: "#2a2a2a" }}>
                <span className="badge badge-lime">Winner</span>
                <h3 style={{ color: "#fff" }}>
                  {getWinnerName(latestResult.winnerId, latestResult.winnerType)}
                </h3>
                <p className="meta" style={{ color: "#999" }}>
                  {latestTournament ? latestTournament.name : ""} · {fmtDate(latestResult.date)}
                </p>
                <Link href="/results" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                  View Hall of Fame
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}