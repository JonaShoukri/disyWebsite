"use client";
import React from "react";
import {motion} from "framer-motion"
import { useEffect, useRef } from "react";
import { RevealLinks } from "./RevealLinks";

export default function ServicesPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleWheelScroll = (event: WheelEvent) => {
            if (scrollContainerRef.current) {
                event.preventDefault();
                scrollContainerRef.current.scrollLeft += event.deltaY;
            }
        };

        const disableBodyScroll = (event: Event) => event.preventDefault();

        // Attach event listeners
        document.body.style.overflow = "hidden"; // Disable vertical scrolling
        window.addEventListener("wheel", handleWheelScroll, { passive: false });
        window.addEventListener("touchmove", disableBodyScroll, { passive: false });

        return () => {
            // Cleanup event listeners
            document.body.style.overflow = "auto";
            window.removeEventListener("wheel", handleWheelScroll);
            window.removeEventListener("touchmove", disableBodyScroll);
        };
    }, []);

    return (
        <div
            ref={scrollContainerRef}
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto"
            style={{zIndex: 0}}
        >
            <section className="w-full h-screen flex flex-col items-center justify-center p-6 sm:p-24" id="menu">
                <div className="scale-50 m:scale-50 lg:scale-100">
                    <RevealLinks/>
                </div>
            </section>

            <section className="min-w-[100vw] h-screen grid grid-rows-[auto,1fr] grid-cols-1 gap-4 p-24" id="consulting">
                <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 items-center justify-start text-left">
                        <motion.p className="pb-4 text-xl"
                                  initial={{x: 200, opacity: 0}}
                                  animate={{x: 0, opacity: 1}}
                                  transition={{duration: 1.2, ease: "easeOut"}}>
                            Consultations
                        </motion.p>
                        <p className="break-words text-sm">
                            At DiSy, we believe in a personalized approach to consulting. Every project begins
                            with a free, no-obligation consultation, where we take the time to understand your business,
                            its current state, and its future goals. This allows us to match you with the right service
                            — whether that’s custom development or ongoing support. If you’re confident in your ability
                            to handle things yourself but still need expert advice, we offer flexible consultation
                            packages with our ‘time bank,’ where you can cash in hours whenever you need them. Whatever
                            your needs, we’re here to provide the expertise and guidance to help your business thrive.
                        </p>
                    </div>
                </div>
            </section>
            <section className="min-w-[100vw] h-screen grid grid-rows-[auto,1fr] grid-cols-1 gap-4 p-24 "
                     id="development">
                <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 items-center justify-start text-left">
                        <motion.p className="pb-4 text-xl"
                                  initial={{x: 100, opacity: 0}}
                                  animate={{x: 0, opacity: 1}}
                                  transition={{duration: 1.2, ease: "easeOut"}}>
                            Development
                        </motion.p>
                        <motion.p className="break-words text-sm"
                                  whileHover={{scale: 1.1}}>
                            We don’t just build software—we bring your vision to life. Whether you
                            need a website, mobile app, internal system, or automation solution, we craft digital
                            experiences that truly represent your brand. Our development process is centered on
                            immersive, interactive UI/UX design that captures the essence of your company, ensuring that
                            every product we create is both visually stunning and functionally seamless. From concept to
                            deployment, we work closely with you to develop solutions that enhance efficiency, engage
                            users, and set your business apart.
                        </motion.p>
                    </div>
                </div>
            </section>
            <section className="min-w-[100vw] h-screen grid grid-rows-[auto,1fr] grid-cols-1 gap-4 p-24 "
                     id="webmastering">
                <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 items-center justify-start text-left">
                        <motion.p className="pb-4 text-xl"
                                  initial={{x: -100, opacity: 0}}
                                  animate={{x: 0, opacity: 1}}
                                  transition={{duration: 1.2, ease: "easeOut"}}>
                            Web-Mastering
                        </motion.p>
                        <motion.p className="break-words text-sm">
                            We act as your dedicated tech team, handling all your software and website needs so you can
                            focus on growing your business. Our web mastering services ensure your digital presence is
                            always up-to-date, secure, and optimized for performance. From managing your website and
                            internal systems to handling domain names, we provide a seamless, worry-free experience.
                            Every client receives a free consultation to assess their needs and create a tailored
                            strategy that keeps their technology running smoothly. Think of us as your in-house tech
                            department—without the overhead.
                        </motion.p>
                    </div>
                </div>
            </section>
            <section className="min-w-[100vw] h-screen grid grid-rows-[auto,1fr] grid-cols-1 gap-4 p-24 " id="automation">
                <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 items-center justify-start text-left">
                        <motion.p className="pb-4 text-xl"
                                  initial={{x: -200, opacity: 0}}
                                  animate={{x: 0, opacity: 1}}
                                  transition={{duration: 1.2, ease: "easeOut"}}>
                            Automation
                        </motion.p>
                        <motion.p className="break-words text-sm"
                                  initial={{y: -100, opacity: 0}}
                                  animate={{y: 0, opacity: 1}}
                                  transition={{duration: 1.2, ease: "easeOut"}}
                        >
                            We simplify complexity through smart automation and digitization solutions. If your business
                            relies on time-consuming manual processes or outdated systems, we help you transition to
                            streamlined, efficient workflows. Whether you need to automate repetitive tasks, integrate
                            digital tools, or fully modernize your operations, we provide tailored solutions that
                            optimize
                            efficiency and reduce costs. Our expert team works closely with you to understand your
                            unique challenges and develop a system that seamlessly fits your business. Let us take the
                            guesswork out of automation—so you can focus on what truly matters.
                        </motion.p>
                    </div>
                </div>
            </section>
        </div>
    );
}

