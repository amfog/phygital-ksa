import Link from "next/link";

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h4>Phygital KSA</h4>
            <p style={{ color: "#999", fontSize: ".85rem", maxWidth: 320 }}>
              The national hub for phygital competition in Saudi Arabia — hosting the SEF Arena
              tournament with Al-Ittihad Al-Saudi and aligned with Phygital International.
            </p>
          </div>
          <div>
            <h4>Compete</h4>
            <Link href="/institutions">Register Institution</Link>
            <Link href="/calendar">Tournament Calendar</Link>
            <Link href="/results">Hall of Fame</Link>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/institutions/directory">Directory</Link>
            <Link href="/players">Players</Link>
            <Link href="/rules">Rules & Formats</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <Link href="/news">News</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Phygital KSA. All rights reserved.</span>
          <span>
            Built by{" "}
            <a
              href="https://project-jelc4.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-purple)", display: "inline", margin: 0, fontWeight: 600 }}
            >
              Nexaro.tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
