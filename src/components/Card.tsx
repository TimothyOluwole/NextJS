import {cn} from '@/utils/cn'
import Image, {ImageProps} from 'next/image'
import Link, {LinkProps} from 'next/link'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({className, ...props}: CardProps) {
  return <div className={cn('', className)} {...props} />
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardHeader({className, ...props}: CardHeaderProps) {
  return <div className={cn('grid gap-1 p-6 xl:p-8', className)} {...props} />
}

interface CardIconProps extends ImageProps {}

function CardIcon({alt = '', className, ...props}: CardIconProps) {
  return (
    <Image
      alt={alt}
      className={cn('pb-3 xl:pb-4', className)}
      height={64}
      width={64}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function CardTitle({className, ...props}: CardTitleProps) {
  return <h4 className={cn('text-2xl font-bold', className)} {...props} />
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

function CardDescription({className, ...props}: CardDescriptionProps) {
  return <p className={cn('text-base text-gray-6', className)} {...props} />
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardContent({className, ...props}: CardContentProps) {
  return (
    <div
      className={cn('px-6 pb-4 text-base xl:px-8 xl:pb-6', className)}
      {...props}
    />
  )
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardFooter({className, ...props}: CardFooterProps) {
  return (
    <div
      className={cn('bottom-0 px-6 py-4 xl:px-8 xl:py-6', className)}
      {...props}
    />
  )
}

interface CardLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  icon?: JSX.Element
  target?: '_blank' | '_self' | '_parent' | '_top'
}

function CardLink({
  children,
  className,
  icon,
  target = '_self',
  ...props
}: CardLinkProps) {
  return (
    <Link
      className={cn(
        'action-link my-1 flex flex-row items-center gap-2',
        className
      )}
      target={target}
      {...props}
    >
      <span className="text-base font-medium">{children}</span>
      {icon && <span className="action-link-icon">{icon}</span>}
    </Link>
  )
}

interface CardButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element
  target?: '_blank' | '_self' | '_parent' | '_top'
}

function CardButton({
  children,
  className,
  icon,
  target = '_blank',
  ...props
}: CardButtonProps) {
  return (
    <button
      className={cn(
        'action-link my-1 flex flex-row items-center gap-2',
        className
      )}
      type="button"
      {...props}
    >
      <span className="text-base font-medium">{children}</span>
      {icon && <span className="action-link-icon">{icon}</span>}
    </button>
  )
}

export {
  Card,
  CardButton,
  CardFooter,
  CardHeader,
  CardIcon,
  CardLink,
  CardTitle,
  CardDescription,
  CardContent,
}
