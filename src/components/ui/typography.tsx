import React from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const typographyVariants = cva("font-montserrat", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-montserrat",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight font-montserrat",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight font-montserrat",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight font-montserrat",
      p: "leading-7 font-montserrat",
      large: "text-lg font-semibold font-montserrat",
      small: "text-sm font-medium leading-none font-montserrat",
      muted: "text-sm text-muted-foreground font-montserrat",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

type TypographyElement = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span'>

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyElement
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  // eslint-disable-next-line
  ({ className, variant, as, ...props }, ref) => {
    const Component = as || 'p'
    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

