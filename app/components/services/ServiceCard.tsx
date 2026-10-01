"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedText from "@/app/components/ui/AnimatedText";
import FlipText from "@/app/components/ui/FlipText";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { bookHref } from "@/app/lib/site";
import type { ServiceSlug } from "@/app/lib/services";

interface ServiceCardProps {
    slug: ServiceSlug;
    accent: string;
    index: number;
}

export default function ServiceCard({ slug, accent, index }: ServiceCardProps) {
    const { t } = useLanguage();
    const service = t.services.items[slug];
    const delay = index * 0.15;

    return (
        <motion.article
            className="group relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            style={{ "--accent": accent } as React.CSSProperties}
        >
            {/* Glow */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: `radial-gradient(circle at center, ${accent}40, transparent 70%)` }}
            />

            <div
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/70 p-6 backdrop-blur-md transition-colors duration-300 group-hover:border-[var(--accent)] sm:p-8 lg:p-10"
            >
                {/* Corner accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-10" style={{ background: `linear-gradient(135deg, ${accent}, transparent 70%)` }} />

                <span className="mb-4 text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>
                    {String(index + 1).padStart(2, "0")} · {service.kicker}
                </span>

                <Link href={`/services/${slug}`} className="mb-4 font-display text-[clamp(2.25rem,6vw,3.75rem)] leading-none text-mist">
                    <FlipText text={service.name} accent={accent} />
                </Link>

                <p className="mb-4 text-lg text-mist">
                    <AnimatedText text={service.tagline} delay={delay + 0.2} letterDelay={0.008} direction="left" />
                </p>
                <p className="mb-8 text-sm leading-relaxed text-muted">{service.summary}</p>

                <div className="mb-8 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

                <ul className="mb-10 flex-grow space-y-4">
                    {service.highlights.map((item, i) => (
                        <motion.li
                            key={item}
                            className="flex items-start gap-3 text-sm text-mist/80"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: delay + 0.4 + i * 0.08, duration: 0.4 }}
                        >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                            {item}
                        </motion.li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                        href={`/services/${slug}`}
                        className="flex-1 rounded-xl border border-line px-6 py-4 text-center text-sm uppercase tracking-wider text-mist transition-colors duration-300 hover:border-mist"
                    >
                        {t.common.learnMore}
                    </Link>
                    <Link
                        href={bookHref(slug)}
                        className="flex-1 rounded-xl border border-[var(--accent)] px-6 py-4 text-center text-sm uppercase tracking-wider text-[var(--accent)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-card"
                    >
                        {t.common.bookCall}
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
