import Link from "next/link";
import { notFound } from "next/navigation";
import { tournamentsOf, statusBadgeClass, fmtDate } from "@/lib/data";
import { getPhygitalData } from "@/services/phygital";

export async function generateStaticParams() {
  const { institutions } = await getPhygitalData();
  return institutions.map((i) => ({ id: i.id }));
}

export default async function InstitutionProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { institutions, players } = await getPhygitalData();
  const inst = institutions.find((i) => i.id === id);
  if (!inst) notFound();

  const roster = players.filter((p) => p.institutionId === inst.id);
  const trns = tournamentsOf(inst.id);

  return (
    <>
      <section className="profile-head">
        <div className="container" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          <div
            className="profile-photo"
            style={inst.logoUrl ? { backgroundImage: `url(${inst.logoUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" } : undefined}
          >
            {!inst.logoUrl && inst.logo}
          </div>
          <div>
            <span className={`badge ${inst.status === "Active" ? "badge-lime" : "badge-completed"}`}>
              {inst.status}
            </span>
            <h1 style={{ marginTop: 8, fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>{inst.name}</h1>
            <p style={{ color: "#ccc" }}>{inst.sector} · {inst.city}</p>
            <p style={{ maxWidth: 520, color: "#ddd" }}>{inst.description}</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Roster</span>
          <h2>Registered Players</h2>
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            {roster.length ? (
              roster.map((p) => (
                <Link key={p.id} href={`/players/${p.id}`} className="card">
                  <div
                    className="card-photo"
                    style={p.photoUrl ? { backgroundImage: `url(${p.photoUrl})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
                  >
                    {!p.photoUrl && p.photo}
                  </div>
                  <h3>{p.name}</h3>
                  <p className="meta">{p.discipline}</p>
                </Link>
              ))
            ) : (
              <p className="desc">No players registered yet.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <span className="section-tag">Competition</span>
          <h2>Tournaments</h2>
          <div className="grid grid-3" style={{ marginTop: 20 }}>
            {trns.length ? (
              trns.map((t) => (
                <Link key={t.id} href={`/tournaments/${t.id}`} className="card">
                  <span className={`badge ${statusBadgeClass(t.status)}`}>{t.status}</span>
                  <h3>{t.name}</h3>
                  <p className="meta">{t.discipline} · {fmtDate(t.dateStart)}</p>
                </Link>
              ))
            ) : (
              <p className="desc">No tournaments yet for this institution.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <span className="section-tag">Contact</span>
          <h2>Institution Contact</h2>
          <div className="card" style={{ maxWidth: 420 }}>
            <p className="desc"><strong>{inst.contact.name}</strong></p>
            <p className="desc">{inst.contact.email}</p>
            <p className="desc">{inst.contact.phone}</p>
          </div>
        </div>
      </section>
    </>
  );
}
