import {motion} from "framer-motion";

export default function Title({ className = "" }) {
    return (
        <div className={className}>
            <div className="relative overflow-hidden h-[87px] w-screen">
                <motion.h1
                    initial={{y: "115%"}} // Starts hidden below
                    whileInView={{y: "0%"}} // Moves into view
                    transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}
                    viewport={{once: true}}
                    className="text-6xl extra-bold-text leading-tight whitespace-nowrap"
                >
                    YOU DO BUSINESS,
                </motion.h1>
            </div>
            <div className="relative overflow-hidden h-[89px] w-screen">
                <motion.h1 className="text-6xl extra-bold-text leading-tight whitespace-nowrap"
                           initial={{y: "115%"}} // Starts hidden below
                           whileInView={{y: "0%"}} // Moves into view
                           transition={{duration: 1.2, ease: "easeOut", delay: 0.5}}
                           viewport={{once: true}}
                >
                    WE'LL DO <span className="funky-text text-[#CEABC1]">Software</span>
                </motion.h1>
            </div>
        </div>
    );
}
