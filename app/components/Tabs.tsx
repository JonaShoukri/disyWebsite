'use client';
import { motion } from 'framer-motion';

const tabs = [
    { text: 'SERViCeS', position: 'left', top: '1/4', delayStart: 4 },
    { text: 'aBoUt', position: 'left', top: '3/4', delayStart: 4.8 },
    { text: 'fReNCH', position: 'right', top: '1/4', delayStart: 5.3, reverse: true },
    { text: 'paRtNeRS', position: 'right', top: '3/4', delayStart: 4.7, reverse: true },
];

export default function Tabs() {
    return (
        <div>
            {tabs.map(({ text, position, top, delayStart, reverse }) => (
                <div
                    key={text}
                    className={`text-l m:text-l lg:text-2xl ${position === 'left' ? 'text-[#CEABC1] pl-5' : 'text-[#EAEAEC] pr-5'} 
            absolute ${position}-0 top-${top} transform -translate-y-1/2 flex flex-col items-center group`}
                >
                    {[...(reverse ? text.split('') : text)].map((char, i) => (
                        <motion.a
                            key={i}
                            href="#about"
                            initial={{ x: position === 'left' ? -50 : 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut', delay: delayStart + i * 0.1 * (reverse ? -1 : 1) }}
                        >
                            {char}
                        </motion.a>
                    ))}
                </div>
            ))}
        </div>
    );
}
