import type { Locale } from "../config";
import { en } from "./en";
import { fr } from "./fr";

export type { Dictionary } from "./fr";

export const dictionaries = { fr, en } as const;

export function getDictionary(locale: Locale) {
    return dictionaries[locale];
}
