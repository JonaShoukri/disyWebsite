'use client'
import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import Services from './Services'
import About from './About'
import French from './French'
import Partners from "./Parteners";
import AnimatedLogo from "../AnimatedLogo";
import { useRouter } from "next/navigation";
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

    return (
        <div className="relative z-50">

            <motion.div
                initial={!isRoot ? {scale: 0.4, y: yOffset} : {scale: 1, y: 0}}
                animate={!isRoot ? {scale: 0.4, y: yOffset} : {scale: 1, y: 0}}
                transition={{duration: 1.2, ease: "easeInOut"}}
            >
                <div
                    className="flex items-center justify-center min-h-screen scale-50 m:scale-50 lg:scale-100 cursor-pointer">
                    <AnimatedLogo/>
                </div>

            </motion.div>

            <div>
                <Services/>
            </div>

            <About/>
            <French/>
            <Partners/>
        </div>
    );
}