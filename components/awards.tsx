"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
    { id: 1, year: "2024 (Ceremony for 2023)", image: "/Award 1.jpeg", details: ["Albert Tan: Rising Millionaire & Top Producer (224th Position)", "Leng Kar Yee: Top Associate Group Director (10th Position)"] },
    { id: 2, year: "2024", image: "/Award 2.jpeg", details: ["Albert Tan: Top Achiever (23rd Position)", "Leng Kar Yee: Top Achiever (74th Position) & Top Manager (1st Runner Up)"] },
    { id: 3, year: "2025", image: "/Award 3.jpeg", details: ["Albert Tan: Top Producer (77th Position)", "Leng Kar Yee: Top Producer & Top Associate Group Director (3rd Position)"] },
    { id: 4, year: "2025", image: "/Award 4.jpeg", details: ["Albert Tan: Platinum Achiever Award", "Leng Kar Yee: Individual Producer Certificate of Recognition"] },
    { id: 5, year: "2025 (Monthly - May)", image: "/Award 5.jpeg", details: ["Albert Tan: Top Commercial/Industrial Transactor (2nd Runner-Up)", "Albert Tan: Super Platinum Achiever", "Leng Kar Yee: Top Associate Group Director (1st Runner-Up)"] },
    { id: 6, year: "2025", image: "/Award 6.jpeg", details: ["Albert Tan: EdgeProp Realtors' Roundtable Member"] },
    { id: 7, year: "2026 (Annual Awards)", image: "/Award 7.jpeg", details: ["Leng Kar Yee: Top Producer & Top Associate Group Director"] },
    { id: 8, year: "2026 (Annual Awards)", image: "/Award 8.jpeg", details: ["Albert Tan: Rising Millionaire (Gala Awards) & Top Producer"] },
];
export default function Awards() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background glowing effects to match theme */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">
                            Excellence Recognized
                        </span>
                        <h2 className="font-cormorant text-4xl md:text-5xl text-[#ededed]">
                            Award <span className="italic text-[#888]">Gallery</span>
                        </h2>
                    </div>
                    <p className="font-montserrat text-white/60 text-sm max-w-sm md:text-right pb-1">
                        A testament to our unwavering dedication, expertise, and commitment to delivering exceptional results for our clients.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                {/* Desktop view: Expanding Cards */}
                <div className="hidden md:flex w-full h-[500px] gap-2 lg:gap-4">
                    {awards.map((award, index) => {
                        const isHovered = hoveredIndex === index;
                        const hasHoveredItem = hoveredIndex !== null;
                        
                        return (
                            <motion.div
                                key={award.id}
                                className="relative rounded-md overflow-hidden bg-[#050505] cursor-pointer group"
                                animate={{
                                    width: isHovered 
                                        ? "40%" 
                                        : hasHoveredItem 
                                            ? "10%" 
                                            : `${100 / awards.length}%`
                                }}
                                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                
                                <Image
                                    src={award.image}
                                    alt={`Award ${award.year}`}
                                    fill
                                    className={
                                        (award.id === 7 || award.id === 8) && isHovered
                                            ? "object-contain"
                                            : "object-cover"
                                    }
                                />

                                {/* Dark gradient at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                
                                {/* Content revealing on hover */}
                                <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex flex-col justify-end">
                                    <span className="font-montserrat text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase block mb-2">
                                        {award.year}
                                    </span>
                                    <div className="flex flex-col gap-1 mb-3">
                                        {award.details.map((detail, i) => (
                                            <p key={i} className="font-cormorant text-lg lg:text-xl text-white leading-snug">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="h-[1px] w-12 bg-[#D4AF37] mb-2" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile view: Masonry / Grid */}
                <div className="md:hidden grid grid-cols-2 gap-4">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-md overflow-hidden h-[200px] col-span-1"
                        >
                            <Image
                                src={award.image}
                                alt={`Award ${award.year}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 p-4 z-20 w-full flex flex-col justify-end h-full mt-auto">
                                <span className="font-montserrat text-[#D4AF37] text-[9px] tracking-[0.1em] uppercase block mb-1">
                                    {award.year}
                                </span>
                                <div className="flex flex-col gap-1">
                                    {award.details.map((detail, i) => (
                                        <p key={i} className="font-cormorant text-[13px] leading-tight text-white drop-shadow-md">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
