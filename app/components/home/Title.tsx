"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";

function RisingLine({ children, delay }: { children: React.ReactNode; delay: number }) {
    return (
        // The mask (not the moving line) is observed: a line hidden below its mask never "enters" the view.
        <motion.div className="overflow-hidden pb-1" initial="hidden" whileInView="shown" viewport={{ once: true }}>
            <motion.h2
                variants={{ hidden: { y: "115%" }, shown: { y: "0%" } }}
                transition={{ duration: 1.2, ease: "easeOut", delay }}
                className="text-[clamp(1.75rem,5.5vw,3.75rem)] font-extrabold leading-tight lg:whitespace-nowrap"
            >
                {children}
            </motion.h2>
        </motion.div>
    );
}

/** "You do business, we do the Data": each line rises out of a mask. */
export default function Title() {
    const { t } = useLanguage();
    return (
        <div>
            <RisingLine delay={0.3}>{t.home.titleLine1}</RisingLine>
            <RisingLine delay={0.5}>
                {t.home.titleLine2} <span className="font-display font-normal text-rose">{t.home.titleAccent}</span>
            </RisingLine>
        </div>
    );
}
