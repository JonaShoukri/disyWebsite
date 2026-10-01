"use client";
import { motion } from "framer-motion";

/** A numbered step: big faded number behind a title and a short description. */
export default function Step({ number, title, text, delay = 0 }: { number: number; title: string; text: string; delay?: number }) {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay }}
        >
            <motion.span
                aria-hidden
                className="pointer-events-none absolute -left-4 -top-8 font-display text-7xl text-rose/10 lg:text-8xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + 0.1 }}
            >
                {String(number).padStart(2, "0")}
            </motion.span>
            <div className="relative pl-8 pt-8">
                <h3 className="mb-2 text-xl text-mist">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{text}</p>
            </div>
        </motion.div>
    );
}
