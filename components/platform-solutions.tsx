'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const solutions = [
  {
    title: "People with Parkinson's",
    description: "Improve how you understand and experience Parkinson's disease with our Parkiwatch mobile and wearable app.",
    link: "https://play.google.com/store/apps/details?id=care.koios.parkiwatch&hl=en-US",
    buttonText: "Get Started",
    icon: "/data_report_parki.png",
    features: [
      {
        title: "Quality of Life Index",
        description: "Track plate-to-mouth movements, fine motor control, and daily routines"
      },
      {
        title: "Personalized Care",
        description: "Better understand your symptoms and communicate effectively with your physician"
      }
    ]
  },
  {
    title: "Pharma & Medical Devices",
    description: "Digital platform solution for optimizing clinical trials and improving patient engagement in drug development.",
    link: "mailto:info@koios.care?cc=dimitris@koios.care&subject=Koios%20Care%20Information",
    buttonText: "Contact Us",
    icon: "/drug+.jpeg",
    secondaryLink: "/publications",
    secondaryText: "View validated solutions",
    features: [
      {
        title: "Early-Stage Screening",
        description: "Enhance clinical trials with early detection and population triaging"
      },
      {
        title: "Treatment Effectiveness",
        description: "24/7 passive monitoring of physical activity and patient outcomes"
      }
    ]
  },
  {
    title: "Clinician's and Hospitals",
    description: "Comprehensive digital health platform for remote patient monitoring and enhanced care delivery.",
    link: "mailto:info@koios.care?cc=dimitris@koios.care&subject=Koios%20Care%20Information",
    buttonText: "Contact Us",
    learnMoreLink: "https://koios.care/clinicians",
    icon: "/data_app.jpeg",
    features: [
      {
        title: "Patient Monitoring",
        description: "Real-time insights into patient activity, sleep quality, and social behavior"
      },
      {
        title: "Care Optimization",
        description: "Data-driven decisions for personalized treatment adjustments"
      }
    ]
  },
]

export function PlatformSolutions() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-24 bg-background w-full">
        <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-purple mb-6">
              Neuro and Brain Health Platform
            </h2>
            <p className="text-lg text-warm-purple/80 max-w-3xl mx-auto">
              Patient-centric solutions for individuals, healthcare providers, and pharmaceutical companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
            {solutions.map((solution, index) => (
              <div key={index} className="opacity-0">
                <div className="h-full p-4 md:p-8 bg-white rounded-2xl shadow-lg border border-bubbly-pink/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-full h-[200px] md:h-[240px]">
                      <Image
                        src={solution.icon}
                        alt={solution.title}
                        fill
                        className="rounded-xl object-contain"
                      />
                    </div>
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
    <section className="py-24 bg-background w-full">
      <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-warm-purple mb-6" suppressHydrationWarning>
            Neuro and Brain Health Platform
          </h2>
          <p className="text-lg text-warm-purple/80 max-w-3xl mx-auto">
            Patient-centric solutions for individuals, healthcare providers, and pharmaceutical companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group w-full"
            >
              <Link 
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full p-4 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-bubbly-pink/20">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-full h-[200px] md:h-[240px]">
                        <Image
                          src={solution.icon}
                          alt={solution.title}
                          fill
                          className="rounded-xl object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    {/* Features Section */}
                    <div className="space-y-4 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          className="bg-warm-purple/5 rounded-lg p-4"
                        >
                          <h4 className="text-warm-purple font-semibold mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
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