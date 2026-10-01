import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale, localeCookie, type Locale } from "./config";

/** The visitor's language: their saved choice, else their browser language, else French. */
export async function getLocale(): Promise<Locale> {
    const saved = (await cookies()).get(localeCookie)?.value;
    if (isLocale(saved)) return saved;

    const accept = (await headers()).get("accept-language") ?? "";
    const preferred = accept.split(",")[0]?.trim().slice(0, 2).toLowerCase();
    return isLocale(preferred) ? preferred : defaultLocale;
}
