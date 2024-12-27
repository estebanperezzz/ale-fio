"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion';
import { Typography } from "@/components/ui/typography";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    const ref = React.useRef(null);

    useEffect(() => {
        const targetDate = new Date('2025-02-08T19:00:00');
        
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
                return;
            }

            const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
            const horas = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((difference / 1000 / 60) % 60);
            const segundos = Math.floor((difference / 1000) % 60);

            setTimeLeft({ dias, horas, minutos, segundos });
        };

        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Card className="w-full border-none rounded-none bg-gradient-to-l from-[#A1B290] to-[#4E6E5D]">
            <CardContent className="p-12">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <Typography variant="h2" className="text-center text-[#EEEEEE] mb-8 font-georgia">
                            Bienvenidos a nuestra boda 😊
                        </Typography>
                    </motion.div>
                    <div className="flex justify-center space-x-12 text-[#EEEEEE]">
                        {Object.entries(timeLeft).map(([key, value]) => (
                            <motion.div key={key} className="text-center" variants={itemVariants}>
                                <Typography variant="h1" className="font-bold font-montserrat">{value}</Typography>
                                <Typography variant="h2" className="uppercase tracking-wider mt-2 font-montserrat">{key}</Typography>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </CardContent>
        </Card>
    );
}

