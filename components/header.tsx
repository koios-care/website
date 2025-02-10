'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type NavigationLink = {
  href?: string;
  label: string;
  isButton?: boolean;
  children?: Array<{
    href: string;
    label: string;
  }>;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks: NavigationLink[] = [
    { href: "/about", label: "About" },
    {
      label: "Solutions",
      children: [
        { href: "/solutions/individuals", label: "For Patients" },
        { href: "/solutions/pharma", label: "For Pharma" },
        { href: "/solutions/care-providers", label: "For Care Providers" }
      ]
    },
    { href: "/publications", label: "Science" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#team", label: "Team" },
    { href: "/contact", label: "Contact Us", isButton: true }
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/koios.png"
              alt="KOIOS"
              width={180}
              height={60}
              className="h-8 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((item, index) => (
              item.children ? (
                <div key={index} className="relative group">
                  <button className="text-warm-purple hover:text-bubbly-pink transition-colors body-style py-2">
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-warm-purple hover:bg-gray-50 hover:text-bubbly-pink body-style"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.isButton 
                    ? "px-4 py-2 bg-warm-purple text-white rounded-full hover:bg-bubbly-pink transition-colors body-style"
                    : "text-warm-purple hover:text-bubbly-pink transition-colors body-style"
                  }
                >
                  {item.label}
                </Link>
              ) : null
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-warm-purple"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* About Link */}
            <Link
              href="/about"
              className="block text-warm-purple hover:text-bubbly-pink transition-colors body-style px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Solutions Section in Mobile */}
            <div className="space-y-3 px-4">
              <div className="font-medium text-warm-purple body-style">Solutions</div>
              <div className="space-y-3 pl-4 border-l-2 border-warm-purple/20">
                {navigationLinks[1].children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block text-warm-purple hover:text-bubbly-pink transition-colors body-style"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Science Link */}
            <Link
              href="/publications"
              className="block text-warm-purple hover:text-bubbly-pink transition-colors body-style px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Science
            </Link>

            {/* Testimonials Link */}
            <Link
              href="/#testimonials"
              className="block text-warm-purple hover:text-bubbly-pink transition-colors body-style px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>

            {/* Team Link */}
            <Link
              href="/#team"
              className="block text-warm-purple hover:text-bubbly-pink transition-colors body-style px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>

            {/* Contact Us Link */}
            <div className="px-4">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-2.5 bg-warm-purple text-white rounded-full hover:bg-bubbly-pink transition-colors body-style"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 