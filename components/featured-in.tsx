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
                    <div className="h-10 md:h-16 w-auto flex items-center justify-center grayscale-[30%] opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                        <img
                            src="/logos/yahoo.svg"
                            alt="Yahoo Finance"
                            className="h-full w-auto object-contain"
                        />
                    </div>

                    {/* 99.co Logo */}
                    <div className="h-10 md:h-16 w-auto flex items-center justify-center grayscale-[30%] opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                        <img
                            src="/logos/99co.svg"
                            alt="99.co"
                            className="h-full w-auto object-contain"
                        />
                    </div>

                    {/* Mediacorp Logo */}
                    <div className="h-14 md:h-24 w-auto flex items-center justify-center grayscale-[30%] opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                        <img
                            src="/logos/mediacorp.svg"
                            alt="Mediacorp"
                            className="h-full w-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
