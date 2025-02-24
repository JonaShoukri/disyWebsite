"use client"
import {motion} from "framer-motion";
import React from "react";

export default function AutomationPage() {
    return(
        <div
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto"
            style={{zIndex: 0}}>
            <section className="min-w-[100vw] h-screen grid grid-rows-[auto,1fr] grid-cols-1 gap-4 p-24 "
                     id="automation">
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