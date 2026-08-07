import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionary, type Dictionary, type Lang } from "@/content/dictionary";

type I18nValue = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "sluisweb-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "nl" || stored === "en") {
      setLangState(stored);
      return;
    }
    const nav = navigator.language?.toLowerCase() ?? "nl";
    setLangState(nav.startsWith("en") ? "en" : "nl");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const t = dictionary[lang] as unknown as Dictionary;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}