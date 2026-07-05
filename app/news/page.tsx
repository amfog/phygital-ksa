"use client";

import { useState } from "react";
import Link from "next/link";
import { news, fmtDate } from "@/lib/data";

export default function NewsPage() {
  const [tag, setTag] = useState("");

  const list = news
    .filter((n) => !tag || n.tag === tag)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">News</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>News &amp; Announcements</h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <label>Tag</label>
              <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="">All Tags</option>
                <option>Result</option>
                <option>Announcement</option>
                <option>Partnership</option>
                <option>Creator Content</option>
              </select>
            </div>
            <span className="result-count">
              {list.length} article{list.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-3">
            {list.length ? (
              list.map((n) => (
                <Link key={n.id} href={`/news/${n.id}`} className="card">
                  <div className="card-photo">{n.cover}</div>
                  <span className="badge badge-lime">{n.tag}</span>
                  <h3>{n.title}</h3>
                  <p className="meta">{fmtDate(n.date)}</p>
                </Link>
              ))
            ) : (
              <div className="empty-state">No articles match this tag.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
