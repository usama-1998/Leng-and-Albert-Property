"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
    {
        id: 1,
        title: "The Nassim Sanctuary",
        category: "Good Class Bungalow",
        price: "S$45,000,000",
        image: "/portfolio-1.png",
        span: "col-span-1 md:col-span-2",
    },
    {
        id: 2,
        title: "Skyline Collection",
        category: "Super Penthouse",
        price: "S$18,800,000",
        image: "/portfolio-2.png",
        span: "col-span-1",
    },
    {
        id: 3,
        title: "Marina Bay Suites",
        category: "Luxury Apartment",
        price: "S$12,500,000",
        image: "/portfolio-2.png", // Reusing for demo, ideally different
        span: "col-span-1",
    },
    {
        id: 4,
        title: "Emerald Hill Conservation",
        category: "Heritage Shophouse",
        price: "S$22,000,000",
        image: "/portfolio-1.png", // Reusing for demo
        span: "col-span-1 md:col-span-2",
    },
];

export default function Portfolio() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">
                        Curated Collection
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl text-[#ededed]">
                        Featured <span className="italic text-[#888]">Assets</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative h-[400px] overflow-hidden ${item.span} cursor-pointer`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="font-montserrat text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {item.category}
                                </span>
                                <h3 className="font-cormorant text-2xl text-white mb-2">{item.title}</h3>
                                <p className="font-montserrat text-white/60 text-xs">{item.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
