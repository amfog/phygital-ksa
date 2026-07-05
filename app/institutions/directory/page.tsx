"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { institutions } from "@/lib/data";

export default function InstitutionsDirectoryPage() {
  const [sector, setSector] = useState("");
  const [city, setCity] = useState("");

  const cities = useMemo(
    () => Array.from(new Set(institutions.map((i) => i.city))).sort(),
    []
  );

  const list = institutions.filter(
    (i) => (!sector || i.sector === sector) && (!city || i.city === city)
  );

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">Directory</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Registered Institutions</h1>
          <p style={{ maxWidth: 600 }}>
            Every school, university, and corporate partner registered under the national phygital
            deployment framework.
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
              <label>City</label>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">All Cities</option>
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <span className="result-count">
              {list.length} institution{list.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-3">
            {list.length ? (
              list.map((i) => (
                <Link key={i.id} href={`/institutions/directory/${i.id}`} className="card">
                  <div className="card-logo">{i.logo}</div>
                  <span className={`badge ${i.status === "Active" ? "badge-lime" : "badge-completed"}`}>
                    {i.status}
                  </span>
                  <h3>{i.name}</h3>
                  <p className="meta">{i.sector} · {i.city}</p>
                  <p className="desc">{i.description}</p>
                </Link>
              ))
            ) : (
              <div className="empty-state">No institutions match these filters.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
