"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import React, { useRef, useEffect, useCallback } from 'react'
import { Player } from '@lordicon/react'
import DRESS_ICON from '../../public/dress.json'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function DressCode() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const dressIconRef = useRef<Player>(null);

    const playAnimationWithDelay = useCallback(() => {
        setTimeout(() => {
            dressIconRef.current?.playFromBeginning();
        }, 1000); // 5 seconds delay
    }, []);

    useEffect(() => {
        if (isInView) {
            dressIconRef.current?.playFromBeginning();
        }
    }, [isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full py-16 bg-[#EEEEEE]">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-2xl mx-auto"
                >
                    <motion.div variants={itemVariants}>
                        <Card className="border-none bg-[#EEEEEE] shadow-none">
                            <CardHeader>
                                <div className="flex justify-center mb-2">
                                    <Player 
                                        ref={dressIconRef}
                                        icon={DRESS_ICON}
                                        size={80}
                                        onComplete={playAnimationWithDelay}
                                    />
                                </div>
                                <Typography variant="h2" className="text-center text-[#203733] font-georgia">DRESS CODE</Typography>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2 text-[#4E6E5D] text-center text-xl">
                                    <Typography variant="p">Vestimenta formal</Typography>
                                    <Typography variant="p">Formal - Elegante</Typography>
                                    <Typography variant="small" className="italic">Más detalles a continuación.</Typography>
                                </div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <AnimatedButton 
                                            variant="default"
                                            className="w-full bg-[#4e6e5d] hover:bg-[#445F51] mt-10 rounded-full shadow-xl text-xl h-full font-semibold"
                                        >
                                            VER DETALLES
                                        </AnimatedButton>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>
                                                <Typography variant="h2" className="text-center text-[#203733] font-georgia">Dress Code</Typography>
                                            </DialogTitle>
                                        </DialogHeader>
                                        <div className="mt-4 space-y-4">
                                            <Typography variant="h3" className="text-[#4E6E5D] text-center">
                                                Vestimenta formal - elegante
                                            </Typography>
                                            <p className="text-lg text-center text-[#445F51]">
                                            Damas: Vestido largo, no blanco/beige Hombres: Traje, corbata/moño
                                            </p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

