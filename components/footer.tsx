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
              src="/koios.png" 
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
                <Link href="#mission-vision" className="hover:text-bubbly-pink transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-bubbly-pink transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-bubbly-pink transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bubbly-pink">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/pharma" className="hover:text-bubbly-pink transition-colors">
                  For Pharma
                </Link>
              </li>
              <li>
                <Link href="/solutions/care-providers" className="hover:text-bubbly-pink transition-colors">
                  For Care Providers
                </Link>
              </li>
              <li>
                <Link href="/solutions/researchers" className="hover:text-bubbly-pink transition-colors">
                  For Researchers
                </Link>
              </li>
              <li>
                <Link href="/solutions/individuals" className="hover:text-bubbly-pink transition-colors">
                  For Individuals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-bubbly-pink">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@koios.care" 
                  className="hover:text-bubbly-pink transition-colors"
                >
                  info@koios.care
                </a>
              </li>
              <li>
                <p className="text-sm text-white/80">Filip Williotstraat 9</p>
                <p className="text-sm text-white/80">2600 Antwerpen</p>
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
              <li>
                <p className="text-sm text-white/80">VAT: BE0786.830.148</p>
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