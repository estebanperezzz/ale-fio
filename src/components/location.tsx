"use client";
import { Card } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

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

   const createCalendarUrl = (title: string, startDate: string, endDate: string, location: string) => {
       const event = {
           title,
           start: startDate,
           end: endDate,
           location,
       };

       const icsContent = [
           'BEGIN:VCALENDAR',
           'VERSION:2.0',
           'BEGIN:VEVENT',
           `SUMMARY:${event.title}`,
           `DTSTART:${event.start}`,
           `DTEND:${event.end}`,
           `LOCATION:${event.location}`,
           'END:VEVENT',
           'END:VCALENDAR'
       ].join('\n');

       const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
       return URL.createObjectURL(blob);
   };

   const civilEventUrl = createCalendarUrl(
       'Civil Ale y Fio',
       '20250207T143000',
       '20250207T153000',
       'Oficina 7'
   );

   const ceremonyEventUrl = createCalendarUrl(
       'Ceremonia Ale y Fio',
       '20250208T183000',
       '20250209T000000',
       'Chacra La Martina'
   );

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
                   <motion.div variants={itemVariants} className="grid grid-rows-[auto_1fr_auto] h-full">
                       <Card className="border-none bg-[#EEEEEE] shadow-none h-full">
                           <div className="grid grid-rows-[auto_auto_1fr_auto] h-full">
                               <div className="flex items-center justify-center h-24 mb-2">
                                   <Image 
                                       src="/paper.svg" 
                                       alt="Registro Civil Icon" 
                                       width={96} 
                                       height={96}
                                   />
                               </div>
                               
                               <Typography variant="h2" className="text-center text-[#203733] font-georgia mb-6">
                                   REGISTRO CIVIL
                               </Typography>
                               
                               <div className="text-[#4E6E5D] text-center text-xl space-y-2">
                                   <Typography variant="p">07 de Febrero de 2025</Typography>
                                   <Typography variant="p">14:30 hs.</Typography>
                                   <Typography variant="p">Oficina 7</Typography>
                                   <Typography variant="p" className="italic block mt-4">
                                       Recibí debajo las indicaciones para llegar.
                                   </Typography>
                               </div>
                               
                               <div className="mt-6 space-y-4">
                                   <Link href="https://maps.app.goo.gl/AjWPw17E3cSbWEe78" target='_blank'>
                                       <AnimatedButton 
                                           variant="default"
                                           className="w-full bg-[#4e6e5d] hover:bg-[#445F51] rounded-full shadow-xl text-xl h-1/2 font-semibold mb-5"
                                       >
                                           LLEGAR AL REGISTRO CIVIL
                                       </AnimatedButton>
                                   </Link>
                                   <Link href={civilEventUrl} download="Civil_Ale_y_Fio.ics">
                                       <AnimatedButton 
                                           variant="outline"
                                           className="w-full border-[#4e6e5d] text-[#4e6e5d] hover:bg-[#4e6e5d] hover:text-white rounded-full shadow-xl text-xl h-1/2 font-semibold"
                                       >
                                           AGENDAR FECHA CIVIL
                                       </AnimatedButton>
                                   </Link>
                               </div>
                           </div>
                       </Card>
                   </motion.div>

                   <motion.div variants={itemVariants} className="grid grid-rows-[auto_1fr_auto] h-full">
                       <Card className="border-none bg-[#EEEEEE] shadow-none h-full">
                           <div className="grid grid-rows-[auto_auto_1fr_auto] h-full">
                               <div className="flex items-center justify-center h-24 mb-2">
                                   <Image 
                                       src="/fest.svg" 
                                       alt="Ceremonia y Fiesta Icon" 
                                       width={96} 
                                       height={96}
                                   />
                               </div>
                               
                               <Typography variant="h2" className="text-center text-[#203733] font-georgia mb-6">
                                   CEREMONIA Y FIESTA
                               </Typography>
                               
                               <div className="text-[#4E6E5D] text-center text-xl space-y-2">
                                   <Typography variant="p">08 de Febrero de 2025</Typography>
                                   <Typography variant="p">18:30 hs.</Typography>
                                   <Typography variant="p">Chacra La Martina</Typography>
                                   <Typography variant="p" className="mt-4">¡Te esperamos!</Typography>
                               </div>
                               
                               <div className="mt-6 space-y-4">
                                   <Link href="https://maps.app.goo.gl/SebZPSaugQC3tVvo7" target='_blank'>
                                       <AnimatedButton 
                                           variant="default"
                                           className="w-full bg-[#4e6e5d] hover:bg-[#445F51] rounded-full shadow-xl text-xl h-1/2 font-semibold mb-5"
                                       >
                                           LLEGAR A LA CHACRA
                                       </AnimatedButton>
                                   </Link>
                                   <Link href={ceremonyEventUrl} download="Ceremonia_Ale_y_Fio.ics">
                                       <AnimatedButton 
                                           variant="outline"
                                           className="w-full border-[#4e6e5d] text-[#4e6e5d] hover:bg-[#4e6e5d] hover:text-white rounded-full shadow-xl text-xl h-1/2 font-semibold"
                                       >
                                           AGENDAR FECHA CEREMONIA
                                       </AnimatedButton>
                                   </Link>
                               </div>
                           </div>
                       </Card>
                   </motion.div>
               </motion.div>
           </div>
       </div>
   )
}

