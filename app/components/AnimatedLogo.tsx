"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedLogo() {
    const [startAnimation, setStartAnimation] = useState(false);
    const [adjustPosition, setAdjustPosition] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);

            // Delay before adjusting position after the first animation is done
            setTimeout(() => {
                setAdjustPosition(true);
            }, 2000); // Adjust this duration based on animation length
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (

            <motion.div
                animate={adjustPosition ? {x: 150} : {}}
                transition={{duration: 2, ease: "easeInOut"}}
            >
                <div className="flex">
                    <motion.p
                        className={`text-8xl transition-colors duration-500 ease-in-out ${
                            isHovered ? "text-[#CEABC1]" : "text-[#EAEAEC]"
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        animate={startAnimation ? {y: 0} : {}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        Di
                    </motion.p>
                    <motion.p
                        className="text-8xl text-[#EAEAEC] transition-colors duration-500 ease-in-out"
                        animate={startAnimation ? {opacity: 0, y: -100} : {}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        gital
                    </motion.p>
                </div>
                <div className="flex">
                    <motion.p
                        className={`text-8xl transition-colors duration-500 ease-in-out ${
                            isHovered ? "text-[#EAEAEC]" : "text-[#CEABC1]"
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        animate={startAnimation ? {y: -50} : {}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        &nbsp;&nbsp;&nbsp;Sy
                    </motion.p>
                    <motion.p
                        className="text-8xl text-[#CEABC1] transition-colors duration-500 ease-in-out"
                        animate={startAnimation ? {opacity: 0, y: 100} : {}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        stems
                    </motion.p>
                </div>
            </motion.div>

    );
}
