"use client"
import {motion} from "framer-motion";

export default function French(){
    return (
        <div
            className="text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute right-0 top-1/4 transform -translate-y-1/2 flex flex-col items-center group pr-5">
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.5}}
            >
                f
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.4}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.3}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.2}}
            >
                n
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.1}}
            >
                ç
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.0}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.9}}
            >
                i
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.8}}
            >
                s
            </motion.a>
        </div>
    );
}