"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Locale } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  /** Looks up a dot-path key, e.g. t("nav.home"). Falls back to the
   *  English string if the Arabic dictionary is missing that key,
   *  and falls back to the key itself if neither has it (so a typo
   *  shows up obviously in the UI instead of silently rendering blank). */
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "phygital-ksa-locale";

function getByPath(obj: unknown, path: string): string | undefined {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj) as string | undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Read persisted preference on mount (client-only; avoids SSR mismatch
  // since we always render "en" first, then swap immediately after hydration).
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "ar") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const toggleLocale = () => setLocale(locale === "en" ? "ar" : "en");

  const t = (path: string): string => {
    const value = getByPath(translations[locale], path) ?? getByPath(translations.en, path);
    return value ?? path;
  };

  return (
    <LanguageContext.Provider
      value={{ locale, dir: locale === "ar" ? "rtl" : "ltr", setLocale, toggleLocale, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider (check app/layout.tsx)");
  }
  return ctx;
}