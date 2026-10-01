"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";

// Placeholder until there are partners to show.
export default function PartnersPage() {
    const { t } = useLanguage();
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="page-gutter fixed inset-0 flex flex-col items-center justify-center gap-6 text-center"
        >
            <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-extrabold leading-none text-mist">{t.partners.title}</h1>
            <p className="text-muted">{t.partners.text}</p>
        </motion.div>
    );
}
