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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-bubbly-pink">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Image src="/placeholder.svg" alt="Koios Logo" width={120} height={40} className="h-8 w-auto" />
            <div className="hidden md:flex space-x-8">
              <Link href="#testimonials" className="text-warm-purple hover:text-warm-purple/80">
                testimonials
              </Link>
              <Link href="#vision" className="text-warm-purple hover:text-warm-purple/80">
                vision
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

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Mission & Vision Section */}
        <section id="vision">
          <MissionVision />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* App Showcase Section */}
        <section className="py-20 bg-warm-purple">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="font-display text-3xl md:text-4xl mb-6">AI for Quality of Life assessment and adjustment</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bubbly-pink rounded-full"></span>
                    <span>Data and AI to understand how therapy impacts quality of life </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bubbly-pink rounded-full"></span>
                    <span>Improve patient-agency, communication with providers and save time to reach optimal therapy results </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bubbly-pink rounded-full"></span>
                    <span>Personalized objective neuro, brain and functioning health insights </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bubbly-pink rounded-full"></span>
                    <span>Fricitionless, focusing on passive sensing</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/63c9b4ab6f595e0ebe2983fe_Mask%20Group%202-KgBRpHaveB3eMbEy833950cRKaUk5f.png"
                  alt="Koios Care Quality of Life Interface"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
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

