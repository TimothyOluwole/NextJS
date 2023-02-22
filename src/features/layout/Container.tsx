import clsx from 'clsx'
import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

export function Container({className, ...props}: Props) {
  return <div className={clsx('px-4 sm:px-6 lg:px-8', className)} {...props} />
}
