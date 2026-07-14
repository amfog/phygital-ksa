"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h4>Phygital KSA</h4>
            <p style={{ color: "#999", fontSize: ".85rem", maxWidth: 320 }}>
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4>{t("footer.compete")}</h4>
            <Link href="/institutions">{t("footer.registerInstitution")}</Link>
            <Link href="/calendar">{t("footer.tournamentCalendar")}</Link>
            <Link href="/results">{t("footer.hallOfFame")}</Link>
          </div>
          <div>
            <h4>{t("footer.explore")}</h4>
            <Link href="/institutions/directory">{t("footer.directory")}</Link>
            <Link href="/players">{t("footer.players")}</Link>
            <Link href="/rules">{t("footer.rulesFormats")}</Link>
          </div>
          <div>
            <h4>{t("footer.connect")}</h4>
            <Link href="/news">{t("footer.news")}</Link>
            <Link href="/partners">{t("footer.partners")}</Link>
            <Link href="/contact">{t("footer.contact")}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Phygital KSA. {t("footer.rights")}</span>
          <span>
            {t("footer.builtBy")}{" "}
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