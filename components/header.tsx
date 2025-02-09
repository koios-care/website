'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/koios.png"
              alt="KOIOS"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/solutions/pharma#solutions" className="text-warm-purple hover:text-bubbly-pink transition-colors">
              Solutions
            </Link>
            <Link href="/solutions/pharma#key-benefits" className="text-warm-purple hover:text-bubbly-pink transition-colors">
              Benefits
            </Link>
            <Link href="/solutions/pharma#success-stories" className="text-warm-purple hover:text-bubbly-pink transition-colors">
              Success Stories
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-warm-purple text-white rounded-full hover:bg-bubbly-pink transition-colors">
              Contact Us
            </Link>
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
          <nav className="md:hidden py-4 space-y-4">
            <Link 
              href="/solutions/pharma#solutions" 
              className="block text-warm-purple hover:text-bubbly-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/solutions/pharma#key-benefits" 
              className="block text-warm-purple hover:text-bubbly-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              href="/solutions/pharma#success-stories" 
              className="block text-warm-purple hover:text-bubbly-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 bg-warm-purple text-white rounded-full hover:bg-bubbly-pink transition-colors w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 