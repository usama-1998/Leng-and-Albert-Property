"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    const brands = [
        "CHANNEL NEWS ASIA",
        "YAHOO! FINANCE",
        "EDGEPROP SINGAPORE",
        "PROPNEX REALTY",
    ];

    return (
        <section className="py-16 md:py-24 border-y border-[#D4AF37]/10 bg-[#050505] overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-12 md:gap-32 items-center px-4"
                >
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className="flex items-center gap-12 md:gap-32">
                            <span className="text-3xl md:text-5xl lg:text-7xl font-cormorant text-[#2a2a2a] hover:text-[#D4AF37] transition-colors duration-500 font-medium tracking-tighter uppercase whitespace-nowrap cursor-default px-4">
                                {brand}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
