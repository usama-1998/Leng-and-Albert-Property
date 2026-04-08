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

            <div className="max-w-4xl mx-auto flex flex-col gap-24 relative items-center">

                {/* Section Header */}
                <div className="w-full text-center flex flex-col items-center z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
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
                        Simplicity <span className="text-[#333]">in </span> Strategy
                    </motion.h2>
                    <p className="font-montserrat text-[#a3a3a3] text-sm md:text-base leading-relaxed max-w-xl text-center">
                        Our Six Box Theory is designed to strip away complexity and focus on the three moves that actually move the needle.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative w-full pt-10">
                    {/* Background line */}
                    <div className="absolute left-1/2 top-0 bottom-[-100px] w-[1px] bg-[#22] transform -translate-x-1/2 z-0" />
                    
                    {/* Golden progress line wrapper */}
                    <div className="absolute left-1/2 top-0 bottom-[-100px] w-[2px] transform -translate-x-1/2 z-10 overflow-hidden">
                        <motion.div
                            style={{ height }}
                            className="w-full h-full origin-top bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                        />
                    </div>

                    <div className="flex flex-col gap-24 md:gap-32 relative z-20">
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative flex flex-col items-center text-center w-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 p-10 md:p-14 max-w-[600px] mx-auto rounded-3xl z-20"
        >
            {/* Timeline Dot connecting to the center line */}
            <div className="absolute left-1/2 -top-4 w-8 h-8 bg-[#050505] rounded-full transform -translate-x-1/2 border border-[#D4AF37]/50 flex items-center justify-center z-30 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500">
                 <div className="w-2 h-2 bg-[#D4AF37] rounded-full group-hover:scale-150 transition-transform duration-500" />
            </div>

            {/* Giant Background Number */}
            <span className="absolute text-[#333] font-cormorant text-[120px] md:text-[180px] opacity-[0.03] select-none pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-[0.08] transition-opacity duration-500">
                {step.number}
            </span>

            <h3 className="font-cormorant text-4xl md:text-5xl text-[#ededed] mb-1 group-hover:text-[#D4AF37] transition-colors duration-300 relative z-10 mt-2">
                {step.title}
            </h3>
            <h4 className="font-montserrat text-xs md:text-sm tracking-widest uppercase text-[#999] mb-6 relative z-10">
                {step.subtitle}
            </h4>

            <p className="font-montserrat text-[#cccccc] text-sm md:text-base leading-relaxed max-w-sm relative z-10">
                {step.description}
            </p>
        </motion.div>
    );
}
