"use client";
import PageScroll from "@/app/components/layout/PageScroll";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { ServiceSlug } from "@/app/lib/services";
import { site } from "@/app/lib/site";

/**
 * Where every "book a call" lands. With NEXT_PUBLIC_BOOKING_URL set, the scheduler is embedded;
 * otherwise visitors get the contact email.
 */
export default function BookingPanel({ service }: { service?: ServiceSlug }) {
    const { t } = useLanguage();
    const b = t.book;

    return (
        <PageScroll>
            <PageHero overline={b.overline} line1={b.heroLine1} line2={b.heroLine2} text={b.text}>
                {service && (
                    <p className="mt-8 inline-block rounded-full border border-line px-4 py-2 text-sm text-mist">
                        {b.about} {t.services.items[service].name}
                    </p>
                )}
                {!site.bookingUrl && (
                    <div className="mt-12 space-y-3">
                        {site.contactEmail ? (
                            <>
                                <p className="text-muted">{b.emailPrompt}</p>
                                <a
                                    href={`mailto:${site.contactEmail}${service ? `?subject=${encodeURIComponent(t.services.items[service].name)}` : ""}`}
                                    className="break-all text-[clamp(1.25rem,3vw,2rem)] text-rose underline-offset-8 hover:underline"
                                >
                                    {site.contactEmail}
                                </a>
                            </>
                        ) : (
                            <p className="text-muted">{b.comingSoon}</p>
                        )}
                    </div>
                )}
            </PageHero>

            {site.bookingUrl && (
                <section className="page-gutter snap-start pb-28">
                    <Reveal className="mx-auto max-w-4xl">
                        <iframe
                            src={site.bookingUrl}
                            title={b.calendarTitle}
                            className="h-[min(760px,85dvh)] w-full rounded-2xl border border-line bg-card"
                            loading="lazy"
                        />
                        <div className="mt-4 flex flex-wrap justify-between gap-4 text-sm">
                            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-mist">
                                {b.openExternal} ↗
                            </a>
                            {site.contactEmail && (
                                <a href={`mailto:${site.contactEmail}`} className="text-muted hover:text-mist">
                                    {site.contactEmail}
                                </a>
                            )}
                        </div>
                    </Reveal>
                </section>
            )}
        </PageScroll>
    );
}
