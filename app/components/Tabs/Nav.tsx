'use client'
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Services from './Services'
import About from './About'
import French from './French'
import Partners from "./Parteners";
import AnimatedLogo from "../AnimatedLogo";
export default function Nav() {
    const [selectedTab, setSelectedTab] = useState<string | null>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            setOffsetY(viewportHeight * 0.46); // Adjust as needed
        };

        updateOffset(); // Run initially

        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    return (
        <div>

            <motion.div
                initial={{ scale: 1, y: 0 }}
                animate={selectedTab ? { scale: 0.4, y: offsetY } : { scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <div
                    className="flex items-center justify-center min-h-screen scale-50 m:scale-50 lg:scale-100">
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