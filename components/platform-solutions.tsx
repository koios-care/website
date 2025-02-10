'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const solutions = [
  {
    title: "People with Parkinson's",
    description: "Improve how you understand and experience Parkinson's disease. Use Parkiwatch mobile and wearable app.",
    link: "https://play.google.com/store/apps/details?id=care.koios.parkiwatch&hl=en-US",
    buttonText: "Get Started",
    icon: "/data_report_parki.png",
  },
  {
    title: "Pharma & Medical Devices",
    description: "Digital platform solution for Pharma & Medical Devices. Improve data, patient engagment for solutions in the market or in development",
    link: "mailto:info@koios.care?cc=dimitris@koios.care&subject=Koios%20Care%20Information",
    buttonText: "Contact Us",
    icon: "/drug+.jpeg",
    secondaryLink: "/publications",
    secondaryText: "View validated solutions",
  },
  {
    title: "Clinician's and Hospitals",
    description: "Aiming to collaborate, by offering a digital health tool for remote patient monitoring and more effective care",
    link: "mailto:info@koios.care?cc=dimitris@koios.care&subject=Koios%20Care%20Information",
    buttonText: "Contact Us",
    learnMoreLink: "https://koios.care/clinicians",
    icon: "/data_app.jpeg",
  },
]

export function PlatformSolutions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-purple mb-6">
              Neuro and Brain Health Platform
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="opacity-0">
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg border border-bubbly-pink/20">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={140}
                      height={105}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-purple mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-warm-purple mb-6" suppressHydrationWarning>
            Neuro and Brain Health Platform
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Link 
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-bubbly-pink/20">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-[740px] h-[405px]">
                        <Image
                          src={solution.icon}
                          alt={solution.title}
                          fill
                          className="rounded-xl object-contain"
                          sizes="140px"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-warm-purple mb-4">
                      {solution.title}
                    </h3>
                  </div>
                  <div className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-warm-purple group-hover:text-warm-purple/80 transition-colors">
                      <span>{solution.buttonText}</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    {solution.secondaryLink && (
                      <Link
                        href={solution.secondaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm text-warm-purple hover:text-warm-purple/80 transition-colors"
                      >
                        {solution.secondaryText}
                      </Link>
                    )}
                    {solution.learnMoreLink && (
                      <Link
                        href={solution.learnMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm text-warm-purple hover:text-warm-purple/80 transition-colors"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 