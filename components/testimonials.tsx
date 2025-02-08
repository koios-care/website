'use client'

import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    quote: "Koios Care insights are helping me to clearly communicate how disease and treatment is affecting my life with my doctor.",
    author: "Patient with Parkinson's Disease"
  },
  {
    quote: "In my current scheme - sometimes I forgot that I have Parkinson's.",
    author: "Long-term Patient"
  },
  {
    quote: "The continuous monitoring helps me understand my symptoms better.",
    author: "Recent Patient"
  },
  {
    quote: "The passive monitoring approach makes it so easy to track my daily progress.",
    author: "Patient using Koios Care"
  },
  {
    quote: "Being able to share objective data with my doctor has improved our discussions significantly.",
    author: "Long-term Care Patient"
  },
  {
    quote: "It's amazing how much insight I get about my condition without any extra effort.",
    author: "New Patient"
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
    <section className="py-20" style={{ backgroundColor: '#E4C1D5' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl font-bold mb-4" 
            style={{ color: '#D25137' }}
          >
            What Our Patients Are Saying
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
                    className="relative p-8 mx-4 bg-white/90 rounded-2xl shadow-lg"
                  >
                    <div 
                      className="absolute top-4 left-4 text-6xl opacity-20" 
                      style={{ color: '#D25137' }}
                    >
                      "
                    </div>
                    <blockquote className="relative z-10 text-lg md:text-xl leading-relaxed pt-4 text-center">
                      {testimonial.quote}
                      <footer className="mt-4 text-sm text-warm-purple font-medium">
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
                    ? 'bg-warm-purple w-4' 
                    : 'bg-warm-purple/30'
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
          <p 
            className="text-sm font-medium" 
            style={{ color: '#5B112F' }}
          >
            Collaboration with 5 hospitals aiming to prove health outcomes and economic utility.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 