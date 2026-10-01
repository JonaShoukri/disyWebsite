"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { localeCookie, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";

interface LanguageContextValue {
    locale: Locale;
    t: Dictionary;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ initialLocale, children }: { initialLocale: Locale; children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(initialLocale);

    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = getDictionary(locale).meta.title;
    }, [locale]);

    const setLocale = useCallback((next: Locale) => {
        document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
        setLocaleState(next);
    }, []);

    const value = useMemo<LanguageContextValue>(
        () => ({
            locale,
            t: getDictionary(locale),
            setLocale,
            toggleLocale: () => setLocale(locale === "fr" ? "en" : "fr"),
        }),
        [locale, setLocale],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
    return ctx;
}
