"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function About(){
    const pathname = usePathname();
    const delay = pathname === "/" ? 4.8 : 0.8;

    return (
        <Link href="/about">
            <div
                className="text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute left-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pl-5">
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay}}
                    whileHover={{x: 5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    a
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.1}}
                    whileHover={{x: 5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    b
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.2}}
                    whileHover={{x: 5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    o
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.3}}
                    whileHover={{x: 5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    u
                </motion.span>
                <motion.span
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: delay + 0.4}}
                    whileHover={{x: 5, color: '#CEABC1', transition: {duration: 0.1, ease: "easeInOut"}}}
                >
                    t
                </motion.span>
            </div>
        </Link>
    );
}