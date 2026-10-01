"use client";
import { motion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
    delay?: number;
    /** Distance (px) the block rises from. */
    rise?: number;
    immediate?: boolean;
}

/** Fades and lifts its content into place when it scrolls into view (or on mount with `immediate`). */
export default function Reveal({ delay = 0, rise = 20, immediate = false, children, ...props }: RevealProps) {
    const to = { opacity: 1, y: 0 };
    return (
        <motion.div
            initial={{ opacity: 0, y: rise }}
            {...(immediate ? { animate: to } : { whileInView: to, viewport: { once: true, amount: 0.2 } })}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
