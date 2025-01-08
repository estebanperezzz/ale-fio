"use client"

import React, { useRef, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Player } from '@lordicon/react'
import SONG_ICON from '../../public/song.json'

export default function SongSuggestions() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const songIconRef = useRef<Player>(null);

    const playAnimationWithDelay = useCallback(() => {
        setTimeout(() => {
            songIconRef.current?.playFromBeginning();
        }, 2000); // 5 seconds delay
    }, []);

    useEffect(() => {
        if (isInView) {
            songIconRef.current?.playFromBeginning();
        }
    }, [isInView]);

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
        <div className="w-full py-16 bg-gradient-to-l from-[#B76111] to-[#F1AB6A]">
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
                            <div className="flex justify-center mb-2">
                                <Player 
                                    ref={songIconRef}
                                    icon={SONG_ICON}
                                    size={96}
                                    onComplete={playAnimationWithDelay}
                                />
                            </div>
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
                                <Link href="https://open.spotify.com/playlist/5cTIOReeGXciB5hzz9TIY5?si=Gg6hlTVeTYm2ixUCrHZeWg&pt=fe04b0a5e8053a32db3ce82fc9fad4ee&pi=iGbV-7gtSmOqn" target="_blank" rel="noopener noreferrer">
                                    <AnimatedButton 
                                        variant="secondary"
                                        className="w-full bg-[#EEEEEE] hover:bg-[#D9D9D9] text-[#B76111] mt-10 rounded-full shadow-xl text-xl h-full font-semibold"
                                    >
                                        SUGERIR CANCIÓN
                                    </AnimatedButton>
                                </Link>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

