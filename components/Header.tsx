"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/map", key: "map" },
  { href: "/about", key: "about" },
  { href: "/team", key: "team" },
  { href: "/institutions", key: "institutionsHub" },
  { href: "/institutions/directory", key: "directory" },
  { href: "/players", key: "players" },
  { href: "/calendar", key: "calendar" },
  { href: "/results", key: "hallOfFame" },
  { href: "/rules", key: "rules" },
  { href: "/news", key: "news" },
  { href: "/partners", key: "partners" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useTranslation();
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
              {t(`nav.${l.key}`)}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            className="lang-toggle"
            onClick={toggleLocale}
            style={{ cursor: "pointer", background: "none" }}
            aria-label="Switch language"
          >
            {locale === "en" ? "EN / AR" : "AR / EN"}
          </button>
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