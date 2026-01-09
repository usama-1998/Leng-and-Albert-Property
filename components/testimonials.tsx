"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "The strategic roadmap provided by Leng & Albert completely transformed our asset progression journey. We moved from a stagnating HDB to a dual-property portfolio in under 3 years.",
        author: "Sarah & David T.",
        role: "Property Investors",
    },
    {
        id: 2,
        quote: "Their analysis of the 'Decaying Lease' trap was an eye-opener. The data-driven approach gave us the confidence to execute a sell-one-buy-two strategy that we thought was impossible.",
        author: "Michael Chen",
        role: "Business Owner",
    },
    {
        id: 3,
        quote: "Luxury service with institutional-grade investment advice. They don't just sell homes; they architect wealth. The outcome has been life-changing for our family's legacy.",
        author: "Elena R.",
        role: "Private Client",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/testimonial-bg.png')] bg-cover bg-fixed opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <Quote className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-80" />
                    <h2 className="font-cormorant text-4xl md:text-5xl text-[#ededed]">
                        Client <span className="italic text-[#888]">Stories</span>
                    </h2>
                </motion.div>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    <motion.div
                        className="flex gap-12 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="w-[400px] flex-shrink-0 flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-sm hover:border-[#D4AF37]/50 transition-colors"
                            >
                                <p className="font-montserrat text-[#ccc] text-sm leading-8 italic mb-8 tracking-wide">
                                    "{item.quote}"
                                </p>
                                <div className="w-12 h-[1px] bg-[#D4AF37]/50 mb-4" />
                                <h4 className="font-cormorant text-xl text-white">{item.author}</h4>
                                <span className="font-montserrat text-[#666] text-[10px] tracking-[0.2em] uppercase mt-1">
                                    {item.role}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
