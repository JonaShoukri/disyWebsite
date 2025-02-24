"use client"
import {motion} from "framer-motion";
import React from "react";

export default function AboutPage() {
    return(
        <div
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto"
            style={{zIndex: 0}}>
            <section className="min-w-[100vw] h-screen grid grid-rows-[auto,1fr] grid-cols-1 gap-4 p-24"
                     id="consulting">
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
        </div>
    );
}