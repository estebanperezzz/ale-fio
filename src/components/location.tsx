"use client";
import { Scroll, GlassWater } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import React from 'react'
import Link from 'next/link';

export default function Location() {
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
                    className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants}>
                        <Card className="border-none bg-[#EEEEEE] shadow-none">
                            <CardHeader>
                                <Scroll className="w-20 h-20 mx-auto text-[#4E6E5D] mb-2" />
                                <Typography variant="h2" className="text-center text-[#203733] font-georgia">REGISTRO CIVIL</Typography>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2 text-[#4E6E5D] text-center text-xl">
                                    <Typography variant="p">07 de Febrero de 2025</Typography>
                                    <Typography variant="p">14:30 hs.</Typography>
                                    <Typography variant="p">Oficina 7</Typography>
                                    <Typography variant="small" className="italic">Recibí debajo las indicaciones para llegar.</Typography>
                                </div>
                                <Link href="https://maps.app.goo.gl/AjWPw17E3cSbWEe78" target='_blank'>
                                <AnimatedButton 
                                    variant="default"
                                    className="w-full bg-[#4e6e5d] hover:bg-[#445F51] mt-10 rounded-full shadow-xl text-xl h-full font-semibold"
                                >
                                    LLEGAR AL REGISTRO CIVIL
                                </AnimatedButton>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="border-none bg-[#EEEEEE] shadow-none">
                            <CardHeader>
                                <GlassWater className="w-20 h-20 mx-auto text-[#4E6E5D] mb-2" />
                                <Typography variant="h2" className="text-center text-[#203733] font-georgia">CEREMONIA Y FIESTA</Typography>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2 text-[#4E6E5D] text-center text-xl">
                                    <Typography variant="p">08 de Febrero de 2025</Typography>
                                    <Typography variant="p">19:00 hs.</Typography>
                                    <Typography variant="p">Chacra La Martina</Typography>
                                    <Typography variant="p">¡Te esperamos!</Typography>
                                </div>
                                <Link href="https://maps.app.goo.gl/SebZPSaugQC3tVvo7" target='_blank'>
                                <AnimatedButton 
                                    variant="default"
                                    className="w-full bg-[#4e6e5d] hover:bg-[#445F51] mt-6 rounded-full shadow-xl text-xl h-full font-semibold"
                                >
                                    LLEGAR A LA CHACRA
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

