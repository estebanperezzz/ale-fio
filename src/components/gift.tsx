'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Typography } from "@/components/ui/typography"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Player } from '@lordicon/react';
import ICON from '../../public/gift.json'

export default function GiftSection() {
    const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedAccount(text)
            setTimeout(() => setCopiedAccount(null), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    const CopyButton = ({ text }: { text: string }) => (
        <AnimatedButton
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => handleCopy(text)}
        >
            {copiedAccount === text ? (
                <Check className="h-4 w-4" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
        </AnimatedButton>
    )

    const playerRef = useRef<Player>(null);

    const playAnimationWithDelay = useCallback(() => {
        setTimeout(() => {
            playerRef.current?.playFromBeginning();
        }, 3000); // 5 seconds delay
    }, []);
  
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])

    return (
        <Card className="w-full border-none rounded-none bg-gradient-to-r from-[#B76111] to-[#F1AB6A] ">
            <CardContent className="py-24">
                <div className="container mx-auto px-4 text-center text-[#EEEEEE]">
                    <div className='flex items-center justify-center w-full mb-6'>
                        <Player 
                            ref={playerRef} 
                            icon={ICON}
                            size={96}
                            onComplete={playAnimationWithDelay}
                        />
                    </div>
                    <Typography variant="h2" className="mb-8 max-w-2xl mx-auto font-georgia">
                        Para poder colaborar con nosotros en esta noche tan especial te dejamos nuestros números de cuentas bancarias
                    </Typography>
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <AnimatedButton variant="secondary" size="lg" className="bg-[#EEEEEE] rounded-full shadow-xl text-xl font-semibold text-[#1A1A1A]">
                                VER DATOS BANCARIOS
                            </AnimatedButton>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Datos Bancarios</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                                <div>
                                    <Typography variant="h3" className="font-semibold mb-2">Cuenta Pesos Uruguayos:</Typography>
                                    <div className="space-y-4">
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias dentro de Santander</Typography>
                                            <div className="flex items-center">
                                                <Typography variant="p" className="font-montserrat">Cuenta: 1204825005</Typography>
                                                <CopyButton text="1204825005" />
                                            </div>
                                            <Typography variant="p">Moneda: UYU</Typography>
                                            <Typography variant="p">Sucursal: 07 - Bvar. Artigas</Typography>
                                        </div>
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias desde otros bancos</Typography>
                                            <div className="flex items-center">
                                                <Typography variant="p" className="font-montserrat">Cuenta: 0007001204825005</Typography>
                                                <CopyButton text="0007001204825005" />
                                            </div>
                                            <Typography variant="p">Moneda: UYU</Typography>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <Typography variant="h3" className="font-semibold mb-2">Cuenta Dólares:</Typography>
                                    <div className="space-y-4">
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias dentro de Santander</Typography>
                                            <div className="flex items-center">
                                                <Typography variant="p" className="font-montserrat">Cuenta: 5204991318</Typography>
                                                <CopyButton text="5204991318" />
                                            </div>
                                            <Typography variant="p">Moneda: USD</Typography>
                                            <Typography variant="p">Sucursal: 07 - Bvar. Artigas</Typography>
                                        </div>
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias desde otros bancos</Typography>
                                            <div className="flex items-center">
                                                <Typography variant="p" className="font-montserrat">Cuenta: 0007005204991318</Typography>
                                                <CopyButton text="0007005204991318" />
                                            </div>
                                            <Typography variant="p">Moneda: USD</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    )
}

