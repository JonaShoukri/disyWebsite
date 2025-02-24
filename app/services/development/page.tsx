"use client"
import {motion} from "framer-motion";
import React from "react";

export default function DevelopmentPage() {
    return(
        <div
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto"
            style={{zIndex: 0}}>
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
        </div>
    );
}