"use client";
import { motion } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

const offsets: Record<Direction, { x: number; y: number }> = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: -30 },
    down: { x: 0, y: 30 },
};

interface AnimatedTextProps {
    text: string;
    /** Seconds before the first letter appears. */
    delay?: number;
    letterDelay?: number;
    direction?: Direction;
    className?: string;
    style?: React.CSSProperties;
    /** Animate on mount (heroes) instead of when scrolled into view. */
    immediate?: boolean;
}

/** Text that appears letter by letter. Words never break across lines. */
export default function AnimatedText({
    text,
    delay = 0,
    letterDelay = 0.03,
    direction = "up",
    className = "",
    style,
    immediate = false,
}: AnimatedTextProps) {
    const variants = { hidden: { ...offsets[direction], opacity: 0 }, shown: { x: 0, y: 0, opacity: 1 } };
    // The whole text is observed, not each letter: a letter starting outside a clipped parent
    // would otherwise never count as "in view" and stay hidden.
    const trigger = immediate ? { animate: "shown" } : { whileInView: "shown", viewport: { once: true, amount: 0.5 } };

    let index = 0;
    const words = text.split(" ");

    return (
        <motion.span className={className} style={style} aria-label={text} initial="hidden" {...trigger}>
            {words.map((word, w) => (
                <span key={w} aria-hidden>
                    <span className="inline-block whitespace-nowrap">
                        {Array.from(word).map((letter) => {
                            const i = index++;
                            return (
                                <motion.span
                                    key={i}
                                    className="inline-block"
                                    variants={variants}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: delay + i * letterDelay }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </span>
                    {w < words.length - 1 && " "}
                </span>
            ))}
        </motion.span>
    );
}
