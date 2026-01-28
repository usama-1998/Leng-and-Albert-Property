"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { clsx } from "clsx";

const steps = [
    {
        title: "The Exit",
        subtitle: "Selling High",
        description: "Identifying the precise moment your HDB value peaks to maximize cash out.",
        number: "01"
    },
    {
        title: "The Upgrade",
        subtitle: "Buying Right",
        description: "Transitioning to a property with superior growth potential and lower depreciation risk.",
        number: "02"
    },
    {
        title: "The Legacy",
        subtitle: "Compounding Wealth",
        description: "Reinvest your profits or hold for passive income. The goal is generational security.",
        number: "03"
    }
];

export default function StrategySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] relative overflow-hidden" id="strategy">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 relative">

                {/* Section Header */}
                <div className="md:w-1/3 text-left md:sticky md:top-32 h-fit">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-montserrat text-[#D4AF37] text-xs tracking-[0.3em] uppercase block mb-6"
                    >
                        Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-cormorant text-5xl md:text-7xl text-[#ededed] mb-8 leading-none"
                    >
                        Simplicity <br />
                        <span className="text-[#333]">in </span>
                        Strategy
                    </motion.h2>
                    <p className="font-montserrat text-[#a3a3a3] text-sm leading-relaxed max-w-xs">
                        Our Six Box Theory is designed to strip away complexity and focus on the three moves that actually move the needle.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="md:w-2/3 relative pl-8 md:pl-20 border-l border-[#333]">
                    {/* Golden progress line */}
                    <motion.div
                        style={{ height }}
                        className="absolute left-[-1px] top-0 w-[2px] bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10"
                    />

                    <div className="flex flex-col gap-32 relative">
                        {steps.map((step, index) => (
                            <StrategyCard key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function StrategyCard({ step, index }: { step: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative pl-4 md:pl-0"
        >
            <span className="absolute -left-[calc(2rem_+_10px)] md:-left-[calc(5rem_+_1px)] top-0 md:top-2 text-[#333] font-cormorant text-6xl md:text-8xl opacity-20 select-none group-hover:text-[#D4AF37]/20 transition-colors duration-500">
                {step.number}
            </span>

            <h3 className="font-cormorant text-4xl md:text-5xl text-[#ededed] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300 relative z-10">
                {step.title}
            </h3>
            <h4 className="font-montserrat text-sm tracking-widest uppercase text-[#999] mb-6 relative z-10">
                {step.subtitle}
            </h4>

            <p className="font-montserrat text-[#cccccc] text-sm md:text-base leading-relaxed max-w-md relative z-10">
                {step.description}
            </p>
        </motion.div>
    );
}
