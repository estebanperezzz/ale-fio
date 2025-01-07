'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Typography } from "@/components/ui/typography"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSwipeable } from 'react-swipeable'

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
    //eslint-disable-next-line
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [visibleImages, setVisibleImages] = useState(images.slice(0, 8))
    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewIndex, setPreviewIndex] = useState(0)

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
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const openPreview = (index: number) => {
        setPreviewIndex(index)
        setPreviewOpen(true)
    }

    const closePreview = () => {
        setPreviewOpen(false)
    }

    const nextImage = () => {
        setPreviewIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setPreviewIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const handlers = useSwipeable({
        onSwipedLeft: nextImage,
        onSwipedRight: prevImage,
    })

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
                                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => openPreview(images.indexOf(image))}
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
            <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
                <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-transparent border-none">
                    <DialogTitle className="sr-only">Vista previa de imagen</DialogTitle>
                    <div className="relative w-full h-full" {...handlers}>
                        <button
                            onClick={closePreview}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
                            aria-label="Cerrar vista previa"
                        >
                            <X size={24} />
                        </button>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight size={24} />
                        </button>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src={images[previewIndex]}
                                    alt={`Vista previa ${previewIndex + 1}`}
                                    fill
                                    className="object-contain rounded-lg"
                                    priority
                                    sizes="95vw"
                                />
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

