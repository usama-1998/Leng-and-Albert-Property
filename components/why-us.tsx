"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

const features = [
    {
        title: "Data-Driven Logic",
        desc: "We don't guess. We analyze deep market trends to find undervalues.",
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-neutral-900"
    },
    {
        title: "Zero Emotion",
        desc: "Emotional buying is the wealth killer. We keep you objective.",
        colSpan: "col-span-1",
        bg: "bg-[#121212]"
    },
    {
        title: "The Exit First",
        desc: "We never buy without knowing how and when we will sell.",
        colSpan: "col-span-1",
        bg: "bg-[#121212]"
    },
    {
        title: "Legacy Focus",
        desc: "It's not about the next 5 years. It's about the next generation.",
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-neutral-900"
    },
];

export default function WhyUs() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#050505]" id="why-us">
            <div className="max-w-6xl mx-auto">

                <div className="mb-16 text-center">
                    <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.3em] uppercase">The Differentials</span>
                    <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#ededed] mt-4">Why Clients Trust The Process</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    <div className="absolute inset-0 bg-[url('/detail-bg.png')] opacity-5 z-0 pointer-events-none mix-blend-overlay" />
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={clsx(
                                "p-8 md:p-12 relative overflow-hidden group border border-[#222] hover:border-[#D4AF37]/50 transition-colors duration-500",
                                item.colSpan,
                                item.bg
                            )}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="w-8 h-8 rounded-full border border-white" />
                            </div>

                            <h3 className="font-cormorant text-2xl md:text-3xl text-white mb-4 relative z-10">
                                {item.title}
                            </h3>
                            <p className="font-montserrat text-[#a3a3a3] text-sm relative z-10">
                                {item.desc}
                            </p>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
