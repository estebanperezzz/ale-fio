"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from "@/components/ui/typography";
import { ChevronDown } from 'lucide-react';

const images = [
    "/_DSC5024.jpg",
    "/_DSC5008.jpg",
    "/_DSC5035.jpg",
    "/_DSC5047.jpg",
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt="Hero Image"
                        fill
                        priority
                        className="object-cover opacity-80"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-50" />
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center text-center text-[#EEEEEE] space-y-6"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        className="relative w-full h-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/flowers.svg"
                            alt="Flower Frame"
                            fill
                            className="object-cover md:rotate-0 rotate-180"
                            priority
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.7 }}
                                className="flex justify-center items-center"
                            >
                                <Image
                                    src="/logo.svg"
                                    alt="Ale y Fio"
                                    width={300}
                                    height={300}
                                    className="w-64 h-64 md:w-80 md:h-80 invert"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 2.2 }}
                                className="w-24 h-0.5 mx-auto bg-[#EEEEEE] my-4"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.7 }}
                            >
                                <Typography variant="h2" className="font-light tracking-widest font-montserrat text-2xl md:text-4xl">
                                    Bienvenidos a nuestro casamiento
                                </Typography>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Flowers-1 at bottom left */}
            <motion.div
                className="absolute -bottom-40 -left-40 w-[550px] h-[550px] md:w-48 md:h-48"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
            >
                <Image
                    src="/flowers-1.svg"
                    alt="Decorative Flowers 1"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Flowers-2 at top right */}
            <motion.div
                className="absolute -top-44 -right-44 w-[500px] h-[500px] md:w-48 md:h-48"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
            >
                <Image
                    src="/flowers-2.svg"
                    alt="Decorative Flowers 2"
                    fill
                    className="object-contain"
                />
            </motion.div>

            <motion.div 
                className="absolute bottom-8 left-0 right-0 flex justify-center items-center"
                initial={{ opacity: 0, y: 0 }}
                animate={{ 
                    opacity: [0, 1, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 2.5
                }}
            >
                <ChevronDown className="w-12 h-12 text-[#EEEEEE]" />
            </motion.div>
        </div>
    );
}

