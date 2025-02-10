"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ContactForm } from "./contact-form"

function ConnectionPaths() {
  // Define the base unit size for the pattern
  const unit = 180; // Slightly reduced for better spacing
  const cornerRadius = 0;

  // Helper function to create L-shaped path
  const createLShape = (startX: number, startY: number, direction: 'tr' | 'br' | 'bl' | 'tl' = 'tr') => {
    const size = unit;
    switch(direction) {
      case 'tr': // top-right L
        return `M${startX} ${startY} L${startX} ${startY - size} L${startX + size} ${startY - size}`;
      case 'br': // bottom-right L
        return `M${startX} ${startY} L${startX} ${startY + size} L${startX + size} ${startY + size}`;
      case 'bl': // bottom-left L
        return `M${startX} ${startY} L${startX} ${startY + size} L${startX - size} ${startY + size}`;
      case 'tl': // top-left L
        return `M${startX} ${startY} L${startX} ${startY - size} L${startX - size} ${startY - size}`;
      default:
        return '';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1600 600" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* L-shaped connections */}
        {[
          // Top section - spaced out
          { x: 400, y: 200, dir: 'tr', delay: 0 },
          { x: 800, y: 200, dir: 'tl', delay: 0.5 },
          { x: 1200, y: 200, dir: 'tr', delay: 1 },
          // Middle section (sparse to leave space for content)
          { x: 400, y: 500, dir: 'br', delay: 0.8 },
          { x: 1200, y: 500, dir: 'bl', delay: 1.2 },
          // Bottom section
          { x: 400, y: 800, dir: 'br', delay: 0.3 },
          { x: 800, y: 800, dir: 'bl', delay: 0.9 },
          { x: 1200, y: 800, dir: 'br', delay: 1.5 }
        ].map((shape, index) => (
          <motion.path
            key={`l-shape-${index}`}
            d={createLShape(shape.x, shape.y, shape.dir as any)}
            stroke="#E4C1D5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{
              duration: 2,
              delay: shape.delay * 0.15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
            style={{
              willChange: 'transform, opacity'
            }}
          />
        ))}

        {/* Connection points with increased animation frequency */}
        {[
          // Top section dots - spaced out
          [400, 200, 0], [600, 200, 0.4], [800, 200, 0.8], [1000, 200, 0.2], [1200, 200, 0.6],
          // Middle sparse section dots
          [400, 500, 0.5], [1200, 500, 0.9],
          // Bottom section dots
          [400, 800, 0.3], [600, 800, 0.7], [800, 800, 1], [1000, 800, 0.4], [1200, 800, 0.8]
        ].map(([cx, cy, delay], index) => (
          <motion.circle
            key={`point-${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="#E4C1D5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 2,
              delay: delay * 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
            style={{
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </svg>
    </div>
  )
}

function AnimatedTitle({ title }: { title: string }) {
  const words = title.split(" ")

  return (
    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              className="inline-block text-transparent bg-clip-text 
                         bg-gradient-to-r from-warm-purple to-bubbly-pink 
                         dark:from-white dark:to-white/80"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}

export default function BackgroundPaths({
  title = "Koios Care, AI-enabled neuro and brain health characterization company",
}: {
  title?: string
}) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsContactFormOpen(true)
  }

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-warm-purple">
        <div className="absolute inset-0">
          <ConnectionPaths />
        </div>

        <div className="relative z-10 w-full py-16 md:py-24">
          <div className="w-full px-4 md:container md:mx-auto md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 
                className="heading-style text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Koios Care
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12 md:mb-16"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4">
                  A neurology-focused digital medicine company
                </p>
                <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
                  Combining data, software AI and medicine to improve patient outcomes at lower costs, <br className="hidden sm:inline" /> 
                  Starting with Parkinson's Disease
                </p>
              </motion.div>

              {/* Solution Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                {[
                  { href: "/solutions/individuals", label: "For Patients", subtext: "Improve your quality of life", delay: 0.6 },
                  { href: "/solutions/pharma", label: "For Pharma", subtext: "Optimize trials & deliver drug+ solutions", delay: 0.7 },
                  { href: "/solutions/care-providers", label: "For Providers", subtext: "Enhance patient care", delay: 0.8 },
                  { type: "button", onClick: handleContactClick, label: "Get in Touch", subtext: "Let's discuss your needs", delay: 0.9 }
                ].map((button) => (
                  <motion.div
                    key={button.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: button.delay }}
                    className="w-full"
                  >
                    {button.href ? (
                      <Link
                        href={button.href}
                        className="block group relative bg-white/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative w-full rounded-[1.15rem] px-6 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md body-style">
                          <div className="flex flex-col items-start">
                            <span className="text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity mb-1">{button.label}</span>
                            <span className="text-sm opacity-70 group-hover:opacity-90 transition-opacity">{button.subtext}</span>
                          </div>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2">
                            <span className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={button.onClick}
                        type="button"
                        className="w-full group relative bg-white/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative w-full rounded-[1.15rem] px-6 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md body-style">
                          <div className="flex flex-col items-start">
                            <span className="text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity mb-1">{button.label}</span>
                            <span className="text-sm opacity-70 group-hover:opacity-90 transition-opacity">{button.subtext}</span>
                          </div>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2">
                            <span className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                          </div>
                        </div>
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  )
}

