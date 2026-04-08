"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Extracted from user URLs
const videoIds = [
    "d-lX-Im9Wfs",
    "WAhqIURfbuo",
    "wFmbRN1Udog",
    "ubuuzzos_HU",
    "SX-ihT0l5JU",
    "UZgX58-fPqA",
    "2goyawKmPjM",
    "MHRbIiOuLgs",
    "mnejl33kCJk",
    "43e0ajZNK8U",
];

export default function VideoTestimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 380 : 300;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
            {/* Background glowing effects to match theme */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none transform -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-6 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">
                            Real Experiences
                        </span>
                        <h2 className="font-cormorant text-4xl md:text-5xl text-[#ededed]">
                            Client <span className="italic text-[#888]">Journeys</span>
                        </h2>
                    </div>
                    <div className="flex gap-4 items-center mb-2 z-30">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors bg-white/5"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors bg-white/5"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="relative w-full max-w-[1500px] mx-auto pl-6 md:pl-10 lg:pl-[max(1.5rem,calc((100vw-1400px)/2))]">
                {/* Fade edges */}
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

                {/* Video Carousel */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-16 pt-8 pr-[20%] z-10 relative"
                >
                    {videoIds.map((id, index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5) }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative flex-none w-[280px] md:w-[320px] lg:w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden snap-center group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 hover:border-[#D4AF37]/40 hover:-translate-y-4 transition-all duration-500 bg-[#000]"
                        >
                            {/* Inner golden glow that appears on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                            
                            <iframe
                                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
                                title={`Client Testimonial ${index + 1}`}
                                className="w-full h-full object-cover z-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            
                            {/* Elegant glassmorphic border framing */}
                            <div className="absolute inset-0 border-2 border-white/5 group-hover:border-[#D4AF37]/20 rounded-[2rem] pointer-events-none transition-colors duration-500 z-20" />
                            <div className="absolute inset-4 border border-white/5 rounded-xl pointer-events-none opacity-50 z-20" />
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Custom CSS to hide scrollbar while preserving swipe/scroll capability */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
