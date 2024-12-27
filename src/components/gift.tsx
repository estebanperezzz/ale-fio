'use client'

import { Gift } from 'lucide-react'
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

export default function GiftSection() {
    return (
        <Card className="w-full border-none rounded-none bg-gradient-to-r from-[#B76111] to-[#96410C] ">
            <CardContent className="py-24">
                <div className="container mx-auto px-4 text-center text-[#EEEEEE]">
                    <Gift className="w-16 h-16 mx-auto mb-6" />
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
                                            <Typography variant="p" className="font-montserrat">Cuenta: 1204825005</Typography>
                                            <Typography variant="p">Moneda: UYU</Typography>
                                            <Typography variant="p">Sucursal: 07 - Bvar. Artigas</Typography>
                                        </div>
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias desde otros bancos</Typography>
                                            <Typography variant="p" className="font-montserrat">Cuenta: 0007001204825005</Typography>
                                            <Typography variant="p">Moneda: UYU</Typography>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <Typography variant="h3" className="font-semibold mb-2">Cuenta Dólares:</Typography>
                                    <div className="space-y-4">
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias dentro de Santander</Typography>
                                            <Typography variant="p" className="font-montserrat">Cuenta: 5204991318</Typography>
                                            <Typography variant="p">Moneda: USD</Typography>
                                            <Typography variant="p">Sucursal: 07 - Bvar. Artigas</Typography>
                                        </div>
                                        <div>
                                            <Typography variant="p" className="font-medium">Transferencias desde otros bancos</Typography>
                                            <Typography variant="p" className="font-montserrat">Cuenta: 0007005204991318</Typography>
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
