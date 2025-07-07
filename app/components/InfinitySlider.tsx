"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

interface InfiniteSliderProps {
    words: string[];
    speed?: number;
    className?: string;
    wordClassName?: string;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
    words,
    speed = 1,
    className = '',
    wordClassName = 'text-[100px] font-medium text-white'
}) => {
    const [currentWords, setCurrentWords] = useState([...words, ...words]);
    const controls = useAnimationControls();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);
    const itemRef = useRef<HTMLDivElement>(null);

    // Измеряем ширину одного элемента
    useEffect(() => {
        if (itemRef.current) {
            const width = itemRef.current.offsetWidth;
            setItemWidth(width);
        }
    }, [words]);

    // Запускаем анимацию
    useEffect(() => {
        if (itemWidth === 0) return;

        const totalWidth = itemWidth * words.length;
        const duration = totalWidth / (speed * 100);

        controls.start({
            x: [-totalWidth, 0],
            transition: {
                x: {
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }
            }
        });
    }, [itemWidth, speed, controls, words.length]);

    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <div ref={sliderRef} className="relative w-full">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={controls}
                >
                    {currentWords.map((word, index) => (
                        <div 
                            key={`word-${index}`}
                            ref={index === 0 ? itemRef : null}
                            className={`${wordClassName} flex items-center`}
                        >
                            <div>{word}</div>
                            <div className='w-[50px] mx-15'><Image src='/plus.svg' className="w-full h-full drop-shadow-plus" width={100} height={100} alt="image" /></div>
                        </div>


                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteSlider;