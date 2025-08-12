"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";


export const useActiveSection = (sections: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
};



export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
  const activeSection = useActiveSection(sections, 100); // 100px offset

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    }
  };
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
                        exit={{ opacity: 0 }}
                        style={{
                            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)"
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="container mx-auto flex justify-between items-center py-2 text-base sm:text-[20px]">
                <div className="flex items-center gap-2 sm:gap-5 font-bold">
                    <Image
                        src='/logo.svg'
                        className="w-8 sm:w-10 md:w-12"
                        width={100}
                        height={100}
                        alt="Website logo"
                    />
                    <span className="hidden sm:inline">The Best Portfolio</span>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex px-2 sm:px-5 justify-between gap-5 sm:gap-10 text-sm sm:text-[18px] items-end border-b-2 border-[silver]/40">
                        {['home', 'about', 'skills', 'projects', 'contacts'].map((item) => (
                            <li
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`${activeSection === item ? 'text-[#C9F31D]' : ''
                                    } hover:text-[#C9F31D] transition-colors capitalize cursor-pointer whitespace-nowrap"`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

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

                <button className="hidden md:block bg-[#C9F31D] px-4 py-1 sm:px-6 sm:py-2 text-black text-sm sm:text-base font-medium hover:bg-[#b8e01a] transition-colors whitespace-nowrap">
                    Контакты
                </button>
            </div>

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
                            {['home', 'projects', 'about', 'contacts'].map((item) => (
                                <motion.li
                                    key={item}
                                    onClick={() => scrollToSection(item)}
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