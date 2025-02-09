"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ConnectionPaths() {
  // Define the base unit size for the pattern
  const unit = 200;
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
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice">
        <title>Connection Points</title>
        
        {/* L-shaped connections */}
        {[
          // Top section - spaced out
          { x: 400, y: 200, dir: 'tr', delay: 0 },
          { x: 800, y: 200, dir: 'tl', delay: 2 },
          { x: 1200, y: 200, dir: 'tr', delay: 4 },
          // Middle section (sparse to leave space for content)
          { x: 400, y: 500, dir: 'br', delay: 3 },
          { x: 1200, y: 500, dir: 'bl', delay: 5 },
          // Bottom section
          { x: 400, y: 800, dir: 'br', delay: 1 },
          { x: 800, y: 800, dir: 'bl', delay: 3.5 },
          { x: 1200, y: 800, dir: 'br', delay: 6 }
        ].map((shape, index) => (
          <motion.path
            key={`l-shape-${index}`}
            d={createLShape(shape.x, shape.y, shape.dir as any)}
            stroke="#E4C1D5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 4,
              delay: shape.delay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4
            }}
          />
        ))}

        {/* Connection points at corners */}
        {[
          // Top section dots - spaced out
          [400, 200, 0], [600, 200, 2], [800, 200, 4], [1000, 200, 1], [1200, 200, 3],
          // Middle sparse section dots
          [400, 500, 2.5], [1200, 500, 4.5],
          // Bottom section dots
          [400, 800, 1.5], [600, 800, 3.5], [800, 800, 5], [1000, 800, 2], [1200, 800, 4]
        ].map(([cx, cy, delay], index) => (
          <motion.circle
            key={`point-${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="#E4C1D5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        ))}

        {/* Right-pointing arrows - more spaced out timing */}
        {[200, 500, 800].map((y, index) => (
          <motion.path
            key={`arrow-${y}`}
            d="M1350 -30 L1400 0 L1350 30"
            stroke="#E4C1D5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transform={`translate(0, ${y})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 3,
              delay: 4 + index * 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
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
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-warm-purple">
      <div className="absolute inset-0">
        <ConnectionPaths />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 text-white">
            {title}
          </motion.h1>

          {/* Publications Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <Link
              href="/publications"
              className="inline-flex items-center text-sm text-white hover:text-[#E4C1D5] transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Connecting patients, AI and technology to improve neuro and brain health
            </Link>
          </motion.div>

          {/* Mission Button */}
          <div className="inline-block group relative bg-white/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-600">
            <Link
              href="#mission-vision"
              scroll={true}
              className="block"
            >
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">Our Mission</span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">→</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

