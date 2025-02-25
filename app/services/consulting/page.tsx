"use client"
import {motion} from "framer-motion";
import React, {useState} from "react";

export default function AboutPage() {
    return(
        <div className="container mx-auto p-8">
            <motion.h1
                initial={{y: 200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 1.2, ease: "easeInOut"}}
                className="left-0 w-full extra-bold-text  text-[#EAEAEC] text-7xl w-2/3 pt-10">
                Flexible <span className="funky-text text-[#CEABC1]">No-Strings</span> solution to getting the answers
                you need
            </motion.h1>
        </div>
    );
}