import Link from "next/link";
import { notFound } from "next/navigation";
import { news, getTournament, fmtDate } from "@/lib/data";

export function generateStaticParams() {
  return news.map((n) => ({ id: n.id }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const n = news.find((a) => a.id === id);
  if (!n) notFound();

  const t = n.tournamentId ? getTournament(n.tournamentId) : null;

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56 }}>
        <div className="container">
          <span className="badge badge-lime">{n.tag}</span>
          <h1 style={{ marginTop: 12, fontSize: "clamp(1.8rem,4.5vw,3rem)" }}>{n.title}</h1>
          <p style={{ color: "#999" }}>{fmtDate(n.date)}</p>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <div className="card-photo" style={{ maxWidth: 640, aspectRatio: "16/9", marginBottom: 28 }}>
            {n.cover}
          </div>
          <p style={{ maxWidth: 640, fontSize: "1.02rem" }}>{n.body}</p>
          {t && (
            <Link href={`/tournaments/${t.id}`} className="btn btn-outline">
              Related Tournament: {t.name}
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
