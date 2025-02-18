"use client"
import {motion} from "framer-motion";

export default function About({ setSelectedTab }){
    return (
        <div
            className="text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute left-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pl-5"
            onClick={() => setSelectedTab("about")}>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.8}}
                whileHover={{x: 5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                a
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 4.9}}
                whileHover={{x: 5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                b
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5}}
                whileHover={{x: 5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                o
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.1}}
                whileHover={{x: 5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                u
            </motion.a>
            <motion.a
                href="#about"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, ease: "easeInOut", delay: 5.2}}
                whileHover={{x: 5, color: '#CEABC1', transition: { duration: 0.1, ease: "easeInOut" }}}
            >
                t
            </motion.a>
        </div>
    );
}