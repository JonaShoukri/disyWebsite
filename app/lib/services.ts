// The services DiSy offers. Copy lives in the dictionaries (app/i18n/dictionaries) under
// `services.items.<slug>`; this list only holds what is language-independent.
// To add a service: add an entry here and the matching copy in every dictionary.
export const services = [
    { slug: "bilan", accent: "#CEABC1" },
    { slug: "forecasting", accent: "#A8C1CE" },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export function isServiceSlug(value: string | null | undefined): value is ServiceSlug {
    return services.some((s) => s.slug === value);
}
