"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Partners(){
    const pathname = usePathname();
    const delay = pathname === "/" ? 4 : 0;

    return (
        <Link href="/partners">
            <div
                className="text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute right-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pr-5">
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.7}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    p
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.6}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    a
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.5}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    r
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.4}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    t
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.3}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    n
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.2}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.1}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    r
                </motion.span>
                <motion.span
                    initial={{x: 50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay}}
                    whileHover={{x: -5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    s
                </motion.span>
            </div>
        </Link>
    );
}