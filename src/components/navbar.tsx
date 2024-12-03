import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                My Site
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Button>Sign Up</Button>
            <ThemeToggle />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="block pl-3 pr-4 py-2 text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
