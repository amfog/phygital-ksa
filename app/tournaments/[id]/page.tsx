import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getTournament,
  getInstitution,
  getWinnerName,
  statusBadgeClass,
  fmtDate,
  tournaments,
} from "@/lib/data";

export function generateStaticParams() {
  return tournaments.map((t) => ({ id: t.id }));
}

export default async function TournamentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getTournament(id);
  if (!t) notFound();

  const participants = t.institutionIds.map(getInstitution).filter(Boolean);

  return (
    <>
      <section className="profile-head">
        <div className="container">
          <span className={`badge ${statusBadgeClass(t.status)}`}>{t.status}</span>
          <h1 style={{ marginTop: 8, fontSize: "clamp(1.8rem,4.5vw,3rem)" }}>{t.name}</h1>
          <p style={{ color: "#ccc" }}>{t.discipline} · {t.sector} · {t.venue}</p>
          <div className="stat-strip">
            <div><div className="n">{fmtDate(t.dateStart)}</div><div className="l">Start</div></div>
            <div><div className="n">{fmtDate(t.dateEnd)}</div><div className="l">End</div></div>
            <div><div className="n">{participants.length}</div><div className="l">Institutions</div></div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Overview</span>
          <h2>About This Tournament</h2>
          <p style={{ maxWidth: 640 }}>{t.description}</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <span className="section-tag">Field</span>
          <h2>Participating Institutions</h2>
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            {participants.length ? (
              participants.map((i) =>
                i ? (
                  <Link key={i.id} href={`/institutions/directory/${i.id}`} className="card">
                    <div className="card-logo">{i.logo}</div>
                    <h3>{i.name}</h3>
                    <p className="meta">{i.sector} · {i.city}</p>
                  </Link>
                ) : null
              )
            ) : (
              <p className="desc">No institutions confirmed yet.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Standings</span>
          <h2>Bracket / Standings</h2>
          <div className="placeholder-note">
            [PLACEHOLDER — standings and bracket are updated manually until live scoring
            integration is connected.]
          </div>
        </div>
      </section>

      <section className="section section--black">
        <div className="container">
          <span className="section-tag">Result</span>
          <h2>Winner</h2>
          {t.winnerId ? (
            <div className="card" style={{ maxWidth: 420, background: "#141414", borderColor: "#2a2a2a" }}>
              <span className="badge badge-lime">Winner</span>
              <h3 style={{ color: "#fff" }}>{getWinnerName(t.winnerId, t.winnerType)}</h3>
            </div>
          ) : (
            <p style={{ color: "#ccc" }}>To be decided.</p>
          )}
        </div>
      </section>
    </>
  );
}
