"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2025-02-05T19:00:00');
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const timer = setInterval(updateCountdown, 1000);

        // Cleanup del timer cuando el componente se desmonte
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full bg-black flex items-center justify-center">
            <Image
                src="/_DSC5024.jpg" // Cambiar por otra imagen si es necesario
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-white text-center">
                <h1 className="text-7xl font-bold mb-4">¡Estamos contando los días!</h1>
                <div className="flex space-x-4 justify-center">
                    <div className="text-center">
                        <span className="text-6xl font-bold">{timeLeft.days}</span>
                        <p className="text-2xl uppercase">Días</p>
                    </div>
                    <div className="text-center">
                        <span className="text-6xl font-bold">{timeLeft.hours}</span>
                        <p className="text-2xl uppercase">Hs</p>
                    </div>
                    <div className="text-center">
                        <span className="text-6xl font-bold">{timeLeft.minutes}</span>
                        <p className="text-2xl uppercase">Min</p>
                    </div>
                    <div className="text-center">
                        <span className="text-6xl font-bold">{timeLeft.seconds}</span>
                        <p className="text-2xl uppercase">Seg</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
