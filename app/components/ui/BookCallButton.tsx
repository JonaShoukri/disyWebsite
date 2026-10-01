"use client";
import Link from "next/link";
import { bookHref } from "@/app/lib/site";
import { useLanguage } from "@/app/i18n/LanguageProvider";

/** The main call to action: every "book a call" on the site goes through the /book page. */
export default function BookCallButton({ service, label, className = "" }: { service?: string; label?: string; className?: string }) {
    const { t } = useLanguage();
    return (
        <Link
            href={bookHref(service)}
            className={`inline-block rounded-xl border border-rose px-10 py-5 text-center text-sm uppercase tracking-wider text-rose transition-colors duration-300 hover:bg-rose hover:text-card active:scale-[0.98] sm:px-12 ${className}`}
        >
            {label ?? t.common.bookCall}
        </Link>
    );
}
