"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tournaments, statusBadgeClass, fmtDate, getTournamentHero } from "@/lib/data";
import CardImage from "@/components/CardImage";

export default function CalendarPage() {
  const [sector, setSector] = useState("");
  const [format, setFormat] = useState("");
  const [status, setStatus] = useState("");

  const formats = useMemo(
    () => Array.from(new Set(tournaments.map((t) => t.discipline))).sort(),
    []
  );

  const list = tournaments
    .filter(
      (t) =>
        (!sector || t.sector === sector) &&
        (!format || t.discipline === format) &&
        (!status || t.status === status)
    )
    .sort((a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime());

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">National Calendar</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Sanctioned Tournaments</h1>
          <p style={{ maxWidth: 600 }}>
            Every phygital tournament sanctioned by Phygital KSA across schools, universities, and
            corporates — from the SEF Arena flagship to regional circuits.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <label>Sector</label>
              <select value={sector} onChange={(e) => setSector(e.target.value)}>
                <option value="">All Sectors</option>
                <option>School</option>
                <option>University</option>
                <option>Corporate</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Format</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)}>
                <option value="">All Formats</option>
                {formats.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">All Statuses</option>
                <option>Upcoming</option>
                <option>Ongoing</option>
                <option>Completed</option>
              </select>
            </div>
            <span className="result-count">
              {list.length} tournament{list.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-3">
            {list.length ? (
              list.map((t, i) => (
                <Link key={t.id} href={`/tournaments/${t.id}`} className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <CardImage src={getTournamentHero(t, i)} alt={t.name} fallbackText={t.discipline} />
                  <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                    <span className={`badge ${statusBadgeClass(t.status)}`}>{t.status}</span>
                    <h3>{t.name}</h3>
                    <p className="meta">{t.discipline} · {t.sector}</p>
                    <p className="desc">{fmtDate(t.dateStart)} – {fmtDate(t.dateEnd)} · {t.venue}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="empty-state">No tournaments match these filters.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
