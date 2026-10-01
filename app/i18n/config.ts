export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

// French first (Loi 96); English visitors are detected from their browser on the first visit.
export const defaultLocale: Locale = "fr";
export const localeCookie = "disy-locale";

export function isLocale(value: string | null | undefined): value is Locale {
    return locales.includes(value as Locale);
}
