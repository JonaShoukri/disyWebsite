"use client"
import {motion} from "framer-motion";

interface FrenchProps {
    setSelectedTab: (tab: string | null) => void;
}

export default function French({setSelectedTab}: FrenchProps){
    return (
        <div
            className="text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute right-0 top-1/4 transform -translate-y-1/2 flex flex-col items-center group pr-5"
            onClick={() => setSelectedTab("french")}>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.5}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                f
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.4}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.3}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.2}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                n
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.1}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                ç
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.0}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.9}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                i
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.8}}
                whileHover={{x: -5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                s
            </motion.a>
        </div>
    );
}