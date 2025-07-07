"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (

            <motion.header
                className="fixed z-10 w-full px-[1%] py-2"
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
                <div className="container m-auto flex justify-between items-center pt-2 text-[20px]">
                    <div className="flex items-center gap-5 font-bold">
                        <Image src='/logo.svg' className="w-[15%]" width={100} height={100} alt="bg-image" />
                        My logo
                    </div>

                    <nav>
                        <ul className="flex w-[100%] px-5 justify-between gap-10 text-[18px] items-end border-b-2 border-[silver]/40">
                            <li className="hover:text-[#C9F31D] transition-colors cursor-pointer">Home</li>
                            <li className="hover:text-[#C9F31D] transition-colors cursor-pointer">Project</li>
                            <li className="hover:text-[#C9F31D] transition-colors cursor-pointer">About</li>
                            <li className="hover:text-[#C9F31D] transition-colors cursor-pointer">Contacts</li>
                        </ul>
                    </nav>

                    <button className="bg-[#C9F31D] px-6 py-2 text-black font-medium hover:bg-[#b8e01a] transition-colors">
                        Контакты
                    </button>
                </div>
            </motion.header>

    );
};