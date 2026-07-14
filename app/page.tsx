"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import SponsorMarquee from "@/components/SponsorMarquee";
import HeroCarousel from "@/components/HeroCarousel";
import { useTranslation } from "@/lib/i18n/LanguageContext";
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
  const { t } = useTranslation();

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
          <span className="section-tag eyebrow">{t("home.eyebrow")}</span>
          <h1>
            {t("home.titleLine1")}
            <br />
            {t("home.titleLine2")}
            <br />
            {t("home.titleLine3")}
          </h1>
          <p style={{ maxWidth: 560, fontSize: "1.05rem", color: "#ddd" }}>
            {t("home.subtitle")}
          </p>
          <div className="hero-actions">
            <Link href="/institutions" className="btn btn-primary">
              {t("home.registerCta")}
            </Link>
            <Link href="/calendar" className="btn btn-outline">
              {t("home.calendarCta")}
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num"><CountUp target={institutions.length} /></div>
              <div className="lbl">{t("home.statsInstitutions")}</div>
            </div>
            <div className="hero-stat">
              <div className="num"><CountUp target={players.length} /></div>
              <div className="lbl">{t("home.statsPlayers")}</div>
            </div>
            <div className="hero-stat">
              <div className="num"><CountUp target={tournaments.length} /></div>
              <div className="lbl">{t("home.statsTournaments")}</div>
            </div>
          </div>
        </div>
      </section>

      <SponsorMarquee />

      <section className="section section--light">
        <div className="container">
          <span className="section-tag">{t("home.tracksTag")}</span>
          <h2>{t("home.tracksTitle")}</h2>
          <div className="grid grid-2" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>{t("home.sefTitle")}</h3>
              <p className="desc">{t("home.sefBody")}</p>
              <Link href="/tournaments/trn-001" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                {t("home.sefCta")}
              </Link>
            </div>
            <div className="card">
              <h3>{t("home.deploymentTitle")}</h3>
              <p className="desc">{t("home.deploymentBody")}</p>
              <Link href="/institutions" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                {t("home.deploymentCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">{t("home.featuredTag")}</span>
          <h2>{t("home.featuredTitle")}</h2>
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
                  {t("home.viewDetails")}
                </Link>
                </div>
              </div>
            ) : (
              <p>{t("home.noLiveTournament")}</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--black">
        <div className="container">
          <span className="section-tag">{t("home.hofTag")}</span>
          <h2>{t("home.hofTitle")}</h2>
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
                  {t("home.viewHof")}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}