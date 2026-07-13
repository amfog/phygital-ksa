import Image from "next/image";

export interface Sponsor {
  name: string;
  logoSrc?: string;
}

/**
 * Infinite-scrolling sponsor strip with an animated cross-fading background
 * (uses public/images/abstract-crossbeams.png + pattern-diagonal.png).
 *
 * Ready to receive real logos: pass a `sponsors` array with `logoSrc` set
 * once real images exist — anything without `logoSrc` renders as a dashed
 * placeholder slot instead, so this can ship now and fill in gradually.
 *
 * Track is duplicated once in the DOM so the -50% scroll animation loops
 * seamlessly — don't remove the duplication when editing.
 */
export default function SponsorMarquee({
  sponsors = [],
  label = "Partners & Sponsors",
  placeholderCount = 8,
}: {
  sponsors?: Sponsor[];
  label?: string;
  placeholderCount?: number;
}) {
  const items: Sponsor[] =
    sponsors.length > 0
      ? sponsors
      : Array.from({ length: placeholderCount }, (_, i) => ({ name: `Sponsor ${i + 1}` }));

  const track = [...items, ...items]; // duplicated for seamless loop

  return (
    <section className="marquee-section">
      <div className="marquee-bg marquee-bg--a" />
      <div className="marquee-bg marquee-bg--b" />
      <div className="marquee-bg-overlay" />
      <div className="container">
        <p className="marquee-label">{label}</p>
        <div className="marquee-track-wrap">
          <div className="marquee-track">
            {track.map((s, i) =>
              s.logoSrc ? (
                <div key={`${s.name}-${i}`} className="marquee-slot" style={{ border: "none", background: "none" }}>
                  <Image src={s.logoSrc} alt={s.name} width={120} height={48} style={{ objectFit: "contain", width: "auto", height: "100%" }} />
                </div>
              ) : (
                <div key={`${s.name}-${i}`} className="marquee-slot">
                  {s.name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}