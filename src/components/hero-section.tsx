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

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full bg-black flex items-center justify-center">
            <Image
                src="/_DSC5024.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-center text-white">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    ¡Estamos contando los días!
                </h1>
                <div
                    className="flex flex-col items-center justify-center w-64 h-64 rounded-full translate-x-1/3"
                    style={{
                        backgroundColor: '#898F64',
                        color: '#353A1B',
                    }}
                >
                    <div className="flex space-x-6 text-center">
                        <div>
                            <span className="text-4xl font-bold">{timeLeft.days}</span>
                            <p className="text-sm uppercase">Días</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold">{timeLeft.hours}</span>
                            <p className="text-sm uppercase">Hs</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold">{timeLeft.minutes}</span>
                            <p className="text-sm uppercase">Min</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold">{timeLeft.seconds}</span>
                            <p className="text-sm uppercase">Seg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
