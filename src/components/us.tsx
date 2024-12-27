'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Typography } from "@/components/ui/typography"

const images = [
    '/_DSC4997.jpg',
    '/_DSC4998.jpg',
    '/_DSC5008.jpg',
    '/_DSC5009.jpg',
    '/_DSC5012.jpg',
    '/_DSC5019.jpg',
    '/_DSC5021.jpg',
    '/_DSC5024.jpg',
    '/_DSC5032.jpg',
    '/_DSC5034.jpg',
    '/_DSC5035.jpg',
    '/_DSC5039.jpg',
    '/_DSC5040.jpg',
    '/_DSC5043.jpg',
    '/_DSC5046.jpg',
    '/_DSC5047.jpg'
]

export default function Us() {
    // eslint-disable-next-line
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [visibleImages, setVisibleImages] = useState(images.slice(0, 8))

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length
                const newVisibleImages = []
                for (let i = 0; i < 8; i++) {
                    newVisibleImages.push(images[(nextIndex + i) % images.length])
                }
                setVisibleImages(newVisibleImages)
                return nextIndex
            })
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <Typography variant="h2" className="text-center mb-12 tracking-wide font-georgia">
                    NOSOTROS...
                </Typography>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <AnimatePresence mode='wait'>
                        {visibleImages.map((image, index) => (
                            <motion.div
                                key={`${image}-${index}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                className="aspect-square relative overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={image}
                                    alt={`Nosotros ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

