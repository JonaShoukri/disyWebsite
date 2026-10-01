"use client";
import AnimatedText from "./AnimatedText";
import Overline from "./Overline";
import Reveal from "./Reveal";

interface PageHeroProps {
    overline: string;
    line1: string;
    line2?: string;
    text?: string;
    accent?: string;
    children?: React.ReactNode;
}

/** Full-screen page opener: small overline, two-line animated headline, optional text below. */
export default function PageHero({ overline, line1, line2, text, accent = "#CEABC1", children }: PageHeroProps) {
    // Letters of the second line start once the first line is mostly in.
    const line2Delay = 0.2 + Math.min(line1.length, 12) * 0.04;
    const textDelay = (line2 ? line2Delay : 0.2) + 0.6;

    return (
        <section className="page-gutter relative flex min-h-[100dvh] snap-start items-center justify-center py-24">
            <div className="mx-auto max-w-6xl text-center">
                <Reveal immediate className="mb-6">
                    <Overline color={accent}>{overline}</Overline>
                </Reveal>
                <h1 className="mb-8 font-display text-[clamp(2rem,8vw,6rem)] leading-[0.95]">
                    <AnimatedText text={line1} delay={0.2} letterDelay={0.04} className="block text-mist" immediate />
                    {line2 && <AnimatedText text={line2} delay={line2Delay} letterDelay={0.04} className="mt-2 block" style={{ color: accent }} immediate />}
                </h1>
                {text && (
                    <Reveal immediate delay={textDelay} className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
                        <p>{text}</p>
                    </Reveal>
                )}
                {children && (
                    <Reveal immediate delay={textDelay + 0.3}>
                        {children}
                    </Reveal>
                )}
            </div>
        </section>
    );
}
