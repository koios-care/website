'use client'

import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"

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

const videoTestimonials = [
  {
    title: "Neurologist perspective on remote patient-assessment",
    description: "Neurologist practicing with Koios Care to remotely monitor patient's condition",
    videoId: "CXdxewRlAMU",
    category: "Part 1",
    thumbnail: "/v1.png",
    thumbnailAlt: "Neurologist practicing with Koios Care to remotely monitor patient's condition"
  },
  {
    title: "Patient perspective on remote patient-assessment",
    description: "Sharing personal experience with diseasse and vision on remote patient-assessment",
    videoId: "wJuJwDrOzF4",
    category: "Part 2",
    thumbnail: "/v2.png",
    thumbnailAlt: "Patricia Van Rompuy, Quality and Clinical trial lead at Koios Care"
  },
  {
    title: "The Q-index Study",
    description: "Results of Quality of Life Index clinical trial (ID NCT06209502) in collaboration with leading institutions",
    videoId: "jT12fHfjVlA",
    category: "Part 3",
    thumbnail: "/v3.png",
    thumbnailAlt: "The Q-index study team with clinical trial partners ISPPC, AZ Delta, CHU Liege, and AZ Oostende"
  },
  {
    title: "AI for Parkinson's disease monitoring",
    description: "How we're revolutionizing Parkinsson's disease monitoring with advanced imaging and data analysis",
    videoId: "pUCX9wFhJ7g",
    category: "Part 4",
    thumbnail: "/v4.png",
    thumbnailAlt: "Medical professional analyzing Koios Cae Parkinson's disease monitoring"
  }
]

function VideoSection() {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Watch Our Stories
        </h2>
        <p className="text-white/80">
          Hear directly from healthcare professionals, patients, and our team about their experiences with Koios Care
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoTestimonials.map((video, index) => (
          <motion.div
            key={video.videoId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <a
              href={`https://youtu.be/${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-black/20">
                <Image
                  src={video.thumbnail}
                  alt={video.thumbnailAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm text-white/90 font-medium">
                    {video.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {video.title}
              </h3>
              <p className="text-sm text-white/70">
                {video.description}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 20,
      skipSnaps: true
    }, 
    [Autoplay({ 
      delay: 3000,
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
          className="text-center mt-12 mb-20"
        >
          <p className="text-sm font-medium text-white/90">
            As a Parkinson's patient, you want to stay connected. With yourself, your own body, family & friends, doctors & caregivers
          </p>
        </motion.div>

        {/* Video Testimonials Section */}
        <VideoSection />
      </div>
    </section>
  )
} 