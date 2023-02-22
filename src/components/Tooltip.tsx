import {cn} from '@/utils/cn'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

const Tooltip = ({...props}) => (
  <TooltipPrimitive.Provider delayDuration={0}>
    <TooltipPrimitive.Root {...props} />
  </TooltipPrimitive.Provider>
)
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({children, className, sideOffset = 4, ...props}, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50 max-w-xs overflow-hidden border border-white/20 bg-black px-3 py-1.5 text-base text-white shadow-md',
      className
    )}
    {...props}
  >
    {children}
    <TooltipPrimitive.Arrow />
  </TooltipPrimitive.Content>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {Tooltip, TooltipTrigger, TooltipContent}
