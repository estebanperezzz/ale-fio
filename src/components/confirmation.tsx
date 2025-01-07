"use client"

import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import { motion, useInView } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

export default function Confirmation() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

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
                                <CheckCircle className="w-20 h-20 mx-auto text-[#B76111] mb-2" />
                                <Typography variant="h2" className="text-center text-[#203733] font-georgia">
                                    CONFIRMACIÓN DE ASISTENCIA
                                </Typography>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2 text-[#B76111] text-center text-xl">
                                    <Typography variant="p">
                                        Esperamos que seas parte de esta gran celebración.
                                    </Typography>
                                    <Typography variant="p">
                                        ¡Confirmanos tu asistencia!
                                    </Typography>
                                    <Typography variant="p">
                                        Confirmar asistencia antes del 27/01/2025
                                    </Typography>
                                </div>
                                <Link href="http://wa.me/59895349057" target='_blank' rel="noopener noreferrer">
                                    <AnimatedButton 
                                        variant="default"
                                        className="w-full bg-[#B76111] hover:bg-[#96410C] mt-5 rounded-full shadow-xl text-xl h-full font-semibold"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            CONFIRMAR ASISTENCIA
                                        </span>
                                    </AnimatedButton>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

