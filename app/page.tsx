import Image from "next/image"
import Link from "next/link"
import BackgroundPaths from "@/components/background-paths"
import { TeamNetwork } from "@/components/team-network"
import { Funders } from "@/components/funders"
import { MissionVision } from "@/components/mission-vision"
import { Testimonials } from "@/components/testimonials"
import { Advisors } from "@/components/advisors"
import { Footer } from "@/components/footer"
import { PlatformSolutions } from "@/components/platform-solutions"
import AppShowcaseWithNodes from "@/components/app-showcase-with-nodes"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-bubbly-pink">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/koios.png" alt="Koios Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-warm-purple hover:text-warm-purple/80">
                About
              </Link>
              <div className="relative group">
                <button className="text-warm-purple hover:text-warm-purple/80">
                  Solutions
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link href="/solutions/individuals" className="block px-4 py-2 text-sm text-warm-purple hover:bg-gray-50">
                      For Patients
                    </Link>
                    <Link href="/solutions/pharma" className="block px-4 py-2 text-sm text-warm-purple hover:bg-gray-50">
                      For Pharma
                    </Link>
                    <Link href="/solutions/care-providers" className="block px-4 py-2 text-sm text-warm-purple hover:bg-gray-50">
                      For Care Providers
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/publications" className="text-warm-purple hover:text-warm-purple/80">
                Science
              </Link>
              <Link href="#testimonials" className="text-warm-purple hover:text-warm-purple/80">
                Testimonials
              </Link>
              <Link href="#team" className="text-warm-purple hover:text-warm-purple/80">
                Team
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-warm-purple text-white rounded-full hover:bg-bubbly-pink transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section with Background Paths */}
        <BackgroundPaths title="Koios Care" />

        {/* App Showcase with Nodes Section */}
        <section id="connections">
          <AppShowcaseWithNodes />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Platform Solutions Section */}
        <section id="solutions">
          <PlatformSolutions />
        </section>

        {/* Mission & Vision Section */}
        <section id="vision">
          <MissionVision />
        </section>

        {/* Team Section */}
        <section id="team">
          <TeamNetwork />
        </section>

        {/* Advisors Section */}
        <section id="advisors">
          <Advisors />
        </section>

        {/* Supported By Section */}
        <section id="supported-by">
          <Funders />
        </section>
      </main>

      <Footer />
    </div>
  )
}

