'use client'

import { useState } from 'react'
import { AnimatedButton } from "@/components/ui/animated-button"
import { useMusicPreference } from '@/contexts/MusicContext'
import { motion } from 'framer-motion'

export default function MusicPreferenceModal() {
  const { setMusicPreference } = useMusicPreference()
  const [isVisible, setIsVisible] = useState(true)

  const handlePreference = (preference: boolean) => {
    setMusicPreference(preference)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 shadow-3xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#445F51] p-8 rounded-lg shadow-xl text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">¿Quieres iniciar con música o sin música? 🎵</h2>
        <div className="flex justify-center space-x-4">
          <AnimatedButton
            onClick={() => handlePreference(true)}
            className="w-full bg-[#4e6e5d] hover:bg-[#445F51] rounded-full shadow-xl text-xl h-full font-semibold"
          >
            Con música 🕺🏻
          </AnimatedButton>
          <AnimatedButton
            onClick={() => handlePreference(false)}
            className="bg-[#B76111] hover:bg-[#96410C] w-full rounded-full shadow-xl text-xl h-full font-semibold"
          >
            Sin música 🥱
          </AnimatedButton>
        </div>
      </motion.div>
    </motion.div>
  )
}

