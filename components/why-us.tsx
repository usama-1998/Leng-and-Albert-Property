"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
    {
        title: "Logic Over Emotion",
        number: "01",
        desc: "We strip away the emotional bias. Every recommendation is backed by 20+ years of market data overlap, ensuring your 'dream home' is also a fortress for your wealth.",
        image: "/blueprint-bg.png"
    },
    {
        title: "The Exit Strategy",
        number: "02",
        desc: "Most buy hoping to stay forever. We buy knowing when to sell. We engineer your exit liquidity before you even sign the option.",
        image: "/blueprint-bg.png"
    },
    {
        title: "Legacy Architecture",
        number: "03",
        desc: "It's not just about one property. It's about structuring a portfolio that compounds, creating a generational safety net for your children.",
        image: "/blueprint-bg.png" // Reusing asset for consistency
    }
];

export default function WhyUs() {
    return (
        <section className="bg-[#050505] py-32 relative" id="why-us">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-24 text-center">
                    <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.3em] uppercase block mb-4">
                        The Methodology
                    </span>
                    <h2 className="font-cormorant text-5xl md:text-6xl text-[#ededed]">
                        Why Clients <span className="italic text-[#666]">Trust Us</span>
                    </h2>
                </div>

                {/* Sticky Scroll Container */}
                <div className="flex flex-col gap-32">
                    {features.map((item, i) => (
                        <StickyCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StickyCard({ item, index }: { item: any; index: number }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className="sticky top-32 min-h-[500px] w-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
            {/* Visual Side */}
            <div className="relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/10 group">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center font-montserrat text-[#D4AF37] text-sm font-bold">
                    {item.number}
                </div>
            </div>

            {/* Content Side */}
            <div className="p-12 flex flex-col justify-center relative">
                {/* Decorative background number */}
                <span className="absolute top-4 right-8 font-cormorant text-[120px] text-white/5 font-bold leading-none select-none">
                    {item.number}
                </span>

                <h3 className="font-cormorant text-4xl text-white mb-6 relative z-10">
                    {item.title}
                </h3>
                <p className="font-montserrat text-[#a3a3a3] text-sm leading-8 relative z-10">
                    {item.desc}
                </p>

                <div className="mt-8 relative z-10">
                    <div className="w-16 h-[1px] bg-[#D4AF37]" />
                </div>
            </div>
        </motion.div>
    )
}
