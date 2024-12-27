"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { Button as ButtonBase, ButtonProps } from "./button"
import { cn } from "@/lib/utils"

type AnimatedButtonProps = ButtonProps & HTMLMotionProps<"button">;

const MotionButton = motion(ButtonBase);

export function AnimatedButton({ className, children, ...props }: AnimatedButtonProps) {
    return (
        <MotionButton
            className={cn("transition-colors", className)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </MotionButton>
    )
}

