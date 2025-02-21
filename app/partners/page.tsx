"use client"
import {motion} from "framer-motion"

export default function PartnerPage(){
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="fixed inset-0 flex items-center justify-center"
        >
            <h1 className="text-8xl text-white">Partners</h1>
        </motion.div>
    );
}