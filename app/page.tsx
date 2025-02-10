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
        {/* Hero Section with Background Paths */}
        <BackgroundPaths />

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

