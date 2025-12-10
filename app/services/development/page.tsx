"use client"
import {motion} from "framer-motion";
import React from "react";

export default function DevelopmentPage() {
    return (

        <div className="container mx-auto p-8">
            {/* TITLE */}
            <div className="relative overflow-hidden h-[87px] w-screen">
                <motion.h1
                    initial={{y: "115%"}} // Starts hidden below
                    whileInView={{y: "0%"}} // Moves into view
                    transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}
                    viewport={{once: true}}
                    className="text-6xl extra-bold-text leading-tight whitespace-nowrap"
                >
                    SITES, APPS, & SYSTEMS
                </motion.h1>
            </div>
            <div className="relative overflow-hidden h-[89px] w-screen">
                <motion.h1 className="text-6xl extra-bold-text leading-tight whitespace-nowrap"
                           initial={{y: "115%"}}
                           whileInView={{y: "0%"}}
                           transition={{duration: 1.2, ease: "easeOut", delay: 0.5}}
                           viewport={{once: true}}
                >
                    BY <span className="funky-text text-[#CEABC1]">DiSy</span>
                </motion.h1>
            </div>
        </div>
    );
}

{/*<motion.p className="break-words text-sm"*/
}
{/*          whileHover={{scale: 1.1}}>*/
}
{/*    We don’t just build software—we bring your vision to life. Whether you*/
}
{/*    need a website, mobile app, internal system, or automation solution, we craft digital*/
}
{/*    experiences that truly represent your brand. Our development process is centered on*/
}
{/*    immersive, interactive UI/UX design that captures the essence of your company, ensuring that*/
}
{/*    every product we create is both visually stunning and functionally seamless. From conception to*/
}
{/*    deployment, we work closely with you to develop solutions that enhance efficiency, engage*/
}
{/*    users, and set your business apart.*/
}
{/*</motion.p>*/
}