"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Typography } from "@/components/ui/typography";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Player } from "@lordicon/react";
import CAMERA_ICON from "../../public/camera.json";

export default function PhotoShare() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const cameraIconRef = useRef<Player>(null);

  const playAnimationWithDelay = useCallback(() => {
    setTimeout(() => {
      cameraIconRef.current?.playFromBeginning();
    }, 2000);
  }, []);

  useEffect(() => {
    if (isInView) {
      cameraIconRef.current?.playFromBeginning();
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-r from-[#6A8E7F] to-[#C8D5B9]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-none bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Player
                  ref={cameraIconRef}
                  icon={CAMERA_ICON}
                  size={120}
                  onComplete={playAnimationWithDelay}
                />
              </div>
              <Typography
                variant="h2"
                className="text-center text-[#EEEEEE] font-georgia"
              >
                ¡Compartí tus recuerdos!
              </Typography>
            </CardHeader>
            <CardContent className="space-y-6 px-6 pb-8">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="p"
                  className="text-center text-[#EEEEEE] text-xl font-montserrat leading-relaxed"
                >
                  Ayudanos a crear un álbum inolvidable de nuestro gran día.
                  ¡Subí tus fotos favoritas a nuestro Google Photos compartido!
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants} className="pt-4">
                <Link
                  href="https://photos.app.goo.gl/h9qEsDKds2myMRt48"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedButton
                    variant="secondary"
                    className="w-full bg-[#EEEEEE] hover:bg-[#D9D9D9] text-[#4E6E5D] mt-6 rounded-full shadow-xl text-xl h-14 font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    SUBIR FOTOS
                  </AnimatedButton>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="p"
                  className="text-center text-[#EEEEEE] text-sm font-montserrat mt-4 opacity-80"
                >
                  Tus recuerdos son invaluables para nosotros. ¡Gracias por
                  compartirlos!
                </Typography>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
