'use client'

import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

function GraphicElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1600 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <title>Graphic Elements</title>
        {/* Grid pattern - expanded horizontally */}
        {[0, 1, 2].map((row) => (
          <g key={row}>
            {[0, 1, 2, 3, 4, 5, 6].map((col) => {
              const x = 200 + col * 200
              const y = 150 + row * 150
              return (
                <motion.circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#FFFFFF"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: (row * 7 + col) * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                />
              )
            })}
          </g>
        ))}
        
        {/* Horizontal connecting lines */}
        {[0, 1, 2].map((row) => (
          <g key={`line-${row}`}>
            <motion.path
              d={`M200 ${150 + row * 150} L1400 ${150 + row * 150}`}
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{
                duration: 3,
                delay: row * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1.5
              }}
            />
          </g>
        ))}
        
        {/* Vertical connecting lines */}
        {[0, 1, 2, 3, 4, 5, 6].map((col) => (
          <g key={`col-${col}`}>
            <motion.path
              d={`M${200 + col * 200} 150 L${200 + col * 200} 450`}
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{
                duration: 2,
                delay: col * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1.5
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

const testimonials = [
  {
    quote: "Koios Care insights are helping me to quickly identify the patient's pains and offer better care.",
    author: "A.G., Clinician"
  },
  {
    quote: "In my current scheme - sometimes I forgot that I have Parkinson's.",
    author: "P.V.R 53, PwP"
  },
  {
    quote: "The passive monitoring approach makes it so easy to track my daily progress.",
    author: "P.J. 56 Antwerpen"
  },
  {
    quote: "Being able to share objective data with my doctor has improved our discussions significantly.",
    author: "Bert, 55, Ghent"
  },
  {
    quote: "It's amazing how much insight I get about my condition without any extra effort.",
    author: "John, 45, Greece"
  },
  {
    quote: "Q-index is a great tool for a patient-friendly way to track objective data.",
    author: "Top 10 pharma Director"
  }
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 20, // Faster transitions
      skipSnaps: true
    }, 
    [Autoplay({ 
      delay: 3000, // Reduced from 5000 to 3000ms
      stopOnInteraction: false,
      playOnInit: true
    })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative py-20 bg-[#D25137] overflow-hidden">
      <GraphicElements />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Impact on patients lives, providers and researchers.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 mx-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg"
                  >
                    <div className="absolute top-4 left-4 text-6xl opacity-20 text-[#D25137]">
                      "
                    </div>
                    <blockquote className="relative z-10 text-lg md:text-xl leading-relaxed pt-4 text-center">
                      {testimonial.quote}
                      <footer className="mt-4 text-sm text-[#D25137] font-medium">
                        — {testimonial.author}
                      </footer>
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/30'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-medium text-white/90">
          As a Parkinson's patient, you want to stay connected. With yourself, your own body, family & friends, doctors & caregivers
          </p>
        </motion.div>
      </div>
    </section>
  )
} 