import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-teal-dark">
      <div className="container mx-auto flex items-center justify-between px-8 py-5">
        <p className="text-sm text-white">
          &copy; Copyright {new Date().getFullYear()} Vialto Partners. All
          Rights Reserved.
        </p>
        <div className="flex gap-x-6 ">
          <Link
            href="https://vialtopartners.com/privacy"
            aria-label="Privacy on vialtopartners.com"
            className="text-sm text-white hover:text-teal-primary"
          >
            Privacy
          </Link>
          <Link
            href="https://vialtopartners.com/cookies"
            aria-label="Cookie policy on vialtopartners.com"
            className="text-sm text-white hover:text-teal-primary"
          >
            Cookie Policy
          </Link>
          <Link
            href="https://vialtopartners.com/terms"
            aria-label="Terms and conditions on vialtopartners.com"
            className="text-sm text-white hover:text-teal-primary"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
