"use client"
import {motion} from "framer-motion";

export default function Services({ setSelectedTab }){
    return (
        <div
            className="text-l m:text-l lg:text-2xl text-[#CEABC1] absolute left-0 top-1/4 transform -translate-y-1/2 flex flex-col items-center group pl-5"
            onClick={() => setSelectedTab("services")}>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4}}
            >
                s
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.1}}
            >
                e
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.2}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.3}}
            >
                v
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.4}}
            >
                i
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.5}}
            >
                c
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.6}}
            >
                e
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.7}}
            >
                s
            </motion.a>
        </div>
    );
}