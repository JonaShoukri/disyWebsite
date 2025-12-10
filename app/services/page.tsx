"use client"
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Types
interface ServiceTier {
    name: string;
    tagline: string;
    upfront: string;
    monthly: string;
    features: string[];
    accent: string;
    delay: number;
}

// Data
const tiers: ServiceTier[] = [
    {
        name: "Starter",
        tagline: "L'essentiel pour démarrer",
        upfront: "3 000$",
        monthly: "300$/mois",
        features: [
            "Solution IA personnalisée",
            "Intégration à vos systèmes existants",
            "Formation de base",
            "Support par courriel",
            "Mises à jour mineures incluses",
        ],
        accent: "#CEABC1",
        delay: 0,
    },
    {
        name: "Pro",
        tagline: "Pour les entreprises en croissance",
        upfront: "6 000$",
        monthly: "450$/mois",
        features: [
            "Tout du forfait Starter",
            "Analyse avancée & tableaux de bord",
            "Intégrations multiples",
            "Formation approfondie",
            "Support prioritaire",
            "Optimisation continue",
        ],
        accent: "#A8C1CE",
        delay: 0.15,
    },
    {
        name: "Enterprise",
        tagline: "Solutions sur mesure complètes",
        upfront: "10 000$",
        monthly: "600$/mois",
        features: [
            "Tout du forfait Pro",
            "Architecture personnalisée",
            "Intégrations illimitées",
            "Gestionnaire de compte dédié",
            "Support 24/7",
            "SLA garanti",
            "Développement prioritaire",
        ],
        accent: "#CEC1A8",
        delay: 0.3,
    },
];

// Animated letter component
function AnimatedLetter({
                            letter,
                            delay,
                            direction = "left",
                            immediate = false
                        }: {
    letter: string;
    delay: number;
    direction?: "left" | "right" | "up" | "down";
    immediate?: boolean;
}) {
    const initialX = direction === "left" ? -30 : direction === "right" ? 30 : 0;
    const initialY = direction === "up" ? -30 : direction === "down" ? 30 : 0;

    // Use animate for immediate (hero), whileInView for scroll-triggered sections
    if (immediate) {
        return (
            <motion.span
                className="inline-block"
                initial={{ x: initialX, y: initialY, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay }}
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        );
    }

    return (
        <motion.span
            className="inline-block"
            initial={{ x: initialX, y: initialY, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
    );
}

// Animated word component
function AnimatedWord({
                          word,
                          baseDelay = 0,
                          letterDelay = 0.03,
                          direction = "up",
                          className = "",
                          immediate = false
                      }: {
    word: string;
    baseDelay?: number;
    letterDelay?: number;
    direction?: "left" | "right" | "up" | "down";
    className?: string;
    immediate?: boolean;
}) {
    return (
        <span className={className}>
            {word.split("").map((letter, i) => (
                <AnimatedLetter
                    key={i}
                    letter={letter}
                    delay={baseDelay + i * letterDelay}
                    direction={direction}
                    immediate={immediate}
                />
            ))}
        </span>
    );
}

// Service tier card component
function TierCard({ tier, index }: { tier: ServiceTier; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();
    const baseAnimDelay = pathname === "/" ? tier.delay : tier.delay + 0.3;

    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: baseAnimDelay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <motion.div
                className="absolute -inset-[1px] rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${tier.accent}40, transparent 70%)`,
                    opacity: isHovered ? 0.6 : 0
                }}
            />

            {/* Card */}
            <motion.div
                className="relative h-full rounded-2xl border border-[#2a2a2e] bg-[#0a0a0c]/70 backdrop-blur-md overflow-hidden"
                whileHover={{
                    borderColor: tier.accent,
                    transition: { duration: 0.3 }
                }}
            >
                {/* Decorative corner accent */}
                <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${tier.accent}, transparent 70%)`
                    }}
                />

                {/* Content */}
                <div className="relative p-8 lg:p-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-8">
                        <h3
                            className="font-[family-name:var(--font-dirtyline)] text-3xl lg:text-4xl mb-2 tracking-wide"
                            style={{ color: tier.accent }}
                        >
                            <AnimatedWord
                                word={tier.name}
                                baseDelay={baseAnimDelay + 0.2}
                                direction="left"
                            />
                        </h3>

                        <motion.p
                            className="text-[#8a8a8e] font-[family-name:var(--font-nohemi)] text-sm tracking-wide"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: baseAnimDelay + 0.4, duration: 0.5 }}
                        >
                            {tier.tagline}
                        </motion.p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-8">
                        <motion.div
                            className="flex items-baseline gap-2 mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: baseAnimDelay + 0.5, duration: 0.5 }}
                        >
                            <span className="font-[family-name:var(--font-nohemi)] text-4xl lg:text-5xl font-bold text-[#EAEAEC]">
                                {tier.upfront}
                            </span>
                            <span className="text-[#6a6a6e] text-sm">initial</span>
                        </motion.div>

                        <motion.div
                            className="flex items-baseline gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: baseAnimDelay + 0.6, duration: 0.5 }}
                        >
                            <span className="font-[family-name:var(--font-nohemi)] text-xl text-[#CEABC1]">
                                + {tier.monthly}
                            </span>
                            <span className="text-[#6a6a6e] text-sm">maintenance</span>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-[#2a2a2e] to-transparent mb-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseAnimDelay + 0.7, duration: 0.6 }}
                    />

                    {/* Features */}
                    <ul className="space-y-4 flex-grow">
                        {tier.features.map((feature, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start gap-3 text-[#EAEAEC]/80 font-[family-name:var(--font-nohemi)] text-sm"
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: baseAnimDelay + 0.8 + i * 0.08,
                                    duration: 0.4
                                }}
                            >
                                <motion.span
                                    className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: tier.accent }}
                                    whileHover={{ scale: 1.5 }}
                                />
                                {feature}
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseAnimDelay + 1.2, duration: 0.5 }}
                    >
                        <Link href="/services/consulting/appointment">
                            <motion.button
                                className="w-full py-4 px-6 rounded-xl font-[family-name:var(--font-nohemi)] text-sm tracking-wider uppercase relative overflow-hidden group/btn"
                                style={{
                                    border: `1px solid ${tier.accent}40`,
                                    color: tier.accent
                                }}
                                whileHover={{
                                    borderColor: tier.accent,
                                    backgroundColor: `${tier.accent}10`
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Consultation gratuite</span>

                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${tier.accent}20, transparent)`,
                                    }}
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Process step component
function ProcessStep({
                         number,
                         title,
                         description,
                         delay
                     }: {
    number: string;
    title: string;
    description: string;
    delay: number;
}) {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay }}
        >
            <motion.span
                className="font-[family-name:var(--font-dirtyline)] text-7xl lg:text-8xl text-[#CEABC1]/10 absolute -top-8 -left-4 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + 0.1 }}
            >
                {number}
            </motion.span>

            <div className="relative pt-8 pl-8">
                <h4 className="font-[family-name:var(--font-nohemi)] text-xl text-[#EAEAEC] mb-2">{title}</h4>
                <p className="font-[family-name:var(--font-nohemi)] text-sm text-[#8a8a8e] leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}

// Main Services Page Component
export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isRoot = pathname === "/";
    const baseDelay = isRoot ? 0 : 0.3;

    return (
        // Snap scroll container - same magnetic effect as launch page
        // pointer-events-none allows clicks to pass through to Nav tabs underneath
        <div
            ref={containerRef}
            className="h-screen w-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth pointer-events-none"
        >
            {/* Section 1: Hero - pointer-events-auto re-enables interactions for content */}
            <section className="h-screen min-h-screen snap-always snap-start relative flex items-center justify-center px-6 lg:px-20 pointer-events-auto">
                <div className="max-w-6xl mx-auto text-center relative z-10 text-[#EAEAEC]">
                    {/* Overline */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: baseDelay }}
                    >
                        <span className="font-[family-name:var(--font-nohemi)] text-xs tracking-[0.3em] uppercase text-[#CEABC1]">
                            Nos Services
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <h1 className="font-[family-name:var(--font-dirtyline)] text-5xl sm:text-6xl lg:text-8xl mb-8 leading-[0.9]">
                        <AnimatedWord
                            word="Solutions"
                            baseDelay={baseDelay + 0.2}
                            letterDelay={0.04}
                            direction="up"
                            className="block text-[#EAEAEC]"
                            immediate={true}
                        />
                        <AnimatedWord
                            word="Intelligentes"
                            baseDelay={baseDelay + 0.6}
                            letterDelay={0.04}
                            direction="up"
                            className="block text-[#CEABC1] mt-2"
                            immediate={true}
                        />
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        className="font-[family-name:var(--font-nohemi)] text-lg lg:text-xl text-[#8a8a8e] max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: baseDelay + 1.2, duration: 0.6 }}
                    >
                        Des solutions d&apos;intelligence artificielle sur mesure pour automatiser,
                        optimiser et transformer votre entreprise.
                    </motion.p>

                    {/* Scroll indicator */}
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: baseDelay + 1.8, duration: 0.6 }}
                    >
                        <motion.div
                            className="w-6 h-10 rounded-full border border-[#3a3a3e] flex items-start justify-center p-2 mx-auto"
                            animate={{ borderColor: ["#3a3a3e", "#CEABC1", "#3a3a3e"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1 h-2 rounded-full bg-[#CEABC1]"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Pricing Cards */}
            <section className="min-h-screen snap-always snap-start relative px-6 lg:px-20 py-24 lg:py-32 flex items-center pointer-events-auto">
                <div className="max-w-7xl mx-auto w-full relative z-10 text-[#EAEAEC]">
                    {/* Section header */}
                    <motion.div
                        className="mb-16 lg:mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-[family-name:var(--font-dirtyline)] text-3xl lg:text-5xl text-[#EAEAEC] mb-4">
                            <AnimatedWord word="Forfaits" baseDelay={0} direction="left" />
                        </h2>
                        <p className="font-[family-name:var(--font-nohemi)] text-[#6a6a6e] max-w-xl">
                            Choisissez le forfait qui correspond à vos besoins.
                            Tous incluent une consultation gratuite pour évaluer votre projet.
                        </p>
                    </motion.div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {tiers.map((tier, index) => (
                            <TierCard key={tier.name} tier={tier} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Process */}
            <section className="min-h-screen snap-always snap-start relative px-6 lg:px-20 py-24 lg:py-32 bg-[#0a0a0c]/50 backdrop-blur-sm flex items-center pointer-events-auto">
                <div className="max-w-6xl mx-auto w-full relative z-10 text-[#EAEAEC]">
                    {/* Section header */}
                    <motion.div
                        className="mb-16 lg:mb-24 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-[family-name:var(--font-dirtyline)] text-3xl lg:text-5xl text-[#EAEAEC] mb-4">
                            <AnimatedWord word="Notre" baseDelay={0} direction="up" />
                            {" "}
                            <AnimatedWord word="Processus" baseDelay={0.3} direction="up" className="text-[#CEABC1]" />
                        </h2>
                    </motion.div>

                    {/* Process steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        <ProcessStep
                            number="01"
                            title="Consultation"
                            description="Nous analysons vos besoins et identifions les opportunités d'optimisation."
                            delay={0}
                        />
                        <ProcessStep
                            number="02"
                            title="Conception"
                            description="Nous architecturons une solution sur mesure adaptée à votre réalité."
                            delay={0.15}
                        />
                        <ProcessStep
                            number="03"
                            title="Développement"
                            description="Nous construisons et intégrons la solution à vos systèmes existants."
                            delay={0.3}
                        />
                        <ProcessStep
                            number="04"
                            title="Évolution"
                            description="Nous maintenons et optimisons continuellement votre solution."
                            delay={0.45}
                        />
                    </div>
                </div>
            </section>

            {/* Section 4: CTA */}
            <section className="h-screen min-h-screen snap-always snap-start relative px-6 lg:px-20 flex items-center justify-center pointer-events-auto">
                <div className="max-w-4xl mx-auto text-center relative z-10 text-[#EAEAEC]">
                    <motion.h2
                        className="font-[family-name:var(--font-dirtyline)] text-4xl lg:text-6xl text-[#EAEAEC] mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Prêt à{" "}
                        <span className="text-[#CEABC1]">transformer</span>
                        <br />
                        votre entreprise?
                    </motion.h2>

                    <motion.p
                        className="font-[family-name:var(--font-nohemi)] text-lg text-[#8a8a8e] mb-12 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Réservez une consultation gratuite et sans engagement.
                        Discutons de comment l&apos;IA peut propulser votre croissance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link href="/services/consulting/appointment">
                            <motion.button
                                className="font-[family-name:var(--font-nohemi)] text-sm tracking-wider uppercase px-12 py-5 rounded-xl border border-[#CEABC1] text-[#CEABC1] relative overflow-hidden group"
                                whileHover={{
                                    backgroundColor: "#CEABC1",
                                    color: "#0a0a0c"
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="relative z-10">Réserver ma consultation</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}