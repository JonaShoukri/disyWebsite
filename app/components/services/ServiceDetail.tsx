"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageScroll from "@/app/components/layout/PageScroll";
import AnimatedText from "@/app/components/ui/AnimatedText";
import BookCallButton from "@/app/components/ui/BookCallButton";
import Overline from "@/app/components/ui/Overline";
import PageHero from "@/app/components/ui/PageHero";
import Reveal from "@/app/components/ui/Reveal";
import Step from "@/app/components/ui/Step";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { services, type ServiceSlug } from "@/app/lib/services";

export default function ServiceDetail({ slug }: { slug: ServiceSlug }) {
    const { t } = useLanguage();
    const labels = t.services.labels;
    const service = t.services.items[slug];
    const accent = services.find((s) => s.slug === slug)!.accent;
    const others = services.filter((s) => s.slug !== slug);

    return (
        <PageScroll>
            <PageHero overline={service.kicker} line1={service.name} text={service.tagline} accent={accent}>
                <div className="mt-12 flex flex-col items-center gap-6">
                    <BookCallButton service={slug} />
                    <Link href="/services" className="text-sm text-muted underline-offset-4 hover:text-mist hover:underline">
                        ← {t.common.allServices}
                    </Link>
                </div>
            </PageHero>

            {/* Problem and audience */}
            <section className="page-gutter snap-start py-24">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal>
                        <Overline color={accent}>{labels.problem}</Overline>
                        <p className="mt-6 text-lg leading-relaxed text-mist lg:text-xl">{service.problem}</p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <Overline color={accent}>{labels.forWho}</Overline>
                        <p className="mt-6 text-lg leading-relaxed text-muted">{service.forWho}</p>
                        {service.useCases && (
                            <>
                                <div className="mt-10">
                                    <Overline color={accent}>{labels.useCases}</Overline>
                                </div>
                                <ul className="mt-6 flex flex-wrap gap-3">
                                    {service.useCases.map((useCase) => (
                                        <li key={useCase} className="rounded-full border border-line px-4 py-2 text-sm text-mist">
                                            {useCase}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </Reveal>
                </div>
            </section>

            {/* Deliverables */}
            <section className="page-gutter snap-start py-24">
                <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-card/70 p-6 backdrop-blur-md sm:p-10 lg:p-14">
                    <h2 className="mb-10 font-display text-3xl text-mist lg:text-5xl">
                        <AnimatedText text={labels.deliverables} direction="left" />
                    </h2>
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {service.deliverables.map((item, i) => (
                            <motion.li
                                key={item}
                                className="flex items-start gap-3 text-mist/90"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                            >
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                    {service.funding && (
                        <Reveal className="mt-12 border-l-2 pl-6" style={{ borderColor: accent }}>
                            <Overline color={accent}>{labels.funding}</Overline>
                            <p className="mt-3 max-w-3xl text-muted">{service.funding}</p>
                        </Reveal>
                    )}
                </div>
            </section>

            {/* Process */}
            <section className="page-gutter snap-start py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-center font-display text-3xl text-mist lg:mb-24 lg:text-5xl">
                        <AnimatedText text={labels.steps} />
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {service.steps.map((step, i) => (
                            <Step key={step.title} number={i + 1} title={step.title} text={step.text} delay={i * 0.15} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to action, then the other service */}
            <section className="page-gutter flex min-h-[70dvh] snap-start items-center justify-center pb-28 pt-24">
                <div className="mx-auto max-w-4xl text-center">
                    <Reveal className="mb-12 text-lg text-muted">
                        <p>{t.services.ctaText}</p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <BookCallButton service={slug} />
                    </Reveal>
                    <Reveal delay={0.4} className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                        {others.map((other) => (
                            <Link key={other.slug} href={`/services/${other.slug}`} className="text-muted transition-colors hover:text-mist">
                                {t.services.items[other.slug].name} →
                            </Link>
                        ))}
                    </Reveal>
                </div>
            </section>
        </PageScroll>
    );
}
