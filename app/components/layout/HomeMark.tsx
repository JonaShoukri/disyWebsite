"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/i18n/LanguageProvider";

/** The small DiSy logo at the bottom of every page except home, linking back to it. */
export default function HomeMark() {
    const pathname = usePathname();
    const { t } = useLanguage();
    if (pathname === "/") return null;

    return (
        <div className="fixed bottom-3 left-1/2 z-40 -translate-x-1/2">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
            <Link href="/" aria-label={t.nav.home} className="group flex flex-col font-display text-2xl leading-none sm:text-3xl">
                <span className="text-mist transition-colors duration-500 group-hover:text-rose">Di</span>
                <span className="-mt-2 ml-[0.6em] text-rose transition-colors duration-500 group-hover:text-mist">Sy</span>
            </Link>
        </motion.div>
        </div>
    );
}
