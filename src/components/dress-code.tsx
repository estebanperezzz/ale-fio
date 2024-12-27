"use client"

import { Shirt } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import React from 'react'
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

    const colors = [
        { hex: '#b76111', name: 'Terracotta' },
        { hex: '#96410C', name: 'Rust' },
        { hex: '#A1B290', name: 'Sage' },
        { hex: '#4E6E5D', name: 'Forest' },
        { hex: '#203733', name: 'Dark Green' },
    ]

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
                                <Shirt className="w-20 h-20 mx-auto text-[#4E6E5D] mb-2" />
                                <Typography variant="h2" className="text-center text-[#203733] font-georgia">DRESS CODE</Typography>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2 text-[#4E6E5D] text-center text-xl">
                                    <Typography variant="p">Vestimenta formal</Typography>
                                    <Typography variant="p">Elegante</Typography>
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
                                                Vestimenta formal, elegante
                                            </Typography>
                                            <p className="text-lg text-center text-red-500">
                                            * Chicas no blanco
                                            </p>
                                            <Typography variant="h4" className="text-center text-[#203733] font-georgia mt-6">Paleta de Colores Sugerida</Typography>
                                            <div className="flex justify-center space-x-4 mt-4">
                                                {colors.map((color) => (
                                                    <div key={color.hex} className="flex flex-col items-center">
                                                        <div 
                                                            className="w-10 h-10 rounded-full" 
                                                            style={{ backgroundColor: color.hex }}
                                                        ></div>
                                                        <Typography variant="small" className="text-[#4E6E5D] mt-1 font-semibold">{color.name}</Typography>
                                                    </div>
                                                ))}
                                            </div>
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

