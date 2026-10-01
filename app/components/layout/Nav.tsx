"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import NavTab from "./NavTab";

// Delays (seconds) before the tabs slide in. On the home page they wait for the logo intro.
const INTRO_DELAYS = { home: { first: 4, second: 4.8 }, other: { first: 0, second: 0.8 } };

export default function Nav() {
    const pathname = usePathname();
    const { t, toggleLocale } = useLanguage();
    // Fixed at first render: navigating later never replays the intro.
    const [delays] = useState(() => (pathname === "/" ? INTRO_DELAYS.home : INTRO_DELAYS.other));
    // After a language switch the new words slide in right away.
    const [switched, setSwitched] = useState(false);
    const first = switched ? 0 : delays.first;
    const second = switched ? 0 : delays.second;

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        // mix-blend-difference keeps the light letters readable over the light sections too.
        <nav className="pointer-events-none fixed inset-0 z-40 mix-blend-difference">
            <NavTab label={t.nav.services} href="/services" active={isActive("/services")} side="left" row="top" delay={first} />
            <NavTab label={t.nav.about} href="/about" active={isActive("/about")} side="left" row="bottom" delay={second} />
            <NavTab
                label={t.nav.switchLanguage}
                ariaLabel={t.nav.switchLanguageAria}
                onClick={() => {
                    setSwitched(true);
                    toggleLocale();
                }}
                side="right"
                row="top"
                delay={second}
                reverse
            />
            <NavTab label={t.nav.partners} href="/partners" active={isActive("/partners")} side="right" row="bottom" delay={first} reverse />
        </nav>
    );
}
