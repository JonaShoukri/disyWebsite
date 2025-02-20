"use client"
import {motion} from "framer-motion";
import Link from "next/link";

export default function Services(){
    return (
        <Link href="/services">
            <div
                className="text-l m:text-l lg:text-2xl text-[#CEABC1] absolute left-0 top-1/4 transform -translate-y-1/2 flex flex-col items-center group pl-5">
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    s
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.1}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.2}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    r
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.3}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    v
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.4}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    i
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.5}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    c
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.6}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 4.7}}
                    whileHover={{x: 5, color: '#EAEAEC', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    s
                </motion.span>
            </div>
        </Link>
    );
}