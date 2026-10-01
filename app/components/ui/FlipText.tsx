"use client";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

/** On hover, each letter rolls up and is replaced by the same letter in the accent color. */
export default function FlipText({ text, accent = "#CEABC1", className = "" }: { text: string; accent?: string; className?: string }) {
    const letters = Array.from(text);
    const roll = (from: string | number, to: string | number) => ({ initial: { y: from }, hovered: { y: to } });

    return (
        <motion.span initial="initial" whileHover="hovered" className={`relative block overflow-hidden whitespace-nowrap ${className}`}>
            <span className="block" aria-hidden>
                {letters.map((letter, i) => (
                    <motion.span key={i} variants={roll(0, "-100%")} transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }} className="inline-block">
                        {letter === " " ? " " : letter}
                    </motion.span>
                ))}
            </span>
            <span className="absolute inset-0" style={{ color: accent }} aria-hidden>
                {letters.map((letter, i) => (
                    <motion.span key={i} variants={roll("100%", 0)} transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }} className="inline-block">
                        {letter === " " ? " " : letter}
                    </motion.span>
                ))}
            </span>
            <span className="sr-only">{text}</span>
        </motion.span>
    );
}
