'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, ArrowRight } from 'lucide-react'
import { AnimatedButton } from "@/components/ui/animated-button"
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingMusicButton() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showLabel, setShowLabel] = useState(true)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current = new Audio('/laboda.mp3')
        audioRef.current.loop = true

        const timer = setTimeout(() => {
            setShowLabel(false)
        }, 10000)

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
            clearTimeout(timer)
        }
    }, [])

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                try {
                    await audioRef.current.play()
                    setIsPlaying(true)
                } catch (error) {
                    console.error("Playback failed:", error)
                    setIsPlaying(false)
                }
            }
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <AnimatePresence>
                {showLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ 
                            opacity: 1, 
                            x: [0, -10, 0],
                            transition: {
                                x: {
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }
                            }
                        }}
                        exit={{ opacity: 0, x: -50 }}
                        className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2"
                    >
                        <span className="whitespace-nowrap">Canción de amor</span>
                        <ArrowRight className="h-4 w-4" />
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatedButton
                variant="default"
                size="lg"
                onClick={togglePlay}
                className="bg-[#4e6e5d] hover:bg-[#445F51] text-white rounded-full shadow-xl"
                aria-label={isPlaying ? "Pause background music" : "Play background music"}
            >
                {isPlaying ? <Pause className="h-20 w-20" /> : <Play className="h-20 w-20" />}
            </AnimatedButton>
        </div>
    )
}

