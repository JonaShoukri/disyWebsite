"use client"
import {motion} from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
    const textLines = [
        "At DiSy, we believe in a personalized approach to consulting. Every project begins with a free,\n" +
        "                no-obligation consultation—something we offer to all our clients, whether we are developing your project\n" +
        "                or simply providing expert guidance. This initial consultation is your opportunity to ask any technical\n" +
        "                or non-technical questions you may have, as well as for us to gain a deep understanding of your\n" +
        "                business, its current state, and its future goals.",
        "If we are consulting, this session helps us understand where your company is now and where you want it\n" +
        "                to be. From there, subsequent consultations will focus on providing strategic advice and actionable\n" +
        "                steps to get you there.",
        "If we are developing your project, this initial consultation is crucial for defining the scope, ensuring\n" +
        "                we are on the same page, and discussing key elements such as budget, design, and functionality.\n" +
        "                Following this, our second consultation will be where we present a detailed plan for execution—including\n" +
        "                the tech stack, development timeline, iteration cycles, and post-launch maintenance. All subsequent\n" +
        "                consultations will serve as progress updates as we move toward delivering your solution.",
        "For those who only need expert guidance, we offer a flexible ‘time bank’ of consultation hours, allowing\n" +
        "                you to access our expertise as needed. Whatever your needs, we are here to provide the knowledge,\n" +
        "                strategy, and technical insight to help your business thrive."
    ];

    return (
        <div className="flex flex-col sm:flex-row p-10 w-screen h-screen">
            {/* Page Title on Mobile (Top) */}
            <motion.div
                initial={{y: "40%"}}
                animate={{y: "0%"}}
                transition={{duration: 2, ease: "easeInOut"}}
                className="w-full sm:w-1/2 p-4 order-1 sm:order-2"
            >
                <Link href="/services/consulting/appointment">
                    <div>
                        <motion.p
                            whileHover={{y: -10}}
                            className="text-[8vw] sm:text-[4vw] text-[#EAEAEC] hover:text-[#CEABC1]"
                        >
                            BOOK YOUR FREE CONSULTATION &#9654;
                        </motion.p>
                    </div>
                </Link>
            </motion.div>

            {/* Text Content (Below Title on Mobile) */}
            <div className="w-full sm:w-1/2 p-4 px-8 sm:px-28 pt-12 order-2 sm:order-1">
                {textLines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{x: "-120%"}}
                        animate={{x: "0%"}}
                        transition={{delay: index * 0.2, duration: 1.2, ease: "easeInOut"}}
                    >
                        {line}
                        <br/>
                        <br/>
                    </motion.div>
                ))}
            </div>
        </div>


    );
}