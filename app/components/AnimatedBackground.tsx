"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedBackground() {
    const pathname = usePathname();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isVisible, setIsVisible] = useState(false); // State to control the fade-in effect
    const rotateX = useTransform(y, [-1, 1], [10, -10]);
    const rotateY = useTransform(x, [-1, 1], [-10, 10]);

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const offsetX = (e.clientX / innerWidth) * 2 - 1;
            const offsetY = (e.clientY / innerHeight) * 2 - 1;
            x.set(offsetX);
            y.set(offsetY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    // Handle fade-in and zoom-out on initial load
    useEffect(() => {
        const delay = pathname === "/" ? 2000 : 0; // 2-second delay before animation starts

        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div className="fixed top-0 -z-10 h-full w-full">
            <motion.div
                className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] text-[#EAEAEC]"
                style={{
                    rotateX,
                    rotateY,
                    background: "radial-gradient(#EAEAEC 1px, transparent 1px)",
                    backgroundSize: "64px 64px"
                }}
                initial={{opacity: 0, scale: 1.2}} // Initial state for fade-in and zoom-out
                animate={{
                    opacity: isVisible ? 1 : 0, // Fades in after component mounts
                    scale: isVisible ? 1.0 : 1.2,  // Zoom-out effect initially
                }}
                exit={{opacity: 0}} // Optional exit animation when component leaves
                transition={{
                    type: "tween", // Switch to tween for duration control
                    duration: 3,   // 2-second duration for fade-in and zoom-out
                    ease: "easeOut", // Smooth easing
                }}
            />
        </div>

    );
}
