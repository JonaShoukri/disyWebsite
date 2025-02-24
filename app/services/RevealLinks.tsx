"use client";

import React from "react";
import { motion } from "framer-motion";

export const RevealLinks: React.FC = () => {
    return (
        <section className="text-[#CEABC1] w-full px-4">
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.1}}>
                <FlipLink href="#consulting">Consultations</FlipLink>
            </motion.div>
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}>
                <FlipLink href="#development">Development</FlipLink>
            </motion.div>
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.5}}>
                <FlipLink href="#webmastering">Web-Mastering</FlipLink>
            </motion.div>
            <motion.div
                className="transition-transform transform"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeOut", delay: 0.7}}>
                <FlipLink href="#automation">Automation</FlipLink>
            </motion.div>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
    children: string;
    href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({children, href}) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            // className="relative block overflow-hidden whitespace-nowrap text-4xl sm:text-7xl md:text-8xl lg:text-9xl funky-text"
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
        </motion.a>
    );
};
