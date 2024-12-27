"use client"

import React from 'react'
import { Music } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import { motion, useInView } from 'framer-motion'

export default function SongSuggestions() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

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
        <div className="w-full py-16 bg-gradient-to-r from-[#A1B290] to-[#203733]">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-2xl mx-auto"
                >
                    <Card className="border-none bg-transparent shadow-none">
                        <CardHeader>
                            <Music className="w-20 h-20 mx-auto text-[#EEEEEE] mb-2" />
                            <Typography variant="h2" className="text-center text-[#EEEEEE] font-georgia">
                                ¿QUÉ CANCIONES NO PUEDEN FALTAR?
                            </Typography>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <motion.div variants={itemVariants}>
                                <Typography variant="p" className="text-center text-[#EEEEEE] text-xl font-montserrat">
                                    ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
                                </Typography>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <AnimatedButton 
                                    variant="secondary"
                                    className="w-full bg-[#EEEEEE] hover:bg-[#D9D9D9] text-[#4E6E5D] mt-10 rounded-full shadow-xl text-xl h-full font-semibold"
                                >
                                    SUGERIR CANCIÓN
                                </AnimatedButton>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

