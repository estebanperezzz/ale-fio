"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import { motion, useInView } from 'framer-motion'
import React from 'react'
import { ConfirmationModal } from './ConfirmationModal'
import { Player } from '@lordicon/react'
import CONFIRM_ICON from '../../public/confirm.json'

export default function Confirmation() {
   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true });
   const [isModalOpen, setIsModalOpen] = useState(false);
   const confirmIconRef = useRef<Player>(null);

   const playAnimationWithDelay = useCallback(() => {
       setTimeout(() => {
           confirmIconRef.current?.playFromBeginning();
       }, 3000); // 5 seconds delay
   }, []);

   useEffect(() => {
       if (isInView) {
           confirmIconRef.current?.playFromBeginning();
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
                                       ref={confirmIconRef}
                                       icon={CONFIRM_ICON}
                                       size={80}
                                       onComplete={playAnimationWithDelay}
                                   />
                               </div>
                               <Typography variant="h2" className="text-center text-[#203733] font-georgia">
                                   CONFIRMACIÓN DE ASISTENCIA
                               </Typography>
                           </CardHeader>
                           <CardContent className="space-y-6">
                               <div className="space-y-2 text-[#4E6E5D] text-center text-xl">
                                   <Typography variant="p">
                                       Esperamos que seas parte de esta gran celebración.
                                   </Typography>
                                   <Typography variant="p">
                                       ¡Confirmanos tu asistencia!
                                   </Typography>
                               </div>
                               <AnimatedButton 
                                   variant="default"
                                   className="w-full bg-[#4e6e5d] hover:bg-[#445F51] mt-10 rounded-full shadow-xl text-xl h-full font-semibold"
                                   onClick={() => setIsModalOpen(true)}
                               >
                                   <span className="inline-flex items-center gap-2">
                                       <Player 
                                           icon={CONFIRM_ICON}
                                           size={20}
                                       />
                                       CONFIRMAR ASISTENCIA
                                   </span>
                               </AnimatedButton>
                           </CardContent>
                       </Card>
                   </motion.div>
               </motion.div>
           </div>
           <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
       </div>
   )
}

