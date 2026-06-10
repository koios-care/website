'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: '/pic1.png', alt: 'Inspirational Person 1' },
  { src: '/pic2.png', alt: 'Inspirational Person 2' },
  { src: '/pic3.png', alt: 'Inspirational Person 3' },
  { src: '/pic4.png', alt: 'Inspirational Person 4' },
  { src: '/pic5.png', alt: 'Inspirational Person 5' },
  { src: '/pic6.png', alt: 'Inspirational Person 6' },
  { src: '/pic7.png', alt: 'Inspirational Person 7' },
  { src: '/pic8.png', alt: 'Inspirational Person 8' },
  { src: '/pic10.png', alt: 'Inspirational Person 10' },
  { src: '/pic11.png', alt: 'Inspirational Person 11' },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [])

  // Calculate positions for the semi-circular arrangement of thumbnails
  const getThumbPosition = (index: number) => {
    const totalThumbs = images.length
    const radius = 120 // Increased radius for more spacing
    // Use only the right half of the circle (from -PI/2 to PI/2)
    const angleStep = Math.PI / (totalThumbs - 1)
    const startAngle = -Math.PI / 2 // Start from top
    const angle = startAngle + index * angleStep
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }

  return (
    <div className="relative h-[500px] w-[400px]"> {/* Increased width to accommodate thumbnails */}
      {/* Main image */}
      <div className="relative h-[500px] w-[300px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-purple/80 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Semi-circular preview images */}
      <div className="absolute top-0 -right-4 h-full w-24 pointer-events-none">
        <div className="absolute inset-0">
          {images.map((image, index) => {
            const pos = getThumbPosition(index)
            return (
              <motion.div
                key={image.src}
                className={`absolute pointer-events-auto ${
                  index === currentIndex ? 'z-10' : 'z-0'
                }`}
                style={{
                  left: '0%',
                  top: '50%',
                }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: index === currentIndex ? 1.2 : 1,
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                <div
                  className={`relative h-10 w-10 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === currentIndex ? 'ring-2 ring-white shadow-lg' : 'hover:opacity-80'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 