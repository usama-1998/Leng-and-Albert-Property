"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder data for logos. In a real scenario, you would import actual logo assets.
// Since I don't have the Yahoo logo asset yet, I will use a placeholder approach for now 
// or I can try to use a text representation if the image isn't available, 
// but the prompt asked for a Yahoo logo. 
// I'll assume we might not have the file, so I will prepare a structure 
// that can easily accept the image. For now I'll use a placeholder text/SVG.

const logos = [
    {
        name: "Yahoo Finance",
        // Using a direct URL or local path. Assuming we don't have the file yet, 
        // I will use a placeholder or public URL if appropriate, 
        // but for safety in this environment I'll stick to a text/simple SVG representation 
        // or a placeholder path that the user can replace.
        // Actually, often these projects have an assets folder. I'll check if I can find one later.
        // For now, I'll creates a text-based placeholder that looks like a logo.
        src: "/yahoo-logo.png",
        alt: "Yahoo",
        isImage: false // Flag to switch between image and text/svg for this demo
    }
];

export default function FeaturedIn() {
    return (
        <section className="py-12 bg-[#050505] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="font-montserrat text-[#666] text-xs tracking-[0.2em] uppercase mb-8">
                    Featured In
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* 
                      Start with just Yahoo as requested. 
                      I will render a text style for Yahoo if no image is present 
                      to ensure it looks decent immediately.
                   */}

                    <div className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tighter">
                        yahoo<span className="text-[#D4AF37] text-4xl">!</span>
                    </div>

                    {/* Add more logos here as needed */}
                </div>
            </div>
        </section>
    );
}
