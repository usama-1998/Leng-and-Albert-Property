"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const navLinks = [
    { name: "Strategy", href: "#strategy" },
    { name: "Brand Story", href: "#story" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <AnimatePresence>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-colors duration-300",
                    isScrolled || isMobileMenuOpen ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                )}
            >
                <Link href="/" className="z-50" onClick={closeMenu}>
                    {/* Logo Text - Minimalist */}
                    <span className="font-cormorant text-2xl font-bold tracking-widest text-white">
                        LENG & ALBERT
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-montserrat text-xs tracking-[0.2em] text-[#ededed] hover:text-[#D4AF37] transition-colors uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2 border border-[#ededed]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#ededed] hover:text-[#D4AF37] text-xs tracking-widest uppercase transition-all duration-300"
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Menu Icon (Simple Hamburger) */}
                <button 
                    className="md:hidden text-white z-50 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6H22M2 12H22M2 18H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="font-cormorant text-4xl text-[#ededed] hover:text-[#D4AF37] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={closeMenu}
                                className="px-8 py-3 border border-[#ededed]/30 text-[#ededed] text-sm tracking-widest uppercase mt-8"
                            >
                                Book Consultation
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </AnimatePresence>
    );
}
