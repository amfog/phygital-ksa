import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <span className="section-tag eyebrow">404</span>
        <h1 style={{ fontSize: "clamp(2rem,6vw,3.5rem)" }}>Page Not Found</h1>
        <p style={{ maxWidth: 480 }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">Back to Home</Link>
          <Link href="/calendar" className="btn btn-outline">View Calendar</Link>
        </div>
      </div>
    </section>
  );
}
