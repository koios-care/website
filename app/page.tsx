import Image from "next/image"
import Link from "next/link"
import BackgroundPaths from "@/components/background-paths"
import { TeamNetwork } from "@/components/team-network"
import { Funders } from "@/components/funders"
import { Features } from "@/components/features"
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
            <Image src="/koios.png" alt="Koios Logo" width={120} height={40} className="h-8 w-auto" />
            <div className="hidden md:flex space-x-8">
              <Link href="#showcase" className="text-warm-purple hover:text-warm-purple/80">
                showcase
              </Link>
              <Link href="#testimonials" className="text-warm-purple hover:text-warm-purple/80">
                testimonials
              </Link>
              <Link href="#vision" className="text-warm-purple hover:text-warm-purple/80">
                vision
              </Link>
              <Link href="#solutions" className="text-warm-purple hover:text-warm-purple/80">
                solutions
              </Link>
              <Link href="#features" className="text-warm-purple hover:text-warm-purple/80">
                features
              </Link>
              <Link href="#team" className="text-warm-purple hover:text-warm-purple/80">
                team
              </Link>
              <Link href="#advisors" className="text-warm-purple hover:text-warm-purple/80">
                advisors
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section with Background Paths */}
        <BackgroundPaths title="Koios Care" />

        {/* App Showcase with Nodes Section */}
        <section id="showcase">
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

        {/* Features Section */}
        <section id="features">
          <Features />
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

