"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  results,
  tournaments,
  getTournament,
  getPlayer,
  getInstitution,
  getWinnerName,
  fmtDate,
} from "@/lib/data";

export default function ResultsPage() {
  const [sector, setSector] = useState("");
  const [format, setFormat] = useState("");

  const formats = useMemo(
    () => Array.from(new Set(tournaments.map((t) => t.discipline))).sort(),
    []
  );

  const list = results
    .filter((r) => {
      const t = getTournament(r.tournamentId);
      if (!t) return false;
      return (!sector || t.sector === sector) && (!format || t.discipline === format);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const { playerRows, instRows } = useMemo(() => {
    const playerWins: Record<string, number> = {};
    const instWins: Record<string, number> = {};

    results.forEach((r) => {
      if (r.winnerType === "player") playerWins[r.winnerId] = (playerWins[r.winnerId] || 0) + 1;
      if (r.winnerType === "institution") instWins[r.winnerId] = (instWins[r.winnerId] || 0) + 1;
    });
    results.forEach((r) => {
      if (r.winnerType === "player") {
        const p = getPlayer(r.winnerId);
        if (p) instWins[p.institutionId] = (instWins[p.institutionId] || 0) + 1;
      }
    });

    return {
      playerRows: Object.entries(playerWins).sort((a, b) => b[1] - a[1]),
      instRows: Object.entries(instWins).sort((a, b) => b[1] - a[1]),
    };
  }, []);

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">Results &amp; Winners</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Hall of Fame</h1>
          <p style={{ maxWidth: 600 }}>
            The historical archive of every completed phygital tournament in the Kingdom, plus the
            all-time leaderboard.
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
            <span className="result-count">
              {list.length} result{list.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-3">
            {list.length ? (
              list.map((r) => {
                const t = getTournament(r.tournamentId);
                return (
                  <div className="card" key={r.id}>
                    <div className="card-photo">{r.photo}</div>
                    <span className="badge badge-lime">Winner</span>
                    <h3>{getWinnerName(r.winnerId, r.winnerType)}</h3>
                    <p className="meta">{t ? t.name : ""} · {fmtDate(r.date)}</p>
                    <p className="desc">Runner-up: {getWinnerName(r.runnerUpId, r.runnerUpType)}</p>
                    <p className="desc" style={{ fontStyle: "italic" }}>{r.notes}</p>
                    {t && (
                      <Link href={`/tournaments/${t.id}`} className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                        View Tournament
                      </Link>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="empty-state">No results match these filters.</div>
            )}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Leaderboard</span>
          <h2>Most Wins — Players</h2>
          <div className="table-scroll">
            <table className="leaderboard" style={{ marginTop: 16, marginBottom: 44 }}>
              <thead><tr><th>#</th><th>Player</th><th>Institution</th><th>Wins</th></tr></thead>
              <tbody>
                {playerRows.length ? (
                  playerRows.map(([id, wins], idx) => {
                    const p = getPlayer(id);
                    const inst = p ? getInstitution(p.institutionId) : null;
                    return (
                      <tr key={id}>
                        <td>{idx + 1}</td>
                        <td>{p ? p.name : id}</td>
                        <td>{inst ? inst.name : "—"}</td>
                        <td>{wins}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr><td colSpan={4}>No results logged yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <h2>Most Wins — Institutions</h2>
          <div className="table-scroll">
            <table className="leaderboard" style={{ marginTop: 16 }}>
              <thead><tr><th>#</th><th>Institution</th><th>Sector</th><th>Titles</th></tr></thead>
              <tbody>
                {instRows.length ? (
                  instRows.map(([id, wins], idx) => {
                    const inst = getInstitution(id);
                    return (
                      <tr key={id}>
                        <td>{idx + 1}</td>
                        <td>{inst ? inst.name : id}</td>
                        <td>{inst ? inst.sector : "—"}</td>
                        <td>{wins}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr><td colSpan={4}>No results logged yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
