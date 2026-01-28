"use client";

import { motion } from "framer-motion";

export default function FeaturedIn() {
    return (
        <section className="py-12 bg-[#050505] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="font-montserrat text-[#666] text-xs tracking-[0.2em] uppercase mb-10">
                    As Seen In
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-80 transition-opacity duration-500">

                    {/* Yahoo Finance Logo */}
                    <div className="h-8 md:h-10 w-auto flex items-center group">
                        <svg viewBox="0 0 200 60" className="h-full w-auto fill-current text-white group-hover:text-[#6001D2] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3,0L13.8,27L2,0H11.5L18.4,17.4L25.3,0H34.8L18.4,41.4V60H8.9V41.4L25.3,0Z" />
                            <text x="36" y="42" fontFamily="Arial" fontWeight="bold" fontSize="42" fill="currentColor">ahoo!</text>
                            <text x="165" y="42" fontFamily="Arial" fontSize="42" fill="currentColor">finance</text>
                        </svg>
                    </div>

                    {/* 99.co Logo - Simplified representation */}
                    <div className="h-8 md:h-10 w-auto flex items-center group">
                        <svg viewBox="0 0 100 40" className="h-full w-auto fill-current text-white group-hover:text-[#FF385C] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="32" fontFamily="Arial" fontWeight="bold" fontSize="36" fill="currentColor">99</text>
                            <text x="45" y="32" fontFamily="Arial" fontSize="36" fill="currentColor">.co</text>
                        </svg>
                    </div>

                    {/* Mediacorp Logo - Simplified representation */}
                    <div className="h-8 md:h-10 w-auto flex items-center group">
                        <span className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#00B9F2] transition-colors duration-300">
                            mediacorp
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
