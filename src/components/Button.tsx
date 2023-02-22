import {cn} from '@/utils/cn'
import {cva, VariantProps} from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-base font-medium transition-colors focus:outline-none focus:ring-4 focus:ring-teal-medium disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        teal: 'bg-teal-primary text-black hover:bg-teal-light',
        black: 'bg-black text-white hover:opacity-75',
        white: 'bg-white text-black hover:bg-teal-light',
        outlineBlack:
          'bg-transparent border border-black hover:bg-teal-light focus:border-teal-medium',
        outlineWhite:
          'bg-transparent border text-white border-white hover:text-black hover:bg-teal-light focus:border-teal-medium',
        ghost: 'bg-transparent hover:bg-teal-light',
        linkWhite: 'bg-transparent text-teal-white hover:text-primary',
        linkMediumTeal: 'bg-transparent text-teal-medium hover:text-black',
        linkBlack: 'bg-transparent text-teal-black hover:text-white',
      },
      size: {
        sm: 'h-8 px-4',
        md: 'h-10 px-8',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'teal',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, ...props}, ref) => {
    return (
      <button
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export {Button, buttonVariants}
