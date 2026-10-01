"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Timeline of the intro (ms): "Digital Systems" collapses to "DiSy", then slides to center.
const COLLAPSE_AT = 1500;
const CENTER_AT = COLLAPSE_AT + 2000;
const EASE = { duration: 2, ease: "easeInOut" } as const;

/**
 * The launch logo. Sizes are in `em` so the whole logo scales with its font size,
 * which is set responsively on the wrapper.
 */
export default function AnimatedLogo() {
    const [collapsed, setCollapsed] = useState(false);
    const [centered, setCentered] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const collapse = setTimeout(() => setCollapsed(true), COLLAPSE_AT);
        const center = setTimeout(() => setCentered(true), CENTER_AT);
        return () => {
            clearTimeout(collapse);
            clearTimeout(center);
        };
    }, []);

    const hover = { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) };
    const colorTransition = "transition-colors duration-500 ease-in-out";

    return (
        <motion.div
            role="img"
            aria-label="DiSy, Digital Systems"
            animate={centered ? { x: "1.5625em" } : {}}
            transition={EASE}
            className="font-display text-[clamp(3rem,12vw,6rem)] leading-none"
        >
            <div className="flex" aria-hidden>
                <motion.p className={`${colorTransition} ${isHovered ? "text-rose" : "text-mist"}`} animate={collapsed ? { y: 0 } : {}} transition={EASE} {...hover}>
                    Di
                </motion.p>
                <motion.p className="text-mist" animate={collapsed ? { opacity: 0, y: "-1.04em" } : {}} transition={EASE}>
                    gital
                </motion.p>
            </div>
            <div className="flex" aria-hidden>
                <motion.p className={`${colorTransition} ${isHovered ? "text-mist" : "text-rose"}`} animate={collapsed ? { y: "-0.52em" } : {}} transition={EASE} {...hover}>
                    &nbsp;&nbsp;&nbsp;Sy
                </motion.p>
                <motion.p className="text-rose" animate={collapsed ? { opacity: 0, y: "1.04em" } : {}} transition={EASE}>
                    stems
                </motion.p>
            </div>
        </motion.div>
    );
}
