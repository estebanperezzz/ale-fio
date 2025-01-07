'use client'

import { useState } from 'react'
import { AnimatedButton } from "@/components/ui/animated-button"
import { useMusicPreference } from '@/contexts/MusicContext'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center z-50 w-screen h-screen"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/_DSC5024.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#A1B290] to-[#4E6E5D] opacity-70"></div>
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full h-full flex flex-col justify-center items-center"
      >
        <div className="relative z-10 p-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/logo.svg"
              alt="Ale y Fio"
              width={200}
              height={200}
              className="w-48 h-48 md:w-64 md:h-64 mb-8 invert"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Bienvenidos a la boda de Ale y Fio
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold mb-8 text-white"
          >
            ¿Quieres iniciar con música o sin música?
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md"
          >
            <AnimatedButton
              onClick={() => handlePreference(true)}
              className="w-full bg-[#4e6e5d] hover:bg-[#445F51] rounded-full shadow-xl text-xl py-3 font-semibold text-white"
            >
              Con música
            </AnimatedButton>
            <AnimatedButton
              onClick={() => handlePreference(false)}
              className="w-full bg-[#B76111] hover:bg-[#96410C] rounded-full shadow-xl text-xl py-3 font-semibold text-white"
            >
              Sin música
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

