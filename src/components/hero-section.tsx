"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from "@/components/ui/typography";
import { ChevronDown } from 'lucide-react';

const images = [
    '/PrebodaAle&Fio(100).jpg',
    '/PrebodaAle&Fio(11).jpg',
    '/PrebodaAle&Fio(112).jpg',
    '/PrebodaAle&Fio(127).jpg',
    '/PrebodaAle&Fio(152).jpg',
    '/PrebodaAle&Fio(153).jpg',
    '/PrebodaAle&Fio(169).jpg',
    '/PrebodaAle&Fio(174).jpg',
    '/PrebodaAle&Fio(181).jpg',
    '/PrebodaAle&Fio(188).jpg',
    '/PrebodaAle&Fio(19).jpg',
    '/PrebodaAle&Fio(28).jpg',
    '/PrebodaAle&Fio(32).jpg',
    '/PrebodaAle&Fio(36).jpg',
    '/PrebodaAle&Fio(47).jpg',
    '/PrebodaAle&Fio(49).jpg',
    '/PrebodaAle&Fio(5).jpg',
    '/PrebodaAle&Fio(64).jpg',
    '/PrebodaAle&Fio(73).jpg',
    '/PrebodaAle&Fio(89).jpg',
    '/PrebodaAle&Fio(96).jpg'
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
                        quality={100}
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
                                className="max-w-2xl mx-auto"
                            >
                                <Typography variant="h3" className="font-light tracking-wide font-montserrat text-xl md:text-2xl lg:text-3xl mb-4">
                                    &quot;Todo lo que es bueno y perfecto es un regalo que viene de parte de Dios, quien creó todas las luces de los cielos.&quot;
                                </Typography>
                                <Typography variant="h3" className="font-light italic tracking-wide font-montserrat text-lg md:text-xl lg:text-2xl">
                                    Santiago 1:17
                                </Typography>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
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

