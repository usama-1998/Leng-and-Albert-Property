"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
    return (
        <section className="py-24 md:py-40 bg-[#080808] text-[#ededed] relative" id="story">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Text Content */}
                <div className="relative z-10 order-2 md:order-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-cormorant text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8"
                    >
                        Not just agents. <br />
                        <span className="text-[#D4AF37] italic">Wealth Architects.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 font-montserrat text-[#a3a3a3] text-sm md:text-base leading-relaxed"
                    >
                        <p>
                            The real estate market is noisy. Everyone promises results, but few understand the underlying mechanics of wealth preservation.
                        </p>
                        <p>
                            At Leng & Albert, we don't just facilitate transactions; we engineer portfolios. We look at the data that others ignore—the lease decay curves, the micro-market shifts, and the "exit liquidity" that determines whether you profit or stagnate.
                        </p>
                        <p className="text-[#ededed] font-medium pt-4 border-t border-[#333]">
                            "We treat your property journey as a business decision, not an emotional one."
                        </p>
                    </motion.div>
                </div>

                {/* Visual / Image */}
                <div className="relative order-1 md:order-2 h-[500px] md:h-[700px] w-full">
                    <div className="absolute inset-0 bg-[#121212] z-0 overflow-hidden">
                        {/* Placeholder for professional image - using abstract gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#0a0a0a]" />
                        <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.6 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 bg-[url('/brand-story.png')] bg-cover bg-center mix-blend-luminosity opacity-40 grayscale"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 border-l border-b border-[#D4AF37] z-20" />
                    <div className="absolute -top-8 -right-8 w-24 h-24 border-r border-t border-[#D4AF37]/30 z-20" />
                </div>

            </div>
        </section>
    );
}
