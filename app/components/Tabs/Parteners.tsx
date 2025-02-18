"use client"
import {motion} from "framer-motion";

interface PartnersProps {
    setSelectedTab: (tab: string | null) => void;
}

export default function Partners({setSelectedTab}: PartnersProps){
    return (
        <div
            className="text-l m:text-l lg:text-2xl text-[#CEABC1] absolute right-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pr-5"
            onClick={() => setSelectedTab("about")}>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.7}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                p
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.6}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.5}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.4}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                t
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.3}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                n
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.2}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                e
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.1}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                r
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4}}
                whileHover={{x: -5, color: '#EAEAEC', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                s
            </motion.a>
        </div>
    );
}