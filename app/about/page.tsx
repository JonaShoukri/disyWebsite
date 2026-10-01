"use client";
import Link from "next/link";
import PageScroll from "@/app/components/layout/PageScroll";
import AnimatedText from "@/app/components/ui/AnimatedText";
import Overline from "@/app/components/ui/Overline";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import ScrollHint from "@/app/components/ui/ScrollHint";
import Step from "@/app/components/ui/Step";
import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function AboutPage() {
    const { t } = useLanguage();
    const a = t.about;

    return (
        <PageScroll>
            <PageHero overline={a.overline} line1={a.heroLine1} line2={a.heroLine2} text={a.intro}>
                <ScrollHint />
            </PageHero>

            {/* Mission */}
            <section className="page-gutter flex min-h-[70dvh] snap-start items-center py-24">
                <Reveal className="mx-auto max-w-4xl">
                    <Overline>{a.missionTitle}</Overline>
                    <p className="mt-8 text-[clamp(1.5rem,3.5vw,2.75rem)] font-bold leading-snug text-mist">{a.mission}</p>
                </Reveal>
            </section>

            {/* Values */}
            <section className="page-gutter flex min-h-[100dvh] snap-start items-center bg-card/50 py-24 backdrop-blur-sm lg:py-32">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="mb-16 text-center font-display text-3xl text-mist lg:mb-24 lg:text-5xl">
                        <AnimatedText text={a.valuesTitle} /> <AnimatedText text={a.valuesAccent} delay={0.3} className="text-rose" />
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                        {a.values.map((value, i) => (
                            <Step key={value.title} number={i + 1} title={value.title} text={value.text} delay={(i % 2) * 0.15} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Toward the services */}
            <section className="page-gutter flex min-h-[60dvh] snap-start items-center justify-center pb-28 pt-24">
                <div className="text-center">
                    <Reveal className="mb-10 text-lg text-muted">
                        <p>{a.ctaText}</p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <Link
                            href="/services"
                            className="inline-block rounded-xl border border-rose px-10 py-5 text-sm uppercase tracking-wider text-rose transition-colors duration-300 hover:bg-rose hover:text-card sm:px-12"
                        >
                            {t.common.seeServices}
                        </Link>
                    </Reveal>
                </div>
            </section>
        </PageScroll>
    );
}
