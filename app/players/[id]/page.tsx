import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhygitalData } from "@/services/phygital";

export async function generateStaticParams() {
  const { players } = await getPhygitalData();
  return players.map((p) => ({ id: p.id }));
}

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { players, institutions } = await getPhygitalData();
  const p = players.find((pl) => pl.id === id);
  if (!p) notFound();

  const inst = institutions.find((i) => i.id === p.institutionId) ?? null;

  return (
    <>
      <section className="profile-head">
        <div className="container" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          <div
            className="profile-photo"
            style={p.photoUrl ? { backgroundImage: `url(${p.photoUrl})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
          >
            {!p.photoUrl && p.photo}
          </div>
          <div>
            <span className="badge badge-lime">{p.sector}</span>
            <h1 style={{ marginTop: 8, fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>{p.name}</h1>
            <p style={{ color: "#ccc" }}>
              {p.discipline} {inst ? `· ${inst.name}` : ""}
            </p>
            <div className="stat-strip">
              <div><div className="n">{p.stats.matches}</div><div className="l">Matches</div></div>
              <div><div className="n">{p.stats.wins}</div><div className="l">Wins</div></div>
              <div><div className="n">{p.stats.placements || "—"}</div><div className="l">Placements</div></div>
            </div>
            {Object.keys(p.social || {}).length > 0 && (
              <div style={{ marginTop: 20 }}>
                {Object.entries(p.social).map(([k, v]) => (
                  <a
                    key={k}
                    href={v}
                    style={{
                      display: "inline-block",
                      marginRight: 14,
                      textTransform: "capitalize",
                      color: "var(--accent-blue)",
                    }}
                  >
                    {k}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Achievements</span>
          <h2>Badges &amp; Highlights</h2>
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            {p.achievements.length ? (
              p.achievements.map((a) => (
                <div className="card" key={a}>
                  <span className="badge badge-lime">Achievement</span>
                  <h3 style={{ fontSize: "1rem" }}>{a}</h3>
                </div>
              ))
            ) : (
              <p className="desc">No achievements logged yet.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <span className="section-tag">Institution</span>
          <h2>Represents</h2>
          {inst ? (
            <Link href={`/institutions/directory/${inst.id}`} className="card" style={{ maxWidth: 420 }}>
              <div
                className="card-logo"
                style={inst.logoUrl ? { backgroundImage: `url(${inst.logoUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" } : undefined}
              >
                {!inst.logoUrl && inst.logo}
              </div>
              <h3>{inst.name}</h3>
              <p className="meta">{inst.sector} · {inst.city}</p>
            </Link>
          ) : (
            <p className="desc">No institution on file.</p>
          )}
        </div>
      </section>
    </>
  );
}
