import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-warm-purple text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo and Tagline */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Image 
              src="/placeholder.svg" 
              alt="KOIOS" 
              width={120} 
              height={40} 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-bubbly-pink/90 text-lg">
            Empowering care with meaningful insights
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bubbly-pink">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#vision" className="hover:text-bubbly-pink transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-bubbly-pink transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-bubbly-pink transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bubbly-pink">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pharma" className="hover:text-bubbly-pink transition-colors">
                  Pharma
                </Link>
              </li>
              <li>
                <Link href="/providers" className="hover:text-bubbly-pink transition-colors">
                  Care Providers
                </Link>
              </li>
              <li>
                <Link href="/researchers" className="hover:text-bubbly-pink transition-colors">
                  Researchers
                </Link>
              </li>
              <li>
                <Link href="/individuals" className="hover:text-bubbly-pink transition-colors">
                  Individuals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bubbly-pink">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-bubbly-pink transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bubbly-pink">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-bubbly-pink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-bubbly-pink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-bubbly-pink/20 text-center text-sm text-bubbly-pink/60">
          <p>© {new Date().getFullYear()} KOIOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 