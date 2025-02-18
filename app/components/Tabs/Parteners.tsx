"use client"

import {motion} from "framer-motion";

export default function Partners(){
    return (
        <div
            className="text-l m:text-l lg:text-2xl text-[#CEABC1] absolute right-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pr-5">
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.7}}
            >
                p
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.6}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.5}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.4}}
            >
                t
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.3}}
            >
                n
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.2}}
            >
                e
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.1}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4}}
            >
                s
            </motion.a>
        </div>
    );
}