"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-[#333]" id="contact">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left: Contact Info */}
                <div className="md:w-1/3">
                    <span className="font-montserrat text-[#D4AF37] text-xs tracking-[0.3em] uppercase block mb-4">
                        Inquire
                    </span>
                    <h2 className="font-cormorant text-5xl md:text-6xl text-[#ededed] mb-8 leading-none">
                        Start Your <br />
                        Legacy
                    </h2>
                    <div className="space-y-6 font-montserrat text-[#a3a3a3] text-sm">
                        <p>
                            Ready to stop guessing and start building? This is a conversation about your future. Use it wisely.
                        </p>
                        <div className="pt-8 space-y-2">
                            <p className="text-[#ededed] uppercase tracking-widest text-xs">Email</p>
                            <a href="mailto:hello@lengalbert.com" className="block text-[#D4AF37] hover:underline">hello@lengalbert.com</a>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-2/3">
                    <form className="space-y-8">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#666]">Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-[#333] py-4 text-[#ededed] focus:border-[#D4AF37] outline-none transition-colors"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#666]">Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-[#333] py-4 text-[#ededed] focus:border-[#D4AF37] outline-none transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#666]">Message</label>
                            <textarea
                                className="w-full bg-transparent border-b border-[#333] py-4 text-[#ededed] focus:border-[#D4AF37] outline-none transition-colors h-32 resize-none"
                                placeholder="Tell us about your property goals"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-4 bg-[#D4AF37] text-[#050505] font-montserrat text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#b5952f] transition-colors"
                        >
                            Send Inquiry
                        </motion.button>
                    </form>
                </div>

            </div>
        </section>
    );
}
