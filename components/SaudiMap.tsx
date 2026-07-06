"use client";

import { useState } from "react";
import Link from "next/link";
import { MAP_VIEWBOX, REGION_SHAPES } from "@/lib/region-shapes";
import { regions, institutionsInRegion, playersInRegion } from "@/lib/data";

const STATUS_FILL: Record<string, string> = {
  Active: "url(#regionGradient)",
  Onboarding: "#4E6BFF",
  "Not Yet Deployed": "#2a2d4a",
};

export default function SaudiMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedRegion = regions.find((r) => r.name === selected);
  const selectedInstitutions = selected ? institutionsInRegion(selected) : [];
  const selectedPlayers = selected ? playersInRegion(selected) : [];

  return (
    <div style={{ position: "relative" }}>
      <div className="grid grid-2" style={{ gap: 32, alignItems: "flex-start" }}>
        <div style={{ position: "relative" }}>
          <svg
            viewBox={MAP_VIEWBOX}
            style={{ width: "100%", height: "auto", background: "var(--black)" }}
          >
            <defs>
              <linearGradient id="regionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-blue)" />
                <stop offset="100%" stopColor="var(--accent-purple)" />
              </linearGradient>
            </defs>
            {REGION_SHAPES.map((shape) => {
              const info = regions.find((r) => r.name === shape.name);
              const status = info?.status ?? "Not Yet Deployed";
              const isHovered = hovered === shape.name;
              const isSelected = selected === shape.name;
              return (
                <path
                  key={shape.name}
                  d={shape.d}
                  fill={STATUS_FILL[status]}
                  fillOpacity={isHovered || isSelected ? 1 : status === "Not Yet Deployed" ? 0.5 : 0.75}
                  stroke={isSelected ? "var(--white)" : "#0A0B1F"}
                  strokeWidth={isSelected ? 2.5 : 1.2}
                  style={{
                    cursor: "pointer",
                    transition: "fill-opacity .2s ease, stroke .2s ease, transform .2s ease",
                    transformOrigin: `${shape.cx}px ${shape.cy}px`,
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                  }}
                  onMouseEnter={() => setHovered(shape.name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(shape.name)}
                />
              );
            })}
            {REGION_SHAPES.map((shape) => (
              <text
                key={shape.name + "-label"}
                x={shape.cx}
                y={shape.cy}
                fontSize="11"
                textAnchor="middle"
                fill="#e6e6f2"
                fontFamily="var(--font-head)"
                letterSpacing=".02em"
                style={{ pointerEvents: "none", textTransform: "uppercase" }}
              >
                {shape.name}
              </text>
            ))}
          </svg>

          <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".78rem", color: "var(--gray-mid)" }}>
              <span style={{ width: 12, height: 12, background: "var(--gradient)", display: "inline-block" }} /> Active
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".78rem", color: "var(--gray-mid)" }}>
              <span style={{ width: 12, height: 12, background: "var(--accent-blue)", display: "inline-block" }} /> Onboarding
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".78rem", color: "var(--gray-mid)" }}>
              <span style={{ width: 12, height: 12, background: "#2a2d4a", display: "inline-block" }} /> Not Yet Deployed
            </span>
          </div>
        </div>

        <div>
          {selectedRegion ? (
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div
                style={{
                  background: "var(--gradient)",
                  padding: "28px 24px",
                  color: "var(--white)",
                }}
              >
                <span
                  className="badge"
                  style={{ background: "rgba(255,255,255,.2)", borderColor: "transparent", color: "#fff" }}
                >
                  Region
                </span>
                <h3 style={{ fontSize: "1.8rem", marginTop: 10, color: "#fff" }}>{selectedRegion.name}</h3>
                <p style={{ color: "rgba(255,255,255,.85)", margin: 0 }}>{selectedRegion.nameAr}</p>
              </div>
              <div style={{ padding: 24 }}>
                <span
                  className={`badge ${
                    selectedRegion.status === "Active"
                      ? "badge-lime"
                      : selectedRegion.status === "Onboarding"
                      ? "badge-ongoing"
                      : "badge-completed"
                  }`}
                >
                  {selectedRegion.status}
                </span>
                <div className="stat-strip" style={{ marginTop: 16, borderTop: "none", paddingTop: 0 }}>
                  <div>
                    <div className="n" style={{ color: "var(--black)", background: "none", WebkitTextFillColor: "initial" }}>
                      {selectedInstitutions.length}
                    </div>
                    <div className="l" style={{ color: "var(--gray-mid)" }}>Institutions</div>
                  </div>
                  <div>
                    <div className="n" style={{ color: "var(--black)", background: "none", WebkitTextFillColor: "initial" }}>
                      {selectedPlayers.length}
                    </div>
                    <div className="l" style={{ color: "var(--gray-mid)" }}>Players</div>
                  </div>
                  <div>
                    <div className="n" style={{ color: "var(--black)", background: "none", WebkitTextFillColor: "initial" }}>
                      {selectedRegion.capital}
                    </div>
                    <div className="l" style={{ color: "var(--gray-mid)" }}>Capital</div>
                  </div>
                </div>

                <div style={{ marginTop: 20 }}>
                  {selectedInstitutions.length ? (
                    selectedInstitutions.map((i) => (
                      <Link
                        key={i.id}
                        href={`/institutions/directory/${i.id}`}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "12px 0",
                          borderBottom: "1px solid var(--gray-line)",
                        }}
                      >
                        <span style={{ fontFamily: "var(--font-head)", fontSize: ".9rem" }}>{i.name}</span>
                        <span style={{ color: "var(--accent-blue)", fontSize: ".8rem" }}>View →</span>
                      </Link>
                    ))
                  ) : (
                    <p className="desc" style={{ marginTop: 8 }}>
                      No institutions registered here yet — this region is part of the national
                      rollout roadmap. [PLACEHOLDER — onboarding timeline pending]
                    </p>
                  )}
                </div>

                {selectedRegion.status !== "Active" && (
                  <Link href="/institutions" className="btn btn-primary" style={{ marginTop: 12 }}>
                    Register an Institution Here
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="card" style={{ minHeight: 260, justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <p className="desc" style={{ marginBottom: 0 }}>
                Hover or click a region on the map to see its deployment status, registered
                institutions, and players.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}