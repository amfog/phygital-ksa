import type { Metadata } from "next";
import { getPhygitalData } from "@/services/phygital";

export const metadata: Metadata = { title: "Partners — Phygital KSA" };

export default async function PartnersPage() {
  const { partners } = await getPhygitalData();
  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">Partners</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>
            Federation, International Bodies &amp; Sponsors
          </h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid-4">
            {partners.map((p) => (
              <a key={p.id} href={p.link} className="card" style={{ textAlign: "center", alignItems: "center" }}>
                <div
                  className="card-logo"
                  style={{
                    width: "100%",
                    ...(p.logoUrl
                      ? { backgroundImage: `url(${p.logoUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }
                      : {}),
                  }}
                >
                  {!p.logoUrl && p.logo}
                </div>
                <h3 style={{ fontSize: "1rem" }}>{p.name}</h3>
                <p className="meta">{p.tier}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
