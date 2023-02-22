import Link, {LinkProps} from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
}

export function NavLink({href, children}: Props) {
  return (
    <Link
      href={href}
      className="inline-block py-1 px-2 text-white hover:text-teal-primary"
    >
      {children}
    </Link>
  )
}
