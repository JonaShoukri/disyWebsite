"use client";
import PageScroll from "@/app/components/layout/PageScroll";
import ServiceCard from "@/app/components/services/ServiceCard";
import AnimatedText from "@/app/components/ui/AnimatedText";
import BookCallButton from "@/app/components/ui/BookCallButton";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import ScrollHint from "@/app/components/ui/ScrollHint";
import Step from "@/app/components/ui/Step";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { services } from "@/app/lib/services";

export default function ServicesPage() {
    const { t } = useLanguage();
    const s = t.services;

    return (
        <PageScroll>
            <PageHero overline={s.overline} line1={s.heroLine1} line2={s.heroLine2} text={s.heroText}>
                <ScrollHint />
            </PageHero>

            {/* The services */}
            <section className="page-gutter relative flex min-h-[100dvh] snap-start items-center py-24 lg:py-32">
                <div className="mx-auto w-full max-w-6xl">
                    <Reveal className="mb-12 lg:mb-16">
                        <h2 className="mb-4 font-display text-3xl text-mist lg:text-5xl">
                            <AnimatedText text={s.listTitle} direction="left" />
                        </h2>
                        <p className="max-w-xl text-subtle">{s.listText}</p>
                    </Reveal>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.slug} slug={service.slug} accent={service.accent} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How the two services work together */}
            <section className="page-gutter relative flex min-h-[100dvh] snap-start items-center bg-card/50 py-24 backdrop-blur-sm lg:py-32">
                <div className="mx-auto w-full max-w-6xl">
                    <Reveal className="mb-16 text-center lg:mb-24">
                        <h2 className="mb-4 font-display text-3xl text-mist lg:text-5xl">
                            <AnimatedText text={s.loopTitle} />{" "}
                            <AnimatedText text={s.loopAccent} delay={0.3} className="text-rose" />
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted">{s.loopText}</p>
                    </Reveal>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {s.loop.map((step, i) => (
                            <Step key={step.title} number={i + 1} title={step.title} text={step.text} delay={i * 0.15} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Book a call */}
            <section className="page-gutter relative flex min-h-[100dvh] snap-start items-center justify-center pb-28 pt-24">
                <div className="mx-auto max-w-4xl text-center">
                    <Reveal rise={40} className="mb-8 font-display text-4xl text-mist lg:text-6xl">
                        <h2>
                            {s.ctaTitle} <span className="text-rose">{s.ctaAccent}</span>
                            {s.ctaTitleEnd}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="mx-auto mb-12 max-w-xl text-lg text-muted">
                        <p>{s.ctaText}</p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <BookCallButton />
                    </Reveal>
                </div>
            </section>
        </PageScroll>
    );
}
