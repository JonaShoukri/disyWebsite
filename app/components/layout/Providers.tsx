"use client";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/app/i18n/LanguageProvider";
import type { Locale } from "@/app/i18n/config";

export default function Providers({ locale, children }: { locale: Locale; children: React.ReactNode }) {
    return (
        <LanguageProvider initialLocale={locale}>
            {/* Respects the OS "reduce motion" setting; everyone else gets the full animations. */}
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LanguageProvider>
    );
}
