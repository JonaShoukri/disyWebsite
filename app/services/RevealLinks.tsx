"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const RevealLinks: React.FC = () => {
    return (
        <section className="text-[#CEABC1] w-full px-4">
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.1}}>
                <Link href="/services/consulting">
                    <FlipLink>Consultations</FlipLink>
                </Link>
            </motion.div>
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}>
                <Link href="/services/development">
                    <FlipLink>Development</FlipLink>
                </Link>
            </motion.div>
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.5}}>
                <Link href="/services/webmastering">
                    <FlipLink>Web-Mastering</FlipLink>
                </Link>
            </motion.div>
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.7}}>
                <Link href="/services/automation">
                    <FlipLink>Automation</FlipLink>
                </Link>
            </motion.div>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
    children: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({children}) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-nowrap text-[10vw] w-full funky-text"
            style={{ lineHeight: 1.1 }}
        >
            <div>
                {children.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * index,
                        }}
                        className="inline-block"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 text-[#EAEAEC]">
                {children.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * index,
                        }}
                        className="inline-block"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};
