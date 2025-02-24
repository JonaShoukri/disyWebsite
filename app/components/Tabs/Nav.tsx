'use client'
import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import Services from './Services'
import About from './About'
import French from './French'
import Partners from "./Parteners";
import AnimatedLogo from "../AnimatedLogo";
import { usePathname } from "next/navigation";

export default function Nav() {
    const [yOffset, setYOffset] = useState("46vh");
    const pathname = usePathname();
    const isRoot = pathname === "/";

    useEffect(() => {
        const updateYOffset = () => {
            if (window.innerWidth < 768) {
                setYOffset("37vh"); // Adjust for mobile
            } else {
                setYOffset("46vh"); // Default for larger screens
            }
        };

        updateYOffset(); // Set initial value
        window.addEventListener("resize", updateYOffset);

        return () => window.removeEventListener("resize", updateYOffset);
    }, []);

    const [scaleValue, setScaleValue] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            setScaleValue(window.innerWidth < 1024 ? 0.5 : 1);
        };
        updateScale(); // Set initial value
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={!isRoot ? {scale: 0.4, y: yOffset} : {scale: scaleValue, y: 0}}
                animate={!isRoot ? {scale: 0.4, y: yOffset} : {scale: scaleValue, y: 0}}
                transition={{duration: 1.2, ease: "easeInOut"}}
                className="flex items-center justify-center cursor-pointer"
            >
                <AnimatedLogo/>
            </motion.div>
            <Services/>
            <About/>
            <French/>
            <Partners/>
        </div>
    );
}
