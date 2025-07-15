"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.header
            className="fixed z-50 w-full px-4 sm:px-[1%] py-2"
            initial={{
                background: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0))",
                backdropFilter: "blur(0px)"
            }}
            animate={{
                background: isScrolled
                    ? "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,0))"
                    : "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0))",
                backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)"
            }}
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence mode="wait">
                {isScrolled && (
                    <motion.div
                        className="absolute bottom-0 h-[1px] w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{opacity: 0}}
                        style={{
                            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)"
                        }}
                    />
                )}
            </AnimatePresence>
            
            <div className="container mx-auto flex justify-between items-center py-2 text-base sm:text-[20px]">
                {/* Logo Section */}
                <div className="flex items-center gap-2 sm:gap-5 font-bold">
                    <Image 
                        src='/logo.svg' 
                        className="w-8 sm:w-10 md:w-12" 
                        width={100} 
                        height={100} 
                        alt="Website logo" 
                    />
                    <span className="hidden sm:inline">My logo</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex px-2 sm:px-5 justify-between gap-5 sm:gap-10 text-sm sm:text-[18px] items-end border-b-2 border-[silver]/40">
                        {['Home', 'Projects', 'About', 'Contacts'].map((item) => (
                            <li 
                                key={item}
                                className="hover:text-[#C9F31D] transition-colors cursor-pointer whitespace-nowrap"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Contact Button */}
                <button className="hidden md:block bg-[#C9F31D] px-4 py-1 sm:px-6 sm:py-2 text-black text-sm sm:text-base font-medium hover:bg-[#b8e01a] transition-colors whitespace-nowrap">
                    Контакты
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-black/90 backdrop-blur-sm w-full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col items-center py-4 gap-4">
                            {['Home', 'Projects', 'About', 'Contacts'].map((item) => (
                                <motion.li
                                    key={item}
                                    className="text-white hover:text-[#C9F31D] transition-colors cursor-pointer text-lg"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                            <motion.li
                                className="mt-2"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <button className="bg-[#C9F31D] px-6 py-2 text-black font-medium hover:bg-[#b8e01a] transition-colors">
                                    Контакты
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};