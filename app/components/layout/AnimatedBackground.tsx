"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

/** Dotted grid behind every page: fades and zooms in on load, then tilts with the mouse. */
export default function AnimatedBackground() {
    const pathname = usePathname();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-1, 1], [10, -10]);
    const rotateY = useTransform(x, [-1, 1], [-10, 10]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set((e.clientX / window.innerWidth) * 2 - 1);
            y.set((e.clientY / window.innerHeight) * 2 - 1);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    // On the home page, wait for the logo intro before revealing the grid.
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), pathname === "/" ? 2000 : 0);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div className="fixed inset-0 -z-10" aria-hidden>
            <motion.div
                className="absolute h-full w-full [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                style={{
                    rotateX,
                    rotateY,
                    background: "radial-gradient(#EAEAEC 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 1.2 }}
                transition={{ type: "tween", duration: 3, ease: "easeOut" }}
            />
        </div>
    );
}
