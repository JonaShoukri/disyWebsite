"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function NavTab({
                                   href,
                                   letters,
                                   position,      // 'left' or 'right'
                                   verticalPos,   // 'top-1/4' or 'top-3/4'
                                   baseDelay,     // delay on home page
                                   altDelay,      // delay on other pages
                                   reverseAnimation = false  // if true, last letter animates first
                               }) {
    const pathname = usePathname();
    const delay = pathname === "/" ? baseDelay : altDelay;
    const [isHovered, setIsHovered] = useState(false);

    const isLeft = position === 'left';
    const initialX = isLeft ? -50 : 50;
    const hoverX = isLeft ? 5 : -5;

    // Calculate delay for each letter
    const getLetterDelay = (index) => {
        if (reverseAnimation) {
            return delay + ((letters.length - 1 - index) * 0.1);
        }
        return delay + (index * 0.1);
    };

    const Wrapper = href ? Link : 'div';
    const wrapperProps = href ? { href } : {};

    return (
        <Wrapper {...wrapperProps}>
            <div
                className={`text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute ${position}-0 ${verticalPos} transform -translate-y-1/2 flex flex-col items-center group ${isLeft ? 'pl-5' : 'pr-5'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{x: initialX, opacity: 0}}
                        animate={{
                            x: isHovered ? hoverX : 0,
                            opacity: 1,
                            color: isHovered ? '#CEABC1' : '#EAEAEC'
                        }}
                        transition={{
                            x: {
                                duration: isHovered ? 0.1 : 1,
                                ease: "easeInOut",
                                delay: isHovered ? 0 : getLetterDelay(index)
                            },
                            opacity: {
                                duration: 1,
                                ease: "easeInOut",
                                delay: getLetterDelay(index)
                            },
                            color: {duration: 0.1, ease: "easeInOut"}
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </Wrapper>
    );
}