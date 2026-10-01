"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavTabProps {
    label: string;
    side: "left" | "right";
    row: "top" | "bottom";
    /** Seconds before the first letter slides in. */
    delay: number;
    href?: string;
    onClick?: () => void;
    ariaLabel?: string;
    active?: boolean;
    /** Animate letters from the last to the first (used on the right-hand tabs). */
    reverse?: boolean;
}

const LETTER_STAGGER = 0.1;

const sideClasses = {
    left: "left-0 pl-4 sm:pl-5",
    right: "right-0 pr-4 sm:pr-5",
};
const rowClasses = {
    top: "top-1/4",
    bottom: "top-3/4",
};

/** A navigation word written vertically, one letter per line, pinned to the edge of the screen. */
export default function NavTab({ label, side, row, delay, href, onClick, ariaLabel, active = false, reverse = false }: NavTabProps) {
    const [isHovered, setIsHovered] = useState(false);
    const letters = Array.from(label);
    const isLeft = side === "left";
    const highlighted = isHovered || active;

    const letterDelay = (index: number) => delay + (reverse ? letters.length - 1 - index : index) * LETTER_STAGGER;

    const className = `pointer-events-auto absolute ${sideClasses[side]} ${rowClasses[row]} -translate-y-1/2 flex flex-col items-center text-base leading-snug lg:text-2xl short:text-xs short:leading-tight`;

    const content = letters.map((letter, index) => (
        <motion.span
            key={`${label}-${index}`}
            aria-hidden
            initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
            animate={{
                x: isHovered ? (isLeft ? 8 : -8) : 0,
                opacity: 1,
                color: highlighted ? "#CEABC1" : "#EAEAEC",
            }}
            transition={{
                x: { duration: isHovered ? 0.1 : 1, ease: "easeInOut", delay: isHovered ? 0 : letterDelay(index) },
                opacity: { duration: 1, ease: "easeInOut", delay: letterDelay(index) },
                color: { duration: 0.1, ease: "easeInOut" },
            }}
        >
            {letter === " " ? " " : letter}
        </motion.span>
    ));

    const shared = {
        className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        "aria-label": ariaLabel ?? label,
    };

    if (href) {
        return (
            <Link href={href} aria-current={active ? "page" : undefined} {...shared}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} {...shared}>
            {content}
        </button>
    );
}
