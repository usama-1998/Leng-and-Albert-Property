"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
    { id: 1, year: "2024 (Ceremony for 2023)", image: "/Award 1.jpeg", details: ["Albert Tan: Rising Millionaire & Top Producer (224th Position)", "Leng Kar Yee: Top Associate Group Director (10th Position)"] },
    { id: 2, year: "2024", image: "/Award 2.jpeg", details: ["Albert Tan: Top Achiever (23rd Position)", "Leng Kar Yee: Top Achiever (74th Position) & Top Manager (1st Runner Up)"] },
    { id: 3, year: "2025", image: "/Award 3.jpeg", details: ["Albert Tan: Top Producer (77th Position)", "Leng Kar Yee: Top Producer & Top Associate Group Director (3rd Position)"] },
    { id: 4, year: "2025", image: "/Award 4.jpeg", details: ["Albert Tan: Platinum Achiever Award", "Leng Kar Yee: Individual Producer Certificate of Recognition"] },
    { id: 5, year: "2025 (Monthly - May)", image: "/Award 5.jpeg", details: ["Albert Tan: Top Commercial/Industrial Transactor (2nd Runner-Up)", "Albert Tan: Super Platinum Achiever", "Leng Kar Yee: Top Associate Group Director (1st Runner-Up)"] },
    { id: 6, year: "2025", image: "/Award 6.jpeg", details: ["Albert Tan: EdgeProp Realtors' Roundtable Member"] },
    { id: 7, year: "2026 (Annual Awards)", image: "/Award 7.jpeg", details: ["Leng Kar Yee: Top Producer & Top Associate Group Director"] },
    { id: 8, year: "2026 (Annual Awards)", image: "/Award 8.jpeg", details: ["Albert Tan: Rising Millionaire (Gala Awards) & Top Producer"] },
    { id: 9, year: "Recent Recognition", image: "/award 9.jpeg", details: ["Team Performance: Awarded for Outstanding Performance"] },
    { id: 10, year: "Recent Recognition", image: "/award 10.jpeg", details: ["Team Performance: Awarded for Outstanding Performance"] },
];

export default function Awards() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % awards.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + awards.length) % awards.length);
    };

    const activeAward = awards[activeIndex];

    // Animation variants for the elegant swiping effect
    const imageVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.98,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            zIndex: 0,
            x: dir < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.98,
        }),
    };

    return (
        <section className="bg-[#050505] relative w-full py-32 overflow-hidden border-t border-white/5">
            
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none z-0" />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-20">
                <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.3em] uppercase block mb-4">
                    Excellence Recognized
                </span>
                <h2 className="font-cormorant text-5xl md:text-6xl text-[#ededed]">
                    Award <span className="italic text-[#888]">Gallery</span>
                </h2>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-20">
                
                {/* 1. IMPRESSIVE IMAGE CAROUSEL BOX */}
                <div className="relative w-full h-[350px] md:h-[500px] bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-10 group">
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent z-0 pointer-events-none" />

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
                            className="absolute inset-0 z-10"
                        >
                            <Image
                                src={activeAward.image}
                                alt={`Award ${activeAward.year}`}
                                fill
                                className="object-contain p-4 md:p-8"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Left/Right Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors bg-black/50 backdrop-blur-md z-30 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Previous Award"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors bg-black/50 backdrop-blur-md z-30 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Next Award"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Modern fractional counter */}
                    <div className="absolute bottom-6 right-6 z-30 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 transition-opacity duration-300">
                        <span className="font-montserrat text-[#D4AF37] text-xs tracking-widest font-medium">
                            {activeIndex + 1} <span className="text-white/40">/ {awards.length}</span>
                        </span>
                    </div>

                    {/* Frame border reflection */}
                    <div className="absolute inset-0 border-2 border-white/5 rounded-3xl pointer-events-none z-20" />
                </div>

                {/* 2. ELEGANT BOTTOM TEXT REPRESENTATION */}
                <div className="w-full relative h-[180px] md:h-[150px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex flex-col items-center text-center px-4"
                        >
                            <div className="w-8 h-[1px] bg-[#D4AF37]/50 mb-6" />
                            <span className="font-montserrat text-[#D4AF37] text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4">
                                {activeAward.year}
                            </span>
                            
                            <div className="flex flex-col gap-2 max-w-3xl">
                                {activeAward.details.map((detail, i) => {
                                    const parts = detail.split(":");
                                    return (
                                        <p key={i} className="font-cormorant text-2xl md:text-3xl text-white leading-snug">
                                            {parts.length > 1 ? (
                                                <>
                                                    <span className="text-[#ededed]">{parts[0]}: </span>
                                                    <span className="italic text-[#a3a3a3] leading-snug">{parts[1]}</span>
                                                </>
                                            ) : (
                                                <span className="leading-snug">{detail}</span>
                                            )}
                                        </p>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
