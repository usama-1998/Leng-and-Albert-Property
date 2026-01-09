"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
    {
        id: 1,
        title: "Bishan Loft Exec Maisonette",
        category: "HDB Executive",
        price: "Sold above valuation",
        image: "/track-record-1.png",
    },
    {
        id: 2,
        title: "Pinnacle @ Duxton",
        category: "5-Room Premium",
        price: "Record Price",
        image: "/track-record-2.png",
    },
    {
        id: 3,
        title: "Queenstown SkyVille",
        category: "4-Room High Floor",
        price: "Cash Over Valuation",
        image: "/track-record-2.png",
    },
    {
        id: 4,
        title: "Tampines GreenRidges",
        category: "5-Room Improved",
        price: "Sold within 2 weeks",
        image: "/track-record-1.png",
    },
];

const trackRecordItems = [...portfolioItems, ...portfolioItems, ...portfolioItems]; // Tripling for smooth loop

export default function Portfolio() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">
                        Proven Results
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl text-[#ededed] mb-6">
                        Track <span className="italic text-[#888]">Record</span>
                    </h2>
                    <p className="font-montserrat text-white/60 text-sm max-w-xl">
                        We have helped clients transact over <span className="text-[#D4AF37]">S$500M+</span> worth of real estate, consistently identifying undervalued assets and exiting at peak performance.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                >
                    {trackRecordItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative w-[350px] md:w-[450px] h-[300px] flex-shrink-0 group overflow-hidden border border-white/5 rounded-sm"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <span className="font-montserrat text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase block mb-1">
                                    {item.category}
                                </span>
                                <h3 className="font-cormorant text-xl text-white mb-1">{item.title}</h3>
                                <p className="font-montserrat text-white/60 text-[10px] uppercase tracking-wider">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
