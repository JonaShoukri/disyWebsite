'use client'
import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import Services from './Services'
import About from './About'
import French from './French'
import Partners from "./Parteners";
import AnimatedLogo from "../AnimatedLogo";
export default function Nav() {
    const [selectedTab, setSelectedTab] = useState<string | null>(null);
    const [yOffset, setYOffset] = useState("46vh");

    useEffect(() => {
        const updateYOffset = () => {
            if (window.innerWidth < 768) {
                setYOffset("40vh"); // Adjust for mobile
            } else {
                setYOffset("46vh"); // Default for larger screens
            }
        };

        updateYOffset(); // Set initial value
        window.addEventListener("resize", updateYOffset);

        return () => window.removeEventListener("resize", updateYOffset);
    }, []);

    return (
        <div>

            <motion.div
                initial={{scale: 1, y: 0}}
                animate={selectedTab ? {scale: 0.4, y: yOffset} : {scale: 1, y: 0}}
                transition={{duration: 1.2, ease: "easeInOut"}}
            >
                <div
                    className="flex items-center justify-center min-h-screen scale-50 m:scale-50 lg:scale-100 cursor-pointer"
                onClick={() => setSelectedTab(null)}>
                    <AnimatedLogo/>
                </div>
            </motion.div>

            <div>
                <Services setSelectedTab={setSelectedTab}/>
            </div>

            <About setSelectedTab={setSelectedTab}/>
            <French setSelectedTab={setSelectedTab}/>
                <Partners setSelectedTab={setSelectedTab}/>
        </div>
);
}