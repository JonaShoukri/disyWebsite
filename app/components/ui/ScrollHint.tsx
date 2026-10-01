"use client";
import { motion } from "framer-motion";

/** The little mouse outline with a bouncing dot that invites scrolling. */
export default function ScrollHint({ delay = 0 }: { delay?: number }) {
    return (
        <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.6 }} aria-hidden>
            <motion.div
                className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border border-[#3A3A3E] p-2"
                animate={{ borderColor: ["#3A3A3E", "#CEABC1", "#3A3A3E"] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <motion.div
                    className="h-2 w-1 rounded-full bg-rose"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
}
