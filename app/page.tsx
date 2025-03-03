"use client"
import AnimatedLogo from "@/app/components/AnimatedLogo";
import {motion} from "framer-motion"
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Title from "@/app/components/Title";
export default function Home() {
    const [yOffset, setYOffset] = useState("46vh");
    const pathname = usePathname();
    const isRoot = pathname === "/";

    useEffect(() => {
        const updateYOffset = () => {
            if (window.innerWidth < 768) {
                setYOffset("37vh"); // Adjust for mobile
            } else {
                setYOffset("46vh"); // Default for larger screens
            }
        };

        updateYOffset(); // Set initial value
        window.addEventListener("resize", updateYOffset);

        return () => window.removeEventListener("resize", updateYOffset);
    }, []);

  return (
      <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
          <div className="h-screen min-h-screen flex flex-col items-center justify-center snap-always snap-start">
              <motion.div
                  initial={!isRoot ? {scale: 0.4, y: yOffset} : {scale: 1, y: 0}}
                  animate={!isRoot ? {scale: 0.4, y: yOffset} : {scale: 1, y: 0}}
                  transition={{duration: 1.2, ease: "easeInOut"}}
              >
                  <div className="flex items-center justify-center scale-50 md:scale-50 lg:scale-100 cursor-pointer">
                      <AnimatedLogo/>
                  </div>
              </motion.div>
          </div>
          <div className="h-screen w-screen bg-[#EAEAEC] snap-always snap-start text-[#0A0A0A]">
              <div className="flex flex-col w-screen h-screen px-20 pt-40">
                  <Title className="scale-75 hidden sm:block md:scale-75 lg:scale-100" />

                  <div className="md:flex md:flex-col md:items-center md:justify-center md:w-full">
                      <p className="text-[#0A0A0A] pb-10 lg:pt-20 lg:w-1/2 lg:text-left lg:ml-auto md:w-full md:text-center">
                          DiSy is a digital development and consultation firm focused on aiding small to medium-sized
                          businesses. Our dedicated team offers end-to-end services, including custom web, app, and
                          software development, consultations, web mastering, maintenance, and design tailored to your
                          business needs and ethos. Whether you want a dedicated team to take care of all your digital
                          needs or simply need expert advice on how to go about it on your own, we&apos;ve got you covered.
                          Book your free, no-strings-attached consultation today and let us help you take your business
                          to the next level.
                      </p>

                      <Link href="/">
                          <motion.div
                              className="text-[#0A0A0A] w-1/2 underline decoration-[#CEABC1] md:w-full md:text-center"
                              initial={{y: 0}}
                              whileHover={{
                                  y: -3,
                                  color: "#CEABC1",
                                  transition: {duration: 0.1, ease: "easeInOut"},
                              }}
                          >
                              Book a Consultation
                          </motion.div>
                      </Link>
                  </div>
              </div>
          </div>

      </div>

  );
}