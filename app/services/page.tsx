"use client"
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="fixed inset-0 flex items-center justify-center p-5">
            <div className="grid grid-cols-2 w-full max-w-3xl">
                {/* Left Grid - Title */}
                <motion.div
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut", delay: 1}}
                    className="col-span-1 justify-self-center text-left pt-2 pl-14"
                >
                    <p className="bold-text text-2xl md:text-2xl lg:text-6xl text-[#CEABC1]">
                        SERVICES
                    </p>
                </motion.div>

                {/* Right Grid - List */}
                <div className="col-span-1 flex flex-col space-y-2">
                {["consultation", "development", "web mastering", "ux/ui design"].map(
                        (service, index) => (
                            <motion.div
                                key={service}
                                className="text-lg md:text-xl py-1"
                                initial={{x: index % 2 === 0 ? 50 : -50, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                whileHover={{x: 5}}
                                transition={{duration: 1, ease: "easeInOut", delay: 1}}
                            >
                                <div>{service}</div>
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
