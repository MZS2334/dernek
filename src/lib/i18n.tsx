"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { translations, Lang, TranslationKey } from "@/lib/translations";

export type BilingualField = { tr: string; en?: string };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  tt: (field: BilingualField) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "tr" || stored === "en") {
      setLangState(stored);
    } else {
      const browserLang =
        navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || "tr";
      setLangState(browserLang.startsWith("tr") ? "tr" : "en");
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const parts = key.split(".");
      let current: unknown = translations;
      for (const part of parts) {
        if (current && typeof current === "object" && part in current) {
          current = (current as Record<string, unknown>)[part];
        } else {
          return key;
        }
      }
      if (current && typeof current === "object" && "tr" in current && "en" in current) {
        return (current as Record<Lang, string>)[lang];
      }
      return key;
    },
    [lang]
  );

  const tt = useCallback(
    (field: BilingualField) => (lang === "en" && field.en) ? field.en : field.tr,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tt }}>
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
