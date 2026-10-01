"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedLogo from "@/app/components/home/AnimatedLogo";
import Title from "@/app/components/home/Title";
import PageScroll from "@/app/components/layout/PageScroll";
import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function Home() {
    const { t } = useLanguage();

    return (
        <PageScroll snap="mandatory">
            {/* Launch screen: the logo intro */}
            <section className="flex h-[100dvh] snap-start snap-always items-center justify-center">
                <AnimatedLogo />
            </section>

            {/* Who we are, then off to the services */}
            <section className="relative flex min-h-[100dvh] snap-start snap-always flex-col bg-mist text-ink">
                <div className="page-gutter mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-10 py-20 lg:gap-20">
                    <Title />
                    <p className="max-w-xl text-base leading-relaxed sm:text-lg lg:ml-auto lg:w-1/2">{t.home.intro}</p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/services"
                        className="block w-full bg-rose p-4 text-center text-[clamp(1rem,2vw,2rem)] font-extrabold uppercase text-mist transition-colors duration-300 hover:bg-ink hover:text-rose"
                    >
                        {t.home.cta}
                    </Link>
                </motion.div>
            </section>
        </PageScroll>
    );
}
