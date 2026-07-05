"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/institutions", label: "Institutions Hub" },
  { href: "/institutions/directory", label: "Directory" },
  { href: "/players", label: "Players" },
  { href: "/calendar", label: "Calendar" },
  { href: "/results", label: "Hall of Fame" },
  { href: "/rules", label: "Rules" },
  { href: "/news", label: "News" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header id="site-header" className={scrolled ? "scrolled" : ""}>
      <div className="nav-wrap">
        <Link href="/" className="brand">
          <span className="v-mark"></span>Phygital KSA
        </Link>
        <nav id="nav-links" className={`nav-links ${open ? "mobile-open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="lang-toggle" title="Bilingual toggle — decision pending">
            EN / AR
          </div>
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div id="scroll-progress" ref={progressRef}></div>
    </header>
  );
}
