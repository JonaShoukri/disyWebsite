"use client"
import {motion} from "framer-motion";
import React from "react";

export default function WebmasteringPage() {
    return(
        <div
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto"
            style={{zIndex: 0}}>
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
        </div>
    );
}