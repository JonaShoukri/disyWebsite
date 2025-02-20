"use client"
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="fixed inset-0 flex items-center justify-center p-5">
            <div className="grid grid-cols-2 w-full max-w-3xl">
                {/* Left Grid - Title */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    className="col-span-1 justify-self-start text-left pl-14 pt-2 "
                >
                    <p className="text-3xl md:text-3xl lg:text-6xl text-[#EAEAEC]">
                        Services
                    </p>
                </motion.div>

                {/* Right Grid - List */}
                <div className="col-span-1 flex flex-col space-y-2">
                    {["consultation", "web & app development", "web mastering / maintenance", "ux/ui design"].map(
                        (service, index) => (
                            <motion.p
                                key={service}
                                className="text-lg md:text-xl py-1"
                                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                                whileHover={{ x: 5, color: "#CEABC1", transition: { duration: 0.1, ease: "easeInOut" } }}
                            >
                                {service}
                            </motion.p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
