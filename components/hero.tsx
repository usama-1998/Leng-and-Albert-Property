"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Modal from "@/components/ui/modal";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] w-full overflow-hidden bg-[#050505] flex flex-col justify-center items-center"
        >
            {/* Background with Zoom Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Darker gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505] z-10" />
                <motion.div
                    style={{ scale: scaleBg }}
                    className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-50"
                />
            </div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-montserrat text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] mb-6 uppercase"
                >
                    Real Estate Wealth Strategy
                </motion.span>

                <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#ededed] leading-[0.9] mb-8 mix-blend-difference">
                    BUILDING <br />
                    <span className="italic font-normal text-[#999]">GENERATIONAL</span> <br />
                    WEALTH
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-montserrat text-[#a3a3a3] text-sm md:text-base max-w-lg tracking-wide leading-relaxed mb-12"
                >
                    We help HDB owners navigate the "Decaying Lease" trap and execute the Six Box Concept for long-term asset growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 items-center mb-16"
                >
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="px-8 py-4 bg-[#D4AF37] text-[#050505] font-montserrat text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#b5952f] transition-all hover:scale-105 cursor-pointer"
                    >
                        Book Consultation
                    </button>

                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="group flex items-center gap-4 text-[#ededed] hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
                            <Play size={16} fill="currentColor" className="ml-1" />
                        </div>
                        <span className="font-montserrat text-xs tracking-[0.2em] uppercase">Our Story</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Lead Gen Modal */}
            <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
                <div className="text-center mb-8">
                    <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">Connect</span>
                    <h2 className="text-3xl font-cormorant text-white mt-2">Begin The Transformation</h2>
                </div>
                <form className="space-y-6">
                    <div>
                        <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none placeholder:text-white/20 font-montserrat text-sm" />
                    </div>
                    <div>
                        <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none placeholder:text-white/20 font-montserrat text-sm" />
                    </div>
                    <div>
                        <input type="tel" placeholder="PHONE" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none placeholder:text-white/20 font-montserrat text-sm" />
                    </div>
                    <button className="w-full py-4 bg-[#D4AF37] text-black font-montserrat text-xs font-bold tracking-[0.2em] uppercase mt-4 hover:bg-[#b5952f] transition-colors">
                        Request Consultation
                    </button>
                </form>
            </Modal>

            {/* Video Modal */}
            <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} className="max-w-5xl">
                <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                    {/* Placeholder for video embedding */}
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/-ygJ9GyQW6g?autoplay=1"
                        title="Leng & Albert Introduction"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </section>
    );
}
