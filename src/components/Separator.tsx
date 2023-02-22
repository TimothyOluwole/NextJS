import {cn} from '@/utils/cn'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as React from 'react'

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    {className, orientation = 'horizontal', decorative = true, ...props},
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-gray-2',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
)

Separator.displayName = SeparatorPrimitive.Root.displayName
