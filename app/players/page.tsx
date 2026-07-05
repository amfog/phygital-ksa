"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { players, institutions, getInstitution } from "@/lib/data";

export default function PlayersPage() {
  const [inst, setInst] = useState("");
  const [sector, setSector] = useState("");
  const [discipline, setDiscipline] = useState("");

  const disciplines = useMemo(
    () => Array.from(new Set(players.map((p) => p.discipline))).sort(),
    []
  );

  const list = players.filter(
    (p) =>
      (!inst || p.institutionId === inst) &&
      (!sector || p.sector === sector) &&
      (!discipline || p.discipline === discipline)
  );

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">Directory</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Registered Players</h1>
          <p style={{ maxWidth: 600 }}>
            Athletes competing across the national phygital deployment framework and the SEF Arena
            track.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <label>Institution</label>
              <select value={inst} onChange={(e) => setInst(e.target.value)}>
                <option value="">All Institutions</option>
                {institutions.map((i) => (
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
            </div>
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
              <label>Discipline</label>
              <select value={discipline} onChange={(e) => setDiscipline(e.target.value)}>
                <option value="">All Disciplines</option>
                {disciplines.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <span className="result-count">
              {list.length} player{list.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-4">
            {list.length ? (
              list.map((p) => {
                const institution = getInstitution(p.institutionId);
                return (
                  <Link key={p.id} href={`/players/${p.id}`} className="card">
                    <div className="card-photo">{p.photo}</div>
                    <h3>{p.name}</h3>
                    <p className="meta">{institution ? institution.name : ""}</p>
                    <p className="desc">{p.discipline} · {p.stats.wins}/{p.stats.matches} wins</p>
                  </Link>
                );
              })
            ) : (
              <div className="empty-state">No players match these filters.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
