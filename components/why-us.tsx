"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const features = [
    {
        id: "logic",
        title: "Data-Driven Logic",
        desc: "We analyze deep market trends to find undervalued assets that others miss.",
        image: "/blueprint-bg.png"
    },
    {
        id: "emotion",
        title: "Zero Emotion",
        desc: "Emotional buying is the wealth killer. We provide the objective framework you need.",
        image: "/blueprint-bg.png" // Could alternate images in future
    },
    {
        id: "exit",
        title: "The Exit Strategy",
        desc: "We never buy without knowing exactly how, when, and to whom we will sell.",
        image: "/blueprint-bg.png"
    },
    {
        id: "legacy",
        title: "Legacy Focus",
        desc: "Real estate isn't just about the next 5 years. It's about the next generation.",
        image: "/blueprint-bg.png"
    }
];

export default function WhyUs() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden" id="why-us">

            {/* Background Transition */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={features[activeFeature].image}
                            alt="Background"
                            fill
                            className="object-cover mix-blend-screen"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Header */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-montserrat text-[#D4AF37] text-xs tracking-[0.3em] uppercase block mb-6"
                    >
                        The Differentials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-cormorant text-5xl md:text-6xl text-[#ededed] leading-tight mb-8"
                    >
                        Why Clients <br />
                        <span className="italic text-[#888]">Trust The Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-montserrat text-[#a3a3a3] text-sm leading-relaxed max-w-md"
                    >
                        Our methodology is built on precision, not speculation. Explore the pillars that define our success rate.
                    </motion.p>
                </div>

                {/* Right Side: Interactive List */}
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onHoverStart={() => setActiveFeature(index)}
                            className={`group p-8 border-l border-white/10 hover:border-[#D4AF37] transition-all cursor-pointer ${activeFeature === index ? 'bg-white/5 border-[#D4AF37]' : ''}`}
                        >
                            <h3 className={`font-cormorant text-2xl transition-colors ${activeFeature === index ? 'text-[#D4AF37]' : 'text-white group-hover:text-white'}`}>
                                {feature.title}
                            </h3>
                            <div className={`overflow-hidden transition-all duration-500 ${activeFeature === index ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <p className="font-montserrat text-[#ccc] text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
