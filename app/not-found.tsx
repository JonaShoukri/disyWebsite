"use client";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function NotFound() {
    const { t } = useLanguage();
    return (
        <div className="page-gutter fixed inset-0 flex flex-col items-center justify-center gap-8 text-center">
            <p className="font-display text-[clamp(4rem,15vw,10rem)] leading-none text-rose">404</p>
            <h1 className="text-2xl text-mist">{t.notFound.title}</h1>
            <Link href="/" className="text-muted underline-offset-4 hover:text-mist hover:underline">
                {t.notFound.back}
            </Link>
        </div>
    );
}
